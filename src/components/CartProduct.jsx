function CartProduct({product, removeFromCart, setQuantity}) {

    const finalPrice = product.price * product.quantity

    function AddOrSubQuantity (operator) {
        if(operator === "-"){
            if(product.quantity === 0) {
                return;
            }
            setQuantity((value) => value -1);
        }
        if(operator === "+"){
            setQuantity((value) => value + 1)
        };
    }

    return (
        <li>
            <img src={product.image} alt={product.title} />
            <div>
                <div>{product.title}</div>
                <div>{product.description}</div>
            </div>
            <div>
                <button onClick={() => AddOrSubQuantity("-")}>-</button>
                <input 
                    type="number"
                    value={product.quantity}
                    name="quantity"
                    aria-label="quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button onClick={() => AddOrSubQuantity("+")}>+</button>
                <button onClick={() => removeFromCart}>Remove From Cart</button>
            </div>
            <div>{finalPrice}</div>

        </li>
    )
}

export default CartProduct