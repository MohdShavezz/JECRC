import React, { lazy, Suspense } from 'react'
// import HighImage from './HighImage'
const HighImage = lazy(() => import('./HighImage'));



const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ex minima eaque omnis? Cum magni quasi totam! Odit odio ea, fugiat temporibus, perspiciatis expedita suscipit commodi cumque facilis voluptates placeat?</p>
            <br />
            
            <Suspense fallback={<div>Loading Image...</div>}>
                <HighImage />
            </Suspense>
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, perspiciatis pariatur aspernatur repellat ab cupiditate autem reprehenderit sequi voluptatum exercitationem possimus consequatur laboriosam tempora dolor vero quae. Omnis, non veniam!
        </div>
    )
}

export default Dashboard
