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
import type { CostAccountingDataConnectorGeneralLedgersApi } from './CostAccountingDataConnectorGeneralLedgersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CostAccountingDataConnectorGeneralLedgers" of service "d365_metadata".
 */
export class CostAccountingDataConnectorGeneralLedgers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostAccountingDataConnectorGeneralLedgersType<T>
{
  /**
   * Technical entity name for CostAccountingDataConnectorGeneralLedgers.
   */
  static override _entityName = 'CostAccountingDataConnectorGeneralLedgers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingDataConnectorGeneralLedgers entity.
   */
  static _keys = ['DataConnectorSystemInstanceSurrogateKey', 'SurrogateKey'];
  /**
   * Data Connector System Instance Surrogate Key.
   */
  declare dataConnectorSystemInstanceSurrogateKey: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Surrogate Key.
   */
  declare surrogateKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Transfer General Ledger Entries From Date.
   */
  declare transferGeneralLedgerEntriesFromDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Data Connector Data Transfer Surrogate Key.
   * @nullable
   */
  declare dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Accounting Currency.
   * @nullable
   */
  declare accountingCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Must Transfer General Ledger Entries.
   * @nullable
   */
  declare mustTransferGeneralLedgerEntries?: NoYes | null;
  /**
   * Transfer General Ledger Entries To Date.
   */
  declare transferGeneralLedgerEntriesToDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chart Of Accounts Name.
   * @nullable
   */
  declare chartOfAccountsName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CostAccountingDataConnectorGeneralLedgersApi<T>) {
    super(_entityApi);
  }
}

export interface CostAccountingDataConnectorGeneralLedgersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>;
  surrogateKey: DeserializedType<T, 'Edm.String'>;
  transferGeneralLedgerEntriesFromDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  accountingCurrency?: DeserializedType<T, 'Edm.String'> | null;
  mustTransferGeneralLedgerEntries?: NoYes | null;
  transferGeneralLedgerEntriesToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  chartOfAccountsName?: DeserializedType<T, 'Edm.String'> | null;
}
