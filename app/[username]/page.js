import React from 'react'

const username = ({ params }) => {
  return (
    <>

      <div className='cover w-full bg-red-50 relative'>
        <img className='object-cover w-full  h-[300]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4144680/b6662ad3864544b68d3c360f130865b1/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/4.jpg?token-time=1735948800&token-hash=rh_VlJuxdt-Hn24NoUNvn2n7PjqcKffKe64KGuqSjSo%3D" alt="" />
        <div className='absolute -bottom-20 right-[45%] border-white border-2 rounded-full'>
          <img className='rounded-full' width={120} height={120} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4yJFOxcC3gSaF3s5VamxWoHXD8BNzVZ1KA&s" alt="" />
        </div>
      </div>

      <div className="info flex justify-center items-center my-24 flex-col gap-1">
        <div className='font-bold text-lg'>
          @{params.username}
        </div>
        <div className='text-slate-400'>
          Creating Podcasts
        </div>
        <div className='text-slate-400'>
          7,161 members   .449 posts
        </div>
        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-red-100 rounded-lg text-black p-10">
            {/* Show list of all supporters as a leaderboard */}
            <h2 className='text-2xl font-bold my-5 ' >Supporters</h2>
            <ul className='text-black mx-5  text-lg'>
              <li className='my-4 flex gap-2 items-center'>
                <img width={30} src="avatar.gif" alt="user avatar" />
                <span>
                  Suhana donated <span className='font-bold'> $50 </span> with a message "I support you bruh. Lots of ❤️"
                </span>
              </li>
              <li className='my-2 flex gap-4 items-center'>
                <img width={30} src="avatar.gif" alt="user avatar" />
                <span>
                  Suhana donated <span className='font-bold'> $50 </span> with a message "I support you bruh. Lots of ❤️"
                </span>
              </li>
              <li className='my-2 flex gap-4 items-center'>
                <img width={30} src="avatar.gif" alt="user avatar" />
                <span>
                  Suhana donated <span className='font-bold'> $50 </span> with a message "I support you bruh. Lots of ❤️"
                </span>
              </li>
            </ul>
          </div>
          <div className="makePayment w-1/2 bg-slate-400 rounded-lg text-white p-10">
            <h2 className='text-2xl font-bold my-5 ' >Make a Payment</h2>
            <div className='flex gap-2 flex-col'>
              {/* input for name and message */}
              <div>
                <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
              </div>
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />

              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />

              <button type="button" className="text-white bg-gradient-to-br from-purple-700 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
            </div>
            {/* Or choose from these amounts  */}
            <div className='flex flex-col md:flex-row gap-2 mt-5'>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay ₹10</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay ₹20</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay ₹30</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default username
