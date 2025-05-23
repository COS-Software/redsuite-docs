import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Automação',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Automatize processos repetitivos, reduza erros e aumente a produtividade da sua operação com fluxos inteligentes e integrações robustas.
      </>
    ),
  },
  {
    title: 'Cobrança Inteligente',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Maximize a eficiência da sua cobrança com análise preditiva, segmentação de clientes e automação de follow-ups, reduzindo a inadimplência.
      </>
    ),
  },
  {
    title: 'Gestão Eficiente',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Tenha controle total da sua operação com dashboards inteligentes, gestão de equipe e relatórios avançados para decisões estratégicas.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
