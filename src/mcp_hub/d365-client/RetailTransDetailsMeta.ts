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
import type { RetailTransDetailsMetaApi } from './RetailTransDetailsMetaApi';

/**
 * This class represents the entity "RetailTransDetailsMeta" of service "d365_metadata".
 */
export class RetailTransDetailsMeta<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransDetailsMetaType<T>
{
  /**
   * Technical entity name for RetailTransDetailsMeta.
   */
  static override _entityName = 'RetailTransDetailsMeta';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransDetailsMeta entity.
   */
  static _keys = [
    'YearOffset',
    'RetailChannelId',
    'LegalEntityId',
    'MonthGregorianId',
    'ProductNumber',
    'TerminalId',
    'EmployeeId'
  ];
  /**
   * Year Offset.
   */
  declare yearOffset: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Retail Channel Id.
   */
  declare retailChannelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Month Gregorian Id.
   */
  declare monthGregorianId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal Id.
   */
  declare terminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Employee Id.
   */
  declare employeeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Tax Amount.
   */
  declare transactionTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Num Of Goods.
   */
  declare numOfGoods: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Num Of Item Lines.
   */
  declare numOfItemLines: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Transaction Amount Incl Tax.
   */
  declare transactionAmountInclTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Amount.
   */
  declare transactionAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailTransDetailsMetaApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransDetailsMetaType<
  T extends DeSerializers = DefaultDeSerializers
> {
  yearOffset: DeserializedType<T, 'Edm.Int64'>;
  retailChannelId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  monthGregorianId: DeserializedType<T, 'Edm.Int64'>;
  productNumber: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  employeeId: DeserializedType<T, 'Edm.String'>;
  transactionTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  numOfGoods: DeserializedType<T, 'Edm.Int64'>;
  numOfItemLines: DeserializedType<T, 'Edm.Int64'>;
  transactionAmountInclTax: DeserializedType<T, 'Edm.Decimal'>;
  transactionAmount: DeserializedType<T, 'Edm.Decimal'>;
}
