import React from 'react'
import './info.css'

export const Info = () => {
  return (
    <div className='info'>
        <p>Please provide your name, email address,and phone number</p>

        <form>
            <div className='form-input'>
                <label>Name</label>
                <input 
                    placeholder='e.g stephen king'
                    required
                />
            </div>
            <div className='form-input'>
                <label>Email Address</label>
                <input 
                    placeholder='e.g stephenking@lorem.com'
                    required
                />
            </div>
            <div className='form-input'>
                <label>Phone Number</label>
                <input 
                    placeholder='+1 234 567 890'
                    required
                />
            </div>
        </form>
    </div>
  )
}
