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
import type { ConsInvoicesCustApi } from './ConsInvoicesCustApi';
import { CustVendConsInvoiceStatusJp } from './CustVendConsInvoiceStatusJp';

/**
 * This class represents the entity "ConsInvoicesCust" of service "d365_metadata".
 */
export class ConsInvoicesCust<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ConsInvoicesCustType<T>
{
  /**
   * Technical entity name for ConsInvoicesCust.
   */
  static override _entityName = 'ConsInvoicesCust';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ConsInvoicesCust entity.
   */
  static _keys = ['dataAreaId', 'ConsolidationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Consolidation Id.
   */
  declare consolidationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Previously Paid Amount.
   */
  declare previouslyPaidAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax.
   */
  declare salesTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Amount During Consolidation Period.
   */
  declare invoiceAmountDuringConsolidationPeriod: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Adjustment Amount.
   */
  declare adjustmentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reference Consolidation Id.
   * @nullable
   */
  declare referenceConsolidationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Execution Date.
   */
  declare executionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Consolidation Date.
   */
  declare consolidationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Terms Of Payment.
   * @nullable
   */
  declare termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Previous Invoice Amount.
   */
  declare previousInvoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: CustVendConsInvoiceStatusJp | null;

  constructor(_entityApi: ConsInvoicesCustApi<T>) {
    super(_entityApi);
  }
}

export interface ConsInvoicesCustType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  consolidationId: DeserializedType<T, 'Edm.String'>;
  previouslyPaidAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesTax: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAmountDuringConsolidationPeriod: DeserializedType<T, 'Edm.Decimal'>;
  adjustmentAmount: DeserializedType<T, 'Edm.Decimal'>;
  referenceConsolidationId?: DeserializedType<T, 'Edm.String'> | null;
  executionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consolidationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  previousInvoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  status?: CustVendConsInvoiceStatusJp | null;
}
