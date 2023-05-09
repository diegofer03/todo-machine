import React from 'react'
import './todoSearch.css'
import {IoSearchSharp} from 'react-icons/io5'

function TodoSearch({searchText, setSearchText}) {

    const searchInput = (e) => {
        setSearchText(e.target.value)
    }

    return (
        <>
            <section className='search_container'>
                <div className='search_focus'>
                    <span><IoSearchSharp/></span>
                    <input className='todoSearch' value={searchText} placeholder='Search task' onChange={ (e) => {searchInput(e)}}/>
                </div>
            </section>
        </>
    )
}

export {TodoSearch}