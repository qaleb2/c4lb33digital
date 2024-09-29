import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1999-05-31T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age:',
    value: <Age />,
  },
  {
    key: 'hometown',
    label: 'Hometown (Depending on whos asking):',
    value: 'Great Neck, NY',
  },
  {
    key: 'location',
    label: 'Current City:',
    value: 'Stamford, CT',
  },
  {
    key: 'height',
    label: 'Height:',
    value: '170.1 cm or 5 feet 7 inches',
  },
  {
    key: 'weight',
    label: 'Weight:',
    value: '70.3 kg or 150 LBS',
  },
];

export default data;
