import numpy as np
from sklearn import linear_model

x = np.random.uniform(-1,1,101)
y = x+1 + np.random.normal(0,1, len(x))

#Note that x and y must be in specific shape.
x = x.reshape(-1,1)
y = y.reshape(-1,1)

LM  = linear_model.LinearRegression().fit(x,y) #Note I am passing in x and y in column shape

min=10
max=11

predict_me = np.array([ min,max])
predict_me = predict_me.reshape(-1,1)

score = LM.score(x,y)


predicted_values = LM.predict(predict_me)

predictions = {'predicted_value': predicted_values}

print(predictions)

if(predicted_values.all() >= max):
    print 1
else: 
    print 0