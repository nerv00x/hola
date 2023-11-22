/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

import React, { useEffect, useState } from 'react';

function ObjectList() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.scorebat.com/video-api/v3/feed/?token=MTMxNjI1XzE3MDA2ODE2NThfODkxZDdhODMzOWFiZGU2Y2UxNTZiZGUxNWQ4ZjMyNzRhYWZkOWU0NA==');
      const data = await response.json();
      setObjects(data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!objects || objects.length === 0) {
    return <p>No se encontraron objetos.</p>;
  }

  return (
    <div>
      {objects.map(object => (
        <div key={object.title}>
          <h3>{object.title}</h3>
          <p>{object.competition.name}</p>
          {object.videos.map(video => (
            <div key={video.title}>
              <p>{video.title}</p>
              <video src={video.embed} controls></video>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

 
// function fetchData() {
  // fetch('https://www.scorebat.com/video-api/v3/feed/?token=MTMxNjI1XzE3MDA2ODE2NThfODkxZDdhODMzOWFiZGU2Y2UxNTZiZGUxNWQ4ZjMyNzRhYWZkOWU0NA==')
    // .then(response => response.json())
    // .then(data => {
      // console.log(data);
    // })
    // .catch(error => {
      // console.error('Error:', error);
    // });
// }
// 
// const objects =[fetchData.data]
// 
// function ObjectList() {
  // return (
    // <div>
      {/* {objects.map(object => ( */}
        // <div key={object.id}>
          {/* <h3>{object.title}</h3> */}
          {/* <p>{object.competition}</p> */}
          {/* <p>{object.matchviewUr}</p> */}
          {/* {object.image && <img src={object.image} alt={object.name} />} */}
        {/* </div> */}
      // ))}
    {/* </div> */}
  // );
// }
// 
// 
// 
// 

export default ObjectList;
