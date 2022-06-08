import React, { Fragment } from 'react';

import './App.css';
import 'antd/dist/antd.min.css';
import GlobalStyle from './styles/globalStyle.style';
import { HashRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/mainPage/MainPage.component';
import MyStudyPage from './pages/myStudyPage/MyStudyPage.component';
import MyProfilePage from './pages/myProfilePage/MyProfilePage.component';
import CreateStudyPage from './pages/createStudyPage/CreateStudyPage.component';
import StudyDetailsPage from './pages/studyDetailsPage/StudyDetailsPage.component';

import Navbar from './components/common/layout/navbar/Navbar.component';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/myProfile" element={<MyProfilePage />} />
          <Route path="/myStudy" element={<MyStudyPage />} />
          <Route path="/createStudy" element={<CreateStudyPage />} />
          <Route path="/studyDetails/:studyId" element={<StudyDetailsPage />} />
        </Routes>
      </HashRouter>
    </Fragment>
  );
}

export default App;
