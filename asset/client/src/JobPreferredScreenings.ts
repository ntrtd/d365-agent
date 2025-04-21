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
import type { JobPreferredScreeningsApi } from './JobPreferredScreeningsApi';
import { Jobs, JobsType } from './Jobs';
import { ScreeningTypes, ScreeningTypesType } from './ScreeningTypes';

/**
 * This class represents the entity "JobPreferredScreenings" of service "d365_metadata".
 */
export class JobPreferredScreenings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements JobPreferredScreeningsType<T>
{
  /**
   * Technical entity name for JobPreferredScreenings.
   */
  static override _entityName = 'JobPreferredScreenings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobPreferredScreenings entity.
   */
  static _keys = ['JobId', 'ScreeningTypeId'];
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
  /**
   * Screening Type Id.
   */
  declare screeningTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link Jobs} entity.
   */
  declare job?: Jobs<T> | null;
  /**
   * One-to-one navigation property to the {@link ScreeningTypes} entity.
   */
  declare screeningType?: ScreeningTypes<T> | null;

  constructor(_entityApi: JobPreferredScreeningsApi<T>) {
    super(_entityApi);
  }
}

export interface JobPreferredScreeningsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobId: DeserializedType<T, 'Edm.String'>;
  screeningTypeId: DeserializedType<T, 'Edm.String'>;
  job?: JobsType<T> | null;
  screeningType?: ScreeningTypesType<T> | null;
}
