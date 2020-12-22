import { useEffect } from 'react'
import { generateRecipes } from '../../api/recipePuppy'

export const Index = (props) => {
  // const [recipes, setRecipes] = useState(null)
  const { msgAlert } = props
  useEffect(() => {
    generateRecipes()
      .then(res => console.log(res.data))
      .catch(() => msgAlert({
        heading: 'Index Fail',
        message: 'Failed to index',
        variant: 'danger'
      }))
  }, [])
  return (null)
}
