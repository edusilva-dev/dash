import React, { FC } from 'react'

interface IEmployee {
  name: string
  cpf: number
  category: string
  local: string
  hour: string
  date: string
}

const Employee: FC<IEmployee> = ({ name, cpf, category, local, hour, date }) => {
  return (
    <tr className="employee">
      <td className="employee__name">{name}</td>
      <td className="employee__cpf">{cpf}</td>
      <td className="employee__category">{category}</td>
      <td className="employee__local">{local}</td>
      <td className="employee_hour">{hour}</td>
      <td className="employee_date">{date}</td>
    </tr>
  )
}

export default Employee
