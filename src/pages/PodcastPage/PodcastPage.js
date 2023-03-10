import React, { useState, useEffect } from "react";
import { exampleService } from "../../services/example.service";
import "./PodcastPage.css"
import AddFile from '../../components/DisplayFiles/AddFile'
import DisplayFile from '../../components/DisplayFiles/DisplayFiles'
import IsAdmin from "../../components/IsAdmin/IsAdmin";

export default function PodcastPage() {
  const [files, setFiles] = useState([]);
 
 async function handleGetAllPodcasts() {
   const response = await exampleService.getAllPodcasts();
   
   setFiles(response.data);
  }
  useEffect(() => {
    handleGetAllPodcasts();
  }, []);
  return (
    <div className='Podcast-Page'>
    <h1 className="title">Podcasts</h1>
    <IsAdmin>
    <AddFile handleGetAllPodcasts={handleGetAllPodcasts}   />
   </IsAdmin>
    <DisplayFile files={files} handleGetAllPodcasts={handleGetAllPodcasts} />
    </div>
  )
}
