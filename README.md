<a id="readme-top"></a>

<div align="center">
  <a href="#">
    <img src="public/images/readme-logo.svg" alt="Logo" width="80" height="80">
  </a>
  <h1 align="center">Book Store</h1>
  <p align="center">
    Modern online bookstore built with Next.js
  </p>
</div>

<details>
  <summary><h2>Table of contents</h2></summary>
  <ol>
    <li>
      <a href="#about-project">About project</a>
      <ul>
        <li><a href="#description">Description</a></li>
        <li><a href="#application-structure">Application structure</a></li>
        <li><a href="#-key-benefits">Key benefits</a></li>
        <li><a href="#technologies-used">Technologies used</a></li>
        <li><a href="#project-architecture">Project architecture</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#setup-instructions">Setup instructions</a></li>
        <li><a href="#scripts-in-project">Scripts in project</a></li>
      </ul>
    </li>
  </ol>
</details>

## About Project

### Description

Bookstore is a modern web application for browsing and purchasing books online.  
The project is built with **Next.js** and focuses on performance, scalability, and clean architecture.

The application demonstrates real-world e-commerce functionality such as product catalog browsing, filtering,
authentication, and cart management.  
It is designed as a **pet / portfolio project** showcasing modern frontend practices.

### Application structure

1. Home page with featured books
2. Book catalog with filters and search
3. Book details page
4. Shopping cart
5. User authentication (sign in / sign up)
6. User profile and order history
7. Favorites / wishlist

### 🔥 Key Benefits

- 🛍️ **Full-featured online bookstore**
- ⚡ **Fast performance with SSR / SSG**
- 🔍 **Search, filtering, and sorting**
- 🧩 **Scalable and maintainable architecture**
- 🎨 **Clean UI with consistent design system**

### Technologies Used

##### Main language

<ul>
  <li>
    <a href="https://www.typescriptlang.org/">
      <img width="20" height="20" alt="ts" src="https://github.com/user-attachments/assets/ee98179c-3f48-4c1a-9ff8-149104908cc2" />
      TypeScript
    </a>
  </li>
</ul>

##### Main frameworks and libraries

<ul>
  <li>
    <a href="https://nextjs.org/">
      <img width="20" height="20" alt="nextjs" src="https://github.com/user-attachments/assets/32e78665-1097-48aa-a1df-fe7066f952fa" />
      Next.js
    </a>
  </li>
  <li>
    <a href="https://sass-lang.com/">
      <img width="20" height="20" alt="sass" src="https://github.com/user-attachments/assets/3377a403-5b34-4940-adb3-35b0a2d053f3" />
      SCSS
    </a>
  </li>
  <li>
    <a href="https://ui.shadcn.com/">
      <img width="20" height="20" alt="shadcn" src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4" />
      shadcn/ui
    </a>
  </li>
  <li>
    <a href="https://zustand.docs.pmnd.rs/">
      <img width="20" height="20" alt="zustand" src="https://github.com/user-attachments/assets/628b9872-0f57-487e-b8b1-03d2ed4a636b" />
      Zustand
    </a>
  </li>
</ul>

##### Linters

<ul>
  <li>
    <a href="https://eslint.org/">
      <img width="20" height="20" alt="eslint" src="https://github.com/user-attachments/assets/74d78cc4-ff18-4883-bdc2-5d80146fcfc5" />
      ESLint
    </a>
  </li>
  <li>
    <a href="https://prettier.io/">
      <img width="20" height="20" alt="prettier" src="https://github.com/user-attachments/assets/da74e4d3-6e23-4f55-a671-62c5bab39eec" />
      Prettier
    </a>
  </li>
</ul>

##### Testing

<ul>
  <li>
    <a href="https://vitest.dev/">
      <img width="20" height="20" alt="vitest" src="https://github.com/user-attachments/assets/d2cee1fd-02ee-4dbb-bb31-816fe736d6d1" />
      Vitest
    </a>
  </li>
  <li>
    <a href="https://testing-library.com/">
      <img width="20" height="20" alt="rtl" src="https://github.com/user-attachments/assets/6696c50d-35e5-49d5-ae18-60d62ce8f7b4" />
      React Testing Library
    </a>
  </li>
</ul>

### Project architecture

- app — Next.js App Router (pages, layouts, routing)
- src - project files
  - app - providers, global styles and etc.
  - pages - full pages or large parts of a page in nested routing
  - widgets — large self-contained chunks of functionality or UI
  - features — domain-specific logic (cart, books, auth)
  - entities — core business entities (book, user, order)
  - shared — shared UI, hooks, utilities, constants

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

## Setup Instructions

1. Install Node.js v20.11.1

2. Obtain the Project Files: you have two options for obtaining the project files:

- Fork the Repository: If you plan to contribute to the project or make changes to the code, it's recommended to fork
  the repository. This will create a copy of the repository under your GitHub
  account. [Fork the repository](https://github.com/aQafresca/nextjs-app/fork) to create a copy under your account.

- Download the Repository: If you only intend to use the project locally and don't plan to contribute changes, you can
  simply download the repository as a ZIP
  file. [Download the repository](https://github.com/aQafresca/nextjs-app/archive/refs/heads/main.zip) as a ZIP file and
  extract it to your local machine.

3. Clone the Repository (if Forked): if you forked the repository, clone your newly created repo to your local machine
   using the following command:

```
git clone https://github.com/YOUR-USERNAME/nextjs-app.git
```

4. Navigate to the Project Directory: once you have obtained the project files (either by forking or downloading),
   navigate to the project directory:

```
cd nextjs-app
```

5. To install all dependencies use:

```
npm install
```

6. Run development version:

```
npm run dev
```

7. Build the Project:

to build the project, use the following command:

```
npm run build
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

Scripts in project

1. npm run dev — run development mode
2. npm run build — build the project
3. npm run start — start production server
4. npm run lint — lint the codebase
5. npm run format — format code with Prettier
6. npm run test — run tests
7. npm run coverage — generate test coverage

<p align="right">(<a href="#readme-top">back to top</a>)</p>
```

## The following people were involved in the project

### Author

- [etcq](https://github.com/etcq)
