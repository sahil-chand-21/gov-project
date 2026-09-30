import { TopHeader } from "@/components/TopHeader";
import { Navbar } from "@/components/Navbar";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <TopHeader />
            <Navbar />
            {children}
        </div>
    );
}
