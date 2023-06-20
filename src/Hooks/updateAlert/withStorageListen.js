import React from 'react'

function withStorageListen(Wrapper) {
    return function WrapperWithStorageListen(props) {
        const [updateStorage, setUpdateStorage] = React.useState(false)
        
        window.addEventListener('storage', (e)=>{
            if (e.key === 'TODO_V1') {
                setUpdateStorage(true);
              }
        })

        const toggleUpdate = () =>{
            props.sincronize()
            setUpdateStorage(false)
        }
        return <Wrapper
            update={updateStorage}
            toggleUpdate={toggleUpdate}
        />
    }
}

export {withStorageListen}