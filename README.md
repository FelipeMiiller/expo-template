

# Expo App Template


This is an Expo app template created with `create-expo-app`, configured with:


* **Nativewind**: for native tailwind styling
* **Nativecn**: for native component styling
* **Lucide**: for icons
* **ESLint**: for code analysis and error detection
* **Prettier**: for automatic code formatting


## Get started


1. Install dependencies


    ```bash
    npm install
    ```


2. Start the app


    ```bash
    npx expo start
    ```


or, to start with tunnel (for testing on physical devices or restricted networks):


    ```bash
    npm run start:tunnel
    ```


In the output, you'll find options to open the app in:


* Development build
* Android emulator
* iOS simulator
* Expo Go, a limited testing environment for Expo app development


You can start developing by editing the files inside the **app** directory. This project uses file-based routing.


## Additional resources


* [Expo documentation](https://docs.expo.dev/): learn fundamentals or explore advanced topics with our guides
* [Expo tutorial](https://docs.expo.dev/tutorial/introduction/): follow a step-by-step tutorial to create a project that runs on Android, iOS, and web


## Community


Join our community of developers creating universal apps.


* [Expo on GitHub](https://github.com/expo/expo): view our open-source platform and contribute
* [Expo community on Discord](https://chat.expo.dev): chat with Expo users and ask questions.


Scripts in `package.json`:
```json
 "scripts": {
    "clean": "rm -rf .expo",
    "start": "expo start",
    "start:tunnel": " npx expo start --tunnel",
    "start:wsl": "REACT_NATIVE_PACKAGER_HOSTNAME=$(node get_network_local_ip.js) expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "test": "jest --watchAll",
    "lint": "expo lint",
    "lint:fix": "eslint  . --fix",
    "prestart:tunnel": "npm run clean && npm run lint:fix",
     "prestart:wsl": "npm run clean && npm run lint:fix"
  },
```