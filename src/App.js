/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg'; 
import './App.css';

function App() {

  // state 만드는법, state == 1. 변수 대신 데이터를 저장하는 공간. 2. useState()를 이용해 만들어야 함
  // useState('asdf') == [state데이터, state데이터 변경함수] 형태의 array가 남음
  // 그냥 변수에 담으면 새로고침해야 랜더링되는데.. state는 변경되면 HTML이 자동으로 재 랜더링 됨. 
  // 중요 데이터는 꼭 state로 데이터 바인딩 시키자!
  let [글제목, 글제목변경] = useState(['즐거운 농구교실', '축구는 어려워', '야구는 어려운 스포츠다']);    // es6 destructuring 문법 let [a,b] = [10, 100];
  let [cnt, cnt변경] = useState(0);
  let [icon, icon변경] = useState('▲');

  let fnThumbsUp=()=>{
    cnt변경(cnt += 1)
  }
  // let fnBthClick=()=>{
  //   const 새제목 = JSON.parse(JSON.stringify(글제목)); // deep copy
  //   // const 새제목 = [...글제목]; 
  //   새제목[0] = '강력한 농구슛';
  //   글제목변경(새제목)
  // }

  // let fnSort=()=>{
  //   let 새제목2 = [...글제목]; 

  //   if (JSON.stringify(새제목2) === JSON.stringify([...글제목].sort())) {
  //     새제목2 = [...글제목].sort().reverse();
  //     icon변경('▼');
  //   } else {
  //     새제목2 = [...글제목].sort();
  //     icon변경('▲');
  //   }

  //   글제목변경(새제목2)
  // }

  return (
    <div className="App">
      <div className="black-nav"> 
        <div>운동 Blog</div>  
      </div>
      {/* <button onClick={ fnBthClick }>제목변경</button>
      <button onClick={ fnSort }>정렬{ icon }</button> */}
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ fnThumbsUp }>👍</span> { cnt } </h3>
        <p>2월 17일 발행</p>
         <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] }</h3>
        <p>2월 17일 발행</p>
         <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[2] }</h3>
        <p>2월 17일 발행</p>
         <hr/>
      </div>

      {/* props 문법 */}
      <Modal 글제목={ 글제목 }></Modal>
    </div>
  );
}
//fragment 문법  <></>
function Modal(props){
  return (
    <div className="modal">
        <h2>{ props.글제목[0] }</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}
export default App;
