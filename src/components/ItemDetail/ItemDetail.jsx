import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ name, description, img, price, stock }) => {
   
    const addToCart = (items) => { 
        alert(`Se agregaron ${items} al carrito`)
     }

  return (
    <div className="border m-2">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <img src={img} alt="" />
          <p className="card-text"> {description} </p>
          <p>Precio: {price} </p>
          <ItemCount stock={stock} addToCart={addToCart} />
        </div>
      </div>
    </div>
  );
};