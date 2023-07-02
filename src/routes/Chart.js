import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartComponent = () => {
    const data = {
        labels: ['five', 'four', 'three', 'two', 'one'],
        datasets: [
          {
            label: 'reviews',
            data: [12, 19, 3, 5, 3],
            backgroundColor: [
                'rgba(76, 175, 80, 0.8)',
                ' rgba(30, 144, 255,0.8)',
                'rgba(255, 193, 7, 0.8)',
                'rgba(255, 87, 34, 0.8)',
                'rgba(213, 0, 0, 0.8)'
            ],
            borderColor: [
              'rgba(76, 175, 80, 1)',
              'rgba(30, 144, 255, 1)',
              'rgba(255, 193, 7, 1)',
              'rgba(255, 87, 34, 1)',
              'rgba(213, 0, 0, 1)'
            ],
            borderWidth: 1,
          },
        ],
    }
    return (
        <div>
            <Pie data={data} />
        </div>
    )
};

export default ChartComponent;
