class Node:
    def __init__(self,value) -> None:
        self.val=value
        self.next=None
class LinkList:
    def __init__(self) -> None:
        self.head=None
        self.length=0
        self.tail=None

    def add(self,value):
        newNode = Node(value)
        if self.head==None:
            self.head=newNode
            self.tail=self.head
            return

        self.tail.next=newNode
        self.tail=newNode

    def list(self):
        curr = self.head
        arr=[]
        while curr:
            arr.append(curr.val)
            curr=curr.next
        print(arr)

    def reverse(self,head):
        if(head==None or head.next==None):
            self.head=head
            return head
        p = self.reverse(head.next)
        head.next.next=head
        head.next=None
        self.tail=head
        return p




my_link_linst = LinkList()
head = my_link_linst.head
my_link_linst.add(1)
my_link_linst.add(2)
my_link_linst.add(3)
my_link_linst.add(4)
my_link_linst.add(5)
my_link_linst.reverse(my_link_linst.head)
my_link_linst.list()
print(my_link_linst.tail.val)
