# Components and Props in React

This app has three components — AlertBox, ProductDisplay, and UserProfileCard. All three components are composed within the App component, which enables them to work together. The user can interact with products by adding them to the cart. Once an item is added, a message appears at the top indicating that the action was successful. The user can close the message by clicking the x icon in the top-right corner of the message box.

## AlertBox Component

The AlertBox component implements a message container that displays the success outcome of clicking the "Add to Cart" button. It uses Tailwind to style different success or failure messages.

## UserProfileCard Component

UserProfileCard displays the user's information in a card format. It has optional fields that are shown only if the App component passes valid values for them. The card includes basic information such as the name and profession.

## ProductDisplay Component

The ProductDisplay component shows product information, including a descriptive image, product name, price, a short description, and availability. It also includes a button for adding the product to the cart.
