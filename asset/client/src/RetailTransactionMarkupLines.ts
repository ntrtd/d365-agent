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
import type { RetailTransactionMarkupLinesApi } from './RetailTransactionMarkupLinesApi';
import { NoYes } from './NoYes';
import { MarkupCategory } from './MarkupCategory';
import { ItcCategoryIn } from './ItcCategoryIn';
import { MarkupModuleType } from './MarkupModuleType';
import { ServiceCategoryIn } from './ServiceCategoryIn';

/**
 * This class represents the entity "RetailTransactionMarkupLines" of service "d365_metadata".
 */
export class RetailTransactionMarkupLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionMarkupLinesType<T>
{
  /**
   * Technical entity name for RetailTransactionMarkupLines.
   */
  static override _entityName = 'RetailTransactionMarkupLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionMarkupLines entity.
   */
  static _keys = [
    'dataAreaId',
    'SalesLineNumber',
    'TransactionNumber',
    'Terminal',
    'LineNumber',
    'OperatingUnitNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Line Number.
   */
  declare salesLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Amount Exclusive.
   */
  declare taxAmountExclusive: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Hsn Code.
   * @nullable
   */
  declare hsnCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Tax Group.
   * @nullable
   */
  declare itemTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exempt.
   * @nullable
   */
  declare exempt?: NoYes | null;
  /**
   * Markup Auto Table Rec Id.
   */
  declare markupAutoTableRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Store.
   * @nullable
   */
  declare store?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Accounting Code.
   * @nullable
   */
  declare serviceAccountingCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Markup Category Type.
   * @nullable
   */
  declare markupCategoryType?: MarkupCategory | null;
  /**
   * Markup Value.
   */
  declare markupValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Rate Type.
   * @nullable
   */
  declare taxRateType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Amount.
   */
  declare taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Itc Category.
   * @nullable
   */
  declare itcCategory?: ItcCategoryIn | null;
  /**
   * Is Overridden Line.
   * @nullable
   */
  declare isOverriddenLine?: NoYes | null;
  /**
   * Non Gst.
   * @nullable
   */
  declare nonGst?: NoYes | null;
  /**
   * Tax Exempt Price Inclusive Reduction Amount.
   */
  declare taxExemptPriceInclusiveReductionAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Calculated Amount.
   */
  declare calculatedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Module Type.
   * @nullable
   */
  declare moduleType?: MarkupModuleType | null;
  /**
   * Markup Code.
   * @nullable
   */
  declare markupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Amount Inclusive.
   */
  declare taxAmountInclusive: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exempt Price Inclusive Original Price.
   */
  declare taxExemptPriceInclusiveOriginalPrice: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Keep.
   * @nullable
   */
  declare keep?: NoYes | null;
  /**
   * Service Category.
   * @nullable
   */
  declare serviceCategory?: ServiceCategoryIn | null;

  constructor(_entityApi: RetailTransactionMarkupLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionMarkupLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  taxAmountExclusive: DeserializedType<T, 'Edm.Decimal'>;
  hsnCode?: DeserializedType<T, 'Edm.String'> | null;
  itemTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  exempt?: NoYes | null;
  markupAutoTableRecId: DeserializedType<T, 'Edm.Int64'>;
  store?: DeserializedType<T, 'Edm.String'> | null;
  serviceAccountingCode?: DeserializedType<T, 'Edm.String'> | null;
  markupCategoryType?: MarkupCategory | null;
  markupValue: DeserializedType<T, 'Edm.Decimal'>;
  taxRateType?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  itcCategory?: ItcCategoryIn | null;
  isOverriddenLine?: NoYes | null;
  nonGst?: NoYes | null;
  taxExemptPriceInclusiveReductionAmount: DeserializedType<T, 'Edm.Decimal'>;
  calculatedAmount: DeserializedType<T, 'Edm.Decimal'>;
  moduleType?: MarkupModuleType | null;
  markupCode?: DeserializedType<T, 'Edm.String'> | null;
  taxAmountInclusive: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptPriceInclusiveOriginalPrice: DeserializedType<T, 'Edm.Decimal'>;
  keep?: NoYes | null;
  serviceCategory?: ServiceCategoryIn | null;
}
