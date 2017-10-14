import numpy as np
from sklearn import linear_model

x = np.random.uniform(-2,2,101)
y = 2*x+1 + np.random.normal(0,1, len(x))

#Note that x and y must be in specific shape.
x = x.reshape(-1,1)
y = y.reshape(-1,1)


LM  = linear_model.LinearRegression().fit(x,y) #Note I am passing in x and y in column shape

predict_me = np.array([ 9,10,11,12,13,14,10,9])
predict_me = predict_me.reshape(-1,1)

score = LM.score(x,y)


predicted_values = LM.predict(predict_me)

predictions = {'predicted_value': predicted_values}

for key in predictions:
    print(predictions['predicted_value'])
    print("\n Last key:")
    print(predicted_values.keys()[-1])