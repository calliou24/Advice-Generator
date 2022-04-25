import styles from './advice.module.css'
import patternDividerImg from '../../assets/images/pattern-divider-desktop.svg'
import { useGetData } from '../../hooks/useGetData'
import { AnimatePresence, motion } from 'framer-motion'
function Advise() {
  const {adviseObj, generateAdvise} = useGetData()
  const { advice, id, loading } = adviseObj

  return (
    <div className={styles.advice}>
      <AnimatePresence exitBeforeEnter>
        {
        loading == true 
          ? 
          <div className={styles.spinner}>
            <div className={styles.loading}/>
          </div> 
          : 
            <motion.div className={styles.adviceText} initial={{opacity: 0 }} animate={{opacity : 1}} exit={{opacity : 0}}>
              <small className={styles.adviceNum}>ADVICE #{id || '?'}</small>
              <motion.p initial={{x: -50}} animate={{x : 0}} className={styles.text}>"{ advice }"</motion.p> 
              <img className={styles.pattern} src={patternDividerImg} alt='pattern divider image'/>
            </motion.div> 
        }
      </AnimatePresence>
      <button className={styles.btn} onClick={generateAdvise}/>
    </div>
  )
}

export default Advise