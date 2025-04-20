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
import type { LedgerJournalCostLinesPurchTablesApi } from './LedgerJournalCostLinesPurchTablesApi';

/**
 * This class represents the entity "LedgerJournalCostLinesPurchTables" of service "d365_metadata".
 */
export class LedgerJournalCostLinesPurchTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerJournalCostLinesPurchTablesType<T>
{
  /**
   * Technical entity name for LedgerJournalCostLinesPurchTables.
   */
  static override _entityName = 'LedgerJournalCostLinesPurchTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerJournalCostLinesPurchTables entity.
   */
  static _keys = [
    'dataAreaId',
    'JournalNum',
    'JournalLineNumber',
    'PurchaseOrderId',
    'CostTransactionLineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Num.
   */
  declare journalNum: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Line Number.
   */
  declare journalLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Order Id.
   */
  declare purchaseOrderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Transaction Line Number.
   */
  declare costTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: LedgerJournalCostLinesPurchTablesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerJournalCostLinesPurchTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNum: DeserializedType<T, 'Edm.String'>;
  journalLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  purchaseOrderId: DeserializedType<T, 'Edm.String'>;
  costTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
}
