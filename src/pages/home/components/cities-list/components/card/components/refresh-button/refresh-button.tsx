import { Button } from '@mui/material'

import { refreshCity, useAppDispatch, useAppSelector } from '@/store'

interface RefreshButtonProps {
  city: { name: string; id: number }
}

export const RefreshButton: React.FC<RefreshButtonProps> = ({ city }: RefreshButtonProps) => {
  const dispatch = useAppDispatch()
  const refreshingId = useAppSelector(state => state.cities.refreshingCityId)

  const isRefreshing = city.id === refreshingId

  const onClick = () => {
    dispatch(refreshCity(city))
  }

  return (
    <Button variant='outlined' onClick={onClick} disabled={isRefreshing}>
      Refresh
    </Button>
  )
}
