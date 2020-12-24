import React, { Fragment } from 'react'
import banner from './kidz_kitchen_banner.png'

const Home = () => (
  <Fragment>
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <img src={banner} className='theBanner' alt='The words kidz kitchen with green, yellow, and red splotches in the background..' />
        <h1>Welcome to Kidz Kitchen</h1>
        <br/>
        <p>
        Kidz Kitchen has been created for you! Inspired by the developers son, Kidz Kitchen is designed and setup to help kids explore cooking and build confidence in their food skills.
        If this is your first visit to Kidz Kitchen Welcome!
        Coming back to checkout your recipes? Welcome back!
        Great job learning to and continuing to cook. We can smell the tasty treats you are all making.
        </p>
      </div>
    </div>
  </Fragment>
)

export default Home
