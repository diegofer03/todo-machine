import React from 'react'
import './todoCounter.css'
import {CgList} from 'react-icons/cg'
import {IoSparklesOutline} from 'react-icons/io5'
import {TbTrident} from 'react-icons/tb'

function TodoCounter({completed, todo}) {
    return (
        <>
            <section className='header_container'>
                <div className='title_container'>
                    <span><CgList/></span>
                    <h2 className='title'>
                        ToDo's List
                    </h2>
                </div>
                {completed === 0 
                    ? <h3 className='counter'> Get Shit Done < TbTrident/> </h3>
                    : completed === todo 
                        ?  <h3 className='counter'> <IoSparklesOutline/> All Tasks Completed <IoSparklesOutline/></h3>
                        :  <h3 className='counter'> {completed} of {todo} tasks complete</h3> 
                }
            </section>
        </>
    )
}

export {TodoCounter}