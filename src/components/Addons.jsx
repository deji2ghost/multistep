import React, { useState } from 'react'
import './Addons.css'

export const Addons = ({addTotal}) => {

    const [checkedValues, setValues] = useState([])

    const handleOnChange = (e) => {
        const {value, checked} = e.target

        const total = {value, checked}
        addTotal(total)
        if(checked){
            setValues(pre => [...pre,value])
        }else{
            setValues(pre => {
                return [...pre.filter( skill => skill!== value)]
            })
        }
    }

    console.log(checkedValues)

  return (
    <div className='addons'>
        <p>Add-ons help enhance your gaming experience</p>

        <div className='checkbox'>

            <div className='check'>
                <input 
                    type='checkbox'
                    value= 'Service'
                    onChange={handleOnChange}
                />
                <div>
                    <span>online services</span>    <br />                
                    <span>access to multiplayer games</span>                    
                </div>
                <div className='month'>
                    +$1/mo
                </div>
            </div>
            <div className='check'>
                <input 
                    type='checkbox'
                    value= 'Storage'
                    onChange={handleOnChange}
                />
                <div className='inline'>
                    <span>larger storage</span>  <br />
                    <span>Extra 1TB of cloud space</span>
                </div>
                <div className='month'>
                    +$2/mo
                </div>
            </div>
            <div className='check'>
                <input 
                    type='checkbox'
                    value= 'Profile'
                    onChange={handleOnChange}
                />
                <div>
                    <span>customizable profile</span>    <br />
                    <span>custom theme on your profile</span>
                </div>
                <div className='month'>
                    +$2/mo
                </div>
            </div>
        </div>
    </div>
  )
}
