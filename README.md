# KBank Line - Frontend Assignment

This is a frontend assignment project for applying to the Frontend Developer position at Kasikorn Line. The application is built using Next.js and includes functionalities such as authentication via passcode, displaying bank account details, debit cards, and recent transactions.

## Tech Stack

- **Next.js** - React framework for server-side rendering and static site generation.
- **Redux-Saga** - Middleware for managing side effects in Redux.
- **Jest** - JavaScript testing framework for unit testing.
- **Storybook** - UI component development and testing tool.
- **Axios** - HTTP client for API calls.
- **Tailwind CSS** - Utility-first CSS framework for styling.

## Features

- **Splash Screen** - Initial loading screen.
- **Passcode Screen** - Authentication via passcode input.
- **Bank Account List** - Displays user’s bank accounts.
- **Debit Card List** - Showcases the user’s linked debit cards.
- **Recent Transactions** - Displays the latest transactions made by the user.

## Project Structure

```
src/
│── app/
│   ├── api/              # API handlers
│   ├── passcode/         # Passcode page
│   ├── favicon.ico       # App icon
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Layout wrapper component
│   ├── page.tsx          # Main page component
│
│── assets/               # Static assets (images, icons, etc.)
│
│── components/           # Reusable UI components
│
│── hooks/                # Custom React hooks
│
│── redux/                # State management using Redux
│   ├── features/         # Redux slices and actions
│   ├── hook.ts           # Redux custom hooks
│   ├── rootSaga.ts       # Redux Saga configuration
│   ├── store.ts          # Redux store setup
│
│── stories/              # Storybook stories for UI components
│
│── styles/               # Additional styles and themes
│
│── tests/                # Unit tests for application components and features
│
│── types/                # TypeScript type definitions and interfaces
│
│── utils/                # Utility functions

```

## Installation and Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/prachpawee-tang/kasikorn-line-assignment.git
   cd kasikorn-line-assignment
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

4. Build for production:
   ```sh
   npm run build
   ```

## Testing

Run unit tests using Jest:

```sh
npm run test
```

Run Storybook for UI component testing:

```sh
npm run storybook
```

## Contribution

If you’d like to contribute or suggest improvements, feel free to create a pull request or open an issue.

## License

This project is for assessment purposes only and is not intended for public distribution.
