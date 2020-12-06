import React, { useEffect } from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import HomePage from 'domain/HomePage';
import MenuPage from 'domain/menu/MenuPage';
import MenusPage from 'domain/menus/MenusPage';

import { loadCategoryData, loadFoodData } from 'slice';

const GridLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-areas: 
    "nav-l header nav-r"
    "nav-l article nav-r"
    "nav-l footer nav-r";
  grid-template-rows: 60px 1fr auto;  
  grid-template-columns: 10% 1fr 10%;
  margin: 0;
  color: #eee;
  background-image: url(public/images/bg1_8x.jpg);
  background-position: center;
  background-size: cover;
  overflow-y: auto;
  & > header, footer, article, nav, div {
    padding: 1em;
    background: fff0;
  }
  @media all and (max-width: 767px) {
    grid-template-areas: 
      "header"
      "article"
      "footer";
    grid-template-rows: 80px 1fr auto;  
    grid-template-columns: 1fr;
    height: 100vh;
    & > nav { 
      display: none;
    }
  }
`;

const AppHeader = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  & > h3 {
    margin: .2em;
    font-size: 1.5em;
    & > a {
      text-decoration: none;
      color: #fff;
      &:hover {
        color: #e91e63;
      }
    }
  }
`;

const AppFooter = styled.footer`
  grid-area: footer;
  height: 1em;
`;

const AppLeftNavigator = styled.nav`
  grid-area: nav-l;
`;

const AppRightNavigator = styled.nav`
  grid-area: nav-r;
`;

const AppArticle = styled.article`
  grid-area: article;
  background-color: #000000aa;
`;

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFoodData());
    dispatch(loadCategoryData());
  });

  return (
    <GridLayout>
      <AppHeader>
        <h3>
          <Link to="/">오늘 뭐 먹지?!</Link>
        </h3>
      </AppHeader>
      <AppLeftNavigator />
      <AppRightNavigator />
      <AppArticle>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/menu" component={MenuPage} />
          <Route exact path="/menus" component={MenusPage} />
        </Switch>
      </AppArticle>
      <AppFooter />
    </GridLayout>
  );
}
