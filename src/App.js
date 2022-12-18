import './App.css';
import React from 'react'
import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'
import Card from '../src/components/Card'
import data from './data'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='cards'>
        {data.map((item) => {
          return (
            <Card 
              key={item.id}
              {...item}
            />
          )
        })}
      </div>
    </>
  );
}

export default App;
