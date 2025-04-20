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
import type { RetailTransInvoicedMetaApi } from './RetailTransInvoicedMetaApi';

/**
 * This class represents the entity "RetailTransInvoicedMeta" of service "d365_metadata".
 */
export class RetailTransInvoicedMeta<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransInvoicedMetaType<T>
{
  /**
   * Technical entity name for RetailTransInvoicedMeta.
   */
  static override _entityName = 'RetailTransInvoicedMeta';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransInvoicedMeta entity.
   */
  static _keys = [
    'YearOffset',
    'EmployeeId',
    'ProductNumber',
    'RetailChannelId',
    'TerminalId',
    'MonthGregorianId',
    'LegalEntityId'
  ];
  /**
   * Year Offset.
   */
  declare yearOffset: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Employee Id.
   */
  declare employeeId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Retail Channel Id.
   */
  declare retailChannelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal Id.
   */
  declare terminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Month Gregorian Id.
   */
  declare monthGregorianId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoiced Amount.
   */
  declare invoicedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoiced Tax Amount.
   */
  declare invoicedTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Num Of Invoices.
   */
  declare numOfInvoices: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cogs.
   */
  declare cogs: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Num Of Goods.
   */
  declare numOfGoods: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Num Of Item Lines.
   */
  declare numOfItemLines: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailTransInvoicedMetaApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransInvoicedMetaType<
  T extends DeSerializers = DefaultDeSerializers
> {
  yearOffset: DeserializedType<T, 'Edm.Int64'>;
  employeeId: DeserializedType<T, 'Edm.Int64'>;
  productNumber: DeserializedType<T, 'Edm.String'>;
  retailChannelId: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  monthGregorianId: DeserializedType<T, 'Edm.Int64'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  invoicedAmount: DeserializedType<T, 'Edm.Decimal'>;
  invoicedTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  numOfInvoices: DeserializedType<T, 'Edm.Int64'>;
  cogs: DeserializedType<T, 'Edm.Decimal'>;
  numOfGoods: DeserializedType<T, 'Edm.Decimal'>;
  numOfItemLines: DeserializedType<T, 'Edm.Decimal'>;
}
