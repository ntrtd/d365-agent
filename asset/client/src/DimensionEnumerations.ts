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
import type { DimensionEnumerationsApi } from './DimensionEnumerationsApi';

/**
 * This class represents the entity "DimensionEnumerations" of service "d365_metadata".
 */
export class DimensionEnumerations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimensionEnumerationsType<T>
{
  /**
   * Technical entity name for DimensionEnumerations.
   */
  static override _entityName = 'DimensionEnumerations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimensionEnumerations entity.
   */
  static _keys = ['RecordId'];
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Display Value.
   * @nullable
   */
  declare displayValue?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DimensionEnumerationsApi<T>) {
    super(_entityApi);
  }
}

export interface DimensionEnumerationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  recordId: DeserializedType<T, 'Edm.Int64'>;
  displayValue?: DeserializedType<T, 'Edm.String'> | null;
}
