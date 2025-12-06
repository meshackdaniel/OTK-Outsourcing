// components/create-job/Step2_Description.tsx
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import { Menu } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

import { useCreateJob } from "@/lib/useCreateJobStore";
import {
  Bold,
  Italic,
  Link2,
  AlignLeft,
  AlignCenter,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  UnderlineIcon,
  Strikethrough,
} from "lucide-react";
import { Extension } from "@tiptap/core";  // Add this import

export default function Step2Description() {
  const { data, updateData } = useCreateJob();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Placeholder.configure({
        placeholder: "Write a detailed job description...",
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: "text-blue-600 underline", target: "_blank" },
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Underline,
      Strike,
    ] as Extension[], // ← This line fixes the TypeScript error
    content: data.description || "",
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      updateData({ description: editor.getHTML() });
    },
    editorProps: {
      attributes: {
        class:
          'min-h-96 p-8 focus:outline-none prose prose-lg max-w-none [&_ul]:list-disc [&_ol]:list-decimal [&_li]:before:content-[""] [&_li]:pl-6 [&_li]:my-2',
      },
    },
  });

  if (!editor)
    return <div className="h-96 bg-gray-100 rounded-xl animate-pulse" />;

  const charCount = editor.getText().length;
  const hasError = charCount < 100;

  const setLink = () => {
    const url = window.prompt("URL", "https://");
    if (url === null) return;
    if (url === "") editor.chain().focus().unsetLink().run();
    else editor.chain().focus().setLink({ href: url }).run();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Job Description</h1>
        <div
          className={`text-sm font-medium ${
            hasError ? "text-red-600" : "text-green-600"
          }`}
        >
          {charCount} / 100+ characters
        </div>
      </div>

      {hasError && (
        <div className="bg-red-50 border border-red-300 text-red-700 px-5 py-4 rounded-xl font-medium">
          Description must be at least 100 characters (currently {charCount})
        </div>
      )}

      <div className="rounded-xl border-2 border-gray-300 bg-white shadow-lg overflow-hidden">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-2 p-4 border-b bg-gray-50">
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button
              className={`p-3 rounded-lg hover:bg-white transition flex items-center gap-1 ${
                editor.isActive("heading") ? "bg-white shadow-md" : ""
              }`}
            >
              {editor.isActive("heading", { level: 1 }) ? (
                <Heading1 className="w-5 h-5" />
              ) : editor.isActive("heading", { level: 2 }) ? (
                <Heading2 className="w-5 h-5" />
              ) : editor.isActive("heading", { level: 3 }) ? (
                <Heading3 className="w-5 h-5" />
              ) : (
                <span className="text-sm font-medium">Paragraph</span>
              )}
              <ChevronDown className="w-4 h-4" />
            </Menu.Button>

            <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() =>
                        editor.chain().focus().setParagraph().run()
                      }
                      className={`${
                        active ? "bg-gray-100" : ""
                      } flex w-full items-center gap-3 px-4 py-3 text-left text-sm`}
                    >
                      <span className="font-medium">Paragraph</span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 1 }).run()
                      }
                      className={`${
                        active ? "bg-gray-100" : ""
                      } flex w-full items-center gap-3 px-4 py-3 text-left text-sm ${
                        editor.isActive("heading", { level: 1 })
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      <Heading1 className="w-5 h-5" /> Heading 1
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 2 }).run()
                      }
                      className={`${
                        active ? "bg-gray-100" : ""
                      } flex w-full items-center gap-3 px-4 py-3 text-left text-sm ${
                        editor.isActive("heading", { level: 2 })
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      <Heading2 className="w-5 h-5" /> Heading 2
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 3 }).run()
                      }
                      className={`${
                        active ? "bg-gray-100" : ""
                      } flex w-full items-center gap-3 px-4 py-3 text-left text-sm ${
                        editor.isActive("heading", { level: 3 })
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      <Heading3 className="w-5 h-5" /> Heading 3
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>

          <div className="w-px h-8 bg-gray-300 mx-1" />

          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-3 rounded-lg hover:bg-white transition ${
              editor.isActive("bold") ? "bg-white shadow-md" : ""
            }`}
          >
            <Bold className="w-5 h-5" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-3 rounded-lg hover:bg-white transition ${
              editor.isActive("italic") ? "bg-white shadow-md" : ""
            }`}
          >
            <Italic className="w-5 h-5" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`p-3 rounded-lg hover:bg-white transition ${
              editor.isActive("underline") ? "bg-white shadow-md" : ""
            }`}
          >
            <UnderlineIcon className="w-5 h-5" />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`p-3 rounded-lg hover:bg-white transition ${
              editor.isActive("strike") ? "bg-white shadow-md" : ""
            }`}
          >
            <Strikethrough className="w-5 h-5" />
          </button>

          <div className="w-px h-8 bg-gray-300 mx-1" />

          {/* LIST ICONS NOW SHOW */}
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-3 rounded-lg hover:bg-white transition ${
              editor.isActive("bulletList") ? "bg-white shadow-md" : ""
            }`}
          >
            <List className="w-5 h-5" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-3 rounded-lg hover:bg-white transition ${
              editor.isActive("orderedList") ? "bg-white shadow-md" : ""
            }`}
          >
            <ListOrdered className="w-5 h-5" />
          </button>

          <div className="w-px h-8 bg-gray-300 mx-1" />

          <button
            onClick={setLink}
            className={`p-3 rounded-lg hover:bg-white transition ${
              editor.isActive("link") ? "bg-white shadow-md" : ""
            }`}
          >
            <Link2 className="w-5 h-5" />
          </button>

          <div className="w-px h-8 bg-gray-300 mx-1" />

          <button
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={`p-3 rounded-lg hover:bg-white transition ${
              editor.isActive({ textAlign: "left" }) ? "bg-white shadow-md" : ""
            }`}
          >
            <AlignLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={`p-3 rounded-lg hover:bg-white transition ${
              editor.isActive({ textAlign: "center" })
                ? "bg-white shadow-md"
                : ""
            }`}
          >
            <AlignCenter className="w-5 h-5" />
          </button>
        </div>

        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
