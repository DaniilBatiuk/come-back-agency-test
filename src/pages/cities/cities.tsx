import { Link, href } from 'react-router-dom'

import { ROUTES } from '@/models'

function Cities() {
  return (
    <div>
      Cities
      <Link to={href(ROUTES.CITY, { cityId: '1' })}>Hi</Link>
    </div>
  )
}

export const Component = Cities
