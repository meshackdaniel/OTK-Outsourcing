"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Button } from"@/components/ui/button";
import { ArrowLeft, BookOpen, ChevronRight, FileText, PlayCircle } from"lucide-react";
import Link from"next/link";
import { useParams } from"next/navigation";

export default function TalentHelpCategoryPage() {
 const params = useParams();
 const categorySlug = Array.isArray(params.category) ? params.category[0] : params.category ||"";
 
 // Convert slug to Title Case
 const categoryTitle = categorySlug
 .split('-')
 .map(word => word.charAt(0).toUpperCase() + word.slice(1))
 .join('');

 const articles = [
 { title:`Introduction to ${categoryTitle}`, type:"article", time:"5 min read"},
 { title:"Step-by-step Video Guide", type:"video", time:"12 min watch"},
 { title:"Common issues and troubleshooting", type:"article", time:"3 min read"},
 { title:"Best practices and tips", type:"article", time:"7 min read"},
 { title:"Advanced configurations", type:"article", time:"10 min read"},
 ];

 const generateSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');

 return (
 <DashboardLayout type="talent">
 <div className="max-w-4xl mx-auto space-y-8">
 
 {/* Breadcrumb Header */}
 <div className="flex items-center gap-2 text-sm font-semibold mb-6">
 <Link href="/talent/help"className="flex items-center gap-2 text-gray-500 hover:text-[#222364] transition">
 <ArrowLeft className="w-4 h-4"/>
 Help Center
 </Link>
 <ChevronRight className="w-4 h-4 text-gray-400"/>
 <span className="text-gray-900">{categoryTitle}</span>
 </div>

 {/* Header section */}
 <div className="bg-white rounded-3xl p-10 border border-gray-100 flex items-center gap-6">
 <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
 <BookOpen className="w-8 h-8 text-[#222364]"/>
 </div>
 <div>
 <h1 className="text-3xl font-black text-gray-900 mb-2">{categoryTitle}</h1>
 <p className="text-gray-500">Browse all articles and guides related to {categoryTitle.toLowerCase()}.</p>
 </div>
 </div>

 {/* Articles List */}
 <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
 <div className="p-6 border-b border-gray-100 bg-gray-50/50">
 <h2 className="font-black text-gray-900">Articles ({articles.length})</h2>
 </div>
 <div className="divide-y divide-gray-100">
 {articles.map((article, i) => (
 <Link key={i} href={`/talent/help/${categorySlug}/${generateSlug(article.title)}`} className="flex items-center justify-between p-6 hover:bg-gray-50 transition group">
 <div className="flex items-center gap-4">
 <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-white group- transition">
 {article.type ==="video"? (
 <PlayCircle className="w-5 h-5 text-gray-400 group-hover:text-[#222364]"/>
 ) : (
 <FileText className="w-5 h-5 text-gray-400 group-hover:text-[#222364]"/>
 )}
 </div>
 <div>
 <h3 className="font-black text-gray-900 group-hover:text-[#222364] transition">{article.title}</h3>
 <p className="text-sm text-gray-500 mt-0.5">{article.time}</p>
 </div>
 </div>
 <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#222364] transition transform group-hover:translate-x-1"/>
 </Link>
 ))}
 </div>
 </div>

 {/* Contact CTA */}
 <div className="bg-[#222364] rounded-3xl p-8 text-center text-white mt-12">
 <h3 className="text-xl font-black mb-2">Didn't find what you were looking for?</h3>
 <p className="text-blue-200 mb-6 max-w-lg mx-auto">Our support team is available around the clock to assist you with any specific queries regarding {categoryTitle.toLowerCase()}.</p>
 <div className="flex justify-center gap-4">
 <Link href="/talent/help/chat">
 <Button className="bg-[#f2c060] hover:bg-[#e0b050] text-[#222364] font-bold px-8 h-12 rounded-xl">
 Contact Support
 </Button>
 </Link>
 </div>
 </div>

 </div>
 </DashboardLayout>
 );
}
