import numpy as np

#Local aliases to get around compiler issues.

S = COMPARTMENTS_SUSCEPTIBLE
E = COMPARTMENTS_EXPOSED
A = COMPARTMENTS_ASYMTOMATIC
T = COMPARTMENTS_TREATABLE
I = COMPARTMENTS_INFECTIOUS
R = COMPARTMENTS_RECOVERED
D = COMPARTMENTS_DECASED

#Constructor.


#Destructor.


#Calculate the derivative.

#Simulate one step.

###Infect some people.

#exposeNumberOfPeople function: 
# 3 parameters, node, g, and number
# node is a pointer to object type 'Node'
#g is an object of type 'GROUP'