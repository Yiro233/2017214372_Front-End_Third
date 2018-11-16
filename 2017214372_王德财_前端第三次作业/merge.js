function merge(obj1,obj2){
  var len1 = Object.keys(obj1).length;
  var len2 = Object.keys(obj2).length;
  var obj = (len1>len2?obj1:obj2);
  for(var key in obj){
    if((key in obj1) && (key in obj2)){
      if((obj1[key] instanceof Array) && !(obj2[key] instanceof Array)){
        var arr = obj1[key];
        arr.push(obj2[key])
        obj[key] = arr.sort();
      }
      else if(!(obj1[key] instanceof Array) && (obj2[key] instanceof Array)){     
        var arr = obj2[key];
        arr.push(obj1[key])                                    //对于对象中的键值是否为数组考虑四种情况
        obj[key] = arr.sort();
      }
      else if((obj1[key] instanceof Array) && (obj2[key] instanceof Array)){
        var n = obj1[key].length;
        var arr = obj2[key];
        var arr1 = obj1[key];
        for(var i = 0;i < n;i++){
          arr.push(arr1[i]);
        }
        obj[key] = arr.sort();
      }
      else{
          obj[key] = new Array(obj2[key],obj1[key]).sort();
      }
    } 
  }
  console.log(obj);
}
var obj1 = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1,
  c: 'bar'
}
var obj2 = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo',
  d: 6
}
merge(obj1, obj2)