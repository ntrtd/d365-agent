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
import type { BusinessDocumentMarkupTransactionsApi } from './BusinessDocumentMarkupTransactionsApi';
import { MarkupType } from './MarkupType';
import {
  BusinessDocumentTaxTransactions,
  BusinessDocumentTaxTransactionsType
} from './BusinessDocumentTaxTransactions';
import {
  BusinessDocumentSalesInvoiceLineItems,
  BusinessDocumentSalesInvoiceLineItemsType
} from './BusinessDocumentSalesInvoiceLineItems';
import {
  BusinessDocumentSalesInvoiceBases,
  BusinessDocumentSalesInvoiceBasesType
} from './BusinessDocumentSalesInvoiceBases';

/**
 * This class represents the entity "BusinessDocumentMarkupTransactions" of service "d365_metadata".
 */
export class BusinessDocumentMarkupTransactions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessDocumentMarkupTransactionsType<T>
{
  /**
   * Technical entity name for BusinessDocumentMarkupTransactions.
   */
  static override _entityName = 'BusinessDocumentMarkupTransactions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessDocumentMarkupTransactions entity.
   */
  static _keys = ['dataAreaId', 'TransRecId', 'TransTableId', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trans Rec Id.
   */
  declare transRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Trans Table Id.
   */
  declare transTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Txt.
   * @nullable
   */
  declare txt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Type.
   * @nullable
   */
  declare custType?: MarkupType | null;
  /**
   * Markup Trans Rec Id.
   */
  declare markupTransRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Calculated Amount.
   */
  declare calculatedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Markup Code.
   * @nullable
   */
  declare markupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Markup Trans Table Id.
   */
  declare markupTransTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link BusinessDocumentTaxTransactions} entity.
   */
  declare businessDocumentTaxTransaction: BusinessDocumentTaxTransactions<T>[];
  /**
   * One-to-one navigation property to the {@link BusinessDocumentSalesInvoiceLineItems} entity.
   */
  declare businessDocumentSalesInvoiceLineItem?: BusinessDocumentSalesInvoiceLineItems<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessDocumentSalesInvoiceBases} entity.
   */
  declare businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBases<T> | null;

  constructor(_entityApi: BusinessDocumentMarkupTransactionsApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessDocumentMarkupTransactionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transRecId: DeserializedType<T, 'Edm.Int64'>;
  transTableId: DeserializedType<T, 'Edm.Int32'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  txt?: DeserializedType<T, 'Edm.String'> | null;
  custType?: MarkupType | null;
  markupTransRecId: DeserializedType<T, 'Edm.Int64'>;
  calculatedAmount: DeserializedType<T, 'Edm.Decimal'>;
  markupCode?: DeserializedType<T, 'Edm.String'> | null;
  markupTransTableId: DeserializedType<T, 'Edm.Int32'>;
  businessDocumentTaxTransaction: BusinessDocumentTaxTransactionsType<T>[];
  businessDocumentSalesInvoiceLineItem?: BusinessDocumentSalesInvoiceLineItemsType<T> | null;
  businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBasesType<T> | null;
}
