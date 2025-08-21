// ========= UNTUK HALAMAN HOME UBAH DISINI ===========
import { Button } from "@/components/ui/button";
import { quicksand, robotoMono, poppins } from "../style/fonts";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h2 className="text-2xl font-bold text-foreground">Hello, World</h2>
      <Button>Click me!</Button>
      <p className={poppins.className}> Ini font poppins</p>
      <p className={robotoMono.className}> Ini font robotoMono</p>
      <p className={quicksand.className}> Ini font quicksand</p>
      <p>ini font sans</p>
    </div>
  );
}
