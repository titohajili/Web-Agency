
import About from './About/About'
import ClientReview from './ClientReview/ClientReview'
import Hero from './Hero/Hero'
import Order from './Order/Order'
import Price from './Price/Price'
import Services from './Services/Services'
import WhyChoose from './WhyChoose/WhyChoose'

const Home = () => {


  return (
    <div className='overflow-hidden'>
      <Hero/>
      <About/>
      <Services/>
      <WhyChoose/>
      <Price/>
      <ClientReview/>
      <Order/>
    </div>
  )
}

export default Home
