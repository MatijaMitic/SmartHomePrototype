import dualled
import flame
import water
import time
import sound
import temperature
import touch
import buzzer
import connection

if __name__ == "__main__":
    buzzer.setup()
    buzzer.off()
    dualled.stop()
    socket = connection.PiSocket()
    socket.connect("192.168.1.11",22223)
    flame.setup(socket)
    flame.start()
    water.setup(socket)
    water.start()
    sound.setup(socket)
    sound.start()
    temperature.setup(socket)
    touch.setup(socket)
    touch.start()
    temperature.start()
    """Primamo samo kratke poruke preko socketa duzine 4 bajta
    buzz ili diod
    """
    while True:
        msg = socket.receive()
        if msg == 'buzz-play':
            print ('Start buzzer')
            buzzer.on()
        elif msg == 'buzz-stop':
            print ('Stop buzzer')
            buzzer.off()
        elif msg == 'diod-redd':
            print('Play diode red')
            dualled.start()
            dualled.setColor(dualled.colors[0])
        elif msg == 'diod-blue':
            print('Play diode blue')
            dualled.start()
            dualled.setColor(dualled.colors[2])
        elif msg == 'diod-stop':
            print('Stop diode')
            dualled.stop()
        else:
            print(msg)

        
