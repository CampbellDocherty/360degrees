import { initializeApp } from 'firebase/app';
import { getStorage, listAll, ref, getDownloadURL } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCuaoWjRq826FqHGR4mt-PyIoHwZ4te3CU',
  authDomain: 'degrees-20f3f.firebaseapp.com',
  projectId: 'degrees-20f3f',
  storageBucket: 'degrees-20f3f.firebasestorage.app',
  messagingSenderId: '250965288043',
  appId: '1:250965288043:web:e4cc8b05f418e2b5e9bd2e',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const storage = getStorage();

// Create a reference under which you want to list
const listRef = ref(storage, 'uploads/');

export type FirebaseStorageContent = {
  downloadUrl: string;
};

export const getFiles = async () => {
  const res = await listAll(listRef);
  const promisedFiles = res.items.map(async (item) => {
    const storageRef = ref(storage, item.fullPath);
    const downloadUrl = await getDownloadURL(storageRef);
    return {
      downloadUrl,
    };
  });
  const files: FirebaseStorageContent[] = await Promise.all(promisedFiles);
  return files;
};
