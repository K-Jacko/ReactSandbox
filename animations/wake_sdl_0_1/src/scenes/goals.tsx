import {Latex} from '@motion-canvas/2d/lib/components';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {waitFor} from '@motion-canvas/core/lib/flow';
import {createRef} from '@motion-canvas/core/lib/utils';
import {all} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
    const tex = createRef<Latex>();
    const tex2 = createRef<Latex>();
    const tex3 = createRef<Latex>();
    const tex4 = createRef<Latex>();
    const tex5 = createRef<Latex>();
    const tex6 = createRef<Latex>();
    const tex7 = createRef<Latex>();

    view.add(
        <Latex
            ref={tex}
            tex="{\color{white} > Episode:00}"
            y={1000}
            opacity={0}
            width={1500}// height and width can calculate based on each other
            fontFamily={'pix'}
        />,
    );
    view.add(
        <Latex
            ref={tex2}
            tex="{\color{white} > Episode:01}"
            opacity={0}
            y={1300}
            width={1500}// height and width can calculate based on each other
            fontFamily={'pix'}
        />,
    );
    view.add(
        <Latex
            ref={tex3}
            tex="{\color{white} > Episode:02}"
            opacity={0}
            y={1600}
            width={1500}// height and width can calculate based on each other
            fontFamily={'pix'}
        />,
    );
    view.add(
        <Latex
            ref={tex4}
            tex="{\color{white} > Episode:03}"
            opacity={0}
            y={1900}
            width={1500}// height and width can calculate based on each other
            fontFamily={'pix'}
        />,
    );
    view.add(
        <Latex
            ref={tex5}
            tex="{\color{white} > Episode:04}"
            opacity={0}
            y={1200}
            width={1500}// height and width can calculate based on each other
            fontFamily={'pix'}
        />,
    );
    view.add(
        <Latex
            ref={tex6}
            tex="{\color{white} > Episode:05}"
            opacity={0}
            y={1500}
            width={1500}// height and width can calculate based on each other
            fontFamily={'pix'}
        />,
    );
    view.add(
        <Latex
            ref={tex7}
            tex="{\color{white} > Episode:06}"
            opacity={0}
            y={1800}
            width={1500}// height and width can calculate based on each other
            fontFamily={'pix'}
        />,
    );


    yield* all(
        tex().position.y(-1000 + 100, 5),
        tex2().position.y(-700 + 100, 5),
        tex3().position.y(-400 + 100, 5),
        tex4().position.y(-100 + 100, 5),
        tex5().position.y(200 + 100, 5),
        tex6().position.y(500 + 100, 5),
        tex7().position.y(800 + 100, 5),
        tex().opacity(1,2),
        tex2().opacity(0.9,4),
        tex3().opacity(0.8,4),
        tex4().opacity(0.7,4),
        tex5().opacity(0.6,4),
        tex6().opacity(0.5,4),
        tex7().opacity(0.4,4),
        );
    yield* waitFor(0.5);
    yield* all(
        tex().tex("{\\color{#bedc7f} > Episode:00}",0.1).to("{\\color{white} > Episode:00}",0.1).to("{\\color{#bedc7f} > Episode:00}",0.1),
    );
    yield* all(
        tex().opacity(0,1),
        tex2().opacity(0,1),
        tex3().opacity(0,1),
        tex4().opacity(0,1),
        tex5().opacity(0,1),
        tex6().opacity(0,1),
        tex7().opacity(0,1),
    );
});