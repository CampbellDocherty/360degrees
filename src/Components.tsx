import { styled } from 'styled-components';
import { countries } from './assets/countries';
import { NavBar } from './NavBar';
import { Container } from './styles';

const Slider = styled.div`
  flex: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 16px;
`;

const SliderPiece = styled.div`
  max-width: 1000px;
  height: 80vh;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 0px 16px;
  flex-direction: column;
  gap: 16px;
  margin: 16px 0px;
`;

const Countries = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  overflow-x: scroll;
`;

const Country = styled.img`
  flex: 1;
  max-width: 200px;
`;

const CountryName = styled.p`
  font-family: 'Inconsolata';
  color: white;
  padding: 0;
  font-size: 16px;
  margin: 0;
`;

const ComponentName = styled.p`
  font-family: 'Inconsolata';
  color: white;
  padding: 0;
  font-size: 24px;
  margin: 0;
`;

const Text = styled.p`
  font-family: 'Inconsolata';
  color: white;
  padding: 0;
  font-size: 20px;
  margin: 0;

  & > a {
    color: white;
    text-decoration: underline;
  }
`;

const components = [
  {
    name: 'Arduino Leonardo & Arduino IoT Nano 33',
    countries: [
      countries.italy,
      countries.peru,
      countries.chile,
      countries.china,
      countries.usa,
      countries.drc,
    ],
    text: `
    The Arduino’s are distributed from Italy but are assembled using materials from all over the world. Copper, most likely from Chile or Peru. Gold, processed in China but maybe <a href="https://www.npr.org/2024/12/04/nx-s1-5208953/dr-congo-mining-capital-us-china-lobito-corridor-minerals-copper-africa-angola" target="_blank">sourced originally from mines</a> in the DRC. Silicon and plastics, like with most of the components used for this project, can be <a href="https://www.waferworld.com/post/the-silicon-supply-chain#:~:text=Silicon%20is%20produced%20throughout%20the,Brazil" target="_blank">traced most probably back</a> to the US and China and by way of its reliance on petroleum quite likely the Middletrong>`,
  },
  {
    name: 'Rasperry Pi',
    countries: [
      countries.uk,
      countries.peru,
      countries.chile,
      countries.china,
      countries.usa,
      countries.drc,
    ],
    text: 'The Raspberry Pi is very similar to the Arduino’s that I used. <a href="https://www.sonypencoed.co.uk/sony-manufacturing/" target="_blank">Assembled and distributed</a> from the UK but using materials and parts from around the globe. Again, the use of copper, gold and plastics mean that the same countries were most likely involved in the supply chain at some point.',
  },
  {
    name: 'Acrycast Acrylic',
    countries: [countries.uk, countries.malaysia],
    text: 'I used Acrycast Acrylic to create the case for the remote control and the tripod mount that holds the camera. Although I purchased the acrylic in the UK at the arts store from what I could find, there is a <a href="https://ubacrylic.com/production-process/" target="_blank">big manufacturer</a> of this type of acrylic in Malaysia. This factory provides suppliers globally and so could have been where my acrylic was originally from but again it’s hard to know for sure.',
  },
];

export const Components = () => {
  return (
    <Container style={{ overflowY: 'hidden' }}>
      <NavBar />
      <Slider>
        <SliderPiece>
          <ComponentName>Components used in this project</ComponentName>
          <Text>
            It was very difficult trying to track down firstly, the materials
            used to make each component and secondly, where those materials may
            have been sourced from. It&apos;s a real indication of how
            globalised supply chains have become when you can easily spend a
            week researching the origins of just one product.
          </Text>
          <Text>
            Most concerning was the fact that a lot of the components relied on
            petroleum for the production of the plastics used. So, in turn using
            these products exacerbates issues of climate change and the
            injustices associated. Equally, I was sad to find that the DRC was
            most likely involved in the supply chain. China and the US operate
            mines in the DRC and extract copper and gold for processing. It is
            likely then that the copper and gold used in the components in this
            project may have come from the DRC where global demand for their
            natural resources is fueling a deadly conflict.
          </Text>
          <CountryName style={{ marginTop: '48px' }}>
            Scroll down for an in depth look at the projects most crucial
            components
          </CountryName>
        </SliderPiece>
        {components.map((component) => {
          return (
            <SliderPiece key={component.name}>
              <ComponentName>{component.name}</ComponentName>
              <Countries>
                {component.countries.map((country) => {
                  return (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        alignItems: 'center',
                      }}
                      key={country.name}
                    >
                      <Country src={country.src} alt={country.name} />
                      <CountryName>{country.name}</CountryName>
                    </div>
                  );
                })}
              </Countries>
              <Text dangerouslySetInnerHTML={{ __html: component.text }} />
            </SliderPiece>
          );
        })}
      </Slider>
    </Container>
  );
};
