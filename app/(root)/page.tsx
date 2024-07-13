import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
const loggedIn = { firstName: 'Eric', lastName: 'Chiams' };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions smoothly and efficiently."
          />  

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTION 
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[{ currentBalance: 120.50 }, {currentBalance: 500.00}]}/>
    </section>
  );
};

export default Home;