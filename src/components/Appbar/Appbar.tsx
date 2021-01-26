import { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType, changeCurrentOption, OptionsType } from '../../store/app-reducer';
import s from './Appbar.module.css';

const Appbar = () => {

  const dispatch = useDispatch();
  const searchOptions = useSelector<AppStateType, OptionsType[]>(state => state.searchOptions);
  const currrentOption = useSelector<AppStateType, string>(state => state.currentOption);

  const optionChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if(e.target.value) {
      dispatch(changeCurrentOption(e.target.value));
    }
  }

  return (
    <div className={s.appbar}>
      <div className="container">
        <h1 className={s.title}>Rijksmuseum</h1>
        <div>
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
        
          <input />
          <button>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Appbar;