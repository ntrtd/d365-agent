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
import type { LedgerJournalCostLinesContainersTablesApi } from './LedgerJournalCostLinesContainersTablesApi';

/**
 * This class represents the entity "LedgerJournalCostLinesContainersTables" of service "d365_metadata".
 */
export class LedgerJournalCostLinesContainersTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerJournalCostLinesContainersTablesType<T>
{
  /**
   * Technical entity name for LedgerJournalCostLinesContainersTables.
   */
  static override _entityName = 'LedgerJournalCostLinesContainersTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerJournalCostLinesContainersTables entity.
   */
  static _keys = [
    'dataAreaId',
    'JournalNum',
    'JournalLineNumber',
    'ShipId',
    'ShipContainerId',
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
   * Ship Id.
   */
  declare shipId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Container Id.
   */
  declare shipContainerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Transaction Line Number.
   */
  declare costTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: LedgerJournalCostLinesContainersTablesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerJournalCostLinesContainersTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNum: DeserializedType<T, 'Edm.String'>;
  journalLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  shipId: DeserializedType<T, 'Edm.String'>;
  shipContainerId: DeserializedType<T, 'Edm.String'>;
  costTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
}
