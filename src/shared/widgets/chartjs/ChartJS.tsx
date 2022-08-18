import { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration, ChartItem, registerables } from 'chart.js';
Chart.register(...registerables);

interface ChartJSProps {
  title?: string;
  chartType? : 'radar' | 'line';
  data: number[];
  labels: string[];
}

function ChartJS(props: ChartJSProps) {
  const host = useRef<HTMLCanvasElement>(null);
  const myChart = useRef<Chart | null>(null);
  const { data, title, labels, chartType = 'line'  } = props;

  useEffect(() => {
    // Init chart
    if (!myChart.current && host.current) {
      // clone chart default configuration
      const cfg = JSON.parse(JSON.stringify(config))
      // extends default config with the chartType
      cfg.type = chartType
      // render Chart First Time
      myChart.current = new Chart(
        host.current.getContext('2d') as ChartItem,
        cfg
      );
    }
  }, [chartType]);

  useEffect(() => {
    // Update Chart Data
    if (data) {
      myChart.current!.data.datasets[0].data = data;
    }

    // Update title / Legend
    if (title) {
      myChart.current!.legend!.options.display = true
      myChart.current!.data.datasets[0].label = title;
    } else {
      myChart.current!.legend!.options.display = false;
      myChart.current!.data.datasets[0].label = '';
    }

    myChart.current!.update();
  }, [data, title]);

  useEffect(() => {
    // update labels
    myChart.current!.data.labels = labels;
    myChart.current!.update();
  }, [labels]);

  return <div style={{ width: '100%'}}>
    <canvas ref={host}></canvas>
  </div>

}



// CHART DEFAULT  CONFIGURATION
export const config: ChartConfiguration = {
  type: 'radar',
  data: {
    labels: [],  // dinamically populated via props
    datasets: [{
      label: '',
      data: [],   // dinamically populated via props
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
  },
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  },
};

export default ChartJS;
