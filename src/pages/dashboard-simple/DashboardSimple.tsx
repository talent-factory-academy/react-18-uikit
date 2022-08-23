import axios from 'axios';
import React, { FunctionComponentElement, useEffect, useState } from 'react';
import { Widget } from '../../model/widget';
import { COMPONENTS } from '../../shared/widgets';


const DashboardSimple = () => {
  const [widgets, setWidgets] = useState<Widget[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    axios.get(`http://localhost:3001/dashboard-simple`)
      .then(res => setWidgets(res.data))
      .catch(() => setError(true))
  }, []);

  return <div className="mx-auto max-w-screen-lg">
    <h1>Dashboard Simple</h1>
    {
      error && <div className="bg-red-200 p-5">
        Server Error: probably you need to start server with `npm run server`
      </div>
    }
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
