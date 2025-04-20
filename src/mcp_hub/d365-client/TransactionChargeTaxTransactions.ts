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
import type { TransactionChargeTaxTransactionsApi } from './TransactionChargeTaxTransactionsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "TransactionChargeTaxTransactions" of service "d365_metadata".
 */
export class TransactionChargeTaxTransactions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransactionChargeTaxTransactionsType<T>
{
  /**
   * Technical entity name for TransactionChargeTaxTransactions.
   */
  static override _entityName = 'TransactionChargeTaxTransactions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransactionChargeTaxTransactions entity.
   */
  static _keys = [
    'dataAreaId',
    'OperatingUnitNumber',
    'StoreId',
    'TerminalId',
    'TransactionId',
    'SaleLineNumber',
    'MarkupLineNumber',
    'TaxCode'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Id.
   */
  declare storeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal Id.
   */
  declare terminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sale Line Number.
   */
  declare saleLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Markup Line Number.
   */
  declare markupLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Code.
   */
  declare taxCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Exempt.
   * @nullable
   */
  declare isExempt?: NoYes | null;
  /**
   * Is Included In Price.
   * @nullable
   */
  declare isIncludedInPrice?: NoYes | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: TransactionChargeTaxTransactionsApi<T>) {
    super(_entityApi);
  }
}

export interface TransactionChargeTaxTransactionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  storeId: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  saleLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  markupLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  taxCode: DeserializedType<T, 'Edm.String'>;
  isExempt?: NoYes | null;
  isIncludedInPrice?: NoYes | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
}
