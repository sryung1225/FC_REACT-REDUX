import React, { Component } from "react";
import "./Square.css";

class Square extends Component {
  constructor(props) {
    // 클래스형 컴포넌트 사용 시 주의 사항
    // super로 부모 컴포넌트(React.Component)에게 props를 전달해줘야만
    // 생성자 내부에서도 this.props를 정상적으로 사용할 수 있음
    super(props); // --- 1. super에 props를 인자로 전달
    this.state = {
      value: null,
    }; // --- 2. this.state 선언
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: "X" })}>
        {this.state.value} {/* --- 3. 선언된 state 사용 */}
      </button>
    );
  }
}

export default Square;
