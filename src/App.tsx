import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import OnboardingPage from './pages/OnboardingPage'
import HomePage from './pages/HomePage'
import OpportunityPage from './pages/OpportunityPage'
import Workspacepage from './pages/Workspacepage'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/onboarding" element={<OnboardingPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/opportunity" element={<OpportunityPage />} />
                <Route path="/workspace" element={<Workspacepage />} />
                <Route path="/opportunities/:opportunityId" element={<OpportunityPage />} />
                <Route
                    path="/opportunities/:opportunityId/workspace"
                    element={<Workspacepage />}
                />
            </Routes>
        </BrowserRouter>
    )
}