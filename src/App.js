import './styles/App.css';
import { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom";
import ReactGA from 'react-ga';
import { CheckScroll } from './utils/CheckScroll';
import ScrollToTop from './utils/ScrollToTop';

import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';

import Work from './views/Work';
import NotFound from './views/NotFound';
import AdvancedComponents from './views/demos/AdvancedComponents';
import AdvancedPrototyping from './views/demos/AdvancedPrototyping';
import Upgrades from './views/projects/upgrades';
import ManageLiability from './views/projects/manage-liability';
import WholesalePricing from './views/projects/wholesale-pricing';
import Cohorts from './views/projects/cohorts';
import Aria from './views/projects/aria';
import MyLW from './views/projects/mylw';
import Recs from './components/Recs';

function App() {
  const scroller = CheckScroll();
  const [initialized, setInitialized] = useState(false);
  const TRACKING_ID = process.env.REACT_APP_GA_ID;

  useEffect(() => {
    if (TRACKING_ID && !initialized) {
      setInitialized(true);
      ReactGA.initialize(TRACKING_ID);
      console.info('Analytics Running');
    }
  },[TRACKING_ID]);

  return (
    <div className={"App " + (scroller.isScrolling ? "scrolling-" + scroller.scrollDirection : '')}>
      <ScrollToTop initialized={initialized}>
        <PageHeader />
        <Routes>
          <Route path="/" element={<Work />} />
          <Route exact path="/work" element={<Work />} />
          <Route path="/work/upgrades" element={<Upgrades />} />
          <Route path="/work/manage-liability" element={<ManageLiability />} />
          <Route path="/work/wholesale-pricing" element={<WholesalePricing />} />
          <Route path="/work/cohorts" element={<Cohorts />} />
          <Route path="/work/aria" element={<Aria />} />
          <Route path="/work/mylw" element={<MyLW />} />

          <Route path="/advanced-prototyping" element={<AdvancedPrototyping />} />
          <Route path="/advanced-components" element={<AdvancedComponents />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Recs />
        <PageFooter />
      </ScrollToTop>
    </div>
  );
}

export default App;
