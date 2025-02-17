import { Github, Code2, Binary, Gamepad2, GitBranch as BrandTiktok, ExternalLink } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-950 dark:to-purple-950 p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 backdrop-blur-sm bg-white/80 dark:bg-black/80 shadow-xl rounded-2xl border-2 border-pink-200 dark:border-pink-800">
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                    alt="Profile" 
                    className="w-32 h-32 rounded-full object-cover border-4 border-pink-300 dark:border-pink-700 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-pink-400 to-purple-400 p-2 rounded-full shadow-lg">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                Rafef
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Reverse Engineering Enthusiast & Cybersecurity Explorer
              </p>
            </div>

            {/* Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/50 dark:to-purple-900/50 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3">
                  <Binary className="w-6 h-6 text-pink-500" />
                  <h2 className="text-xl font-semibold">Reverse Engineering</h2>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Specializing in binary analysis and software reconstruction
                </p>
              </Card>

              <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/50 dark:to-pink-900/50 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3">
                  <Github className="w-6 h-6 text-purple-500" />
                  <h2 className="text-xl font-semibold">Open Source</h2>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Contributing to security tools and community projects
                </p>
              </Card>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center mb-4">Connect with Rafef</h3>
              <div className="flex flex-col space-y-3">
                <Button
                  variant="outline"
                  className="w-full bg-white dark:bg-gray-800 hover:bg-pink-50 dark:hover:bg-pink-900/50 shadow-md"
                  onClick={() => window.open('https://www.roblox.com/ar/users/7151542456/profile', '_blank')}
                >
                  <Gamepad2 className="mr-2 h-5 w-5 text-pink-500" />
                  Roblox Profile
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full bg-white dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900/50 shadow-md"
                  onClick={() => window.open('https://www.tiktok.com/@rafefnotmalicious', '_blank')}
                >
                  <BrandTiktok className="mr-2 h-5 w-5 text-purple-500" />
                  TikTok
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center text-sm text-gray-500 dark:text-gray-400 pt-6">
              <p>🔒 Exploring the digital world, one byte at a time</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;