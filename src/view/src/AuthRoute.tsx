import { Route, Redirect, RouteProps } from "react-router-dom";
import { isLoggedIn } from "./Auth";

export function AuthRoute(props:RouteProps) {
	if (!isLoggedIn()) {
		return <Redirect to="/login" />;
	}

	return <Route {...props} />;
}

