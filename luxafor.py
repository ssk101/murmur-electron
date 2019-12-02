#!/usr/bin/python

import usb.core
import usb.util
import sys

dev = usb.core.find(idVendor=0x04d8, idProduct=0xf372)

if dev is None:
  raise ValueError('Device not found')

try:
  dev.detach_kernel_driver(0)
except Exception as error:
  pass
 
dev.set_configuration()

colors = dict({
  "red": 82,
  "green": 71,
  "blue": 66,
  "yellow": 89
})

def set_color(color):
  dev.write(1, [0, 0])
  dev.write(1, [0, colors[color]])
  print(colors[color])
  # "red" == 82
  # "green" == 71
  # "blue" == 66
  # "yellow" == 89

if __name__ == "__main__":
  print(sys.argv)
  if len(sys.argv) > 1:
    set_color(sys.argv[1])
