import {ROWS, COLS} from './config';

// NOTE: ROWS, COLS에는 행의 개수, 열의 개수가 저장되어 있습니다.
// 이 변수를 활용해서 코드를 작성하세요!

let counterSwitch;

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [{x: 3, y: 0}, {x: 2, y: 0}, {x: 1, y: 0},{x: 0, y: 0}];
   // 먹이의 좌표
  this.fruit = {x: 3, y: 5};
  
  // '오른쪽' 버튼을 눌렀을 경우 SnakeGameLogic.prototype.right에 잇는 속성을 
  // 쓸 프로토타입이 필요
 this.nextState()
} 

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  // 위쪽화살표를 눌렀을때는 머리 기준으로 위에 새로 붙여준다
  // this.joints.pop();
  // this.joints.unshift({x:this.joints[0].x, y: this.joints[0].y-1})
  counterSwitch = 1;
  
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  // this.joints.pop();
  // this.joints.unshift({x:this.joints[0].x, y: this.joints[0].y+1})
  counterSwitch = 2;
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  // this.joints.pop();
  // this.joints.unshift({x: this.joints[0].x-1, y: this.joints[0].y})
  counterSwitch = 3;
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  // 오른쪽 화살표 키를 누르면 머리를 기준으로 머리 오른쪽에 붙여주면된다
  // this.joints.pop();
  // this.joints.unshift({x:this.joints[0].x+1, y:this.joints[0].y})
  counterSwitch = 4;
}

SnakeGameLogic.prototype.appleChange = function() {
  //this.fruit = {x: this.fruit.x+Math.floor(Math.random()*10), y: this.fruit.y+Math.floor(Math.random()*10)}
  counterSwitch = 5;
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
    if (counterSwitch === 1) {
    this.joints.pop()
    this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y-1 })
  } else if (counterSwitch === 2) {
    this.joints.pop()
    this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y+1 })
  } else if (counterSwitch === 3) {
    this.joints.pop()
    this.joints.unshift({ x: this.joints[0].x-1, y: this.joints[0].y})
  } else if (counterSwitch === 4) {
    this.joints.pop()
    this.joints.unshift({ x: this.joints[0].x+1, y: this.joints[0].y})
  } 
  if(this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y) {
    this.joints.push({ x: this.joints[0].x, y: this.joints[0].y})
    this.fruit = {x: this.fruit.x+(Math.floor(Math.random()*10)-2), y: this.fruit.y+(Math.floor(Math.random()*10)-2)}
  }
  
 return true
}

export default SnakeGameLogic;
