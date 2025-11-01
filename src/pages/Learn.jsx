import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Learn() {
  return (
    <>
        <Navbar />
        <div className='mt-8 mb-40 px-4 grid md:grid-cols-3'>
            <Link to='/tutorials/cinematic' className='border border-slate-200 py-8 px-4 rounded-lg shadow-md' >
                <p className="text-lg font-bold leading-tight">
                  🎬 Learn Professional Video Editing — From Raw Footage to Cinematic Results
                </p>
            </Link>
        </div>

    </>

  )
}

export default Learn