import React, { memo } from 'react';
import Header from "../../components/Header/Header"
import Show from '../../components/Show/Show';
const tv = memo(({ res, topRated }) => {
    return (
        <div>
            <Header />
            <Show res={res} topRated={topRated} />
        </div>
    );
});
export async function getServerSideProps(context) {
    console.log(context);
    const [
        popularRes,
        topRatedRes,
    ] = await Promise.all([
        fetch(
            `https://api.themoviedb.org/3${context.resolvedUrl}?api_key=c343a7ad70f3eb4b7594802650cdd546&language=en-US`
        ),
        fetch(
            `https://api.themoviedb.org/3${context.resolvedUrl}/videos?api_key=c343a7ad70f3eb4b7594802650cdd546&language=en-US`)
    ]);
    const [res, topRated] =
        await Promise.all([
            popularRes.json(),
            topRatedRes.json(),
        ]);
    return {
        props: {
            res: res,
            topRated: topRated.results,
        },
    };
}
export default tv;