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
import type { LeaseIndexRatesApi } from './LeaseIndexRatesApi';
import { AssetLeaseIndexRateMethod } from './AssetLeaseIndexRateMethod';

/**
 * This class represents the entity "LeaseIndexRates" of service "d365_metadata".
 */
export class LeaseIndexRates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LeaseIndexRatesType<T>
{
  /**
   * Technical entity name for LeaseIndexRates.
   */
  static override _entityName = 'LeaseIndexRates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseIndexRates entity.
   */
  static _keys = ['IndexRateTypeName', 'StartDate'];
  /**
   * Index Rate Type Name.
   */
  declare indexRateTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Index Rate Method.
   * @nullable
   */
  declare indexRateMethod?: AssetLeaseIndexRateMethod | null;
  /**
   * Index Rate Type Description.
   * @nullable
   */
  declare indexRateTypeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Index Rate.
   */
  declare indexRate: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: LeaseIndexRatesApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseIndexRatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  indexRateTypeName: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  indexRateMethod?: AssetLeaseIndexRateMethod | null;
  indexRateTypeDescription?: DeserializedType<T, 'Edm.String'> | null;
  indexRate: DeserializedType<T, 'Edm.Decimal'>;
}
