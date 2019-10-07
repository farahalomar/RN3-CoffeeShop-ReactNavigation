 //import createStackNavigator 
 import { createStackNavigator } from "react-navigation-stack";
 // import your components here they should be full screens 
 import HomePage from "../Components/HomePage";
 import CoffeeList from "../Components/CoffeeList";
 import CoffeeDetail from "../Components/CoffeeDetail";
 import Login from '../Components/Login';
 import CoffeeCart from '../Components/CoffeeCart';

 const StackNav = createStackNavigator(
   {
   //give names to your components that you will be using throughout your project
   
     CoffeeList: CoffeeList,
     CoffeeDetail: CoffeeDetail,
     Login: Login,
     CoffeeCart: CoffeeCart,
   },
   {
   //define the intial component when the app runs
     initialRouteName: "Login"
   }
 );

 export default StackNav;