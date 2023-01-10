import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import PageContent from "../../atoms/pageContent";

const ErrorPage = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <PageContent color="purple">
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </PageContent>
    );
  } else {
    return <PageContent color="purple">Oops</PageContent>;
  }
};

export default ErrorPage;
