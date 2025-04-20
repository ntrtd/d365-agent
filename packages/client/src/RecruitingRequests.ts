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
import type { RecruitingRequestsApi } from './RecruitingRequestsApi';
import { HcmRecruitingRequestStatus } from './HcmRecruitingRequestStatus';
import { HcmJobTypeExemptStatus } from './HcmJobTypeExemptStatus';
import { NoYes } from './NoYes';
import { HcmRegulatoryJobCategory } from './HcmRegulatoryJobCategory';
import {
  RecruitingRequestSkills,
  RecruitingRequestSkillsType
} from './RecruitingRequestSkills';
import {
  RecruitingRequestPositions,
  RecruitingRequestPositionsType
} from './RecruitingRequestPositions';
import {
  RecruitingRequestEducations,
  RecruitingRequestEducationsType
} from './RecruitingRequestEducations';
import { CandidatesToHire, CandidatesToHireType } from './CandidatesToHire';
import { Titles, TitlesType } from './Titles';
import {
  CompensationLevels,
  CompensationLevelsType
} from './CompensationLevels';
import { Jobs, JobsType } from './Jobs';
import {
  RecruitingRequestLocations,
  RecruitingRequestLocationsType
} from './RecruitingRequestLocations';
import { People, PeopleType } from './People';
import { BaseWorkers, BaseWorkersType } from './BaseWorkers';
import { JobTypes, JobTypesType } from './JobTypes';

/**
 * This class represents the entity "RecruitingRequests" of service "d365_metadata".
 */
export class RecruitingRequests<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RecruitingRequestsType<T>
{
  /**
   * Technical entity name for RecruitingRequests.
   */
  static override _entityName = 'RecruitingRequests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RecruitingRequests entity.
   */
  static _keys = ['dataAreaId', 'RecruitingRequestId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Recruiting Request Id.
   */
  declare recruitingRequestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Hiring Manager Personnel Number.
   * @nullable
   */
  declare hiringManagerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Compensation High Threshold.
   */
  declare compensationHighThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Full Time Equivalency.
   */
  declare defaultFullTimeEquivalency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: HcmRecruitingRequestStatus | null;
  /**
   * Job Id.
   * @nullable
   */
  declare jobId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Description.
   * @nullable
   */
  declare externalDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Title Id.
   * @nullable
   */
  declare titleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exempt Status.
   * @nullable
   */
  declare exemptStatus?: HcmJobTypeExemptStatus | null;
  /**
   * Compensation Control Point.
   */
  declare compensationControlPoint: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Recruiting Request Location Id.
   * @nullable
   */
  declare recruitingRequestLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Job Type Id.
   * @nullable
   */
  declare jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comments.
   * @nullable
   */
  declare comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recruiting Request Publish.
   * @nullable
   */
  declare recruitingRequestPublish?: NoYes | null;
  /**
   * Job Function Id.
   * @nullable
   */
  declare jobFunctionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hiring Manager Email Id.
   * @nullable
   */
  declare hiringManagerEmailId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Regulatory Job Category.
   * @nullable
   */
  declare regulatoryJobCategory?: HcmRegulatoryJobCategory | null;
  /**
   * Compensation Level Id.
   * @nullable
   */
  declare compensationLevelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Compensation Low Threshold.
   */
  declare compensationLowThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Recruiter Party Number.
   * @nullable
   */
  declare recruiterPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recruiter Email Id.
   * @nullable
   */
  declare recruiterEmailId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Estimated Start Date.
   */
  declare estimatedStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link RecruitingRequestSkills} entity.
   */
  declare recruitingRequestSkills: RecruitingRequestSkills<T>[];
  /**
   * One-to-many navigation property to the {@link RecruitingRequestPositions} entity.
   */
  declare recruitingRequestPositions: RecruitingRequestPositions<T>[];
  /**
   * One-to-many navigation property to the {@link RecruitingRequestEducations} entity.
   */
  declare recruitingRequestEducations: RecruitingRequestEducations<T>[];
  /**
   * One-to-many navigation property to the {@link CandidatesToHire} entity.
   */
  declare candidatesToHire: CandidatesToHire<T>[];
  /**
   * One-to-one navigation property to the {@link Titles} entity.
   */
  declare title?: Titles<T> | null;
  /**
   * One-to-one navigation property to the {@link CompensationLevels} entity.
   */
  declare compensationLevel?: CompensationLevels<T> | null;
  /**
   * One-to-one navigation property to the {@link Jobs} entity.
   */
  declare job?: Jobs<T> | null;
  /**
   * One-to-one navigation property to the {@link RecruitingRequestLocations} entity.
   */
  declare recruitingRequestLocation?: RecruitingRequestLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare recruiter?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link BaseWorkers} entity.
   */
  declare hiringManager?: BaseWorkers<T> | null;
  /**
   * One-to-one navigation property to the {@link JobTypes} entity.
   */
  declare jobType?: JobTypes<T> | null;

  constructor(_entityApi: RecruitingRequestsApi<T>) {
    super(_entityApi);
  }
}

export interface RecruitingRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recruitingRequestId: DeserializedType<T, 'Edm.String'>;
  hiringManagerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  compensationHighThreshold: DeserializedType<T, 'Edm.Decimal'>;
  defaultFullTimeEquivalency: DeserializedType<T, 'Edm.Decimal'>;
  status?: HcmRecruitingRequestStatus | null;
  jobId?: DeserializedType<T, 'Edm.String'> | null;
  externalDescription?: DeserializedType<T, 'Edm.String'> | null;
  titleId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  exemptStatus?: HcmJobTypeExemptStatus | null;
  compensationControlPoint: DeserializedType<T, 'Edm.Decimal'>;
  recruitingRequestLocationId?: DeserializedType<T, 'Edm.String'> | null;
  jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  recruitingRequestPublish?: NoYes | null;
  jobFunctionId?: DeserializedType<T, 'Edm.String'> | null;
  hiringManagerEmailId?: DeserializedType<T, 'Edm.String'> | null;
  regulatoryJobCategory?: HcmRegulatoryJobCategory | null;
  compensationLevelId?: DeserializedType<T, 'Edm.String'> | null;
  compensationLowThreshold: DeserializedType<T, 'Edm.Decimal'>;
  recruiterPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  recruiterEmailId?: DeserializedType<T, 'Edm.String'> | null;
  estimatedStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  recruitingRequestSkills: RecruitingRequestSkillsType<T>[];
  recruitingRequestPositions: RecruitingRequestPositionsType<T>[];
  recruitingRequestEducations: RecruitingRequestEducationsType<T>[];
  candidatesToHire: CandidatesToHireType<T>[];
  title?: TitlesType<T> | null;
  compensationLevel?: CompensationLevelsType<T> | null;
  job?: JobsType<T> | null;
  recruitingRequestLocation?: RecruitingRequestLocationsType<T> | null;
  recruiter?: PeopleType<T> | null;
  hiringManager?: BaseWorkersType<T> | null;
  jobType?: JobTypesType<T> | null;
}
