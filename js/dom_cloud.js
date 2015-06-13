 window.onload = function (){


var masterArr = [];
var masterList = {};

  var mover = function(node){

  masterArr.push(node.nodeName)

    for(var j = 0; j < node.attributes.length; j++){
      console.log(node.attributes[j].name);

      masterArr.push(node.attributes[j].name);
    }

    if(node.children.length > 0){

      for (var i = 0; i < node.children.length; i++) {

        mover(node.children[i]);

      }

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

      masterArr = [];

    });





  };

  mover(document.body);

  var listSorter = [];

  for(var q in masterList){
    listSorter.push([q, masterList[q]])
  }
    listSorter.sort(function(a,b){return  b[1] - a[1]});

  var node;
  for(var p = 0; p < 20; p++){
    node = document.getElementById('dom_cloud_container');

    var divy = document.createElement('div');
    divy.innerHTML = listSorter[p][0];
    divy.style.fontSize = listSorter[p][1] * .1 + 'em';
    //assign stlye size
    node.appendChild(divy);

  }







};

