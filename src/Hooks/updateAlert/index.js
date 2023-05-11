import React from 'react'
import { withStorageListen } from './withStorageListen'

function ChangeAlert({update, toggleUpdate}) {
    console.log(update)
    if (update) {
        return (
          <div>
            <p>Hubo hubo cambios</p>
            <button
              onClick={toggleUpdate}
            >
              Volver a cargar la información
            </button>
          </div>
        );
      } else {
        return null;
      }
}

const UpdateAlerttWithStorageListener = withStorageListen(ChangeAlert);

export {UpdateAlerttWithStorageListener}