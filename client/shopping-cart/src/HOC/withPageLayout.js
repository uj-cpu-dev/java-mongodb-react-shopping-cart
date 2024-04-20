import React from 'react';
import PageLayout from './PageLayout';

const withPageLayout = (Component) => {
    return (props) => {
        return (
            <PageLayout>
                <Component {...props} />
            </PageLayout>
        );
    };
};

export default withPageLayout;