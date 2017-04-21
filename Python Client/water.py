import RPi.GPIO as GPIO
import spidev
import time
import threading
import adconverter

def setup(s):
    GPIO.setup(40,GPIO.IN)
    global socket
    socket = s
    
def start_checking():
    while True:
        # Reading GPO pin
        pin_status = GPIO.input(40)

        # Check for fire
        if pin_status:
            pass
        else:
            flood()

def start():
    t = threading.Thread(target=start_checking)
    t.start()

# TODO send fire alert to server
def flood():
    val = adconverter.get_adc(1)
    print("floooood: " + str(val))
    socket.send("flood",str(val))
