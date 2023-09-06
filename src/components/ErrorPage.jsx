import { useRouteError } from "react-router-dom";

function ErrorPage() {
	const error = useRouteError()

	return <div>Halaman ini Error !!!</div>
}

export default ErrorPage;