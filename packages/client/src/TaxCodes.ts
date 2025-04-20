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
import type { TaxCodesApi } from './TaxCodesApi';
import { TaxTypeJp } from './TaxTypeJp';
import { NoYes } from './NoYes';
import { TaxSubstitutionEnumBr } from './TaxSubstitutionEnumBr';
import { TaxSubstitutionBaseRedCalculationModeBr } from './TaxSubstitutionBaseRedCalculationModeBr';
import { TaxCalcMode } from './TaxCalcMode';
import { TaxTypeSg } from './TaxTypeSg';
import { TaxWriteSelection } from './TaxWriteSelection';
import { RoundOffType } from './RoundOffType';
import { TaxLimitBase } from './TaxLimitBase';
import { CountryRegionType } from './CountryRegionType';
import { TaxFiscalValueBr } from './TaxFiscalValueBr';
import { TaxBaseType } from './TaxBaseType';
import { VatChargeSourceRu } from './VatChargeSourceRu';
import { TaxTypeTh } from './TaxTypeTh';
import { TaxTypeBr } from './TaxTypeBr';
import { TaxTypeMx } from './TaxTypeMx';
import { TaxTypeW } from './TaxTypeW';
import {
  SalesAutomaticSalesDocumentHeaderTaxCharges,
  SalesAutomaticSalesDocumentHeaderTaxChargesType
} from './SalesAutomaticSalesDocumentHeaderTaxCharges';
import { TaxCodeLimits, TaxCodeLimitsType } from './TaxCodeLimits';
import {
  TaxReportingCodeEntities,
  TaxReportingCodeEntitiesType
} from './TaxReportingCodeEntities';
import { TaxPostingGroups, TaxPostingGroupsType } from './TaxPostingGroups';
import { TaxPeriods, TaxPeriodsType } from './TaxPeriods';
import { TaxCodeValuesV2, TaxCodeValuesV2Type } from './TaxCodeValuesV2';
import { TaxItemGroups, TaxItemGroupsType } from './TaxItemGroups';
import { TaxGroupDatas, TaxGroupDatasType } from './TaxGroupDatas';

/**
 * This class represents the entity "TaxCodes" of service "d365_metadata".
 */
export class TaxCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxCodesType<T>
{
  /**
   * Technical entity name for TaxCodes.
   */
  static override _entityName = 'TaxCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxCodes entity.
   */
  static _keys = ['dataAreaId', 'TaxCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Code.
   */
  declare taxCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Japan Tax Type.
   * @nullable
   */
  declare japanTaxType?: TaxTypeJp | null;
  /**
   * Reporting Code Taxable Purchases Credit Note.
   */
  declare reportingCodeTaxablePurchasesCreditNote: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Retained Tax.
   * @nullable
   */
  declare retainedTax?: NoYes | null;
  /**
   * Reporting Code Taxable Import.
   */
  declare reportingCodeTaxableImport: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Substitution Method.
   * @nullable
   */
  declare taxSubstitutionMethod?: TaxSubstitutionEnumBr | null;
  /**
   * Not Eu Sales List.
   * @nullable
   */
  declare notEuSalesList?: NoYes | null;
  /**
   * Reporting Code Use Tax Offset Credit Note.
   */
  declare reportingCodeUseTaxOffsetCreditNote: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Domestic Customs Practice.
   * @nullable
   */
  declare domesticCustomsPractice?: NoYes | null;
  /**
   * Reporting Code Tax Free Sales Debit Note.
   */
  declare reportingCodeTaxFreeSalesDebitNote: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Substitution Calculation Method.
   * @nullable
   */
  declare taxSubstitutionCalculationMethod?: TaxSubstitutionBaseRedCalculationModeBr | null;
  /**
   * Tax On Tax.
   * @nullable
   */
  declare taxOnTax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Duty.
   * @nullable
   */
  declare packingDuty?: NoYes | null;
  /**
   * Reporting Code Tax Free Sale.
   */
  declare reportingCodeTaxFreeSale: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Taxation Code.
   * @nullable
   */
  declare taxationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Code Tax Free Purchase.
   */
  declare reportingCodeTaxFreePurchase: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Exclude From Invoice.
   * @nullable
   */
  declare excludeFromInvoice?: NoYes | null;
  /**
   * Print Code.
   * @nullable
   */
  declare printCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Tax Code Id.
   * @nullable
   */
  declare paymentTaxCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revenue Code.
   * @nullable
   */
  declare revenueCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Code Use Tax Credit Note.
   */
  declare reportingCodeUseTaxCreditNote: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reporting Code Sales Tax Payable Credit Note.
   */
  declare reportingCodeSalesTaxPayableCreditNote: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Reporting Code Sales Tax Receivable.
   */
  declare reportingCodeSalesTaxReceivable: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Calculation Method.
   * @nullable
   */
  declare taxCalculationMethod?: TaxCalcMode | null;
  /**
   * Singapore Tax Type.
   * @nullable
   */
  declare singaporeTaxType?: TaxTypeSg | null;
  /**
   * Reporting Code Use Tax Offset.
   */
  declare reportingCodeUseTaxOffset: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Print Code Type.
   * @nullable
   */
  declare printCodeType?: TaxWriteSelection | null;
  /**
   * Reporting Code Use Tax.
   */
  declare reportingCodeUseTax: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Round Off Type.
   * @nullable
   */
  declare taxRoundOffType?: RoundOffType | null;
  /**
   * Tax Vat Report Category Code.
   * @nullable
   */
  declare taxVatReportCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Limit Base.
   * @nullable
   */
  declare taxLimitBase?: TaxLimitBase | null;
  /**
   * Reporting Code Sales Tax Payable.
   */
  declare reportingCodeSalesTaxPayable: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Country Region Type.
   * @nullable
   */
  declare taxCountryRegionType?: CountryRegionType | null;
  /**
   * Is Gst.
   * @nullable
   */
  declare isGst?: NoYes | null;
  /**
   * Fiscal Value.
   * @nullable
   */
  declare fiscalValue?: TaxFiscalValueBr | null;
  /**
   * Reporting Code Tax Outgoing Debit Note.
   */
  declare reportingCodeTaxOutgoingDebitNote: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reporting Code Sales Tax Receivable Credit Note.
   */
  declare reportingCodeSalesTaxReceivableCreditNote: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Reporting Code Tax Free Sale Credit Note.
   */
  declare reportingCodeTaxFreeSaleCreditNote: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Base.
   * @nullable
   */
  declare taxBase?: TaxBaseType | null;
  /**
   * Reporting Code Tax Incoming Debit Note.
   */
  declare reportingCodeTaxIncomingDebitNote: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Included Tax.
   * @nullable
   */
  declare includedTax?: NoYes | null;
  /**
   * Reporting Code Tax Free Buy Debit Note.
   */
  declare reportingCodeTaxFreeBuyDebitNote: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Diot Add Info.
   * @nullable
   */
  declare diotAddInfo?: NoYes | null;
  /**
   * Reporting Code Taxable Import Offset.
   */
  declare reportingCodeTaxableImportOffset: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Packing Duty Sort Code.
   * @nullable
   */
  declare packingDutySortCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Charge Source.
   * @nullable
   */
  declare vatChargeSource?: VatChargeSourceRu | null;
  /**
   * Tax Period Id.
   * @nullable
   */
  declare taxPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Code Taxable Import Offset Credit Note.
   */
  declare reportingCodeTaxableImportOffsetCreditNote: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Tax Type.
   * @nullable
   */
  declare taxType?: TaxTypeTh | null;
  /**
   * Is Investment.
   * @nullable
   */
  declare isInvestment?: NoYes | null;
  /**
   * Calculate Unit Tax Before Sales Tax.
   * @nullable
   */
  declare calculateUnitTaxBeforeSalesTax?: NoYes | null;
  /**
   * Reporting Code Tax Free Purchase Credit Note.
   */
  declare reportingCodeTaxFreePurchaseCreditNote: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Tax Currency Code Id.
   * @nullable
   */
  declare taxCurrencyCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Code Taxable Sales.
   */
  declare reportingCodeTaxableSales: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reporting Code Taxable Import Credit Note.
   */
  declare reportingCodeTaxableImportCreditNote: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Unrealized Tax.
   * @nullable
   */
  declare unrealizedTax?: NoYes | null;
  /**
   * Brazil Tax Type.
   * @nullable
   */
  declare brazilTaxType?: TaxTypeBr | null;
  /**
   * Mexico Tax Type.
   * @nullable
   */
  declare mexicoTaxType?: TaxTypeMx | null;
  /**
   * Tax Name.
   * @nullable
   */
  declare taxName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Code Taxable Purchases.
   */
  declare reportingCodeTaxablePurchases: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Negative Tax.
   * @nullable
   */
  declare negativeTax?: NoYes | null;
  /**
   * Reporting Code Taxable Sales Credit Note.
   */
  declare reportingCodeTaxableSalesCreditNote: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Posting Group Id.
   * @nullable
   */
  declare taxPostingGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type Of Tax.
   * @nullable
   */
  declare typeOfTax?: TaxTypeW | null;
  /**
   * Reporting Code Base Outgoing Debit Note.
   */
  declare reportingCodeBaseOutgoingDebitNote: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Unit Id.
   * @nullable
   */
  declare taxUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Code Base Incoming Debit Note.
   */
  declare reportingCodeBaseIncomingDebitNote: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Round Off.
   */
  declare taxRoundOff: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description Qr Bill.
   * @nullable
   */
  declare descriptionQrBill?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SalesAutomaticSalesDocumentHeaderTaxCharges} entity.
   */
  declare salesTaxCodeCharges: SalesAutomaticSalesDocumentHeaderTaxCharges<T>[];
  /**
   * One-to-many navigation property to the {@link TaxCodeLimits} entity.
   */
  declare taxCodeLimit: TaxCodeLimits<T>[];
  /**
   * One-to-one navigation property to the {@link TaxReportingCodeEntities} entity.
   */
  declare taxReportingCodeEntity?: TaxReportingCodeEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxPostingGroups} entity.
   */
  declare taxPostingGroup?: TaxPostingGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxPeriods} entity.
   */
  declare taxPeriod?: TaxPeriods<T> | null;
  /**
   * One-to-many navigation property to the {@link TaxCodeValuesV2} entity.
   */
  declare taxCodeValueV2: TaxCodeValuesV2<T>[];
  /**
   * One-to-many navigation property to the {@link TaxItemGroups} entity.
   */
  declare taxItemGroup: TaxItemGroups<T>[];
  /**
   * One-to-many navigation property to the {@link TaxGroupDatas} entity.
   */
  declare taxGroupData: TaxGroupDatas<T>[];

  constructor(_entityApi: TaxCodesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxCodesType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxCode: DeserializedType<T, 'Edm.String'>;
  japanTaxType?: TaxTypeJp | null;
  reportingCodeTaxablePurchasesCreditNote: DeserializedType<T, 'Edm.Int32'>;
  retainedTax?: NoYes | null;
  reportingCodeTaxableImport: DeserializedType<T, 'Edm.Int32'>;
  taxSubstitutionMethod?: TaxSubstitutionEnumBr | null;
  notEuSalesList?: NoYes | null;
  reportingCodeUseTaxOffsetCreditNote: DeserializedType<T, 'Edm.Int32'>;
  domesticCustomsPractice?: NoYes | null;
  reportingCodeTaxFreeSalesDebitNote: DeserializedType<T, 'Edm.Int32'>;
  taxSubstitutionCalculationMethod?: TaxSubstitutionBaseRedCalculationModeBr | null;
  taxOnTax?: DeserializedType<T, 'Edm.String'> | null;
  packingDuty?: NoYes | null;
  reportingCodeTaxFreeSale: DeserializedType<T, 'Edm.Int32'>;
  taxationCode?: DeserializedType<T, 'Edm.String'> | null;
  reportingCodeTaxFreePurchase: DeserializedType<T, 'Edm.Int32'>;
  excludeFromInvoice?: NoYes | null;
  printCode?: DeserializedType<T, 'Edm.String'> | null;
  paymentTaxCodeId?: DeserializedType<T, 'Edm.String'> | null;
  revenueCode?: DeserializedType<T, 'Edm.String'> | null;
  reportingCodeUseTaxCreditNote: DeserializedType<T, 'Edm.Int32'>;
  reportingCodeSalesTaxPayableCreditNote: DeserializedType<T, 'Edm.Int32'>;
  reportingCodeSalesTaxReceivable: DeserializedType<T, 'Edm.Int32'>;
  taxCalculationMethod?: TaxCalcMode | null;
  singaporeTaxType?: TaxTypeSg | null;
  reportingCodeUseTaxOffset: DeserializedType<T, 'Edm.Int32'>;
  printCodeType?: TaxWriteSelection | null;
  reportingCodeUseTax: DeserializedType<T, 'Edm.Int32'>;
  taxRoundOffType?: RoundOffType | null;
  taxVatReportCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  taxLimitBase?: TaxLimitBase | null;
  reportingCodeSalesTaxPayable: DeserializedType<T, 'Edm.Int32'>;
  taxCountryRegionType?: CountryRegionType | null;
  isGst?: NoYes | null;
  fiscalValue?: TaxFiscalValueBr | null;
  reportingCodeTaxOutgoingDebitNote: DeserializedType<T, 'Edm.Int32'>;
  reportingCodeSalesTaxReceivableCreditNote: DeserializedType<T, 'Edm.Int32'>;
  reportingCodeTaxFreeSaleCreditNote: DeserializedType<T, 'Edm.Int32'>;
  taxBase?: TaxBaseType | null;
  reportingCodeTaxIncomingDebitNote: DeserializedType<T, 'Edm.Int32'>;
  includedTax?: NoYes | null;
  reportingCodeTaxFreeBuyDebitNote: DeserializedType<T, 'Edm.Int32'>;
  diotAddInfo?: NoYes | null;
  reportingCodeTaxableImportOffset: DeserializedType<T, 'Edm.Int32'>;
  packingDutySortCode?: DeserializedType<T, 'Edm.String'> | null;
  vatChargeSource?: VatChargeSourceRu | null;
  taxPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  reportingCodeTaxableImportOffsetCreditNote: DeserializedType<T, 'Edm.Int32'>;
  taxType?: TaxTypeTh | null;
  isInvestment?: NoYes | null;
  calculateUnitTaxBeforeSalesTax?: NoYes | null;
  reportingCodeTaxFreePurchaseCreditNote: DeserializedType<T, 'Edm.Int32'>;
  taxCurrencyCodeId?: DeserializedType<T, 'Edm.String'> | null;
  reportingCodeTaxableSales: DeserializedType<T, 'Edm.Int32'>;
  reportingCodeTaxableImportCreditNote: DeserializedType<T, 'Edm.Int32'>;
  unrealizedTax?: NoYes | null;
  brazilTaxType?: TaxTypeBr | null;
  mexicoTaxType?: TaxTypeMx | null;
  taxName?: DeserializedType<T, 'Edm.String'> | null;
  reportingCodeTaxablePurchases: DeserializedType<T, 'Edm.Int32'>;
  negativeTax?: NoYes | null;
  reportingCodeTaxableSalesCreditNote: DeserializedType<T, 'Edm.Int32'>;
  taxPostingGroupId?: DeserializedType<T, 'Edm.String'> | null;
  typeOfTax?: TaxTypeW | null;
  reportingCodeBaseOutgoingDebitNote: DeserializedType<T, 'Edm.Int32'>;
  taxUnitId?: DeserializedType<T, 'Edm.String'> | null;
  reportingCodeBaseIncomingDebitNote: DeserializedType<T, 'Edm.Int32'>;
  taxRoundOff: DeserializedType<T, 'Edm.Decimal'>;
  descriptionQrBill?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxCodeCharges: SalesAutomaticSalesDocumentHeaderTaxChargesType<T>[];
  taxCodeLimit: TaxCodeLimitsType<T>[];
  taxReportingCodeEntity?: TaxReportingCodeEntitiesType<T> | null;
  taxPostingGroup?: TaxPostingGroupsType<T> | null;
  taxPeriod?: TaxPeriodsType<T> | null;
  taxCodeValueV2: TaxCodeValuesV2Type<T>[];
  taxItemGroup: TaxItemGroupsType<T>[];
  taxGroupData: TaxGroupDatasType<T>[];
}
