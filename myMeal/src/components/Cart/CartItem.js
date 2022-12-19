import classes from './CartItem.module.css';

const CartItem = (props) => {
  
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}><i className="fa-solid fa-indian-rupee-sign"></i>{props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button className={classes.Remove} onClick={props.onRemove}>-</button>
        <button className={classes.Add} onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
