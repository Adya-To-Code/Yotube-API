import React from 'react';

const VedioDetails = ({ vedio }) =>{
  if(!vedio){
    return (
     <div >Loading</div>
 );
  }

  const vedioSrc =`https://www.youtube.com/embed/${vedio.id.videoId}`
  return (
    <div>
      <div className ='ui embed'>
        <iframe title ='vedio-player'src ={vedioSrc} />
      </div>
   

    <div className ='ui segment'>
    <h4 className='ui header'>  {vedio.snippet.title} </h4>
    <p>{vedio.snippet.description}</p>
      </div>
      </div>
    
  )
}
 
export default VedioDetails;