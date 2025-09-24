import catIconUrl from '../assets/caticon.png'

export default function NotFound() {
  return <>
    <div id="about" className="content-section content-center">
        <img src={catIconUrl} alt="ppcat" className="main-icon"></img>
        <text className="text-5xl">Page Not Found</text>
    </div>
  </>
}