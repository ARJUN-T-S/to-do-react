import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Nextmain from './Nextmain';

function App() {
  const [style, setStyle] = useState('hidden');
  const [style2, setStyle2] = useState('flex flex-wrap justify-center items-center');
  
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('count');
    return storedCount ? JSON.parse(storedCount) : 1;
  });

  const [arr, setArray] = useState(() => {
    const storedArr = localStorage.getItem('arr');
    return storedArr ? JSON.parse(storedArr) : [];
  });

  const [text, setText] = useState('');

  const isNewDay = () => {
    const today = new Date().toISOString().split('T')[0];
    const currentDay = localStorage.getItem('date');
    const isFirstVisit = localStorage.getItem('firstVisit'); // Check if it's the first visit

    if (!isFirstVisit) {
      // If it's the first visit, skip the day check and set firstVisit flag
      localStorage.setItem('firstVisit', 'true');
      return false; // Skip the new day check for the first visit
    }

    if (today !== currentDay) {
      localStorage.setItem('date', today);
      localStorage.removeItem('arr');
      localStorage.removeItem('count');
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (isNewDay()) {
      setStyle('flex flex-wrap justify-center items-center');
      setStyle2('hidden');
    }
    localStorage.setItem('arr', JSON.stringify(arr));
    localStorage.setItem('count', JSON.stringify(count));
  }, [arr, count]);

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleWork = (event) => {
    event.preventDefault();
    if (text.trim() !== '') {
      const newItem = { id: count, checkbox: false, item: text };
      setArray([...arr, newItem]);
      setCount(count + 1);
      setText('');
    }
  };

  const handleCheck = (id) => {
    const updatedList = arr.map((work) =>
      work.id === id ? { ...work, checkbox: !work.checkbox } : work
    );
    setArray(updatedList);
  };

  const handleDelete = (id) => {
    const updatedList = arr.filter((work) => work.id !== id);
    setArray(updatedList);
  };

  const handleYes = () => {
    const temp = arr.filter((item) => item.checkbox === false);
    setArray(temp);
    setStyle2('flex flex-wrap justify-center items-center');
    setStyle('hidden');
  };

  const handleNo = () => {
    const temp = [];
    setArray(temp);
    setStyle2('flex flex-wrap justify-center items-center');
    setStyle('hidden');
  };

  return (
    <div className="App">
      <Header />
      <Main count={count} arr={arr} text={text} handleText={handleText} handleWork={handleWork} style={style} style2={style2} handleYes={handleYes} handleNo={handleNo}/>
      <Nextmain arr={arr} handleCheck={handleCheck} handleDelete={handleDelete}  />
      <Footer></Footer>
    </div>
  );
}

export default App;
