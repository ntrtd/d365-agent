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
import type { LedgerJournalCostLinesInventTransferLineTablesApi } from './LedgerJournalCostLinesInventTransferLineTablesApi';

/**
 * This class represents the entity "LedgerJournalCostLinesInventTransferLineTables" of service "d365_metadata".
 */
export class LedgerJournalCostLinesInventTransferLineTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerJournalCostLinesInventTransferLineTablesType<T>
{
  /**
   * Technical entity name for LedgerJournalCostLinesInventTransferLineTables.
   */
  static override _entityName =
    'LedgerJournalCostLinesInventTransferLineTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerJournalCostLinesInventTransferLineTables entity.
   */
  static _keys = [
    'dataAreaId',
    'JournalNum',
    'JournalLineNumber',
    'TransferId',
    'TransferLineNumber',
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
   * Transfer Id.
   */
  declare transferId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transfer Line Number.
   */
  declare transferLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cost Transaction Line Number.
   */
  declare costTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(
    _entityApi: LedgerJournalCostLinesInventTransferLineTablesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface LedgerJournalCostLinesInventTransferLineTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNum: DeserializedType<T, 'Edm.String'>;
  journalLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  transferId: DeserializedType<T, 'Edm.String'>;
  transferLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  costTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
}
