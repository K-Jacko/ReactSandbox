import {makeScene2D, Rect,Txt,Line} from '@motion-canvas/2d';
import {all, waitFor, makeRef, range, Vector2} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    const rects: Rect[] = [];
    const texts: Txt[] = [];
    const colours: string[] = ["#112318","#1e3a29","#305d42",
        "#4d8061","#89a257","#bedc7f"];
    const parentRect: Rect[] = [];
    const centerRect: Rect[] = [];
    const linesRect: Rect[] = [];

    // Create some rects
    view.add(
        range(6).map(i => (
            <Rect
                ref={makeRef(parentRect, i)}
                opacity={0}
                x={1000 + 500 * i}
                y={0}>
                <Rect
                    ref={makeRef(rects, i)}
                    width={1000}
                    height={1500}
                    fill={colours[i]}
                    radius={47}
                />
                <Txt
                    ref={makeRef(texts,i)}
                    position={rects[i].topLeft}
                    fill={colours[i]}
                    paddingLeft={300}
                    paddingBottom={100}
                >{"Episode:" + i.toString()}</Txt>
                <Rect
                    ref={makeRef(linesRect,i)}
                >
                    <Line
                        position={[0,100]}
                        stroke={'#f0f6f0'}
                        lineWidth={4}
                        scaleY={10}
                        points={[[-400,0], () => Vector2.right.scale( 400)]}
                        lineDash={[100, 100]}
                        lineDashOffset={() => 200}
                    />
                    <Line
                        position={[0,250]}
                        stroke={'#f0f6f0'}
                        lineWidth={4}
                        scaleY={10}
                        points={[[-400,0], () => Vector2.right.scale( 400)]}
                        lineDash={[50, 50]}
                        lineDashOffset={() => 200}
                    />
                    <Line
                        position={[0,400]}
                        stroke={'#f0f6f0'}
                        lineWidth={4}
                        scaleY={10}
                        points={[[-400,0], () => Vector2.right.scale( 400)]}
                        lineDash={[300, 300]}
                        lineDashOffset={() => 200}
                    />
                    <Line
                        position={[0,550]}
                        stroke={'#f0f6f0'}
                        lineWidth={4}
                        scaleY={10}
                        points={[[-400,0], () => Vector2.right.scale( 400)]}
                        lineDash={[100, 100]}
                        lineDashOffset={() => 200}
                    />
                </Rect>
                <Rect
                    ref={makeRef(centerRect,i)}
                    radius={47}
                    width={800}
                    height={500}
                    fill={'#222323'}
                    position={[0,-400]}
                />
            </Rect>
        ),
    ));

    const generators = [];

    for (let i = 0; i < rects.length; i++) {
        generators.push(parentRect[i].opacity(1,3));
        generators.push(parentRect[i].position.x(parentRect[i].position.x() - 3000, 5).to(-800,1).to(-100 * i ,3));
        generators.push(texts[0].opacity(1,5).to(0,1));
        generators.push(texts[1].opacity(1,5).to(0,1));
        generators.push(texts[2].opacity(1,5).to(0,1));
        generators.push(texts[3].opacity(1,5).to(0,1));
        generators.push(texts[4].opacity(1,5).to(0,1));
        generators.push(texts[5].opacity(1,5).to(0,1).to(1,1));
        generators.push(texts[0].text("Episode:5",6));
        generators.push(texts[1].text("Episode:4",6));
        generators.push(texts[2].text("Episode:3",6));
        generators.push(texts[3].text("Episode:2",6));
        generators.push(texts[4].text("Episode:1",6));
        generators.push(texts[5].text("Episode:0",6));
    }
    yield * all(...generators);

    yield* all(
        parentRect[5].position.x(-1200,1.5),
        parentRect[1].position.x(-3000,1.5),
        parentRect[2].position.x(-3000,1.5),
        parentRect[3].position.x(-3000,1.5),
        parentRect[4].position.x(-3000,1.5),
        parentRect[0].position.x(-3000,1.5),
        parentRect[0].opacity(0,1),
        parentRect[1].opacity(0,1),
        parentRect[2].opacity(0,1),
        parentRect[3].opacity(0,1),
        parentRect[4].opacity(0,1),
    );
    yield* all(
        rects[5].width(3750,2),
        rects[5].height(1900,2),
        parentRect[5].position.x(0,1)
    );
    yield* all(
        centerRect[5].width(4000,4),
        centerRect[5].height(3500,4),
    );
});
