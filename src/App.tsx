import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Appbar from './components/Appbar/Appbar';
import MainContent from './components/MainContent/MainContent';
import { AppStateType } from './store/app-reducer';

function App() {

  const pageSizes = useSelector<AppStateType, number[]>(state => state.pageSizes);
  const currentSize = useSelector<AppStateType, number>(state => state.currentSize);
  const cards = useSelector<AppStateType, number[]>(state => state.cards);
  const modalIsOpen = useSelector<AppStateType, boolean>(state => state.modalIsOpen);


  return (
    <div className="App">
      <Appbar />
      <MainContent cards={cards} />
      <div className="pageSizes">
        {
          pageSizes.map(s => {
            return(
              <div>
                {s}
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
