class Deko:
    def __init__(self):
        self.deko = []
    def insertToEnd(self,elem):
        self.deko.append(elem)
        print(self.deko)
    def insertToStart(self,elem):
        self.deko.insert(0,elem)
        print(self.deko)
    def popo(self):
        result = self.deko.pop()
        print(result)
        return result
    def popoReverse(self):
        self.deko.reverse()
        result = self.deko.pop()
        self.deko.reverse()
        print(result)
        return result
    def dekSize(self):
        print(len(self.deko))
        size = len(self.deko)
        return size
    def isVoid(self):
        if (len(self.deko)) == 0:
            print("Empty")
            return True
        else:
            print("Not Empty")
            return False
    def printFirst(self):
        print(self.deko[0])
        return self.deko[0]
    def printFirst(self):
        print(self.deko[-1])
        return self.deko[-1]
deko = Deko()
deko.insertToEnd(3)
deko.insertToEnd(7)
deko.insertToEnd(6)
deko.insertToEnd(5)

deko.insertToStart(5)
deko.insertToStart(6)
deko.insertToStart(7)
deko.insertToStart(3)

deko.dekSize()

#print("Hi")