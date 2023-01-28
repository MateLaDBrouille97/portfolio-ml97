// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SkillType = {
  "BACKEND": "BACKEND",
  "FRONTEND": "FRONTEND",
  "DATABASE": "DATABASE"
};

const QualificationType = {
  "EDUCATION": "EDUCATION",
  "EXPERIENCE": "EXPERIENCE"
};

const LevelSkill = {
  "BASIC": "BASIC",
  "INTERMEDIATE": "INTERMEDIATE",
  "ADVANCED": "ADVANCED"
};

const PortfolioType = {
  "WEB": "WEB",
  "APP": "APP",
  "SCIENCE": "SCIENCE"
};

const { Link, Service, Qualification, Skill, PortfolioPost, User } = initSchema(schema);

export {
  Link,
  Service,
  Qualification,
  Skill,
  PortfolioPost,
  User,
  SkillType,
  QualificationType,
  LevelSkill,
  PortfolioType
};