import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadData } from '../redux/complimentRedux/compliment.actions'
import { COMPLIMENT_KEY } from '../redux/complimentRedux/compliment.reducer'

const Layout = () => {
    // initialize useDispatch
    let dispatch = useDispatch()


useEffect( () =>{
    dispatch(loadData())

}, [dispatch])

//view data from store
let viewData = useSelector((state) => {
  return state[COMPLIMENT_KEY]
  
})

// <pre>{JSON.stringify(viewData)}</pre> 


   return (
      <React.Fragment>
      
     <div className='card-body'>
     {
         viewData.data.length === 0? null:
         <React.Fragment>
          {
              viewData.data.data.map((item) => {
                  return (
                      <div key={item.id}>
                        <div className='row'>
                            <p>DATA{item.companyName}</p>
                        </div>

                        
                      </div>
                  )
              })
          }
         </React.Fragment>
     }
     
     </div>




      </React.Fragment>
      
   )
    
}
    
        
    

export default Layout