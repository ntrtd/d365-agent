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
import type { RefinancingRateApi } from './RefinancingRateApi';

/**
 * This class represents the entity "RefinancingRate" of service "d365_metadata".
 */
export class RefinancingRate<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RefinancingRateType<T>
{
  /**
   * Technical entity name for RefinancingRate.
   */
  static override _entityName = 'RefinancingRate';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RefinancingRate entity.
   */
  static _keys = ['dataAreaId', 'FromDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Percent.
   */
  declare percent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Factor.
   */
  declare factor: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RefinancingRateApi<T>) {
    super(_entityApi);
  }
}

export interface RefinancingRateType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  percent: DeserializedType<T, 'Edm.Decimal'>;
  factor: DeserializedType<T, 'Edm.Decimal'>;
}
