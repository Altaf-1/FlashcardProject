import { render,screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./state/reduxstore/store.js";
import Createcard from "./Components/CreateFlashCard/Createcard";
import Carddetails from './Components/Carddetails/Carddetails';
import All from './Components/allgroups/All.js';
it('renders createfcardComponent', () => {
 render(
  <BrowserRouter>
 <Provider store={store}>
   <Createcard />
 </Provider>
 </BrowserRouter>
);
  
const testcreatefcard=screen.getByTestId('createfcard');
  expect(testcreatefcard).toBeInTheDocument();
  
  // Check that the component is  present or not
  
});
it('renders allfcardgroups', () => {
  render(
  
   <BrowserRouter>
  <Provider store={store}>
    <All />
  </Provider>
  </BrowserRouter>
 );
   
 const allfcardgroups=screen.getByTestId('allfcardgroups');
   expect(allfcardgroups).toBeInTheDocument();
   
   // Check that the component is  present or not
   
 });
 //fcarddetails
 

   
   // Check that the component is  present or not
   
 