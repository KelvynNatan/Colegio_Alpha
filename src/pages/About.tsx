import React from 'react'
import { motion } from 'framer-motion'
import {Users, Target, Eye, Heart, Award, BookOpen, Globe, Lightbulb} from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compromisso Incondicional",
      description: "Dedicação absoluta ao sucesso de cada aluno. Investimos em tutoria personalizada, acompanhamento psicopedagógico e suporte integral."
    },
    {
      icon: Target,
      title: "Excelência Sem Concessões",
      description: "Padrão internacional de qualidade. Corpo docente com mestrado/doutorado, infraestrutura de ponta e resultados comprovados."
    },
    {
      icon: Lightbulb,
      title: "Inovação Disruptiva",
      description: "Pioneiros em metodologias STEAM, realidade virtual, inteligência artificial e programação. Preparamos para profissões que ainda não existem."
    },
    {
      icon: Users,
      title: "Parceria Estratégica",
      description: "Alianças com universidades internacionais, empresas de tecnologia e instituições de pesquisa para garantir oportunidades únicas."
    }
  ]

  const milestones = [
    { year: "????", event: "texto sobre" },
    { year: "????", event: "texto sobre" },
    { year: "????", event: "texto sobre" },
    { year: "????", event: "texto sobre" },
    { year: "????", event: "texto sobre" },
    { year: "????", event: "texto sobre" }
  ]

  const team = [
    {
      name: "Cara aleatorio do google",
      role: "Qualquer cargo foda",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      description: "Formação pika"
    },
    {
      name: "Mona aleatorio do google",
      role: "Qualquer cargo foda",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
      description: "Formação pika"
    },
    {
      name: "Cara aleatorio do google",
      role: "Qualquer cargo foda",
      image: "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg",
      description: "Formação pika"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Nossa 
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> História</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              25 anos de excelência comprovada. Líderes em inovação educacional, 
              formamos os profissionais que lideram as maiores empresas e universidades do mundo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* História Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Como tudo começou
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  O Colégio Alpha nasceu da realização de um sonho, o sonho de transformar vidas por meio da educação.
Após mais de 15 anos dedicados ao ensino, vivenciando de perto os desafios e as belezas da educação brasileira, surgiu em nosso fundador um profundo desejo: fazer a diferença.
                </p>
                <p>
                  Mais do que uma escola, o Colégio Alpha foi idealizado como um projeto de propósito, construído sobre princípios e valores que acreditamos serem essenciais para a formação de cidadãos conscientes, éticos e preparados para o futuro.
                </p>
                <p>
                  Aqui, cada aluno é visto como único, e a aprendizagem vai além dos livros, ela acontece na convivência, no respeito, na fé, na responsabilidade e no amor pelo conhecimento.
                </p>
                <p>
                  Com uma equipe comprometida e um ambiente acolhedor, seguimos firmes na missão de educar com excelência, inspirando nossos alunos a sonhar alto, acreditar no seu potencial e se tornarem protagonistas de sua própria história.

Colégio Alpha, Educação com propósito, valores e coração.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/8926590/pexels-photo-8926590.jpeg"
                alt="História do Colégio Alpha"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <p className="text-3xl font-bold text-black">R$ ??</p>
                  <p className="text-sm text-black font-medium">Investidos em Excelência</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Marcos da nossa 
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent"> trajetória</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-yellow-600 mb-2">{milestone.year}</h3>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nossa Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Texto sobre missão
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nossa Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Texto sobre visão
                
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nossos Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Texto sobre valores
              </p>
            </motion.div>
          </div>

          {/* Valores Detalhados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Nossos 
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent"> Valores</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Nossa 
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent"> Equipe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Texto sobre equipe
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-yellow-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
