from PIL import Image
from math import sin
from math import cos
from math import sqrt

print("--------------: Plasma Effect Generator :--------------")

size = 2048, 2048

myImage = Image.new('RGB',size,color=(255,0,0))

pi = 3.14159

for x in range(size[0]): 
	for y in range(size[1]):
		scale = 1/5
		sx = x/size[0]*360
		sy = y/size[1]*360
		v = 0
		v += sin(sx*scale)
		v += sin((sx+sy)*0.5*scale)
		v += sin(sqrt(scale*scale*(sx*sx+sy*sy)+1))
		r = sin(v*pi)
		g = sin(v*pi+2*pi/3)
		b = sin(v*pi+4*pi/3)
		r = 127.5+r*127.5
		g = 127.5+g*127.5
		b = 127.5+b*127.5
		myImage.putpixel((x,y), (int(r),int(g),int(b)))

myImage.save("plasma.png")
