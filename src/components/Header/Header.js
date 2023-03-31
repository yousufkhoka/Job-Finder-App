import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearch, changeSort } from '../../features/filter/filterSlice';

const Header = () => {
    const dispatch = useDispatch()
    const {sort} = useSelector(state => state.filter)
    const  [input ,setInput] = useState(sort)
    const hendleSearch =(e) => {
        dispatch(changeSearch(e))
    }
    const hendleSort = (value) => {
        setInput(value)
        dispatch(changeSort(value))
    }
    
    return (
        <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
        <h1 className="lws-section-title">All Available Jobs</h1>
        <div className="flex gap-4">
            <div className="search-field group flex-1">
                <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                <input  onChange={ (e) => hendleSearch(e.target.value)}  type="text" placeholder="Search Job" className="search-input" id="lws-searchJob"/>
            </div>
            <select value={input} onChange={(e) =>hendleSort(e.target.value)} id="lws-sort" name="sort" autoComplete="sort" className="flex-1">
                <option>Default</option>
                <option value={'lowToHigh'}>Salary (Low to High)</option>
                <option value={'highToLow'}>Salary (High to Low)</option>
            </select>
        </div>
    </div>
    );
};

export default Header;