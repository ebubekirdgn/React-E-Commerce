import { createContext, useContext, useEffect, useState } from "react";
import alertify from "alertifyjs";

const BasketContext = createContext();
const defaultBasket = JSON.parse(localStorage.getItem("basket")) || [];

const BasketProvider = ({ children }) => {
  const [items, setItems] = useState(defaultBasket);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(items));
  }, [items]);
  const addToBasket = (amount, data, findBasketItem) => {
    if (!findBasketItem) {
      for (let i = 1; i <= amount; i++) {
        setItems((items) => [data, ...items]);
      }
      return setItems;
    }

    const filtered = items.filter((item) => item._id !== findBasketItem._id);
    setItems(filtered);
  };

  const removeFromBasket = (item_id) => {
    console.log(item_id);
    alertify
      .confirm(
        "Silme işlemi",
        "Bu veriyi silmek istediğinize emin misiniz?",
        function () {
          const filtered = items.filter((item) => item._id !== item_id);
          setItems(filtered);
          alertify.success("Silme işlemi başarılı!");
        },
        function () {}
      )
      .set("labels", { ok: "Evet", cancel: "Hayır" });
  };

  const emptyBasket = () => setItems([]);
  const values = {
    items,
    setItems,
    addToBasket,
    removeFromBasket,
    emptyBasket,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};
const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };