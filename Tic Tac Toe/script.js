console.log("Wecome to Tic Tac Toe game")
let playerTurn=new Audio("turn.wav")
let gameOver=new Audio("gameover.wav")
let turn="X"
let gameWon=false;
//function to change turn 
const changeTurn=()=>{
    return turn === "X" ? "0": "X"
}
//function to check for a win
const checkWin=()=>{
    let boxText=document.getElementsByClassName("boxText");
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]
    wins.forEach(e =>{
      if((boxText[e[0]].innerText===boxText[e[1]].innerText) && (boxText[e[2]].innerText===boxText[e[1]].innerText) && (boxText[e[0]].innerText!=="")){
          document.querySelector('.info').innerText = boxText[e[0]].innerText+ " Won"
          gameWon=true;
          gameOver.play()
          document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
          document.querySelector(".line").style.width = "20vw"
          document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
      }
    })
}
//logic
let box=document.getElementsByClassName("container");
Array.from(box).forEach(element=>{
    let boxText=element.querySelector('.boxText')
    element.addEventListener('click',()=>{
        if(boxText.innerText===''){
            boxText.innerText = turn;
            turn = changeTurn();
            playerTurn.play();
            checkWin();
            if(!gameWon){
            document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            }
        }
    })
})
//style button
reset.addEventListener('click',()=>{
    let boxText=document.querySelectorAll('.boxText')
    Array.from(boxText).forEach(element=>{
        element.innerText=""
    })
    turn="X"
    gameWon=false;
    document.querySelector(".line").style.width = "0vw"
    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})


