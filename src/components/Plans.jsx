import React, { useState } from 'react'
import './plans.css'
import arcade from '../images/icon-arcade.svg'
import advanced from '../images/icon-advanced.svg'
import pro from '../images/icon-pro.svg'


export const Plans = () => {

    const [state, setState] = useState({border: '2px soild lightblue'})
  return (
    <div className='plans'>
        <p>You have options of monthly or yearly billing</p>

        <div className='plan-box'>
            <div className='box'>
                <div className='image'>
                    <img src={arcade}/>
                </div>
                

                <p>Arcade</p>
                <span>$9/mo</span>
            </div>
            <div className='box'>
                <div className='image'>
                    <img src={advanced}/>
                </div>
                

                <p>Advanced</p>
                <div>
                    <span>$12/mo</span>
                </div>
            </div>
            <div className='box'>
                <div className='image'>
                    <img src={pro}/>
                </div>

                <p>Pro</p>
                <span>$15/mo</span>
            </div>
        </div>

        <div className='monthly'>monthly</div>
    </div>
  )
}
