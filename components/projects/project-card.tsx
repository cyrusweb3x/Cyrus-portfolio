"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Search } from "lucide-react"

interface ProjectCardProps {
  title: string
  badge: string
  badgeType: "live" | "progress"
  description: string
  stats?: string
  tags: string[]
  links?: {
    live?: string
    github?: string
    basescan?: string
  }
  featured?: boolean
  index: number
}

export function ProjectCard({
  title,
  badge,
  badgeType,
  description,
  stats,
  tags,
  links,
  featured = false,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`group relative ${featured ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600/0 via-violet-600/0 to-blue-600/0 opacity-0 blur-xl transition-all duration-500 group-hover:from-purple-600/30 group-hover:via-violet-600/30 group-hover:to-blue-600/30 group-hover:opacity-100" />
      
      {/* Card border glow */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-blue-500/20 opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Card content */}
      <div className={`relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D12] p-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/30 group-hover:shadow-2xl group-hover:shadow-purple-500/10 ${featured ? "md:p-8" : ""}`}>
        
        {/* Badge */}
        <div className="mb-4">
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${
              badgeType === "live"
                ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                : "border border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
            }`}
          >
            {badgeType === "live" && (
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
            )}
            {badge}
          </span>
        </div>

        {/* Gift icon for featured card */}
        {featured && (
          <div className="mb-6 flex justify-center">
            <div className="relative">
              {/* Animated rings */}
              <div className="absolute inset-0 animate-ping rounded-full bg-purple-500/20" style={{ animationDuration: "2s" }} />
              <div className="absolute -inset-4 animate-pulse rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
              
              {/* Gift box */}
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-10 w-10 text-purple-400"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Title */}
        <h3 className={`mb-3 font-bold text-white ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`mb-4 whitespace-pre-line leading-relaxed text-neutral-400 ${featured ? "text-base" : "text-sm"}`}>
          {description}
        </p>

        {/* Stats */}
        {stats && (
          <div className="mb-4 flex items-center gap-2 text-sm text-purple-400">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-purple-400" />
            {stats}
          </div>
        )}

        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 transition-colors group-hover:border-purple-500/30 group-hover:text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Links */}
        {links && (
          <div className="flex flex-wrap gap-3">
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 px-4 py-2 text-sm font-medium text-white transition-all hover:from-purple-500 hover:to-violet-500 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <ExternalLink className="h-4 w-4" />
                Live App
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-300 transition-all hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
            {links.basescan && (
              <a
                href={links.basescan}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-300 transition-all hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
              >
                <Search className="h-4 w-4" />
                Basescan
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}
