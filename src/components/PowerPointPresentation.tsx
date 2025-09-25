import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import tamponamentoImg from "@/assets/tamponamento.gif";
import emboliaPulmonarImg from "@/assets/embolia-pulmonar.gif";
import pneumotorax1Img from "@/assets/pneumotorax-1.gif";
import pneumotorax2Img from "@/assets/pneumotorax-2.gif";
import hipovolemia1Img from "@/assets/hipovolemia-1.gif";
import hipovolemia2Img from "@/assets/hipovolemia-2.gif";

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  type: 'title' | 'content' | 'table' | 'conclusion';
}

const PowerPointPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Cuidados Pós-Parada Cardiorrespiratória",
      subtitle: "Uma Abordagem Sistematizada para 2025",
      type: 'title',
      content: (
        <div className="h-full flex flex-col justify-center items-center text-center space-y-8">
          <div className="text-8xl mb-6">
            <i className="fas fa-heartbeat text-accent"></i>
          </div>
          <div className="text-xl text-muted-foreground max-w-4xl">
            Baseado nas Diretrizes da AHA e Neurocritical Care Society de 2023
          </div>
          <div className="flex justify-center items-center gap-8 mt-8">
            <i className="fas fa-stethoscope text-primary text-4xl"></i>
            <i className="fas fa-brain text-success text-4xl"></i>
            <i className="fas fa-heart text-accent text-4xl"></i>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "O Paradigma Pós-RCE: Uma Batalha Contínua",
      type: 'content',
      content: (
        <div className="h-full flex flex-col space-y-8">
          {/* Layout horizontal para widescreen */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 flex-1">
            {/* Coluna esquerda */}
            <div className="space-y-6">
              <div className="bg-accent/10 p-8 rounded-lg border-l-4 border-accent">
                <h3 className="text-2xl font-semibold text-accent mb-4 flex items-center gap-3">
                  <i className="fas fa-exclamation-triangle text-2xl"></i>
                  O Desafio Máximo
                </h3>
                <p className="text-xl">A Parada Cardiorrespiratória (PCR) é o auge da emergência médica.</p>
              </div>
              
              <div className="bg-primary/10 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-3">
                  <i className="fas fa-chart-line text-2xl"></i>
                  Estatísticas AHA/NCS 2023
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/60 p-4 rounded-lg text-center">
                    <div className="text-4xl font-bold text-accent">9%</div>
                    <div className="text-base">PCR Extra-hospitalar</div>
                  </div>
                  <div className="bg-white/60 p-4 rounded-lg text-center">
                    <div className="text-4xl font-bold text-primary">23%</div>
                    <div className="text-base">PCR Intra-hospitalar</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna direita - Mensagem central */}
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-br from-warning/20 to-accent/15 p-8 rounded-lg border-2 border-warning/40 text-center">
                <div className="text-6xl mb-6">
                  <i className="fas fa-flag-checkered text-warning"></i>
                </div>
                <h3 className="text-2xl font-bold text-accent mb-4">RCE ≠ Fim</h3>
                <p className="text-xl font-medium">
                  É o <strong className="text-warning">tiro de partida</strong>
                </p>
                <p className="text-lg mt-4">
                  A corrida contra o tempo pelo prognóstico começa <strong>agora</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "A Síndrome Pós-Parada Cardíaca",
      type: 'content',
      content: (
        <div className="h-full flex flex-col space-y-8">
          <div className="text-center">
            <p className="text-xl mb-6">Uma tempestade fisiopatológica complexa com quatro componentes principais:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 flex-1">
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 h-fit">
              <div className="text-center space-y-3">
                <i className="fas fa-brain text-accent text-4xl"></i>
                <h3 className="text-lg font-semibold">Lesão Cerebral Anóxica</h3>
                <p className="text-base">Principal determinante do prognóstico</p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 h-fit">
              <div className="text-center space-y-3">
                <i className="fas fa-heart text-primary text-4xl"></i>
                <h3 className="text-lg font-semibold">Disfunção Miocárdica</h3>
                <p className="text-base">"Miocárdio atordoado" e instabilidade</p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-warning/10 to-warning/5 border-warning/30 h-fit">
              <div className="text-center space-y-3">
                <i className="fas fa-fire text-warning text-4xl"></i>
                <h3 className="text-lg font-semibold">Resposta Sistêmica</h3>
                <p className="text-base">Cascata inflamatória isquemia/reperfusão</p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 border-success/30 h-fit">
              <div className="text-center space-y-3">
                <i className="fas fa-search-plus text-success text-4xl"></i>
                <h3 className="text-lg font-semibold">Patologia Precipitante</h3>
                <p className="text-base">Causa original que precisa ser tratada</p>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/15 to-success/10 p-6 rounded-lg border-2 border-primary/30 text-center">
            <p className="text-xl font-bold">
              O manejo qualificado desta síndrome define a <strong className="text-success">sobrevivência com bom resultado neurológico</strong>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Fase I - Estabilização Imediata e Prevenção de Nova PCR",
      type: 'content',
      content: (
        <div className="h-full flex flex-col space-y-8">
          {/* Layout horizontal para melhor aproveitamento */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 flex-1">
            {/* Coluna esquerda - Informações principais */}
            <div className="space-y-6">
              <div className="bg-accent/10 p-8 rounded-lg border-l-4 border-accent">
                <h3 className="text-2xl font-semibold text-accent mb-4 flex items-center gap-3">
                  <i className="fas fa-clock text-2xl"></i>
                  Os Primeiros 20 Minutos
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/60 p-4 rounded-lg text-center">
                    <div className="text-5xl font-bold text-accent mb-2">4/10</div>
                    <div className="text-base">Sofrem nova PCR</div>
                  </div>
                  <p className="text-lg"><strong>Causa:</strong> Miocárdio atordoado + Vasoplegia sistêmica</p>
                </div>
              </div>

              <div className="bg-primary/10 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-3">
                  <i className="fas fa-target text-2xl"></i>
                  Objetivo
                </h3>
                <p className="text-xl">Abordagem <strong>agressiva</strong> para prevenir lesão secundária e nova parada</p>
              </div>
            </div>

            {/* Coluna direita - Indicadores visuais */}
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-1 gap-6 w-full max-w-sm">
                <div className="text-center p-8 bg-accent/10 rounded-lg border-2 border-accent/30">
                  <i className="fas fa-heart-pulse text-accent text-5xl mb-4"></i>
                  <div className="text-4xl font-bold text-accent mb-2">40%</div>
                  <div className="text-base">Risco de Nova PCR</div>
                </div>
                <div className="text-center p-8 bg-primary/10 rounded-lg border-2 border-primary/30">
                  <i className="fas fa-stopwatch text-primary text-5xl mb-4"></i>
                  <div className="text-4xl font-bold text-primary mb-2">20min</div>
                  <div className="text-base">Janela Crítica</div>
                </div>
                <div className="text-center p-8 bg-success/10 rounded-lg border-2 border-success/30">
                  <i className="fas fa-shield-alt text-success text-5xl mb-4"></i>
                  <div className="text-2xl font-bold text-success mb-2">Prevenção</div>
                  <div className="text-base">Foco Principal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Fase I - Suporte Circulatório",
      type: 'content',
      content: (
        <div className="space-y-8">
          {/* Grid principal com 3 colunas em widescreen */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-primary/10 p-8 rounded-lg border border-primary/20">
              <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
                <i className="fas fa-tint text-2xl"></i>
                Fluidos
              </h3>
              <div className="space-y-4">
                <div className="bg-white/60 p-4 rounded-lg text-center">
                  <div className="text-4xl font-bold text-primary mb-1">1000ML</div>
                  <div className="text-base text-muted-foreground">Bolus inicial</div>
                </div>
                <div className="space-y-3">
                  <p className="text-base"><strong>Preferência:</strong> Soluções balanceadas</p>
                  <p className="text-base text-muted-foreground">(ex: Ringer Lactato)</p>
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <p className="text-base font-medium text-accent">
                      <i className="fas fa-exclamation-triangle mr-2"></i>
                      <strong>ICC:</strong> Cuidado especial
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 p-8 rounded-lg border border-accent/20">
              <h3 className="text-2xl font-semibold text-accent mb-6 flex items-center gap-3">
                <i className="fas fa-syringe text-2xl"></i>
                Vasopressores
              </h3>
              <div className="space-y-4">
                <div className="bg-white/60 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-accent mb-1">Norepinefrina</div>
                  <div className="text-base text-muted-foreground">1ª linha</div>
                </div>
                <div className="bg-accent/20 p-4 rounded-lg">
                  <p className="text-lg font-bold text-center text-accent mb-2">
                    <i className="fas fa-exclamation-triangle mr-2"></i>
                    EM PARALELO com fluidos
                  </p>
                  <p className="text-base text-center">Não sequencial!</p>
                </div>
              </div>
            </div>

            <div className="bg-success/10 p-8 rounded-lg border border-success/20">
              <h3 className="text-2xl font-semibold text-success mb-6 flex items-center gap-3">
                <i className="fas fa-chart-line text-2xl"></i>
                Monitorização
              </h3>
              <div className="space-y-4">
                <div className="bg-white/60 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-heartbeat text-success text-xl"></i>
                    <span className="font-bold text-xl text-success">PAI</span>
                  </div>
                  <div className="text-base">Pressão Arterial Invasiva</div>
                </div>
                <div className="bg-white/60 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-wave-square text-success text-xl"></i>
                    <span className="font-bold text-xl text-success">EtCO₂</span>
                  </div>
                  <div className="text-base">Capnografia</div>
                </div>
              </div>
            </div>
          </div>

          {/* Destaque principal - conceito chave */}
          <div className="bg-gradient-to-r from-warning/20 to-accent/20 p-8 rounded-lg border-2 border-warning/40">
            <div className="text-center">
              <div className="flex justify-center items-center gap-6 mb-4 flex-wrap">
                <div className="flex items-center gap-3 text-primary">
                  <i className="fas fa-tint text-3xl"></i>
                  <span className="text-2xl font-bold">Fluidos</span>
                </div>
                <div className="text-3xl font-bold text-warning">+</div>
                <div className="flex items-center gap-3 text-accent">
                  <i className="fas fa-syringe text-3xl"></i>
                  <span className="text-2xl font-bold">Vasopressores</span>
                </div>
                <div className="text-3xl font-bold text-warning">=</div>
                <div className="text-2xl font-bold text-success bg-success/10 px-4 py-2 rounded-lg">
                  PARALELO
                </div>
              </div>
              <p className="text-lg font-medium text-muted-foreground">Não sequencial!</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "Fase I - Suporte Respiratório e Vias Aéreas",
      type: 'content',
      content: (
        <div className="h-full flex flex-col space-y-8">
          {/* Layout otimizado para widescreen */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 flex-1">
            {/* Coluna esquerda - Prioridades e IOT */}
            <div className="space-y-8">
              <div className="bg-primary/10 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
                  <i className="fas fa-lungs text-2xl"></i>
                  Prioridades Iniciais
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/60 p-4 rounded-lg">
                    <p className="text-lg"><strong>1º</strong> Estabilização cardiovascular</p>
                  </div>
                  <div className="bg-white/60 p-4 rounded-lg">
                    <p className="text-lg"><strong>2º</strong> Ventilação com bolsa-válvula-máscara</p>
                  </div>
                </div>
              </div>

              <div className="bg-warning/10 p-8 rounded-lg border-l-4 border-warning">
                <h3 className="text-2xl font-semibold text-warning mb-6 flex items-center gap-3">
                  <i className="fas fa-exclamation-triangle text-2xl"></i>
                  Intubação (IOT)
                </h3>
                <div className="space-y-4">
                  <div className="bg-accent/20 p-4 rounded-lg">
                    <p className="text-lg font-bold text-accent text-center">Cautela com hemodinâmica!</p>
                  </div>
                  <div className="bg-white/60 p-4 rounded-lg">
                    <p className="text-base">Reduzir doses de indução</p>
                    <p className="text-base"><strong>Ex:</strong> Etomidato 0.15 mg/kg</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna direita - Cards de escolha */}
            <div className="flex items-center justify-center">
              <div className="space-y-8 w-full max-w-md">
                <Card className="p-8 bg-gradient-to-br from-success/15 to-success/5 border-2 border-success/40">
                  <div className="text-center space-y-4">
                    <i className="fas fa-check-circle text-success text-6xl"></i>
                    <h4 className="text-2xl font-bold text-success">✓ Primeira Escolha</h4>
                    <p className="text-xl">Bolsa-Válvula-Máscara</p>
                    <div className="bg-success/20 p-3 rounded-lg">
                      <p className="text-base">Altamente eficaz inicial</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-warning/15 to-warning/5 border-2 border-warning/40">
                  <div className="text-center space-y-4">
                    <i className="fas fa-procedures text-warning text-6xl"></i>
                    <h4 className="text-2xl font-bold text-warning">⚠️ Com Cautela</h4>
                    <p className="text-xl">IOT com doses reduzidas</p>
                    <div className="bg-warning/20 p-3 rounded-lg">
                      <p className="text-base">Mitigar hipotensão</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Fase II - Diagnóstico Etiológico: Os 3 Pilares",
      type: 'content',
      content: (
        <div className="h-full flex flex-col space-y-8">
          <div className="bg-gradient-to-r from-accent/15 to-primary/10 p-8 rounded-lg text-center border-l-4 border-accent">
            <p className="text-2xl font-bold mb-4">
              Identificar e tratar a causa é a <strong className="text-accent">única forma</strong> de prevenir a recorrência
            </p>
            <p className="text-xl">A investigação deve ser <strong>rápida e direcionada</strong></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 flex-1">
            <Card className="p-8 text-center bg-gradient-to-br from-primary/15 to-primary/5 border-2 border-primary/40 hover:scale-105 transition-transform">
              <i className="fas fa-heartbeat text-primary text-6xl mb-6"></i>
              <h3 className="text-2xl font-bold text-primary mb-4">Pilar 1</h3>
              <h4 className="font-semibold text-xl mb-2">Eletrocardiograma</h4>
              <div className="bg-primary/20 p-3 rounded-lg">
                <p className="text-base">(ECG de 12 Derivações)</p>
              </div>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-success/15 to-success/5 border-2 border-success/40 hover:scale-105 transition-transform">
              <i className="fas fa-flask text-success text-6xl mb-6"></i>
              <h3 className="text-2xl font-bold text-success mb-4">Pilar 2</h3>
              <h4 className="font-semibold text-xl mb-2">Avaliação Laboratorial</h4>
              <div className="bg-success/20 p-3 rounded-lg">
                <p className="text-base">Direcionada</p>
              </div>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-warning/15 to-warning/5 border-2 border-warning/40 hover:scale-105 transition-transform">
              <i className="fas fa-x-ray text-warning text-6xl mb-6"></i>
              <h3 className="text-2xl font-bold text-warning mb-4">Pilar 3</h3>
              <h4 className="font-semibold text-xl mb-2">Estratégias de Imagem</h4>
              <div className="bg-warning/20 p-3 rounded-lg">
                <p className="text-base">US + TC</p>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/20 to-accent/15 p-6 rounded-lg border-2 border-primary/40 text-center">
            <p className="text-2xl font-bold text-primary">
              <i className="fas fa-clock mr-3 text-3xl"></i>
              Tempo é neurônio: diagnóstico rápido salva vidas!
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 8,
      title: "Fase II - Pilar 1: Eletrocardiograma (ECG) de 12 Derivações",
      type: 'content',
      content: (
        <div className="space-y-6">
          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <i className="fas fa-target"></i>
              Objetivo Principal
            </h3>
            <p className="text-lg">Identificar <strong>Infarto Agudo do Miocárdio com Supradesnivelamento do ST (IAMCSST)</strong></p>
          </div>

          <div className="bg-warning/10 p-6 rounded-lg border-l-4 border-warning">
            <h3 className="text-xl font-semibold text-warning mb-4 flex items-center gap-2">
              <i className="fas fa-exclamation-triangle"></i>
              Nuance Importante
            </h3>
            <ul className="medical-list">
              <li>ECGs nos <strong>primeiros 7 minutos</strong> pós-RCE podem ter alta taxa de <strong className="text-accent">falso-positivos</strong> para isquemia</li>
            </ul>
          </div>

          <div className="bg-success/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-success mb-4 flex items-center gap-2">
              <i className="fas fa-lightbulb"></i>
              Estratégia Prudente
            </h3>
            <p className="text-lg">Se o paciente estiver <strong>estável</strong>, repetir o ECG em <strong>5-10 minutos</strong>, sem atrasar a consulta com a cardiologia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 lg:gap-6 mt-8">
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
              <div className="text-center">
                <i className="fas fa-clock text-accent text-3xl mb-3"></i>
                <h4 className="font-semibold mb-2 text-accent">⚠️ Primeiros 7 min</h4>
                <p>Alta taxa de falso-positivos</p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 border-success/30">
              <div className="text-center">
                <i className="fas fa-redo text-success text-3xl mb-3"></i>
                <h4 className="font-semibold mb-2 text-success">✓ Repetir ECG</h4>
                <p>Em 5-10 minutos se estável</p>
              </div>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 9,
      title: "Fase II - Pilar 2: Avaliação Laboratorial Direcionada",
      type: 'content',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
              <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                <i className="fas fa-lungs"></i>
                Gasometria Arterial
              </h4>
              <p>Guia para manejo ventilatório e metabólico</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-warning/10 to-warning/5 border-warning/30">
              <h4 className="font-semibold text-warning mb-3 flex items-center gap-2">
                <i className="fas fa-bolt"></i>
                Eletrólitos
              </h4>
              <p>Atenção especial ao <strong>Potássio</strong> (flutuações rápidas são um risco de arritmia)</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 border-success/30">
              <h4 className="font-semibold text-success mb-3 flex items-center gap-2">
                <i className="fas fa-chart-area"></i>
                Perfusão
              </h4>
              <div className="space-y-2">
                <p>Nível inicial e <strong>clearance</strong> (depuração) de lactato são marcadores prognósticos</p>
                <p className="text-sm font-medium">SVD &gt; 0,5ml/kg/min</p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
              <h4 className="font-semibold text-accent mb-3 flex items-center gap-2">
                <i className="fas fa-heartbeat"></i>
                Troponina
              </h4>
              <div className="space-y-2">
                <p>• Uma elevação <strong>discreta</strong> é esperada (PCR, compressões, desfibrilação)</p>
                <p className="text-sm">• A pista para oclusão coronariana é a <strong>trajetória de subida acentuada e contínua</strong></p>
              </div>
            </Card>
          </div>

          <div className="bg-primary/10 p-6 rounded-lg text-center">
            <p className="text-lg font-medium">
              <i className="fas fa-search mr-2"></i>
              Foco na <strong>tendência</strong> dos valores, não apenas no valor isolado!
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 10,
      title: "Fase II - Pilar 3: Estratégias de Imagem (se disponíveis)",
      type: 'content',
      content: (
        <div className="h-full flex flex-col space-y-8">
          {/* Layout horizontal otimizado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 flex-1">
            {/* Coluna esquerda - POCUS */}
            <div className="space-y-6">
              <div className="bg-primary/10 p-8 rounded-lg border-l-4 border-primary">
                <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
                  <i className="fas fa-eye text-2xl"></i>
                  POCUS à Beira-Leito
                </h3>
                <p className="text-xl mb-6"><strong>Valor inestimável</strong> para diagnóstico rápido:</p>
                
                <div className="space-y-4">
                  <div className="bg-accent/15 p-4 rounded-lg text-center">
                    <i className="fas fa-heart text-accent text-3xl mb-2"></i>
                    <p className="text-lg font-semibold">Tamponamento cardíaco</p>
                  </div>
                  <div className="bg-warning/15 p-4 rounded-lg text-center">
                    <i className="fas fa-lungs text-warning text-3xl mb-2"></i>
                    <p className="text-lg font-semibold">Embolia pulmonar maciça</p>
                  </div>
                  <div className="bg-success/15 p-4 rounded-lg text-center">
                    <i className="fas fa-tint text-success text-3xl mb-2"></i>
                    <p className="text-lg font-semibold">Hipovolemia severa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna direita - TC */}
            <div className="space-y-6">
              <div className="bg-success/10 p-8 rounded-lg border-l-4 border-success">
                <h3 className="text-2xl font-semibold text-success mb-6 flex items-center gap-3">
                  <i className="fas fa-x-ray text-2xl"></i>
                  TC "Cabeça à Pelve"
                </h3>
                <p className="text-xl mb-6">Alto rendimento em <strong>comatosos sem causa óbvia</strong></p>
                
                <div className="bg-primary/15 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <i className="fas fa-bullseye"></i>
                    🎯 Duplo Benefício
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-white/60 p-3 rounded">
                      <p className="text-base"><strong>Identifica etiologia:</strong> HIC, TEP, Dissecção</p>
                    </div>
                    <div className="bg-white/60 p-3 rounded">
                      <p className="text-base"><strong>Revela complicações:</strong> Pneumotórax, lacerações</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mensagem final */}
          <div className="bg-gradient-to-r from-warning/20 to-accent/15 p-6 rounded-lg border-2 border-warning/40 text-center">
            <p className="text-2xl font-bold">
              <i className="fas fa-stopwatch mr-3 text-3xl text-warning"></i>
              POCUS primeiro → TC se necessário. <span className="text-accent">Tempo é crucial!</span>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 11,
      title: "POCUS - Tamponamento Cardíaco",
      type: 'content',
      content: (
        <div className="h-full flex flex-col space-y-8">
          {/* Header compacto */}
          <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
            <h3 className="text-2xl font-semibold text-accent mb-3 flex items-center gap-3">
              <i className="fas fa-heart text-3xl"></i>
              Colabamento Diastólico do Ventrículo Direito (VD)
            </h3>
            <p className="text-lg">Sinal ultrassonográfico <strong>patognomônico</strong> de tamponamento cardíaco</p>
          </div>
          
          {/* Layout principal: imagem + pontos-chave */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 flex-1">
            {/* Imagem */}
            <div className="bg-white p-6 rounded-lg shadow-lg border flex flex-col justify-center">
              <img 
                src={tamponamentoImg} 
                alt="Tamponamento cardíaco - Colabamento diastólico do VD" 
                className="w-full rounded-lg max-h-80 object-contain"
              />
              <p className="text-center text-base text-muted-foreground mt-4 font-medium">
                Colabamento diastólico do ventrículo direito
              </p>
            </div>

            {/* Pontos-chave */}
            <div className="bg-primary/10 p-8 rounded-lg border border-primary/20 flex flex-col justify-center">
              <h4 className="font-semibold text-primary mb-6 flex items-center gap-3 text-xl">
                <i className="fas fa-clipboard-list text-2xl"></i>
                Pontos-chave
              </h4>
              <ul className="medical-list space-y-4">
                <li className="flex items-start gap-4">
                  <i className="fas fa-arrow-down text-accent mt-1 text-xl"></i>
                  <span className="text-lg">Colabamento do VD durante a diástole</span>
                </li>
                <li className="flex items-start gap-4">
                  <i className="fas fa-droplet text-primary mt-1 text-xl"></i>
                  <span className="text-lg">Derrame pericárdico com sinais de tamponamento</span>
                </li>
                <li className="flex items-start gap-4">
                  <i className="fas fa-exclamation-triangle text-accent mt-1 text-xl"></i>
                  <span className="text-lg"><strong>Necessidade de pericardiocentese de emergência</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 12,
      title: "POCUS - Embolia Pulmonar Maciça",
      type: 'content',
      content: (
        <div className="h-full flex flex-col space-y-8">
          {/* Header compacto */}
          <div className="bg-warning/10 p-6 rounded-lg border-l-4 border-warning">
            <h3 className="text-2xl font-semibold text-warning mb-3 flex items-center gap-3">
              <i className="fas fa-lungs text-3xl"></i>
              Sinal D (D-sign) - Sobrecarga de VD
            </h3>
            <p className="text-lg">Ventrículo direito com formato em <strong>"D"</strong> sugere embolia pulmonar maciça</p>
          </div>
          
          {/* Layout principal: imagem + pontos-chave */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 flex-1">
            {/* Imagem */}
            <div className="bg-white p-6 rounded-lg shadow-lg border flex flex-col justify-center">
              <img 
                src={emboliaPulmonarImg} 
                alt="Embolia pulmonar maciça - Sinal D" 
                className="w-full rounded-lg max-h-80 object-contain"
              />
              <p className="text-center text-base text-muted-foreground mt-4 font-medium">
                Sinal D - Sobrecarga aguda do ventrículo direito
              </p>
            </div>

            {/* Pontos-chave */}
            <div className="bg-primary/10 p-8 rounded-lg border border-primary/20 flex flex-col justify-center">
              <h4 className="font-semibold text-primary mb-6 flex items-center gap-3 text-xl">
                <i className="fas fa-clipboard-list text-2xl"></i>
                Pontos-chave
              </h4>
              <ul className="medical-list space-y-4">
                <li className="flex items-start gap-4">
                  <i className="fas fa-expand text-warning mt-1 text-xl"></i>
                  <span className="text-lg">VD dilatado com formato em "D"</span>
                </li>
                <li className="flex items-start gap-4">
                  <i className="fas fa-arrows-alt-h text-primary mt-1 text-xl"></i>
                  <span className="text-lg">Septum interventricular retificado</span>
                </li>
                <li className="flex items-start gap-4">
                  <i className="fas fa-lungs text-warning mt-1 text-xl"></i>
                  <span className="text-lg">Sugestivo de embolia pulmonar maciça</span>
                </li>
                <li className="flex items-start gap-4">
                  <i className="fas fa-syringe text-accent mt-1 text-xl"></i>
                  <span className="text-lg"><strong>Considerar trombolítico de emergência</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 13,
      title: "POCUS - Pneumotórax",
      type: 'content',
      content: (
        <div className="h-full flex flex-col space-y-8">
          {/* Header compacto */}
          <div className="bg-success/10 p-6 rounded-lg border-l-4 border-success">
            <h3 className="text-2xl font-semibold text-success mb-3 flex items-center gap-3">
              <i className="fas fa-lungs text-3xl"></i>
              Sinais Ultrassonográficos de Pneumotórax
            </h3>
            <p className="text-lg">Ausência de deslizamento pleural e <strong>sinais específicos</strong></p>
          </div>
          
          {/* Layout principal: 3 colunas (2 imagens + pontos-chave) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 flex-1">
            {/* Imagem 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border flex flex-col justify-center">
              <img 
                src={pneumotorax1Img} 
                alt="Pneumotórax - Sinal estratosfera e código de barras" 
                className="w-full rounded-lg mb-4 max-h-64 object-contain"
              />
              <p className="text-center text-base text-muted-foreground font-medium">
                Sinal estratosfera e código de barras
              </p>
            </div>

            {/* Imagem 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border flex flex-col justify-center">
              <img 
                src={pneumotorax2Img} 
                alt="Pneumotórax - Ausência de deslizamento pleural" 
                className="w-full rounded-lg mb-4 max-h-64 object-contain"
              />
              <p className="text-center text-base text-muted-foreground font-medium">
                Ausência de deslizamento pleural
              </p>
            </div>

            {/* Pontos-chave */}
            <div className="bg-primary/10 p-8 rounded-lg border border-primary/20 flex flex-col justify-center">
              <h4 className="font-semibold text-primary mb-6 flex items-center gap-3 text-xl">
                <i className="fas fa-clipboard-list text-2xl"></i>
                Pontos-chave
              </h4>
              <ul className="medical-list space-y-4">
                <li className="flex items-start gap-4">
                  <i className="fas fa-times text-accent mt-1 text-xl"></i>
                  <span className="text-lg">Ausência de lung sliding</span>
                </li>
                <li className="flex items-start gap-4">
                  <i className="fas fa-wave-square text-success mt-1 text-xl"></i>
                  <span className="text-lg">Sinal estratosfera</span>
                </li>
                <li className="flex items-start gap-4">
                  <i className="fas fa-barcode text-primary mt-1 text-xl"></i>
                  <span className="text-lg">Sinal código de barras</span>
                </li>
                <li className="flex items-start gap-4">
                  <i className="fas fa-exclamation-triangle text-accent mt-1 text-xl"></i>
                  <span className="text-lg"><strong>Drenagem de emergência</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 14,
      title: "POCUS - Hipovolemia",
      type: 'content',
      content: (
        <div className="h-full flex flex-col space-y-8">
          {/* Header compacto */}
          <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
            <h3 className="text-2xl font-semibold text-primary mb-3 flex items-center gap-3">
              <i className="fas fa-tint text-3xl"></i>
              Avaliação da Volemia pela Ecocardiografia
            </h3>
            <p className="text-lg">Ventrículo esquerdo <strong>hipercontrátil</strong> com cavidade virtual</p>
          </div>
          
          {/* Layout principal: 3 colunas (2 imagens + pontos-chave) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 flex-1">
            {/* Imagem 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border flex flex-col justify-center">
              <img 
                src={hipovolemia1Img} 
                alt="Hipovolemia - VE hipercontrátil 1" 
                className="w-full rounded-lg mb-4 max-h-64 object-contain"
              />
              <p className="text-center text-base text-muted-foreground font-medium">
                VE hipercontrátil - paraesternal
              </p>
            </div>

            {/* Imagem 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border flex flex-col justify-center">
              <img 
                src={hipovolemia2Img} 
                alt="Hipovolemia - VE hipercontrátil 2" 
                className="w-full rounded-lg mb-4 max-h-64 object-contain"
              />
              <p className="text-center text-base text-muted-foreground font-medium">
                VE hipercontrátil - apical
              </p>
            </div>

            {/* Pontos-chave */}
            <div className="bg-primary/10 p-8 rounded-lg border border-primary/20 flex flex-col justify-center">
              <h4 className="font-semibold text-primary mb-6 flex items-center gap-3 text-xl">
                <i className="fas fa-clipboard-list text-2xl"></i>
                Pontos-chave
              </h4>
              <ul className="medical-list space-y-4">
                <li className="flex items-start gap-4">
                  <i className="fas fa-compress text-primary mt-1 text-xl"></i>
                  <span className="text-lg">VE pequeno e hipercontrátil</span>
                </li>
                <li className="flex items-start gap-4">
                  <i className="fas fa-circle text-accent mt-1 text-xl"></i>
                  <span className="text-lg">Cavidade virtual na sístole</span>
                </li>
                <li className="flex items-start gap-4">
                  <i className="fas fa-arrow-down text-primary mt-1 text-xl"></i>
                  <span className="text-lg">Veia cava inferior colabada</span>
                </li>
                <li className="flex items-start gap-4">
                  <i className="fas fa-tint text-success mt-1 text-xl"></i>
                  <span className="text-lg"><strong>Expansão volêmica imediata</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 15,
      title: "Fase III - Pilares da Proteção Sistêmica e Neurológica",
      type: 'content',
      content: (
        <div className="space-y-6">
          <div className="bg-primary/10 p-6 rounded-lg text-center border-l-4 border-primary">
            <p className="text-lg font-medium">
              Esta é a fase <strong>central</strong> do manejo, focada em mitigar a lesão de isquemia-reperfusão.
              <br />O <strong className="text-accent">cérebro</strong> é o nosso principal alvo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:scale-105 transition-transform">
              <div className="text-center">
                <i className="fas fa-heartbeat text-primary text-3xl mb-4"></i>
                <h3 className="text-lg font-semibold text-primary">Metas Hemodinâmicas</h3>
                <p className="text-sm mt-2">Perfusão cerebral otimizada</p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 border-success/30 hover:scale-105 transition-transform">
              <div className="text-center">
                <i className="fas fa-lungs text-success text-3xl mb-4"></i>
                <h3 className="text-lg font-semibold text-success">Oxigenação e Ventilação</h3>
                <p className="text-sm mt-2">Balanço preciso O₂/CO₂</p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-warning/10 to-warning/5 border-warning/30 hover:scale-105 transition-transform">
              <div className="text-center">
                <i className="fas fa-thermometer-half text-warning text-3xl mb-4"></i>
                <h3 className="text-lg font-semibold text-warning">Controle de Temperatura</h3>
                <p className="text-sm mt-2">Prevenção ativa da febre</p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 hover:scale-105 transition-transform">
              <div className="text-center">
                <i className="fas fa-brain text-accent text-3xl mb-4"></i>
                <h3 className="text-lg font-semibold text-accent">Convulsões e Sedação</h3>
                <p className="text-sm mt-2">Vigilancia neurológica ativa sem profilaxia</p>
              </div>
            </Card>
          </div>

          <div className="bg-accent/10 p-4 rounded-lg text-center">
            <p className="font-medium text-accent">
              <i className="fas fa-brain mr-2"></i>
              Cada minuto conta para o cérebro!
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 16,
      title: "Fase III - 4.1 Metas Hemodinâmicas",
      type: 'content',
      content: (
        <div className="space-y-4">
          {/* Layout principal: 2 colunas em widescreen */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {/* Coluna esquerda: Problema + Estratégia */}
            <div className="space-y-4">
              <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                <h3 className="text-lg font-semibold text-accent mb-2 flex items-center gap-2">
                  <i className="fas fa-exclamation-triangle"></i>
                  Problema Central
                </h3>
                <p className="text-sm">A <strong>autorregulação vascular cerebral</strong> está comprometida. O fluxo sanguíneo cerebral depende <strong>diretamente</strong> da pressão arterial.</p>
              </div>

              <div className="bg-success/10 p-4 rounded-lg border-l-4 border-success">
                <h3 className="text-lg font-semibold text-success mb-2 flex items-center gap-2">
                  <i className="fas fa-target"></i>
                  Estratégia
                </h3>
                <ul className="medical-list text-sm space-y-1">
                  <li>PAM entre <strong>80-100 mmHg</strong> para perfusão cerebral</li>
                  <li className="font-medium text-accent"><strong>EVITAR HIPOTENSÃO A TODO CUSTO</strong></li>
                </ul>
              </div>
            </div>

            {/* Coluna direita: Mensagem central */}
            <div className="bg-gradient-to-br from-primary/15 to-accent/10 p-6 rounded-lg border-2 border-primary/30">
              <h3 className="text-lg font-bold text-primary mb-3 flex items-center justify-center gap-2">
                <i className="fas fa-quote-left"></i>
                Mensagem Clínica Central
              </h3>
              <div className="text-center space-y-3">
                <p className="text-base font-medium">
                  PAM <strong className="text-accent">65 mmHg</strong> = <strong>PISO</strong>
                </p>
                <p className="text-base font-medium">
                  não <strong>ALVO</strong>
                </p>
                <div className="bg-white/50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-primary">80-100 mmHg</div>
                  <div className="text-sm text-muted-foreground">Meta Ideal</div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicadores visuais compactos */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-3">
            <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/30">
              <i className="fas fa-arrow-down text-accent text-2xl mb-1"></i>
              <div className="text-xl font-bold text-accent">65</div>
              <div className="text-xs">PISO</div>
            </div>
            <div className="text-center p-4 bg-success/5 rounded-lg border border-success/30">
              <i className="fas fa-bullseye text-success text-2xl mb-1"></i>
              <div className="text-xl font-bold text-success">80-100</div>
              <div className="text-xs">ALVO</div>
            </div>
            <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/30">
              <i className="fas fa-brain text-primary text-2xl mb-1"></i>
              <div className="text-lg font-bold text-primary">Cérebro</div>
              <div className="text-xs">Prioridade</div>
            </div>
            <div className="text-center p-4 bg-warning/5 rounded-lg border border-warning/30">
              <i className="fas fa-heartbeat text-warning text-2xl mb-1"></i>
              <div className="text-lg font-bold text-warning">PAM</div>
              <div className="text-xs">Monitorar</div>
            </div>
            <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/30">
              <i className="fas fa-ban text-accent text-2xl mb-1"></i>
              <div className="text-lg font-bold text-accent">Anti-</div>
              <div className="text-xs">Hipotensão</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 17,
      title: "Fase III - 4.2 Metas de Oxigenação e Ventilação",
      type: 'table',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-center">
            Tanto a <strong className="text-accent">hipóxia</strong> quanto a <strong className="text-warning">hiperoxia</strong> são deletérias. O manejo deve ser <strong>meticuloso</strong>.
          </p>

          <div className="overflow-x-auto">
            <table className="medical-table">
              <thead>
                <tr>
                  <th className="text-left">Parâmetro</th>
                  <th className="text-left">Meta Clínica e Racional</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">
                    <i className="fas fa-lungs text-primary mr-2"></i>
                    Oxigenação (SpO₂)
                  </td>
                  <td>
                    Manter entre <strong className="text-success">92% e 98%</strong>. 
                    <br />Evitar hipoxemia e hiperoxia (PaO₂ &gt;300 mmHg), que causa <strong className="text-accent">estresse oxidativo</strong>.
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold">
                    <i className="fas fa-wind text-warning mr-2"></i>
                    Ventilação (PaCO₂)
                  </td>
                  <td>
                    Manter <strong className="text-success">Normocapnia (35-45 mmHg)</strong>. 
                    <br />Evitar ativamente a <strong className="text-accent">hipocapnia</strong>, que causa vasoconstrição cerebral e agrava a isquemia.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 border-success/30">
              <div className="text-center">
                <i className="fas fa-check-circle text-success text-3xl mb-3"></i>
                <h4 className="font-semibold mb-2 text-success">✓ IDEAL</h4>
                <p>SpO₂: 92-98%<br />PaCO₂: 35-45 mmHg</p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
              <div className="text-center">
                <i className="fas fa-times-circle text-accent text-3xl mb-3"></i>
                <h4 className="font-semibold mb-2 text-accent">⚠️ EVITAR</h4>
                <p>Hipóxia, Hiperoxia<br />Hipocapnia</p>
              </div>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 18,
      title: "Fase III - 4.3 Controle de Temperatura: Uma Mudança de Paradigma",
      type: 'content',
      content: (
        <div className="space-y-4">
          {/* Header compacto */}
          <div className="bg-gradient-to-r from-primary/15 to-accent/10 p-4 rounded-lg border-l-4 border-primary">
            <h3 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
              <i className="fas fa-thermometer-half"></i>
              AHA 2023: Mudança de Paradigma
            </h3>
            <p className="text-base">Temperatura <strong>constante</strong> entre <strong className="text-success">32°C - 37,5°C</strong></p>
          </div>

          {/* Layout principal: 2 colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {/* Benefício principal */}
            <div className="bg-success/10 p-4 rounded-lg border border-success/20">
              <h4 className="text-base font-semibold text-success mb-2 flex items-center gap-2">
                <i className="fas fa-lightbulb"></i>
                Principal Benefício
              </h4>
              <p className="text-sm">Não a <strong>hipotermia</strong>, mas a <strong className="text-accent">PREVENÇÃO ATIVA DA FEBRE</strong></p>
            </div>

            {/* Prática essencial */}
            <div className="bg-warning/10 p-4 rounded-lg border border-warning/20">
              <h4 className="text-base font-semibold text-warning mb-2 flex items-center gap-2">
                <i className="fas fa-cogs"></i>
                Essência da Prática
              </h4>
              <ul className="text-sm space-y-1">
                <li>• Dispositivos de controle</li>
                <li>• Sedação adequada</li>
                <li>• Bloqueio neuromuscular</li>
              </ul>
            </div>

            {/* Conceito chave */}
            <div className="bg-accent/10 p-4 rounded-lg border border-accent/20 lg:col-span-2 xl:col-span-1">
              <div className="text-center">
                <i className="fas fa-ban text-accent text-2xl mb-2"></i>
                <div className="font-bold text-accent text-base">FEBRE</div>
                <div className="text-sm text-muted-foreground">Inimigo do cérebro</div>
              </div>
            </div>
          </div>

          {/* Indicadores de temperatura - compactos */}
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-3">
            <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/30">
              <i className="fas fa-snowflake text-primary text-xl mb-1"></i>
              <div className="text-lg font-bold text-primary">32°C</div>
              <div className="text-xs">Mínimo</div>
            </div>
            <div className="text-center p-3 bg-success/5 rounded-lg border border-success/30">
              <i className="fas fa-thermometer-half text-success text-xl mb-1"></i>
              <div className="text-base font-bold text-success">Controle</div>
              <div className="text-xs">Ativo</div>
            </div>
            <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/30">
              <i className="fas fa-brain text-primary text-xl mb-1"></i>
              <div className="text-base font-bold text-primary">Cérebro</div>
              <div className="text-xs">Protegido</div>
            </div>
            <div className="text-center p-3 bg-warning/5 rounded-lg border border-warning/30">
              <i className="fas fa-fire text-warning text-xl mb-1"></i>
              <div className="text-lg font-bold text-warning">37,5°C</div>
              <div className="text-xs">Máximo</div>
            </div>
            <div className="text-center p-3 bg-accent/5 rounded-lg border border-accent/30">
              <i className="fas fa-ban text-accent text-xl mb-1"></i>
              <div className="text-base font-bold text-accent">Anti-</div>
              <div className="text-xs">Febre</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 19,
      title: "Fase III - 4.4 Manejo de Convulsões e Sedação",
      type: 'content',
      content: (
        <div className="space-y-4">
          {/* Header com estatística principal */}
          <div className="bg-gradient-to-r from-accent/15 to-primary/10 p-4 rounded-lg border-l-4 border-accent">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-accent mb-1 flex items-center gap-2">
                  <i className="fas fa-chart-line"></i>
                  Convulsões Pós-PCR
                </h3>
                <p className="text-sm">Até <strong>36%</strong> dos pacientes • Indicam lesão cerebral grave</p>
              </div>
              <div className="text-center bg-white/30 p-3 rounded-lg">
                <div className="text-2xl font-bold text-accent">36%</div>
                <div className="text-xs">Incidência</div>
              </div>
            </div>
          </div>

          {/* Layout principal: 2 colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            {/* Monitorização */}
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <h4 className="text-base font-semibold text-primary mb-3 flex items-center gap-2">
                <i className="fas fa-brain"></i>
                Monitorização Obrigatória
              </h4>
              <div className="space-y-2">
                <div className="bg-white/50 p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <i className="fas fa-chart-line text-primary"></i>
                    <span className="font-medium text-sm">EEG Contínuo</span>
                  </div>
                  <p className="text-xs">Para <strong>TODOS</strong> os comatosos</p>
                </div>
                <div className="bg-accent/20 p-2 rounded">
                  <p className="text-xs"><strong>Única forma</strong> de detectar estado de mal não convulsivo</p>
                </div>
              </div>
            </div>

            {/* Tratamento */}
            <div className="bg-success/10 p-4 rounded-lg border border-success/20">
              <h4 className="text-base font-semibold text-success mb-3 flex items-center gap-2">
                <i className="fas fa-pills"></i>
                Tratamento & Sedação
              </h4>
              <div className="space-y-2">
                <div className="bg-white/50 p-2 rounded">
                  <p className="text-xs">• Anticonvulsivante <strong>não sedativo</strong></p>
                </div>
                <div className="bg-white/50 p-2 rounded">
                  <p className="text-xs">• Sedativos <strong>curta ação</strong></p>
                  <p className="text-xs font-medium">Propofol + Fentanil</p>
                </div>
                <div className="bg-success/20 p-2 rounded">
                  <p className="text-xs">Facilita avaliação neurológica</p>
                </div>
              </div>
            </div>
          </div>

          {/* Indicadores compactos */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3">
            <div className="text-center p-3 bg-accent/5 rounded-lg border border-accent/30">
              <i className="fas fa-percentage text-accent text-xl mb-1"></i>
              <div className="text-lg font-bold text-accent">36%</div>
              <div className="text-xs">Incidência</div>
            </div>
            <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/30">
              <i className="fas fa-chart-line text-primary text-xl mb-1"></i>
              <div className="text-base font-bold text-primary">EEG</div>
              <div className="text-xs">Contínuo</div>
            </div>
            <div className="text-center p-3 bg-success/5 rounded-lg border border-success/30">
              <i className="fas fa-pills text-success text-xl mb-1"></i>
              <div className="text-base font-bold text-success">Não-Sed</div>
              <div className="text-xs">Anticonv.</div>
            </div>
            <div className="text-center p-3 bg-warning/5 rounded-lg border border-warning/30">
              <i className="fas fa-clock text-warning text-xl mb-1"></i>
              <div className="text-base font-bold text-warning">Curta</div>
              <div className="text-xs">Ação</div>
            </div>
          </div>

          {/* Alerta final */}
          <div className="bg-gradient-to-r from-warning/20 to-accent/15 p-3 rounded-lg border border-warning/30">
            <p className="text-center font-medium text-accent text-sm">
              <i className="fas fa-eye mr-2"></i>
              O que não vemos pode estar matando o cérebro!
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 20,
      title: "Angiografia Coronária: Quando e Para Quem?",
      type: 'content',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-center bg-primary/10 p-4 rounded-lg">
            A indicação de <strong>cateterismo cardíaco (CATE)</strong> de emergência evoluiu com base em evidências de alta qualidade.
          </p>

          <div className="bg-success/10 p-6 rounded-lg border-l-4 border-success">
            <h3 className="text-xl font-semibold text-success mb-4 flex items-center gap-2">
              <i className="fas fa-check-circle"></i>
              INDICAÇÃO CLARA para CATE de Emergência
            </h3>
            <ul className="medical-list">
              <li><strong>IAMCSST</strong> no ECG pós-RCE</li>
              <li><strong>Choque cardiogênico</strong> persistente</li>
              <li><strong>Instabilidade elétrica</strong> (TV/FV recorrente)</li>
            </ul>
          </div>

          <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
            <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2">
              <i className="fas fa-times-circle"></i>
              NÃO RECOMENDADO DE ROTINA
            </h3>
            <p className="text-lg">Para pacientes <strong>sem IAMCSST</strong> e <strong>hemodinamicamente estáveis</strong>.</p>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg text-center border-2 border-primary/50">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
              <i className="fas fa-exclamation"></i>
              Ponto Fundamental
            </h3>
            <p className="text-xl font-medium">
              O <strong className="text-accent">COMA</strong>, por si só, <strong>JAMAIS</strong> é uma contraindicação para CATE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 border-success/30">
              <div className="text-center">
                <i className="fas fa-heart text-success text-3xl mb-3"></i>
                <h4 className="font-semibold mb-2 text-success">✓ SIM para CATE</h4>
                <p>IAMCSST + Choque + TV/FV</p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
              <div className="text-center">
                <i className="fas fa-ban text-accent text-3xl mb-3"></i>
                <h4 className="font-semibold mb-2 text-accent">⚠️ NÃO Rotina</h4>
                <p>Sem IAMCSST + Estável</p>
              </div>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 21,
      title: "O Sexto Elo da Cadeia de Sobrevivência: A Recuperação",
      type: 'content',
      content: (
        <div className="space-y-8">
          <div className="bg-primary/10 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center justify-center gap-2">
              <i className="fas fa-link"></i>
              ULTIMO ELO DO TRATAMENTO
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-8 text-center bg-gradient-to-br from-success/10 to-success/5 border-success/30 hover:scale-105 transition-transform">
              <i className="fas fa-hospital text-success text-4xl mb-4"></i>
              <h4 className="font-semibold text-lg mb-2">Nosso trabalho</h4>
              <p>NÃO termina na alta da UTI ou do hospital</p>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:scale-105 transition-transform">
              <i className="fas fa-target text-primary text-4xl mb-4"></i>
              <h4 className="font-semibold text-lg mb-2">O objetivo</h4>
              <p>Não é apenas a sobrevivência</p>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-warning/10 to-warning/5 border-warning/30 hover:scale-105 transition-transform">
              <i className="fas fa-heart text-warning text-4xl mb-4"></i>
              <h4 className="font-semibold text-lg mb-2">Mas sim</h4>
              <p>Sobrevivência com <strong>QUALIDADE</strong></p>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-success/10 to-primary/10 p-8 rounded-lg text-center border-2 border-success/30">
            <h3 className="text-2xl font-bold text-primary mb-4">
              <i className="fas fa-trophy mr-3"></i>
              SOBREVIVÊNCIA + QUALIDADE DE VIDA
            </h3>
            <p className="text-lg">Este é o verdadeiro sucesso dos cuidados pós-PCR</p>
          </div>

          <div className="flex justify-center">
            <div className="bg-primary/5 p-6 rounded-full">
              <i className="fas fa-chain text-primary text-6xl"></i>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 22,
      title: "O Futuro dos Cuidados Pós-PCR",
      type: 'content',
      content: (
        <div className="space-y-8">
          <p className="text-lg text-center bg-primary/10 p-4 rounded-lg">
            Um compromisso contínuo com as seguintes ações:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:scale-105 transition-transform">
              <div className="text-center mb-4">
                <i className="fas fa-clipboard-check text-primary text-4xl mb-3"></i>
                <h3 className="text-lg font-semibold text-primary">Avaliação Multimodal</h3>
              </div>
              <p className="text-sm">Avaliar e dar suporte às sequelas <strong>físicas, cognitivas e psicossociais</strong> dos sobreviventes e cuidadores.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 border-success/30 hover:scale-105 transition-transform">
              <div className="text-center mb-4">
                <i className="fas fa-users text-success text-4xl mb-3"></i>
                <h3 className="text-lg font-semibold text-success">Cuidado Protocolizado</h3>
              </div>
              <p className="text-sm">Implementar protocolos <strong>multidisciplinares</strong> em centros especializados para padronizar as melhores práticas.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-warning/10 to-warning/5 border-warning/30 hover:scale-105 transition-transform">
              <div className="text-center mb-4">
                <i className="fas fa-gift text-warning text-4xl mb-3"></i>
                <h3 className="text-lg font-semibold text-warning">Doação de Órgãos</h3>
              </div>
              <p className="text-sm">Em casos de prognóstico neurológico reservado, a doação <strong>transforma uma tragédia</strong> em um ato que salva múltiplas vidas.</p>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-success/10 to-warning/10 p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">
              <i className="fas fa-lightbulb mr-3"></i>
              Visão do Futuro
            </h3>
            <p className="text-lg">
              Centros de Excelência em Cuidados Pós-PCR com protocolos padronizados, 
              equipes multidisciplinares e foco na <strong>recuperação integral</strong> do paciente.
            </p>
          </div>

          <div className="flex justify-center space-x-8 text-4xl">
            <i className="fas fa-brain text-primary"></i>
            <i className="fas fa-heart text-accent"></i>
            <i className="fas fa-hands-helping text-success"></i>
            <i className="fas fa-star text-warning"></i>
          </div>
        </div>
      ),
    },
    {
      id: 23,
      title: "Conclusão",
      type: 'conclusion',
      content: (
        <div className="h-full flex flex-col justify-center space-y-8 text-center p-8">
          {/* Mensagem principal */}
          <div className="bg-gradient-to-r from-primary/20 to-success/20 p-12 rounded-lg border-2 border-primary/30">
            <h3 className="text-4xl font-bold text-primary mb-6">
              <i className="fas fa-medal mr-4 text-5xl"></i>
              Excelência nos Cuidados
            </h3>
            <p className="text-2xl leading-relaxed">
              A excelência nos cuidados pós-parada cardiorrespiratória é a disciplina que, 
              <strong className="text-accent"> elo por elo</strong>, transforma a sobrevivência em uma 
              <strong className="text-success"> vida com propósito e qualidade</strong>.
            </p>
          </div>

          {/* Cards dos pilares */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-8 bg-primary/10 rounded-lg border border-primary/20">
              <i className="fas fa-heartbeat text-primary text-5xl mb-4"></i>
              <h4 className="font-semibold text-xl text-primary mb-2">Estabilização</h4>
              <p className="text-lg">Imediata e eficaz</p>
            </div>
            <div className="p-8 bg-success/10 rounded-lg border border-success/20">
              <i className="fas fa-search text-success text-5xl mb-4"></i>
              <h4 className="font-semibold text-xl text-success mb-2">Diagnóstico</h4>
              <p className="text-lg">Rápido e direcionado</p>
            </div>
            <div className="p-8 bg-warning/10 rounded-lg border border-warning/20">
              <i className="fas fa-brain text-warning text-5xl mb-4"></i>
              <h4 className="font-semibold text-xl text-warning mb-2">Proteção</h4>
              <p className="text-lg">Neurológica ativa</p>
            </div>
            <div className="p-8 bg-accent/10 rounded-lg border border-accent/20">
              <i className="fas fa-trophy text-accent text-5xl mb-4"></i>
              <h4 className="font-semibold text-xl text-accent mb-2">Recuperação</h4>
              <p className="text-lg">Com qualidade</p>
            </div>
          </div>

          {/* Citação final */}
          <div className="bg-gradient-to-r from-success/10 to-primary/10 p-8 rounded-lg border border-success/20">
            <p className="text-xl font-medium">
              <i className="fas fa-quote-left mr-3 text-2xl"></i>
              Cada vida salva é uma vitória da medicina baseada em evidência
              <i className="fas fa-quote-right ml-3 text-2xl"></i>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 24,
      title: "DOSES PRÁTICAS - Sequência Rápida de Intubação (SRI)",
      type: 'table',
      content: (
        <div className="h-full flex flex-col space-y-8 p-8">
          {/* Header */}
          <div className="bg-primary/10 p-6 rounded-lg text-center border border-primary/20">
            <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center justify-center gap-3">
              <i className="fas fa-syringe text-3xl"></i>
              Indução + Bloqueio Neuromuscular
            </h3>
          </div>
          
          {/* Tabela responsiva */}
          <div className="overflow-x-auto flex-1">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg text-base">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="border border-primary/30 p-4 text-left font-semibold">Droga</th>
                  <th className="border border-primary/30 p-4 text-center font-semibold">Dose (mg/kg)</th>
                  <th className="border border-primary/30 p-4 text-center font-semibold">50 kg</th>
                  <th className="border border-primary/30 p-4 text-center font-semibold">75 kg</th>
                  <th className="border border-primary/30 p-4 text-center font-semibold">100 kg</th>
                  <th className="border border-primary/30 p-4 text-center font-semibold">Obs.</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-accent/5">
                  <td className="border border-gray-300 p-4 font-medium text-base">Etomidato 2 mg/mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">0,3 mg/kg</td>
                  <td className="border border-gray-300 p-4 text-center text-base">15 mg = 7,5 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">22,5 mg = 11,2 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">30 mg = 15 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-success font-medium">Estável hemodinamicamente</td>
                </tr>
                <tr className="hover:bg-accent/5">
                  <td className="border border-gray-300 p-4 font-medium text-base">Propofol 10 mg/mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">2 mg/kg</td>
                  <td className="border border-gray-300 p-4 text-center text-base">100 mg = 10 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">150 mg = 15 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">200 mg = 20 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-accent font-medium">⚠️ Hipotensão</td>
                </tr>
                <tr className="hover:bg-accent/5">
                  <td className="border border-gray-300 p-4 font-medium text-base">Midazolam 5 mg/mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">0,3 mg/kg</td>
                  <td className="border border-gray-300 p-4 text-center text-base">15 mg = 3 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">22,5 mg = 4,5 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">30 mg = 6 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-primary font-medium">Sedação / crises</td>
                </tr>
                <tr className="hover:bg-accent/5">
                  <td className="border border-gray-300 p-4 font-medium text-base">Fentanil 50 µg/mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">2 µg/kg</td>
                  <td className="border border-gray-300 p-4 text-center text-base">100 µg = 2 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">150 µg = 3 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">200 µg = 4 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-accent font-medium">⚠️ Depressão resp., rigidez</td>
                </tr>
                <tr className="hover:bg-accent/5">
                  <td className="border border-gray-300 p-4 font-medium text-base">Succinilcolina 10 mg/mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">1,5 mg/kg</td>
                  <td className="border border-gray-300 p-4 text-center text-base">75 mg = 7,5 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">112 mg = 11,2 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">150 mg = 15 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-accent font-medium">⚠️ CI: hiperK+, queimados</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 25,
      title: "DOSES PRÁTICAS - Sedoanalgesia e Antiepilépticos (pós-IOT)",
      type: 'table',
      content: (
        <div className="h-full flex flex-col space-y-8 p-8">
          {/* Header */}
          <div className="bg-success/10 p-6 rounded-lg text-center border border-success/20">
            <h3 className="text-2xl font-semibold text-success mb-4 flex items-center justify-center gap-3">
              <i className="fas fa-pills text-3xl"></i>
              Sedoanalgesia e Antiepilépticos (pós-IOT)
            </h3>
          </div>
          
          {/* Tabela responsiva */}
          <div className="overflow-x-auto flex-1">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg text-base">
              <thead>
                <tr className="bg-success text-success-foreground">
                  <th className="border border-success/30 p-4 text-left font-semibold">Droga</th>
                  <th className="border border-success/30 p-4 text-center font-semibold">Dose (mg/kg)</th>
                  <th className="border border-success/30 p-4 text-center font-semibold">50 kg</th>
                  <th className="border border-success/30 p-4 text-center font-semibold">75 kg</th>
                  <th className="border border-success/30 p-4 text-center font-semibold">100 kg</th>
                  <th className="border border-success/30 p-4 text-center font-semibold">Obs.</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-accent/5">
                  <td className="border border-gray-300 p-4 font-medium text-base">Midazolam 5 mg/mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">0,1 mg/kg (bolus)</td>
                  <td className="border border-gray-300 p-4 text-center text-base">5 mg = 1 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">7,5 mg = 1,5 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">10 mg = 2 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-primary font-medium">Infusão 0,05–2 µg/kg/min</td>
                </tr>
                <tr className="hover:bg-accent/5">
                  <td className="border border-gray-300 p-4 font-medium text-base">Propofol 10 mg/mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">1 mg/kg (bolus)</td>
                  <td className="border border-gray-300 p-4 text-center text-base">50 mg = 5 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">75 mg = 7,5 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">100 mg = 10 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-primary font-medium">Infusão 1–5 mg/kg/h</td>
                </tr>
                <tr className="hover:bg-accent/5">
                  <td className="border border-gray-300 p-4 font-medium text-base">Fentanil 50 µg/mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">1 µg/kg (bolus)</td>
                  <td className="border border-gray-300 p-4 text-center text-base">50 µg = 1 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">75 µg = 1,5 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">100 µg = 2 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-primary font-medium">Infusão 1–3 µg/kg/h</td>
                </tr>
                <tr className="hover:bg-accent/5">
                  <td className="border border-gray-300 p-4 font-medium text-base">Levetiracetam 100 mg/mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">60 mg/kg (máx 4,5 g)</td>
                  <td className="border border-gray-300 p-4 text-center text-base">3.000 mg = 30 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">4.500 mg = 45 mL (dose teto)</td>
                  <td className="border border-gray-300 p-4 text-center text-base">6.000 mg → limitar a 4.500 mg (45 mL)</td>
                  <td className="border border-gray-300 p-4 text-center text-success font-medium">Infundir em 15 min</td>
                </tr>
                <tr className="hover:bg-accent/5">
                  <td className="border border-gray-300 p-4 font-medium text-base">Fenitoína 50 mg/mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">15 mg/kg</td>
                  <td className="border border-gray-300 p-4 text-center text-base">750 mg = 15 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">1125 mg = 22,5 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-base">1500 mg = 30 mL</td>
                  <td className="border border-gray-300 p-4 text-center text-accent font-medium">Máx 50 mg/min, monitorizar ECG</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 26,
      title: "DOSES PRÁTICAS - Resumo Executivo",
      type: 'content',
      content: (
        <div className="h-full flex flex-col space-y-8 p-8">
          {/* Grid de cards principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-3">
                <i className="fas fa-bolt text-2xl"></i>
                IOT Emergência
              </h3>
              <ul className="medical-list text-lg space-y-3">
                <li><strong>Etomidato:</strong> 0,3 mg/kg (primeira escolha)</li>
                <li><strong>Succinilcolina:</strong> 1,5 mg/kg</li>
                <li><strong>⚠️ Reduzir doses</strong> se instabilidade hemodinâmica</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-success/10 to-success/5 border-success/30 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-success mb-6 flex items-center gap-3">
                <i className="fas fa-pills text-2xl"></i>
                Sedação Pós-IOT
              </h3>
              <ul className="medical-list text-lg space-y-3">
                <li><strong>Midazolam:</strong> 0,1 mg/kg bolus</li>
                <li><strong>Fentanil:</strong> 1 µg/kg bolus</li>
                <li>Infusão contínua conforme necessário</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-accent mb-6 flex items-center gap-3">
                <i className="fas fa-brain text-2xl"></i>
                Anticonvulsivantes
              </h3>
              <ul className="medical-list text-lg space-y-3">
                <li><strong>Levetiracetam:</strong> 60 mg/kg (máx 4,5g)</li>
                <li><strong>Fenitoína:</strong> 15 mg/kg</li>
                <li>EEG contínuo é mandatório</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-warning/10 to-warning/5 border-warning/30 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-warning mb-6 flex items-center gap-3">
                <i className="fas fa-exclamation-triangle text-2xl"></i>
                Pontos Críticos
              </h3>
              <ul className="medical-list text-lg space-y-3">
                <li>Sempre <strong>calcular</strong> a dose pelo peso</li>
                <li><strong>Monitorização</strong> hemodinâmica contínua</li>
                <li>Ter <strong>antidotos</strong> sempre disponíveis</li>
              </ul>
            </Card>
          </div>

          {/* Mensagem final */}
          <div className="bg-primary/10 p-8 rounded-lg text-center border border-primary/20">
            <p className="text-xl font-medium text-primary">
              <i className="fas fa-clipboard-check mr-3 text-2xl"></i>
              Doses calculadas para facilitar a prática clínica. Sempre considere o contexto individual do paciente.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 27,
      title: "Muito Obrigado!",
      subtitle: "Dúvidas?",
      type: 'title',
      content: (
        <div className="h-full flex flex-col justify-center items-center text-center space-y-12">
          {/* Ícone principal */}
          <div className="text-9xl mb-8">
            <i className="fas fa-heart text-accent animate-pulse"></i>
          </div>
          
          {/* Conteúdo central */}
          <div className="space-y-8">
            <h3 className="text-4xl font-semibold text-primary">
              <i className="fas fa-question-circle mr-4 text-5xl"></i>
              Momento para Discussão
            </h3>
            <p className="text-2xl text-muted-foreground max-w-4xl">
              Compartilhe suas experiências e esclareça suas dúvidas sobre os cuidados pós-PCR
            </p>
          </div>

          {/* Ícones finais */}
          <div className="flex justify-center items-center gap-12 mt-12">
            <i className="fas fa-stethoscope text-primary text-6xl"></i>
            <i className="fas fa-brain text-success text-6xl"></i>
            <i className="fas fa-heartbeat text-accent text-6xl"></i>
            <i className="fas fa-users text-warning text-6xl"></i>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-success/10 p-6 rounded-lg">
            <p className="text-lg font-medium">
              <i className="fas fa-lightbulb mr-2"></i>
              Juntos pela excelência em emergência médica
            </p>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setIsTransitioning(false);
      }, 200);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setIsTransitioning(false);
      }, 200);
    }
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 200);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'Home') {
        goToSlide(0);
      } else if (event.key === 'End') {
        goToSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isTransitioning]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 to-secondary/20 flex flex-col">
      {/* Header with navigation */}
      <header className="bg-card shadow-md border-b px-4 py-3">
        <div className="w-full max-w-[95vw] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <i className="fas fa-heart-pulse text-primary text-2xl"></i>
            <h1 className="text-xl font-bold text-primary">Cuidados Pós-PCR</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {currentSlide + 1} / {slides.length}
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="bg-secondary hover:bg-secondary/80"
              >
                <i className="fas fa-chevron-left mr-1"></i>
                Anterior
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Próximo
                <i className="fas fa-chevron-right ml-1"></i>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main slide content */}
      <main className="flex-1 px-4 py-4">
        <div className="w-full max-w-[95vw] mx-auto h-full">
          <Card className={`slide-container h-full px-8 py-6 ${isTransitioning ? 'opacity-50' : 'opacity-100'} transition-opacity duration-200`}>
            <div className="h-full flex flex-col">
              {/* Slide header */}
              <div className="text-center mb-6 border-b border-border pb-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {currentSlideData.title}
                </h2>
                {currentSlideData.subtitle && (
                  <p className="text-lg md:text-xl text-muted-foreground">{currentSlideData.subtitle}</p>
                )}
                <div className="mt-3 flex justify-center">
                  <div className="h-1 w-24 bg-gradient-to-r from-primary to-success rounded"></div>
                </div>
              </div>

              {/* Slide content */}
              <div className="flex-1 overflow-y-auto">
                <div className="w-full max-w-none">
                  {currentSlideData.content}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>

      {/* Footer with slide navigation dots */}
      <footer className="bg-card border-t px-4 py-3">
        <div className="w-full max-w-[95vw] mx-auto flex justify-center">
          <div className="flex gap-2 max-w-full overflow-x-auto pb-1">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-primary scale-125'
                    : 'bg-muted hover:bg-muted-foreground/50'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PowerPointPresentation;