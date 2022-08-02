import {
  FC,
  lazy,
  LazyExoticComponent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { LinkProps as PrimitiveLinkProps } from "react-router-dom";

import {
  StyledLink,
  StyledLinkProps,
  StyledRouterLink,
} from "./styled-components";

export type LazyWithPreload<TProps extends Record<string, unknown>> =
  LazyExoticComponent<FC<TProps>> & {
    preload?: () => LazyExoticComponent<FC<TProps>>;
  };

// TODO: Make to optional
type PrimitiveTo = Partial<Pick<PrimitiveLinkProps, "to">>;

export type LinkProps = PrimitiveLinkProps &
  StyledLinkProps & {
    prefetch?: boolean;
    route?: LazyWithPreload<Record<string, unknown>>;
    /**
     * External allows to render a normal anchor tag with no SPA features
     * */
    external?: boolean;
  };

// const ROUTES: Record<
//   string,
//   () => Promise<{
//     default: FC<Record<string, unknown>>;
//   }>
// > = {
//   "/src/pages/index.tsx": () => import("/src/pages/index"),
// };

// export const routes = Object.keys(ROUTES).map((route) => {
//   const path = route
//     .replace(/\/src\/pages|index|\.tsx$/g, "")
//     .replace(/\[\.{3}.+\]/, "*")
//     .replace(/\[(.+)\]/, ":$1");

//   return { path, component: lazy(ROUTES[route]), preload: ROUTES[route] };
// });

// const getMatchingRoute = (path: string) => {
//   const routeDynamicSegments = /:\w+|\*/g;
//   return routes.find(
//     (route) =>
//       path.match(
//         new RegExp(route.path.replace(routeDynamicSegments, ".*"))
//       )?.[0] === path
//   );
// };
/**
 *A hook used to to prefetch routes for components imported with React.lazy.

 * Has 2 modes:
 *
 * Automatic pre-loading:
 * 
 * Default behavior, when the prefetch prop is set to true.
 * Uses the IntersectionObserver API to check if the Link component is in the viewport. 
 * If there's a route it will pre-load in case it hasn't already.
 * 
 * Pre-loading on hover:
 * 
 * If the prefetch prop is set to false, the route will only pre-load when the user hovers over its Link component.
 * Uses onMouseEnter event handler to call the preload function.
 * */
export const usePrefetch = <TProps extends Record<string, unknown>>(
  prefetch = true,
  route?: LazyWithPreload<TProps>
) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [prefetched, setPrefetched] = useState(false);

  // const route = useMemo(() => getMatchingRoute(to), [to]);
  const preload = useCallback(() => {
    if (route?.preload) {
      route?.preload();
      setPrefetched(true);
    }
    return;
  }, [route]);

  const prefetchable = Boolean(route && !prefetched);

  useEffect(() => {
    if (prefetchable && prefetch && ref?.current) {
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => entry.isIntersecting && preload()),
        { rootMargin: "200px" }
      );

      observer.observe(ref.current);
      return () => observer.disconnect();
    }

    return;
  }, [prefetch, prefetchable, preload]);

  const handleMouseEnter = () => prefetchable && preload();

  return [ref, handleMouseEnter] as const;
};

/**
 * Links allow users to navigate to another page.
 * They have multiple styles for various needs, and are ideal for calling attention to
 * where a user needs to do something in order to move forward in a flow.
 */
export const Link = ({
  children,
  to,
  prefetch,
  route,
  external,
  href,
  ...props
}: LinkProps) => {
  const [ref, handleMouseEnter] = usePrefetch(prefetch, route);

  if (external) {
    return (
      <StyledLink
        href={href}
        // style={{
        //   textDecoration: "underline",
        //   textUnderlinePosition: "under",
        // }}
        {...props}
      >
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledRouterLink
      ref={ref}
      to={to}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {children}
    </StyledRouterLink>
  );
};

export default Link;
