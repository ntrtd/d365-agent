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
import type { JobTypesApi } from './JobTypesApi';
import { NoYes } from './NoYes';
import { HcmJobTypeExemptStatus } from './HcmJobTypeExemptStatus';
import {
  CompensationEligibilityRules,
  CompensationEligibilityRulesType
} from './CompensationEligibilityRules';
import { BenefitsRateTiers, BenefitsRateTiersType } from './BenefitsRateTiers';
import { JobsDualWrite, JobsDualWriteType } from './JobsDualWrite';
import {
  BenefitsRateDoubleTiers,
  BenefitsRateDoubleTiersType
} from './BenefitsRateDoubleTiers';
import {
  RecruitingRequests,
  RecruitingRequestsType
} from './RecruitingRequests';

/**
 * This class represents the entity "JobTypes" of service "d365_metadata".
 */
export class JobTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JobTypesType<T>
{
  /**
   * Technical entity name for JobTypes.
   */
  static override _entityName = 'JobTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobTypes entity.
   */
  static _keys = ['JobTypeId'];
  /**
   * Job Type Id.
   */
  declare jobTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * System Modified Date Time.
   */
  declare systemModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * System Modified By.
   * @nullable
   */
  declare systemModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * System Created By.
   * @nullable
   */
  declare systemCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paid Hourly.
   * @nullable
   */
  declare paidHourly?: NoYes | null;
  /**
   * System Created Date Time.
   */
  declare systemCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Exempt Status.
   * @nullable
   */
  declare exemptStatus?: HcmJobTypeExemptStatus | null;
  /**
   * One-to-many navigation property to the {@link CompensationEligibilityRules} entity.
   */
  declare compensationEligibilityRules: CompensationEligibilityRules<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitsRateTiers} entity.
   */
  declare benefitRateTiers: BenefitsRateTiers<T>[];
  /**
   * One-to-many navigation property to the {@link JobsDualWrite} entity.
   */
  declare jobs: JobsDualWrite<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitsRateDoubleTiers} entity.
   */
  declare benefitRateDoubleTiers: BenefitsRateDoubleTiers<T>[];
  /**
   * One-to-many navigation property to the {@link RecruitingRequests} entity.
   */
  declare recruitingRequests: RecruitingRequests<T>[];

  constructor(_entityApi: JobTypesApi<T>) {
    super(_entityApi);
  }
}

export interface JobTypesType<T extends DeSerializers = DefaultDeSerializers> {
  jobTypeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  systemModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  systemModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  systemCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  paidHourly?: NoYes | null;
  systemCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exemptStatus?: HcmJobTypeExemptStatus | null;
  compensationEligibilityRules: CompensationEligibilityRulesType<T>[];
  benefitRateTiers: BenefitsRateTiersType<T>[];
  jobs: JobsDualWriteType<T>[];
  benefitRateDoubleTiers: BenefitsRateDoubleTiersType<T>[];
  recruitingRequests: RecruitingRequestsType<T>[];
}
