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
import type { BusinessDocumentNonStockedPackingSlipLinesV3Api } from './BusinessDocumentNonStockedPackingSlipLinesV3Api';
import {
  BusinessDocumentSalesInvoiceLineItems,
  BusinessDocumentSalesInvoiceLineItemsType
} from './BusinessDocumentSalesInvoiceLineItems';
import {
  BusinessDocumentSalesInvoiceBases,
  BusinessDocumentSalesInvoiceBasesType
} from './BusinessDocumentSalesInvoiceBases';

/**
 * This class represents the entity "BusinessDocumentNonStockedPackingSlipLinesV3" of service "d365_metadata".
 */
export class BusinessDocumentNonStockedPackingSlipLinesV3<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessDocumentNonStockedPackingSlipLinesV3Type<T>
{
  /**
   * Technical entity name for BusinessDocumentNonStockedPackingSlipLinesV3.
   */
  static override _entityName = 'BusinessDocumentNonStockedPackingSlipLinesV3';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessDocumentNonStockedPackingSlipLinesV3 entity.
   */
  static _keys = [
    'dataAreaId',
    'SalesId',
    'PackingSlipId',
    'DeliveryDate',
    'LineNum',
    'OrigSalesId',
    'InvoiceId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Id.
   */
  declare salesId: DeserializedType<T, 'Edm.String'>;
  /**
   * Packing Slip Id.
   */
  declare packingSlipId: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Orig Sales Id.
   */
  declare origSalesId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Id.
   */
  declare invoiceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Jour Rec Id.
   */
  declare invoiceJourRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invoice Trans Rec Id.
   */
  declare invoiceTransRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link BusinessDocumentSalesInvoiceLineItems} entity.
   */
  declare businessDocumentSalesInvoiceLineItem?: BusinessDocumentSalesInvoiceLineItems<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessDocumentSalesInvoiceBases} entity.
   */
  declare businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBases<T> | null;

  constructor(_entityApi: BusinessDocumentNonStockedPackingSlipLinesV3Api<T>) {
    super(_entityApi);
  }
}

export interface BusinessDocumentNonStockedPackingSlipLinesV3Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesId: DeserializedType<T, 'Edm.String'>;
  packingSlipId: DeserializedType<T, 'Edm.String'>;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  origSalesId: DeserializedType<T, 'Edm.String'>;
  invoiceId: DeserializedType<T, 'Edm.String'>;
  invoiceJourRecId: DeserializedType<T, 'Edm.Int64'>;
  invoiceTransRecId: DeserializedType<T, 'Edm.Int64'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  businessDocumentSalesInvoiceLineItem?: BusinessDocumentSalesInvoiceLineItemsType<T> | null;
  businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBasesType<T> | null;
}
