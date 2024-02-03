
import Hero from './components/Hero'
import Service from './components/Service'
import Trusted from './components/Trusted'
import FeatureProduct from './components/FeatureProduct'

const Home = () => {
  const data={
      name:"My Store"
  }
  return (
    <>
    <Hero data={data}/>
    <FeatureProduct/>
    <Service/>
    <Trusted/>
    </>
  )
}

export default Home
