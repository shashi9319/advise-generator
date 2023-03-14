import React, { useEffect, useState } from 'react';

export default function Advise() {
  const [advise, setAdvise] = useState('');
  const slip_id = Math.round(Math.random() * 100);

  useEffect(() => {
    adviserTurner();
  }, []);

  function adviserTurner() {
    fetch(`	https://api.adviceslip.com/advice/${slip_id}`)
      .then((res) => res.json())
      .then((data) => setAdvise(data.slip));
  }

  return advise ? (
    <div className="card">
      <p>{`#${advise.id}`}</p>
      <h3>{advise.advice}</h3>
      <div className="dice-holder" onClick={adviserTurner}>
        <img className="dice" src="/icon-dice.svg" alt="" />
      </div>{' '}
    </div>
  ) : (
    <>Loading Advise</>
  );
}
