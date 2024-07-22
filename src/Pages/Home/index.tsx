import Banner from '../../components/Banner'
import Loader from '../../components/Loader'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestauranteQuery } from '../../services/api'

const HomePag = () => {
  const { data: restaurante, isLoading } = useGetRestauranteQuery()
  if (restaurante) {
    return (
      <>
        <Banner />
        <RestaurantList isLoading={isLoading} restaurantes={restaurante} />
      </>
    )
  }
  return <Loader />
}

export default HomePag
