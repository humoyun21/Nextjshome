"use client";
import WishlistCard from "@/components/ui/wishlist-card";
export default function page() {
  return (
    <div className="container mx-auto px-9 text-[24px] py-[70px]">
      <h1 className="pb-[50px]">WishList</h1>
      <WishlistCard />
    </div>
  );
}
