import {ROWS, COLS} from './config';

// NOTE: ROWS, COLS에는 행의 개수, 열의 개수가 저장되어 있습니다.
// 이 변수를 활용해서 코드를 작성하세요!

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [{x: 3, y: 0},{x: 2, y: 0},{x: 1, y: 0},{x: 0, y: 0}];
  // 먹이의 좌표
  this.fruit = {x: 3, y: 5};
  this.counterSwitch = 'right';
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  this.counterSwitch = 'up';
  console.log('up');
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  this.counterSwitch = 'down';
  console.log('down');
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  this.counterSwitch = 'left';
  console.log('left');
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  this.counterSwitch = 'right';
  console.log('right');
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  console.log(`nextState`);
  
  // 기본 움직임
    if(this.counterSwitch === 'up') {
    this.joints.pop();
    this.joints.unshift({x: this.joints[0].x, y: this.joints[0].y-1});
  } else if(this.counterSwitch === 'down') {
    this.joints.pop();
    this.joints.unshift({x: this.joints[0].x, y: this.joints[0].y+1});
  } else if(this.counterSwitch === 'left') {
    this.joints.pop();
    this.joints.unshift({x: this.joints[0].x-1, y: this.joints[0].y});
  } else if(this.counterSwitch === 'right') {
    this.joints.pop();
    this.joints.unshift({x: this.joints[0].x+1, y: this.joints[0].y});
  }

  // 과일 먹으면 하나 늘어남, 과일 랜덤좌표로 이동
  if(this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y) {
    this.joints.push({ x: this.joints[0].x, y: this.joints[0].y})
    this.fruit = {x: this.fruit.x = Math.floor(Math.random()*COLS), y: this.fruit.y = Math.floor(Math.random()*ROWS)}
    console.log(this.fruit)
  }
  
  // 게임 끝 
  if(this.joints[0].x >= COLS || this.joints[0].y >= ROWS || this.joints[0].x <= -1 || this.joints[0].y <= -1) {
    return false
  }
  // 게임 끝 (꼬리겹침)
  for(let i = 1; i < this.joints.length-1; i++) {
    if(this.joints[0].x === this.joints[i].x && this.joints[0].y === this.joints[i].y) {
      return false
    }
  }

  return true;
}

export default SnakeGameLogic;

