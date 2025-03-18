import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          BudgetBuddy
        </Link>
        <div className="space-x-4">
          <Link href="/goals" className="text-white">
            Goals
          </Link>
          <Link href="/budgets" className="text-white">
            Budgets
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
