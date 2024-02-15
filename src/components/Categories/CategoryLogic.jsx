import CategoryList from './CategoryList';

const CategoryLogic = () => {
  const catOptions = [
    { id: 1, name: 'Nature', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1707238364/devSources/veg_animalsCategory_ag5f6z.png', itemCount: 16 },
    { id: 2, name: 'Food', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1707238370/devSources/veg_good_category_suwi8n.png', itemCount: 12 },
    { id: 3, name: 'Animals', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1707238364/devSources/veg_animalsCategory_ag5f6z.png', itemCount: 8 },
    { id: 4, name: 'Sports', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1707238357/devSources/veg_sport_category_fdebua.png', itemCount: 12 },
    { id: 5, name: 'Streets', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1707238356/devSources/veg_street_category_imggka.png', itemCount: 8 }
  ];

  return (
    <div>
      <CategoryList catOptions={catOptions} />
    </div>
  );
};

export default CategoryLogic;