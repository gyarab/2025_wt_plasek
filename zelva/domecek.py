#!/usr/bin/env python

import math
import turtle as tut

a = 50
b = math.sqrt(2*math.pow(a, 2))
c = a / math.sqrt(2)

tut.forward(a)
tut.left(135)

tut.forward(b)
tut.right(135)

tut.forward(a)
tut.left(135)

tut.forward(c)
tut.left(90)

tut.forward(c)
tut.left(45)

tut.forward(a)
tut.left(135)

tut.forward(b)
tut.right(135)

tut.forward(a)
tut.left(90)

tut.exitonclick()
