import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum SkillType {
  BACKEND = "BACKEND",
  FRONTEND = "FRONTEND"
}

export enum QualificationType {
  EDUCATION = "EDUCATION",
  EXPERIENCE = "EXPERIENCE"
}

export enum LevelSkill {
  BASIC = "BASIC",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED"
}

export enum PortfolioType {
  WEB = "WEB",
  APP = "APP",
  SCIENCE = "SCIENCE"
}



type EagerService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Service, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly description?: string | null;
  readonly userID: string;
  readonly serviceData?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Service, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly description?: string | null;
  readonly userID: string;
  readonly serviceData?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Service = LazyLoading extends LazyLoadingDisabled ? EagerService : LazyService

export declare const Service: (new (init: ModelInit<Service>) => Service) & {
  copyOf(source: Service, mutator: (draft: MutableModel<Service>) => MutableModel<Service> | void): Service;
}

type EagerQualification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Qualification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly calendarBegin?: string | null;
  readonly calendarEnd?: string | null;
  readonly institut?: string | null;
  readonly type?: QualificationType | keyof typeof QualificationType | null;
  readonly userID: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQualification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Qualification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly calendarBegin?: string | null;
  readonly calendarEnd?: string | null;
  readonly institut?: string | null;
  readonly type?: QualificationType | keyof typeof QualificationType | null;
  readonly userID: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Qualification = LazyLoading extends LazyLoadingDisabled ? EagerQualification : LazyQualification

export declare const Qualification: (new (init: ModelInit<Qualification>) => Qualification) & {
  copyOf(source: Qualification, mutator: (draft: MutableModel<Qualification>) => MutableModel<Qualification> | void): Qualification;
}

type EagerSkill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Skill, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly level?: LevelSkill | keyof typeof LevelSkill | null;
  readonly name?: string | null;
  readonly userID: string;
  readonly type?: SkillType | keyof typeof SkillType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySkill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Skill, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly level?: LevelSkill | keyof typeof LevelSkill | null;
  readonly name?: string | null;
  readonly userID: string;
  readonly type?: SkillType | keyof typeof SkillType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Skill = LazyLoading extends LazyLoadingDisabled ? EagerSkill : LazySkill

export declare const Skill: (new (init: ModelInit<Skill>) => Skill) & {
  copyOf(source: Skill, mutator: (draft: MutableModel<Skill>) => MutableModel<Skill> | void): Skill;
}

type EagerPortfolioPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PortfolioPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly type?: PortfolioType | keyof typeof PortfolioType | null;
  readonly userID: string;
  readonly technologies?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPortfolioPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PortfolioPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly type?: PortfolioType | keyof typeof PortfolioType | null;
  readonly userID: string;
  readonly technologies?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PortfolioPost = LazyLoading extends LazyLoadingDisabled ? EagerPortfolioPost : LazyPortfolioPost

export declare const PortfolioPost: (new (init: ModelInit<PortfolioPost>) => PortfolioPost) & {
  copyOf(source: PortfolioPost, mutator: (draft: MutableModel<PortfolioPost>) => MutableModel<PortfolioPost> | void): PortfolioPost;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly instagram?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly github?: string | null;
  readonly title?: (string | null)[] | null;
  readonly experience?: number | null;
  readonly projectNumber?: number | null;
  readonly Qualifications?: (Qualification | null)[] | null;
  readonly Skills?: (Skill | null)[] | null;
  readonly Portfolios?: (PortfolioPost | null)[] | null;
  readonly Services?: (Service | null)[] | null;
  readonly sub?: string | null;
  readonly support?: string | null;
  readonly descriptionLong?: string | null;
  readonly CV?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly instagram?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly github?: string | null;
  readonly title?: (string | null)[] | null;
  readonly experience?: number | null;
  readonly projectNumber?: number | null;
  readonly Qualifications: AsyncCollection<Qualification>;
  readonly Skills: AsyncCollection<Skill>;
  readonly Portfolios: AsyncCollection<PortfolioPost>;
  readonly Services: AsyncCollection<Service>;
  readonly sub?: string | null;
  readonly support?: string | null;
  readonly descriptionLong?: string | null;
  readonly CV?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}