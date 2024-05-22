import numpy as np

from enum import Enum


class Compartments(Enum):
    SUSCEPTIBLE = 1
    EXPOSED = 2
    ASYMPTOMATIC = 3
    TREATABLE = 4
    INFECTIOUS = 5
    RECOVERED = 6
    DECEASED = 7 


Compartments.SUSCEPTIBLE...

if(thing_to_test == Compartments.SUSCEPTIBLE):
    do the thing


#Local aliases to get around compiler issues.
##write out full names for clarity for future
S = COMPARTMENTS_SUSCEPTIBLE
E = COMPARTMENTS_EXPOSED
A = COMPARTMENTS_ASYMPTOMATIC
T = COMPARTMENTS_TREATABLE
I = COMPARTMENTS_INFECTIOUS
R = COMPARTMENTS_RECOVERED
D = COMPARTMENTS_DECEASED

#Constructor.

class SEATIRD:
    def __init__ (self):
        return

##2nd (copy) constructor might not be needed?

#Destructor.


#Calculate the derivative.

#Simulate one step.

###Infect some people.

#exposeNumberOfPeople function: 
# 3 parameters, node, g, and number
# node is a pointer to object type 'Node'
#g is an object of type 'GROUP'