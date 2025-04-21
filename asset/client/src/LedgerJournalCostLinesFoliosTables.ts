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
import type { LedgerJournalCostLinesFoliosTablesApi } from './LedgerJournalCostLinesFoliosTablesApi';

/**
 * This class represents the entity "LedgerJournalCostLinesFoliosTables" of service "d365_metadata".
 */
export class LedgerJournalCostLinesFoliosTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerJournalCostLinesFoliosTablesType<T>
{
  /**
   * Technical entity name for LedgerJournalCostLinesFoliosTables.
   */
  static override _entityName = 'LedgerJournalCostLinesFoliosTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerJournalCostLinesFoliosTables entity.
   */
  static _keys = [
    'dataAreaId',
    'JournalNum',
    'JournalLineNumber',
    'ShipFolioId',
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
   * Ship Folio Id.
   */
  declare shipFolioId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Transaction Line Number.
   */
  declare costTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: LedgerJournalCostLinesFoliosTablesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerJournalCostLinesFoliosTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNum: DeserializedType<T, 'Edm.String'>;
  journalLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  shipFolioId: DeserializedType<T, 'Edm.String'>;
  costTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
}
