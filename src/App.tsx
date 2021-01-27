import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Appbar from './components/Appbar/Appbar';
import MainContent from './components/MainContent/MainContent';
import Preloader from './components/Preloader/Preloader';
import { AppStateType, OptionsType, requestCards } from './store/app-reducer';

function App() {

  // data for query
  const queryString = useSelector<AppStateType, string>(state => state.queryString);
  const searchOptions = useSelector<AppStateType, OptionsType[]>(state => state.searchOptions);
  const currrentOption = useSelector<AppStateType, string>(state => state.currentOption);
  const currentSize = useSelector<AppStateType, number>(state => state.currentSize);

  const pageSizes = useSelector<AppStateType, number[]>(state => state.pageSizes);
  const isInit = useSelector<AppStateType, boolean>(state => state.isInitializing);
  const cards = useSelector<AppStateType, any[]>(state => state.cards);
    const dispatch = useDispatch();
    useEffect (() => {
        dispatch(requestCards(currrentOption, queryString, currentSize));
    }, []);

  return (
    <div key={1} className="App">
      <Appbar
        queryString={queryString}
        searchOptions={searchOptions}
        currrentOption={currrentOption} />
      <div className="container">
        {
          isInit
            ? <Preloader />
            : <>
              <MainContent cards={cards} />
              <div className="pageSizes">
                {
                  pageSizes.map((s, i) => {
                    return (
                      <div key={i}>
                        {s}
                      </div>
                    )
                  })
                }
              </div>
            </>



        }
      </div>

    </div>
  );
}

export default App;
