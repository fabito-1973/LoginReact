import { useState } from 'react';
import './App.css'
import Conversor from './Conversor'

function App() {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [logueado, setLogueado] = useState(false);

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value);
  }

  function cambiarClave(evento) {
    setClave(evento.target.value);
  }

  function ingresar() {
    if (usuario === 'admin' && clave === 'admin') {
      alert('Ingresaste');
      setLogueado(true);
    } else {
      alert('Usuario o clave incorrecta');
    }
  }


  if (logueado) {
    return <Conversor />;
  } else {
    return (
      <>
        <h1>Inicio de sesion</h1>
        <input placeholder="usuario" type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
        <input placeholder="clave" type="password" name="clave" id="clave" value={clave} onChange={cambiarClave} />
        <button onClick={ingresar}>ingresar</button>
      </>
    );
  }
}

export default App
