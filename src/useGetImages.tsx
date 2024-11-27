import { useState, useEffect } from 'react';
import { FirebaseStorageContent, getFiles } from './firebase';

export const useGetImages = () => {
  const [liveStream, setLiveStream] = useState<FirebaseStorageContent[] | null>(
    null
  );
  const [fullPortraits, setFullPortraits] = useState<
    FirebaseStorageContent[][] | null
  >(null);

  useEffect(() => {
    const get = async () => {
      const files = await getFiles();
      const sortedFiles = files.sort(
        (a, b) =>
          new Date(b.metadata.timeCreated).getTime() -
          new Date(a.metadata.timeCreated).getTime()
      );

      const newList = [];
      let i = 0;

      while (i < sortedFiles.length) {
        const loopMetadata = sortedFiles[i]?.metadata?.customMetadata?.loop;
        if (loopMetadata && loopMetadata == 'True') {
          const extracted = sortedFiles.splice(i, 6);
          newList.push(extracted);
        } else {
          i++;
        }
      }

      setFullPortraits(newList);

      setLiveStream(sortedFiles);
    };

    get(); // initial get

    setInterval(() => {
      get();
    }, 5000);
  }, []);

  return { liveStream, fullPortraits };
};
