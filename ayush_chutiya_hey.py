# Python code to demonstrate the working of
# choice() and randrange()

# importing "random" for random operations
import random

a = int(input())
# using choice() to generate a random number from a
# given list of numbers.
# using randrange() to generate in range from 20
# to 50. The last parameter 3 is step size to skip
# three numbers when selecting.
print (a+random.randrange(20, 50, 3))
