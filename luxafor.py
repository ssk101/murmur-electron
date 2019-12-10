#!/usr/bin/python

import os
import requests
import json
import sys
import platform

SLACK_BASE = "https://slack.com/api/"
SLACK_TOKEN = os.getenv('SLACK_LUXAFOR_TOKEN')
SLACK_USER_ID = os.getenv('SLACK_USER_ID')
SLACK_STATUSES = dict({
  'luxa-red': "Please do not disturb",
  'luxa-yellow': "I'm busy, but may respond to urgent requests",
  'luxa-green': "I can be disturbed",
  'luxa-blue': "I can be disturbed, but I can't hear you IRL",
  'hamburger': "Lunch",
  'date': "In a meeting",
  'strut': "Away from keyboard"
})

VENDOR = 0x04d8
PRODUCT = 0xf372
LINUX_LED_OFF = [0, 0]

COLORS = dict({
  "luxa-red": [255, 0, 0],
  "luxa-green": [0, 255, 0],
  "luxa-blue": [0, 0, 255],
  "luxa-yellow": [255, 100, 0],
  "hamburger": [255, 255, 255],
  "date": [255, 255, 255],
  "strut": [255, 255, 255]
})

if platform.system() == "Darwin":
  import hid
  dev = hid.device(VENDOR, PRODUCT)
  dev.open(VENDOR, PRODUCT)
  dev.send_feature_report([0x02, 0x10, 0x00,0x00,0x00,0x00,0x00,0x00])
elif platform.system() == "Linux":
  import usb.core
  import usb.util
  dev = usb.core.find(idVendor = VENDOR, idProduct = PRODUCT)
  if dev is None:
    raise ValueError('Device not found')
  try:
    dev.detach_kernel_driver(0)
  except Exception as error:
    pass
  dev.set_configuration()

def set_slack_status(emoji):
  if not SLACK_TOKEN or not SLACK_USER_ID:
    return 'SLACK_USER_ID or SLACK_TOKEN are not set.'

  data = {
    'token': SLACK_TOKEN,
    'user': SLACK_USER_ID,
    'profile': {
      'status_text': SLACK_STATUSES[emoji],
      'status_emoji': ':' + emoji + ':'
    }
  }

  return requests.post(
    SLACK_BASE + "users.profile.set",
    data = json.dumps(data),
    headers = {
      'Content-Type': 'application/json',
      'Authorization': f"Bearer {SLACK_TOKEN}"
    }
  ).json()

def set_color(emoji):
  if(platform.system() == 'Linux'):
    dev.write(1, LINUX_LED_OFF)
    dev.write(1, bytes([1, 0xff] + COLORS[emoji]))
  elif(platform.system() == 'Darwin'):
    dev.write([0, 1, 0xFF] + COLORS[emoji])

  set_slack_status(emoji)

if __name__ == "__main__":
  print(sys.argv)
  if len(sys.argv) > 1:
    set_color(sys.argv[1])
