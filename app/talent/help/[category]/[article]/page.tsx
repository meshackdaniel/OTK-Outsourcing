"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight, ThumbsUp, ThumbsDown } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function TalentArticlePage() {
  const params = useParams();
  const categorySlug = Array.isArray(params.category) ? params.category[0] : params.category || "";
  const articleSlug = Array.isArray(params.article) ? params.article[0] : params.article || "";
  
  const [feedback, setFeedback] = useState<"up" | "down" | null>(null);

  // Convert slugs to Title Case
  const categoryTitle = categorySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    
  const articleTitle = articleSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <DashboardLayout type="talent">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Breadcrumb Header */}
        <div className="flex items-center gap-2 text-sm font-semibold mb-6 flex-wrap">
          <Link href="/talent/help" className="flex items-center gap-2 text-gray-500 hover:text-[#222364] transition">
            <ArrowLeft className="w-4 h-4" />
            Help Center
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link href={`/talent/help/${categorySlug}`} className="text-gray-500 hover:text-[#222364] transition">
            {categoryTitle}
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900 truncate max-w-[200px] sm:max-w-none">{articleTitle}</span>
        </div>

        {/* Article Content */}
        <article className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100">
          <header className="mb-10 pb-10 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-gray-50 text-blue-600 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                {categoryTitle}
              </span>
              <span className="text-gray-400 text-sm">Updated 2 days ago</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              {articleTitle}
            </h1>
          </header>

          <div className="prose prose-blue max-w-none text-gray-600 leading-loose">
            <p className="text-lg text-gray-700 mb-8 font-medium">
              This guide provides a comprehensive overview of how to manage {articleTitle.toLowerCase()} effectively on the OTK Outsourcing platform. Whether you are a new talent or a seasoned freelancer, these steps will help streamline your workflow.
            </p>

            <h3 className="text-xl font-black text-gray-900 mt-8 mb-4">Step 1: Getting Started</h3>
            <p className="mb-6">
              Begin by navigating to your primary dashboard. Ensure that your account has the necessary permissions. Verify that your profile completeness is above 80% to ensure you have full access to features related to {categoryTitle.toLowerCase()}.
            </p>

            <div className="bg-gray-50/50 rounded-2xl p-6 border border-blue-100 my-8">
              <h4 className="font-black text-blue-900 mb-2">Pro Tip</h4>
              <p className="text-sm text-blue-800 m-0">
                Always double-check your inputs before finalizing submissions. Changes to critical settings or payouts may require a 24-hour verification window for security purposes.
              </p>
            </div>

            <h3 className="text-xl font-black text-gray-900 mt-8 mb-4">Step 2: Configuration & Management</h3>
            <p className="mb-4">
              Once you have accessed the correct module, follow these standard procedures:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Review the current status and metrics displayed on the overview panel.</li>
              <li>Use the primary action buttons located at the top right to initiate new processes.</li>
              <li>Fill out all required fields carefully. Mandatory fields are marked with a red asterisk.</li>
              <li>Click "Save & Continue" to securely commit your changes.</li>
            </ul>

            <h3 className="text-xl font-black text-gray-900 mt-8 mb-4">Troubleshooting</h3>
            <p className="mb-6">
              If you encounter errors like "Access Denied" or "Data Sync Failure", try refreshing your session by logging out and logging back in. If the issue persists, please take a screenshot of the error code and contact our support desk immediately.
            </p>
          </div>

          {/* Feedback Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 rounded-2xl p-6">
              <div>
                <h4 className="font-black text-gray-900 mb-1">Was this article helpful?</h4>
                <p className="text-sm text-gray-500">Your feedback helps us improve our Help Center.</p>
              </div>
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => setFeedback("up")}
                  className={`h-12 w-12 rounded-xl border-gray-200 hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition ${feedback === 'up' ? 'bg-green-50 text-green-600 border-green-200' : 'text-gray-500'}`}
                >
                  <ThumbsUp className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setFeedback("down")}
                  className={`h-12 w-12 rounded-xl border-gray-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition ${feedback === 'down' ? 'bg-red-50 text-red-600 border-red-200' : 'text-gray-500'}`}
                >
                  <ThumbsDown className="w-5 h-5" />
                </Button>
              </div>
            </div>
            {feedback && (
              <p className="text-center text-sm font-semibold text-green-600 mt-4">
                Thank you for your feedback!
              </p>
            )}
          </footer>
        </article>

      </div>
    </DashboardLayout>
  );
}
