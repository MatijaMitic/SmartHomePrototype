import RPi.GPIO as GPIO
import spidev

# GPIO pin initialisation
#GPIO.setmode(GPIO.BCM)

# SPI communication innitialisation
spi = spidev.SpiDev()
spi.open(0,0)

# Read channel from AD converter
def get_adc(channel):
    #Perform SPI transaction and store returned bits in 'r'
    r = spi.xfer([1, (8+channel)<<4, 0])
    #Filter data bits from returned bits
    adcout = ((r[1]&3) << 8) + r[2]
    #Return value from 0-1023
    return adcout
