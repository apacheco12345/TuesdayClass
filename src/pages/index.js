import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Admonition from '@theme/Admonition';

const PAPER_URL = '/paper/food-insecurity';

const takeaways = [
  "About 43% of UCSB undergraduates report food insecurity, which is close to half of the students on our campus.",
  "Almost every student we surveyed knew about the A.S. Food Bank, but 75% of the students showing signs of food insecurity said they never or rarely used it.",
  "Timing and location were the biggest barriers, so we recommend pop-up events on campus and in Isla Vista that bring food and information to where students already are.",
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <main className={styles.page}>
        <Link to={PAPER_URL} className={styles.titleLink}>
          <h1 className={styles.title}>
            Food Insecurity at UCSB: Closing the Gap Between Awareness and Use
          </h1>
        </Link>

        <div className="byline">
          <span><strong>Megan Kennedy</strong><br/>UC Santa Barbara</span>
          <span><strong>Kiera Anne Vocal</strong><br/>UC Santa Barbara</span>
          <span><strong>Adrian Pacheco</strong><br/>UC Santa Barbara</span>
          <span><strong>Jericho Sabangan</strong><br/>UC Santa Barbara</span>
        </div><br />
        <Admonition type="note" title="Key Takeaways">
          <ul>
            {takeaways.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Admonition>

        <Link to={PAPER_URL} className={styles.readMore}>
          Read the full working paper →
        </Link>
      </main>
    </Layout>
  );
}
