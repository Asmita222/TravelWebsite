import Head from 'next/head'
import Image from 'next/image'
import BestTripCard from '../Components/BestTripCard';
import SpecialityList from '../Components/organism/SpecialityList';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TravelNepal</title>
      </Head>
      <SpecialityList/>
      <BestTripCard/>
      </div>
  )


}

