import styles from './main.module.css';

import web3 from '../../assets/images/image-web-3-desktop.jpg';
import web3Mobile from '../../assets/images/image-web-3-mobile.jpg';
import retroPcs from '../../assets/images/image-retro-pcs.jpg';
import topLaptops from '../../assets/images/image-top-laptops.jpg';
import gamingGrowth from '../../assets/images/image-gaming-growth.jpg';

const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstContainer}>
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
        <section className={styles.newContainer}>
          <h2>New</h2>
          <div className={styles.newArticle}>
            <div className={styles.newHeadline}>Hydrogen VS Electric Cars</div>
            <div className={styles.newContent}>
              Will hydrogen-fueled cars ever catch up to EVs?
            </div>
          </div>
          <div className={styles.newArticle}>
            <div className={styles.newHeadline}>
              The Downsides of AI Artistry
            </div>
            <div className={styles.newContent}>
              What are the possible adverse effects of on-demand AI image
              generation?
            </div>
          </div>
          <div className={styles.newArticle}>
            <div className={styles.newHeadline}>Is VC Funding Drying Up?</div>
            <div className={styles.newContent}>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </div>
          </div>
        </section>
      </div>
      <section className={styles.topContainer}>
        <div className={styles.topStory}>
          <img src={retroPcs} alt='' className={styles.topImg} />
          <div className={styles.topContent}>
            <div className={styles.topRank}>01</div>
            <div className={styles.topHeadline}>Reviving Retro PCs</div>
            <div className={styles.topBody}>
              What happens when old PCs are given modern upgrades?
            </div>
          </div>
        </div>
        <div className={styles.topStory}>
          <img src={topLaptops} alt='' className={styles.topImg} />
          <div className={styles.topContent}>
            <div className={styles.topRank}>02</div>
            <div className={styles.topHeadline}>Top 10 Laptops of 2022</div>
            <div className={styles.topBody}>
              Our best picks for various needs and budgets.
            </div>
          </div>
        </div>
        <div className={styles.topStory}>
          <img src={gamingGrowth} alt='' className={styles.topImg} />
          <div className={styles.topContent}>
            <div className={styles.topRank}>03</div>
            <div className={styles.topHeadline}>The Growth of Gaming</div>
            <div className={styles.topBody}>
              How the pandemic has sparked fresh opportunities.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
