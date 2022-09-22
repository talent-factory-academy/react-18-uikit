import React, { CSSProperties, lazy } from 'react';
import { BrowserRouter, Link, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { Spinner } from './shared/utils/Spinner';

import Button from './shared/widgets/buttons/Button';
import { ButtonGroup } from './shared/widgets/buttons/ButtonGroup';

const DashboardSimple = lazy(() => import( './pages/dashboard-simple/DashboardSimple'));
const DashboardLazy = lazy(() => import( './pages/dashboard-simple/DashboardLazy'));
const ButtonsDemo = lazy(() => import( './pages/uikit/pages/ButtonsDemo'));
const ChartJSDemo = lazy(() => import( './pages/uikit/pages/ChartJSDemo'));
const LandingDemo = lazy(() => import( './pages/uikit/pages/LandingDemo'));
const LayoutDemo = lazy(() => import( './pages/uikit/pages/LayoutDemo'));
const LeafletDemo = lazy(() => import( './pages/uikit/pages/LeafletDemo'));
const MapQuestStaticDemo = lazy(() => import( './pages/uikit/pages/MapQuestStaticDemo'));
const PanelsDemo = lazy(() => import( './pages/uikit/pages/PanelDemo'));
const SeparatorsDemo = lazy(() => import( './pages/uikit/pages/SeparatorsDemo'));
const TabbarDemo = lazy(() => import( './pages/uikit/pages/TabbarDemo'));
const MiscDemo = lazy(() => import( './pages/uikit/pages/MiscDemo'));
const UikitPage = lazy(() => import( './pages/uikit/UikitPage'));

const isActive = (obj: { isActive: boolean} ) => obj.isActive ? { fontWeight: 'bold'} : {}

function App() {
  return (
    <BrowserRouter>
      <ButtonGroup inline={false} style={{backgroundColor: 'darkslategray'}}>
        <NavLink to="uikit"  style={isActive}>
          <Button>UI Kit</Button>
        </NavLink>
        <NavLink to="dashboard-simple" style={isActive}>
          <Button>Dashboard simple</Button>
        </NavLink>
        <NavLink to="dashboard-lazy"  style={isActive}>
          <Button>Dashboard Lazy</Button>
        </NavLink>
      </ButtonGroup>


      <div className="max-w-screen-md mx-auto">
        <Routes>
          <Route path="dashboard-simple" element={
            <React.Suspense fallback={<Spinner />}>
              <DashboardSimple />
            </React.Suspense>
          } />
          <Route path="dashboard-lazy" element={
            <React.Suspense fallback={<Spinner />}>
              <DashboardLazy />
            </React.Suspense>
            }
          />
          <Route path="uikit" element={
            <React.Suspense fallback={<Spinner />}>
              <UikitPage />
            </React.Suspense>
          }>
            <Route path="mapquest-static" element={<MapQuestStaticDemo /> } />
            <Route path="panel" element={<PanelsDemo /> } />
            <Route path="buttons" element={<ButtonsDemo /> } />
            <Route path="leaflet" element={<LeafletDemo /> } />
            <Route path="separator" element={<SeparatorsDemo /> } />
            <Route path="tabbar" element={<TabbarDemo /> } />
            <Route path="layout" element={<LayoutDemo /> } />
            <Route path="landing" element={<LandingDemo /> } />
            <Route path="chartjs" element={<ChartJSDemo /> } />
            <Route path="misc" element={<MiscDemo /> } />
            <Route index element={<Navigate to="mapquest-static" /> } />
          </Route>

          <Route index element={
            <Navigate to="uikit" />
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
