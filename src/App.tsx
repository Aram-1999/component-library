import AlertBox from "./components/AlertBox";
import Button from "./components/Button";
import Section from "./components/Section";
import UserProfileCard from "./components/UserProfileCard";
import ProductDisplay from "./components/ProductDisplay";
import { useState } from "react";

const App = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const user = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
    avatarUrl:  "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
  };

  const product = {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl: "https://d1ncau8tqf99kp.cloudfront.net/converted/110696_original_local_1200x1050_v3_converted.webp",
    inStock: true,
  };

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };

  return (
    <div className="p-4">
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={() => setShowAlert(false)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <UserProfileCard user={user} showEmail={true} showRole={true} />

        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

// function App() {
//   const user = {
//     id: "1",
//     name: "John Doe",
//     email: "john.doe@example.com",
//     role: "Software Engineer",
//     avatarUrl:
//       "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
//   };

//   const product = {
//     id: "1",
//     name: "Wireless Headphones",
//     price: 199.99,
//     description: "High-quality wireless headphones with noise cancellation.",
//     imageUrl: "https://d1ncau8tqf99kp.cloudfront.net/converted/110696_original_local_1200x1050_v3_converted.webp",
//     inStock: true,
//   };

//   return (
//     <main>
//       <h1 className="font-bold text-2xl">Componenets Library</h1>

//       <Section title="Section 1">
//         <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
//           itaque rerum aliquam laborum doloribus, numquam debitis sint a
//           corporis voluptatibus cum quasi unde dolorum mollitia voluptatum odit
//           nobis architecto! Eius!
//         </p>
//       </Section>

//       <Section title="Section 2">
//         <h3>Subheader</h3>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
//           harum aliquam quas aliquid impedit voluptatibus consequatur minima
//           reiciendis ex? Dolorum nesciunt quo suscipit praesentium alias quidem
//           ipsam, impedit reprehenderit incidunt.
//         </p>
//       </Section>

//       <Section title="Buttons">
//         <div className="grid grid-cols-4">
//           <Button text="Click me!" />
//           <Button
//             text="Submit"
//             type="submit"
//             onClick={() => console.log("Submit")}
//           />

//           <Button
//             text="Reset"
//             type="reset"
//             onClick={() => console.log("Reset")}
//           />

//           <Button
//             text="Disabled"
//             type="reset"
//             disabled={true}
//             onClick={() => console.log("Disabled")}
//           />
//         </div>
//       </Section>

//       <Section title="AlerBox">
//         <AlertBox
//           type="success"
//           message="Your profile has been updated successfully!"
//           onClose={() => alert("Alert closed")}
//         >
//           <p className="text-sm">You can now continue using the application.</p>
//         </AlertBox>
//       </Section>

//       <Section title="UserProfileCard">
//         <UserProfileCard
//           user={user}
//           showEmail={true}
//           showRole={true}
//           onEdit={(userId) => alert(`Editing user ${userId}`)}
//         >
//           <p>Actively looking for a job!</p>
//         </UserProfileCard>
//       </Section>

//       <Section title="ProductDisplay">
//         <ProductDisplay
//           product={product}
//           showDescription={true}
//           showStockStatus={true}
//           onAddToCart={(productId) =>
//             alert(`Added product ${productId} to cart`)
//           }
//         >
//           <div className="text-sm text-gray-500">Free shipping available</div>
//         </ProductDisplay>
//       </Section>
//     </main>
//   );
// }

export default App;
