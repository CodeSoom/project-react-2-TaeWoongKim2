import React, { useEffect } from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import HomePage from './HomePage';

import FoodPage from './FoodPage';

import MenusPage from './MenusPage';

import { loadFoodData } from './slice';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFoodData());
  });

  return (
    <GridLayout>
      <Aside><></></Aside>
      <Section>
        <AppContainer>
          <AppHeader>
            <h2>
              <Link to="/">오늘 뭐 먹지?!</Link>
            </h2>
          </AppHeader>
          <AppContent>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/food" component={FoodPage} />
              <Route exact path="/foods" component={MenusPage} />
            </Switch>
          </AppContent>
          <AppFooter />
        </AppContainer>
      </Section>
      <Aside><></></Aside>
    </GridLayout>
  );
}
