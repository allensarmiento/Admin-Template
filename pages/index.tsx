import Head from 'next/head'
import BarChart from '../components/bar-chart'
import DoughnutChart from '../components/doughnut-chart'
import GraphCard from '../components/graph-card'
import LineGraph from '../components/line-graph'
import MetricCard from '../components/metric-card'
import Container from '../core/container'
import Nav from '../core/nav';
import Sidebar from '../core/sidebar'
import classnames from 'classnames'

export default function Home() {
  return (
    <div className={classnames('w-screen', 'h-screen')}>
      <Head>
      <meta charSet="UTF-8" />
      <title>Tailwind Admin Starter Template</title>
      <meta name="author" content="name" />
      <meta name="description" content="description here" />
      <meta name="keywords" content="keywords,here" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" />
      <link href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" rel="stylesheet" />
      <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet" />
      </Head>
      <Container>
        <Nav />
        <div className={classnames(
          'flex',
          'flex-col',
          'md:flex-row',
          'bg-gray-800',
        )}>
          <Sidebar />
          <main className={classnames(
            'main-content',
            'flex-1',
            'mt-12',
            'md:mt-2',
            'pb-24',
            'md:pb-5',
            'bg-gray-100',
          )}>
            <div className="bg-gray-800 pt-3">
              <div className={classnames(
                'rounded-tl-3xl',
                'bg-gradient-to-r',
                'from-blue-900',
                'to-gray-800',
                'p-4',
                'shadow',
                'text-2xl',
                'text-white',
              )}>
                <h3 className="font-bold pl-2">Analytics</h3>
              </div>
            </div>
            <section className="flex flex-wrap">
              <MetricCard
                gradient={classnames(
                  'from-green-200',
                  'to-green-100',
                  'border-green-600',
                )}
                background="bg-green-600"
                icon="fa fa-wallet fa-2x fa-inverse"
                heading="Total Revenue"
                text="$3249"
                textColor="text-green-500"
                textIcon="fas fa-caret-up"
              />
              <MetricCard
                gradient={classnames(
                  'from-pink-200',
                  'to-pink-100',
                  'border-pink-500',
                )}
                background="bg-pink-600"
                icon="fas fa-users fa-2x fa-inverse"
                heading="Total Users"
                text="249"
                textColor="text-pink-500"
                textIcon="fas fa-exchange-alt"
              />
              <MetricCard
                gradient={classnames(
                  'from-yellow-200',
                  'to-yellow-100',
                  'border-yellow-600',
                )}
                background="bg-yellow-600"
                icon="fas fa-user-plus fa-2x fa-inverse"
                heading="Total Users"
                text="249"
                textColor="text-yellow-600"
                textIcon="fas fa-caret-up"
              />
              <MetricCard
                gradient={classnames(
                  'from-blue-200',
                  'to-blue-100',
                  'border-blue-500',
                )}
                background="bg-blue-600"
                icon="fas fa-server fa-2x fa-inverse"
                heading="Server Uptime"
                text="152 days"
                textColor=""
                textIcon=""
              />
              <MetricCard
                gradient={classnames(
                  'from-indigo-200',
                  'to-indigo-100',
                  'border-indigo-500',
                )}
                background="bg-indigo-600"
                icon="fas fa-tasks fa-2x fa-inverse"
                heading="To Do List"
                text="7 Tasks"
                textColor=""
                textIcon=""
              />
              <MetricCard
                gradient={classnames(
                  'from-red-200',
                  'to-red-100',
                  'border-red-500',
                )}
                background="bg-red-600"
                icon="fas fa-inbox fa-2x fa-inverse"
                heading="Issues"
                text="3"
                textColor="text-red-500"
                textIcon="fas fa-caret-up"
              />
            </section>
            <section className={classnames(
              'flex',
              'flex-row',
              'flex-wrap',
              'flex-grow',
              'mt-2',
            )}>
              <GraphCard title="Bar Chart">
                <BarChart
                  labels={['January', 'February', 'March', 'April']}
                  datasets={[
                    {
                      label: 'Page Impressions',
                      data: [10, 20, 30, 40],
                      borderColor: 'rgb(255, 99, 132)',
                      backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    },
                    {
                      label: 'Adsense Clicks',
                      data: [5, 15, 10, 30],
                      type: 'line',
                      fill: false,
                      borderColor: 'rgb(54, 162, 235)',
                    },
                  ]}
                  options={{
                    scales: {
                      yAxes: [{
                        ticks: { beginAtZero: true },
                      }],
                    },
                  }}
                />
              </GraphCard>
              <GraphCard title="Line Graph">
                <LineGraph
                  labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
                  datasets={[
                    {
                      label: 'Views',
                      data: [65, 59, 80, 81, 56, 55, 40],
                      fill: false,
                      borderColor: 'rgb(75, 192, 192)',
                      lineTension: 0.1
                    },
                  ]}
                  options={{}}
                />
              </GraphCard>
              <GraphCard title="Bar Chart">
                <BarChart
                  labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
                  datasets={[
                    {
                      label: 'Likes',
                      data: [65, 59, 80, 81, 56, 55, 40],
                      fill: false,
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)',
                      ],
                      borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)',
                      ],
                      borderWidth: 1,
                    },
                  ]}
                  options={{
                    scales: {
                      yAxes: [{
                        ticks: { beginAtZero: true },
                      }],
                    },
                  }}
                />
              </GraphCard>
              <GraphCard title="Doughnut Chart">
                <DoughnutChart
                  labels={['P1', 'P2', 'P3']}
                  datasets={[
                    {
                      label: 'Issues',
                      data: [300, 50, 100],
                      backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                      ],
                    },
                  ]}
                />
              </GraphCard>
              <GraphCard title="Table">
                <table className={classnames(
                  'p-5',
                  'w-full',
                  'text-gray-700',
                )}>
                  <thead>
                    <tr>
                      <th className="text-left text-blue-900">Name</th>
                      <th className="text-left text-blue-900">Side</th>
                      <th className="text-left text-blue-900">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Obi Wan Kenobi</td>
                      <td>Light</td>
                      <td>Jedi</td>
                    </tr>
                    <tr>
                      <td>Greendo</td>
                      <td>South</td>
                      <td>Scumbag</td>
                    </tr>
                    <tr>
                      <td>Darth Vadar</td>
                      <td>Dark</td>
                      <td>Sith</td>
                    </tr>
                  </tbody>
                </table>
                <p className="py-2">
                  <a>See more issues...</a>
                </p>
              </GraphCard>
            </section>
          </main>
        </div>
      </Container>
    </div>
  )
}
