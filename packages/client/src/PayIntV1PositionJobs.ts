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
import type { PayIntV1PositionJobsApi } from './PayIntV1PositionJobsApi';

/**
 * This class represents the entity "PayIntV1PositionJobs" of service "d365_metadata".
 */
export class PayIntV1PositionJobs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1PositionJobsType<T>
{
  /**
   * Technical entity name for PayIntV1PositionJobs.
   */
  static override _entityName = 'PayIntV1PositionJobs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1PositionJobs entity.
   */
  static _keys = ['PositionId', 'JobId', 'ValidFrom'];
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: PayIntV1PositionJobsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1PositionJobsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  jobId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
