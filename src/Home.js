
import Hero from './components/Hero'
import Service from './components/Service'
import Trusted from './components/Trusted'
import FeatureProduct from './components/FeatureProduct'

const Home = () => {
  const data = {
    name: "My Store"
  }
  return (
    <>
      <div className="home-box" style={{width:"100%"}}>
        <div className="container-fulid">
          <Hero data={data} />
          <FeatureProduct />
          <Service />
          <Trusted />
        </div>
      </div>
    </>
  )
}

export default Home
