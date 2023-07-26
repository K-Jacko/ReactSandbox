import {makeScene2D, Rect, Txt, Line, Video,Img} from '@motion-canvas/2d';
import {all, waitFor, makeRef, range, Vector2} from '@motion-canvas/core';
import cppwiki from '../../images/cppwiki.jpg';
import sdl2web from '../../images/sdl2web.jpg';
import sdlimageweb from '../../images/sdlimageweb.jpg';
import sdlttfweb from '../../images/sdlttfweb.jpg';

export default makeScene2D(function* (view) {
    const screenshots: string[] = [cppwiki,sdl2web,sdlttfweb,sdlimageweb];
    const parentRect: Rect[] = [];
    const rects: Rect[] = [];
    const colours: string[] = ["#eeffcc","#305d42","#1e3a29","#112318",];
    const texts: string[] = ["C++","SDL_2","SDL_TTF","SDL_IMAGE",];
    const textboxes: Img[] = [];


    view.add(
        range(4).map(i => (
                <Rect
                    ref={makeRef(parentRect, i)}
                    opacity={1}
                    x={0}
                    y={3100}>
                    <Rect
                        ref={makeRef(rects, i)}
                        width={4000}
                        height={3500}
                        fill={colours[i]}
                        radius={47}
                    />
                    <Txt
                        position={[-1925,-1800]}
                        width={100}
                        fontSize={101}
                        fill={colours[i]}
                    >{texts[i]}</Txt>
                    <Img
                        ref={makeRef(textboxes, i)}
                        src={screenshots[i]}
                        width={3000}
                        y={600}
                    />
                </Rect>
            ),
        ));
    yield* all(
        parentRect[0].position.y(800,2),
        textboxes[0].position.y(-300,1),
    );
    yield* all(
        parentRect[0].position.y(200,2),
    );
    yield* all(
        parentRect[0].position.y(-4800,2),
        parentRect[0].opacity(0,1),
        parentRect[1].position.y(800,1),
        textboxes[1].position.y(-600,1),
    );
    yield* waitFor(2)
    yield* all(
        parentRect[1].position.y(-4800,2),
        parentRect[1].opacity(0,1),
        parentRect[2].position.y(800,1),
        textboxes[2].position.y(-700,1),
    );
    yield* all(
        parentRect[2].position.y(200,2),
    );
    yield* all(
        parentRect[2].position.y(-4800,2),
        parentRect[2].opacity(0,1),
        parentRect[3].position.y(800,1),
        textboxes[3].position.y(-600,1),
    );
    yield* waitFor(2)
    yield* all(
        parentRect[3].position.y(-4800,2),
        parentRect[3].opacity(0,1),
    );

});
