import styles from './main.module.css';

import web3 from '../../assets/images/image-web-3-desktop.jpg';
import web3Mobile from '../../assets/images/image-web-3-mobile.jpg';

const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <article>
        <img
          className={styles.mainImageMobile}
          src={web3Mobile}
          alt='Brightly colored wooden blocks'
        />
        <img
          className={styles.mainImage}
          src={web3}
          alt='Brightly colored wooden blocks'
        />
        <div className={styles.mainHeading}>
          <h1>The Bright Future of Web 3.0?</h1>
        </div>
        <div className={styles.mainContent}>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
          <input type='button' value='Read More' />
        </div>
      </article>
      <section>
        <h2>New</h2>
        <div className={styles.newArticle}>
          <div className={styles.newHeadline}>Hydrogen VS Electric Cars</div>
          <div className={styles.newContent}>
            Will hydrogen-fueled cars ever catch up to EVs?
          </div>
        </div>
        <div className={styles.newArticle}>
          <div className={styles.newHeadline}>The Downsides of AI Artistry</div>
          <div className={styles.newContent}>
            What are the possible adverse effects of on-demand AI image
            generation?
          </div>
        </div>
        <div className={styles.newArticle}>
          <div className={styles.newHeadline}>Is VC Funding Drying Up?</div>
          <div className={styles.newContent}>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
