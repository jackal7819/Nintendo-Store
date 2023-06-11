import { useEffect, useRef } from 'react';

const useWhyDidYouUpdate = <T extends {}>(name: string, props: T): void => {
    const previousProps = useRef<T | null>(null);

    useEffect(() => {
        if (previousProps.current) {
            const changedProps: {
                [key: string]: { from: unknown; to: unknown };
            } = Object.entries(props).reduce((changed, [key, value]) => {
                if (
                    previousProps.current &&
                    previousProps.current[key as keyof T] !== value
                ) {
                    changed[key] = {
                        from: previousProps.current[key as keyof T],
                        to: value,
                    };
                }
                return changed;
            }, {} as { [key: string]: { from: unknown; to: unknown } });

            if (Object.keys(changedProps).length) {
                console.log(`[${name}] Changed props:`, changedProps);
            }
        }

        previousProps.current = props;
    });
};

export default useWhyDidYouUpdate;
