import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
      {
        id: 1,
        title: "Rubik's Cube",
        description:
          "This cube will keep you busy the entire day and it is very fun to play with and to improve mind.",
        detail:"Rubik's Cube is a puzzle cube, and the world's biggest selling toy of all time with over 300,000,000 (300 million) sold. It was invented in 1974 by Hungarian sculptor and professor of architecture Ernő Rubik. In a classic Rubik's Cube, each of the six faces is covered by nine stickers, each of one of six solid colours: white, red, blue, orange, green, and yellow. In currently sold models, white is opposite yellow, blue is opposite green, orange is opposite red, and some might replace blue with black or purple.",
        price: 7.0,
        category: 'Game',
        image:
          "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        id: 2,
        title: "Large Coffee Cup",
        description:
          "Get a big cup of coffee every morning before the day starts so that you have a good day",
        detail:"Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. All fruit must be further processed from a raw material—the fruit and seed—into a stable, raw product; un-roasted, green coffee. To process the berries, the seed is separated from the fruit to produce green coffee. Green coffee is then roasted, a process which transforms the raw product (green coffee) into a consumable product (roasted coffee). Roasted coffee is ground into a powder and mixed with water to produce a cup of coffee.",
        price: 5.0,
        category: 'Beverage',
        image:
          "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      },
      {
        id: 3,
        title: "Books That CHANGED My Life",
        description:
          "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
        detail:"As an intellectual object, a book is prototypically a composition of such great length that it takes a considerable investment of time to compose and still considered as an investment of time to read. In a restricted sense, a book is a self-sufficient section or part of a longer composition, a usage that reflects the fact that, in antiquity, long works had to be written on several scrolls and each scroll had to be identified by the book it contained. ",
          price: 15.0,
          category:'Book',
        image:
          "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
      },
      {
        id: 4,
        title: "Chessy Pizza",
        description:
          "Pizza is a flatbread generally topped with tomato sauce and cheese and baked in an oven.",
        detail:" Cheese gives us almost all the salt, fat, and protein of the whole pie - three building blocks of what makes food taste good and have good texture. From what I’ve seen, most failures come in the form of simple lack of cheese, rather than poor cheese quality. High end fresh mozzarella might separate a good pizza from a great pizza, but all you usually need to go from bad to good is to just throw on more of whatever regular cheese you use.",
          price: 15.0,
          category: 'Food',
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      },
      {
        id: 5,
        title: "Pasta",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        detail:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 10.0,
          category: 'Food',
        image:
          "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80",
      },
      {
        id: 6,
        title: "Gray long sleeve shirt",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        detail:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 100.0,
          category: 'Shirt',
          trending: true,
        image:
          "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 7,
        title: "Blue denim shorts",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        detail:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 120.0,
          category: 'Short',
        image:
          "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      },
      {
        id: 8,
        title: "Green fabric sofa",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        detail:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 15000.0,
          category: 'Sofa',
        image:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 9,
        title: "tufted beige sofa chair",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        detail:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 15000.0,
          category: 'Chair',
        image:
          "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
      },
      {
        id: 10,
        title: "black,blue and white football",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        detail:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 20,
          category: 'Game',
        image:
          "https://images.unsplash.com/photo-1524012435847-659cf8c3d158?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
      },
      {
        id: 11,
        title: "Hulas rice",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        detail:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 20,
          category: 'Rice',
          trending: true,
        image:
          "https://cdn.sastodeal.com/catalog/product/15794/53.16/jeera.jpg",
      },
      {
        id: 12,
        title: "Maas daal",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        detail:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 20,
          category: 'Pulses',
          trending: true,
        image:
          "https://cdn.sastodeal.com/catalog/product/3/-/3-1580375754.jpg",
      },
      {
        id: 13,
        title: "Rajma 5kg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        detail:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 12,
          category: 'Pulses',
          trending: true,
        image:
          "https://cdn.sastodeal.com/catalog/product/r/a/rajma-chitra-500x500.jpg",
      },
      {
        id: 14,
        title: "Dried chilli 1kg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        detail:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 7,
          category: 'Species',
          trending: true,
        image:
          "https://cdn.sastodeal.com/catalog/product/d/r/dry-red-chilli-500x500.jpg",
      },

      {
        id: 15,
        title: "Peanuts 500gm",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        detail:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 7,
          category: 'Dry Fruits',
        image:
          "https://cdn.sastodeal.com/catalog/product/1/5/1541660410-peanuts-1.jpg",
      },

      {
        id: 16,
        title: "Clinic Plus -330ml",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        detail:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 9,
          category: 'Shampoo',
          trending: true,
        image:
          "https://cdn.sastodeal.com/catalog/product/2876/ClinicP-330/ClinicP-330.jpg",
      },

      {
        id: 17,
        title: "Oximeter",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        detail:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 18,
          category: 'Health Equipments',
          trending: true,
        image:
          "https://cdn.sastodeal.com/catalog/product/m/i/microsoftteams-image_2.png",
      },
      
    ],
    cart: [],
    currentItem: null,
  };

 const productSlice = createSlice({
     name:'product',
     initialState : initialState,
     reducers:{
         //view item is clicked
         item: (state,action)=>{
             state.currentItem = action.payload.product;
         },
         //insert into cart button is clicked
         cart: (state,action)=>{
            // state.cart = state.cart.concat(action.payload);
            const inCart = state.cart.find((product)=> product.id===action.payload.id? true: false)

            inCart? state.cart.forEach((product,index)=>{
                if(product.id === action.payload.id){
                    state.cart[index].qty += 1
                }
            }): state.cart.push(action.payload)   
        },
        //if logout is clicked
         cartEmpty:(state)=>{
            state.cart = []
         },

         //if delete button is clicked
         cartFilter:(state,action)=>{
            const result = state.cart.filter((product)=>{
                 return product.id !== action.payload.id
             })
            state.cart = result
         },


     }
 })

export const {item,cart,cartEmpty,cartFilter} = productSlice.actions

 export default productSlice.reducer