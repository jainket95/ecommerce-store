# Install

Use `npm i` to install the dependencies in the project.

# Run

Use the `npm run dev` to run the app in development mode.

# Build

Use the `npm run build` to make the production build.

# Prerequisites

Add .env file with these variables

```
export VITE_BACKEND_API_URL = 'http://localhost:8080'
export MODE = 'development'
```

# Tech Stack Used

- React
- Vite
- Tailwind | PostCSS | Autoprefixer
- React Router Dom

# Pages

### Home Page

- This page is the products page where you can see all the Products being displayed, you can add the Products to tha cart here.
- The Header component houses the Brand Link Ecommerce Store, Admin Page and Cart Page.
- The cart link in the header will indicate number of the products added.

### Cart Page

- Cart Page is divided into the two halves showcasing the Cart Items on the left and the Cart Summary on the right.
- The Cart Summary we have Discount Input Component to add the discount.
- The discount component remains active for the applicable orders and inactive for the other.
- You can place the order with or without the discount depending if the discount is applicable or not,
  you will be redirected to the orders page.

### Orders Page

- Order Page is divided into the two halves showcasing the Ordered Items on the right and the Order Summary on the left.
- You also have two buttons to navigate to either Admin Page or Home Page.

### Admin Page

- Order Page is divided into the two halves showcasing Admin Order Details and Generated Discount Codes on the right and Generate Discount Code Form on the left.

- The Generate Discount Code Form value and index have initial values of 10 and Current Orders Length + 1.
- You can generate the Discount Code for nth Order and when the nth order is in your cart, Discount Input will be active, enter the Discount Code and the discount will be applied.

- Once you have placed couple of Orders with discount code or without, you can see the Admin Store Details such as Lists count of items purchased, total purchase amount, list of discount codes and total discount amount.

### Images

- Images are in assets folder for the App.
