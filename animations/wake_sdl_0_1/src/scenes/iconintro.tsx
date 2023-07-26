import {makeScene2D, Circle, Path} from '@motion-canvas/2d';
import {all, createRef} from '@motion-canvas/core';
import {waitFor} from "@motion-canvas/core/lib/flow";

export default makeScene2D(function* (view) {
  const path1 = createRef<Path>();
  const path2 = createRef<Path>();
  const path3 = createRef<Path>();
  const myCircle = createRef<Circle>();
  const bkCircle = createRef<Circle>();

    view.add(
        <Circle
            ref={bkCircle}
            // try changing these properties:
            y={-300}
            width={5000}
            height={5000}
            fill="#eeffcc"
        />,
    );
  view.add(
      <Circle
          ref={myCircle}
          // try changing these properties:
          y={-300}
          width={50}
          height={50}
          fill="#305d42"
      />,
  );
  view.add(
      <Path
          ref={path1}
          lineWidth={2}
          stroke={'#222323'}
          data="M10.4,16.9c0.5,1.4,1.4,2.5,2.6,3.3v0c0,2.3-1.6,4.2-3.8,4.8c-2.6,0.7-4.5,2.8-5.1,5.4C4.1,30.7,4.3,31,4.7,31l22.7,0c0.4,0,0.6-0.3,0.5-0.7c-0.5-2.6-2.5-4.7-5.2-5.4c-2.2-0.5-3.7-2.5-3.7-4.7c1.2-0.7,2.2-1.8,2.7-3.2"
          position={[-160, -155]}
          scale={10}
          start={0}
          end={0}
      ></Path>,
  );
  view.add(
      <Path
          ref={path2}
          lineWidth={2}
          stroke={'#222323'}
          data="M9,12v3c0,1.1,0.9,2,2,2h0c1.4,0,2.9-0.2,4.2-0.8c0.2-0.1,0.5-0.2,0.8-0.2c0.3,0,0.6,0.1,0.8,0.2
c1.3,0.6,2.7,0.8,4.2,0.8h0c1.1,0,2-0.9,2-2v-3c0-1.1-0.9-2-2-2H11C9.9,10,9,10.9,9,12z"
          position={[-160, -155]}
          scale={10}
          start={0}
          end={0}
      ></Path>,
  );
  view.add(
      <Path
          ref={path3}
          lineWidth={2}
          stroke={'#222323'}
          data="M23,13V6c0-2.8-2.2-5-5-5c-1.7,0-3.2,0.8-4.1,2.1C11.1,3.6,9,6,9,9v4"
          position={[-160, -155]}
          scale={10}
          start={0}
          end={0}
      ></Path>,
  );
  yield* waitFor(1);

  yield* all(
      myCircle().position.y(-25, 0.5),
      myCircle().scale(1,2).to(100,1),
      myCircle().fill('#eeffcc', 1).to('#222323', 1),
      path1().end(0, 1).to(1,1),
      path2().end(0, 0.25).to(1,2),
      path3().end(1, 0.5),
      path3().stroke('#222323',1)
  );
});