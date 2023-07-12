export const environment = {
  firebaseConfig: {
    connection: {
      projectId: 'financial-control-vlv',
      appId: '1:955018390705:web:4590290187b35060438690',
      storageBucket: 'financial-control-vlv.appspot.com',
      apiKey: 'AIzaSyD6BjWuF_VYrdK7MBapMp-iGJaW1PgNWXc',
      authDomain: 'financial-control-vlv.firebaseapp.com',
      messagingSenderId: '955018390705',
    },
  },
  auth0Config: {
    connection: {
      domain: 'dev-fiyey1jb15idiylw.us.auth0.com',
      clientId: 'XcdmhMYWh3ICM2YGwUB79imHvYz9rxoo',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    },
  },
  production: false,
};
