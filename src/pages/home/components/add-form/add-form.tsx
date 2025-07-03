import { Button, TextField } from '@mui/material'
import { toast } from 'react-toastify'

import { addCity, citiesSlice, useAppDispatch, useAppSelector } from '@/store'

import styles from './add-form.module.scss'

export const AddForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const isPending = useAppSelector(citiesSlice.selectors.selectIsFetchCitiesPending)
  const cities = useAppSelector(citiesSlice.selectors.selectCities)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const city = formData.get('city') as string

    const cityExists = cities.some(c => c.name === city)
    if (cityExists) {
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
