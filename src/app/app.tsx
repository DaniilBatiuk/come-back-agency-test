import { Outlet } from 'react-router-dom'

import './app.scss'

export const App = () => {
  return (
    <div className='wrapper' id='wrapper'>
      <div className='maon__container'>
        <Outlet />
      </div>
    </div>
  )
}
