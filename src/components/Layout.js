import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadData } from '../redux/complimentRedux/compliment.actions'
import { COMPLIMENT_KEY } from '../redux/complimentRedux/compliment.reducer'
import Filter from './Filter'

const Layout = () => {
    // initialize useDispatch
    let dispatch = useDispatch()


    useEffect(() => {
        dispatch(loadData())

    }, [dispatch])

    //view data from store
    let viewData = useSelector((state) => {
        return state[COMPLIMENT_KEY]

    })

    // <pre>{JSON.stringify(viewData)}</pre> 



    return (
        
        <React.Fragment>
        <Filter/>
            <div className='row'>
                {
                    viewData.data.length === 0 ? null :
                        <React.Fragment>
                            {
                                viewData.data.data.map((item) => {
                                 
                                    return (
                                        <>
                                        
                                        <div
                                          className="col-md-3 shadow-lg p-3 mb-5 bg-white rounded"
                                          style={{ margin: "40px" }}
                                        >
                                        
                                
                                        
                                            <div className="w-100">
                                            <img src={item.companyLogo} className='img-fluid'/>
                                              <p>Company Name: {item.companyName}</p>
                                              <p>Job Title: {item.jobTitle}</p>
                                              <p>Line Manager: {item.lineManager}</p>
                                              <p>Seniority: {item.seniority}</p>
                                            </div>
                                
                                            <div className="bounty w-100">
                                              <h2>Bounty: HK$ {item.bounty}</h2>
                                              <p>+HK$500 upon interview</p>
                                            </div>
                                          </div>


                                     
                                      
                                      
                                      </>
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