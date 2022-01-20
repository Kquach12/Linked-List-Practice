class SLLNode {
    constructor(value){
        this.data = value
        this.next = null
    }
}

class SLL {
    constructor (){
        this.head = null
    }

    addToFront(value){
        let new_node = new SLLNode(value)
        if (this.head == null){
            this.head = new_node
        } else{
            new_node.next = this.head
            this.head = new_node
        }

    }

    removeCurrentHead(){
        this.head = this.head.next
    }

    front(){
        console.log(this.head.data)
    }

    displayList(){
        let currentNode = this.head
        while (currentNode != null){
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
        
    }

    contains(value){
        let runner = this.head
        while (runner != null){
            if (runner.data == value){
                return true
            }
            runner = runner.next
        }
        return false
    }

    length(){
        let runner = this.head
        let counter = 0
        while (runner != null){
            counter++
            runner = runner.next
        }
        return counter
    }

    max(){
        let runner = this.head
        let max = this.head.data
        while (runner != null){
            if (runner.data > max){
                max = runner.data
            }
            runner = runner.next
        }
        return max
    }

    min(){
        let runner = this.head
        let min = this.head.data
        while (runner != null){
            if (runner.data < min){
                min = runner.data
            }
            runner = runner.next
        }
        return min
    }

    average(){
        let runner = this.head
        let sum = 0
        let counter = 0
        while (runner != null){
            sum += runner.data
            counter++
            runner = runner.next
        }
        return sum/counter
    }

    back(){
        let runner = this.head
        while (runner.next != null){
            runner = runner.next
        }
        return runner.data
    }

    removeBack(){
        let runner = this.head
        while (runner.next.next != null){
            runner = runner.next
        }
        runner.next = null
    }

    addBack(value){
        let runner = this.head
        while (runner.next != null){
            runner = runner.next
        }
        runner.next = new SLLNode(value)
    }
}

let linkedList = new SLL

linkedList.addToFront(5)
linkedList.addToFront(4)
linkedList.addToFront(3)
linkedList.addToFront(2)
linkedList.removeCurrentHead()
linkedList.displayList()
linkedList.removeBack()
linkedList.displayList()
linkedList.addBack(10)
linkedList.displayList()
