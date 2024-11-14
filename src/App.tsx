import { useEffect, useState } from 'react';
import { FirebaseStorageContent, getFiles } from './firebase';
import { Container, LeftSide, RightSide, StreamImage, Text } from './styles';
import { isMobile } from 'react-device-detect';

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
      <LeftSide $isMobile={isMobile}>
        <Text $isMobile={isMobile}>360degrees</Text>
      </LeftSide>
      {content && (
        <RightSide $isMobile={isMobile}>
          {content.map((image, index) => {
            return (
              <StreamImage
                $isMobile={isMobile}
                $delay={`${index * 0.05}s`}
                key={image.downloadUrl}
                src={image.downloadUrl}
                alt={`The number of this one is ${index + 1}`}
              />
            );
          })}
        </RightSide>
      )}
    </Container>
  );
};

export default App;
