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
import type { RbslFactorsApi } from './RbslFactorsApi';

/**
 * This class represents the entity "RBSLFactors" of service "d365_metadata".
 */
export class RbslFactors<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RbslFactorsType<T>
{
  /**
   * Technical entity name for RbslFactors.
   */
  static override _entityName = 'RBSLFactors';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RbslFactors entity.
   */
  static _keys = ['dataAreaId', 'FromDate', 'Years', 'Months'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Years.
   */
  declare years: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Months.
   */
  declare months: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Asset Rbsl Factor.
   */
  declare assetRbslFactor: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RbslFactorsApi<T>) {
    super(_entityApi);
  }
}

export interface RbslFactorsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  years: DeserializedType<T, 'Edm.Int32'>;
  months: DeserializedType<T, 'Edm.Int32'>;
  assetRbslFactor: DeserializedType<T, 'Edm.Decimal'>;
}
