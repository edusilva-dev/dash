import React, { FC } from 'react'
import employeesList from 'data/employeesMock'
import Employee from './employee/Employee'

const EmployeeList: FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>Categoria</th>
          <th>Local</th>
          <th>Hora</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {employeesList.map((employee, index) => (
          <Employee key={index} {...employee} />
        ))}
      </tbody>
    </table>
  )
}

export default EmployeeList
