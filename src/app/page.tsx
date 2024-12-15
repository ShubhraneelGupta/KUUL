import Header from '@/components/header'
import Footer from '@/components/footer'
import Hero from '@/components/hero'

export default function Home() {
  return <div className='flex-col'>
    <Header buttons={['Home', 'Events', 'Business', 'Account']}/>
    <Hero/>
    <div className='h-screen w-screen bg-white rounded-xl'></div>
    <Footer/>
  </div>
}