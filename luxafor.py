#!/usr/bin/python

import sys
import platform
print(platform.system())

vendor = 0x04d8
product = 0xf372

mac = dict({
  "red": [0, 1, 0xFF, 255, 0, 0],
  "green": [0, 1, 0xFF, 0, 255, 0],
  "blue": [0, 1, 0xFF, 0, 0, 255],
  "yellow": [0, 1, 0xFF, 255, 255, 0],
})
linux = dict({
  "red": 82,
  "green": 71,
  "blue": 66,
  "yellow": 89
})

if platform.system() == "Darwin":
  import hid
  dev = hid.device(vendor, product)
  dev.open(vendor, product)
  dev.send_feature_report([0x02, 0x10, 0x00,0x00,0x00,0x00,0x00,0x00])
  colors = mac
elif platform.system() == "Linux":
  import usb.core
  import usb.util
  dev = usb.core.find(idVendor = vendor, idProduct = product)
  colors = linux
  if dev is None:
    raise ValueError('Device not found')
  try:
    dev.detach_kernel_driver(0)
  except Exception as error:
    pass
  dev.set_configuration()


def set_color(color):
  if(platform.system() == 'Linux'):
    dev.write(1, [0, 0])
  dev.write(colors[color])

if __name__ == "__main__":
  print(sys.argv)
  if len(sys.argv) > 1:
    set_color(sys.argv[1])
