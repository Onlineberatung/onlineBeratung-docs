import React, { useEffect } from 'react';
import Color from 'color';
import { useAppConfig } from '../../hooks/useAppConfig';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function RootWrapper({ children }) {
    const { siteConfig } = useDocusaurusContext();
    const { data, loading } = useAppConfig();

    siteConfig.themeConfig.navbar.title = data?.name;
    siteConfig.themeConfig.navbar.logo.src = data?.theming.logo;
    siteConfig.favicon = data?.theming.favicon;
    const color = Color(data?.theming?.primaryColor);

    const configStyle = `
        :root {
            --ifm-color-primary: ${data?.theming?.primaryColor};
            --ifm-color-primary-dark: ${color.darken(.10).hex()};
            --ifm-color-primary-darker: ${color.darken(.15).hex()};
            --ifm-color-primary-darkest: ${color.darken(.30).hex()};
            --ifm-color-primary-light: ${color.lighten(.10).hex()};
            --ifm-color-primary-lighter: ${color.lighten(.15).hex()};
            --ifm-color-primary-lightest: ${color.lighten(.30).hex()};
        }
    `;

    useEffect(() => {
        if (data?.theming?.favicon) {
            const favicon = document.querySelector('link[rel="icon"]');
            favicon?.setAttribute('href', data.theming.favicon);
        }
    }, [data]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <>
            <style>{configStyle}</style>
            {children}
        </>
    );
}
