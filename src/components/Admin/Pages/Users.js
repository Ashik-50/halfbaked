import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './Users.css';
import logo from '../Assets/logo.png';
const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  const fetchUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=30');
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar"style={{ width: 250, backgroundColor: '#333', color: '#fff', padding: 0, position: 'fixed', top: 0, bottom: 0, left: 0 }}>
        <div className="logo"style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: 20, paddingLeft: 5 }}>
          <img src={logo} alt="Logo" />
          <h2>CARESPHERE</h2>
        </div>
        <ul>
        <li><Link to="/admin/home">Dashboard</Link></li>
        <li><Link to="/admin/doc">Doctors</Link></li>
        <li><Link to="/admin/add">Add Doctors</Link></li>
        <li><Link to="/admin/user">Users</Link></li>
        <li><Link to="/admin/logout">Logout</Link></li>
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Users</h1>
        </div>
        <div className="content">
          <div className="searchArea">
            <input
              type="text"
              placeholder='Search...'
              className='userListSearch'
              onChange={handleSearch}
              value={search}
            />
          </div>
          <ul className='userList'>
            {users.results?.filter((user) => {
              return (
                user.login.username.toLowerCase().includes(search.toLowerCase()) ||
                user.name.first.toLowerCase().includes(search.toLowerCase()) ||
                user.name.last.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase()) ||
                user.location.country.toLowerCase().includes(search.toLowerCase())
              );
            }).map((user, index) => {
              return (
                <li className='user-card' key={index}>
                  <h3 className='username'>{user.login.username}</h3>
                  <p className='fullname'>{user.name.first} {user.name.last}</p>
                  <a href={`mailto:${user.email}`} className='email'>{user.email}</a>
                  <p className='location'>{user.location.country}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Users;