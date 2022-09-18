import { FC } from "react";
import { useCustomerIdentity } from "../../hooks/apis/useCustomerIdentity";

const HomePage: FC = () => {
  const { isLoading, isError, data } = useCustomerIdentity([
    "customer-identity",
  ]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (isError) {
    return <div style={{ color: "red" }}>Error</div>;
  }

  return (
    <div>
      {data.data?.map((item: any) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default HomePage;
