Python 3 required.

## Mac:
```
$ brew install python
$ sudo mv /usr/local/include/block.h /usr/local/include/block.h.old # this file causes an issue with installing hidapi for some raisin.
$ pip3 install hidapi
$ yarn start
```

## Linux:
```
$ sudo ./udev-rules.sh # This adds permissions to interact with the Luxafor USB device.
$ pip install pyusb
$ yarn start
```
