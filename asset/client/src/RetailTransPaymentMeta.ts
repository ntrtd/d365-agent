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
import type { RetailTransPaymentMetaApi } from './RetailTransPaymentMetaApi';

/**
 * This class represents the entity "RetailTransPaymentMeta" of service "d365_metadata".
 */
export class RetailTransPaymentMeta<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransPaymentMetaType<T>
{
  /**
   * Technical entity name for RetailTransPaymentMeta.
   */
  static override _entityName = 'RetailTransPaymentMeta';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransPaymentMeta entity.
   */
  static _keys = [
    'YearOffset',
    'RetailChannelId',
    'LegalEntityId',
    'MonthGregorianId',
    'TenderTypeId',
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
   * Tender Type Id.
   */
  declare tenderTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal Id.
   */
  declare terminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Employee Id.
   */
  declare employeeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Num Of Transactions.
   */
  declare numOfTransactions: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Num Of Goods.
   */
  declare numOfGoods: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment Amount.
   */
  declare paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Num Of Payment Lines.
   */
  declare numOfPaymentLines: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: RetailTransPaymentMetaApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransPaymentMetaType<
  T extends DeSerializers = DefaultDeSerializers
> {
  yearOffset: DeserializedType<T, 'Edm.Int64'>;
  retailChannelId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  monthGregorianId: DeserializedType<T, 'Edm.Int64'>;
  tenderTypeId: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  employeeId: DeserializedType<T, 'Edm.String'>;
  numOfTransactions: DeserializedType<T, 'Edm.Int64'>;
  numOfGoods: DeserializedType<T, 'Edm.Decimal'>;
  paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  numOfPaymentLines: DeserializedType<T, 'Edm.Int64'>;
}
