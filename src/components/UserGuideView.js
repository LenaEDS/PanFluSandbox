import React from 'react';
import InitialMap from './InitialMap';
import InitialMapTwo from './InitialMapTwo';
import InitialMapThree from './InitialMapThree';
import InitialMapFour from './InitialMapFour';
import InitialMapFive from './InitialMapFive';
import OUTPUT_1 from './OUTPUT_1.json';
import OUTPUT_2 from './OUTPUT_2.json';
import OUTPUT_3 from './OUTPUT_3.json';
import OUTPUT_4 from './OUTPUT_4.json';
import OUTPUT_5 from './OUTPUT_5.json';
import OUTPUT_6 from './OUTPUT_6.json';
import OUTPUT_7 from './OUTPUT_7.json';
import OUTPUT_8 from './OUTPUT_8.json';
import OUTPUT_9 from './OUTPUT_9.json';

const UserGuideView = () => {
  return (
    <div>
      <h2>User Guide View</h2>
      <InitialMapFive outputData={OUTPUT_9} />
      <InitialMapFour outputData={OUTPUT_9} />
      <InitialMapThree outputData={OUTPUT_9} />
      <InitialMapTwo outputData={OUTPUT_9} />
      <InitialMap outputData={OUTPUT_9} /> 
      <InitialMap outputData={OUTPUT_1} />
      <InitialMap outputData={OUTPUT_2} />
      <InitialMap outputData={OUTPUT_3} />
      <InitialMap outputData={OUTPUT_4} />
      <InitialMap outputData={OUTPUT_5} />
      <InitialMap outputData={OUTPUT_6} />
      <InitialMap outputData={OUTPUT_7} />
      <InitialMap outputData={OUTPUT_8} />
      <InitialMap outputData={OUTPUT_9} />
      <InitialMapFive outputData={OUTPUT_1} />
      <InitialMapFive outputData={OUTPUT_2} />
      <InitialMapFive outputData={OUTPUT_3} />
      <InitialMapFive outputData={OUTPUT_4} />
      <InitialMapFive outputData={OUTPUT_5} />
      <InitialMapFive outputData={OUTPUT_6} />
      <InitialMapFive outputData={OUTPUT_7} />
      <InitialMapFive outputData={OUTPUT_8} />
      <InitialMapFive outputData={OUTPUT_9} />

    </div>
  );
};

export default UserGuideView;
