import React from 'react'
import { withStorageListen } from './withStorageListen'
import './updateAlert.css'

function ChangeAlert({update, toggleUpdate}) {
    if (update) {
        return (
          <div className='update_container'>
            <p onClick={toggleUpdate}>Update tasks</p>
          </div>
        );
      } else {
        return null;
      }
}

const UpdateAlerttWithStorageListener = withStorageListen(ChangeAlert);

export {UpdateAlerttWithStorageListener}