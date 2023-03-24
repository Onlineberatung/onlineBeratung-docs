import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Color from 'color';
import { useAppConfig } from '../hooks/useAppConfig';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader({ appConfig }) {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{appConfig.title}</h1>
                <p className="hero__subtitle">{appConfig?.content?.claim}</p>
            </div>
        </header>
    );
}
export default function Home() {
    const { data, loading } = useAppConfig();

    return (
        <Layout title={data.name}>
            <HomepageHeader appConfig={data} />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
