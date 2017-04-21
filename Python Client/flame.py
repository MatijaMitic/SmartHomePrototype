import RPi.GPIO as GPIO
import spidev
import time
import threading
import adconverter

def setup(s):
    GPIO.setup(29,GPIO.IN)
    global socket
    socket = s

def start_checking():
    while True:
        # Reading GPO pin
        pin_status = GPIO.input(29)

        # Check for fire
        if pin_status:
            pass
        else:
            fire()

def start():
    t = threading.Thread(target=start_checking)
    t.start()

# TODO send fire alert to server
def fire():
    val = str(adconverter.get_adc(2))
    socket.send('flame',val)
    print("fireeeee " + val)
