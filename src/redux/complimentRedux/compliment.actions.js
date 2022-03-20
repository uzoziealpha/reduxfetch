import { LOAD_DATA_FAILURE,
    LOAD_DATA_SUCCESS,
    LOAD_DATA_REQUEST } from "./compliment.actionTypes";
import axios from "axios";

export const loadData = () =>{
return async (dispatch) =>{
   try{
       dispatch({type: LOAD_DATA_REQUEST})
       let dataURL = 'https://ergon-ms-gixholtv4q-df.a.run.app/api/bountyAd'
       let response = await axios.get(dataURL)
       dispatch({type: LOAD_DATA_SUCCESS, payload: response.data})
   }
   catch(error){
       dispatch({type: LOAD_DATA_FAILURE, payload: error})
   }
}
}