#!/usr/bin/env python
import RPi.GPIO as GPIO
import threading
import connection
import copy

TouchPin = 37

tmp = 0

def setup(s):
	GPIO.setup(TouchPin, GPIO.IN, pull_up_down=GPIO.PUD_UP)    # Set BtnPin's mode is input, and pull up to high level(3.3V
        global socket
        socket = s
        
def Print(x):
        
	global tmp
	if x != tmp:
		if x == 0:
			print '    **********'
			print '    *     ON *'
			print '    **********'
			socket.send('touch','on')
		
		if x == 1:
			print '    **********'
			print '    * OFF    *'
			print '    **********'
			socket.send('touch','off')
		tmp = x

def loop():
	while True:
		Print(GPIO.input(TouchPin))

def start():
    t = threading.Thread(target=loop)
    t.start()

def destroy():
	GPIO.cleanup() 
