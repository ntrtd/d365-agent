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
import type { JobFunctionsApi } from './JobFunctionsApi';
import { HcmRegulatoryJobCategory } from './HcmRegulatoryJobCategory';
import {
  CompensationEligibilityRules,
  CompensationEligibilityRulesType
} from './CompensationEligibilityRules';
import { JobsDualWrite, JobsDualWriteType } from './JobsDualWrite';
import { PositionTimelines, PositionTimelinesType } from './PositionTimelines';

/**
 * This class represents the entity "JobFunctions" of service "d365_metadata".
 */
export class JobFunctions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JobFunctionsType<T>
{
  /**
   * Technical entity name for JobFunctions.
   */
  static override _entityName = 'JobFunctions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobFunctions entity.
   */
  static _keys = ['JobFunctionId'];
  /**
   * Job Function Id.
   */
  declare jobFunctionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Regulatory Job Category.
   * @nullable
   */
  declare regulatoryJobCategory?: HcmRegulatoryJobCategory | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CompensationEligibilityRules} entity.
   */
  declare compensationEligibilityRules: CompensationEligibilityRules<T>[];
  /**
   * One-to-many navigation property to the {@link JobsDualWrite} entity.
   */
  declare jobs: JobsDualWrite<T>[];
  /**
   * One-to-many navigation property to the {@link PositionTimelines} entity.
   */
  declare positionTimeline: PositionTimelines<T>[];

  constructor(_entityApi: JobFunctionsApi<T>) {
    super(_entityApi);
  }
}

export interface JobFunctionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobFunctionId: DeserializedType<T, 'Edm.String'>;
  regulatoryJobCategory?: HcmRegulatoryJobCategory | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  compensationEligibilityRules: CompensationEligibilityRulesType<T>[];
  jobs: JobsDualWriteType<T>[];
  positionTimeline: PositionTimelinesType<T>[];
}
