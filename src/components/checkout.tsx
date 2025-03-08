import { useAppContext } from "@/context";

export default function CheckoutPopup() {
    const { setCheckoutOpen } = useAppContext();

    return (
        <div className="fixed top-0 w-full h-full bg-[#00000088] z-2000" onClick={()=>{setCheckoutOpen(false)}}>
            sgdgdfgdfgdfg
        </div>
    );
}