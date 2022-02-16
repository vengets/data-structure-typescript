import {BinarySearchTree} from "../src/binary-search-tree";
var log = function(msg) { console.log(msg); };

test('should return tree when calling BinarySearchTree()', () => {
    let tree = new BinarySearchTree(1);
    expect(tree).not.toBeNull();
})

test('should display inorder traversal', () => {
    let values = [4,6,7,5,3,2];
    let tree = new BinarySearchTree(1);
    values.forEach(val => tree.insertNode(val));
    let actualResult = tree.inorder();
    expect(actualResult).toEqual([1,2,3,4,5,6,7]);
})


test('should delete a node successfully', () => {
    let values = [4,6,7,5,3,2];
    let tree = new BinarySearchTree(1);
    values.forEach(val => tree.insertNode(val));
    let newTree = tree.removeNode(4);
    let actualResult = newTree.inorder();

    expect(actualResult).toEqual([1,2,3,5,6,7]);
})
