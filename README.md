# SmartHomePrototype
SmartHome system implemented using Raspberry Pi & Sunfounder kit.
<p align="center">
		<img src="images/architecture.PNG" width="350"/>
</p>
System is consisted of two components:
<p>
1)Client component was written in Python using GPIO libraries. This component has two functionalities:<br>
	- collecting measurements from sensor and send those data to server.<br>
	- waiting for instructions from server to start some actuators.<br>
	The prototype was realized using following sensors/actuators from Sunfounder kit:<br>
		Dual-Color LED<br>
		Buzzer Module<br>
		Sound sensor<br>
		Flame sensor<br>
		Touch switch<br>
		DS18B20 Temperature sensor<br>
		Rain detection module<br>
		MCP3004 (This module is not described in Sunfounder manual. To connect this module, check following scheme)<br>
	To start client app, run main.py script.
	<p align="center">
		<img src="images/mcp3004.png" width="350"/>
	</p>
</p>
2)Server component was realized using Node.js. To start server, following modules need to be installed:<br>
	-mongodb (npm install mongodb)<br>
	-mongodb (npm install net)<br>
	-mongodb (npm install express)
<p align="center">
  <img src="images/20170421_225806.jpg" width="350"/>
  <img src="images/20170421_225455.jpg" width="350"/>
</p>
<h1>Code description:<h1>
<h2>Client</h2>
