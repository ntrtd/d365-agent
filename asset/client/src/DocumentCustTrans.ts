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
import type { DocumentCustTransApi } from './DocumentCustTransApi';
import { LedgerTransType } from './LedgerTransType';
import {
  DocumentProjectInvoiceBases,
  DocumentProjectInvoiceBasesType
} from './DocumentProjectInvoiceBases';
import {
  BusinessDocumentSalesInvoiceBases,
  BusinessDocumentSalesInvoiceBasesType
} from './BusinessDocumentSalesInvoiceBases';

/**
 * This class represents the entity "DocumentCustTrans" of service "d365_metadata".
 */
export class DocumentCustTrans<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DocumentCustTransType<T>
{
  /**
   * Technical entity name for DocumentCustTrans.
   */
  static override _entityName = 'DocumentCustTrans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentCustTrans entity.
   */
  static _keys = ['dataAreaId', 'TransDate', 'Voucher', 'Invoice'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Voucher.
   */
  declare voucher: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice.
   */
  declare invoice: DeserializedType<T, 'Edm.String'>;
  /**
   * Data Area.
   * @nullable
   */
  declare dataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Type.
   * @nullable
   */
  declare transType?: LedgerTransType | null;
  /**
   * Account Num.
   * @nullable
   */
  declare accountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Trans Rec Id.
   */
  declare custTransRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Amount Cur.
   */
  declare amountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Trans Type Str.
   * @nullable
   */
  declare transTypeStr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DocumentProjectInvoiceBases} entity.
   */
  declare documentProjectInvoiceBase?: DocumentProjectInvoiceBases<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessDocumentSalesInvoiceBases} entity.
   */
  declare businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBases<T> | null;

  constructor(_entityApi: DocumentCustTransApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentCustTransType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  voucher: DeserializedType<T, 'Edm.String'>;
  invoice: DeserializedType<T, 'Edm.String'>;
  dataArea?: DeserializedType<T, 'Edm.String'> | null;
  transType?: LedgerTransType | null;
  accountNum?: DeserializedType<T, 'Edm.String'> | null;
  custTransRecId: DeserializedType<T, 'Edm.Int64'>;
  amountCur: DeserializedType<T, 'Edm.Decimal'>;
  transTypeStr?: DeserializedType<T, 'Edm.String'> | null;
  documentProjectInvoiceBase?: DocumentProjectInvoiceBasesType<T> | null;
  businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBasesType<T> | null;
}
