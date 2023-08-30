import Lottery from './components/Lottery';

function App () {

  return (
    <>
      <main>
        <Lottery title='Mini Daily' maxNum={ 40 } maxBalls={ 6 } />
        <Lottery title='Mini Daily' maxNum={ 10 } maxBalls={ 4 } />
      </main>
    </>
  );
}

export default App;
