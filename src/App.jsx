import React from 'react';

import styled from '@emotion/styled';

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
            <h1>오늘 뭐 먹지?!</h1>
            <p>무엇을 먹을지 고민이라면,</p>
            <p>오늘 한 끼 여기에 맡겨라!</p>
            <button type="button">메뉴 뽑기</button>
          </AppContent>
          <AppFooter />
        </AppContainer>
      </Section>
      <Aside><></></Aside>
    </GridLayout>
  );
}
