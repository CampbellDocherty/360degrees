import { useEffect, useState } from 'react';
import { FirebaseStorageContent, getFiles } from './firebase';

const App = () => {
  const [content, setContent] = useState<FirebaseStorageContent[] | null>(null);
  useEffect(() => {
    const get = async () => {
      const files = await getFiles();
      setContent(files);
    };

    get();
  }, []);
  return (
    <div>
      <p>360degrees</p>
      {content && (
        <div style={{ width: '100%' }}>
          {content.map((image) => {
            return (
              <img
                style={{ width: '200px', height: '140px' }}
                key={image.downloadUrl}
                src={image.downloadUrl}
                alt="one of them"
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
