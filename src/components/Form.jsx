import React, { useState } from 'react'
import './form.css'
import { Info } from './Info'
import { Plans } from './Plans'
import { Addons } from './Addons'
import { Summary } from './Summary'

export const Form = () => {
    const [page, setPage] = useState(0)
    const [data, setData] = useState([])

    const formTitles = ['Personal info', 'Select your plan', 'Pick add-ons', 'Finishing up']

    const addTotal = ({value, checked}) => {
        setData((prev) =>{
            return{...prev, value: value, checked:checked}
        })
        console.log(data)
        // console.log(value, checked)
    }

    const displayForm = () => {
        if(page === 0){
            return <Info />
        }else if (page === 1){
            return <Plans />
        }else if (page === 2){
            return <Addons addTotal={addTotal}/>
        }else{
            return <Summary />
        }
    }
  return (
    <section>
        <div className='form'>
            <div className='progressbar'>
                <div className='step1'>
                    <p style={{background: page === 0 ? 'lightblue' : "", color: page === 0 ? 'black' : 'white'}}>1</p>
                    <div className='span'>
                        <span>STEP 1</span>
                        <span>YOUR INFO</span>
                    </div>
                </div>
                <div className='step1'>
                    <p style={{background: page === 1 ? 'lightblue' : "", color: page === 1 ? 'black' : 'white'}}>2</p>
                    <div className='span'>
                        <span>STEP 2</span>
                        <span>SELECT PLAN</span>
                    </div>
                    
                </div>
                <div className='step1'>
                    <p style={{background: page === 2 ? 'lightblue' : "", color: page === 2 ? 'black' : 'white'}}>3</p>
                    <div className='span'>
                        <span>STEP 3</span>
                        <span>ADD-ONS</span>
                    </div>
                </div>
                <div className='step1'>
                    <p style={{background: page === 3 ? 'lightblue' : "", color: page === 3 ? 'black' : 'white'}}>4</p>
                    <div className='span'>
                        <span>STEP 4</span>
                        <span>SUMMARY</span>
                    </div>
                    
                </div>
            </div>
            <div className='form-container'>
                <header>{ formTitles[page] }</header>
                <div className='body'>{ displayForm() }</div>

                <footer>
                    <button
                        disabled={page === 0}
                        onClick={() => setPage((currPage) => currPage - 1)}
                    >{ page === 0 ? '-' : 'Go back' }</button>
                    <button
                        onClick={() => 
                            {
                                if (page === formTitles.length - 1){
                                    alert('form submitted')
                                }else{
                                    setPage((currPage) => currPage + 1)
                                }
                            }
                        }
                    >{ page === 3 ? 'Confirm' : 'Next step'}</button>
                </footer>
            </div>
        </div>
    </section>
    
  )
}
