import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/pages/home/HomePageFeatures';
import HomepageHeader from "@site/src/pages/home/HomepageHeader";

export default function Index(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    console.log(siteConfig)
    return (
        <Layout
            title={`Welcome`}
            /* Description will go into a meta tag in <head /> */
            description={siteConfig.tagline}>
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
