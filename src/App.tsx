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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: '50%',
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'fixed',
          top: '0px',
          left: '0px',
        }}
      >
        <p>360degrees</p>
      </div>
      {content && (
        <div
          style={{
            width: '50%',
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            position: 'absolute',
            right: '0px',
            top: '0px',
          }}
        >
          {content.map((image, index) => {
            return (
              <img
                style={{ width: '200px', height: '140px' }}
                key={image.downloadUrl}
                src={image.downloadUrl}
                alt={`The number of this one is ${index + 1}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
