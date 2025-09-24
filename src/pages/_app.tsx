import { Outlet } from 'react-router'
import catIconUrl from '../assets/caticon.png'

export default function App() {
  return (
    <>
      <div className='brail-background'></div>
      <main>
        <Outlet />
      </main>
    </>
  )
}