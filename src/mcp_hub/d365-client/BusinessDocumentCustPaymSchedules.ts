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
import type { BusinessDocumentCustPaymSchedulesApi } from './BusinessDocumentCustPaymSchedulesApi';
import { NoYes } from './NoYes';
import {
  BusinessDocumentSalesInvoiceBases,
  BusinessDocumentSalesInvoiceBasesType
} from './BusinessDocumentSalesInvoiceBases';

/**
 * This class represents the entity "BusinessDocumentCustPaymSchedules" of service "d365_metadata".
 */
export class BusinessDocumentCustPaymSchedules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessDocumentCustPaymSchedulesType<T>
{
  /**
   * Technical entity name for BusinessDocumentCustPaymSchedules.
   */
  static override _entityName = 'BusinessDocumentCustPaymSchedules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessDocumentCustPaymSchedules entity.
   */
  static _keys = ['dataAreaId', 'ScheduleLineRecId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Schedule Line Rec Id.
   */
  declare scheduleLineRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Due Amount.
   */
  declare dueAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Disc Date.
   */
  declare discDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ext Rec Id.
   */
  declare extRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ext Table Id.
   */
  declare extTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Split Payment.
   * @nullable
   */
  declare splitPayment?: NoYes | null;
  /**
   * Disc Amount.
   */
  declare discAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link BusinessDocumentSalesInvoiceBases} entity.
   */
  declare businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBases<T> | null;

  constructor(_entityApi: BusinessDocumentCustPaymSchedulesApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessDocumentCustPaymSchedulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  scheduleLineRecId: DeserializedType<T, 'Edm.Int64'>;
  dueAmount: DeserializedType<T, 'Edm.Decimal'>;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  discDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  extRecId: DeserializedType<T, 'Edm.Int64'>;
  extTableId: DeserializedType<T, 'Edm.Int32'>;
  splitPayment?: NoYes | null;
  discAmount: DeserializedType<T, 'Edm.Decimal'>;
  businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBasesType<T> | null;
}
