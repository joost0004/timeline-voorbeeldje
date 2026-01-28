import { useState } from 'react'
import './App.scss'
import { Button } from './components/Button/Button'
import Card from './components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  const jobs = [
    {
      title: "Principal Software Engineer",
      company: "Hypernova Labs",
      location: "San Francisco, CA",
      description: "Leading the development of the next-generation spatial computing platform. Architecting high-performance React applications and orchestrating cloud infrastructure for global scale.",
      highlights: [
        "Spearheaded transition to SCSS modules",
        "Reduced bundle size by 40%",
        "Mentored senior engineering staff"
      ]
    },
    {
      title: "Senior Full Stack Developer",
      company: "Nebula Systems",
      location: "Remote",
      description: "Developed core features for a real-time collaborative workspace. Implemented complex state management solutions and optimized database queries for sub-second response times.",
      highlights: [
        "Implemented real-time sync with WebSockets",
        "Built comprehensive CI/CD pipelines",
        "Led a team of 5 developers"
      ]
    },
    {
      title: "Software Engineer",
      company: "Quantum Flow",
      location: "Austin, TX",
      description: "Contributed to the development of a microservices-based analytics dashboard. Focused on data visualization and API design.",
      highlights: [
        "Designed and implemented RESTful APIs",
        "Integrated D3.js for complex data charts",
        "Improved test coverage by 25%"
      ]
    }
  ];

  return (
    <>
      <h1>Timeline example</h1>

      <div className="timeline">
        {jobs.map((job, index) => (
          <div className="timeline__item" key={index}>
            <div className="timeline__item__marker"></div>
            <Card job={job} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App
