import React, { useState } from 'react';
import MyButtonBox from './Components/MyButtonBox';
import MyScreen from './Components/MyScreen';
import MyButton from './Components/UI/MyButton/MyButton';
import Wrapper from './Components/Wrapper';

function App() {

   const [calc, setCalc] = useState({
      answ: '',
      num1: '',
      num2: '',
      sign: '',
   })

   const Buttons = [
      'C', '%', '+-', '/',
      '7', '8', '9', 'x',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '.', '0', '=',
   ]

   //TODO: Убрать 0 с начала

   function handlenum1Click(e) {
      e.preventDefault();
      setCalc({
         ...calc,
         num1: calc.num1 + e.target.innerHTML
      })
   }

   function handleClearClick(e) {
      e.preventDefault()
      setCalc({
         ...calc,
         num1: '',
         answ: '',
         num2: '',
         sign: '',
      })
   }

   function handlePercentClick(e) {
      e.preventDefault()
      setCalc({
         ...calc,
         num1: String(+calc.num1 / 100)
      })
   }

   function handleSignClick(e) {
      e.preventDefault()
      setCalc({
         ...calc,
         num1: String(+calc.num1 * -1)
      })
   }

   function handleDivisionClick(e) {
      e.preventDefault()
      if (calc.num1 && calc.num2) {
         setCalc({
            ...calc,
            num2: answer(calc.num1, calc.num2, calc.sign),
            num1: '',
            sign: '/',
         })
      } else if (calc.answ) {
         setCalc({
            ...calc,
            num2: calc.answ,
            answ: '',
            sign: '/',
         })
      } else {
         setCalc({
            ...calc,
            num2: calc.num1,
            num1: '',
            sign: '/'
         })
      }
   }

   function handleMultiplicationClick(e) {
      e.preventDefault()
      if (calc.num1 && calc.num2) {
         setCalc({
            ...calc,
            num2: answer(calc.num1, calc.num2, calc.sign),
            num1: '',
            answ: '',
            sign: '*'
         })
      } else if (calc.answ) {
         setCalc({
            ...calc,
            num2: calc.answ,
            answ: '',
            sign: '*',
         })
      } else {
         setCalc({
            ...calc,
            num2: calc.num1,
            num1: '',
            sign: '*'
         })
      }
   }

   function handleAddClick(e) {
      e.preventDefault()
      if (calc.num1 && calc.num2) {
         setCalc({
            ...calc,
            num2: answer(calc.num1, calc.num2, calc.sign),
            num1: '',
            answ: '',
            sign: "+",
         })
      } else if (calc.answ) {
         setCalc({
            ...calc,
            num2: calc.answ,
            answ: '',
            sign: '+'
         })
      } else {
         setCalc({
            ...calc,
            num2: calc.num1,
            num1: '',
            sign: '+',
         })
      }
   }

   function handleSubClick(e) {
      e.preventDefault()
      if (calc.num1 && calc.num2) {
         setCalc({
            ...calc,
            num1: '',
            answ: '',
            sign: "-",
            num2: answer(calc.num1, calc.num2, calc.sign),
         })
      } else if (calc.answ) {
         setCalc({
            ...calc,
            num2: calc.answ,
            answ: '',
            sign: '-',
         })
      } else {
         setCalc({
            ...calc,
            num2: calc.num1,
            num1: '',
            sign: '-',
         })
      }
   }

   function handleFractionClick(e) {
      e.preventDefault()
      if (calc.num1 || calc.num1 === "0") {
         setCalc({
            ...calc,
            num1: calc.num1 + '.'
         })
      }
   }

   function handleEqualClick(e) {
      e.preventDefault()
      if ((calc.num1 && calc.num2)) {
         setCalc({
            ...calc,
            answ: answer(calc.num1, calc.num2, calc.sign),
            num1: '',
            num2: '',
            sign: '',
         })
      }
   }

   function answer(a, b, sign) {
      let answ
      if (sign === "/" && a === '0') {
         alert('На ноль делить нельзя!')
         answ = '0';
      } else {
         answ = sign === "+" ? String(+a + +b) :
            sign === "-" ? String(+b - +a) :
               (sign === "/" && a !== '0') ? String(+b / +a) :
                  sign === "*" ? String(+b * +a) :
                     String(0)
      }
      return answ
   }

   return (
      <div className="App flex justify-center items-center p-3.5">
         <Wrapper>
            <MyScreen calc={calc} />
            <MyButtonBox>
               {Buttons.map((item, index) => {
                  return (
                     <MyButton
                        key={index}
                        className={item === '=' ? 'col-span-2' : ''}
                        onClick={item === 'C' ? handleClearClick :
                           item === "%" ? handlePercentClick :
                              item === "+-" ? handleSignClick :
                                 item === "/" ? handleDivisionClick :
                                    item === "x" ? handleMultiplicationClick :
                                       item === "-" ? handleSubClick :
                                          item === "+" ? handleAddClick :
                                             item === "." ? handleFractionClick :
                                                item === "=" ? handleEqualClick :
                                                   handlenum1Click
                        }
                     >
                        {item}
                     </MyButton>
                  )
               })}
            </MyButtonBox>
         </Wrapper>
      </div >
   );
}

export default App;
