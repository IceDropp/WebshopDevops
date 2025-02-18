import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Produkt 1", price: 100 },
  { id: 2, name: "Produkt 2", price: 200 },
  { id: 3, name: "Produkt 3", price: 300 }
];

export default function Shop() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Webbshop</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="p-4">
            <CardContent>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price} SEK</p>
              <Button onClick={() => addToCart(product)}>Lägg till i kundvagn</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold">Kundvagn</h2>
        {cart.length === 0 ? (
          <p>Din kundvagn är tom</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - {item.price} SEK</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}