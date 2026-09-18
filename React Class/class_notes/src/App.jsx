import ConditionalRendering from "./concepts/conditional_rendering/ConditionalRendering";
import ContextAPI from "./concepts/contextAPI/ContextAPI";
import CSS from "./concepts/css/CSS";
import ErrorBoundaryMain from "./concepts/errorBoundary/ErrorBoundaryMain";
import Form from "./concepts/forms/Form";
import HOCMain from "./concepts/higherOrderComponent/HOCMain";
import LifeCycleMethodMain from "./concepts/lifeCycleMethods/LifeCycleMethodMain";
import ListRenderingMain from "./concepts/listrendering/ListRenderingMain";
import PortalMain from "./concepts/portal/PortalMain";
import Props from "./concepts/props/Props";
import PropsDrilling from "./concepts/propsDrilling/PropsDrilling";
import PureComponents from "./concepts/pureComponents/PureComponents";
import ReferenceMain from "./concepts/ref/ReferenceMain";
import RoutingMain from "./concepts/routing/RoutingMain";
import State from "./concepts/state/State";
import UseCallbackMain from "./concepts/useCallback/UseCallbackMain";
import UseEffectMain from "./concepts/useEffect/UseEffectMain";
import UseMemoMain from "./concepts/useMemo/UseMemoMain";
import UseReducerMain from "./concepts/useReducer/UseReducerMain";

const App = () => {
  return (
    <>
      {/* <CSS /> */}
      {/* <Props /> */}
      {/* <ConditionalRendering /> */}
      {/* <State /> */}
      {/* <PropsDrilling /> */}
      {/* <ContextAPI /> */}
      {/* <HOCMain /> */}
      {/* <ReferenceMain /> */}
      {/* <Form /> */}

      {/* //! Life Cycle methods example */}
      {/* <LifeCycleMethodMain /> */}

      {/* useEffect */}
      {/* <UseEffectMain /> */}

      {/* List Rendering */}
      {/* <ListRenderingMain /> */}

      {/* //! Error Boundary */}
      {/* <ErrorBoundaryMain /> */}

      {/* Portal */}
      {/* <PortalMain /> */}

      {/* Pure Components */}
      {/* <PureComponents /> */}

      {/* //! Performance optimization */}
      {/* <UseCallbackMain /> */}

      {/* //! useMemo() --> perfomance optimization [memoize a value] */}
      {/* //! Used for expensive calculation */}
      {/* <UseMemoMain /> */}

      {/* //! Routing  */}
      {/* <RoutingMain /> */}

      {/* //! Use of useReducer - hook */}
      <UseReducerMain />
    </>
  );
};

export default App;
