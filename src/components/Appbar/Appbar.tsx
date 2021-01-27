import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType, changeCurrentOption, OptionsType } from '../../store/app-reducer';
import s from './Appbar.module.css';

type AppbarType = {
  queryString: string
  searchOptions: OptionsType[]
  currrentOption: string
}

const Appbar: React.FC<AppbarType> = ({ queryString, searchOptions, currrentOption }) => {

  const dispatch = useDispatch();
  
  const queryChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCurrentOption(e.target.value));
  }

  const optionChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if(e.target.value) {
      dispatch(changeCurrentOption(e.target.value));
    }
  }

  return (
    <div className={s.appbar}>
      <div className="container">
        <h1 className={s.title}>Rijksmuseum</h1>
        <div className={s.appForm}>
          <div className={s.selectContainer}>
            <label>Order by:</label>
            <select onChange={optionChangeHandler} value={currrentOption} >
              {
                searchOptions.map((o, i) => {
                  return(
                    <option key={i} value={o.type}>{o.description}</option>
                  )
                })
              }
          </select>
          </div>
          <input 
            className={s.appInput} 
            type="text"
            value={queryString}
            onChange={queryChangeHandler} />
          <button className={s.searchButton}>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Appbar;