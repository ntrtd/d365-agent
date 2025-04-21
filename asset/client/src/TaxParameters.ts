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
import type { TaxParametersApi } from './TaxParametersApi';
import { NoYes } from './NoYes';
import { TaxObligationCompany } from './TaxObligationCompany';
import { CustVendExchRateDiffDocTypeRu } from './CustVendExchRateDiffDocTypeRu';
import { InvoiceTypeMy } from './InvoiceTypeMy';
import { RestoredVatGainCalcMethodRu } from './RestoredVatGainCalcMethodRu';
import { TaxGstInvoiceFormatMy } from './TaxGstInvoiceFormatMy';
import { TaxCalculationDateType } from './TaxCalculationDateType';
import { RestoredVatCalcMethodRu } from './RestoredVatCalcMethodRu';
import { CheckTaxGroups } from './CheckTaxGroups';
import { TaxCalcPrin } from './TaxCalcPrin';

/**
 * This class represents the entity "TaxParameters" of service "d365_metadata".
 */
export class TaxParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxParametersType<T>
{
  /**
   * Technical entity name for TaxParameters.
   */
  static override _entityName = 'TaxParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fixed Offset Posting.
   * @nullable
   */
  declare fixedOffsetPosting?: NoYes | null;
  /**
   * Legal Entityfor Intercompany Tax.
   * @nullable
   */
  declare legalEntityforIntercompanyTax?: TaxObligationCompany | null;
  /**
   * Bas Solution Name.
   * @nullable
   */
  declare basSolutionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Receivable Exchange Rate Type.
   * @nullable
   */
  declare salesTaxReceivableExchangeRateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Exchange Rate Difference Document Type.
   * @nullable
   */
  declare exchangeRateDifferenceDocumentType?: CustVendExchRateDiffDocTypeRu | null;
  /**
   * Gst Vendor Url.
   * @nullable
   */
  declare gstVendorUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mandatory Tax Direction.
   * @nullable
   */
  declare mandatoryTaxDirection?: NoYes | null;
  /**
   * Gst Audit File Format Name.
   * @nullable
   */
  declare gstAuditFileFormatName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deduct Tax Before Cash Discount Calculation.
   * @nullable
   */
  declare deductTaxBeforeCashDiscountCalculation?: NoYes | null;
  /**
   * Conditional Tax.
   * @nullable
   */
  declare conditionalTax?: NoYes | null;
  /**
   * Gstgaf Version.
   * @nullable
   */
  declare gstgafVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Per Invoice Line.
   * @nullable
   */
  declare taxPerInvoiceLine?: NoYes | null;
  /**
   * Bank Exchange Rate.
   * @nullable
   */
  declare bankExchangeRate?: NoYes | null;
  /**
   * Include Adjustment On Report.
   * @nullable
   */
  declare includeAdjustmentOnReport?: NoYes | null;
  /**
   * Default Invoice Type.
   * @nullable
   */
  declare defaultInvoiceType?: InvoiceTypeMy | null;
  /**
   * Restored Vat Gain Calculation Method.
   * @nullable
   */
  declare restoredVatGainCalculationMethod?: RestoredVatGainCalcMethodRu | null;
  /**
   * Is Consumption Tax Reports Enabled.
   * @nullable
   */
  declare isConsumptionTaxReportsEnabled?: NoYes | null;
  /**
   * Include Tax Value In Gst Summary.
   * @nullable
   */
  declare includeTaxValueInGstSummary?: NoYes | null;
  /**
   * Gst Exempt Print Code.
   * @nullable
   */
  declare gstExemptPrintCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reverse Sales Tax On Cash Discount.
   * @nullable
   */
  declare reverseSalesTaxOnCashDiscount?: NoYes | null;
  /**
   * Validate Tax Code.
   * @nullable
   */
  declare validateTaxCode?: NoYes | null;
  /**
   * Gst Invoice Format.
   * @nullable
   */
  declare gstInvoiceFormat?: TaxGstInvoiceFormatMy | null;
  /**
   * Use Vat Due Date In Reports.
   * @nullable
   */
  declare useVatDueDateInReports?: NoYes | null;
  /**
   * Tax Calculation Date.
   * @nullable
   */
  declare taxCalculationDate?: TaxCalculationDateType | null;
  /**
   * Sales Tax Payable Exchange Rate Type.
   * @nullable
   */
  declare salesTaxPayableExchangeRateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Auto Tax Search.
   * @nullable
   */
  declare autoTaxSearch?: NoYes | null;
  /**
   * Adjust Tax For Over Underpayment.
   * @nullable
   */
  declare adjustTaxForOverUnderpayment?: NoYes | null;
  /**
   * Cash Discount Is Applied In The Invoice.
   * @nullable
   */
  declare cashDiscountIsAppliedInTheInvoice?: NoYes | null;
  /**
   * Restored Vat Calculation Method.
   * @nullable
   */
  declare restoredVatCalculationMethod?: RestoredVatCalcMethodRu | null;
  /**
   * Bas Vendor Url.
   * @nullable
   */
  declare basVendorUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Item Sales Tax Group.
   * @nullable
   */
  declare defaultItemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amounts Include Tax In Journals.
   * @nullable
   */
  declare amountsIncludeTaxInJournals?: NoYes | null;
  /**
   * Is Tax Branch Enabled.
   * @nullable
   */
  declare isTaxBranchEnabled?: NoYes | null;
  /**
   * Date For Second Tax Raise.
   */
  declare dateForSecondTaxRaise: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Check Sales Tax Group Intersection.
   * @nullable
   */
  declare checkSalesTaxGroupIntersection?: CheckTaxGroups | null;
  /**
   * Gst Solution Name.
   * @nullable
   */
  declare gstSolutionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Sales Tax Group.
   * @nullable
   */
  declare defaultSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bas Format Name.
   * @nullable
   */
  declare basFormatName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Self Billed Invoice.
   * @nullable
   */
  declare useSelfBilledInvoice?: NoYes | null;
  /**
   * Check Sales Tax Transaction.
   * @nullable
   */
  declare checkSalesTaxTransaction?: NoYes | null;
  /**
   * Include Tax Code In Gst Summary.
   * @nullable
   */
  declare includeTaxCodeInGstSummary?: NoYes | null;
  /**
   * Incomming Vat Payment.
   * @nullable
   */
  declare incommingVatPayment?: NoYes | null;
  /**
   * Include Delimiter In Gst Summary.
   * @nullable
   */
  declare includeDelimiterInGstSummary?: NoYes | null;
  /**
   * Calculation Principle.
   * @nullable
   */
  declare calculationPrinciple?: TaxCalcPrin | null;
  /**
   * Sales Tax Taxation Rules.
   * @nullable
   */
  declare salesTaxTaxationRules?: NoYes | null;
  /**
   * Gst Summary Delimiter.
   * @nullable
   */
  declare gstSummaryDelimiter?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxParametersApi<T>) {
    super(_entityApi);
  }
}

export interface TaxParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fixedOffsetPosting?: NoYes | null;
  legalEntityforIntercompanyTax?: TaxObligationCompany | null;
  basSolutionName?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxReceivableExchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRateDifferenceDocumentType?: CustVendExchRateDiffDocTypeRu | null;
  gstVendorUrl?: DeserializedType<T, 'Edm.String'> | null;
  mandatoryTaxDirection?: NoYes | null;
  gstAuditFileFormatName?: DeserializedType<T, 'Edm.String'> | null;
  deductTaxBeforeCashDiscountCalculation?: NoYes | null;
  conditionalTax?: NoYes | null;
  gstgafVersion?: DeserializedType<T, 'Edm.String'> | null;
  taxPerInvoiceLine?: NoYes | null;
  bankExchangeRate?: NoYes | null;
  includeAdjustmentOnReport?: NoYes | null;
  defaultInvoiceType?: InvoiceTypeMy | null;
  restoredVatGainCalculationMethod?: RestoredVatGainCalcMethodRu | null;
  isConsumptionTaxReportsEnabled?: NoYes | null;
  includeTaxValueInGstSummary?: NoYes | null;
  gstExemptPrintCode?: DeserializedType<T, 'Edm.String'> | null;
  reverseSalesTaxOnCashDiscount?: NoYes | null;
  validateTaxCode?: NoYes | null;
  gstInvoiceFormat?: TaxGstInvoiceFormatMy | null;
  useVatDueDateInReports?: NoYes | null;
  taxCalculationDate?: TaxCalculationDateType | null;
  salesTaxPayableExchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  autoTaxSearch?: NoYes | null;
  adjustTaxForOverUnderpayment?: NoYes | null;
  cashDiscountIsAppliedInTheInvoice?: NoYes | null;
  restoredVatCalculationMethod?: RestoredVatCalcMethodRu | null;
  basVendorUrl?: DeserializedType<T, 'Edm.String'> | null;
  defaultItemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  amountsIncludeTaxInJournals?: NoYes | null;
  isTaxBranchEnabled?: NoYes | null;
  dateForSecondTaxRaise: DeserializedType<T, 'Edm.DateTimeOffset'>;
  checkSalesTaxGroupIntersection?: CheckTaxGroups | null;
  gstSolutionName?: DeserializedType<T, 'Edm.String'> | null;
  defaultSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  basFormatName?: DeserializedType<T, 'Edm.String'> | null;
  useSelfBilledInvoice?: NoYes | null;
  checkSalesTaxTransaction?: NoYes | null;
  includeTaxCodeInGstSummary?: NoYes | null;
  incommingVatPayment?: NoYes | null;
  includeDelimiterInGstSummary?: NoYes | null;
  calculationPrinciple?: TaxCalcPrin | null;
  salesTaxTaxationRules?: NoYes | null;
  gstSummaryDelimiter?: DeserializedType<T, 'Edm.String'> | null;
}
