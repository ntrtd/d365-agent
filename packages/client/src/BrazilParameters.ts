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
import type { BrazilParametersApi } from './BrazilParametersApi';
import { FbGeneralLedgerIntegrationBr } from './FbGeneralLedgerIntegrationBr';
import { InternationalTradeModalityBr } from './InternationalTradeModalityBr';
import { NoYes } from './NoYes';
import { PrimaryMethodBr } from './PrimaryMethodBr';

/**
 * This class represents the entity "BrazilParameters" of service "d365_metadata".
 */
export class BrazilParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BrazilParametersType<T>
{
  /**
   * Technical entity name for BrazilParameters.
   */
  static override _entityName = 'BrazilParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BrazilParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Volume Quantity.
   */
  declare volumeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Basic Tax Value For Pis In Cumulative Regimen.
   */
  declare basicTaxValueForPisInCumulativeRegimen: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Approximate Taxes Text.
   * @nullable
   */
  declare approximateTaxesText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Financial Dimension For Fiscal Establishment.
   * @nullable
   */
  declare financialDimensionForFiscalEstablishment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Basic Tax Value For Cofins In Non Cumulative Regimen.
   */
  declare basicTaxValueForCofinsInNonCumulativeRegimen: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Financial Dimension For Cost Center.
   * @nullable
   */
  declare financialDimensionForCostCenter?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Fiscal Document Item.
   * @nullable
   */
  declare taxFiscalDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Free Text Invoice Item.
   * @nullable
   */
  declare freeTextInvoiceItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Suframa Text For Issue Fiscal Document.
   * @nullable
   */
  declare suframaTextForIssueFiscalDocument?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Goods To Consume Product Type.
   * @nullable
   */
  declare goodsToConsumeProductType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fci Text.
   * @nullable
   */
  declare fciText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Primary Method Of Payment Description.
   * @nullable
   */
  declare purchasePrimaryMethodOfPaymentDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Complementary Fiscal Document Sales Tax Code For Pis.
   * @nullable
   */
  declare taxComplementaryFiscalDocumentSalesTaxCodeForPis?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ledger Integration Status.
   * @nullable
   */
  declare ledgerIntegrationStatus?: FbGeneralLedgerIntegrationBr | null;
  /**
   * Import Declaration Line Amount Is Based On.
   * @nullable
   */
  declare importDeclarationLineAmountIsBasedOn?: InternationalTradeModalityBr | null;
  /**
   * Fiscal Document Text Document Type.
   * @nullable
   */
  declare fiscalDocumentTextDocumentType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Referenced Fiscal Document Model 02 Sales Tax Code For Cofins.
   * @nullable
   */
  declare referencedFiscalDocumentModel02SalesTaxCodeForCofins?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Fiscal Documents Sales Tax Code For Pis.
   * @nullable
   */
  declare taxFiscalDocumentsSalesTaxCodeForPis?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Approximate Taxes Print Only Final User.
   * @nullable
   */
  declare approximateTaxesPrintOnlyFinalUser?: NoYes | null;
  /**
   * Project Fiscal Document Unit.
   * @nullable
   */
  declare projectFiscalDocumentUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Approximate Tax Value Text Id.
   * @nullable
   */
  declare retailApproximateTaxValueTextId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Purchase Primary Method Of Payment.
   * @nullable
   */
  declare purchasePrimaryMethodOfPayment?: PrimaryMethodBr | null;
  /**
   * Sales Primary Method Of Payment Description.
   * @nullable
   */
  declare salesPrimaryMethodOfPaymentDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Approximate Taxes Source.
   * @nullable
   */
  declare approximateTaxesSource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Fiscal Documents Sales Tax Code For Cofins.
   * @nullable
   */
  declare taxFiscalDocumentsSalesTaxCodeForCofins?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fiscal Document Text For Withholding Tax.
   * @nullable
   */
  declare fiscalDocumentTextForWithholdingTax?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Referenced Fiscal Document Model 02 Sales Tax Code For Pis.
   * @nullable
   */
  declare referencedFiscalDocumentModel02SalesTaxCodeForPis?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Basic Tax Value For Cofins In Cumulative Regimen.
   */
  declare basicTaxValueForCofinsInCumulativeRegimen: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Request For Quotation Operation Type.
   * @nullable
   */
  declare requestForQuotationOperationType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Complementary Fiscal Document Source Text.
   * @nullable
   */
  declare complementaryFiscalDocumentSourceText?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Primary Method Of Payment.
   * @nullable
   */
  declare salesPrimaryMethodOfPayment?: PrimaryMethodBr | null;
  /**
   * Volume Type.
   * @nullable
   */
  declare volumeType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Complementary Fiscal Document Sales Tax Code For Cofins.
   * @nullable
   */
  declare taxComplementaryFiscalDocumentSalesTaxCodeForCofins?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Import Declaration Text.
   * @nullable
   */
  declare importDeclarationText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Free Text Invoice Service Item.
   * @nullable
   */
  declare freeTextInvoiceServiceItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Document Enable Fix Issue Date.
   * @nullable
   */
  declare fiscalDocumentEnableFixIssueDate?: NoYes | null;
  /**
   * Purchase Requisition Operation Type.
   * @nullable
   */
  declare purchaseRequisitionOperationType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Enable Cfps Code.
   * @nullable
   */
  declare enableCfpsCode?: NoYes | null;
  /**
   * Basic Tax Value For Pis In Non Cumulative Regimen.
   */
  declare basicTaxValueForPisInNonCumulativeRegimen: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Icms Taxation Code Overrides Icmsst.
   * @nullable
   */
  declare icmsTaxationCodeOverridesIcmsst?: NoYes | null;
  /**
   * Referenced Fiscal Document Model 02 Sales Tax Code For Icms.
   * @nullable
   */
  declare referencedFiscalDocumentModel02SalesTaxCodeForIcms?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: BrazilParametersApi<T>) {
    super(_entityApi);
  }
}

export interface BrazilParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  volumeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  basicTaxValueForPisInCumulativeRegimen: DeserializedType<T, 'Edm.Decimal'>;
  approximateTaxesText?: DeserializedType<T, 'Edm.String'> | null;
  financialDimensionForFiscalEstablishment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  basicTaxValueForCofinsInNonCumulativeRegimen: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  financialDimensionForCostCenter?: DeserializedType<T, 'Edm.String'> | null;
  taxFiscalDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  freeTextInvoiceItem?: DeserializedType<T, 'Edm.String'> | null;
  suframaTextForIssueFiscalDocument?: DeserializedType<T, 'Edm.String'> | null;
  goodsToConsumeProductType?: DeserializedType<T, 'Edm.String'> | null;
  fciText?: DeserializedType<T, 'Edm.String'> | null;
  purchasePrimaryMethodOfPaymentDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxComplementaryFiscalDocumentSalesTaxCodeForPis?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  ledgerIntegrationStatus?: FbGeneralLedgerIntegrationBr | null;
  importDeclarationLineAmountIsBasedOn?: InternationalTradeModalityBr | null;
  fiscalDocumentTextDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  referencedFiscalDocumentModel02SalesTaxCodeForCofins?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxFiscalDocumentsSalesTaxCodeForPis?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  approximateTaxesPrintOnlyFinalUser?: NoYes | null;
  projectFiscalDocumentUnit?: DeserializedType<T, 'Edm.String'> | null;
  retailApproximateTaxValueTextId?: DeserializedType<T, 'Edm.String'> | null;
  purchasePrimaryMethodOfPayment?: PrimaryMethodBr | null;
  salesPrimaryMethodOfPaymentDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  approximateTaxesSource?: DeserializedType<T, 'Edm.String'> | null;
  taxFiscalDocumentsSalesTaxCodeForCofins?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  fiscalDocumentTextForWithholdingTax?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  referencedFiscalDocumentModel02SalesTaxCodeForPis?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  basicTaxValueForCofinsInCumulativeRegimen: DeserializedType<T, 'Edm.Decimal'>;
  requestForQuotationOperationType?: DeserializedType<T, 'Edm.String'> | null;
  complementaryFiscalDocumentSourceText?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  salesPrimaryMethodOfPayment?: PrimaryMethodBr | null;
  volumeType?: DeserializedType<T, 'Edm.String'> | null;
  taxComplementaryFiscalDocumentSalesTaxCodeForCofins?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  importDeclarationText?: DeserializedType<T, 'Edm.String'> | null;
  freeTextInvoiceServiceItem?: DeserializedType<T, 'Edm.String'> | null;
  fiscalDocumentEnableFixIssueDate?: NoYes | null;
  purchaseRequisitionOperationType?: DeserializedType<T, 'Edm.String'> | null;
  enableCfpsCode?: NoYes | null;
  basicTaxValueForPisInNonCumulativeRegimen: DeserializedType<T, 'Edm.Decimal'>;
  icmsTaxationCodeOverridesIcmsst?: NoYes | null;
  referencedFiscalDocumentModel02SalesTaxCodeForIcms?: DeserializedType<
    T,
    'Edm.String'
  > | null;
}
