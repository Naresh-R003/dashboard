import React from 'react'
import './InnerNav.css'
import { FluentPersonSearch32Regular,PhCreditCard,IconamoonNotificationLight,SystemUiconsMessageWriting } from '../Icons'

const InnerNav = ({name}) => {
  
  return (
    <div className='InnerNav'>
      <div>{name && name}</div>
      <div className='InnerNavRight'>
        <select><option value="Select customer">Select customer</option></select>
        <SystemUiconsMessageWriting className="innerNavIcon"/>
        <IconamoonNotificationLight className="innerNavIcon"/>
        <div className='profile'>
            <img src={require('../assets/teceze.png')} alt="profilepic" className='profilepic'/>
            <div className='profileDetails'>
                <div>Teceze</div>
                <div className='profileDetailsInner'><PhCreditCard className="wallet"/>$1213</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default InnerNav
