import React, { useEffect, useState } from 'react';
import './App.css';
import DemoInput from './components/DemoInput/index';
import DemoList from './components/DemoList';

function App() {
  const [demoList, setDemoList] = useState([]);

  useEffect(() => {
    fetch(`/api/demos`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setDemoList(data);
      })
      .catch(err => console.log(err));

    return () => {
      console.log("App Closed!")
    }
  }, []);

  const postDemo = (data: any) => {
    return fetch('/api/demos', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(data)
    })
      .then(res => console.log(res.json()))
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <DemoList demos={demoList} />
      <DemoInput postInput={postDemo} />
    </div>
  );
}

export default App;
