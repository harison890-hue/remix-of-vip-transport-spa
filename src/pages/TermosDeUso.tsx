import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TermosDeUso = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28">
        <div className="container-premium section-padding">
          <h1 className="heading-display text-foreground mb-8">Termos de Uso</h1>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-8">
            <p className="text-muted-foreground text-sm">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">1. Aceitação dos Termos</h2>
              <p className="text-premium">
                Ao acessar e utilizar os serviços da Four Vip Transport e Serviços ("Empresa", "nós", "nosso"), 
                você concorda em cumprir e ficar vinculado a estes Termos de Uso. Se você não concordar com 
                qualquer parte destes termos, não poderá acessar ou utilizar nossos serviços.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">2. Descrição dos Serviços</h2>
              <p className="text-premium">
                A Four Vip Transport oferece serviços de transporte executivo de passageiros, incluindo:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-premium">
                <li>Transfer executivo para aeroportos (GRU, CGH, VCP)</li>
                <li>Transporte para eventos corporativos e sociais</li>
                <li>Aluguel de veículos com motorista</li>
                <li>Transporte executivo para viagens intermunicipais</li>
                <li>Serviços personalizados sob demanda</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">3. Reservas e Pagamentos</h2>
              <p className="text-premium">
                As reservas podem ser realizadas através do nosso site, WhatsApp ou telefone. 
                Todas as reservas estão sujeitas à disponibilidade e confirmação por nossa equipe.
              </p>
              <p className="text-premium">
                Os preços são informados no momento da cotação e podem variar de acordo com:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-premium">
                <li>Tipo de veículo solicitado</li>
                <li>Distância e duração do trajeto</li>
                <li>Horário e dia da semana</li>
                <li>Serviços adicionais requisitados</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">4. Cancelamentos e Reembolsos</h2>
              <p className="text-premium">
                Cancelamentos devem ser comunicados com no mínimo 24 horas de antecedência 
                para reembolso integral. Cancelamentos com menos de 24 horas podem estar 
                sujeitos a taxas de cancelamento.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">5. Responsabilidades do Cliente</h2>
              <p className="text-premium">O cliente compromete-se a:</p>
              <ul className="list-disc pl-6 space-y-2 text-premium">
                <li>Fornecer informações corretas para a prestação do serviço</li>
                <li>Estar no local combinado no horário acordado</li>
                <li>Tratar os motoristas e veículos com respeito</li>
                <li>Não transportar materiais ilegais ou perigosos</li>
                <li>Comunicar necessidades especiais com antecedência</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">6. Responsabilidades da Empresa</h2>
              <p className="text-premium">A Four Vip Transport compromete-se a:</p>
              <ul className="list-disc pl-6 space-y-2 text-premium">
                <li>Prestar serviços com pontualidade e qualidade</li>
                <li>Manter veículos em perfeitas condições de segurança e conforto</li>
                <li>Contratar motoristas profissionais e habilitados</li>
                <li>Possuir todas as autorizações legais para operação</li>
                <li>Manter sigilo sobre informações pessoais dos clientes</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">7. Limitação de Responsabilidade</h2>
              <p className="text-premium">
                A Four Vip Transport não se responsabiliza por atrasos causados por condições 
                climáticas adversas, trânsito intenso, acidentes ou outros eventos de força maior. 
                Em caso de atrasos previsíveis, a empresa comunicará o cliente o mais breve possível.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">8. Propriedade Intelectual</h2>
              <p className="text-premium">
                Todo o conteúdo deste site, incluindo textos, imagens, logotipos e design, 
                é propriedade da Four Vip Transport e protegido por leis de propriedade intelectual.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">9. Alterações nos Termos</h2>
              <p className="text-premium">
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
                As alterações entrarão em vigor imediatamente após sua publicação neste site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">10. Contato</h2>
              <p className="text-premium">
                Para dúvidas sobre estes Termos de Uso, entre em contato conosco:
              </p>
              <p className="text-premium">
                <strong>Four Vip Transport e Serviços</strong><br />
                CNPJ: 40.820.333/0001-81<br />
                E-mail: contato@fourviptransport.com.br<br />
                Telefone: (11) 99999-9999
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">11. Foro</h2>
              <p className="text-premium">
                Fica eleito o foro da Comarca de São Paulo, SP, para dirimir quaisquer 
                questões decorrentes destes Termos de Uso.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TermosDeUso;
