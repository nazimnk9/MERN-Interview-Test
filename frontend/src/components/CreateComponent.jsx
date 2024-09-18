import React from 'react'
import { BsTrash } from "react-icons/bs"

const CreateComponent = ({ info, current_component, removeComponent }) => {
    const randValue = Math.floor(Math.random() * 100)
    let html = ''
    if (info.name === "main_frame") {
        html = <div onClick={() => info.setCurrentComponent(info)} className='hover:border-[2px] hover:border-purple-500 shadow-md'
            style={{
                width: info.width + 'px',
                height: info.height + 'px',
                background: info.color,
                zIndex: info.z_index

            }}>
            {
                info.image && <img className='w-full h-full' src={info.image} alt="image" />
            }
        </div>
    }
    if (info.name === "shape" && info.type === "rectangle") {
        html = <div id={randValue} onClick={() => info.setCurrentComponent(info)} style={{
            width: info.width + "px",
            height: info.height + "px",
            background: info.color,
            opacity: info.opacity,
            left: info.left + "px",
            top: info.top + "px",
            zIndex: info.z_index,
            transform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`
        }}
            className='absolute group hover:border-[2px] hover:border-purple-500'
        >
            {
                current_component.id === info.id && <div onClick={() => removeComponent(info.id)} className='px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md'>
                    <BsTrash />
                </div>
            }

        </div>
    }

    return html
}

export default CreateComponent