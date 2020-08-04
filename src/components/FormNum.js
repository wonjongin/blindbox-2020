import React, { Component, useState } from "react";
import "./FormNum.css";

function FormNum() {
  const [startnum, setStartnum] = useState(null);
  const [endnum, setEndnum] = useState(null);
  const [res, setRes] = useState(0);
  const [message, setMessage] = useState("이(가) 뽑혔습니다.");

  const Random = (min, max) => {
    var seed = Math.random();
    var sub = Number(max) - Number(min) + 1;
    var ran = Number(Math.floor(seed * sub + Number(min)));
    console.log(seed);
    console.log(ran);
    return ran;
  };

  const handleSubmit = (event) => {
    if (startnum == null || endnum == null) {
      // setRes(null);
      alert("숫자는 입력하셔야죠!!");
      console.log("none");
    } else {
      // var seed = Math.random();
      // var sub = Number(endnum) - Number(startnum) + 1;
      // var ran = Number(Math.floor(seed * sub + Number(startnum)));
      var result = Random(Number(startnum), Number(endnum));
      setRes(result);
      setMessage("이(가) 뽑혔습니다.");
      event.preventDefault();
      //alert(`${res} 이(가) 뽑혔습니다.`);
    }
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
          onChange={(e) => setStartnum(e.target.value)}
        />
        <br />
        <input
          name="endnum"
          type="number"
          className="inputnum"
          placeholder="마지막 숫자를 입력하세요"
          value={endnum}
          onChange={(e) => setEndnum(e.target.value)}
        />
        <br />
        <button type="submit" className="sudmitnum">
          뽑기!!
        </button>
      </form>

      {/* <h1>{startnum}</h1>
      <h1>{endnum}</h1>
      <h1>{Number(startnum) + Number(endnum)}</h1> */}
      <h1>
        {res} {message}
      </h1>
      {/* <h1>{Math.random()}</h1> */}
    </div>
  );
}

export default FormNum;
