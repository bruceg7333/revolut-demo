import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Carousel from './components/Carousel';

const App: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <div className="text-center my-8">
        <Button />
      </div>
      <Carousel />
    </div>
  );
};

export default App;