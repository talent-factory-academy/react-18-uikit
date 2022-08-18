import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Button from '../../shared/widgets/buttons/Button';
import { ButtonGroup } from '../../shared/widgets/buttons/ButtonGroup';
import { Separator } from '../../shared/widgets/layout/Separator';

export const UikitPage = () => {
  return <div>
    <h1>UiKit</h1>
    <ButtonGroup>
      <Link to="mapquest-static">
        <Button>MapQuest</Button>
      </Link>
      <Link to="panel">
        <Button>Panel</Button>
      </Link>
      <Link to="buttons">
        <Button>Buttons</Button>
      </Link>
      <Link to="leaflet">
        <Button>Leaflet</Button>
      </Link>
      <Link to="tabbar">
        <Button>TabBar</Button>
      </Link>
      <Link to="separator">
        <Button>Separator</Button>
      </Link>
      <Link to="layout">
        <Button>Layout</Button>
      </Link>
      <Link to="chartjs">
        <Button>ChartJS</Button>
      </Link>
      <Link to="landing">
        <Button>Landing Component</Button>
      </Link>



    </ButtonGroup>

    <Separator type="solid" height={1} color="#666"/>

    <Outlet />
  </div>
};
