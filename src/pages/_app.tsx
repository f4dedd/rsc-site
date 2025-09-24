import { Outlet } from 'react-router'
import catIconUrl from '../assets/caticon.png'

export default function App() {
  return (
    <section>
        <head>
            <title>Really Silly Club</title>
            <link rel="icon" type="image/png" href={catIconUrl} />
            <link  href="../index.css" rel="stylesheet"/>
        </head>
        <main>
            <div className='brail-background'></div>
            <Outlet />
        </main>
    </section>
  )
}