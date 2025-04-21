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
import type { CostAccountingDataConnectorGeneralLedgerEntriesApi } from './CostAccountingDataConnectorGeneralLedgerEntriesApi';
import { CamDebitCredit } from './CamDebitCredit';

/**
 * This class represents the entity "CostAccountingDataConnectorGeneralLedgerEntries" of service "d365_metadata".
 */
export class CostAccountingDataConnectorGeneralLedgerEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostAccountingDataConnectorGeneralLedgerEntriesType<T>
{
  /**
   * Technical entity name for CostAccountingDataConnectorGeneralLedgerEntries.
   */
  static override _entityName =
    'CostAccountingDataConnectorGeneralLedgerEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingDataConnectorGeneralLedgerEntries entity.
   */
  static _keys = [
    'DataConnectorSystemInstanceSurrogateKey',
    'SourceIdentifier'
  ];
  /**
   * Data Connector System Instance Surrogate Key.
   */
  declare dataConnectorSystemInstanceSurrogateKey: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Source Identifier.
   */
  declare sourceIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Connector Data Transfer Surrogate Key.
   * @nullable
   */
  declare dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Data Connector General Ledger Name.
   * @nullable
   */
  declare dataConnectorGeneralLedgerName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Debit Credit.
   * @nullable
   */
  declare debitCredit?: CamDebitCredit | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Main Account Name.
   * @nullable
   */
  declare mainAccountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Connector Posting Layer Name.
   * @nullable
   */
  declare dataConnectorPostingLayerName?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(
    _entityApi: CostAccountingDataConnectorGeneralLedgerEntriesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface CostAccountingDataConnectorGeneralLedgerEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>;
  sourceIdentifier: DeserializedType<T, 'Edm.String'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  dataConnectorGeneralLedgerName?: DeserializedType<T, 'Edm.String'> | null;
  debitCredit?: CamDebitCredit | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  mainAccountName?: DeserializedType<T, 'Edm.String'> | null;
  dataConnectorPostingLayerName?: DeserializedType<T, 'Edm.String'> | null;
}
