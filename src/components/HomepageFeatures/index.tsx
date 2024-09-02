import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Frequently Updated Blog',
    Svg: require('@site/static/img/blog-icon.svg').default,
    description: (
      <>
        Published blogs with recent talks and news from the Cloud Robotics Working Group.
      </>
    ),
  },
  {
    title: 'Cloud Robotics Resources',
    Svg: require('@site/static/img/cloud-data-download-icon.svg').default,
    description: (
      <>
        Find the best online resources available, curated by the Working Group.
      </>
    ),
  },
  {
    title: 'State of Cloud Robotics',
    Svg: require('@site/static/img/surveys-icon.svg').default,
    description: (
      <>
        See the latest crowd-sourced knowledge from the State of Cloud Robotics survey.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
