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
import type { RTax25StdRateCritTransesApi } from './RTax25StdRateCritTransesApi';

/**
 * This class represents the entity "RTax25StdRateCritTranses" of service "d365_metadata".
 */
export class RTax25StdRateCritTranses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RTax25StdRateCritTransesType<T>
{
  /**
   * Technical entity name for RTax25StdRateCritTranses.
   */
  static override _entityName = 'RTax25StdRateCritTranses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RTax25StdRateCritTranses entity.
   */
  static _keys = ['dataAreaId', 'RateTransLineId', 'ForAmount'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rate Trans Line Id.
   */
  declare rateTransLineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * For Amount.
   */
  declare forAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RTax25StdRateCritTransesApi<T>) {
    super(_entityApi);
  }
}

export interface RTax25StdRateCritTransesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rateTransLineId: DeserializedType<T, 'Edm.Guid'>;
  forAmount: DeserializedType<T, 'Edm.Decimal'>;
  value: DeserializedType<T, 'Edm.Decimal'>;
}
