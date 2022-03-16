import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
function App() {
  // 데이터 바인딩이 쉽다!
  let [postTitle , postTitleChange] = useState(['강남 고기 맛집','강남 고기 맛집 앞집', '강남 고기 맛집 옆집']);
  
  // onclick() => {
  //   1
  // };
  let [count, setCount] = useState(0);
  function click(){
    postTitleChange(['여자 코트 추천','강남 고기 맛집 앞집', '강남 고기 맛집 옆집'] );

  }


  return (
    <div className="App">
    {/* html대신 jsx라는 것을 사용 */}
      <div className="black-nav">
        {/* <div style={{ color : 'blue', fontSize : '30px'}}>개발 Blog</div>  */}
        <div>개발 Blog</div> 
        <button onClick={click}>제목변경</button>
      </div>
      <div className="list">
      <h3>{postTitle[0]}<span onClick={()=>{setCount(count++)}}>👍</span>{count}</h3>
      <p>2월 17일 발행</p>
      <hr/>
      </div>
      <div className="list">
      <h3>{postTitle[1]}</h3>
      <p>2월 18일 발행</p>
      <hr/>
      </div>
      <div className="list">
      <h3>{postTitle[2]}</h3>
      <p>2월 19일 발행</p>
      <hr/>
      </div>
      
    </div>
  );
}

export default App;
