import React, { Fragment } from 'react'
import banner from './kidz_kitchen_banner.png'

const Home = () => (
  <Fragment>
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <img src={banner} className='theBanner' alt='The words kidz kitchen with green, yellow, and red splotches in the background..' />
        <h1>Welcome!</h1>
        <br/>
        <p>
        This app has been created for aspiring young Chefs. Inspired by the developers son, Kidz Kitchen is designed and structured to help kids explore cooking and build confidence in their food skills.
        Great job learning to and continuing to cook. We can smell the tasty treats you are all making.
        </p>
        <p>Already a Kidz Kitchen user? Welcome back!</p>
      </div>
    </div>
  </Fragment>
)

export default Home
