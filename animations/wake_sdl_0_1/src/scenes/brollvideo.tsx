import {makeScene2D, Video, Rect} from '@motion-canvas/2d';
import {waitFor} from "@motion-canvas/core/lib/flow";

import clip1 from '../../videos/clip1.mp4';
import clip2 from '../../videos/clip2.mp4';
import clip3 from '../../videos/clip3.mp4';


export default makeScene2D(function* (view) {
    view.add(
        <Rect scale={2.2}>
            <Video src={clip3} />
        </Rect>
    );

    yield* waitFor(2);
});
