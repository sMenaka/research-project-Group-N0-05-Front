import React, { useState } from 'react';
import {Recorder} from 'react-voice-recorder'
import 'react-voice-recorder/dist/index.css'
import axios from 'axios';
import {
  Button,
} from "reactstrap";
const RecorderComp =()=> {
   
const stateInit = {
  url: null,
  blob: null,
  chunks: null,
  duration: {
    h: 0,
    m: 0,
    s: 0
  }
}
const [state,setState] = useState(stateInit);
const[res,setRes]=useState(null)

const handleAudioStop=(data=>{
  const fdata = new FormData();
  console.log(data.url)
  fetch(data.url).then(response => response.blob())
      .then(blob => { 
        fdata.append('file', blob,"test.mp3");
        axios.post('http://127.0.0.1:5000/upload', fdata)
        .then(response => setRes( response.data ))
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
        
      })
      .then(response => response.ok)
        .then(res => console.log(res))
      .catch(err => console.log(err));
  setState( data );
})
const handleAudioUpload=(file)=> {
  console.log(file);
}
const handleRest=()=> {
  const reset = {
    url: null,
    blob: null,
    chunks: null,
    duration: {
      h: 0,
      m: 0,
      s: 0
    }
  };
  setState(reset );
}
  return(
    <div>

      {(res != null)?(<div className="content-center brand"><h3 className="title">{"Your are now "+res}</h3>
      <Button className="btn-round" size="lg" color="info" outline type="button" onClick={()=>{setRes(null)}} >
      Again
    </Button></div>
      ):(<Recorder
    record={true}
    title={"Test Your Stress"}
    audioURL={state.url}
    // showUIAudio
    handleAudioStop={data => handleAudioStop(data)}
    handleAudioUpload={data => handleAudioUpload(data)}
    handleRest={() => handleRest()} 
/>)}
      
    
</div>
  )    
}
export default RecorderComp;






