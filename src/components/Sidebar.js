import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    //Early Return 
    if(!isMenuOpen) return null;
  return (
    <div className='flex flex-col gap-4
     p-5 shadow-lg w-48'>
         <div>
        <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>
      </div>
      <div>
        <h1 className='font-bold'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
      </div>
      <div>
        <h1 className='font-bold'>Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
