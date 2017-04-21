import RPi.GPIO as GPIO
import time
import threading

Buzzer = 33    # pin11

run = True
on_ = True

def setup():
	global BuzzerPin
	BuzzerPin = Buzzer
	GPIO.setup(Buzzer, GPIO.OUT)
	GPIO.output(Buzzer, GPIO.HIGH)

def on():
	GPIO.output(33, GPIO.LOW)

def off():
	GPIO.output(33, GPIO.HIGH)

def beep(x):
        if on_:
                on()
                time.sleep(x)
                off()
                time.sleep(x)
        else:
                print(on_)
                time.sleep(1)

def loop():
	while run:
		beep(0.5)

def start():
    loop()

def stop():
    on_ = False

def destroy():
	GPIO.output(33, GPIO.HIGH)
	GPIO.cleanup()                     # Release resource
