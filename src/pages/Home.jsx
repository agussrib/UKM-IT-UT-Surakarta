import { openingText, openingTitle } from "../constanst"

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">{openingTitle}</h1>
      <p className="py-6">{openingText}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Home