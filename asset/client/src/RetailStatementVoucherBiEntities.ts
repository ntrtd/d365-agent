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
import type { RetailStatementVoucherBiEntitiesApi } from './RetailStatementVoucherBiEntitiesApi';

/**
 * This class represents the entity "RetailStatementVoucherBIEntities" of service "d365_metadata".
 */
export class RetailStatementVoucherBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailStatementVoucherBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailStatementVoucherBiEntities.
   */
  static override _entityName = 'RetailStatementVoucherBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailStatementVoucherBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Statement Id.
   * @nullable
   */
  declare statementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher Date.
   */
  declare voucherDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: RetailStatementVoucherBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailStatementVoucherBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  statementId?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  voucherDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
