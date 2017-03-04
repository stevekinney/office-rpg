import React from 'react';
import './Character.css';

const Character = ({
  company,
  constitution,
  dateCreated,
  department,
  dexterity,
  email,
  firstName,
  hp,
  intelligence,
  lastName,
  strength
}) => (
  <article className="Character">
    <h3>{firstName} {lastName}</h3>
    <h4>Details</h4>
    <table className="Character--bio">
      <tbody>
        <tr>
          <th>Company</th>
          <td>{company}</td>
        </tr>
        <tr>
          <th>Department</th>
          <td>{department}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{email}</td>
        </tr>
      </tbody>
    </table>
    <h4>Statistics</h4>
    <table className="Character--stats">
      <tbody>
        <tr>
          <th>HP</th>
          <td>{hp}</td>
        </tr>
        <tr>
          <th>Strength</th>
          <td>{strength}</td>
        </tr>
        <tr>
          <th>Intelligence</th>
          <td>{intelligence}</td>
        </tr>
        <tr>
          <th>Dexterity</th>
          <td>{dexterity}</td>
        </tr>
        <tr>
          <th>Constitution</th>
          <td>{constitution}</td>
        </tr>
        <tr>
          <th>Intelligence</th>
          <td>{intelligence}</td>
        </tr>
      </tbody>
    </table>
  </article>
);

export default Character;
