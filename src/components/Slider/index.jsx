import styles from './Slider.module.css'
export default function Slider () {
  return (
    <div className={styles.slider}>
      <img className={styles.sliderImg} src='/images/slider_1.jpg' />
      <img className={styles.sliderImg} src='/images/slider_1.jpg' />
    </div>
  )
}
