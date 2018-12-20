function stringPermutations(str){
    var result = [];
    if(str.length > 1) {
        var left = str[0];
        var rest = str.slice(1, str.length);
        var pre = stringPermutations(rest);  //递归 取出每一次的字符串中第一个字符 
        for(var i = 0;i < pre.length;i++){   //将第一个字符插入到剩下字符之间
            for(var j = 0;j < (pre[i].length)+1;j++){ //第一次是一个字符插到剩下一个字符的左右两边 第二次是一个字符插到两个字符的任意位置由此形成全排列 字符数逐渐增加
                var tmp = pre[i].slice(0, j) + left + pre[i].slice(j, pre[i].length);
                result.push(tmp);//将排列完成的字符增加到数组中
            }
        }
    } 
    else if (str.length == 1) {
        return [str];
    }
    return result; //返回 若字符串中有n个字符 则会返回n-1次 前n-2次是返回到第6行 最后一次是返回到外部调用处
}

stringPermutations('abcd')