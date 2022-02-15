import './App.css';
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';
import React, { useState } from 'react';


const baseLines = [
  <p key="line-01">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed congue lectus. Donec id fermentum risus. Quisque dignissim orci quis consequat interdum. Nam et lacus imperdiet, tempor mi at, cursus nulla. Aliquam et turpis sapien. Vivamus luctus consectetur justo, vitae tempor risus placerat et. Nam luctus eros vitae lacinia bibendum. Suspendisse elementum vehicula augue. Proin in nulla magna. Nunc ac enim libero.</p>,
  <p key="line-02">Sed et consequat dolor. Aliquam auctor lacus sit amet sem sollicitudin tincidunt. Fusce malesuada fermentum lobortis. Maecenas vel eros sit amet quam ultricies accumsan sed a magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec mattis eleifend dictum. Etiam posuere interdum elit, non pulvinar orci luctus eu.</p>
];

const extraLines = [
  <p key="line-03">Quisque at ipsum porttitor, volutpat est ut, blandit lorem. Phasellus placerat interdum lacus, non finibus felis posuere in. Donec auctor felis lacus, at laoreet elit vestibulum a. Maecenas dapibus arcu neque, at dictum nisl semper nec. Curabitur purus felis, rutrum sed urna in, tempus placerat nulla. In sodales, turpis ac placerat dictum, libero leo aliquam purus, nec posuere massa nunc ac neque. Nam mattis ipsum odio, interdum rhoncus ligula faucibus pellentesque. Sed congue, urna ut viverra vehicula, risus velit efficitur lectus, et laoreet dolor neque a urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec fringilla euismod nisi.</p>,
  <p key="line-04">Fusce velit velit, fermentum et velit a, semper rutrum dolor. Vestibulum at tempor nunc. Aliquam convallis felis at quam hendrerit malesuada. Donec eleifend sagittis nibh, eu pellentesque urna hendrerit id. Aenean porta maximus diam sit amet dictum. Vivamus faucibus risus erat, et dapibus lorem pellentesque bibendum. Sed non nisi in nibh volutpat maximus. Curabitur fringilla, ante vitae accumsan lobortis, lacus arcu porta nisi, nec pharetra mauris odio vitae metus. Suspendisse in ullamcorper libero. Maecenas hendrerit tempor pulvinar. Vestibulum a vulputate ipsum. Aliquam erat volutpat. Sed euismod rhoncus justo at tempus.</p>,
  <p key="line-05">Fusce a nibh mattis, pulvinar ligula ut, ullamcorper nibh. Maecenas id mollis eros. Duis non pretium tortor. Proin dignissim quis purus quis faucibus. Nulla egestas mollis auctor. Ut facilisis nisl sed ligula tincidunt efficitur. Nulla accumsan iaculis nibh sed rutrum. Aliquam ac ex eget risus mollis placerat. Cras mauris neque, feugiat a odio in, lobortis convallis tortor. Morbi faucibus odio ut lectus pretium, id egestas erat consectetur. Vestibulum pulvinar sodales metus. Ut ante diam, faucibus et dictum porta, egestas id massa. Aliquam erat volutpat. Duis pellentesque posuere lorem ut maximus. Maecenas volutpat maximus sapien ut laoreet.</p>,
];


function Content() {
  return <React.Fragment>{ [...baseLines].flat() }</React.Fragment>;
}

function AsynchronousContent() {
  const [result, setResult] = useState([...baseLines]);
  
  setTimeout(() => {
    setResult([ ...baseLines, ...extraLines ]);
  }, 1500);

  return <React.Fragment>{ result.flat() }</React.Fragment>;
}


function App() {
  return (
    <div className="App">
      <Accordion headingLevel={2}>
        <AccordionItem heading="Static content">
          <Content />
        </AccordionItem>
        <AccordionItem heading="Stateful content">
          <AsynchronousContent />
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;
