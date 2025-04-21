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
import type { RTax25StdRateTransesApi } from './RTax25StdRateTransesApi';
import { RateCriterionTypeRu } from './RateCriterionTypeRu';

/**
 * This class represents the entity "RTax25StdRateTranses" of service "d365_metadata".
 */
export class RTax25StdRateTranses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RTax25StdRateTransesType<T>
{
  /**
   * Technical entity name for RTax25StdRateTranses.
   */
  static override _entityName = 'RTax25StdRateTranses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RTax25StdRateTranses entity.
   */
  static _keys = ['dataAreaId', 'LineId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Id.
   */
  declare lineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Criterion Type.
   * @nullable
   */
  declare criterionType?: RateCriterionTypeRu | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Rate Code.
   * @nullable
   */
  declare rateCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RTax25StdRateTransesApi<T>) {
    super(_entityApi);
  }
}

export interface RTax25StdRateTransesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineId: DeserializedType<T, 'Edm.Guid'>;
  value: DeserializedType<T, 'Edm.Decimal'>;
  criterionType?: RateCriterionTypeRu | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  rateCode?: DeserializedType<T, 'Edm.String'> | null;
}
