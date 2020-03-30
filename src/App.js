import React from 'react';
import './App.css';
import CreateBook from './components/createbook';
import BookList1 from './components/BookList1';
import handleSubmit from "./components/handleSubmit";
import FormBookComponent from "./components/FormBookComponent";

function App() {
  return (
    <div className="App">
  {/*<CreateBook />*/}
        <BookList1 />
        <FormBookComponent onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
