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
import type { LedgerJournalCostLinesPurchLineTablesApi } from './LedgerJournalCostLinesPurchLineTablesApi';

/**
 * This class represents the entity "LedgerJournalCostLinesPurchLineTables" of service "d365_metadata".
 */
export class LedgerJournalCostLinesPurchLineTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerJournalCostLinesPurchLineTablesType<T>
{
  /**
   * Technical entity name for LedgerJournalCostLinesPurchLineTables.
   */
  static override _entityName = 'LedgerJournalCostLinesPurchLineTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerJournalCostLinesPurchLineTables entity.
   */
  static _keys = [
    'dataAreaId',
    'JournalNum',
    'JournalLineNumber',
    'PurchaseOrderId',
    'PurchaseOrderLineNumber',
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
   * Purchase Order Line Number.
   */
  declare purchaseOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cost Transaction Line Number.
   */
  declare costTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: LedgerJournalCostLinesPurchLineTablesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerJournalCostLinesPurchLineTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNum: DeserializedType<T, 'Edm.String'>;
  journalLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  purchaseOrderId: DeserializedType<T, 'Edm.String'>;
  purchaseOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  costTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
}
