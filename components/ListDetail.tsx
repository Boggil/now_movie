import * as React from 'react'

import { User } from 'interfaces'

type ListDetailProps = {
  item: User
}

function onClick(name: string): void {
  console.log('My Name is: ', name, ' !');
}

const ListDetail = ({ item: user }: ListDetailProps) => {
  console.log(user);

  return (
    <div>
      <h1>Detail for {user.name}</h1>
      <p>ID: {user.id}</p>
    </div>
  )
}

export default ListDetail
