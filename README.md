# React Dev Boilerplate

1. **Install React**

   ```bash
   npm create vite@latest my-project -- --template react
   ```

2. **Open Folder**

   ```bash
   cd my-project
   ```

3. **Install Tailwind CSS**

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

   3.1. **Update 'tailwind.config.js' file**

   ```javascript
   module.exports = {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

   3.2. **Update 'index.css' file:**

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. **Install daisyUI**

   ```bash
   npm i -D daisyui@latest
   ```

   4.1. **Add DaisyUI to 'tailwind.config.js' file**

   ```javascript
   module.exports = {
     //...
     plugins: [require("daisyui")],
   };
   ```

5. **Install React Icon**

   ```bash
   npm install react-icons --save
   ```

6. **Install React Router Dom**

   ```bash
   npm install react-router-dom localforage match-sorter sort-by
   ```

   6.1. **Adding a Router to 'main.jsx'**

   ```javascript
   import * as React from "react";
   import * as ReactDOM from "react-dom/client";
   import {createBrowserRouter,RouterProvider,} from "react-router-dom";
   import "./index.css";

   const router = createBrowserRouter([
        {path: "/", element: <div>Hello world!</div>,},
   ]);

   ReactDOM.createRoot(document.getElementById("root")).render
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
   );
   ```

7. **Install React Toastify**

   ```bash
   npm install --save react-toastify
   ```

8. **Install react-helmet-async**
   ```bash
   react-helmet-async
   ```
---

Feel free to adjust the formatting or add more details as needed!
