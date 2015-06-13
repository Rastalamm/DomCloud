//window.onload = function (){


var masterArr = [];
var masterList = {};

  var mover = function(node){

  console.log(node.nodeName);
  masterArr.push(node.nodeName)

  // for(var j = 0; j < node.attributes.length; j++){
  //   console.log(node.attributes[j].name);
  //   masterArr.push(node.attributes[j].name);
  // }





    if(node.children.length > 0){

      for (var i = 0; i < node.children.length; i++) {

        mover(node.children[i]);

      };
    }else{
      console.log('No more children');
      return;
    }

  masterArr.map(function(current){

    var exists = masterList.hasOwnProperty(current);

    if(exists){
      masterList[current] += 1;
    }else{
      masterList[current] = 1;
    }

  });



};


// mover(document.body);

// };


