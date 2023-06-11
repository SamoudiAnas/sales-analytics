import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "@/firebase";
import { SignUpForm } from "@/types/account";

export const createUser = async (data: SignUpForm) => {
  const { name, email, password } = data;

  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      //@TODO: create user doc after user creation

      return user;
    }
  );
};

export const signIn = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const signInWithGoogle = async () => {
  return await signInWithPopup(auth, googleProvider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  });
};

export const signOutUser = async () => {
  await signOut(auth)
    .then(() => {})
    .catch((error) => {});
};
