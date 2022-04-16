---
path: "/PortScanner"
cover: "./logo3.png"
date: "2022-03-25"
title: "Port Scanner"
tags: []
published: true
---
 
 
#TCP SYN Port Scanner
<hr>

## Introduction

Ports are simply a software abstraction, used to distinguish between communication channels. Similar to the way IP addresses are used to identify machines on networks, ports identify specific applications in use on a single machine. Port scanning is the act of remotely testing numerous ports to determine what state they are in. The most interesting state is usually open, meaning that an application is listening and accepting connections on the port.
 
There are numerous practical benefits to using port scanning regularly to scan your networks. Foremost among these is security. One of the central tenets of network security is that reducing the number and complexity of services offered reduces the opportunity for attackers to break in. Most remote network compromises come from exploiting a server application listening on a TCP or UDP port. In many cases, the exploited application is not even used by the targeted organization, but was enabled by default when the machine was set up. Had that service been disabled, or protected by a firewall, the attack would have been thwarted.
 
In this project, I implemented my own TCP SYN port scanner. I constructed my own packets from scratch to check for open ports from scratch using sockets. My port scanner takes in an IP address as input and reports which ports are open at that address.
 
## Raw TCP packets
A TCP packet is constructed like this
```
Packet = IP Header + TCP Header + Data
```
## IP Header Structure
 
The structure of IP Header as given by <a href="https://datatracker.ietf.org/doc/html/rfc791">RFC 791</a>  :
```
0                   1                   2                   3
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|Version|  IHL  |Type of Service|          Total Length         |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|         Identification        |Flags|      Fragment Offset    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  Time to Live |    Protocol   |         Header Checksum       |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                       Source Address                          |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Destination Address                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Options                    |    Padding    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```
 
## Structure of TCP header
The structure of a TCP header as given by  <a href="https://datatracker.ietf.org/doc/html/rfc793">RFC 793</a>  :
 
```
0                   1                   2                   3
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|          Source Port          |       Destination Port        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                        Sequence Number                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Acknowledgment Number                      |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  Data |           |U|A|P|R|S|F|                               |
| Offset| Reserved  |R|C|S|S|Y|I|            Window             |
|       |           |G|K|H|T|N|N|                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|           Checksum            |         Urgent Pointer        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Options                    |    Padding    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                             data                              |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```
 
## Raw TCP Socket
A raw socket is created using socket module from Python
```
import socket
 
s = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_TCP)
s.setsockopt(socket.IPPROTO_IP, socket.IP_HDRINCL, 1)
s.sendto(packet, (dst_ip_address, 0))
```
The `AF_INET` signifies the internet Protocol family for the socket. The `SOCK_RAW` signifies that it will be in “raw” mode. The `IPPROTO_TCP` means that it will be sending TCP packets . With the `setsockopt()`, the kernel will not generate an IP header since it is being provided by my program.
 
## Packing Values to Packets
The <a href="https://docs.python.org/3.7/library/struct.html">struct Python module</a> is used to help in working with the binary data.
```
import struct
 
ip_header = struct.pack("!BBHHHBBH4s4s", (ver << 4) + ihl , dscp, total_length, identification, (ip_flags << 13) + fragment_offset, ttl, protocol, header_checksum, src_addr, dest_addr)
final_ip_header = struct.pack("!BBHHHBBH4s4s", (ver << 4) + ihl, dscp, total_length,identification, (ip_flags << 13) + fragment_offset, ttl, protocol, calc_checksum(ip_header), src_addr, dest_addr)
tcp_header = struct.pack("!HHIIBBHHH", src_port, dest_port, seq_num, ack_num, 5 << 4, flags, window_size, checksum,urg_pointer)
pseudo_header = struct.pack("!4s4sBBH", src_addr, dest_addr, checksum, protocol, len(tcp_header))
pseudo_header_emerged = pseudo_header + tcp_header
final_tcp_header = struct.pack("!HHIIBBHHH", src_port, dest_port,seq_num,ack_num, 5 << 4, flags, window_size, calc_checksum(pseudo_header_emerged), urg_pointer)
packet = final_ip_header + final_tcp_header
 
```
 
## TCP SYN Scan
SYN scan is the default and the most popular scan option, since it can performed quickly, scanning thousands of ports per seconds. SYN scan is relatively unobtrusive and stealthy because it neve completes the TCP connections.
 
In TCP SYN scan, we will not complete the three-way handshake of sending a `[ACK]` ourselves and we will terminate the connection after a state is defined.

#### SYN scan of open port 22

<p align="center">
<img src = "https://nmap.org/book/images/ereet/Ereet_Packet_Trace_Syn_Open.png" >
</p>

You send a `[SYN]` packet and then wait for the response.

If a `[SYN ACK]` is received, it indicates that the port is open

<br>

#### SYN scan of closed port 113

<p align="center">
<img src = "https://nmap.org/book/images/ereet/Ereet_Packet_Trace_Syn_Closed.png" >
</p>

You send a `[SYN]` packet and then wait for the response.

If a `[RST]` is received, it indicates that it’s closed.

<br>

#### SYN scan of filtered port 139

<p align="center">
<img src = "https://nmap.org/book/images/ereet/Ereet_Packet_Trace_Syn_Filtered.png" >
</p>

In the case, when multiple `[SYN]` packets are sent and there is no response, these ports will be classified as filtered.

<br>

## Final Code
```
import socket
import struct
 
/*
   Generic checksum calculation function
*/
def calc_checksum( msg):
   s = 0
   for i in range(0, len(msg), 2):
       w = (msg[i] << 8) + msg[i+1]
       s = s + w
   s = (s >> 16) + (s & 0xffff)
   s += s >> 16
   s = ~s
   return s & 0xffff
 
/*
   Building Raw TCP packets
*/
def build_packet(src_ip,dest_ip,port):
   # IP info
   ver = 4
   ihl = 5
   dscp = 0
   total_length = 20
   identification = 23432
   ip_flags = 0
   fragment_offset = 0
   ttl = 32
   protocol = 6
   header_checksum = 0
   src_ip = src_ip
   dest_ip = dest_ip
   src_addr = socket.inet_aton(src_ip)
   dest_addr = socket.inet_aton(dest_ip)
 
   # TCP info
   src_port = 8080
   dest_port = port  
   seq_num = 0
   ack_num = 0
   flags = 2
   window_size = 3200
   checksum = 0
   urg_pointer = 0
 
  
   ip_header = struct.pack("!BBHHHBBH4s4s", (ver << 4) + ihl , dscp, total_length, identification, (ip_flags << 13) + fragment_offset, ttl, protocol, header_checksum, src_addr, dest_addr)
   final_ip_header = struct.pack("!BBHHHBBH4s4s", (ver << 4) + ihl, dscp, total_length,identification, (ip_flags << 13) + fragment_offset, ttl, protocol, calc_checksum(ip_header), src_addr, dest_addr)
   tcp_header = struct.pack("!HHIIBBHHH", src_port, dest_port, seq_num, ack_num, 5 << 4, flags, window_size, checksum,urg_pointer)
   pseudo_header = struct.pack("!4s4sBBH", src_addr, dest_addr, checksum, protocol, len(tcp_header))
   pseudo_header_emerged = pseudo_header + tcp_header
   final_tcp_header = struct.pack("!HHIIBBHHH", src_port, dest_port,seq_num,ack_num, 5 << 4, flags, window_size, calc_checksum(pseudo_header_emerged), urg_pointer)
   packet = final_ip_header + final_tcp_header
 
   return packet
 
 
/*
   Sending the TCP packet to DST address
*/
def send_packet(src_address, dst_address, port):
   s = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_TCP)
   s.setsockopt(socket.IPPROTO_IP, socket.IP_HDRINCL, 1)
   s.settimeout(1.25)
   packet = build_packet(src_address, dst_address, port)
   s.sendto(packet, (dst_address, 0))
   try:
       data = s.recv(4096)
   except:
       data = "filtered"
   s.close()
   return data
 
/*
   Scan domain on 1000 ports
*/
def main(src_address, dst_address):
   for port in range(1000):
       result = send_packet(src_address, dst_address, port)
       if result == "filtered":
           continue
       tcph = struct.unpack('!HHIIBBHHH',result[20:40])
       flags = tcph[5]
       if flags == 18:
           print("Port "+str(port)+ " is open")
 
if __name__ == "__main__":
   src_address = input("Enter your source address: ")
   dst_address = input("Enter your destination address: ")
   main(src_address, dst_address)
 
```
<br>

## Compile and Run

In terminal, type:
```sudo python3 port_scanner.py ```
Then, type in the source ip address. You can get this using the command hostname -I from the command line. Also, type in the destination ip address.
The program will then go through the port 0 to port 999 and send in a custom constructed packet with a timeout of 1.25s. If it exceeds this time, then this port would be filtered. Both filtered and closed ports will be ignored and only opened ports will be printed to the screen.

*Please note that this program is written for Linux only.




### References:

To learn more about TCP SYN Scan:
<br>
https://nmap.org/book/synscan.html

To learn more about port scanning:
<br>
https://nmap.org/book/port-scanning.html
<br>

<a href="https://github.com/rayngan999/PortScanner/blob/main/port_scanner.py"> Github Link </a>