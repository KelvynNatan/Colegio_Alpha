import React from 'react'
import {MessageCircleDashed as MessageCircle} from 'lucide-react'
import { motion } from 'framer-motion'

const WhatsAppButton = () => {
  const phoneNumber = "5511999999999" // Substitua pelo número real do colégio
  const message = "Olá! Gostaria de mais informações sobre o Colégio Alpha."
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        
        {/* Button */}
        <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale conosco no WhatsApp
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
        </div>
      </div>
    </motion.a>
  )
}

export default WhatsAppButton
