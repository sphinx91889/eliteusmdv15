import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Resources from './pages/Resources'
import Locations from './pages/Locations'
import NotFound from './pages/NotFound'

// Resources Pages
import MedicalDirectorRole from './pages/resources/MedicalDirectorRole'
import BecomingMedicalDirector from './pages/resources/BecomingMedicalDirector'
import FutureMedicalDirector from './pages/resources/FutureMedicalDirector'
import MedicalDirectionChallenges from './pages/resources/MedicalDirectionChallenges'
import WhyMedicalDirectorsAreVital from './pages/resources/WhyMedicalDirectorsAreVital'
import MedicalDirectorResponsibilities from './pages/resources/MedicalDirectorResponsibilities'

// Services Pages
import MedicalDirector from './pages/services/MedicalDirector'
import MedicalDirectorNP from './pages/services/medical-director/MedicalDirectorNP'
import MedicalDirectorPA from './pages/services/medical-director/MedicalDirectorPA'
import MedicalDirectorRN from './pages/services/medical-director/MedicalDirectorRN'
import MedicalDirectorLayperson from './pages/services/medical-director/MedicalDirectorLayperson'
import MedicalOversight from './pages/services/MedicalOversight'
import MedicalSupervision from './pages/services/MedicalSupervision'
import ChartReview from './pages/services/ChartReview'
import DeviceConsultations from './pages/services/DeviceConsultations'
import Training from './pages/services/Training'

// Clinic Types Pages
import MedicalSpas from './pages/clinicTypes/MedicalSpas'
import AestheticClinics from './pages/clinicTypes/AestheticClinics'
import WeightLossClinics from './pages/clinicTypes/WeightLossClinics'
import WellnessCenters from './pages/clinicTypes/WellnessCenters'
import Chiropractors from './pages/clinicTypes/Chiropractors'
import IVTherapy from './pages/clinicTypes/IVTherapy'
import HomeHealthcare from './pages/clinicTypes/HomeHealthcare'
import MobileServices from './pages/clinicTypes/MobileServices'

// Location Pages
import California from './pages/locations/California'
import LosAngeles from './pages/locations/california/LosAngeles'
import SanFrancisco from './pages/locations/california/SanFrancisco'

import Florida from './pages/locations/Florida'
import Miami from './pages/locations/florida/Miami'
import Orlando from './pages/locations/florida/Orlando'
import Tampa from './pages/locations/florida/Tampa'

import Texas from './pages/locations/Texas'
import Houston from './pages/locations/texas/Houston'
import Dallas from './pages/locations/texas/Dallas'
import Austin from './pages/locations/texas/Austin'
import SanAntonio from './pages/locations/texas/SanAntonio'
import FortWorth from './pages/locations/texas/FortWorth'
import ElPaso from './pages/locations/texas/ElPaso'
import Plano from './pages/locations/texas/Plano'

import Nevada from './pages/locations/Nevada'
import LasVegas from './pages/locations/nevada/LasVegas'
import Reno from './pages/locations/nevada/Reno'
import Henderson from './pages/locations/nevada/Henderson'

import NewYork from './pages/locations/NewYork'
import NYC from './pages/locations/new-york/NYC'
import Yonkers from './pages/locations/new-york/Yonkers'
import Buffalo from './pages/locations/new-york/Buffalo'

import Arizona from './pages/locations/Arizona'
import Phoenix from './pages/locations/arizona/Phoenix'
import Scottsdale from './pages/locations/arizona/Scottsdale'
import Tucson from './pages/locations/arizona/Tucson'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/locations" element={<Locations />} />
          
          {/* Resources Routes */}
          <Route path="/resources/medical-director-role" element={<MedicalDirectorRole />} />
          <Route path="/resources/becoming-medical-director" element={<BecomingMedicalDirector />} />
          <Route path="/resources/future-medical-director" element={<FutureMedicalDirector />} />
          <Route path="/resources/medical-direction-challenges" element={<MedicalDirectionChallenges />} />
          <Route path="/resources/why-medical-directors-vital" element={<WhyMedicalDirectorsAreVital />} />
          <Route path="/resources/medical-director-responsibilities" element={<MedicalDirectorResponsibilities />} />

          {/* Services Routes */}
          <Route path="/services/medical-director" element={<MedicalDirector />} />
          <Route path="/services/medical-director/np" element={<MedicalDirectorNP />} />
          <Route path="/services/medical-director/pa" element={<MedicalDirectorPA />} />
          <Route path="/services/medical-director/rn" element={<MedicalDirectorRN />} />
          <Route path="/services/medical-director/layperson" element={<MedicalDirectorLayperson />} />
          <Route path="/services/medical-oversight" element={<MedicalOversight />} />
          <Route path="/services/medical-supervision" element={<MedicalSupervision />} />
          <Route path="/services/chart-review" element={<ChartReview />} />
          <Route path="/services/device-consultations" element={<DeviceConsultations />} />
          <Route path="/services/training" element={<Training />} />

          {/* Clinic Types Routes */}
          <Route path="/clinic-types/medical-spas" element={<MedicalSpas />} />
          <Route path="/clinic-types/aesthetic-clinics" element={<AestheticClinics />} />
          <Route path="/clinic-types/weight-loss-clinics" element={<WeightLossClinics />} />
          <Route path="/clinic-types/wellness-centers" element={<WellnessCenters />} />
          <Route path="/clinic-types/chiropractors" element={<Chiropractors />} />
          <Route path="/clinic-types/iv-therapy" element={<IVTherapy />} />
          <Route path="/clinic-types/home-healthcare" element={<HomeHealthcare />} />
          <Route path="/clinic-types/mobile-services" element={<MobileServices />} />

          {/* Location Routes */}
          {/* California */}
          <Route path="/locations/california" element={<California />} />
          <Route path="/locations/california/los-angeles" element={<LosAngeles />} />
          <Route path="/locations/california/san-francisco" element={<SanFrancisco />} />

          {/* Florida */}
          <Route path="/locations/florida" element={<Florida />} />
          <Route path="/locations/florida/miami" element={<Miami />} />
          <Route path="/locations/florida/orlando" element={<Orlando />} />
          <Route path="/locations/florida/tampa" element={<Tampa />} />

          {/* Texas */}
          <Route path="/locations/texas" element={<Texas />} />
          <Route path="/locations/texas/houston" element={<Houston />} />
          <Route path="/locations/texas/dallas" element={<Dallas />} />
          <Route path="/locations/texas/austin" element={<Austin />} />
          <Route path="/locations/texas/san-antonio" element={<SanAntonio />} />
          <Route path="/locations/texas/fort-worth" element={<FortWorth />} />
          <Route path="/locations/texas/el-paso" element={<ElPaso />} />
          <Route path="/locations/texas/plano" element={<Plano />} />

          {/* Nevada */}
          <Route path="/locations/nevada" element={<Nevada />} />
          <Route path="/locations/nevada/las-vegas" element={<LasVegas />} />
          <Route path="/locations/nevada/reno" element={<Reno />} />
          <Route path="/locations/nevada/henderson" element={<Henderson />} />

          {/* New York */}
          <Route path="/locations/new-york" element={<NewYork />} />
          <Route path="/locations/new-york/nyc" element={<NYC />} />
          <Route path="/locations/new-york/yonkers" element={<Yonkers />} />
          <Route path="/locations/new-york/buffalo" element={<Buffalo />} />

          {/* Arizona */}
          <Route path="/locations/arizona" element={<Arizona />} />
          <Route path="/locations/arizona/phoenix" element={<Phoenix />} />
          <Route path="/locations/arizona/scottsdale" element={<Scottsdale />} />
          <Route path="/locations/arizona/tucson" element={<Tucson />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
