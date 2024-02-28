import ArrivalList from './ArrivalList';

const ArrivalLogic = () => {
  const arrivalOptions = [
    { id: 1, description: 'Dr. Stone T-Shirt for Women', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1708104077/devSources/arrivalTshirt_ttnqu4.png' },
    { id: 2, description: 'Dragon Ball Pullover for Men', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1708104077/devSources/arrivalTshirt_ttnqu4.png' },
    { id: 3, description: 'Dr. Stone Anime Cup', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1708104077/devSources/arrivalTshirt_ttnqu4.png' },
    { id: 4, description: 'Yu-Gi-Oh Trading Card Game', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1708104077/devSources/arrivalTshirt_ttnqu4.png' },
    { id: 5, description: 'Pokemon Trading Card Game', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1708104077/devSources/arrivalTshirt_ttnqu4.png' },
    { id: 6, description: 'Yu Yu Hakusho Yusuke Urameshi Doll', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1708104077/devSources/arrivalTshirt_ttnqu4.png' }
  ];

  return (
    <div className="flex flex-col justify-center items-center w-85 ">
      <ArrivalList arrivalOptions={arrivalOptions} />
    </div>
  );
};

export default ArrivalLogic;