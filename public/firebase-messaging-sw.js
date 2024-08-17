// importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');


// const firebaseConfig = {
//     apiKey: "AIzaSyCPZjZXO8qkoFPWusAc38j36yr__ZFiHAo",
//     authDomain: "qrdine-in-293b5.firebaseapp.com",
//     projectId: "qrdine-in-293b5",
//     storageBucket: "qrdine-in-293b5.appspot.com",
//     messagingSenderId: "185795441364",
//     appId: "1:185795441364:web:5c61a0c9749cbef90ec141",
//     measurementId: "G-3J4VL7YDG6"
//   };
  

// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
//     // Extract notification details from the payload
//     const notificationTitle = payload.notification?.title || 'Default Title';
//     const notificationOptions = {
//       body: payload.notification?.body || 'Default Body',
//       icon: '/mini-logo.png', // Replace with your app icon
//     };
  
//     // Display the notification
//     self.registration.showNotification(notificationTitle, notificationOptions);
//   });