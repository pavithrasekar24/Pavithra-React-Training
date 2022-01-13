import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
export function Sidebar() {
  let sidebarDetails = [
    { id: 1, path: '/', label: 'Home' },
    { id: 2, path: '/about-us', label: 'About Us' },
    { id: 3, path: '/career', label: 'Carrer' },
    // {
    //   id: 4,
    //   path: 'https://www.npmjs.com/package/react-router-dom/v/5.3.0',
    //   label: 'NPM',
    // },
    // {
    //   id: 5,
    //   path: '/error',
    //   label: 'error',
    // },
    { id: 4, path: '/hooks', label: 'Hooks' },
    { id: 5, path: '/lifecycle', label: 'Lifecycle' },
    { id: 6, path: '/context', label: 'Context' },
    { id: 7, path: '/api-curd', label: 'CURD Operation (axios)' },
  ];
  return (
    <div className="sidebar">
      <nav>
        {sidebarDetails.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.path}>{item.label}</Link>
              {/* url change  */}
            </li>
          );
        })}
      </nav>
    </div>
  );
}
