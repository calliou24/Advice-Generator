import {useState} from 'react'
import {getAdvise} from '../helpers/getAdvise' 

interface Advise {
  advice: string
  id: number
  loading: boolean
}
export const useGetData = () => {
  const [adviseObj, setAdvise] = useState<Advise>({advice : 'Press the button to start', id : 0, loading : false})
  const generateAdvise = async () => {
    const {advice, id} = await getAdvise()
    setTimeout(()=> {
      setAdvise({advice : advice, id: id, loading: false})
    }, 500)
    setAdvise({advice : '', id : 0, loading : true})
  }
  return {adviseObj, generateAdvise}
}