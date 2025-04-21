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
import type { ProcurementChargeApi } from './ProcurementChargeApi';
import { NoYes } from './NoYes';
import { MarkupClassificationBr } from './MarkupClassificationBr';
import { MarkupType } from './MarkupType';
import { LedgerPostingType } from './LedgerPostingType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  PurchAutomaticPurchaseDocumentLineChargesV2,
  PurchAutomaticPurchaseDocumentLineChargesV2Type
} from './PurchAutomaticPurchaseDocumentLineChargesV2';

/**
 * This class represents the entity "ProcurementCharge" of service "d365_metadata".
 */
export class ProcurementCharge<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProcurementChargeType<T>
{
  /**
   * Technical entity name for ProcurementCharge.
   */
  static override _entityName = 'ProcurementCharge';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProcurementCharge entity.
   */
  static _keys = ['dataAreaId', 'ChargeCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Charge Code.
   */
  declare chargeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Maximum Allowed Purchase Order Charge Amount.
   */
  declare maximumAllowedPurchaseOrderChargeAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Will Purchase Document Comparison Include Charge.
   * @nullable
   */
  declare willPurchaseDocumentComparisonIncludeCharge?: NoYes | null;
  /**
   * Charge Classification.
   * @nullable
   */
  declare chargeClassification?: MarkupClassificationBr | null;
  /**
   * Credit Posting Main Account Id Display Value.
   * @nullable
   */
  declare creditPostingMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Debit Posting Main Account Id Display Value.
   * @nullable
   */
  declare debitPostingMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Debit Posting Method.
   * @nullable
   */
  declare debitPostingMethod?: MarkupType | null;
  /**
   * Charge Description.
   * @nullable
   */
  declare chargeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Intrastat Invoice Value Include Charge Amounts.
   * @nullable
   */
  declare willIntrastatInvoiceValueIncludeChargeAmounts?: NoYes | null;
  /**
   * Debit Posting Type.
   * @nullable
   */
  declare debitPostingType?: LedgerPostingType | null;
  /**
   * Will Intrastat Statistical Value Include Charge Amounts.
   * @nullable
   */
  declare willIntrastatStatisticalValueIncludeChargeAmounts?: NoYes | null;
  /**
   * Sales Tax Item Group Code.
   * @nullable
   */
  declare salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Rate Type Name.
   * @nullable
   */
  declare taxRateTypeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Posting Method.
   * @nullable
   */
  declare creditPostingMethod?: MarkupType | null;
  /**
   * Credit Posting Type.
   * @nullable
   */
  declare creditPostingType?: LedgerPostingType | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-many navigation property to the {@link PurchAutomaticPurchaseDocumentLineChargesV2} entity.
   */
  declare purchProcurementFreightCharges: PurchAutomaticPurchaseDocumentLineChargesV2<T>[];

  constructor(_entityApi: ProcurementChargeApi<T>) {
    super(_entityApi);
  }
}

export interface ProcurementChargeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  chargeCode: DeserializedType<T, 'Edm.String'>;
  maximumAllowedPurchaseOrderChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  willPurchaseDocumentComparisonIncludeCharge?: NoYes | null;
  chargeClassification?: MarkupClassificationBr | null;
  creditPostingMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  debitPostingMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  debitPostingMethod?: MarkupType | null;
  chargeDescription?: DeserializedType<T, 'Edm.String'> | null;
  willIntrastatInvoiceValueIncludeChargeAmounts?: NoYes | null;
  debitPostingType?: LedgerPostingType | null;
  willIntrastatStatisticalValueIncludeChargeAmounts?: NoYes | null;
  salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  taxRateTypeName?: DeserializedType<T, 'Edm.String'> | null;
  creditPostingMethod?: MarkupType | null;
  creditPostingType?: LedgerPostingType | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  purchProcurementFreightCharges: PurchAutomaticPurchaseDocumentLineChargesV2Type<T>[];
}
