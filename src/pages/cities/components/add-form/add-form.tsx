import { Button, TextField } from '@mui/material'
import { toast } from 'react-toastify'

import { citiesSlice, useAppDispatch, useAppSelector } from '@/store'

import styles from './add-form.module.scss'
import { addCity } from './model/add-city'

export const AddForm: React.FC = () => {
  const isPending = useAppSelector(citiesSlice.selectors.selectIsFetchCitiesPending)
  const selectCityByName = useAppSelector(citiesSlice.selectors.selectCityByName)
  const dispatch = useAppDispatch()

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const city = formData.get('city') as string

    if (selectCityByName(city)) {
      toast.error('City is already added')
      return
    }

    dispatch(addCity(city))
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
