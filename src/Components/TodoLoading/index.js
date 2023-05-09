import React from 'react'
import './TodoLoading.css'
import { Skeleton } from '@mui/material';

function TodoLoading() {
    
    return (
        <div className='loading_container'>
            <Skeleton variant="rounded" className='skeleton_loader' height={60}/>
        </div>
    )
}

export {TodoLoading}