
import db from '../../data/db.json'
import styles from './Slider.module.css'
export default function Slider () {
  const url = db.url ?? ''
  return (
    <div className={styles.slider}>
      <img className={styles.sliderImg} src={`${url}/images/slider_1.jpg`} />
      {/* <img className={styles.sliderImg} src='../images/slider_1.jpg' /> */}
    </div>
  )
}
