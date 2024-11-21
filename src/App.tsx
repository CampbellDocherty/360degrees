import { useEffect, useState } from 'react';
import { FirebaseStorageContent, getFiles } from './firebase';
import { Container, StreamContainer, StreamImage, Text } from './styles';

const App = () => {
  const [content, setContent] = useState<FirebaseStorageContent[] | null>(null);

  useEffect(() => {
    const get = async () => {
      const files = await getFiles();
      setContent(files);
    };

    get(); // initial get

    setInterval(() => {
      get();
    }, 5000);
  }, []);

  return (
    <Container>
      <Text>100° sonic self portraits</Text>

      {content && (
        <StreamContainer>
          {content.map((image, index) => {
            return (
              <StreamImage
                $delay={`${index * 0.05}s`}
                key={image.downloadUrl}
                src={image.downloadUrl}
                alt={`The number of this one is ${index + 1}`}
              />
            );
          })}
        </StreamContainer>
      )}
    </Container>
  );
};

export default App;
