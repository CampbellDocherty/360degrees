import { styled } from 'styled-components';
import { NavBar } from './NavBar';
import { Container } from './styles';
import { countries } from './assets/countries';

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
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
  margin: 16px;
`;

const ComponentName = styled.p`
  font-family: 'Inconsolata';
  color: white;
  padding: 0;
  font-size: 24px;
  margin: 16px;
`;

const Text = styled.p`
  font-family: 'Inconsolata';
  color: white;
  padding: 0;
  font-size: 20px;
  margin: 16px;

  & > a {
    color: white;
    text-decoration: underline;
  }
`;

const components = [
  {
    name: 'Arduino Leonardo',
    countries: [
      countries.italy,
      countries.chile,
      countries.peru,
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
      countries.chile,
      countries.peru,
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
    <Container>
      <NavBar />
      <Text>
        It was very difficult trying to track down firstly the materials used to
        make each component and secondly where those materials may have been
        sourced from. It&apos;s a real indication of how globalised supply
        chains have become when you can easily spend a week researching the
        origins of just one product.
      </Text>
      {components.map((component) => {
        return (
          <ComponentContainer key={component.name}>
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
          </ComponentContainer>
        );
      })}
    </Container>
  );
};
