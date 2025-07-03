import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

import { citiesSlice, useAppDispatch } from '@/store'

import styles from '../../card.module.scss'

interface DeleteButtonProps {
  cityId: number
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({ cityId }: DeleteButtonProps) => {
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(citiesSlice.actions.deleteCity({ cityId }))
  }

  return (
    <DeleteOutlineIcon className={styles.card__delete} onClick={onClick}>
      Delete
    </DeleteOutlineIcon>
  )
}
