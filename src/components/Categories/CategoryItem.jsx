const CategoryItem = () => {
  const categotiList = [{id:1, image:'', title:''}, {id:2, image:'', title:''}, {id:3, image:'', title:''}]  
  return (
    <div className="category-item">
        <img
        src= {itemImage}
        alt= "Offert"
        />
        <span>Mangas</span>
    </div>
    );
  }

export default CategoryItem;