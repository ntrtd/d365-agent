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
import type { GupRebateAndDeductionsAgreementHeadersApi } from './GupRebateAndDeductionsAgreementHeadersApi';
import { TamRebateCalcMethod } from './TamRebateCalcMethod';
import { NoYes } from './NoYes';
import { ModuleInventCustVend } from './ModuleInventCustVend';
import { TamRebateType } from './TamRebateType';
import { TamRebateBasis } from './TamRebateBasis';
import { TamRebateSourceType } from './TamRebateSourceType';
import { TamRebatePriceBasis } from './TamRebatePriceBasis';
import { GupPricingRuleExclusionType } from './GupPricingRuleExclusionType';
import { TamRebateBasisVend } from './TamRebateBasisVend';
import { PdsUnitType } from './PdsUnitType';
import {
  GupRebateAndDeductionsPostingProfiles,
  GupRebateAndDeductionsPostingProfilesType
} from './GupRebateAndDeductionsPostingProfiles';

/**
 * This class represents the entity "GUPRebateAndDeductionsAgreementHeaders" of service "d365_metadata".
 */
export class GupRebateAndDeductionsAgreementHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GupRebateAndDeductionsAgreementHeadersType<T>
{
  /**
   * Technical entity name for GupRebateAndDeductionsAgreementHeaders.
   */
  static override _entityName = 'GUPRebateAndDeductionsAgreementHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GupRebateAndDeductionsAgreementHeaders entity.
   */
  static _keys = ['AgreementNumber'];
  /**
   * Agreement Number.
   */
  declare agreementNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Calculation Method.
   * @nullable
   */
  declare calculationMethod?: TamRebateCalcMethod | null;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rebate Agreement Type.
   * @nullable
   */
  declare rebateAgreementType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Support Negative Tier.
   * @nullable
   */
  declare supportNegativeTier?: NoYes | null;
  /**
   * Will Rebate Processing Calculation Include Credit Note.
   * @nullable
   */
  declare willRebateProcessingCalculationIncludeCreditNote?: NoYes | null;
  /**
   * Rebate And Deductions Posting Profile Id.
   * @nullable
   */
  declare rebateAndDeductionsPostingProfileId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Packed Query.
   * @nullable
   */
  declare packedQuery?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Warehouse Location Id.
   * @nullable
   */
  declare warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Status Id.
   * @nullable
   */
  declare inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Rebate Processing Calculation Include Paid Invoices Only.
   * @nullable
   */
  declare willRebateProcessingCalculationIncludePaidInvoicesOnly?: NoYes | null;
  /**
   * Header 1.
   * @nullable
   */
  declare header1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 3.
   * @nullable
   */
  declare header3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 2.
   * @nullable
   */
  declare header2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 5.
   * @nullable
   */
  declare header5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 4.
   * @nullable
   */
  declare header4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Description.
   * @nullable
   */
  declare agreementDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 7.
   * @nullable
   */
  declare header7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 6.
   * @nullable
   */
  declare header6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Module.
   * @nullable
   */
  declare agreementModule?: ModuleInventCustVend | null;
  /**
   * Will Rebate Processing Calculation Include Tax.
   * @nullable
   */
  declare willRebateProcessingCalculationIncludeTax?: NoYes | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Rebate Processing Calculation Include Free Text.
   * @nullable
   */
  declare willRebateProcessingCalculationIncludeFreeText?: NoYes | null;
  /**
   * Minimum Amount.
   */
  declare minimumAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Header Exclusion.
   * @nullable
   */
  declare headerExclusion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rebate And Deductions Type.
   * @nullable
   */
  declare rebateAndDeductionsType?: TamRebateType | null;
  /**
   * Price Component Code Name.
   * @nullable
   */
  declare priceComponentCodeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Rebate Reduction Principle Id.
   * @nullable
   */
  declare customerRebateReductionPrincipleId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line 7.
   * @nullable
   */
  declare line7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 6.
   * @nullable
   */
  declare line6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 5.
   * @nullable
   */
  declare line5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 4.
   * @nullable
   */
  declare line4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 3.
   * @nullable
   */
  declare line3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 2.
   * @nullable
   */
  declare line2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Symbol.
   * @nullable
   */
  declare unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 1.
   * @nullable
   */
  declare line1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rebate And Deductions Deal Number.
   * @nullable
   */
  declare rebateAndDeductionsDealNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Will Rebate Processing Calculation Include Discounted Amount.
   * @nullable
   */
  declare willRebateProcessingCalculationIncludeDiscountedAmount?: NoYes | null;
  /**
   * Rebate Calculation Basis.
   * @nullable
   */
  declare rebateCalculationBasis?: TamRebateBasis | null;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity Id.
   * @nullable
   */
  declare legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Combination Header Structure.
   * @nullable
   */
  declare combinationHeaderStructure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Rebate And Deductions Group Id.
   * @nullable
   */
  declare customerRebateAndDeductionsGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Combination Line Structure.
   * @nullable
   */
  declare combinationLineStructure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Notes.
   * @nullable
   */
  declare documentNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Guarantee Posting Profile Id.
   * @nullable
   */
  declare guaranteePostingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Rebate And Deductions Group Id.
   * @nullable
   */
  declare vendorRebateAndDeductionsGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Source Document Type.
   * @nullable
   */
  declare sourceDocumentType?: TamRebateSourceType | null;
  /**
   * Average Purchase Price Basis Calculation Month Range.
   */
  declare averagePurchasePriceBasisCalculationMonthRange: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Rebate Price Basis.
   * @nullable
   */
  declare rebatePriceBasis?: TamRebatePriceBasis | null;
  /**
   * Price Component Combination Name.
   * @nullable
   */
  declare priceComponentCombinationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Rebate And Deductions Group Id.
   * @nullable
   */
  declare productRebateAndDeductionsGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Matched By Order Account.
   * @nullable
   */
  declare matchedByOrderAccount?: NoYes | null;
  /**
   * Line Exclusion Type.
   * @nullable
   */
  declare lineExclusionType?: GupPricingRuleExclusionType | null;
  /**
   * Retail Product Variant Number.
   * @nullable
   */
  declare retailProductVariantNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rebate And Deductions Status Id.
   * @nullable
   */
  declare rebateAndDeductionsStatusId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Will Rebate Processing Calculation Include Settlement Discount.
   * @nullable
   */
  declare willRebateProcessingCalculationIncludeSettlementDiscount?: NoYes | null;
  /**
   * Operational Site Id.
   * @nullable
   */
  declare operationalSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Rebate Calculation Transaction Basis.
   * @nullable
   */
  declare vendorRebateCalculationTransactionBasis?: TamRebateBasisVend | null;
  /**
   * Product Unit Symbol Type.
   * @nullable
   */
  declare productUnitSymbolType?: PdsUnitType | null;
  /**
   * Line Exclusion.
   * @nullable
   */
  declare lineExclusion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link GupRebateAndDeductionsPostingProfiles} entity.
   */
  declare rebateAndDeductionsPostingProfile?: GupRebateAndDeductionsPostingProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link GupRebateAndDeductionsPostingProfiles} entity.
   */
  declare guaranteeRebateAndDeductionsPostingProfile?: GupRebateAndDeductionsPostingProfiles<T> | null;

  constructor(_entityApi: GupRebateAndDeductionsAgreementHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface GupRebateAndDeductionsAgreementHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  agreementNumber: DeserializedType<T, 'Edm.String'>;
  calculationMethod?: TamRebateCalcMethod | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  rebateAgreementType?: DeserializedType<T, 'Edm.String'> | null;
  supportNegativeTier?: NoYes | null;
  willRebateProcessingCalculationIncludeCreditNote?: NoYes | null;
  rebateAndDeductionsPostingProfileId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  packedQuery?: DeserializedType<T, 'Edm.Binary'> | null;
  warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  willRebateProcessingCalculationIncludePaidInvoicesOnly?: NoYes | null;
  header1?: DeserializedType<T, 'Edm.String'> | null;
  header3?: DeserializedType<T, 'Edm.String'> | null;
  header2?: DeserializedType<T, 'Edm.String'> | null;
  header5?: DeserializedType<T, 'Edm.String'> | null;
  header4?: DeserializedType<T, 'Edm.String'> | null;
  agreementDescription?: DeserializedType<T, 'Edm.String'> | null;
  header7?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  header6?: DeserializedType<T, 'Edm.String'> | null;
  agreementModule?: ModuleInventCustVend | null;
  willRebateProcessingCalculationIncludeTax?: NoYes | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  willRebateProcessingCalculationIncludeFreeText?: NoYes | null;
  minimumAmount: DeserializedType<T, 'Edm.Decimal'>;
  headerExclusion?: DeserializedType<T, 'Edm.String'> | null;
  rebateAndDeductionsType?: TamRebateType | null;
  priceComponentCodeName?: DeserializedType<T, 'Edm.String'> | null;
  customerRebateReductionPrincipleId?: DeserializedType<T, 'Edm.String'> | null;
  line7?: DeserializedType<T, 'Edm.String'> | null;
  line6?: DeserializedType<T, 'Edm.String'> | null;
  line5?: DeserializedType<T, 'Edm.String'> | null;
  line4?: DeserializedType<T, 'Edm.String'> | null;
  line3?: DeserializedType<T, 'Edm.String'> | null;
  line2?: DeserializedType<T, 'Edm.String'> | null;
  unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  line1?: DeserializedType<T, 'Edm.String'> | null;
  rebateAndDeductionsDealNumber?: DeserializedType<T, 'Edm.String'> | null;
  willRebateProcessingCalculationIncludeDiscountedAmount?: NoYes | null;
  rebateCalculationBasis?: TamRebateBasis | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  combinationHeaderStructure?: DeserializedType<T, 'Edm.String'> | null;
  customerRebateAndDeductionsGroupId?: DeserializedType<T, 'Edm.String'> | null;
  combinationLineStructure?: DeserializedType<T, 'Edm.String'> | null;
  documentNotes?: DeserializedType<T, 'Edm.String'> | null;
  guaranteePostingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  vendorRebateAndDeductionsGroupId?: DeserializedType<T, 'Edm.String'> | null;
  sourceDocumentType?: TamRebateSourceType | null;
  averagePurchasePriceBasisCalculationMonthRange: DeserializedType<
    T,
    'Edm.Int32'
  >;
  rebatePriceBasis?: TamRebatePriceBasis | null;
  priceComponentCombinationName?: DeserializedType<T, 'Edm.String'> | null;
  productRebateAndDeductionsGroupId?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  matchedByOrderAccount?: NoYes | null;
  lineExclusionType?: GupPricingRuleExclusionType | null;
  retailProductVariantNumber?: DeserializedType<T, 'Edm.String'> | null;
  rebateAndDeductionsStatusId?: DeserializedType<T, 'Edm.String'> | null;
  willRebateProcessingCalculationIncludeSettlementDiscount?: NoYes | null;
  operationalSiteId?: DeserializedType<T, 'Edm.String'> | null;
  vendorRebateCalculationTransactionBasis?: TamRebateBasisVend | null;
  productUnitSymbolType?: PdsUnitType | null;
  lineExclusion?: DeserializedType<T, 'Edm.String'> | null;
  rebateAndDeductionsPostingProfile?: GupRebateAndDeductionsPostingProfilesType<T> | null;
  guaranteeRebateAndDeductionsPostingProfile?: GupRebateAndDeductionsPostingProfilesType<T> | null;
}
