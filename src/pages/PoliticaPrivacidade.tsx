import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const PoliticaPrivacidade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28">
        <div className="container-premium section-padding">
          <h1 className="heading-display text-foreground mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-8">
            <p className="text-muted-foreground text-sm">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">1. Introdução</h2>
              <p className="text-premium">
                A Four Vip Transport e Serviços ("Empresa", "nós", "nosso") está comprometida 
                em proteger a privacidade e os dados pessoais de nossos clientes e usuários. 
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e 
                protegemos suas informações, em conformidade com a Lei Geral de Proteção de 
                Dados (LGPD - Lei nº 13.709/2018).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">2. Dados Coletados</h2>
              <p className="text-premium">Podemos coletar os seguintes tipos de dados pessoais:</p>
              
              <h3 className="font-semibold text-foreground text-lg">2.1 Dados fornecidos por você:</h3>
              <ul className="list-disc pl-6 space-y-2 text-premium">
                <li>Nome completo</li>
                <li>Número de telefone</li>
                <li>Endereço de e-mail</li>
                <li>Endereços de origem e destino dos trajetos</li>
                <li>Dados de pagamento (processados por terceiros seguros)</li>
                <li>Informações sobre preferências de serviço</li>
              </ul>

              <h3 className="font-semibold text-foreground text-lg">2.2 Dados coletados automaticamente:</h3>
              <ul className="list-disc pl-6 space-y-2 text-premium">
                <li>Endereço IP</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Páginas visitadas no site</li>
                <li>Cookies e tecnologias similares</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">3. Finalidade do Tratamento</h2>
              <p className="text-premium">Utilizamos seus dados pessoais para:</p>
              <ul className="list-disc pl-6 space-y-2 text-premium">
                <li>Prestar os serviços de transporte executivo contratados</li>
                <li>Processar reservas e pagamentos</li>
                <li>Entrar em contato para confirmações e atualizações</li>
                <li>Enviar comunicações de marketing (mediante consentimento)</li>
                <li>Melhorar nossos serviços e experiência do usuário</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Garantir a segurança de nossos serviços</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">4. Base Legal</h2>
              <p className="text-premium">
                O tratamento de dados pessoais é realizado com base nas seguintes hipóteses 
                legais previstas na LGPD:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-premium">
                <li><strong>Execução de contrato:</strong> para prestação dos serviços contratados</li>
                <li><strong>Consentimento:</strong> para envio de comunicações de marketing</li>
                <li><strong>Cumprimento de obrigação legal:</strong> para atender requisitos legais</li>
                <li><strong>Legítimo interesse:</strong> para melhorar nossos serviços</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">5. Compartilhamento de Dados</h2>
              <p className="text-premium">
                Seus dados podem ser compartilhados com:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-premium">
                <li>Motoristas parceiros (apenas dados necessários para o serviço)</li>
                <li>Processadores de pagamento</li>
                <li>Prestadores de serviços de tecnologia</li>
                <li>Autoridades governamentais (quando exigido por lei)</li>
              </ul>
              <p className="text-premium">
                Não vendemos ou compartilhamos seus dados pessoais para fins comerciais 
                de terceiros.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">6. Armazenamento e Segurança</h2>
              <p className="text-premium">
                Adotamos medidas técnicas e organizacionais apropriadas para proteger 
                seus dados pessoais contra acesso não autorizado, perda, destruição ou 
                alteração. Os dados são armazenados em servidores seguros e mantidos 
                pelo tempo necessário para cumprir as finalidades descritas nesta política 
                ou conforme exigido por lei.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">7. Cookies</h2>
              <p className="text-premium">
                Utilizamos cookies e tecnologias similares para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-premium">
                <li>Melhorar a funcionalidade do site</li>
                <li>Analisar o tráfego e comportamento dos usuários</li>
                <li>Personalizar sua experiência</li>
                <li>Lembrar suas preferências</li>
              </ul>
              <p className="text-premium">
                Você pode gerenciar suas preferências de cookies através das configurações 
                do seu navegador.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">8. Seus Direitos</h2>
              <p className="text-premium">
                De acordo com a LGPD, você tem os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-premium">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
                <li>Solicitar a portabilidade dos dados</li>
                <li>Revogar o consentimento a qualquer momento</li>
                <li>Obter informações sobre compartilhamento de dados</li>
              </ul>
              <p className="text-premium">
                Para exercer seus direitos, entre em contato conosco através dos canais 
                indicados ao final desta política.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">9. Retenção de Dados</h2>
              <p className="text-premium">
                Mantemos seus dados pessoais pelo tempo necessário para cumprir as 
                finalidades para as quais foram coletados, incluindo obrigações legais, 
                contratuais, de prestação de contas ou requisição de autoridades competentes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">10. Alterações nesta Política</h2>
              <p className="text-premium">
                Esta Política de Privacidade pode ser atualizada periodicamente. 
                Recomendamos que você revise esta página regularmente para se manter 
                informado sobre como protegemos seus dados. A data da última atualização 
                será sempre indicada no início deste documento.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">11. Contato e Encarregado de Dados</h2>
              <p className="text-premium">
                Para dúvidas, solicitações ou exercício de direitos relacionados 
                aos seus dados pessoais:
              </p>
              <p className="text-premium">
                <strong>Four Vip Transport e Serviços</strong><br />
                CNPJ: 40.820.333/0001-81<br />
                E-mail: contato@fourviptransport.com.br<br />
                Telefone: (11) 99999-9999
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-section text-foreground text-xl md:text-2xl">12. Foro</h2>
              <p className="text-premium">
                Fica eleito o foro da Comarca de São Paulo, SP, para dirimir quaisquer 
                questões decorrentes desta Política de Privacidade.
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

export default PoliticaPrivacidade;
