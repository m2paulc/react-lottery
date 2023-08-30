import { useState } from 'react';
import Balls from './Balls';

type MyProps = {
  title: string,
  maxBalls: number,
  maxNum: number;
};

function Lottery (props: MyProps) {
  //defined props
  const { title = 'Lotto', maxBalls = 6, maxNum = 40 } = props;
  //state
  const [nums, setNums] = useState<number[]>(Array.from({ length: maxBalls }));

  // function to handle updating state
  const handleClick = () => {
    //make an array of numbers up to maxNum
    //this are the numbers that random will pick from
    const newArr: number[] = Array.from({ length: maxNum }, (_, i) => i + 1);
    // create an empty array that will hold the generated random numbers
    let randomNum: number[] = [];
    // loop copying newArr and randomly get a number from that array
    // this ensures that there will be no repeat of numbers picked
    for (let a = [...newArr], j = maxBalls; j--;) {
      randomNum = [...randomNum, a.splice(Math.floor(Math.random() * a.length), 1)[0]];
    }
    // console.log(randomNum);
    // set state to randomNum
    setNums(randomNum);

    // const curNums = nums.map(num => {
    //   num = Math.floor(Math.random() * maxNum + 1);
    //   return num;
    // });
    // setNums(curNums);
  };

  return (
    <section className='flex flex-col align-middle justify-center m-8 border-2 border-solid border-sky-500 p-4 rounded-md'>
      <h1 className='text-center'>{ title }</h1>
      <div className='flex justify-center align-middle m-8'>
        { nums.map((num, index) => <Balls key={ index } num={ num } />) }
      </div>
      <button className='bg-sky-500 rounded text-white font-bold text-lg pl-8 pr-8 pt-4 pb-4 mx-auto' onClick={ handleClick }>Generate</button>
    </section>
  );
}

export default Lottery;