/*
	ifconfig > temp #Write ifconfig output to a file`
	grep <interface> temp | head -n 1 | cut -d ":" -f 1
	
	Search through ifconfig output file for the interface name, like pcn0
	Use head to only get the first line, which is the line containing the interface
	Cut at the first :, which is immediately after the interface name
	and return the first field, which is the interface name
	
	for loop:
	- one interface
	- number n IPs
	- share BOOTPROTO, ONBOOT, TYPE, NETMASK, GATEWAY, HWADDR (MAC)
	- don't share DEVICE (eth0, eth0:0, etc.), IPADDR, or filename
	- on exit, ifdown and ifup all of them
*/