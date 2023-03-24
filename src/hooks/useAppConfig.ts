import { useEffect, useState } from 'react';

interface AppConfig {
    name: string;
    theming: {
        logo: string;
        primaryColor: string;
        secondaryColor: string;
        favicon: string;
    };
    content: {
        claim: string;
    }
}

const convertToHtml = (input: string) => {
    const node = document.createElement('div');
    node.innerHTML = input;
    return node.textContent;
}
const cachedData = {};

export const useAppConfig = () => {
    const [appConfig, setAppConfig] = useState<AppConfig>({
        name: 'Beratung & Hilfe',
        theming: {
            logo: '/logo.png',
            primaryColor: '#cc1e1c',
            secondaryColor: 'rgba(0, 0, 0, 0.9)',
            favicon: '/favicon.ico',
        },
        content: {
            claim: 'Online. Anonym. Sicher.',
        }
    });

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);

        if (Object.keys(cachedData).length > 0) {
            setAppConfig(cachedData as AppConfig);
            setLoading(false);
            return;
        }

        fetch('/service/tenant/public/').then((r) => r.json()).then((data) => {
            setLoading(false);

            data.theming.logo = convertToHtml(data.theming.logo);
            data.theming.favicon = convertToHtml(data.theming.favicon);
            Object.assign(cachedData, data);
            setAppConfig(data);
        }).catch(() => {
            setLoading(false);
        });
    }, []);

    return {
        data: appConfig,
        loading,
    }
};
