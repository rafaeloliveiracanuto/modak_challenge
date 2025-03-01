# Overview
The Products App is a mobile application built with React Native and TypeScript that allows users to browse a catalog of products fetched from the DummyJSON Products API. It provides functionality to view, filter, sort, and view product details in a user-friendly interface.

# Features
- **View Product List**: The app displays a list of products with their title, price, and thumbnail on the home screen.

- **Filter by Category**: Users can filter the products by category (e.g., electronics, clothing, groceries) fetched from the DummyJSON Categories API.

- **Sort Products**: Products can be sorted by either price or rating.

- **Product Details**: Users can click on any product to view more detailed information such as the product description, brand, and stock availability.

- **Deep Link Support**: The app supports deep linking, allowing users to open the app to a specific category or product by its ID.

  - **By category**: `modakChallenge://products/category/groceries` -> run on terminal: `xcrun simctl openurl booted modakChallenge://products/category/groceries`
  - **By product id**: `modakChallenge://products/11` -> run on terminal: `xcrun simctl openurl booted modakChallenge://products/11`

- **Error Handling**: The app includes error handling and loading states during API calls to improve user experience.

- **Pull to Refresh**: Users can refresh the product list by pulling down on the screen.

# Setup Instructions
### Installation

1. Clone the repository to your local machine.
2. Open a terminal/command prompt and navigate to the project directory.
3. Run `npm install` or `yarn install` to install the project dependencies.
4. `cd ios && pod install` to install CocoaPods dependencies.

### Starting server
`yarn start` or `npx react-native start`

### Running on iOS Simulator

1. Ensure that you have Xcode installed on your machine.
2. In the terminal, run `npx react-native run-ios` to launch the app on the iOS simulator.

### Running on Android Emulator

1. Ensure that you have Android Studio and an Android emulator set up.
2. Start the Android emulator.
3. In the terminal, run `npx react-native run-android` to launch the app on the Android emulator.

# Screenshots

<img width="393" alt="image" src="https://github.com/user-attachments/assets/87982b80-6bca-474a-8801-96a416f8c47b" />
<img width="393" alt="image" src="https://github.com/user-attachments/assets/1f753d38-1aaa-402f-ba21-1bae2b68f837" />
