import React, { useState } from 'react';
import './css/styles.css';

const App = () => {
  const [hasta, setHasta] = useState("");
  const [desde, setDesde] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          desde: desde, 
          hasta: hasta
        })
    };
    const peticion = await fetch('http://127.0.0.1:8001/api/export', requestOptions)
        .then(response => response)
        .then(result => console.log(result))
        .catch(err => console.log(err));

      };
    return (
      <>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="date"
              value={desde}
              placeholder="Desde"
              onChange={(e) => setDesde(e.target.value)}
            />
            <input
              type="date"
              value={hasta}
              placeholder="Hasta"
              onChange={(e) => setHasta(e.target.value)}
            />
      
            <button type="submit">Create</button>
  
            </form>
          </div>
        </>
      );
};

export default App;

// const App = () => {
//   const [contador, setContador] = useState(0);
//   const useEffect = () => fetch("http://127.0.0.1:8001/api/export")
//                         .then((response) => response.json());
//   const [peticion, setPeticion] = useState();
//   const peticion = fetch();

//   return (
//     <>
//       <form method='post'>
//         <label htmlFor="desde">Desde</label>
//         <input name='desde' type="date" />
//         <label htmlFor="hasta">Hasta</label>
//         <input name='hasta' type="date" />
//         <input type="submit" />
//       </form>
    
//       {/* <div>
//         <h1>Hola mundo</h1>
//       </div>

//       <p>Contador es igual a: {contador}</p>
//       <button onClick={() => setContador(contador +1)}> +1 </button>
//       <button onClick={() => setContador(contador + -1)}> -1 </button> */}
//     </>
//   )
// };
