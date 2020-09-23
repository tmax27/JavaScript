"use strict";
// es5

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.editText = function () {
    this.text = prompt("Что хотите внести в текст? ");
}

const post1 = new Post('George', 'lorem ipsulm', '21.11.2014');
debugger;
post1.editText();
debugger;

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    highlighted = false;
}

AttachedPost.prototype.makeTextHighlighted = function () {
    highlighted = true;
}

const attpost = new AttachedPost('Alex', 'Hello there!', '15.12.2009');
debugger;
attpost.makeTextHighlighted();
debugger;