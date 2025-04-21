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
import type { LedgerTransSettlementBiEntitiesApi } from './LedgerTransSettlementBiEntitiesApi';

/**
 * This class represents the entity "LedgerTransSettlementBiEntities" of service "d365_metadata".
 */
export class LedgerTransSettlementBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerTransSettlementBiEntitiesType<T>
{
  /**
   * Technical entity name for LedgerTransSettlementBiEntities.
   */
  static override _entityName = 'LedgerTransSettlementBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerTransSettlementBiEntities entity.
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
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Trans Rec Id.
   */
  declare transRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Automation Rule.
   * @nullable
   */
  declare automationRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settle Date.
   */
  declare settleDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Settle Id.
   * @nullable
   */
  declare settleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Processed.
   */
  declare dateProcessed: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: LedgerTransSettlementBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerTransSettlementBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  transRecId: DeserializedType<T, 'Edm.Int64'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  automationRule?: DeserializedType<T, 'Edm.String'> | null;
  settleDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  settleId?: DeserializedType<T, 'Edm.String'> | null;
  dateProcessed: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
