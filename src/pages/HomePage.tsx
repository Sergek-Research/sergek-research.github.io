/* eslint-disable formatjs/enforce-description */
import React from 'react';
import { useIntl, defineMessages, FormattedMessage } from 'react-intl';
import { Typography, Image, List, Table, Divider, Space } from 'antd';

export const messages = defineMessages({
  pageTitle: {
    id: 'home.pageTitle',
    defaultMessage: 'Sergek Research',
  },
  subtitle: {
    id: 'home.subtitle',
    defaultMessage:
      'Инновации c искусственным интеллектом | Исследуем будущее ИИ',
  },
  logoAlt: {
    id: 'home.logoAlt',
    defaultMessage: 'Sergek Research logo',
  },
  aboutUsTitle: {
    id: 'home.aboutUsTitle',
    defaultMessage: '🚀 О нас',
  },
  aboutUsP1SergekResearch: {
    id: 'home.aboutUsP1.sergekResearch',
    defaultMessage: 'Sergek Research',
  },
  aboutUsP1NextGen: {
    id: 'home.aboutUsP1.nextGen',
    defaultMessage: 'нового поколения',
  },
  aboutUsP1ML: {
    id: 'home.aboutUsP1.ml',
    defaultMessage: 'машинного обучения',
  },
  aboutUsP1DL: {
    id: 'home.aboutUsP1.dl',
    defaultMessage: 'глубокого обучения',
  },
  aboutUsP1: {
    id: 'home.aboutUsP1',
    defaultMessage:
      '{sergekResearchBold} — это казахстанская исследовательская компания, создающая продукты и решения {nextGenBold} на стыке {mlItalic}, {dlItalic} и смежных дисциплин. Мы',
  },
  aboutUsListItem1: {
    id: 'home.aboutUsListItem1',
    defaultMessage:
      'проводим фундаментальные и прикладные исследования архитектур нейронных сетей;',
  },
  aboutUsListItem2: {
    id: 'home.aboutUsListItem2',
    defaultMessage:
      'разрабатываем эффективные алгоритмы и инструменты для реального бизнеса;',
  },
  aboutUsListItem3: {
    id: 'home.aboutUsListItem3',
    defaultMessage: 'открыто делимся знаниями и кодом c сообществом.',
  },
  missionTitle: {
    id: 'home.missionTitle',
    defaultMessage: '🧭 Миссия',
  },
  missionQuote: {
    id: 'home.missionQuote',
    defaultMessage: 'Сокращаем путь от идеи до инновации.',
  },
  missionP1: {
    id: 'home.missionP1',
    defaultMessage: 'Мы верим, что будущее за синергией человека и ИИ.',
  },
  missionP11: {
    id: 'home.missionP11',
    defaultMessage:
      'Наша цель — ускорить это будущее, создавая доступные, масштабируемые и энергоэффективные технологии.',
  },
  whatWeDoTitle: {
    id: 'home.whatWeDoTitle',
    defaultMessage: '🛠️ Чем мы занимаемся',
  },
  tableTrackHeader: {
    id: 'home.tableTrackHeader',
    defaultMessage: 'Направление',
  },
  tableBuildHeader: {
    id: 'home.tableBuildHeader',
    defaultMessage: 'Что мы создаем',
  },
  trackLLM: {
    id: 'home.trackLLM',
    defaultMessage: 'Исследования LLM',
  },
  buildLLM: {
    id: 'home.buildLLM',
    defaultMessage: 'Новые архитектуры',
  },
  trackAIInfra: {
    id: 'home.trackAIInfra',
    defaultMessage: 'Инфраструктура ИИ',
  },
  buildAIInfra: {
    id: 'home.buildAIInfra',
    defaultMessage:
      'Оптимизация инференса, распределенное обучение, аппаратное ускорение',
  },
  trackGenAI: {
    id: 'home.trackGenAI',
    defaultMessage: 'Генеративный ИИ',
  },
  buildGenAI: {
    id: 'home.buildGenAI',
    defaultMessage: 'T2I/T2V, мультимодальность',
  },
  trackOpenSource: {
    id: 'home.trackOpenSource',
    defaultMessage: 'Инструменты с открытым кодом',
  },
  buildOpenSourcePTTJS: {
    id: 'home.buildOpenSource.pttjs',
    defaultMessage: 'PTTJS',
  },
  buildOpenSourceRest: {
    id: 'home.buildOpenSource.rest',
    defaultMessage: ' библиотека, CLI-утилиты, конвейеры данных',
  },
});

const { Title, Paragraph, Text } = Typography;

// Данные для таблицы "What We Do"
interface WhatWeDoDataType {
  key: string;
  track: React.ReactNode;
  build: React.ReactNode;
}

const HomePage: React.FC = () => {
  const intl = useIntl();

  const whatWeDoData: WhatWeDoDataType[] = [
    {
      key: '1',
      track: <Text strong>{intl.formatMessage(messages.trackLLM)}</Text>,
      build: intl.formatMessage(messages.buildLLM),
    },
    {
      key: '2',
      track: <Text strong>{intl.formatMessage(messages.trackAIInfra)}</Text>,
      build: intl.formatMessage(messages.buildAIInfra),
    },
    {
      key: '3',
      track: <Text strong>{intl.formatMessage(messages.trackGenAI)}</Text>,
      build: intl.formatMessage(messages.buildGenAI),
    },
    {
      key: '4',
      track: <Text strong>{intl.formatMessage(messages.trackOpenSource)}</Text>,
      build: (
        <>
          <Text strong>
            {intl.formatMessage(messages.buildOpenSourcePTTJS)}{' '}
          </Text>
          {intl.formatMessage(messages.buildOpenSourceRest)}
        </>
      ),
    },
  ];

  const columns = [
    {
      title: intl.formatMessage(messages.tableTrackHeader),
      dataIndex: 'track',
      key: 'track',
      width: '30%',
    },
    {
      title: intl.formatMessage(messages.tableBuildHeader),
      dataIndex: 'build',
      key: 'build',
    },
  ];

  const aboutUsList = [
    intl.formatMessage(messages.aboutUsListItem1),
    intl.formatMessage(messages.aboutUsListItem2),
    intl.formatMessage(messages.aboutUsListItem3),
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '20px' }}>
      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', alignItems: 'center' }}>
        <Image
          width={200}
          src="/images/logo.png"
          alt={intl.formatMessage(messages.logoAlt)}
          preview={false}
        />
        <Title level={1} style={{ textAlign: 'center', marginBottom: 0 }}>
          {intl.formatMessage(messages.pageTitle)}
        </Title>
        <Paragraph
          style={{ textAlign: 'center', fontSize: '1.1em', color: '#555' }}>
          {intl.formatMessage(messages.subtitle)}
        </Paragraph>
      </Space>

      <Divider />

      <section style={{ marginBottom: '40px' }}>
        <Title level={2}>{intl.formatMessage(messages.aboutUsTitle)}</Title>
        <Paragraph>
          <FormattedMessage
            {...messages.aboutUsP1}
            values={{
              sergekResearchBold: (
                <strong>
                  {intl.formatMessage(messages.aboutUsP1SergekResearch)}
                </strong>
              ),
              nextGenBold: (
                <strong>{intl.formatMessage(messages.aboutUsP1NextGen)}</strong>
              ),
              mlItalic: <em>{intl.formatMessage(messages.aboutUsP1ML)}</em>,
              dlItalic: <em>{intl.formatMessage(messages.aboutUsP1DL)}</em>,
            }}
          />
        </Paragraph>
        <List
          dataSource={aboutUsList}
          renderItem={(item) => (
            <List.Item
              style={{
                borderBlockEnd: 'none',
                paddingLeft: '20px',
                position: 'relative',
              }}>
              <span style={{ position: 'absolute', left: '0px', top: '5px' }}>
                •
              </span>
              <Text>{item}</Text>
            </List.Item>
          )}
          style={{ paddingLeft: 0 }}
        />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <Title level={2}>{intl.formatMessage(messages.missionTitle)}</Title>
        <Paragraph
          style={{
            borderLeft: '4px solid #ccc',
            paddingLeft: '16px',
            fontStyle: 'italic',
            color: '#555',
          }}>
          <Text
            strong
            style={{ display: 'block', marginBottom: '8px', color: '#333' }}>
            {intl.formatMessage(messages.missionQuote)}
          </Text>
        </Paragraph>
        <Paragraph>{intl.formatMessage(messages.missionP1)}</Paragraph>
        <Paragraph>{intl.formatMessage(messages.missionP11)}</Paragraph>
      </section>

      <section>
        <Title level={2}>{intl.formatMessage(messages.whatWeDoTitle)}</Title>
        <Table
          columns={columns}
          dataSource={whatWeDoData}
          pagination={false}
          bordered
        />
      </section>
    </div>
  );
};

export default HomePage;
