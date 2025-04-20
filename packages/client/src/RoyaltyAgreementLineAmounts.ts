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
import type { RoyaltyAgreementLineAmountsApi } from './RoyaltyAgreementLineAmountsApi';
import {
  RoyaltyAgreementLines,
  RoyaltyAgreementLinesType
} from './RoyaltyAgreementLines';

/**
 * This class represents the entity "RoyaltyAgreementLineAmounts" of service "d365_metadata".
 */
export class RoyaltyAgreementLineAmounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RoyaltyAgreementLineAmountsType<T>
{
  /**
   * Technical entity name for RoyaltyAgreementLineAmounts.
   */
  static override _entityName = 'RoyaltyAgreementLineAmounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RoyaltyAgreementLineAmounts entity.
   */
  static _keys = [
    'dataAreaId',
    'RoyaltyAgreementId',
    'RoyaltyAgreementLineId',
    'LineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Royalty Agreement Id.
   */
  declare royaltyAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Royalty Agreement Line Id.
   */
  declare royaltyAgreementLineId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Royalty Percentage.
   */
  declare royaltyPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Royalty Amount.
   */
  declare fixedRoyaltyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Royalty Amount Per Product Unit Sold.
   */
  declare royaltyAmountPerProductUnitSold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * To Gross Sales Amount.
   */
  declare toGrossSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Price Quantity.
   */
  declare salesPriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Unit Symbol.
   * @nullable
   */
  declare salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Net Sales Amount.
   */
  declare fromNetSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * To Net Sales Amount.
   */
  declare toNetSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * From Gross Sales Amount.
   */
  declare fromGrossSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link RoyaltyAgreementLines} entity.
   */
  declare royaltyAgreementLine?: RoyaltyAgreementLines<T> | null;

  constructor(_entityApi: RoyaltyAgreementLineAmountsApi<T>) {
    super(_entityApi);
  }
}

export interface RoyaltyAgreementLineAmountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  royaltyAgreementId: DeserializedType<T, 'Edm.String'>;
  royaltyAgreementLineId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
  royaltyPercentage: DeserializedType<T, 'Edm.Decimal'>;
  fixedRoyaltyAmount: DeserializedType<T, 'Edm.Decimal'>;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  royaltyAmountPerProductUnitSold: DeserializedType<T, 'Edm.Decimal'>;
  toGrossSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesPriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  fromNetSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  toNetSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  fromGrossSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  royaltyAgreementLine?: RoyaltyAgreementLinesType<T> | null;
}
