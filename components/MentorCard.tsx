//components/MentorCard.tsx
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Star, ExternalLink, Mail, Linkedin, Facebook } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface MentorCardProps {
  id: string
  slug: string
  name: string
  title: string
  degree: string
  avatar: string
  specialties: string[]
  social?: {
    linkedin?: string
    facebook?: string
    email?: string
  }
}

const MentorCard = ({ id, slug, name, title, degree, avatar, specialties, social }: MentorCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-full"
    >
      <Card className="h-full flex flex-col bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
        <CardHeader className="text-center pb-4">
          {/* Avatar */}
          <div className="relative mx-auto mb-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <Image
                  src={avatar || "/placeholder.svg"}
                  alt={name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
              <Star className="h-4 w-4 text-white fill-current" />
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 min-h-[1.75rem] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {name}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-1 min-h-[1.25rem]">
              {title}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-xs min-h-[1rem]">
              {degree}
            </p>
          </div>
        </CardHeader>

        <CardContent className="flex-1 px-6 pb-4">
          {/* Specialties */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Chuyên môn:</h4>
            <div className="flex flex-wrap gap-1 min-h-[2.5rem]">
              {specialties.slice(0, 3).map((specialty, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                >
                  {specialty}
                </Badge>
              ))}
              {specialties.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{specialties.length - 3}
                </Badge>
              )}
            </div>
          </div>

          {/* Social Links */}
          {social && (
            <div className="flex justify-center space-x-3">
              {social.linkedin && (
                <Link
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-blue-600" />
                </Link>
              )}
              {social.facebook && (
                <Link
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                >
                  <Facebook className="h-4 w-4 text-blue-600" />
                </Link>
              )}
              {social.email && (
                <Link
                  href={`mailto:${social.email}`}
                  className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                >
                  <Mail className="h-4 w-4 text-blue-600" />
                </Link>
              )}
            </div>
          )}
        </CardContent>

        <CardFooter className="pt-0 px-6">
          <Link href={`/mentors/${slug}`} className="w-full">

            <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white group/btn">
              Xem hồ sơ
              <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default MentorCard
