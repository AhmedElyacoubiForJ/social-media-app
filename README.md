
### `npm install react-hook-form yup @hookform/resolvers`

## rules definitions in firestore
allow write, delete, update: if request.auth != null && request.auth.uid == request.resource.data.userId;
allow read: if request.auth != null;
  