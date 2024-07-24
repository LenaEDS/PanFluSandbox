import React from 'react';
import ExampleLayout from './ExampleLayout'; // Adjust path as necessary
import './GalleryView.css'; // Import custom CSS for styling
import InitialMap from './InitialMap';
import OUTPUT_2 from './OUTPUT_2.json';
import OUTPUT_9 from './OUTPUT_9.json';

const GalleryView = () => {
  return (
    <div className="galleryViewContainer">
       <InitialMap outputData={OUTPUT_2} /> 
       <InitialMap outputData={OUTPUT_9} />
      <h1>---------------------------------------------------------------------------------- Screenshot View ---------------------------------------------------------------------------</h1>
    <ExampleLayout />
    </div>
  );
};

export default GalleryView;
