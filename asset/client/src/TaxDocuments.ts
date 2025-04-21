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
import type { TaxDocumentsApi } from './TaxDocumentsApi';
import { TaxTypeW } from './TaxTypeW';

/**
 * This class represents the entity "TaxDocuments" of service "d365_metadata".
 */
export class TaxDocuments<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxDocumentsType<T>
{
  /**
   * Technical entity name for TaxDocuments.
   */
  static override _entityName = 'TaxDocuments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxDocuments entity.
   */
  static _keys = ['dataAreaId', 'TaxDocumentNumber', 'CustVendTransTableId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Document Number.
   */
  declare taxDocumentNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Cust Vend Trans Table Id.
   */
  declare custVendTransTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Document Transaction Tax Amount In Currency.
   */
  declare taxDocumentTransactionTaxAmountInCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Tax Amount In Currency.
   */
  declare taxAmountInCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Credit Memo Transaction Type Of Tax.
   * @nullable
   */
  declare taxCreditMemoTransactionTypeOfTax?: TaxTypeW | null;
  /**
   * Tax Credit Memo Date.
   */
  declare taxCreditMemoDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Credit Memo Transaction Tax Amount In Currency.
   */
  declare taxCreditMemoTransactionTaxAmountInCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Tax Credit Memo Transaction Tax Value.
   */
  declare taxCreditMemoTransactionTaxValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Document Transaction Tax Amount.
   */
  declare taxDocumentTransactionTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Document Date.
   */
  declare taxDocumentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Document Transaction Amount In Transaction Currency.
   */
  declare taxDocumentTransactionAmountInTransactionCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Tax Document Transaction Amount.
   */
  declare taxDocumentTransactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Amount.
   */
  declare taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount In Transaction Currency.
   */
  declare amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Credit Memo Transaction Amount.
   */
  declare taxCreditMemoTransactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Document Transaction Type Of Tax.
   * @nullable
   */
  declare taxDocumentTransactionTypeOfTax?: TaxTypeW | null;
  /**
   * Tax Document Transaction Tax Value.
   */
  declare taxDocumentTransactionTaxValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Credit Memo Transaction Tax Amount.
   */
  declare taxCreditMemoTransactionTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Credit Memo Number.
   * @nullable
   */
  declare taxCreditMemoNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Credit Memo Transaction Amount In Transaction Currency.
   */
  declare taxCreditMemoTransactionAmountInTransactionCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;

  constructor(_entityApi: TaxDocumentsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxDocumentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxDocumentNumber: DeserializedType<T, 'Edm.String'>;
  custVendTransTableId: DeserializedType<T, 'Edm.Int32'>;
  taxDocumentTransactionTaxAmountInCurrency: DeserializedType<T, 'Edm.Decimal'>;
  taxAmountInCurrency: DeserializedType<T, 'Edm.Decimal'>;
  taxCreditMemoTransactionTypeOfTax?: TaxTypeW | null;
  taxCreditMemoDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxCreditMemoTransactionTaxAmountInCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  taxCreditMemoTransactionTaxValue: DeserializedType<T, 'Edm.Decimal'>;
  taxDocumentTransactionTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxDocumentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxDocumentTransactionAmountInTransactionCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  taxDocumentTransactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  taxCreditMemoTransactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxDocumentTransactionTypeOfTax?: TaxTypeW | null;
  taxDocumentTransactionTaxValue: DeserializedType<T, 'Edm.Decimal'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  taxCreditMemoTransactionTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxCreditMemoNumber?: DeserializedType<T, 'Edm.String'> | null;
  taxCreditMemoTransactionAmountInTransactionCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
}
