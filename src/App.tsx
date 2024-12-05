import { NavBar } from './NavBar';
import {
  Container,
  PortraitContainer,
  PortraitImage,
  PortraitImageContainer,
  PortraitImages,
  StreamContainer,
  StreamImage,
  StreamImages,
  StreamTitle,
} from './styles';
import { useGetImages } from './useGetImages';

const App = () => {
  const { liveStream, fullPortraits } = useGetImages();
  return (
    <Container>
      <NavBar />

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
            <PortraitContainer key={index}>
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
            </PortraitContainer>
          );
        })}
    </Container>
  );
};

export default App;
