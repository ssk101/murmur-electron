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
  'red': "Do not disturb",
  'yellow': "I am busy, but may respond to urgent requests",
  'green': "Available for shenanigans",
  'blue': "I'm probably not too busy"
})
SLACK_EMOJI_PREFIX = "luxa"

VENDOR = 0x04d8
PRODUCT = 0xf372
LINUX_LED_ON = 1
LINUX_LED_OFF = [0, 0]

MAC_COLORS = dict({
  "red": [0, 1, 0xFF, 255, 0, 0],
  "green": [0, 1, 0xFF, 0, 255, 0],
  "blue": [0, 1, 0xFF, 0, 0, 255],
  "yellow": [0, 1, 0xFF, 255, 255, 0],
})
LINUX_COLORS = dict({
  "red": 82,
  "green": 71,
  "blue": 66,
  "yellow": 89
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

def set_slack_status(color):
  if not SLACK_TOKEN or not SLACK_USER_ID:
    return 'SLACK_USER_ID or SLACK_TOKEN are not set.'

  data = {
    'token': SLACK_TOKEN,
    'user': SLACK_USER_ID,
    'profile': {
      'status_text': SLACK_STATUSES[color],
      'status_emoji': ':' + SLACK_EMOJI_PREFIX + '-' + color + ':'
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

def resolve_color(color):
  orig = color = color.lower()
  if color == 'off':
    color = 'black'
  if len(color) == 7:
    color = (
      int(color[1:3], 16),
      int(color[3:5], 16),
      int(color[5:7], 16)
    )
  elif len(color) == 4:
    color = (
      int(color[1:2] * 2, 16),
      int(color[2:3] * 2, 16),
      int(color[3:4] * 2, 16)
    )
  else:
    raise ValueError('{} is not a valid color code'.format(orig))

  return color

def set_color(color):
  if(platform.system() == 'Linux'):
    dev.write(1, LINUX_LED_OFF)
    dev.write(1, [0, LINUX_COLORS[color]])
    # dev.write(1, bytes([0, 1, 0xFF, 255, 255, 255]))
  elif(platform.system() == 'Darwin'):
    dev.write(MAC_COLORS[color])

  set_slack_status(color)

if __name__ == "__main__":
  print(sys.argv)
  if len(sys.argv) > 1:
    set_color(sys.argv[1])
