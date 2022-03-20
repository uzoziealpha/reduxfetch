import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadData } from '../redux/complimentRedux/compliment.actions'
import { COMPLIMENT_KEY } from '../redux/complimentRedux/compliment.reducer'

const Filter = () => {
    // initialize useDispatch
   let dispatch = useDispatch()


    useEffect(() => {
        dispatch(loadData())

    }, [])

    //view data from store
    let viewData = useSelector((state) => {
        return state[COMPLIMENT_KEY]

    })

   


 return (

    <div>
      <div>
       <h3>Latest Results: {viewData.data.data.length}</h3>
      </div>

    
    </div>     
   )
}

export default Filter






