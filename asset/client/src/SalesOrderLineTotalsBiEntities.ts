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
import type { SalesOrderLineTotalsBiEntitiesApi } from './SalesOrderLineTotalsBiEntitiesApi';

/**
 * This class represents the entity "SalesOrderLineTotalsBiEntities" of service "d365_metadata".
 */
export class SalesOrderLineTotalsBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderLineTotalsBiEntitiesType<T>
{
  /**
   * Technical entity name for SalesOrderLineTotalsBiEntities.
   */
  static override _entityName = 'SalesOrderLineTotalsBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesOrderLineTotalsBiEntities entity.
   */
  static _keys = ['dataAreaId', 'InventTransId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Trans Id.
   */
  declare inventTransId: DeserializedType<T, 'Edm.String'>;
  /**
   * Total Tax Amount.
   */
  declare totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Total Charges Amount.
   */
  declare totalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Discount Amount.
   */
  declare totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Last Updated Date Time.
   */
  declare lastUpdatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Id.
   * @nullable
   */
  declare salesId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SalesOrderLineTotalsBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderLineTotalsBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventTransId: DeserializedType<T, 'Edm.String'>;
  totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  totalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  lastUpdatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesId?: DeserializedType<T, 'Edm.String'> | null;
}
