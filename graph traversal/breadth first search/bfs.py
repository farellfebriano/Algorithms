class Node:
    def __init__(self,val) -> None:
        self.val = val
        self.right=None
        self.left=None

class BinaryTree:
    def __init__(self) -> None:
        self.root=None
        self.length=0

    def insert(self,value):
        self.length+=1
        new_node = Node(value)
        if self.root==None:
            self.root=new_node
            return
        curr=self.root
        while True:
            if new_node.val<curr.val:
                if curr.left==None:
                    curr.left=new_node
                    return
                curr=curr.left
            else:
                if curr.right==None:
                    curr.right=new_node
                    return
                curr=curr.right
    def breadthFirstSearch(self):
        list=[]
        queue=[]
        queue.append(self.root)
        while(len(queue)>0):
            curr = queue.pop(0)
            if curr.left:
                queue.append(curr.left)
            if curr.right:
                queue.append(curr.right)
            list.append(curr.val)
        return list

    def breadthFirstSearchR(self,queue,list):
        if(len(queue)==0):
            return list
        curr = queue.pop(0)
        list.append(curr.val)
        if(curr.left):
            queue.append(curr.left)
        if(curr.right):
            queue.append(curr.right)
        return self.breadthFirstSearchR( queue,list)


myBinarySearch =  BinaryTree()

myBinarySearch.insert(9)
myBinarySearch.insert(20)
myBinarySearch.insert(4)
myBinarySearch.insert(1)
myBinarySearch.insert(-1)
myBinarySearch.insert(15)
myBinarySearch.insert(6)
myBinarySearch.insert(170)
myBinarySearch.insert(180)
myBinarySearch.insert(2000)
list = myBinarySearch.breadthFirstSearch()
listR = myBinarySearch.breadthFirstSearchR([myBinarySearch.root],[])
print(list)
print(listR)
