function dig(obj,target){
  var key = Object.keys(obj);
  if(!(obj instanceof Object)&&!(target instanceof Object)){
    console.log(undefined);
    return;
  }
  else{
    for(var i = 0;i < key.length;i++){
      if(target == key[i])
        console.log(obj[target]); //在键名数组中匹配
      else{
        dig(obj[key[i]],target); //若本层无匹配 则进入下一层
      }
    }
  }
}
var data = {
    level1: {
      level2: {
        level3: 'some data'
      }
    }
 }
dig(data, 'level2') // { level3: 'some data' }
dig(data, 'level3') // 'some data'
dig(data, 'level4') // undefined