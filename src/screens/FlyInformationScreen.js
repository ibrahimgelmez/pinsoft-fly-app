import React from 'react'
import TicketInformation from '../components/FlyInformationScreen/TicketInformation'
import PassengerInformation from '../components/FlyInformationScreen/PassengerInformation'
import MainHeader from '../components/FlyInformationScreen/MainHeader'
import MiniHeader from '../components/FlyInformationScreen/MiniHeader'
import InsuranceInformation from '../components/FlyInformationScreen/InsuranceInformation'
import Header from '../components/UI/Header'

function FlyInformationScreen() {
  return (
    <div>
        <Header/>
    <div className="fly-information-container w-full mt-10 flex flex-col justify-center items-center">
        <div className="main-container w-full min-w-max border-1 border-sky-900 shadow-2xl py-2 px-6">
        <MainHeader/>
        <MiniHeader/>
        <TicketInformation/>
        <PassengerInformation/>
        <InsuranceInformation/>
     </div>
    <div className='button flex w-full min-w-[690px] justify-end mt-2'>
            <button type='button' className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-none'>Anasayfa</button>
     </div>
</div>
</div>
  )
}

export default FlyInformationScreen