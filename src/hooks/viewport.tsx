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
  // This is the exact same logic that we previously had in our hook
  const [width, setWidth] = React.useState<number>(0);
  const [height, setHeight] = React.useState<number>(0);
  const [isTabletOrBigger, setIsTabletOrBigger] =
    React.useState<boolean>(false);
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
    }
    isMounted.current = true;
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      isMounted.current = false;
    };
  }, []);

  /* Now we are dealing with a context instead of a Hook, so instead
     of returning the width and height we store the values in the
     value of the Provider */
  return (
    <ViewportContext.Provider value={{ width, height, isTabletOrBigger }}>
      {children}
    </ViewportContext.Provider>
  );
}

/* Rewrite the "useViewport" hook to pull the width and height values
   out of the context instead of calculating them itself */
const useViewport = () => {
  /* We can use the "useContext" Hook to acccess a context from within
     another Hook, remember, Hooks are composable! */
  const { width, height, isTabletOrBigger }: ViewportContextProps =
    React.useContext(ViewportContext);
  return { width, height, isTabletOrBigger };
};

export { useViewport, ViewportContext, ViewportProvider };
