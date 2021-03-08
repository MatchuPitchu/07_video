import React, { useState } from 'react';
import './bootstrap.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import VideoPlayer from './components/VideoPlayer';
import About from './components/About';

const App = () => {

  const [watchComplete, setWatchComplete] = useState(false);

  const handleWatchComplete = ( {played} ) => {
    console.log(watchComplete);
    console.log(played);
    if(played >= 0.9 && !watchComplete) {
      setWatchComplete(true);
    }
  }

  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/video'>
          <VideoPlayer
            url="https://www.youtube.com/embed/blHjS3Gp2jY" 
            onProgress={handleWatchComplete} />
          <div className={watchComplete ? 'marker marker--is-complete' : 'marker marker--not-complete'}>
            Completed
          </div>
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </>
  );
}

export default App;
