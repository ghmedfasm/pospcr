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
        <div className="text-center space-y-8">
          <div className="text-6xl mb-8">
            <i className="fas fa-heartbeat text-accent"></i>
          </div>
          <div className="text-lg text-muted-foreground">
            Baseado nas Diretrizes da AHA e Neurocritical Care Society de 2023
          </div>
          <div className="flex justify-center items-center gap-4 mt-12">
            <i className="fas fa-stethoscope text-primary text-2xl"></i>
            <i className="fas fa-brain text-success text-2xl"></i>
            <i className="fas fa-heart text-accent text-2xl"></i>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "O Paradigma Pós-RCE: Uma Batalha Contínua",
      type: 'content',
      content: (
        <div className="space-y-6">
          <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
            <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2">
              <i className="fas fa-exclamation-triangle"></i>
              O Desafio Máximo
            </h3>
            <p className="text-lg">A Parada Cardiorrespiratória (PCR) é o auge da emergência médica.</p>
          </div>
          
          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <i className="fas fa-chart-line"></i>
              Estatísticas Sóbrias (Consenso AHA/NCS 2023)
            </h3>
            <ul className="medical-list">
              <li><strong>9%</strong> de sobrevivência até a alta em PCR extra-hospitalar</li>
              <li><strong>23%</strong> de sobrevivência até a alta em PCR intra-hospitalar</li>
            </ul>
          </div>

          <div className="bg-warning/10 p-6 rounded-lg border-l-4 border-warning text-center">
            <p className="text-lg font-medium">
              <i className="fas fa-flag-checkered mr-2"></i>
              O RCE não é a linha de chegada, é o <strong>tiro de partida</strong>. A corrida contra o tempo pelo prognóstico do paciente começa agora.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "A Síndrome Pós-Parada Cardíaca",
      type: 'content',
      content: (
        <div className="space-y-6">
          <p className="text-lg mb-6">Uma tempestade fisiopatológica complexa com quatro componentes principais:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
              <div className="flex items-center gap-3 mb-3">
                <i className="fas fa-brain text-accent text-2xl"></i>
                <h3 className="text-lg font-semibold">Lesão Cerebral Anóxica</h3>
              </div>
              <p>O principal determinante do prognóstico a longo prazo.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
              <div className="flex items-center gap-3 mb-3">
                <i className="fas fa-heart text-primary text-2xl"></i>
                <h3 className="text-lg font-semibold">Disfunção Miocárdica</h3>
              </div>
              <p>O "miocárdio atordoado" que leva à instabilidade.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-warning/10 to-warning/5 border-warning/30">
              <div className="flex items-center gap-3 mb-3">
                <i className="fas fa-fire text-warning text-2xl"></i>
                <h3 className="text-lg font-semibold">Resposta Sistêmica</h3>
              </div>
              <p>Uma cascata inflamatória global de isquemia/reperfusão.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 border-success/30">
              <div className="flex items-center gap-3 mb-3">
                <i className="fas fa-search-plus text-success text-2xl"></i>
                <h3 className="text-lg font-semibold">Patologia Precipitante</h3>
              </div>
              <p>A causa original da parada que precisa ser tratada.</p>
            </Card>
          </div>

          <div className="bg-primary/10 p-6 rounded-lg text-center mt-8">
            <p className="text-lg font-medium">
              O manejo qualificado desta síndrome define a <strong>sobrevivência com bom resultado neurológico</strong>.
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
        <div className="space-y-6">
          <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
            <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2">
              <i className="fas fa-clock"></i>
              Os Primeiros 20 Minutos são Traiçoeiros
            </h3>
            <ul className="medical-list">
              <li><strong className="text-accent">4 em cada 10 pacientes</strong> sofrem uma nova PCR após o RCE</li>
              <li><strong>Causa:</strong> Miocárdio atordoado + Vasoplegia sistêmica</li>
            </ul>
          </div>

          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <i className="fas fa-target"></i>
              Objetivo
            </h3>
            <p className="text-lg">Abordagem <strong>agressiva</strong> para prevenir lesão secundária e nova parada.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4 bg-accent/5 rounded-lg">
              <i className="fas fa-heart-pulse text-accent text-3xl mb-2"></i>
              <div className="text-2xl font-bold text-accent">40%</div>
              <div className="text-sm">Risco de Nova PCR</div>
            </div>
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <i className="fas fa-stopwatch text-primary text-3xl mb-2"></i>
              <div className="text-2xl font-bold text-primary">20min</div>
              <div className="text-sm">Janela Crítica</div>
            </div>
            <div className="text-center p-4 bg-success/5 rounded-lg">
              <i className="fas fa-shield-alt text-success text-3xl mb-2"></i>
              <div className="text-2xl font-bold text-success">Prevenção</div>
              <div className="text-sm">Foco Principal</div>
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
        <div className="space-y-6">
          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <i className="fas fa-tint"></i>
              Fluidos
            </h3>
            <ul className="medical-list">
              <li>Bolus inicial de <strong>1000ML</strong> de cristaloide isotônico</li>
              <li><strong>Preferência:</strong> Soluções balanceadas (ex: Ringer Lactato) para evitar acidose hiperclorêmica</li>
              <li><strong className="text-accent">⚠️ Ponto de atenção:</strong> Cuidado especial em pacientes com ICC</li>
            </ul>
          </div>

          <div className="bg-accent/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2">
              <i className="fas fa-syringe"></i>
              Vasopressores
            </h3>
            <ul className="medical-list">
              <li><strong>Norepinefrina</strong> é o agente de primeira linha</li>
              <li><strong className="text-accent">Ponto Crítico:</strong> Iniciar EM PARALELO com os fluidos, não sequencialmente</li>
              <li>⚠️ <strong>Não espere a falha da reposição volêmica!</strong></li>
            </ul>
          </div>

          <div className="bg-success/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-success mb-4 flex items-center gap-2">
              <i className="fas fa-chart-line"></i>
              Monitorização
            </h3>
            <ul className="medical-list">
              <li><strong>Pressão Arterial Invasiva (PAI)</strong> - Essencial</li>
              <li><strong>Capnografia (EtCO₂)</strong> - Essencial</li>
            </ul>
          </div>

          <div className="bg-warning/10 p-4 rounded-lg text-center">
            <p className="font-medium">
              <i className="fas fa-exclamation-circle mr-2"></i>
              Fluidos + Vasopressores = <strong>PARALELO</strong>, não sequencial!
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "Fase I - Suporte Respiratório e Vias Aéreas",
      type: 'content',
      content: (
        <div className="space-y-6">
          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <i className="fas fa-lungs"></i>
              Prioridades Iniciais
            </h3>
            <ul className="medical-list">
              <li>Estabilização <strong>cardiovascular</strong> tem prioridade em um paciente não intubado</li>
              <li>Ventilação com <strong>bolsa-válvula-máscara</strong> é altamente eficaz neste momento</li>
            </ul>
          </div>

          <div className="bg-warning/10 p-6 rounded-lg border-l-4 border-warning">
            <h3 className="text-xl font-semibold text-warning mb-4 flex items-center gap-2">
              <i className="fas fa-exclamation-triangle"></i>
              Intubação Orotraqueal (IOT)
            </h3>
            <ul className="medical-list">
              <li><strong className="text-accent">Cautela com a hemodinâmica!</strong></li>
              <li>Reduzir as doses de indução para mitigar a hipotensão pós-IOT</li>
              <li><strong>Exemplo prático:</strong> Etomidato 0.15 mg/kg (em vez de 0.3 mg/kg)</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 border-success/30">
              <div className="text-center">
                <i className="fas fa-check-circle text-success text-3xl mb-3"></i>
                <h4 className="font-semibold mb-2">✓ Primeira Escolha</h4>
                <p>Bolsa-Válvula-Máscara</p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-warning/10 to-warning/5 border-warning/30">
              <div className="text-center">
                <i className="fas fa-procedures text-warning text-3xl mb-3"></i>
                <h4 className="font-semibold mb-2">⚠️ Com Cautela</h4>
                <p>IOT com doses reduzidas</p>
              </div>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Fase II - Diagnóstico Etiológico: Os 3 Pilares",
      type: 'content',
      content: (
        <div className="space-y-8">
          <div className="bg-accent/10 p-6 rounded-lg text-center border-l-4 border-accent">
            <p className="text-lg font-medium">
              Identificar e tratar a causa é a <strong>única forma</strong> de prevenir a recorrência.
              <br />A investigação deve ser <strong>rápida e direcionada</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:scale-105 transition-transform">
              <i className="fas fa-heartbeat text-primary text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold text-primary mb-3">Pilar 1</h3>
              <h4 className="font-medium text-lg">Eletrocardiograma</h4>
              <p className="text-sm text-muted-foreground mt-2">(ECG de 12 Derivações)</p>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-success/10 to-success/5 border-success/30 hover:scale-105 transition-transform">
              <i className="fas fa-flask text-success text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold text-success mb-3">Pilar 2</h3>
              <h4 className="font-medium text-lg">Avaliação Laboratorial</h4>
              <p className="text-sm text-muted-foreground mt-2">Direcionada</p>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-warning/10 to-warning/5 border-warning/30 hover:scale-105 transition-transform">
              <i className="fas fa-x-ray text-warning text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold text-warning mb-3">Pilar 3</h3>
              <h4 className="font-medium text-lg">Estratégias de Imagem</h4>
              <p className="text-sm text-muted-foreground mt-2">US + TC</p>
            </Card>
          </div>

          <div className="bg-primary/5 p-4 rounded-lg text-center">
            <p className="font-medium text-primary">
              <i className="fas fa-clock mr-2"></i>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
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
        <div className="space-y-6">
          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <i className="fas fa-eye"></i>
              Ultrassom à Beira-Leito (POCUS)
            </h3>
            <p className="mb-4"><strong>Valor inestimável</strong> para diagnóstico rápido de causas reversíveis:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-accent/10 p-4 rounded text-center">
                <i className="fas fa-heart text-accent text-2xl mb-2"></i>
                <p className="font-medium">Tamponamento cardíaco</p>
              </div>
              <div className="bg-warning/10 p-4 rounded text-center">
                <i className="fas fa-lungs text-warning text-2xl mb-2"></i>
                <p className="font-medium">Embolia pulmonar maciça</p>
              </div>
              <div className="bg-success/10 p-4 rounded text-center">
                <i className="fas fa-tint text-success text-2xl mb-2"></i>
                <p className="font-medium">Hipovolemia severa</p>
              </div>
            </div>
          </div>

          <div className="bg-success/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-success mb-4 flex items-center gap-2">
              <i className="fas fa-x-ray"></i>
              Tomografia Computadorizada (TC) "da Cabeça à Pelve"
            </h3>
            <p className="mb-4">Alto rendimento diagnóstico em pacientes <strong>comatosos sem causa óbvia</strong>.</p>
            
            <div className="bg-primary/10 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-primary mb-2">🎯 Duplo Benefício:</h4>
              <ul className="medical-list">
                <li><strong>Identifica a etiologia</strong> da parada (Hemorragia intracraniana, TEP, Dissecção de Aorta)</li>
                <li><strong>Revela complicações</strong> da RCP (Pneumotórax, lacerações de órgãos)</li>
              </ul>
            </div>
          </div>

          <div className="bg-warning/10 p-4 rounded-lg text-center">
            <p className="font-medium">
              <i className="fas fa-stopwatch mr-2"></i>
              POCUS primeiro → TC se necessário. Tempo é crucial!
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
        <div className="space-y-6">
          <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
            <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2">
              <i className="fas fa-heart"></i>
              Colabamento Diastólico do Ventrículo Direito (VD)
            </h3>
            <p className="text-lg mb-4">Sinal ultrassonográfico patognomônico de tamponamento cardíaco</p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg border">
              <img 
                src={tamponamentoImg} 
                alt="Tamponamento cardíaco - Colabamento diastólico do VD" 
                className="w-full max-w-md rounded-lg"
              />
              <p className="text-center text-sm text-muted-foreground mt-2">
                Colabamento diastólico do ventrículo direito
              </p>
            </div>
          </div>

          <div className="bg-primary/10 p-6 rounded-lg">
            <h4 className="font-semibold text-primary mb-3">📋 Pontos-chave:</h4>
            <ul className="medical-list">
              <li>Colabamento do VD durante a diástole</li>
              <li>Derrame pericárdico com sinais de tamponamento</li>
              <li>Necessidade de pericardiocentese de emergência</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 12,
      title: "POCUS - Embolia Pulmonar Maciça",
      type: 'content',
      content: (
        <div className="space-y-6">
          <div className="bg-warning/10 p-6 rounded-lg border-l-4 border-warning">
            <h3 className="text-xl font-semibold text-warning mb-4 flex items-center gap-2">
              <i className="fas fa-lungs"></i>
              Sinal D (D-sign) - Sobrecarga de VD
            </h3>
            <p className="text-lg mb-4">Ventrículo direito com formato em "D" sugere embolia pulmonar maciça</p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg border">
              <img 
                src={emboliaPulmonarImg} 
                alt="Embolia pulmonar maciça - Sinal D" 
                className="w-full max-w-md rounded-lg"
              />
              <p className="text-center text-sm text-muted-foreground mt-2">
                Sinal D - Sobrecarga aguda do ventrículo direito
              </p>
            </div>
          </div>

          <div className="bg-primary/10 p-6 rounded-lg">
            <h4 className="font-semibold text-primary mb-3">📋 Pontos-chave:</h4>
            <ul className="medical-list">
              <li>VD dilatado com formato em "D"</li>
              <li>Septum interventricular retificado</li>
              <li>Sugestivo de embolia pulmonar maciça</li>
              <li>Considerar trombolítico de emergência</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 13,
      title: "POCUS - Pneumotórax",
      type: 'content',
      content: (
        <div className="space-y-6">
          <div className="bg-success/10 p-6 rounded-lg border-l-4 border-success">
            <h3 className="text-xl font-semibold text-success mb-4 flex items-center gap-2">
              <i className="fas fa-lungs"></i>
              Sinais Ultrassonográficos de Pneumotórax
            </h3>
            <p className="text-lg mb-4">Ausência de deslizamento pleural e sinais específicos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-lg border">
              <img 
                src={pneumotorax1Img} 
                alt="Pneumotórax - Sinal estratosfera e código de barras" 
                className="w-full rounded-lg mb-2"
              />
              <p className="text-center text-sm text-muted-foreground">
                Sinal estratosfera e código de barras
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg border">
              <img 
                src={pneumotorax2Img} 
                alt="Pneumotórax - Ausência de deslizamento pleural" 
                className="w-full rounded-lg mb-2"
              />
              <p className="text-center text-sm text-muted-foreground">
                Ausência de deslizamento pleural
              </p>
            </div>
          </div>

          <div className="bg-primary/10 p-6 rounded-lg">
            <h4 className="font-semibold text-primary mb-3">📋 Pontos-chave:</h4>
            <ul className="medical-list">
              <li>Ausência de deslizamento pleural (lung sliding)</li>
              <li>Sinal estratosfera no modo M</li>
              <li>Sinal código de barras</li>
              <li>Necessidade de drenagem torácica de emergência</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 14,
      title: "POCUS - Hipovolemia",
      type: 'content',
      content: (
        <div className="space-y-6">
          <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <i className="fas fa-tint"></i>
              Avaliação da Volemia pela Ecocardiografia
            </h3>
            <p className="text-lg mb-4">Ventrículo esquerdo hipercontrátil com cavidade virtual</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-lg border">
              <img 
                src={hipovolemia1Img} 
                alt="Hipovolemia - VE hipercontrátil 1" 
                className="w-full rounded-lg mb-2"
              />
              <p className="text-center text-sm text-muted-foreground">
                VE hipercontrátil - vista paraesternal
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg border">
              <img 
                src={hipovolemia2Img} 
                alt="Hipovolemia - VE hipercontrátil 2" 
                className="w-full rounded-lg mb-2"
              />
              <p className="text-center text-sm text-muted-foreground">
                VE hipercontrátil - vista apical
              </p>
            </div>
          </div>

          <div className="bg-primary/10 p-6 rounded-lg">
            <h4 className="font-semibold text-primary mb-3">📋 Pontos-chave:</h4>
            <ul className="medical-list">
              <li>Ventrículo esquerdo pequeno e hipercontrátil</li>
              <li>Cavidade virtual ao final da sístole</li>
              <li>Veia cava inferior colabada</li>
              <li>Indicação para expansão volêmica imediata</li>
            </ul>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <div className="space-y-6">
          <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
            <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2">
              <i className="fas fa-exclamation-triangle"></i>
              Problema Central
            </h3>
            <p className="text-lg">A <strong>autorregulação vascular cerebral</strong> está comprometida. O fluxo sanguíneo cerebral depende <strong>diretamente</strong> da pressão arterial.</p>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg text-center border-2 border-primary/50">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
              <i className="fas fa-quote-left"></i>
              Mensagem Clínica Central
            </h3>
            <p className="text-xl font-medium">
              Uma PAM de <strong className="text-accent">65 mmHg</strong> deve ser vista como um <strong>PISO</strong>, não como um <strong>ALVO</strong>.
            </p>
          </div>

          <div className="bg-success/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-success mb-4 flex items-center gap-2">
              <i className="fas fa-target"></i>
              Estratégia
            </h3>
            <ul className="medical-list">
              <li>Almejar uma PAM entre <strong>80-100 mmHg</strong> pode ser benéfico para otimizar a perfusão cerebral</li>
              <li className="text-lg font-medium text-accent">A conclusão prática é: <strong>EVITAR A HIPOTENSÃO A TODO CUSTO</strong></li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-6 bg-accent/5 rounded-lg border border-accent/30">
              <i className="fas fa-arrow-down text-accent text-3xl mb-2"></i>
              <div className="text-2xl font-bold text-accent">65 mmHg</div>
              <div className="text-sm">PISO (Mínimo)</div>
            </div>
            <div className="text-center p-6 bg-success/5 rounded-lg border border-success/30">
              <i className="fas fa-bullseye text-success text-3xl mb-2"></i>
              <div className="text-2xl font-bold text-success">80-100</div>
              <div className="text-sm">ALVO Ideal</div>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/30">
              <i className="fas fa-brain text-primary text-3xl mb-2"></i>
              <div className="text-2xl font-bold text-primary">Cérebro</div>
              <div className="text-sm">Prioridade #1</div>
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
        <div className="space-y-6">
          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <i className="fas fa-thermometer-half"></i>
              Recomendação Atual (AHA 2023)
            </h3>
            <p className="text-lg">Manter uma temperatura corporal <strong>constante</strong> entre <strong className="text-success">32°C e 37,5°C</strong>.</p>
          </div>

          <div className="bg-success/10 p-6 rounded-lg border-l-4 border-success">
            <h3 className="text-xl font-semibold text-success mb-4 flex items-center gap-2">
              <i className="fas fa-lightbulb"></i>
              O Principal Benefício
            </h3>
            <p className="text-lg">Não vem da <strong>hipotermia</strong> em si, mas da <strong className="text-accent">PREVENÇÃO ATIVA E METICULOSA DA FEBRE</strong>.</p>
          </div>

          <div className="bg-warning/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-warning mb-4 flex items-center gap-2">
              <i className="fas fa-cogs"></i>
              Essência da Prática
            </h3>
            <ul className="medical-list">
              <li>Utilizar <strong>dispositivos de controle de temperatura</strong></li>
              <li>Garantir <strong>sedação adequada</strong> e, se necessário, <strong>bloqueio neuromuscular</strong> para suprimir tremores</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/30">
              <i className="fas fa-snowflake text-primary text-3xl mb-2"></i>
              <div className="text-xl font-bold text-primary">32°C</div>
              <div className="text-sm">Limite Inferior</div>
            </div>
            <div className="text-center p-6 bg-success/5 rounded-lg border border-success/30">
              <i className="fas fa-thermometer-half text-success text-3xl mb-2"></i>
              <div className="text-xl font-bold text-success">Controle</div>
              <div className="text-sm">Ativo e Preciso</div>
            </div>
            <div className="text-center p-6 bg-warning/5 rounded-lg border border-warning/30">
              <i className="fas fa-fire text-warning text-3xl mb-2"></i>
              <div className="text-xl font-bold text-warning">37,5°C</div>
              <div className="text-sm">Limite Superior</div>
            </div>
          </div>

          <div className="bg-accent/10 p-4 rounded-lg text-center">
            <p className="font-medium text-accent">
              <i className="fas fa-ban mr-2"></i>
              FEBRE = INIMIGO DO CÉREBRO!
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 19,
      title: "Fase III - 4.4 Manejo de Convulsões e Sedação",
      type: 'content',
      content: (
        <div className="space-y-6">
          <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
            <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2">
              <i className="fas fa-chart-line"></i>
              Incidência
            </h3>
            <p className="text-lg">Ocorrem em até <strong>36%</strong> dos pacientes e indicam <strong>lesão cerebral grave</strong>.</p>
          </div>

          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <i className="fas fa-brain"></i>
              Monitorização (Recomendação Clara)
            </h3>
            <p className="text-lg mb-3"><strong>Eletroencefalograma (EEG) contínuo</strong> para <strong className="text-accent">TODOS</strong> os pacientes comatosos após PCR.</p>
            <p className="text-base">É a <strong>única forma</strong> de detectar o estado de mal epiléptico não convulsivo.</p>
          </div>

          <div className="bg-success/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-success mb-4 flex items-center gap-2">
              <i className="fas fa-pills"></i>
              Tratamento e Sedação
            </h3>
            <ul className="medical-list">
              <li>Considerar ensaio terapêutico com <strong>anticonvulsivante não sedativo</strong></li>
              <li>Priorizar sedativos de <strong>curta ação</strong> (Propofol, Fentanil) para facilitar a avaliação neurológica</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
              <div className="text-center">
                <i className="fas fa-percentage text-accent text-3xl mb-3"></i>
                <h4 className="font-semibold mb-2 text-accent">36%</h4>
                <p>Incidência de Convulsões</p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
              <div className="text-center">
                <i className="fas fa-chart-line text-primary text-3xl mb-3"></i>
                <h4 className="font-semibold mb-2 text-primary">EEG</h4>
                <p>Contínuo para TODOS</p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 border-success/30">
              <div className="text-center">
                <i className="fas fa-clock text-success text-3xl mb-3"></i>
                <h4 className="font-semibold mb-2 text-success">Curta Ação</h4>
                <p>Propofol + Fentanil</p>
              </div>
            </Card>
          </div>

          <div className="bg-warning/10 p-4 rounded-lg text-center">
            <p className="font-medium text-warning">
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
        <div className="space-y-8 text-center">
          <div className="bg-gradient-to-r from-primary/20 to-success/20 p-12 rounded-lg border-2 border-primary/30">
            <h3 className="text-3xl font-bold text-primary mb-6">
              <i className="fas fa-medal mr-3"></i>
              Excelência nos Cuidados
            </h3>
            <p className="text-xl leading-relaxed">
              A excelência nos cuidados pós-parada cardiorrespiratória é a disciplina que, 
              <strong className="text-accent"> elo por elo</strong>, transforma a sobrevivência em uma 
              <strong className="text-success"> vida com propósito e qualidade</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-primary/5 rounded-lg">
              <i className="fas fa-heartbeat text-primary text-3xl mb-3"></i>
              <h4 className="font-semibold">Estabilização</h4>
              <p className="text-sm">Imediata e eficaz</p>
            </div>
            <div className="p-6 bg-success/5 rounded-lg">
              <i className="fas fa-search text-success text-3xl mb-3"></i>
              <h4 className="font-semibold">Diagnóstico</h4>
              <p className="text-sm">Rápido e direcionado</p>
            </div>
            <div className="p-6 bg-warning/5 rounded-lg">
              <i className="fas fa-brain text-warning text-3xl mb-3"></i>
              <h4 className="font-semibold">Proteção</h4>
              <p className="text-sm">Neurológica ativa</p>
            </div>
            <div className="p-6 bg-accent/5 rounded-lg">
              <i className="fas fa-trophy text-accent text-3xl mb-3"></i>
              <h4 className="font-semibold">Recuperação</h4>
              <p className="text-sm">Com qualidade</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-success/10 to-primary/10 p-6 rounded-lg">
            <p className="text-lg font-medium">
              <i className="fas fa-quote-left mr-2"></i>
              Cada vida salva é uma vitória da medicina baseada em evidência
              <i className="fas fa-quote-right ml-2"></i>
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
        <div className="space-y-6">
          <div className="bg-primary/10 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center justify-center gap-2">
              <i className="fas fa-syringe"></i>
              💉 Indução + bloqueio neuromuscular
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="border border-primary/30 p-3 text-left">Droga</th>
                  <th className="border border-primary/30 p-3 text-center">Dose (mg/kg)</th>
                  <th className="border border-primary/30 p-3 text-center">50 kg</th>
                  <th className="border border-primary/30 p-3 text-center">75 kg</th>
                  <th className="border border-primary/30 p-3 text-center">100 kg</th>
                  <th className="border border-primary/30 p-3 text-center">Obs.</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-accent/5">
                  <td className="border border-gray-300 p-3 font-medium">Etomidato 2 mg/mL</td>
                  <td className="border border-gray-300 p-3 text-center">0,3 mg/kg</td>
                  <td className="border border-gray-300 p-3 text-center">15 mg = 7,5 mL</td>
                  <td className="border border-gray-300 p-3 text-center">22,5 mg = 11,2 mL</td>
                  <td className="border border-gray-300 p-3 text-center">30 mg = 15 mL</td>
                  <td className="border border-gray-300 p-3 text-center text-success">Estável hemodinamicamente</td>
                </tr>
                <tr className="hover:bg-accent/5">
                  <td className="border border-gray-300 p-3 font-medium">Propofol 10 mg/mL</td>
                  <td className="border border-gray-300 p-3 text-center">2 mg/kg</td>
                  <td className="border border-gray-300 p-3 text-center">100 mg = 10 mL</td>
                  <td className="border border-gray-300 p-3 text-center">150 mg = 15 mL</td>
                  <td className="border border-gray-300 p-3 text-center">200 mg = 20 mL</td>
                  <td className="border border-gray-300 p-3 text-center text-accent">⚠️ Hipotensão</td>
                </tr>
                <tr className="hover:bg-accent/5">
                  <td className="border border-gray-300 p-3 font-medium">Midazolam 5 mg/mL</td>
                  <td className="border border-gray-300 p-3 text-center">0,3 mg/kg</td>
                  <td className="border border-gray-300 p-3 text-center">15 mg = 3 mL</td>
                  <td className="border border-gray-300 p-3 text-center">22,5 mg = 4,5 mL</td>
                  <td className="border border-gray-300 p-3 text-center">30 mg = 6 mL</td>
                  <td className="border border-gray-300 p-3 text-center text-primary">Sedação / crises</td>
                </tr>
                <tr className="hover:bg-accent/5">
                  <td className="border border-gray-300 p-3 font-medium">Fentanil 50 µg/mL</td>
                  <td className="border border-gray-300 p-3 text-center">2 µg/kg</td>
                  <td className="border border-gray-300 p-3 text-center">100 µg = 2 mL</td>
                  <td className="border border-gray-300 p-3 text-center">150 µg = 3 mL</td>
                  <td className="border border-gray-300 p-3 text-center">200 µg = 4 mL</td>
                  <td className="border border-gray-300 p-3 text-center text-accent">⚠️ Depressão resp., rigidez</td>
                </tr>
                <tr className="hover:bg-accent/5">
                  <td className="border border-gray-300 p-3 font-medium">Succinilcolina 10 mg/mL</td>
                  <td className="border border-gray-300 p-3 text-center">1,5 mg/kg</td>
                  <td className="border border-gray-300 p-3 text-center">75 mg = 7,5 mL</td>
                  <td className="border border-gray-300 p-3 text-center">112 mg = 11,2 mL</td>
                  <td className="border border-gray-300 p-3 text-center">150 mg = 15 mL</td>
                  <td className="border border-gray-300 p-3 text-center text-accent">⚠️ CI: hiperK+, queimados</td>
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
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-success text-success-foreground">
                  <th className="border border-success/30 p-3 text-left">Droga</th>
                  <th className="border border-success/30 p-3 text-center">Dose (mg/kg)</th>
                  <th className="border border-success/30 p-3 text-center">50 kg</th>
                  <th className="border border-success/30 p-3 text-center">75 kg</th>
                  <th className="border border-success/30 p-3 text-center">100 kg</th>
                  <th className="border border-success/30 p-3 text-center">Obs.</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-accent/5">
                  <td className="border border-gray-300 p-3 font-medium">Midazolam 5 mg/mL</td>
                  <td className="border border-gray-300 p-3 text-center">0,1 mg/kg (bolus)</td>
                  <td className="border border-gray-300 p-3 text-center">5 mg = 1 mL</td>
                  <td className="border border-gray-300 p-3 text-center">7,5 mg = 1,5 mL</td>
                  <td className="border border-gray-300 p-3 text-center">10 mg = 2 mL</td>
                  <td className="border border-gray-300 p-3 text-center text-primary">Infusão 0,05–2 µg/kg/min</td>
                </tr>
                <tr className="hover:bg-accent/5">
                  <td className="border border-gray-300 p-3 font-medium">Propofol 10 mg/mL</td>
                  <td className="border border-gray-300 p-3 text-center">1 mg/kg (bolus)</td>
                  <td className="border border-gray-300 p-3 text-center">50 mg = 5 mL</td>
                  <td className="border border-gray-300 p-3 text-center">75 mg = 7,5 mL</td>
                  <td className="border border-gray-300 p-3 text-center">100 mg = 10 mL</td>
                  <td className="border border-gray-300 p-3 text-center text-primary">Infusão 1–5 mg/kg/h</td>
                </tr>
                <tr className="hover:bg-accent/5">
                  <td className="border border-gray-300 p-3 font-medium">Fentanil 50 µg/mL</td>
                  <td className="border border-gray-300 p-3 text-center">1 µg/kg (bolus)</td>
                  <td className="border border-gray-300 p-3 text-center">50 µg = 1 mL</td>
                  <td className="border border-gray-300 p-3 text-center">75 µg = 1,5 mL</td>
                  <td className="border border-gray-300 p-3 text-center">100 µg = 2 mL</td>
                  <td className="border border-gray-300 p-3 text-center text-primary">Infusão 1–3 µg/kg/h</td>
                </tr>
                <tr className="hover:bg-accent/5">
                  <td className="border border-gray-300 p-3 font-medium">Levetiracetam 100 mg/mL</td>
                  <td className="border border-gray-300 p-3 text-center">60 mg/kg (máx 4,5 g)</td>
                  <td className="border border-gray-300 p-3 text-center">3.000 mg = 30 mL</td>
                  <td className="border border-gray-300 p-3 text-center">4.500 mg = 45 mL (dose teto)</td>
                  <td className="border border-gray-300 p-3 text-center">6.000 mg → limitar a 4.500 mg (45 mL)</td>
                  <td className="border border-gray-300 p-3 text-center text-success">Infundir em 15 min</td>
                </tr>
                <tr className="hover:bg-accent/5">
                  <td className="border border-gray-300 p-3 font-medium">Fenitoína 50 mg/mL</td>
                  <td className="border border-gray-300 p-3 text-center">15 mg/kg</td>
                  <td className="border border-gray-300 p-3 text-center">750 mg = 15 mL</td>
                  <td className="border border-gray-300 p-3 text-center">1125 mg = 22,5 mL</td>
                  <td className="border border-gray-300 p-3 text-center">1500 mg = 30 mL</td>
                  <td className="border border-gray-300 p-3 text-center text-accent">Máx 50 mg/min, monitorizar ECG</td>
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
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                <i className="fas fa-bolt"></i>
                IOT Emergência
              </h3>
              <ul className="medical-list text-sm">
                <li><strong>Etomidato:</strong> 0,3 mg/kg (primeira escolha)</li>
                <li><strong>Succinilcolina:</strong> 1,5 mg/kg</li>
                <li><strong>⚠️ Reduzir doses</strong> se instabilidade hemodinâmica</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 border-success/30">
              <h3 className="text-lg font-semibold text-success mb-4 flex items-center gap-2">
                <i className="fas fa-pills"></i>
                Sedação Pós-IOT
              </h3>
              <ul className="medical-list text-sm">
                <li><strong>Midazolam:</strong> 0,1 mg/kg bolus</li>
                <li><strong>Fentanil:</strong> 1 µg/kg bolus</li>
                <li>Infusão contínua conforme necessário</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
              <h3 className="text-lg font-semibold text-accent mb-4 flex items-center gap-2">
                <i className="fas fa-brain"></i>
                Anticonvulsivantes
              </h3>
              <ul className="medical-list text-sm">
                <li><strong>Levetiracetam:</strong> 60 mg/kg (máx 4,5g)</li>
                <li><strong>Fenitoína:</strong> 15 mg/kg</li>
                <li>EEG contínuo é mandatório</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-warning/10 to-warning/5 border-warning/30">
              <h3 className="text-lg font-semibold text-warning mb-4 flex items-center gap-2">
                <i className="fas fa-exclamation-triangle"></i>
                Pontos Críticos
              </h3>
              <ul className="medical-list text-sm">
                <li>Sempre <strong>calcular</strong> a dose pelo peso</li>
                <li><strong>Monitorização</strong> hemodinâmica contínua</li>
                <li>Ter <strong>antidotos</strong> sempre disponíveis</li>
              </ul>
            </Card>
          </div>

          <div className="bg-primary/10 p-6 rounded-lg text-center">
            <p className="text-lg font-medium text-primary">
              <i className="fas fa-clipboard-check mr-2"></i>
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
        <div className="text-center space-y-12">
          <div className="text-8xl mb-8">
            <i className="fas fa-heart text-accent animate-pulse"></i>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">
              <i className="fas fa-question-circle mr-3"></i>
              Momento para Discussão
            </h3>
            <p className="text-lg text-muted-foreground">
              Compartilhe suas experiências e esclareça suas dúvidas sobre os cuidados pós-PCR
            </p>
          </div>

          <div className="flex justify-center items-center gap-8 mt-12">
            <i className="fas fa-stethoscope text-primary text-4xl"></i>
            <i className="fas fa-brain text-success text-4xl"></i>
            <i className="fas fa-heartbeat text-accent text-4xl"></i>
            <i className="fas fa-users text-warning text-4xl"></i>
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
      <header className="bg-card shadow-md border-b p-4">
        <div className="container mx-auto flex items-center justify-between">
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
      <main className="flex-1 p-6">
        <div className="container mx-auto max-w-6xl h-full">
          <Card className={`slide-container h-full p-8 ${isTransitioning ? 'opacity-50' : 'opacity-100'} transition-opacity duration-200`}>
            <div className="h-full flex flex-col">
              {/* Slide header */}
              <div className="text-center mb-8 border-b border-border pb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {currentSlideData.title}
                </h2>
                {currentSlideData.subtitle && (
                  <p className="text-xl text-muted-foreground">{currentSlideData.subtitle}</p>
                )}
                <div className="mt-4 flex justify-center">
                  <div className="h-1 w-24 bg-gradient-to-r from-primary to-success rounded"></div>
                </div>
              </div>

              {/* Slide content */}
              <div className="flex-1 overflow-y-auto">
                {currentSlideData.content}
              </div>
            </div>
          </Card>
        </div>
      </main>

      {/* Footer with slide navigation dots */}
      <footer className="bg-card border-t p-4">
        <div className="container mx-auto flex justify-center">
          <div className="flex gap-2 max-w-full overflow-x-auto pb-2">
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