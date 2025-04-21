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
import type { RecruitingRequestEducationsApi } from './RecruitingRequestEducationsApi';
import { EducationLevels, EducationLevelsType } from './EducationLevels';
import {
  EducationDisciplines,
  EducationDisciplinesType
} from './EducationDisciplines';
import {
  RecruitingRequests,
  RecruitingRequestsType
} from './RecruitingRequests';

/**
 * This class represents the entity "RecruitingRequestEducations" of service "d365_metadata".
 */
export class RecruitingRequestEducations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RecruitingRequestEducationsType<T>
{
  /**
   * Technical entity name for RecruitingRequestEducations.
   */
  static override _entityName = 'RecruitingRequestEducations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RecruitingRequestEducations entity.
   */
  static _keys = [
    'dataAreaId',
    'RecruitingRequestId',
    'EducationLevelId',
    'EducationDisciplineId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Recruiting Request Id.
   */
  declare recruitingRequestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Education Level Id.
   */
  declare educationLevelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Education Discipline Id.
   */
  declare educationDisciplineId: DeserializedType<T, 'Edm.String'>;
  /**
   * Education Discipline Description.
   * @nullable
   */
  declare educationDisciplineDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Education Level Description.
   * @nullable
   */
  declare educationLevelDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link EducationLevels} entity.
   */
  declare educationLevel?: EducationLevels<T> | null;
  /**
   * One-to-one navigation property to the {@link EducationDisciplines} entity.
   */
  declare educationDiscipline?: EducationDisciplines<T> | null;
  /**
   * One-to-one navigation property to the {@link RecruitingRequests} entity.
   */
  declare recruitingRequest?: RecruitingRequests<T> | null;

  constructor(_entityApi: RecruitingRequestEducationsApi<T>) {
    super(_entityApi);
  }
}

export interface RecruitingRequestEducationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recruitingRequestId: DeserializedType<T, 'Edm.String'>;
  educationLevelId: DeserializedType<T, 'Edm.String'>;
  educationDisciplineId: DeserializedType<T, 'Edm.String'>;
  educationDisciplineDescription?: DeserializedType<T, 'Edm.String'> | null;
  educationLevelDescription?: DeserializedType<T, 'Edm.String'> | null;
  educationLevel?: EducationLevelsType<T> | null;
  educationDiscipline?: EducationDisciplinesType<T> | null;
  recruitingRequest?: RecruitingRequestsType<T> | null;
}
