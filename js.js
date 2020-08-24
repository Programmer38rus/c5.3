var foo = "furiosa";

function bar(first, second) {
  this.localThis = first;

  console.log(this.localThis * second);
};

new bar(2,3);
