import socket, sys

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
msg = b"This is a test from python client"
s.sendto(msg, ('localhost', 20213))
buf, addr = s.recvfrom(1024)
print(buf.decode('utf-8'))

s.close()

