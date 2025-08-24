// ========= UNTUK HALAMAN HOME UBAH DISINI ===========
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h2 className="text-2xl font-bold text-foreground">Ini page user</h2>
      <Button>Click me!</Button>
      <p className="font-[var(--font-roboto-mono)]">Ini pakai Roboto Mono</p>
      <p className="font-[var(--font-quick)]">Ini pakai Quicksand</p>
      <p className="font-[var(--font-pop)]">Ini pakai Poppins</p>
      <p>ini font sans</p>
    </div>
  );
}
