# Learning JavaScript
My learning path

# sort()

let arr = [1, 3, 5, 7, 8, 90, 11, 2, 6];

function compare(a, b) {
  return a - b;
}

Data Structures:
________________

-- Array

-- Linked List

-- Stack/Queue

-- Trees (Tree, Binary Tree, Binary Search Tree, Red-Black Tree, etc. Learn as many as you can)

-- Heap

-- Hash Table (this is really important - understand all of the different collision mitigation mechanisms, understand what amortized constant-time means)

-- Directed/Undirected/Weighted Graphs

-- Trie (pronounced "tree")

-- Linked Hash Map (this is very specific, but comes up a LOT in interviews)

You should know the Big-O for insert, delete, lookup, etc. for each of these. Know how the mechanics work. It isn't a good interview questions, but you should be able to code every single one of these. Then, prepare real-world examples of when you'd want to use each of these and explain why it's the best choice. Data Structures come up in technical interviews in two way. The first is in coding questions where you're expected to use the right one at the right time. The second is on a comparison question - not connected to code - "why would you use X over Y in situation Z."


Algorithms
__________

-- Sorting algorithms (both comparison sorting and non-comparison sorting)

-- Tree traversals (just memorize all of these inorder, preorder, postorder, level order)

-- Traversals - Dijkstra's, A*, BFS, DFS (know the difference between DFS and BFS when would you use one over the other and why - hint, is usually matters when you          don't have to search the whole space. Also make sure that you can code recursively and using your own stack/queue)

-- All the prefix-tree searches

<h1>EVENTS</h1>

# Event handler properties

<code>
const btn = document.querySelector('button');

btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
</code>

# addEventListener()

<code>
const btn = document.querySelector('button');

function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', bgChange);
</code>

# Event Objects

<code>function bgChange(e) {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener('click', bgChange);</code>

# stopPropagation()

Method stops the bubbling of an event to parent elements

<code>video.onclick = function(e) {
  e.stopPropagation();
  video.play();
};</code>

# Simple contact search

<code>
export const getFilteredContacts = (contacts, text) => {
  const contactsSearch = text.toLowerCase();

  return contacts.filter(contact => {
    const { first, last } = contact.name;

    return (
      first.toLowerCase().includes(contactsSearch) ||
      last.toLowerCase().includes(contactsSearch)
    );
  });
};

</code>

