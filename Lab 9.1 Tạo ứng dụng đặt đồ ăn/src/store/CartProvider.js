import { useReducer } from "react";

import CartContext from "./cart-context";
//1.Initial state
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
// 2.tao ham reducer
const cartReducer = (state, action) => {
  console.log(action);
  //them
  if (action.type === "ADD") {
    //cap nhap lai total
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    //tim index phan tu trung id voi phan tu trong mang san co
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    //a.cap nhap lai amount cho phan tu (obj) id trung
    //a1.lay phan tu hien co(la obj) trong mang
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      //a2.cap nhap lai amount vao obj
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      //a3.cap nhap phan tu obj (updated amount) vao mang
      //a3.1.lay mang hien co
      updatedItems = [...state.items];
      //a3.2.cap nhap obj moi vao phan tu trong mang hien co
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      //them moi obj vao mang neu khong trung
      updatedItems = state.items.concat(action.item);
    }
    console.log(updatedItems);
    //tra lai state
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  //xoa
  if (action.type === "REMOVE") {
    //tim index phan tu trung id voi phan tu trong mang san co
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    //a.cap nhap lai amount cho phan tu (obj) id trung
    //a1.lay phan tu hien co(la obj) trong mang
    const existingItem = state.items[existingCartItemIndex];
    //cap nhap lai total
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    //loc mang moi khong co phan tu id trung id action truyền vao neu amount hien tai=1

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      //cap nhap lai amount vao obj
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      //lay mang hien co
      updatedItems = [...state.items];
      //cap nhap obj vao phan tu trong mang hien co
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    console.log(updatedItems);
    //tra lai state
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  //3.dispatch action---(useReducer)
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
