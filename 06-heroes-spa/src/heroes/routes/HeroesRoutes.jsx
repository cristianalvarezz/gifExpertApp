
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPage, HeroPage, MarvelPages, Search } from '../pages'
export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
            <Routes>
                <Route path="/marvel" element={<MarvelPages />} />
                <Route path="/dc" element={<DcPage />} />
                <Route path="/search" element={<Search/>} />
                <Route path="/hero/:idHero" element={<HeroPage />} />
                <Route path="/" element={<Navigate to="/marvel" />} />
            </Routes>
            </div>
        </>
    )
}
