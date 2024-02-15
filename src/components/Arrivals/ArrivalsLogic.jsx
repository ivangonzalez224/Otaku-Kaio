import ArrivalList from './ArrivalList';

const ArrivalLogic = () => {
  const arrivalOptions = [
    { id: 1, description: 'Dr. Stone T-Shirt for Women', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1707238362/devSources/veg_nature_category_vcdj3e.png', itemCount: 16 },
    { id: 2, description: 'Dragon Ball Pullover for Men', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1707238370/devSources/veg_good_category_suwi8n.png', itemCount: 12 },
    { id: 3, description: 'Dr. Stone Anime Cup', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1707238364/devSources/veg_animalsCategory_ag5f6z.png', itemCount: 8 },
    { id: 4, description: 'Yu-Gi-Oh Trading Card Game', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1707238357/devSources/veg_sport_category_fdebua.png', itemCount: 12 },
    { id: 5, description: 'Pokemon Trading Card Game', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1707238356/devSources/veg_street_category_imggka.png', itemCount: 8 },
    { id: 6, description: 'Yu Yu Hakusho Yusuke Urameshi Doll', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1707238356/devSources/veg_street_category_imggka.png', itemCount: 8 }
  ];

  return (
    <div>
      <ArrivalList arrivalOptions={arrivalOptions} />
    </div>
  );
};

export default ArrivalLogic;