import React, {useEffect} from 'react'
import '../App.scss';
import '../assets/globalStyles/style.scss';
import NewRelease from '../components/NewRelease/';

export const Release = () => {
    useEffect(()=>{
        document.title = "release"
    }, []);

    return (
        <div className = "App">
            <NewRelease />
        </div>
    )
}

export default Release
