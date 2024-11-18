import { initializeApp } from 'firebase/app';
import {
  getStorage,
  listAll,
  ref,
  getDownloadURL,
  getMetadata,
} from 'firebase/storage';

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
  metadata: {
    timeCreated: string;
  };
};

export const getFiles = async () => {
  const res = await listAll(listRef);
  const promisedFiles = res.items.map(async (item) => {
    const storageRef = ref(storage, item.fullPath);
    const downloadUrl = await getDownloadURL(storageRef);
    const metadata = await getMetadata(storageRef);
    return {
      downloadUrl,
      metadata,
    };
  });
  const files: FirebaseStorageContent[] = await Promise.all(promisedFiles);
  const sortedFiles = files.sort(
    (a, b) =>
      new Date(b.metadata.timeCreated).getTime() -
      new Date(a.metadata.timeCreated).getTime()
  );
  return sortedFiles;
};
