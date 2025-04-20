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
import type { RetailTransDiscountedMetaApi } from './RetailTransDiscountedMetaApi';

/**
 * This class represents the entity "RetailTransDiscountedMeta" of service "d365_metadata".
 */
export class RetailTransDiscountedMeta<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransDiscountedMetaType<T>
{
  /**
   * Technical entity name for RetailTransDiscountedMeta.
   */
  static override _entityName = 'RetailTransDiscountedMeta';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransDiscountedMeta entity.
   */
  static _keys = [
    'DiscountId',
    'YearOffset',
    'RetailChannelId',
    'LegalEntityId',
    'MonthGregorianId',
    'ProductNumber',
    'TerminalId',
    'EmployeeId',
    'DiscountRecId'
  ];
  /**
   * Discount Id.
   */
  declare discountId: DeserializedType<T, 'Edm.String'>;
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
   * Discount Rec Id.
   */
  declare discountRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Num Of Transactions.
   */
  declare numOfTransactions: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Num Of Goods.
   */
  declare numOfGoods: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Discount Name.
   * @nullable
   */
  declare discountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Amount.
   */
  declare discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Num Of Item Lines.
   */
  declare numOfItemLines: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: RetailTransDiscountedMetaApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransDiscountedMetaType<
  T extends DeSerializers = DefaultDeSerializers
> {
  discountId: DeserializedType<T, 'Edm.String'>;
  yearOffset: DeserializedType<T, 'Edm.Int64'>;
  retailChannelId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  monthGregorianId: DeserializedType<T, 'Edm.Int64'>;
  productNumber: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  employeeId: DeserializedType<T, 'Edm.String'>;
  discountRecId: DeserializedType<T, 'Edm.Int64'>;
  numOfTransactions: DeserializedType<T, 'Edm.Int64'>;
  numOfGoods: DeserializedType<T, 'Edm.Int64'>;
  discountName?: DeserializedType<T, 'Edm.String'> | null;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  numOfItemLines: DeserializedType<T, 'Edm.Int64'>;
}
