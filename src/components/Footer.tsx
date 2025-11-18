import React from 'react'
import { Link } from 'react-router-dom'
import {GraduationCap, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube} from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo e Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Colégio Alpha
                </h3>
                <p className="text-gray-400 text-sm">Educação de Excelência</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aliquid, debitis harum corporis, illo a nobis, dolores minus nisi reprehenderit vitae ullam tempora laboriosam labore mollitia. Praesentium iusto veritatis sunt.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
              >
                <Facebook className="w-5 h-5 text-black" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
              >
                <Instagram className="w-5 h-5 text-black" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
              >
                <Youtube className="w-5 h-5 text-black" />
              </motion.a>
            </div>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Início' },
                { to: '/sobre', label: 'Sobre Nós' },
                { to: '/contato', label: 'Contato' },
                { to: '/trabalhe-conosco', label: 'Trabalhe Conosco' }
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Rua da rua, 123</p>
                  <p className="text-gray-300">Centro - São Paulo, SP</p>
                  <p className="text-gray-300">CEP: 01234-567</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <p className="text-gray-300">(??) ????-????</p>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <p className="text-gray-300">colocaremail.com</p>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Segunda a Sexta</p>
                  <p className="text-gray-300">07:00 às 18:00</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Colégio Alpha. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Desenvolvido com ❤️ para a educação
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
