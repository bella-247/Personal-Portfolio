"use client";
import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
export function DownloadCVButton() {
    const handleDownload = async () => {
        try {
            const res = await fetch("/api/cv");
            if (!res.ok) throw new Error("Failed to generate CV");
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "cv.pdf";
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error(err);
            alert("Could not generate CV. Try again later.");
        }
    };

    return (
        <Button variant="outline" size="lg"
            onClick={handleDownload}
            className="group"
        >
            Download CV
            <Download className="h-4 w-4" />
        </Button>
    );
}
