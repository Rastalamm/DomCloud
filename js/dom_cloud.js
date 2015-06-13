//window.onload = function (){




  var mover = function(node){
  console.log(node.nodeName);
    if(node.children.length > 0){

      for (var i = 0; i < node.children.length; i++) {

        mover(node.children[i]);

      };
    }else{
      console.log('No more children');
      return;
    }


  };


// mover(document.body);

// };


