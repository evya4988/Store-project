import React from 'react'
import './AddSortOptions.css'
import AddFilter from '../addFilter/AddFilter';
import AddSlider from '../addSlider/AddSlider'

const AddSortOptions = () => {
    return (
        <div className='sort'>
            <AddFilter />
            <AddSlider />
        </div>
    );
}

export default AddSortOptions