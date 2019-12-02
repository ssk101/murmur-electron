#!/bin/sh

echo '"SUBSYSTEM=="usb", ATTRS{idProduct}=="f372", ATTRS{idVendor}=="04d8", MODE:="666"' > /etc/udev/rules.d/10-luxafor.rules
