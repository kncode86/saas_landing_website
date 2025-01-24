import Features from "./sections/Features";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";

export default function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
    </main>
  )
}