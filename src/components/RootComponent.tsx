// outer
import React, { FunctionComponent } from 'react';


// local
import Header from "./header/Header";




interface OwnProps {}

type Props = OwnProps;

const RootComponent: FunctionComponent<Props> = (props) => {

  return (
      <div >
          <Header/>
          <React.Suspense fallback={()=><h2>Loading...</h2>}>


          </React.Suspense>

      </div>

  );
};

export default RootComponent;
