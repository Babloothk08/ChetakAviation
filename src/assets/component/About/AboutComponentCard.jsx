import React from 'react'

function AboutComponentCard() {
  return (
    <div className='h-min-screen text-center px-25'>
      <h1 className='text-4xl font-bold'>A History of Achievements</h1>
      <p>Embraer was founded in 1969, and in more than five decades, we have delivered over 9,000 aircraft to more than 100 countries and 60 armed forces on five continents. We have also designed and certified more than 40 aircraft models that carry our unique DNA.</p>
      <div className='flex max-w-7xl mx-auto'>
        <div className=''>
            <img src="https://www.embraer.com/media/lqfphzwa/phenom-300e_exterior_5.jpg?v=1dbafa4b3f7f230" alt="" className='w-90 h-70'/>
            <h2>PASSION FOR AVIATION</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, architecto eos. Distinctio aspernatur magnam provident repellat maxime nisi quas, sapiente, sint illo, voluptas voluptate! Autem a at amet in voluptas.</p>
        </div>
        <div>
            <img src="https://www.embraer.com/media/ykamihh5/embraer-range.jpg?v=1db1ecc92212910" alt="" className='w-90 h-70' />
            <h2>READY FOR THE FUTURE</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi aspernatur reprehenderit id reiciendis vel quod magni fugit adipisci quia? Tempora impedit porro ducimus! A tenetur blanditiis reprehenderit illum repudiandae! Ipsum?</p>
        </div>
        <div>
            <img src="https://www.embraer.com/media/znhfj3be/embraer-ethos.jpg?v=1db2e93bc7c6220" alt="" className='w-90 h-70'/>
            <h2>CUSTOMER CENTRIC PHILOSOPHY</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sunt temporibus esse mollitia similique, consequatur aspernatur explicabo animi neque blanditiis perferendis delectus reiciendis enim libero cupiditate, totam ipsa illo unde?</p>
        </div>
      </div>
    </div>
  )
}

export default AboutComponentCard
