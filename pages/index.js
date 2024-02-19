import { useState, useCallback } from "react";
import ItemList from "../components/ItemList";

// let lastOnAddItemClick = null;

export default function Home() {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState("");

  const onAddItemClick = useCallback(() => {
    setItems((oldItems) => {
      const prevCount = oldItems.length;
      const newCount = prevCount + 1;
      const newItem = `Item ${newCount}`;
      const newItems = [...oldItems, newItem];
      return newItems;
    });

    // const prevCount = items.length;
    // const newCount = prevCount + 1;
    // const newItem = `Item ${newCount}`;
    // const newItems = [...items, newItem];
    // setItems(newItems);
    setMessage("Item added successfully!");
    setTimeout(() => setMessage(""), 3000);
    /*
        Time: 1 sec
        Add item - Item 1

        Time: 3 sec
        Add item - Item 2

        Time: 4 sec
        message is hidden

        Time: 6 sec
        message should hide
    */
  }, []);

  //   if (lastOnAddItemClick !== onAddItemClick) {
  //     lastOnAddItemClick = onAddItemClick;
  //     console.log("different onAddItem");
  //   } else {
  //     console.log("Same onAddItem");
  //   }

  return (
    <div>
      <button onClick={onAddItemClick}>Add Item</button>
      <ItemList items={items} />
      {message && <p id="message">{message}</p>}
    </div>
  );
}
