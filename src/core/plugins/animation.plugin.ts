
// remember: install file animation.scss in assets/scss folder

export interface ItimeUnit {
    s?: string;
    ms?: string;
}

export interface createAnimationProps {
    element: string | any | undefined;
    animation: string | undefined;
    duration: {
        init: number,
        increase?: number,
        decrease?: number
    } | undefined;
    timeUnit: string | undefined;
    timingFunction?: string | undefined;
    delay?: number | undefined;
    iterationCount?: string | undefined;
    direction?: string | undefined;
    fillMode?: string | undefined;
}

export default function createAnimation({ element, animation, timeUnit = "ms", duration = {
    init: 0,
    increase: 0,
    decrease: 0
}, timingFunction,
    delay,
    iterationCount,
    direction,
    fillMode, }: createAnimationProps) {

    // animation: name duration timing-function delay iteration-count direction fill-mode;
    // animation: 1.5s ease 0s 1 normal none running fromRight;

    let count = duration?.init;

    document.querySelectorAll(element).forEach(element => {

        if (duration?.increase)
            count += duration.increase;

        if (duration?.decrease)
            count += duration.decrease;

        let animationStyle = `${animation} ${count}${timeUnit}`

        if (timingFunction) animationStyle += ` ${timingFunction}`;
        if (delay !== undefined) animationStyle += ` ${delay}${timeUnit}`;
        if (iterationCount) animationStyle += ` ${iterationCount}`;
        if (direction) animationStyle += ` ${direction}`;
        if (fillMode) animationStyle += ` ${fillMode}`;

        // render to dom
        element.style.animation = animationStyle;
    })
}