export default function FlyList({
  flightNo,
  depTime,
  arrTime,
  price,
  currency,
  airline,
  date,
}) {
  const [depTimeSaat, depTimeDakika] = depTime.split(':');
  const [arrTimeSaat, arrTimeDakika] = arrTime.split(':');

  const depTarih = new Date();
  depTarih.setHours(depTimeSaat, depTimeDakika, 0);

  const arrTarih = new Date();
  arrTarih.setHours(arrTimeSaat, arrTimeDakika, 0);

  const farkMilisaniye = arrTarih.getTime() - depTarih.getTime();

  const farkSaat = Math.floor(farkMilisaniye / (1000 * 60 * 60));
  const farkDakika = Math.floor((farkMilisaniye / (1000 * 60)) % 60);
  const sure = `${farkSaat} sa ${farkDakika} dk`;
  console.log(farkMilisaniye);

  return (
    <div className='bg-white w-[350px] md:w-auto mb-2 border-2 border-black overflow-hidden lg:min-h-[140px]  lg:p-4 rounded-lg md:hover:scale-105  lg:m-4'>
      <table className='w-full border-collapse text-[9px] md:text-lg  '>
        <thead>
          <tr className='bg-gray-200 text-[10px] md:text-xl'>
            <th className='p-2'>Havayolu</th>
            <th className='p-2'>Kuyruk No</th>
            <th className='p-2'>Kalkış</th>
            <th className='p-2'>Süre</th>
            <th className='p-2'>Varış</th>
            <th className='p-2'>Fiyat (kişi)</th>
            <th className='p-2'>Tarih</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-center'>
            <td className='p-2'>{airline}</td>
            <td className='p-2'>{flightNo}</td>
            <td className='p-2'>{depTime}</td>
            <td className='p-2'>{sure}</td>
            <td className='p-2'>{arrTime}</td>
            <td className='p-2'>{`${price} ${currency}`}</td>
            <td className='p-2'>{date}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
