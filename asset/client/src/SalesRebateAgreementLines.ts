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
import type { SalesRebateAgreementLinesApi } from './SalesRebateAgreementLinesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "SalesRebateAgreementLines" of service "d365_metadata".
 */
export class SalesRebateAgreementLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesRebateAgreementLinesType<T>
{
  /**
   * Technical entity name for SalesRebateAgreementLines.
   */
  static override _entityName = 'SalesRebateAgreementLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesRebateAgreementLines entity.
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
   * To Sales Quantity.
   */
  declare toSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Unit Symbol.
   * @nullable
   */
  declare productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Is Validated.
   * @nullable
   */
  declare isValidated?: NoYes | null;
  /**
   * Rebate Amount Per Product Unit Sold.
   */
  declare rebateAmountPerProductUnitSold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * To Gross Sales Amount.
   */
  declare toGrossSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rebate Percentage.
   */
  declare rebatePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * From Sales Quantity.
   */
  declare fromSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Validating Worker Personnel Number.
   * @nullable
   */
  declare validatingWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fixed Rebate Amount.
   */
  declare fixedRebateAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: SalesRebateAgreementLinesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesRebateAgreementLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rebateAgreementId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  toSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  fromNetSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  toNetSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  fromGrossSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  isValidated?: NoYes | null;
  rebateAmountPerProductUnitSold: DeserializedType<T, 'Edm.Decimal'>;
  toGrossSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  rebatePercentage: DeserializedType<T, 'Edm.Decimal'>;
  fromSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  validatingWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  fixedRebateAmount: DeserializedType<T, 'Edm.Decimal'>;
}
