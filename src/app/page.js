"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, desc }]);

    settitle("");
    setdesc("");
  }
  const deletetHandler = (i) => {
   let copytask=[...mainTask]
   copytask.splice(i,1)
   setmainTask(copytask)

  }
  let renderTask = <h2>NO Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex justify-between mb-8 bg-white py-5 px-5' >
          <div className='flex justify-between p-2  w-2/3 '>
            <h5 >{t.title}</h5>
            <h6>{t.desc}</h6>
          </div>
          <button onClick={()=>{
            deletetHandler(i)
          }} className='bg-red-600 rounded-lg text-white p-2'>Delete</button>
        </li>
        
      )


    });
  }
  return (
    <>
      <main>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>iTodo</h1>
      <form onSubmit={submitHandler}>
        <input type='text' className='text-black border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter Title Here'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }} />
        <input type='text' className='text-black border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter Description Here'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />
        <button className='bg-black text-white px-3 py-2 text-2xl rounded m-5 '>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-400 m-4 rounded-sm'>
        <ul>{renderTask}</ul>
      </div>
      </main>
    </>
  )
}

export default page