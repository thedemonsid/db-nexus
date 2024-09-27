'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Database, Sun, LogOut, Send } from "lucide-react"

const sqlCode = `
-- Migrations will appear here as you chat with AI
create table students (
  id bigint primary key generated always as identity,
  name text not null,
  email text unique not null,
  enrollment_date date not null
);

create table courses (
  id bigint primary key generated always as identity,
  title text not null,
  description text,
  credits int not null
);

create table enrollments (
  id bigint primary key generated always as identity,
  student_id bigint references students (id) on delete cascade,
  course_id bigint references courses (id) on delete cascade,
  enrollment_date date not null
);
`

export function DatabaseInterfaceComponent() {
  const [chatInput, setChatInput] = useState('')

  return (
    <div className="flex h-screen bg-white text-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4 flex flex-col border-r border-gray-200">
        <Button variant="outline" className="mb-4">
          <Database className="mr-2 h-4 w-4" /> New database
        </Button>
        <ScrollArea className="flex-grow">
          <div className="space-y-2">
            <div className="px-2 py-1 text-sm">College Management System...</div>
            <div className="px-2 py-1 text-sm bg-gray-200 rounded">Student Course Model Creati...</div>
          </div>
        </ScrollArea>
        <div className="mt-auto pt-4 border-t border-gray-200">
          <Button variant="ghost" className="w-full justify-start">
            <Sun className="mr-2 h-4 w-4" /> Toggle theme
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <LogOut className="mr-2 h-4 w-4" /> Sign out
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow flex">
        {/* SQL Code panel */}
        <div className="w-1/2 p-4">
          <div className="mb-2">
            <Button variant="secondary" size="sm">
              Migrations
            </Button>
          </div>
          <SyntaxHighlighter
            language="sql"
            style={vs}
            customStyle={{
              backgroundColor: '#f8f8f8',
              padding: '1rem',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              border: '1px solid #e2e8f0',
            }}
          >
            {sqlCode}
          </SyntaxHighlighter>
        </div>

        {/* Chat interface */}
        <div className="w-1/2 flex flex-col bg-gray-50 border-l border-gray-200">
          <ScrollArea className="flex-grow p-4">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Executed SQL</p>
                <p className="mb-2">The student course model has been successfully created with the following tables:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <strong>Students:</strong> Contains student information.
                    <ul className="list-disc list-inside ml-4 mt-1 text-sm">
                      <li><code className="bg-gray-100 px-1 rounded">id</code>: Primary key</li>
                      <li><code className="bg-gray-100 px-1 rounded">name</code>: Student's name</li>
                      <li><code className="bg-gray-100 px-1 rounded">email</code>: Unique email address</li>
                      <li><code className="bg-gray-100 px-1 rounded">enrollment_date</code>: Date of enrollment</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Courses:</strong> Contains course details.
                    <ul className="list-disc list-inside ml-4 mt-1 text-sm">
                      <li><code className="bg-gray-100 px-1 rounded">id</code>: Primary key</li>
                      <li><code className="bg-gray-100 px-1 rounded">title</code>: Course title</li>
                      <li><code className="bg-gray-100 px-1 rounded">description</code>: Course description</li>
                      <li><code className="bg-gray-100 px-1 rounded">credits</code>: Number of credits</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Enrollments:</strong> Links students to courses.
                    <ul className="list-disc list-inside ml-4 mt-1 text-sm">
                      <li><code className="bg-gray-100 px-1 rounded">id</code>: Primary key</li>
                      <li><code className="bg-gray-100 px-1 rounded">student_id</code>: References <code className="bg-gray-100 px-1 rounded">students(id)</code></li>
                      <li><code className="bg-gray-100 px-1 rounded">course_id</code>: References <code className="bg-gray-100 px-1 rounded">courses(id)</code></li>
                      <li><code className="bg-gray-100 px-1 rounded">enrollment_date</code>: Date of enrollment in the course</li>
                    </ul>
                  </li>
                </ol>
                <p className="mt-2">This model allows you to manage students, courses, and their enrollments</p>
              </div>
            </div>
          </ScrollArea>
          <div className="p-4 border-t border-gray-200">
            <form className="flex items-center space-x-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="text"
                placeholder="create a student course model"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                className="flex-grow bg-white border-gray-300"
              />
              <Button type="submit" size="icon" variant="secondary">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}