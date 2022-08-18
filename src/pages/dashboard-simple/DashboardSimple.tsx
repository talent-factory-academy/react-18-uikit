import axios from 'axios';
import React, { FunctionComponent, FunctionComponentElement, useEffect, useState } from 'react';
import { Widget } from '../../model/widget';
import { COMPONENTS } from '../../shared/widgets';


const DashboardSimple = () => {
  const [widgets, setWidgets] = useState<Widget[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/dashboard-simple`)
      .then(res => setWidgets(res.data))
  }, []);

  return <div className="mx-auto max-w-screen-lg">
    <h1>Dashboard Simple</h1>
    {
      widgets.map((widget, index) => {
        const component: FunctionComponentElement<{data: any}> =
          React.createElement(COMPONENTS[widget.type], { ...widget.data })

        return <div key={index}>
          {component}
        </div>
      })
    }

  </div>
};

export default DashboardSimple
