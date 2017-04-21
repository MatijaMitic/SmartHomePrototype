import RPi.GPIO as GPIO
import spidev
import time
import threading
import adconverter

def setup(s):
    global socket
    socket = s
    
def start_checking():
    while True:
        value = adconverter.get_adc(0)
        # Check for fire
        if value < 900:
            pass
        else:
            sound(value)
        time.sleep(0.2)

def start():
    t = threading.Thread(target=start_checking)
    t.start()

# TODO send fire alert to server
def sound(value):
    print("souuuuund: " + str(value))
    socket.send('sound',str(value))
