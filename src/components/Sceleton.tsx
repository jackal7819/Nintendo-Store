import { FC } from 'react';
import ContentLoader from 'react-content-loader';

const Sceleton: FC = () => {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={350}
            viewBox='0 0 280 350'
            backgroundColor='#f3f3f3'
            foregroundColor='#ecebeb'>
            <rect x='0' y='0' rx='5' ry='5' width='280' height='150' />
            <rect x='0' y='160' rx='0' ry='0' width='280' height='30' />
            <rect x='0' y='210' rx='0' ry='0' width='280' height='80' />
            <rect x='165' y='309' rx='0' ry='0' width='115' height='40' />
            <rect x='0' y='310' rx='6' ry='6' width='115' height='40' />
        </ContentLoader>
    );
};

export default Sceleton;
