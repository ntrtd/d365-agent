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
import type { SalesMultiLineDiscountAgreementsApi } from './SalesMultiLineDiscountAgreementsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "SalesMultiLineDiscountAgreements" of service "d365_metadata".
 */
export class SalesMultiLineDiscountAgreements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesMultiLineDiscountAgreementsType<T>
{
  /**
   * Technical entity name for SalesMultiLineDiscountAgreements.
   */
  static override _entityName = 'SalesMultiLineDiscountAgreements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesMultiLineDiscountAgreements entity.
   */
  static _keys = ['dataAreaId', 'RecordId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Will Search Continue.
   * @nullable
   */
  declare willSearchContinue?: NoYes | null;
  /**
   * Quantity Unit Symbol.
   * @nullable
   */
  declare quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Percentage 2.
   */
  declare discountPercentage2: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Percentage 1.
   */
  declare discountPercentage1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * To Quantity.
   */
  declare toQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Applicable From Date.
   */
  declare discountApplicableFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Multi Line Discount Customer Group Code.
   * @nullable
   */
  declare multiLineDiscountCustomerGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Discount Applicable To Date.
   */
  declare discountApplicableToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Discount Amount.
   */
  declare discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Currency Code.
   * @nullable
   */
  declare discountCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Quantity.
   */
  declare fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multi Line Discount Product Group Code.
   * @nullable
   */
  declare multiLineDiscountProductGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Generic Currency Search Enabled.
   * @nullable
   */
  declare isGenericCurrencySearchEnabled?: NoYes | null;

  constructor(_entityApi: SalesMultiLineDiscountAgreementsApi<T>) {
    super(_entityApi);
  }
}

export interface SalesMultiLineDiscountAgreementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recordId: DeserializedType<T, 'Edm.Int64'>;
  willSearchContinue?: NoYes | null;
  quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  discountPercentage2: DeserializedType<T, 'Edm.Decimal'>;
  discountPercentage1: DeserializedType<T, 'Edm.Decimal'>;
  toQuantity: DeserializedType<T, 'Edm.Decimal'>;
  discountApplicableFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  multiLineDiscountCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  discountApplicableToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  discountCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  multiLineDiscountProductGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  isGenericCurrencySearchEnabled?: NoYes | null;
}
