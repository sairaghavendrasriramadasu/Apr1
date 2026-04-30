import React from 'react'

export default function PortfolioList() {
  const teamMembers = [
    {
      id: 1,
      name: 'Sai Kumar',
      title: 'Frontend Developer',
      email: 'sai@gmail.com',
      location: 'Hyderabad',
    },
    {
      id: 2,
      name: 'Raghavendra',
      title: 'Project Manager',
      email: 'raghavendra@gmail.com',
      location: 'Bangalore',
    },
    {
      id: 3,
      name: 'Poojitha',
      title: 'UI/UX Designer',
      email: 'poojitha@gmail.com',
      location: 'Chennai',
    },
    {
      id: 4,
      name: 'Manasa',
      title: 'QA Tester',
      email: 'manasa@gmail.com',
      location: 'Pune',
    },
    {
      id: 5,
      name: 'Lakshmi',
      title: 'HR Coordinator',
      email: 'lakshmi@gmail.com',
      location: 'Mumbai',
    },
  ]

  return (
    <section className="team-portfolio">
      <h2>Team Portfolio</h2>
      <ul className="team-list">
        {teamMembers.map((member) => (
          <li key={member.id} className="team-item">
            <div className="team-item-header">
              <strong>{member.name}</strong>
              <span>{member.title}</span>
            </div>
            <div className="team-item-detail">Email: {member.email}</div>
            <div className="team-item-detail">Location: {member.location}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}
