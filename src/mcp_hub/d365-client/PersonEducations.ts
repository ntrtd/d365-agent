/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { PersonEducationsApi } from './PersonEducationsApi';
import { PeriodUnit } from './PeriodUnit';
import { HcmEducationCreditBasis } from './HcmEducationCreditBasis';
import { EducationDegrees, EducationDegreesType } from './EducationDegrees';
import {
  EducationDisciplines,
  EducationDisciplinesType
} from './EducationDisciplines';
import { People, PeopleType } from './People';
import {
  EducationInstitutions,
  EducationInstitutionsType
} from './EducationInstitutions';

/**
 * This class represents the entity "PersonEducations" of service "d365_metadata".
 */
export class PersonEducations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PersonEducationsType<T>
{
  /**
   * Technical entity name for PersonEducations.
   */
  static override _entityName = 'PersonEducations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonEducations entity.
   */
  static _keys = [
    'PartyNumber',
    'EducationDisciplineId',
    'EducationInstitutionId',
    'EducationLevelId'
  ];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Education Discipline Id.
   */
  declare educationDisciplineId: DeserializedType<T, 'Edm.String'>;
  /**
   * Education Institution Id.
   */
  declare educationInstitutionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Education Level Id.
   */
  declare educationLevelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Duration.
   */
  declare duration: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Duration Unit.
   * @nullable
   */
  declare durationUnit?: PeriodUnit | null;
  /**
   * Credits Earned.
   */
  declare creditsEarned: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Grade Point Average.
   */
  declare gradePointAverage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Credit Basis.
   * @nullable
   */
  declare creditBasis?: HcmEducationCreditBasis | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Grade Scale.
   * @nullable
   */
  declare gradeScale?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credits Completed.
   */
  declare creditsCompleted: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Credits Needed.
   */
  declare creditsNeeded: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Secondary Emphasis.
   * @nullable
   */
  declare secondaryEmphasis?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link EducationDegrees} entity.
   */
  declare educationDegree?: EducationDegrees<T> | null;
  /**
   * One-to-one navigation property to the {@link EducationDisciplines} entity.
   */
  declare educationDiscipline?: EducationDisciplines<T> | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link EducationInstitutions} entity.
   */
  declare educationInstitution?: EducationInstitutions<T> | null;

  constructor(_entityApi: PersonEducationsApi<T>) {
    super(_entityApi);
  }
}

export interface PersonEducationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  educationDisciplineId: DeserializedType<T, 'Edm.String'>;
  educationInstitutionId: DeserializedType<T, 'Edm.String'>;
  educationLevelId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  duration: DeserializedType<T, 'Edm.Decimal'>;
  durationUnit?: PeriodUnit | null;
  creditsEarned: DeserializedType<T, 'Edm.Decimal'>;
  gradePointAverage: DeserializedType<T, 'Edm.Decimal'>;
  creditBasis?: HcmEducationCreditBasis | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  gradeScale?: DeserializedType<T, 'Edm.String'> | null;
  creditsCompleted: DeserializedType<T, 'Edm.Decimal'>;
  creditsNeeded: DeserializedType<T, 'Edm.Decimal'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  secondaryEmphasis?: DeserializedType<T, 'Edm.String'> | null;
  educationDegree?: EducationDegreesType<T> | null;
  educationDiscipline?: EducationDisciplinesType<T> | null;
  person?: PeopleType<T> | null;
  educationInstitution?: EducationInstitutionsType<T> | null;
}
