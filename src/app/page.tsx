import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


export default async function Home() {
  return <div className='flex-col'>
    <Header/>
    <Footer/>
  </div>
}