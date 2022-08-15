import React from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import DashboardLazy from './pages/dashboard-simple/DashboardLazy';
import DashboardSimple from './pages/dashboard-simple/DashboardSimple';
import { ButtonsDemo } from './pages/uikit/pages/ButtonsDemo';
import { LandingDemo } from './pages/uikit/pages/LandingDemo';
import { LayoutDemo } from './pages/uikit/pages/LayoutDemo';
import { LeafletDemo } from './pages/uikit/pages/LeafletDemo';
import { MapQuestStaticDemo } from './pages/uikit/pages/MapQuestStaticDemo';
import { PanelDemo } from './pages/uikit/pages/PanelDemo';
import { SeparatorsDemo } from './pages/uikit/pages/SeparatorsDemo';
import { TabbarDemo } from './pages/uikit/pages/TabbarDemo';
import { UikitPage } from './pages/uikit/UikitPage';
import Button from './shared/widgets/buttons/Button';
import { ButtonGroup } from './shared/widgets/buttons/ButtonGroup';

function App() {
  return (
    <BrowserRouter>
      <ButtonGroup inline={false} style={{backgroundColor: 'darkslategray'}}>
        <Link to="dashboard-simple">
          <Button>Dashboard simple</Button>
        </Link>
        <Link to="dashboard-lazy">
          <Button>Dashboard Lazy</Button>
        </Link>
        <Link to="uikit">
          <Button>UI Kit</Button>
        </Link>
      </ButtonGroup>


      <div className="max-w-screen-md mx-auto">
        <Routes>
          <Route path="dashboard-simple" element={<DashboardSimple />} />
          <Route path="dashboard-lazy" element={<DashboardLazy />} />
          <Route path="uikit" element={<UikitPage />}>
            <Route path="mapquest-static" element={<MapQuestStaticDemo /> } />
            <Route path="panel" element={<PanelDemo /> } />
            <Route path="buttons" element={<ButtonsDemo /> } />
            <Route path="leaflet" element={<LeafletDemo /> } />
            <Route path="separator" element={<SeparatorsDemo /> } />
            <Route path="tabbar" element={<TabbarDemo /> } />
            <Route path="layout" element={<LayoutDemo /> } />
            <Route path="landing" element={<LandingDemo /> } />
            <Route index element={<Navigate to="mapquest-static" /> } />
          </Route>

          <Route index element={
            <Navigate to="dashboard-simple" />
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
