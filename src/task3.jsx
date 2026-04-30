import React, { useState } from 'react';

export default function Task3() {
  const [showList, setShowList] = useState(true);
  const [filter, setFilter] = useState('all');

  const tasks = [
    { id: 1, title: 'Complete project', category: 'work', status: 'pending' },
    { id: 2, title: 'Buy groceries', category: 'personal', status: 'completed' },
    { id: 3, title: 'Review code ', category: 'work', status: 'in-progress' },
    { id: 4, title: 'Call dentist', category: 'personal', status: 'pending' },
    { id: 5, title: 'Plan vacation', category: 'personal', status: 'completed' },
  ];

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'work') return task.category === 'work';
    if (filter === 'personal') return task.category === 'personal';
    if (filter === 'pending') return task.status === 'pending';
    if (filter === 'completed') return task.status === 'completed';
    return true;
  });

  return (
    <div className="page-shell">
      <div className="card">
        <h1>Task Management</h1>

        <section className="card-section">
          <h2>Controls</h2>
          <button className="btn btn-primary" onClick={() => setShowList(!showList)}>
            {showList ? 'Hide' : 'Show'} Task List
          </button>

          <div className="button-row" style={{ marginTop: '12px' }}>
            <button className="btn btn-secondary" onClick={() => setFilter('all')}>All</button>
            <button className="btn btn-secondary" onClick={() => setFilter('work')}>Work</button>
            <button className="btn btn-secondary" onClick={() => setFilter('personal')}>Personal</button>
            <button className="btn btn-secondary" onClick={() => setFilter('pending')}>Pending</button>
            <button className="btn btn-secondary" onClick={() => setFilter('completed')}>Completed</button>
          </div>
        </section>

        {showList && (
          <section className="card-section">
            <h2>Tasks ({filteredTasks.length})</h2>
            {filteredTasks.length === 0 ? (
              <div className="panel">
                <p>No Data Available</p>
              </div>
            ) : (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {filteredTasks.map(task => (
                  <li key={task.id} style={{ padding: '18px', border: '1px solid rgba(83, 8, 140, 0.12)', borderRadius: '14px', background: 'rgba(83, 8, 140, 0.03)', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', fontWeight: 700 }}>
                      <strong>{task.title}</strong>
                      <span style={{ color: task.status === 'pending' ? 'orange' : task.status === 'completed' ? 'green' : 'blue', fontWeight: 600 }}>{task.status}</span>
                    </div>
                    <div style={{ color: 'var(--text)', opacity: 0.9, marginTop: '4px' }}>Category: {task.category}</div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
