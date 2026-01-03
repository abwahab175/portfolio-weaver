import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

const languageColors: Record<string, string> = {
  Python: "bg-yellow-500",
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-500",
  HTML: "bg-orange-500",
  CSS: "bg-purple-500",
  "Jupyter Notebook": "bg-orange-400",
  default: "bg-gray-500",
};

const GitHubRepos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/abwahab175/repos?sort=updated&per_page=100"
        );
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Failed to fetch repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="github" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            GitHub <span className="text-gradient">Repositories</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Explore my open source projects and contributions
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.5) }}
                className="glass-card rounded-xl p-6 hover:glow-effect transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate max-w-[180px]">
                      {repo.name}
                    </h3>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[40px]">
                  {repo.description || "No description available"}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <div className="flex items-center gap-1">
                        <span
                          className={`h-3 w-3 rounded-full ${
                            languageColors[repo.language] || languageColors.default
                          }`}
                        />
                        <span className="text-xs text-muted-foreground">
                          {repo.language}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span className="text-xs">{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      <span className="text-xs">{repo.forks_count}</span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {!loading && repos.length === 0 && (
          <p className="text-center text-muted-foreground">No repositories found.</p>
        )}
      </div>
    </section>
  );
};

export default GitHubRepos;
