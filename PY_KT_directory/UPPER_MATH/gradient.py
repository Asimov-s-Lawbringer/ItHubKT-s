#Для одной переменной где граддиент просто производная, и только для функции x^2
def gradient_1_variables(start_x, step, repeats):
    x = start_x
    
    for i in range(repeats):
        gradient = 2 * x
        x = x - step * gradient
    return x

result = gradient_1_variables(10, 0.1, 50)
print(result)

#Для двух переменных и только для функции x^2+y^2
def gradient_2_variables(x, y, step, repeats):
    for i in range(repeats):
        grad_x = 2 * x  
        grad_y = 2 * y 

        x = x - step * grad_x
        y = y - step * grad_y
        
    return x, y

#Для двух переменных универсальная версия
def function(x, y):
    return x**2 + y**2  

def get_gradients(x, y, delta=0.0001):
    grad_x = (function(x + delta, y) - function(x, y)) / delta
    grad_y = (function(x, y + delta) - function(x, y)) / delta
    
    return grad_x, grad_y

def gradient_descent(start_x, start_y, lr, epochs):
    x, y = start_x, start_y
    for _ in range(epochs):
        gx, gy = get_gradients(x, y)
        x = x - lr * gx
        y = y - lr * gy
    return x, y
