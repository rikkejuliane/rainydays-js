# Course Assignments - HTML, CSS & JavaScript - Rikkejuliane  
<img src="https://github.com/user-attachments/assets/17b885ed-fb8f-4152-9084-a5dd94a6e088" alt="Logo for Rainy Days API" width="600px">

### Table of Contents 📚  
1. [Project Overview](#project-overview)  
2. [User Stories](#user-stories)  
3. [Key Features](#key-features)  
4. [Required Pages](#required-pages)  
5. [Installation](#installation)  
6. [Usage](#usage)  
    - [Register](#register)  
    - [Login](#login)  
    - [Adding Products to Basket](#adding-products-to-basket)  
7. [Tech Used 💻](#tech-used-)  
8. [Other](#other)

### Project Overview 🌍  
This project spans two course assignments: HTML & CSS and JavaScript 1. Initially, I developed a responsive, accessible website as part of the HTML & CSS course. Later, the project was extended in the JavaScript 1 course, where I integrated dynamic product data using the Rainy Days API, creating an interactive online store.

The project adheres to WCAG guidelines, ensures a seamless user experience, and includes features like product filtering, basket management, and checkout functionality.

### User Stories ✨  
* As a user, I want to view a list of products on the homepage.  
* As a user, I want to filter products by category, gender, or genre.  
* As a user, I want to view a single product page with more detail.  
* As a user, I want to add a product to my basket.  
* As a user, I want to remove a product from my basket.  
* As a user, I want to view a summary of my cart on the checkout page.  
* As a user, I want to view an order-confirmation screen after checking out.

### Key Features ✨  
#### **Phase 1: HTML & CSS (Responsive Design & Accessibility)**  
* **Fully Responsive Layout**  
  The site was built from scratch without frameworks, using Flexbox and Grid to ensure responsive design across all devices, with no horizontal scrollbars.

* **WCAG Compliance**  
  Accessibility was prioritized with semantic HTML, unique meta descriptions, titles, and proper heading structure for each page. The layout and interactive elements have been tested for screen readers, and the design passes WAVE accessibility checks.

* **Clean, Maintainable CSS**  
  The CSS follows DRY principles, ensuring it is easy to read, maintain, and scale as new functionality was added in later stages.

#### **Phase 2: JavaScript Integration (Interactive eCommerce Store)**  
* **Dynamic Product Fetching**  
  Products are fetched from the Rainy Days API and displayed dynamically on the homepage. Users can view detailed product pages, and all content is loaded asynchronously.

* **Basket Functionality**  
  Users can add and remove items from their basket. The basket is dynamically updated and reflects on the checkout page with an order summary.

* **Error Handling & Loading Indicators**  
  Loading spinners are displayed during API calls to ensure users are aware of ongoing processes. Errors during API calls are handled gracefully, with clear feedback to the user.

* **Filter & Sort Products**  
  Users can filter products by categories, gender, or genres, making it easier to browse through the store.

### Required Pages 📃  
* **Home Page**: Displays product list - `/index.html`  
* **Product Page**: Detailed view of a specific product - `/product/index.html`  
* **Checkout Page**: Displays items in the basket - `/checkout/index.html`  
* **Confirmation Page**: Thank you message after checkout - `/checkout/confirmation/index.html`

### Installation ⚙️  
Clone the repository and open `index.html` to view the site locally.  
Alternatively, click the link below to access the live demo:  
🌐 [Live Demo](https://yourwebsite.com)

### Usage 🛠️  
#### Register  
1. Navigate to the registration page.  
2. Complete the registration form.  
3. Click the **"REGISTER"** button to create your account. (Note: This feature mimics functionality, no actual backend is implemented.)

#### Login  
1. Navigate to the login page.  
2. Enter your email and password.  
3. Click the **"LOGIN"** button to access the site.

#### Adding Products to Basket  
1. Browse the homepage for products.  
2. Use filters to narrow down products by category.  
3. Add products to your basket.  
4. View your basket summary on the checkout page.  
5. Complete your order and view the confirmation message.

### Tech Used 💻  
* HTML & CSS (Responsive Design)  
* JavaScript (with async/await)  
* Rainy Days API  
* Accessibility Testing (WAVE)  
* Flexbox & CSS Grid

#### Other 📎  
This project was developed in two stages for the HTML & CSS and JavaScript 1 courses. Special thanks to my peers and teachers for their feedback and guidance throughout the project.
