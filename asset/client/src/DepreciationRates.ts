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
import type { DepreciationRatesApi } from './DepreciationRatesApi';

/**
 * This class represents the entity "DepreciationRates" of service "d365_metadata".
 */
export class DepreciationRates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DepreciationRatesType<T>
{
  /**
   * Technical entity name for DepreciationRates.
   */
  static override _entityName = 'DepreciationRates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DepreciationRates entity.
   */
  static _keys = ['dataAreaId', 'Name', 'UsefulLife'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Useful Life.
   */
  declare usefulLife: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Osl Dep Rate.
   */
  declare oslDepRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ndb 250 Guaranteed Dep Rate.
   */
  declare ndb250GuaranteedDepRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ndb 200 Dep Rate.
   */
  declare ndb200DepRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ndb 250 Dep Rate.
   */
  declare ndb250DepRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ndb 200 Revised Dep Rate.
   */
  declare ndb200RevisedDepRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Electronic Dep Rate.
   */
  declare electronicDepRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Odb Dep Rate.
   */
  declare odbDepRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ndb 250 Revised Dep Rate.
   */
  declare ndb250RevisedDepRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Nsl Dep Rate.
   */
  declare nslDepRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ndb 200 Guaranteed Dep Rate.
   */
  declare ndb200GuaranteedDepRate: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: DepreciationRatesApi<T>) {
    super(_entityApi);
  }
}

export interface DepreciationRatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  usefulLife: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  oslDepRate: DeserializedType<T, 'Edm.Decimal'>;
  ndb250GuaranteedDepRate: DeserializedType<T, 'Edm.Decimal'>;
  ndb200DepRate: DeserializedType<T, 'Edm.Decimal'>;
  ndb250DepRate: DeserializedType<T, 'Edm.Decimal'>;
  ndb200RevisedDepRate: DeserializedType<T, 'Edm.Decimal'>;
  electronicDepRate: DeserializedType<T, 'Edm.Decimal'>;
  odbDepRate: DeserializedType<T, 'Edm.Decimal'>;
  ndb250RevisedDepRate: DeserializedType<T, 'Edm.Decimal'>;
  nslDepRate: DeserializedType<T, 'Edm.Decimal'>;
  ndb200GuaranteedDepRate: DeserializedType<T, 'Edm.Decimal'>;
}
