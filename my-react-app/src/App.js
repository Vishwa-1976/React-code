import React from 'react';
import Welcome from './components/Welcome';
import HelloWorld from './components/HelloWorld';
import Greetings from './components/Greetings';          
function App()
{
  return(
    <div>
    <Welcome/>
    <HelloWorld/>
    <Greetings name="Vishwa"/>
    </div>
  )
}
export default App;