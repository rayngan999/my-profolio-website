---
path: "/PortScanner"
cover: "./logo3.png"
date: "2022-01-10"
title: "Port Scanner"
tags: []
published: true
---


#Nmap Port Scanner
<hr>

<br>

## Introduction

In this project, I implemented my own nmap port scanner. I constructed my own packets from scratch to check for open ports from scratch using sockets. My portscanner takes in an IP address as input and report which ports are open at that address.

## TCP SYN Scan

Illustation of a TCP SYN Scan:

<img src = "https://nmap.org/book/images/ereet/Ereet_Packet_Trace_Syn_Open.png" >

For more detailed explanation of TCP SYN Scan:
https://nmap.org/book/synscan.html

## To Run

*Please note that this program is written for Linux only.

In terminal, type:
```sudo python3 port_scanner.py ```
Then, type in the source ip address. You can get this using the command hostname -I from the command line. Also, type in the destination ip address.
The program will then go through the port 0 to port 999 and send in a custom constructed packet with a timeout of 1.25s. If it exceeds this time, then this port would be filtered. Both filtered and closed ports will be ignored and only opened ports will be printed to the screen.



<a href="https://github.com/rayngan999/PortScanner/blob/main/port_scanner.py
"> Github Link </a>

