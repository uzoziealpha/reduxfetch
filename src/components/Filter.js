import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadData } from '../redux/complimentRedux/compliment.actions'
import { COMPLIMENT_KEY } from '../redux/complimentRedux/compliment.reducer'

const Filter = () => {

    const [loading, setLoading] = useState([])


    // initialize useDispatch
   let dispatch = useDispatch()


    useEffect(() => {
        dispatch(loadData())

    }, [dispatch])

    //view data from store
    let viewData = useSelector((state) => {
        return state[COMPLIMENT_KEY]
        
    })

   


 return (

    <div>
      <div>
       <h3>Latest Results: {COMPLIMENT_KEY.length}</h3>
      </div>

    
    </div>     
   )
}

export default Filter






