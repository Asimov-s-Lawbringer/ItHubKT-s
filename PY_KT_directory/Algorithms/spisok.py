#Класс узлов списка
class ListNode:
    def __init__(self, val=None, next=None, past=None):
        self.val = val
        self.next = next
        self.past = past
    def __repr__(self):
        return f"Узел со значением {self.val}"

#Класс самого списка    
class LinkedList:
    def __init__(self, value=None):
        self.head = ListNode(value) #Узел в начале списка
        self.tail = self.head #Узел в концprint("ZOV")е списка
        self.length = 1 #Длина списка
    
    #Добавление узла в конец списка
    def append(self, val):
        newNode = ListNode(val)
        newNode.past = self.tail
        newNode.next = None
        self.tail.next = newNode
        self.tail = newNode
        self.length += 1

    #Добавление узла в начало списка
    def prepend(self, val):
        newNode = ListNode(val)
        newNode.next = self.head
        newNode.past = None
        self.head.past = newNode
        self.head = newNode
        self.length += 1
       

    def _print(self):
        curNode = self.head
        while(curNode.next != None):
            print(curNode)
            curNode = curNode.next
        print(self.tail)

    def find(self,val):
        curNode = self.head
        while(curNode.next != None):
            curNode = curNode.next
            if curNode.val == val or self.head.val == val:
                return curNode

nodelist = LinkedList(1)
nodelist.prepend(4)
nodelist.prepend(5)
nodelist.prepend(7)
nodelist.prepend(5)
nodelist.prepend(12)
#nodelist._print()
print(nodelist.find(5))
#вася="Alyosha Popovich"
#print(вася)