import React from 'react';
import { UpdateValue } from '../../../Component/HooksExample/ UpdateValue/ UpdateValue';
import { Lifecycle } from '../../../Component/HooksExample/Lifecycle/Lifecycle';
import { UncontrolledComponent } from '../../../Component/HooksExample/UncontrolledComponent/UncontrolledComponent';
import './Hooks.css';

export function Hooks() {
  return (
    <div className="fun-content">
      <h4>Function Component</h4>
      <h5>
        (stateless component hooks feature react16+ some addition feature
        -useState,useEffect,useCallback,useRef,useDispatch etc..,) without
        writing a class
      </h5>
      <ol>
        <li>
          <em>useState</em>
          <UpdateValue />
        </li>
        <li>
          <em>useEffect</em>
          <Lifecycle />
        </li>
        <li>
          <em>useRef</em>
          <UncontrolledComponent />
        </li>
      </ol>
    </div>
  );
}
