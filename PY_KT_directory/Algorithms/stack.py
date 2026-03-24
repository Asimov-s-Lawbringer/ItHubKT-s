class Stack:
    def __init__(self):
        self.stack = []
    def push(self,elem):
        self.stack.append(elem)
    def pop(self):
        if self.stack:
            return self.stack.pop()
        else:
            return None
    def peek(self):
        if self.stack:
            return self.stack[-1]
        else:
            return None
    def isEmpty(self):  
        if self.stack:
            return False
        else:
            return True
    def size(self):
        if self.stack:
            return len(self.stack)
        else:
            return 0
    def destroy(self):
        self.stack = []
    def reverse(self,string):
        self.destroy()
        result = []
        for character in string:
            self.push(character)
        while not self.isEmpty():
            result.append(self.pop())
        return "".join(result)

ministack = Stack()

#ministack.reverse("Тест")
print(ministack.reverse("123"))
#ministack.destroy()
#print(ministack.stack)

#print(ministack.isEmpty())
