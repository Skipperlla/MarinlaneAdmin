import Cookies from "js-cookie";
import { useRouter } from "next/router";
const withAuth = (WrappedComponent: any) => {
  return (props: JSX.IntrinsicAttributes) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router = useRouter();

      // If there is no access token we redirect to "/" page.
      if (Cookies.get("authToken") == undefined) {
        Router.push("/login");
        return null;
      }
      return <WrappedComponent {...props} />;
      // If this is an accessToken we just render the component that was passed with all its props
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;
