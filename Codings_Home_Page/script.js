// Chart.js Example - Sales and Purchase Return Bar Graph

const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [
            {
                label: 'Total Sales',
                data: [90, 10, 75, 50, 25, 40, 70, 30, 20, 50, 30, 40],
                backgroundColor: '#00e5ff'
            },
            {
                label: 'Total Purchase Return',
                data: [20, 10, 30, 20, 10, 15, 25, 10, 8, 12, 10, 15],
                backgroundColor: '#b2ebf2'
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    color: 'white' // X-axis labels white
                },
                grid: {
                    color: 'rgba(255,255,255,0.1)' // light white grid lines
                }
            },
            y: {
                ticks: {
                    color: 'white' // Y-axis numbers white
                },
                grid: {
                    color: 'rgba(255,255,255,0.1)' // light white grid lines
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white' // legend labels (Total Sales, Total Purchase Return) white
                }
            }
        }
    }
});
