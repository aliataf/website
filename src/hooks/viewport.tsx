import React, { ReactNode } from 'react';

interface ViewportContextProps {
	width: number;
	height: number;
	isTabletOrBigger?: boolean;
}

const ViewportContext = React.createContext<ViewportContextProps>({
	width: 0,
	height: 0,
});

interface Props {
	children: ReactNode | ReactNode[];
}

function ViewportProvider({ children }: Props) {
	const [width, setWidth] = React.useState<number>(0);
	const [height, setHeight] = React.useState<number>(0);
	const [isTabletOrBigger, setIsTabletOrBigger] = React.useState<boolean>(true);
	const isMounted = React.useRef(false);

	const handleWindowResize = () => {
		if (isMounted.current) {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
			setIsTabletOrBigger(window.innerWidth >= 768);
		}
	};

	React.useEffect(() => {
		if (typeof window !== undefined) {
			window.addEventListener('resize', handleWindowResize);
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
			setIsTabletOrBigger(window.innerWidth >= 768);
		}
		isMounted.current = true;
		return () => {
			window.removeEventListener('resize', handleWindowResize);
			isMounted.current = false;
		};
	}, []);

	return (
		<ViewportContext.Provider value={{ width, height, isTabletOrBigger }}>
			{children}
		</ViewportContext.Provider>
	);
}

const useViewport = () => {
	const { width, height, isTabletOrBigger }: ViewportContextProps =
		React.useContext(ViewportContext);
	return { width, height, isTabletOrBigger };
};

export { useViewport, ViewportContext, ViewportProvider };
