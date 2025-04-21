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
import type { RetailTransactionTable_RubiEntitiesApi } from './RetailTransactionTable_RubiEntitiesApi';

/**
 * This class represents the entity "RetailTransactionTable_RUBIEntities" of service "d365_metadata".
 */
export class RetailTransactionTable_RubiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionTable_RubiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionTable_RubiEntities.
   */
  static override _entityName = 'RetailTransactionTable_RUBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionTable_RubiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'Store',
    'Terminal',
    'TransactionId',
    'Channel'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store.
   */
  declare store: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Channel.
   */
  declare channel: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Printer Serial Number.
   * @nullable
   */
  declare fiscalPrinterSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Origin.
   * @nullable
   */
  declare origin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Printer Shift Id.
   * @nullable
   */
  declare fiscalPrinterShiftId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eklz Serial Number.
   * @nullable
   */
  declare eklzSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Kpk Number.
   * @nullable
   */
  declare kpkNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Document Serial Number.
   * @nullable
   */
  declare fiscalDocumentSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replication Counter From Origin.
   */
  declare replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: RetailTransactionTable_RubiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionTable_RubiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  channel: DeserializedType<T, 'Edm.Int64'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  fiscalPrinterSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  origin?: DeserializedType<T, 'Edm.String'> | null;
  fiscalPrinterShiftId?: DeserializedType<T, 'Edm.String'> | null;
  eklzSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  kpkNumber?: DeserializedType<T, 'Edm.String'> | null;
  fiscalDocumentSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
