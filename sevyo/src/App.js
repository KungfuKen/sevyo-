import React, { useEffect, useState } from 'react';
import './App.css';
import './index.css'
import supabase from './supabaseClient';
import Auth from './Auth'
import Account from './Account'
import Poster from './PosterCard'
import Upload from './UploadFile';
import PosterCard from './PosterCard';

function App() {

  function Popup() {
    const [showPopup, setShowPopup] = useState(false);
    const [inputValue, setInputValue] = useState("");


    const handleSubmit = async(e) => {
      e.preventDefault();
      const { data, error } = await supabase
      .from('phoneNos')
      .insert([
      { number: `${inputValue}` },
    ])}

    const handleChange = (e) => {
      setInputValue(e.target.value);
      console.log(inputValue)
    };

    useEffect(() => {
      setTimeout(() => {
        setShowPopup(true);
      }, 2000);
    }, []);

    return (
      <div className="relative">
        {showPopup && (
          <div className="fixed top-0 left-0 right-0 bottom-0 z-50 p-4 bg-black">
            <div className="bg-gradient-to-r from-teal-900 via-black to-gray-900 p-4 rounded-lg shadow-xl">
              <h3 className="text-lg text-white font-medium mb-2">Hello! Interested in knowing about deals from student focused businesses? 
                Subcribe to our monthly newsletter by entering your WhatsApp number below:</h3>
              <input
                className="mt-2 mb-2 border border-gray-400 rounded-lg p-2"
                type="text"
                value={inputValue}
                onChange={handleChange}
              />
              <button className='text-blue ml-3 bg-white focus:bg-sky-700 rounded-xl w-24' onClick={handleSubmit}>
                Submit
              </button>
              <p></p>
              <button className='text-red mt-6 bg-white focus:bg-red-700 rounded-xl w-24'>
                No Thanks
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }



  return (
    
    <div className='bg-black h-fit w-screen'>
      <div className='bg-blue h-10 w-screen'>
        <Popup />
      </div>
      <PosterCard/>
    </div>

  );
}

{/*
/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
}

export default App;
