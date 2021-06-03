import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
      {
        id: 1,
        title: "This is the COOLEST Cube Ever",
        description:
          "This cube will keep you busy the entire day and it is very fun to play with",
        detail:"Rubik's Cube is a puzzle cube, and the world's biggest selling toy of all time with over 300,000,000 (300 million) sold. It was invented in 1974 by Hungarian sculptor and professor of architecture Ernő Rubik. In a classic Rubik's Cube, each of the six faces is covered by nine stickers, each of one of six solid colours: white, red, blue, orange, green, and yellow. In currently sold models, white is opposite yellow, blue is opposite green, orange is opposite red, and some might replace blue with black or purple.",
        price: 15.0,
        image:
          "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        id: 2,
        title: "Large Coffee Cup",
        description:
          "Get a big cup of coffee every morning before the day starts so that you have a good day",
        detail:"Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. All fruit must be further processed from a raw material—the fruit and seed—into a stable, raw product; un-roasted, green coffee. To process the berries, the seed is separated from the fruit to produce green coffee. Green coffee is then roasted, a process which transforms the raw product (green coffee) into a consumable product (roasted coffee). Roasted coffee is ground into a powder and mixed with water to produce a cup of coffee.",
        price: 20.0,
        image:
          "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      },
      {
        id: 3,
        title: "Books That CHANGED My Life",
        description:
          "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
        detail:"As an intellectual object, a book is prototypically a composition of such great length that it takes a considerable investment of time to compose and still considered as an investment of time to read. In a restricted sense, a book is a self-sufficient section or part of a longer composition, a usage that reflects the fact that, in antiquity, long works had to be written on several scrolls and each scroll had to be identified by the book it contained. ",
          price: 150.0,
        image:
          "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
      },
    ],
    cart: [],
    currentItem: null,
  };

 const productSlice = createSlice({
     name:'product',
     initialState : initialState,
     reducers:{
         item: (state,action)=>{
             state.currentItem = action.payload.product;
         },
         cart: (state,action)=>{
             state.cart = state.cart.concat(action.payload.product);
         },
         cartEmpty:(state)=>{
            state.cart = []
         }

     }
 })

export const {item,cart,cartEmpty} = productSlice.actions

 export default productSlice.reducer