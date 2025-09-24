import catIconUrl from "../assets/caticon.png"

export default function Home() {
  return <>
    <div id="about" className="content-section">
        <img src={catIconUrl} alt="ppcat" className="main-icon"></img>
        <div className="subtitle">
          <h1 className="text-4xl font-bold mb-4">Really Silly Club</h1>
          <p className="text-lg text-gray-300">Welcome to our community!</p>
        </div>
    </div>
  </>
}