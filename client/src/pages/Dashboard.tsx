import useAuth from "../hooks/useAuth";

interface DashboardProps {
  code: string;
}

const Dashboard = ({ code }: DashboardProps) => {
  const accessToken = useAuth(code);
  return (
    <main>
      <p>code: {code}</p>
      <p>accessToken: {accessToken}</p>
    </main>
  );
};

export default Dashboard;
