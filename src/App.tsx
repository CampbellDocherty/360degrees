import {
  Container,
  PortraitImage,
  PortraitImageContainer,
  PortraitImages,
  StreamContainer,
  StreamImage,
  StreamImages,
  StreamTitle,
  Text,
} from './styles';
import { useGetImages } from './useGetImages';

const App = () => {
  const { liveStream, fullPortraits } = useGetImages();

  return (
    <Container>
      <Text>60° sonic self portraits</Text>

      {liveStream && (
        <StreamContainer>
          <StreamTitle>
            Live <span>◉</span>
          </StreamTitle>
          <StreamImages>
            {liveStream.map((image, index) => {
              return (
                <StreamImage
                  $delay={`${index * 0.05}s`}
                  key={image.downloadUrl}
                  src={image.downloadUrl}
                  alt={`The number of this one is ${index + 1}`}
                />
              );
            })}
          </StreamImages>
        </StreamContainer>
      )}
      {fullPortraits &&
        fullPortraits.map((portrait, index) => {
          return (
            <StreamContainer key={index}>
              <StreamTitle>{portrait[0].metadata.timeCreated}</StreamTitle>
              <PortraitImages>
                {portrait.map((image, index) => {
                  return (
                    <PortraitImageContainer
                      $delay={`${index * 0.05}s`}
                      key={image.downloadUrl}
                    >
                      <PortraitImage
                        src={image.downloadUrl}
                        alt={`The number of this one is ${index + 1}`}
                      />
                    </PortraitImageContainer>
                  );
                })}
              </PortraitImages>
            </StreamContainer>
          );
        })}
    </Container>
  );
};

export default App;