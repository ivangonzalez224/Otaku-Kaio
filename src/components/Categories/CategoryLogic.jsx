import CategoryList from './CategoryList';

const CategoryLogic = () => {
  const catOptions = [
    { id: 1, name: 'Animes', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1709248312/devSources/animes_otaku_kly2au.png', itemCount: 16 },
    { id: 2, name: 'Clothes', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1709247720/devSources/clothes_otaku_wnygyv.png', itemCount: 12 },
    { id: 3, name: 'Games', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1709247953/devSources/games_otaku_wpsrsa.png', itemCount: 8 },
    { id: 4, name: 'Dolls', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1709248201/devSources/dolls_otaku_xxgnje.png', itemCount: 12 },
    { id: 5, name: 'Cups', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1709248515/devSources/cups_otaku_qiwniq.png', itemCount: 8 }
  ];

  return (
    <div className="category-mainContainer mt-16 mx-auto">
      <CategoryList catOptions={catOptions} />
    </div>
  );
};

export default CategoryLogic;