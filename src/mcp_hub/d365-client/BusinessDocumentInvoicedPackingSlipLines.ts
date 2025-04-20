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
import type { BusinessDocumentInvoicedPackingSlipLinesApi } from './BusinessDocumentInvoicedPackingSlipLinesApi';
import {
  BusinessDocumentSalesInvoiceBases,
  BusinessDocumentSalesInvoiceBasesType
} from './BusinessDocumentSalesInvoiceBases';
import {
  BusinessDocumentSalesInvoiceLineItems,
  BusinessDocumentSalesInvoiceLineItemsType
} from './BusinessDocumentSalesInvoiceLineItems';

/**
 * This class represents the entity "BusinessDocumentInvoicedPackingSlipLines" of service "d365_metadata".
 */
export class BusinessDocumentInvoicedPackingSlipLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessDocumentInvoicedPackingSlipLinesType<T>
{
  /**
   * Technical entity name for BusinessDocumentInvoicedPackingSlipLines.
   */
  static override _entityName = 'BusinessDocumentInvoicedPackingSlipLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessDocumentInvoicedPackingSlipLines entity.
   */
  static _keys = [
    'dataAreaId',
    'SalesId',
    'PackingSlipId',
    'DeliveryDate',
    'LineNum'
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
   * Invoice Jour Rec Id.
   */
  declare invoiceJourRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Item Bar Code.
   * @nullable
   */
  declare itemBarCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Trans Rec Id.
   */
  declare invoiceTransRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link BusinessDocumentSalesInvoiceBases} entity.
   */
  declare businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBases<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessDocumentSalesInvoiceLineItems} entity.
   */
  declare businessDocumentSalesInvoiceLineItem?: BusinessDocumentSalesInvoiceLineItems<T> | null;

  constructor(_entityApi: BusinessDocumentInvoicedPackingSlipLinesApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessDocumentInvoicedPackingSlipLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesId: DeserializedType<T, 'Edm.String'>;
  packingSlipId: DeserializedType<T, 'Edm.String'>;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  invoiceJourRecId: DeserializedType<T, 'Edm.Int64'>;
  itemBarCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceTransRecId: DeserializedType<T, 'Edm.Int64'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBasesType<T> | null;
  businessDocumentSalesInvoiceLineItem?: BusinessDocumentSalesInvoiceLineItemsType<T> | null;
}
