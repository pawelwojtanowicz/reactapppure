import React, { useState, useEffect } from 'react';


export function Example() {
  // Zadeklaruj nową zmienną stanu, którą nazwiemy „count”
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Naciśnięto {count} razy</p>
      <button onClick={() => setCount(count + 1)}>
        Naciśnij mnie
      </button>
    </div>
  );
}

export function Example2() {
  const [count, setCount] = useState(0);

  // Podobnie jak componentDidMount i componentDidUpdate:
  useEffect(() => {
    // Zaktualizuj tytuł dokumentu, korzystając z interfejsu API przeglądarki
    document.title = `Naciśnięto ${count} razy`;
  });

  return (
    <div>
      <p>Naciśnięto {count} razy</p>
      <button onClick={() => setCount(count + 1)}>
        Naciśnij mnie
      </button>
    </div>
  );
}