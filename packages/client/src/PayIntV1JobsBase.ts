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
import type { PayIntV1JobsBaseApi } from './PayIntV1JobsBaseApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PayIntV1JobsBase" of service "d365_metadata".
 */
export class PayIntV1JobsBase<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PayIntV1JobsBaseType<T>
{
  /**
   * Technical entity name for PayIntV1JobsBase.
   */
  static override _entityName = 'PayIntV1JobsBase';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1JobsBase entity.
   */
  static _keys = ['JobId'];
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maximum Number Of Positions.
   */
  declare maximumNumberOfPositions: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Allow Unlimited Positions.
   * @nullable
   */
  declare allowUnlimitedPositions?: NoYes | null;

  constructor(_entityApi: PayIntV1JobsBaseApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1JobsBaseType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobId: DeserializedType<T, 'Edm.String'>;
  maximumNumberOfPositions: DeserializedType<T, 'Edm.Int32'>;
  allowUnlimitedPositions?: NoYes | null;
}
