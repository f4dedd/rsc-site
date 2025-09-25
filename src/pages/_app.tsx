import { Outlet } from 'react-router'

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