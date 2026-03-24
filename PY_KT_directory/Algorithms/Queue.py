class Queue:
    def __init__(self):
        self.queue = []
    def insert(self,elem):
        #self.queue.reverse()
        #self.queue.append(elem)
        #self.queue.reverse()
        self.queue.insert(0,elem)
        print(self.queue)
    def popo(self):
        result = self.queue.pop()
        print(result)
        #return result
    def size(self):
        print(len(self.queue))
    def isVoid(self):
        if len(self.queue)== 0:
            print("True")
            return True
            
        else:
            print("False")
            return False
miniQue = Queue()

miniQue.insert(5)
miniQue.insert(6)
miniQue.insert(7)
miniQue.insert(3)
#miniQue.popo()
#miniQue.size()
miniQue.isVoid()

