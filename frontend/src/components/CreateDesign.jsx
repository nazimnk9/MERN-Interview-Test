import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import CreateComponent from './CreateComponent'
const CreateDesign = () => {
    const ref = useRef()
    const {state} = useLocation()
    //console.log(state);

    const object = {
        name: "main_frame",
        type: "rectangle",
        id: Math.floor((Math.random()*100)+1),
        width: state.width,
        height: state.height,
        z_index: 1,
        color: "green",
        image: ""
    }
    
  return (
    <div className='w-screen h-screen flex justify-center items-center relative'>
        <div ref={ref} className='relative w-auto h-auto overflow-auto'>
            <CreateComponent info={object} current_component={{}} />
        </div>
    </div>
  )
}

export default CreateDesign