import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AboutUs } from '../../Component/AboutUs/AboutUs';
import { Career } from '../../Component/Career/Career';
import { Header } from '../../Component/Header/Header';
import { Home } from '../../Component/Home/Home';
import NotFound from '../../Component/NotFound/NotFound';
import { Sidebar } from '../../Component/Sidebar/Sidebar';
import { Hooks } from '../../Component/HooksExample/Hooks/Hooks';
import './Main.css';
import { Lifecycle } from '../../Component/Lifecycle/Lifecycle';
import { ContextTask } from '../../Component/HooksExample/ContentTask/ContextTask';
import { StudentForm } from '../../Component/CURD/StudentForm/StudentForm';
import { StudentTable } from '../../Component/CURD/StudentTable/StudentTable';
export function Main() {
  return (
    <div>
      <Header />
      <Router>
        <div className="router-outlet">
          <Sidebar />
          <div className="content-layer">
            {/* based upon url your component will render */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about-us" component={AboutUs} />
              <Route exact path="/career" component={Career} />
              <Route exact path="/hooks" component={Hooks} />
              <Route exact path="/lifecycle" component={Lifecycle} />
              <Route exact path="/context" component={ContextTask} />
              <Route exact path="/api-curd" component={StudentForm} />
              <Route exact path="/student-table" component={StudentTable} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

// router-> based upon path your component will render.
//spa-> appln without reload your component will render dynamically.
