import './styles/App.css';
import {Routes, Route} from "react-router-dom";
import { CheckScroll } from './utils/CheckScroll';
import ScrollToTop from './utils/ScrollToTop';

import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';

import Work from './views/Work';
//import {Play} from './views/Play';
import {NotFound} from './views/NotFound';
import DesignSystem from './views/DesignSystem';
//import Dimensions from './views/projects/dimensions';
import Cohorts from './views/projects/cohorts';
import Aria from './views/projects/aria';
import MyLW from './views/projects/mylw';
import Recs from './components/Recs';

function App() {
  const scroller = CheckScroll();
  return (
    <div className={"App " + (scroller.isScrolling ? "scrolling-" + scroller.scrollDirection : '')}>
      <ScrollToTop>
        <PageHeader />
        <Routes>
          <Route path="/" element={<Work />} />
          <Route exact path="/work" element={<Work />} />
          {/* <Route path="/work/dimensions" element={<Dimensions />} /> */}
          <Route path="/work/cohorts" element={<Cohorts />} />
          <Route path="/work/aria" element={<Aria />} />
          <Route path="/work/mylw" element={<MyLW />} />

          <Route path="/ds" element={<DesignSystem />} />
          {/*<Route exact path="/play" element={<Play />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Recs />
        <PageFooter />
      </ScrollToTop>
    </div>
  );
}

export default App;
