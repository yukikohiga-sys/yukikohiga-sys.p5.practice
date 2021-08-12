'use strict';
{
  document.querySelector('button').addEventListener('click', () => {
    const li = document.createElement('li');
    const color = document.querySelector('select');
    li.textContent = `${color.value} - ${color.selectedIndex}`;
    document.querySelector('ul').appendChild(li);
  });
}
function setNonSelect(idname){
  // 未選択状態にする
  var obj = document.getElementById(idname);
  obj.selectedIndex = -1;
}
 function onClick(){
        //1つ目の入力ボックスの値を取得する
        var value1 = document.getElementById("num1").value;
        //2つ目の入力ボックスの値を取得する
        var value2 = document.getElementById("num2").value;
        var value3 = document.getElementById("num3").value;
        //2つ目の入力ボックスの値を取得する
        var value4 = document.getElementById("num4").value;
        //足算する
        var result = parseInt(value1)  + parseInt(value2) + parseInt(value3)  + parseInt(value4)  ;
        //値を設定する
        document.querySelector('.result').innerHTML = result ;
    }

 