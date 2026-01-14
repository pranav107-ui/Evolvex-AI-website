import { Button } from "@/components/ui/button";

export default function ShadcnTest() {
    return (
        <div className="p-10 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Shadcn Test Page</h1>
            <Button>Shadcn Works</Button>
            <div className="flex gap-2">
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
            </div>
        </div>
    );
}
