import React from 'react';

import styled from '@emotion/styled';

import HomePage from './HomePage';

const GridLayout = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr minmax(480px, 1fr) 1fr',
  height: '100%',
  backgroundColor: 'rgb(193, 226, 242)',
});

const Section = styled.div({
  gridColumn: 'span 1',
});

const Aside = styled.div({
  gridColumn: 'span 1',
});

const AppContainer = styled.div({
  display: 'grid',
  gridTemplateRows: '60px 1fr 60px',
  height: '100%',
});

const AppHeader = styled.header({

});

const AppContent = styled.section({

});

const AppFooter = styled.footer({

});

export default function App() {
  return (
    <GridLayout>
      <Aside><></></Aside>
      <Section>
        <AppContainer>
          <AppHeader>
            <h2>오늘 뭐 먹지?!</h2>
          </AppHeader>
          <AppContent>
            <HomePage />
          </AppContent>
          <AppFooter />
        </AppContainer>
      </Section>
      <Aside><></></Aside>
    </GridLayout>
  );
}
