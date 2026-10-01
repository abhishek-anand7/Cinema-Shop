import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">CinemaShop</Link>

      <div>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/sign-in">Sign In</Link>
        <Link href="/sign-up">Sign Up</Link>
        <Link href="/checkout">Checkout</Link>

      </div>
    </nav>
  );
}