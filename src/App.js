import React from 'react';
import Num from './Num'
import Point from './Point'
import Heur from './Heur'

function App() {
  var contenur = { marginLeft: '45px' };
  var sousconteneurone = { display: 'flex', fontSize: '70px' };
  var sousconteneurtwo = { display: 'flex', marginTop: '-75px',color:'#9CA6A5' };
  var sousconteneurtwoone = { marginLeft: '20px'};
  var sousconteneurtwotwo = { marginLeft: '51px' };
  var sousconteneurtwothree = { marginLeft: '36px' };

  return (
    <div style={contenur}>
      <div style={sousconteneurone}>
        <Num ennum='00' />
        <Point />
        <Num ennum='30' />
        <Point />
        <Num ennum='00' />
      </div>
      <div style={sousconteneurtwo}>
        <div style={sousconteneurtwoone}>
          <Heur enlettre='Hour' />
        </div>
        <div style={sousconteneurtwotwo}>
          <Heur enlettre='Minute' />
        </div>
        <div style={sousconteneurtwothree}>
          <Heur enlettre='Second' />
        </div>
      </div>
    </div>
  );
}

export default App;
