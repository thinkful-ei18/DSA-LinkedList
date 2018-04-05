'use strict';

class _Node {
  constructor(value, next) {
    (this.value = value), (this.next = next);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  insertBefore(newItem, beforeItem) {
    let location = this.find(beforeItem);
    let newNode = new _Node(newItem, location);

    let tempNode = this.head;
    while (tempNode.next.value !== location.value) {
      tempNode = tempNode.next;
    }
    tempNode.next = newNode;
  }
  insertAfter(newItem, afterItem) {
    let location = this.find(afterItem);
    let newNode = new _Node(newItem, location.next);
    location.next = newNode;
    console.log(location);
  }
  insertAt(newItem, position) {
    position = position - 2;
    let newNode = new _Node(newItem, null);
    let currentPosition = this.head;
    for (let i = 0; i < position; i++) {
      currentPosition = currentPosition.next;
    }
    newNode.next = currentPosition.next;
    currentPosition.next = newNode;
    console.log(currentPosition);
  }
  find(item) {
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //Check for the item
    while (currNode.value !== item) {
      //return null if end of the list
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      } else {
        //otherwise keep looking
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }
  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //if the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      //save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

let main = () => {
  let SSL = new LinkedList();

  SSL.insertFirst('Starbuck');
  SSL.insertFirst('Husker');
  SSL.insertFirst('Helo');
  SSL.insertFirst('Boomer');
  SSL.insertFirst('Apollo');
  SSL.insertFirst('Tauhida');
  function display(list) {
    console.log(JSON.stringify(SSL));
  }
  function size(list) {
    let tempNode = SSL.head;
    let size = 0;
    if (tempNode !== null) {
      size = 1;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
        size++;
      }
    }
    return size;
  }
  function isEmpty(list) {
    if (list.head !== null) {
      return 'No';
    }
    return 'Yes';
  }
  function findPrevious(list, location) {
    let tempNode = list.head;
    while (tempNode.next.value !== location) {
      tempNode = tempNode.next;
    }
    return tempNode;
  }
  function findLast(list) {
    let tempNode = list.head;
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    return tempNode;
  }

  //Deleting the pointer
  // O(n^2)
  function WhatDoesThisProgramDo(lst) {
    let current = lst.head; //grabbing first link
    while (current !== null) {
      //current link does not === null
      let newNode = current; //newNode becomes current (head)
      while (newNode.next !== null) {
        //newNode does not === null
        if (newNode.next.value === current.value) {
          //newNode.next value === current value
          newNode.next = newNode.next.next; //newNode.next becomes newNode.next.next
        } else {
          newNode = newNode.next;
          console.log(newNode);
        }
      }
      current = current.next;
    }
  }
  console.log(WhatDoesThisProgramDo(SSL));
};

main();
