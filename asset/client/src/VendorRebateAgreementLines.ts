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
import type { VendorRebateAgreementLinesApi } from './VendorRebateAgreementLinesApi';

/**
 * This class represents the entity "VendorRebateAgreementLines" of service "d365_metadata".
 */
export class VendorRebateAgreementLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorRebateAgreementLinesType<T>
{
  /**
   * Technical entity name for VendorRebateAgreementLines.
   */
  static override _entityName = 'VendorRebateAgreementLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorRebateAgreementLines entity.
   */
  static _keys = ['dataAreaId', 'RebateAgreementId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rebate Agreement Id.
   */
  declare rebateAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Net Purchase Amount.
   */
  declare fromNetPurchaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * From Gross Purchase Amount.
   */
  declare fromGrossPurchaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Rebate Amount.
   */
  declare fixedRebateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * To Net Purchase Amount.
   */
  declare toNetPurchaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rebate Percentage.
   */
  declare rebatePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rebate Amount Per Product Unit Sold.
   */
  declare rebateAmountPerProductUnitSold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * To Gross Purchase Amount.
   */
  declare toGrossPurchaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Symbol.
   * @nullable
   */
  declare unitSymbol?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VendorRebateAgreementLinesApi<T>) {
    super(_entityApi);
  }
}

export interface VendorRebateAgreementLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rebateAgreementId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  fromNetPurchaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  fromGrossPurchaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  fixedRebateAmount: DeserializedType<T, 'Edm.Decimal'>;
  toNetPurchaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  rebatePercentage: DeserializedType<T, 'Edm.Decimal'>;
  rebateAmountPerProductUnitSold: DeserializedType<T, 'Edm.Decimal'>;
  toGrossPurchaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
}
