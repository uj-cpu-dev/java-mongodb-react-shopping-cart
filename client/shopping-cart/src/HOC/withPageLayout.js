import React from 'react';
import PageLayout from './PageLayout';

const withPageLayout = (Component) => {
    const WithPageLayout = (props) => {
        return (
            <PageLayout>
                <Component {...props} />
            </PageLayout>
        );
    };

    return WithPageLayout;
};

export default withPageLayout;