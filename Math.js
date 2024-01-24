import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { IoIosBackspace } from "react-icons/io";
function Math() {
    const [exp,setExp]=useState("")
   const numberClick = (number) => {
      setExp((prevInput) => prevInput + number);
    }; 
    const operatorClick = (operator) => {
      setExp((prevInput) => prevInput + operator);
    };
    const clear=()=>{
        setExp("");
    }
    const backspace=()=>{
        setExp(exp.slice(0,-1))
    }
    const equals = () => {
    const parts = exp.split(/([+\-*/])/);
    let currentOperator = '+';
    let currentResult = 0;
  
    parts.forEach((part) => {
      if (!isNaN(parseFloat(part))) {
        switch (currentOperator) {
          case '+':
            currentResult += parseFloat(part);
            break;
          case '-':
            currentResult -= parseFloat(part);
            break;
          case '*':
            currentResult *= parseFloat(part);
            break;
          case '/':
            currentResult /= parseFloat(part);
            break;
          default:
            break;
        }
      }
  
      if (['+', '-', '*', '/'].includes(part)) {
        currentOperator = part;
      }
    });
  
    setExp(currentResult.toString());
  };
  
  return (
<div>
  <br/><br/><br/>
  <Row>
    <Col md={4}></Col>
    <Col md={4}>
        <div className='box'>
          <h1 className='title'>CALCULATOR</h1>
            <form>
            <input className='input' type="text" value={exp} placeholder='0' onChange={(e) => setExp(e.target.value)} readOnly></input>
            </form>
      <div className='keyboard'>
      <button className="highlight" onClick={clear} id="AC"> AC</button> 
      <button className="highlight" onClick={backspace} id="backspace"><IoIosBackspace /></button>
      <button className="highlight"  onClick={() => operatorClick('/')}>&#247;</button>
      <button className='button' onClick={() => numberClick('7')}>7</button>
      <button className='button' onClick={() => numberClick('8')}>8</button>
      <button className='button' onClick={() => numberClick('9')}>9</button>
      <button className="highlight"  onClick={() => operatorClick('*')}>&times;</button> 
      <button className='button' onClick={() => numberClick('4')}>4</button>
      <button className='button' onClick={() => numberClick('5')}>5</button>
      <button className='button' onClick={() => numberClick('6')}>6</button>
      <button className="highlight"  onClick={() => operatorClick('-')}>-</button>
      <button className='button' onClick={() => numberClick('1')} >1</button>
      <button className='button' onClick={() => numberClick('2')}>2</button>
      <button className='button' onClick={() => numberClick('3')}>3</button>
      <button className="highlight"  onClick={() => operatorClick('+')}>+</button>
      <button className='button' onClick={() => numberClick('0')}>0</button>
      <button className='button' onClick={() => numberClick('.')}>.</button>
      <button  onClick={equals}className="highlight" id="result" >=</button>
    </div>
    </div></Col>
    <Col md={4}></Col>
    </Row>
    </div>
  )
}

export default Math
