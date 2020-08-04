import React, { Component } from "react";
import "./FormNum.css";

class FormNum extends Component {
  state = { startnum: NaN, endnum: NaN, res: NaN };
  appChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { startnum, endnum } = this.state;
    const { appChange, appClick, appKeyPress } = this;
    // var startnum;
    // var endnum;
    const handleSubmit = (event) => {
      //   if (this.state.endnum != NaN && this.state.startnum != NaN) {
      //     alert(`숫자는 입력하셔야죠..`);
      //     console.log("nan");

      console.log("not nan");
      var res;
      res = Math.floor(Math.random() * this.state.endnum + this.state.startnum);
      event.preventDefault();
      alert(`${res} 이(가) 뽑혔습니다.`);
    };

    return (
      <div className="formnum-box">
        <form className="formnum" onSubmit={handleSubmit}>
          <input
            name="startnum"
            type="number"
            className="inputnum"
            placeholder="시작 숫자를 입력하세요"
            value={startnum}
            onChange={appChange}
          />
          <br />
          <input
            name="endnum"
            type="number"
            className="inputnum"
            placeholder="마지막 숫자를 입력하세요"
            value={endnum}
            onChange={appChange}
          />
          <br />
          <button type="submit" className="sudmitnum">
            뽑기!!
          </button>
        </form>
      </div>
    );
  }
}

export default FormNum;
