import React from 'react'
import {createRoot} from 'react-dom/client';
import Pet from './Pet';




const App = () => {

  return (
    <>
    <h1>Adopt me</h1>
    <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mix" />
    </>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
