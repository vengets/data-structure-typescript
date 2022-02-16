export class BinarySearchTree {

    private left: BinarySearchTree;
    private value: number;
    private right: BinarySearchTree;

    constructor(value: number) {
        this.value = value;
    }

    insertNode(value: number) {
        let currNode = this as BinarySearchTree;
        let newNode = new BinarySearchTree(value);
        let prevNode = currNode;
        while (currNode != null) {
            prevNode = currNode;
            if (currNode.value < value) {
                currNode = currNode.right;
            } else {
                currNode = currNode.left;
            }
        }
        if (value < prevNode.value) {
            prevNode.left = newNode;
        } else
            prevNode.right = newNode;

        console.log(`Node created and inserted ${value}`)
    }

    inorder() {
        let result: BinarySearchTree[] = []
        this.inorderTraversal(this, result);
        return result.map(r => r.value);
    }

    inorderTraversal(node: BinarySearchTree, result: BinarySearchTree[]) {
        if(node == null)
            return;
        this.inorderTraversal(node.left, result);
        result.push(node);
        this.inorderTraversal(node.right, result);
    }

    removeNode(value: number, node: BinarySearchTree = null) {
        if(value < this.value) {
          if(this.left !== null)
              this.left.removeNode(value, this);
        } else if (value > this.value) {
            if(this.right !== null) {
                this.right.removeNode(value, this);
            }
        } else {
            if(this.left !== undefined && this.right !== undefined) {
                this.value = this.right.minValue();
                this.right.removeNode(this.value, this);
            } else if(node == undefined) {
                if(this.left !== null) {
                    this.value = this.left.value;
                    this.right = this.left.right;
                    this.left = this.left.left;
                } else if(this.right !== null) {
                    this.value = this.right.value;
                    this.right = this.right.right;
                    this.left = this.right.left;
                } else {
                    //Single node tree, do nothing
                }
            } else if(node.left === this) {
                node.left = this.left !== null ? this.left : this.right;
            } else if(node.right === this) {
                node.right = this.left !== null ? this.left : this.right;
            }
        }
        return this;
    }

    minValue() {
        if(this.left == undefined) {
            return this.value;
        } else {
            return this.left.minValue();
        }
    }
}
