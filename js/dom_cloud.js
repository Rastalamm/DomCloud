window.onload = function (){

  var count = 0;

  function mover(element){

    //base case!
    if(element.childElementCount > 0){
      return;
    }

  //Will go through the body until it his the last child
  //of the first sibling
    element = element.children[count++];
    mover(element);



    count += 1;

    //mover(element);
  }


mover(document.body);

};


