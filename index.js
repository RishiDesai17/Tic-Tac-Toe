const canvas = document.getElementById("canvas");
const ref = document.getElementById("button");
const context = canvas.getContext("2d");
const grid = 100;
let flag = true;
let game = true;
let count = 0;
let arr = [[2,3,4],[5,6,7],[8,9,10]];
context.beginPath();
context.moveTo(100,0);
context.lineTo(100,300);
context.moveTo(200,0);
context.lineTo(200,300);
context.moveTo(0,100);
context.lineTo(300,100);
context.moveTo(0,200);
context.lineTo(300,200);
context.stroke();
canvas.addEventListener("mousedown", (event) => {
    let x = event.x;
    let y = event.y;
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;
    let x1 = parseInt(x/100);
    let y1 = parseInt(y/100);
    if(arr[x1][y1]!==1 && arr[x1][y1]!==0 && game){
    if(flag){
      context.beginPath();
      context.moveTo((parseInt(x/100)*100+10),(parseInt(y/100)*100+10));
      context.lineTo((parseInt(x/100)*100+90),(parseInt(y/100)*100+90));
      context.moveTo((parseInt(x/100)*100+10),(parseInt(y/100)*100+90));
      context.lineTo((parseInt(x/100)*100+90),(parseInt(y/100)*100+10));
      context.stroke();
      arr[x1][y1]=1;
      count++;
      flag=!flag;
    }
    else{
      context.beginPath();
      context.arc((parseInt(x/100)*100+50),(parseInt(y/100)*100+50),40,0,2*Math.PI);
      context.stroke();
      arr[x1][y1]=0;
      count++;
      flag=!flag;
    }
      if(count>=5){
        x=1;
        y=1;
        big:for(let i=0;i<3;i++){
          let temp = arr[i][0];
          for(let j=1;j<3;j++){
            if(temp===arr[i][j])
            x++;
            if(x===3){
              if(temp===1){
                document.getElementById("win").innerHTML="Player 1 wins!";
              }
              else{
                document.getElementById("win").innerHTML="Player 2 wins!";
              }
              game = false;
              break big;
            }
          }
          x=1;
        }
        if(x!==3){
          big1:for(let i=0;i<3;i++){
          let temp = arr[0][i];
          for(let j=1;j<3;j++){
            if(temp===arr[j][i])
            y++;
            if(y===3){
              if(temp===1){
                document.getElementById("win").innerHTML="Player 1 wins!";
              }
              else{
                document.getElementById("win").innerHTML="Player 2 wins!";
              }
              game = false;
              break big1;
            }
          }
          y=1;
        }
          if(y!==3){
            temp = arr[1][1];
            if((arr[0][0]===temp && arr[2][2]===temp) || (arr[0][2]===temp && arr[2][0]===temp)){
              if(temp===1){
                document.getElementById("win").innerHTML="Player 1 wins!";
              }
              else{
                document.getElementById("win").innerHTML="Player 2 wins!";
              }
              game=false;
            }
          }
        }    
      }
    }
    if(count===9 && game){
      document.getElementById("win").innerHTML="Draw!";
    }
  });
ref.addEventListener("mousedown", (event) => {
  window.location.reload();
});