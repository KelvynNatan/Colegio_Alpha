import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {Users, Heart, Award, Briefcase, Upload, Send, CheckCircle, Star, GraduationCap} from 'lucide-react'
import toast from 'react-hot-toast'

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Currículo enviado com sucesso! Analisaremos sua candidatura e entraremos em contato.')
    setFormData({ name: '', email: '', phone: '', position: '', experience: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const benefits = [
    {
      icon: Heart,
      title: "Plano de Saúde",
      description: "Plano de saúde completo para você e sua família"
    },
    {
      icon: GraduationCap,
      title: "Capacitação",
      description: "Programas de desenvolvimento profissional contínuo"
    },
    {
      icon: Award,
      title: "Reconhecimento",
      description: "Programa de meritocracia e reconhecimento"
    },
    {
      icon: Users,
      title: "Ambiente Colaborativo",
      description: "Equipe unida focada no crescimento conjunto"
    }
  ]

  const positions = [
    {
      title: "Professor de Matemática",
      type: "Tempo Integral",
      requirements: ["Licenciatura em Matemática", "Experiência mínima de 2 anos", "Conhecimento em tecnologias educacionais"],
      status: "Urgente"
    },
    {
      title: "Coordenador Pedagógico",
      type: "Tempo Integral",
      requirements: ["Pós-graduação em Educação", "Experiência em gestão escolar", "Liderança de equipes"],
      status: "Disponível"
    },
    {
      title: "Professor de Inglês",
      type: "Meio Período",
      requirements: ["Licenciatura em Letras - Inglês", "Certificação internacional", "Metodologias ativas"],
      status: "Disponível"
    }
  ]

  const values = [
    {
      title: "Paixão pela Educação",
      description: "Buscamos profissionais que acreditam no poder transformador da educação"
    },
    {
      title: "Inovação Constante",
      description: "Valorizamos quem busca sempre novas formas de ensinar e aprender"
    },
    {
      title: "Trabalho em Equipe",
      description: "Colaboração é fundamental para o sucesso de nossos alunos"
    },
    {
      title: "Desenvolvimento Contínuo",
      description: "Investimos no crescimento profissional de nossa equipe"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Trabalhe 
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> Conosco</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Faça parte de uma equipe apaixonada por educação e ajude a transformar 
              o futuro através do ensino de excelência.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Por que trabalhar no 
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent"> Alpha</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos um ambiente de trabalho estimulante, oportunidades de crescimento 
              e a chance de fazer a diferença na vida dos nossos alunos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start space-x-4"
              >
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Vagas Disponíveis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Confira nossas oportunidades atuais e candidate-se à vaga que mais combina com seu perfil
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{position.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    position.status === 'Urgente' 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-green-100 text-green-600'
                  }`}>
                    {position.status}
                  </span>
                </div>
                
                <p className="text-yellow-600 font-medium mb-4">{position.type}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Requisitos:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold py-3 px-4 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300">
                  Candidatar-se
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Envie seu Currículo</h2>
              <p className="text-xl text-gray-600">
                Não encontrou a vaga ideal? Envie seu currículo e entraremos em contato quando surgir uma oportunidade adequada ao seu perfil.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações Pessoais</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                        placeholder="seu@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                        Área de Interesse *
                      </label>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Selecione a área</option>
                        <option value="professor">Professor</option>
                        <option value="coordenacao">Coordenação</option>
                        <option value="administrativo">Administrativo</option>
                        <option value="apoio">Apoio Pedagógico</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                        Experiência Profissional
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Selecione sua experiência</option>
                        <option value="iniciante">Iniciante (0-2 anos)</option>
                        <option value="intermediario">Intermediário (3-5 anos)</option>
                        <option value="avancado">Avançado (6-10 anos)</option>
                        <option value="senior">Sênior (10+ anos)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Apresentação
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Conte-nos um pouco sobre você, sua experiência e motivação para trabalhar conosco..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold py-4 px-6 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                    >
                      <Send className="w-5 h-5" />
                      <span>Enviar Candidatura</span>
                    </button>
                  </form>
                </div>

                {/* Instructions */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Como Enviar seu Currículo</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <Upload className="w-6 h-6 text-yellow-600" />
                        <h4 className="font-semibold text-gray-800">Envie por E-mail</h4>
                      </div>
                      <p className="text-gray-700 mb-3">
                        Você pode enviar seu currículo diretamente para nosso e-mail:
                      </p>
                      <a 
                        href="mailto:rh@colegioalpha.edu.br" 
                        className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors"
                      >
                        rh@colegioalpha.edu.br
                      </a>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-800">Dicas Importantes:</h4>
                      <ul className="space-y-3">
                        {[
                          "Mantenha seu currículo atualizado",
                          "Inclua experiências relevantes na área educacional",
                          "Destaque certificações e formações complementares",
                          "Seja claro sobre sua disponibilidade de horários",
                          "Anexe cartas de recomendação se possível"
                        ].map((tip, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h4 className="font-semibold text-gray-800 mb-2">Processo Seletivo</h4>
                      <p className="text-gray-700 text-sm">
                        Nosso processo seletivo inclui análise curricular, entrevista e aula demonstrativa. 
                        Valorizamos profissionais comprometidos com a educação de qualidade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers
