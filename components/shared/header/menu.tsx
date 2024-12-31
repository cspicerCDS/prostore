import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import { EllipsisVertical, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Menu = () => {
    return ( 
        <div className='flex justify-end gap-3'>
            <nav className='hidden md:flex w-full max-w-xs gap-2'>
            <ModeToggle />
        <Button asChild variant="ghost">
            <Link href="/cart">
                <ShoppingCart /> Cart
            </Link>
        </Button>
        <Button asChild>
            <Link href="/sign-in">
                <User /> Sign In
            </Link>
        </Button>
            </nav>
            <nav className='md:hidden'>
                <Sheet>
                    <SheetTrigger className='align-middle'>
                      <EllipsisVertical />
                    </SheetTrigger>
                    <SheetContent className='flex flex-col items-start '>
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                            <ModeToggle />
                            <Button asChild variant="ghost">
                                <Link href="/cart">
                                    <ShoppingCart /> Cart
                                </Link>
                            </Button>
                            <Button asChild>
                                <Link href="/sign-in">
                                    <User /> Sign In
                                </Link>
                            </Button>
                            <SheetDescription></SheetDescription>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
     );
}
 
export default Menu;
