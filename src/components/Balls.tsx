interface MyProps {
  key: number,
  num: number;
}

function Balls (props: MyProps) {
  return (
    <div className='rounded-full bg-rose-500 m-2 text-white w-16 h-16 text-center font-bold text-xl inline-block p-4'>{ props.num }</div>
  );
}

export default Balls;