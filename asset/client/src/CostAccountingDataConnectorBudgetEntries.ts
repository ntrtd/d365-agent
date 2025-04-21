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
import type { CostAccountingDataConnectorBudgetEntriesApi } from './CostAccountingDataConnectorBudgetEntriesApi';
import { CamDebitCredit } from './CamDebitCredit';

/**
 * This class represents the entity "CostAccountingDataConnectorBudgetEntries" of service "d365_metadata".
 */
export class CostAccountingDataConnectorBudgetEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostAccountingDataConnectorBudgetEntriesType<T>
{
  /**
   * Technical entity name for CostAccountingDataConnectorBudgetEntries.
   */
  static override _entityName = 'CostAccountingDataConnectorBudgetEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingDataConnectorBudgetEntries entity.
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
   * Data Connector Legal Entity Name.
   * @nullable
   */
  declare dataConnectorLegalEntityName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Data Connector Budget Model Name.
   * @nullable
   */
  declare dataConnectorBudgetModelName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Main Account Name.
   * @nullable
   */
  declare mainAccountName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Data Connector Budget Entry Type Name.
   * @nullable
   */
  declare dataConnectorBudgetEntryTypeName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Debit Credit.
   * @nullable
   */
  declare debitCredit?: CamDebitCredit | null;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Data Connector Budget Type Name.
   * @nullable
   */
  declare dataConnectorBudgetTypeName?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: CostAccountingDataConnectorBudgetEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface CostAccountingDataConnectorBudgetEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>;
  sourceIdentifier: DeserializedType<T, 'Edm.String'>;
  dataConnectorLegalEntityName?: DeserializedType<T, 'Edm.String'> | null;
  dataConnectorBudgetModelName?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountName?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  dataConnectorBudgetEntryTypeName?: DeserializedType<T, 'Edm.String'> | null;
  debitCredit?: CamDebitCredit | null;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  dataConnectorBudgetTypeName?: DeserializedType<T, 'Edm.String'> | null;
}
