"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { useRouter } from "next/navigation";
import { DocumentationLayout } from "../components/layout/documentation-layout";
import { useSession, signOut } from "next-auth/react";

export default function POSDocumentation() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!session) {
    router.push('/login');
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Redirecting to login...</div>
      </div>
    );
  }

  const sections = [
    {
      id: "functional",
      title: "Functional Documentation",
      description:
        "Covers system features such as sales processing, multi-payment support...",
    },
    {
      id: "installation",
      title: "Installation & Deployment",
      description:
        "Step-by-step installation guide with environment configuration...",
    },
    {
      id: "reports",
      title: "Configuration Reports",
      description:
        "View detailed reports of POS machine configurations, locations, and verification details...",
    },
  ];

  return (
    <DocumentationLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with user info and logout */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Welcome, {session.user?.name}</h1>
            <p className="text-gray-400">POS Documentation Dashboard</p>
          </div>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Main content: Always show dashboard */}
        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onClick={() => router.push(`/${section.id}`)}
                className="cursor-pointer"
              >
                <Card className="relative border border-blue-900 bg-slate-800 text-gray-100 hover:shadow-2xl hover:border-blue-700 transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-blue-400 tracking-wide">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-base leading-relaxed">
                      {section.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </DocumentationLayout>
  );
}