//This file uploads the user contents to supabase storage and 
//creates (or updates) the supabase database entry

import React, { useState } from 'react';
import { decode } from 'base64-arraybuffer';
import supabase from './supabaseClient';
import Logo from './Notice_Logo.png';

function UploadFile() {

  //form to allow user to input name, description and 
  //phone number

  const [percent, setPercent] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    phoneNo: "",
    tags:"",
    location:""
  });

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    handleUpload();

    let { data: mediaurl } = await supabase
    .storage
    .from('happeningmedia')
    .createSignedUrl(`${formData.location}/${formData.name}.png`, 6000)
    console.log(mediaurl.signedUrl)

    if(mediaurl != null) {
      const { error } = await supabase
      .from('Cards')
      .insert({ id: 2, name: `${formData.name}`, 
        media: mediaurl.signedUrl, description:`${formData.description}`,
        Tags: `${formData.tags}`, phoneNumber:`${formData.phoneNo}`})
    } 
  };

  //input to allow user to input media file

  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };
  
  const handleUpload = async () => {
    
    const { data, error} = await supabase
      .storage
      .from('happeningmedia')
      .upload(`${formData.location}/${formData.name}.png`, file, {
        cacheControl: '3600',
        upsert: false
      })
  }

  return (
    <div className="bg-black h-screen w-screen items-center">
      <div className='h-fit w-fit items-center'>
        <img src={Logo} alt="Notisbod logo"/>
      </div>
      <form onSubmit={handleSubmit} className="bg-black p-6 rounded-lg shadow-md mt-10px">
        <div className="mb-4">
          <label
            className="block text-[#9ca3af] font-medium mb-2"
            htmlFor="name"
          >
            Name (Add Your Business or Personal Name)
          </label>
          <input
            className="border border-gray-400 p-2 w-full bg-[#9ca3af]"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange} />
        </div>
        <div className="mb-4">
          <label
            className="block text-[#9ca3af] font-medium mb-2"
            htmlFor="description"
          >
            Description (Add a Few Words to Describe Your Post)
          </label>
          <textarea
            className="border border-gray-400 p-2 w-full bg-[#9ca3af]"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleInputChange} />
        </div>
        <div className="mb-4">
          <label
            className="block text-[#9ca3af] font-medium mb-2"
            htmlFor="phone"
          >
            Whatsapp Number
          </label>
          <input
            className="border border-gray-400 p-2 w-full bg-[#9ca3af]"
            type="text"
            name="phoneNo"
            id="phoneNo"
            value={formData.phoneNo}
            onChange={handleInputChange} />
        </div>
        <div className="mb-4">
          <label
            className="block text-[#9ca3af] font-medium mb-2"
            htmlFor="tags"
          >
            Tags (Add Three Words that Best Describe Your Post)
          </label>
          <input
            className="border border-gray-400 p-2 w-full bg-[#9ca3af]"
            type="text"
            name="tags"
            id="tags"
            value={formData.tags}
            onChange={handleInputChange} />
        </div>
        <div className="mb-4">
          <label
            className="block text-[#9ca3af] font-medium mb-2"
            htmlFor="Location"
          >
            Location 
          </label>
          <input
            className="border border-gray-400 p-2 w-full bg-[#9ca3af]"
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleInputChange} />
        </div>
        <div className="mb-4">
          <label
              className="block text-[#9ca3af] font-medium mb-2"
              htmlFor="Upload Post"
            >
            Upload Post (Picture or Short Video, Max Size 50Mb) 
            </label>
          <input
            type="file"
            onChange={handleChange}
            className="py-3 px-5 bg-[#9ca3af] rounded-lg shadow-md" />
          <p>{`${percent}% loaded`}</p>
        </div>
        <button className="bg-[#164e63] text-[white] p-2 rounded-full hover:bg-blue-600">
          Submit
        </button>
      </form>
  </div>
  );
}

export default UploadFile;
