import { Button, TextField } from '@mui/material'
import { toast } from 'react-toastify'

import { citiesSlice, useAppSelector } from '@/store'

import { api } from '@/models'

import styles from './add-form.module.scss'

export const AddForm: React.FC = () => {
  const isPending = useAppSelector(citiesSlice.selectors.selectIsFetchCitiesPending)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const city = formData.get('city') as string
    api
      .getCity(city)
      .then(res => console.log(res))
      .catch(() => toast.error("City doesn't exist"))
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <TextField label='City name' name='city' size='medium' className={styles.form__input} />
      <Button variant='contained' type='submit' disabled={isPending}>
        Add
      </Button>
    </form>
  )
}
