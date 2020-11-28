import React, { useState } from "react";
import Header from "../../components/Header";
import List from "../../components/List/List";
import SearchBar from "../../components/SearchBar";
import Footer from "../../components/Footer"

const initialData = [
  { done: false, text: 'Do coding challenges' },
  { done: false, text: 'Do coding challenges' },
  { done: true, text: 'Do coding challenges' }
];

const MainPage = () => {
  const[items, setItems] = useState(initialData);

  return (
    <div className="container">
      <Header />
      <SearchBar onNewItem={(item) => setItems([...items, item])}/>
      <List items={items} onItemsChange={setItems} />
      <Footer/>

    </div>
  );
};

export default MainPage;
