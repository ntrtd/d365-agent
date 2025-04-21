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
import type { MarkupTransBiEntitiesApi } from './MarkupTransBiEntitiesApi';
import { NoYes } from './NoYes';
import { MarkupClassificationBr } from './MarkupClassificationBr';
import { VatTypeRu } from './VatTypeRu';
import { MarkupModuleType } from './MarkupModuleType';
import { HeadingLine } from './HeadingLine';
import { MarkupCategory } from './MarkupCategory';
import { MarkupAllocateAfter } from './MarkupAllocateAfter';
import { PurchBookVatDocumentTypeInvoice_Ru } from './PurchBookVatDocumentTypeInvoice_Ru';
import { DocumentStatus } from './DocumentStatus';
import { McrMarkupTransCreatedBy } from './McrMarkupTransCreatedBy';

/**
 * This class represents the entity "MarkupTransBiEntities" of service "d365_metadata".
 */
export class MarkupTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MarkupTransBiEntitiesType<T>
{
  /**
   * Technical entity name for MarkupTransBiEntities.
   */
  static override _entityName = 'MarkupTransBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MarkupTransBiEntities entity.
   */
  static _keys = ['dataAreaId', 'TransRecId', 'TransTableId', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trans Rec Id.
   */
  declare transRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Trans Table Id.
   */
  declare transTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * From Amount.
   */
  declare fromAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Calculated Amount Mst W.
   */
  declare calculatedAmountMstW: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Factured Amount Ru.
   */
  declare facturedAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Orig Table Id.
   */
  declare origTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Inter Company Markup Value.
   */
  declare interCompanyMarkupValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Position.
   */
  declare position: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mcr Misc Charge Override.
   * @nullable
   */
  declare mcrMiscChargeOverride?: NoYes | null;
  /**
   * Is Overridden Line.
   * @nullable
   */
  declare isOverriddenLine?: NoYes | null;
  /**
   * Txt.
   * @nullable
   */
  declare txt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Markup Use Value.
   * @nullable
   */
  declare interCompanyMarkupUseValue?: NoYes | null;
  /**
   * Item Posted Ru.
   */
  declare itemPostedRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Calculated Prorated Amount.
   */
  declare calculatedProratedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Amount Vatmst Ru.
   */
  declare taxAmountVatmstRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Previous Overridden Field Value.
   * @nullable
   */
  declare previousOverriddenFieldValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Withhold Group.
   * @nullable
   */
  declare taxWithholdGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Goods In Route Id Ru.
   * @nullable
   */
  declare goodsInRouteIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Company Id.
   * @nullable
   */
  declare interCompanyCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Corrected Markup Trans.
   */
  declare correctedMarkupTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Modified.
   * @nullable
   */
  declare isModified?: NoYes | null;
  /**
   * Cust Invoice Line Id Ref.
   */
  declare custInvoiceLineIdRef: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Notional Charges In.
   * @nullable
   */
  declare notionalChargesIn?: NoYes | null;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Advanced Line Prorated.
   * @nullable
   */
  declare isAdvancedLineProrated?: NoYes | null;
  /**
   * Markup Code.
   * @nullable
   */
  declare markupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Notional Pct In.
   */
  declare notionalPctIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Compound.
   * @nullable
   */
  declare isCompound?: NoYes | null;
  /**
   * Mcr Reason Code.
   * @nullable
   */
  declare mcrReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Amount Mst W.
   */
  declare taxAmountMstW: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Exempt Price Inclusive Original Price.
   */
  declare taxExemptPriceInclusiveOriginalPrice: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Orig Rec Id.
   */
  declare origRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Markup Auto Table Rec Id.
   */
  declare markupAutoTableRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Mcr Installment Eligible.
   * @nullable
   */
  declare mcrInstallmentEligible?: NoYes | null;
  /**
   * Cust Vend Posted Ru.
   */
  declare custVendPostedRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Auto Charge.
   * @nullable
   */
  declare isAutoCharge?: NoYes | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Goods In Route To Delivery Ru.
   * @nullable
   */
  declare goodsInRouteToDeliveryRu?: NoYes | null;
  /**
   * Markup Tax Charge.
   * @nullable
   */
  declare markupTaxCharge?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Tax Amount Vat Ru.
   */
  declare taxAmountVatRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mcr Broker Contract Fee.
   * @nullable
   */
  declare mcrBrokerContractFee?: NoYes | null;
  /**
   * Posted.
   */
  declare posted: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customs Assessable Value In.
   * @nullable
   */
  declare customsAssessableValueIn?: NoYes | null;
  /**
   * Mcr Original Misc Charge Value.
   */
  declare mcrOriginalMiscChargeValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Invoice Id.
   * @nullable
   */
  declare interCompanyInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Markup Classification Br.
   * @nullable
   */
  declare markupClassificationBr?: MarkupClassificationBr | null;
  /**
   * Exchrate Second Ru.
   */
  declare exchrateSecondRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Vat Type Ru.
   * @nullable
   */
  declare taxVatTypeRu?: VatTypeRu | null;
  /**
   * Module Type.
   * @nullable
   */
  declare moduleType?: MarkupModuleType | null;
  /**
   * Mcr Retail Infocode Id.
   * @nullable
   */
  declare mcrRetailInfocodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Ref Rec Id.
   */
  declare interCompanyRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Skip In Free Invoices It.
   * @nullable
   */
  declare skipInFreeInvoicesIt?: NoYes | null;
  /**
   * Exch Rate Ru.
   */
  declare exchRateRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Shipping Promotion Discount.
   */
  declare retailShippingPromotionDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Keep.
   * @nullable
   */
  declare keep?: NoYes | null;
  /**
   * Module Category.
   * @nullable
   */
  declare moduleCategory?: HeadingLine | null;
  /**
   * Bank Lc Import Charge Allocation Sa.
   */
  declare bankLcImportChargeAllocationSa: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Markup Category.
   * @nullable
   */
  declare markupCategory?: MarkupCategory | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Deleted.
   * @nullable
   */
  declare isDeleted?: NoYes | null;
  /**
   * To Amount.
   */
  declare toAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mark Up Allocate After In.
   * @nullable
   */
  declare markUpAllocateAfterIn?: MarkupAllocateAfter | null;
  /**
   * Specific Unit Symbol.
   * @nullable
   */
  declare specificUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Tiered Charge.
   * @nullable
   */
  declare isTieredCharge?: NoYes | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Amount Excise Mst Ru.
   */
  declare taxAmountExciseMstRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vat Document Type Ru.
   * @nullable
   */
  declare vatDocumentTypeRu?: PurchBookVatDocumentTypeInvoice_Ru | null;
  /**
   * Previous Value.
   */
  declare previousValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sequence.
   */
  declare sequence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Calculated Amount.
   */
  declare calculatedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Withhold Item Group.
   */
  declare taxWithholdItemGroup: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Write Code.
   * @nullable
   */
  declare taxWriteCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Status.
   * @nullable
   */
  declare documentStatus?: DocumentStatus | null;
  /**
   * Markup Auto Line Rec Id.
   */
  declare markupAutoLineRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Amount Excise Ru.
   */
  declare taxAmountExciseRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Mcr Saved Table Id.
   */
  declare mcrSavedTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sat Product Code Mx.
   * @nullable
   */
  declare satProductCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Amount.
   */
  declare taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Mcr Coupon Markup.
   * @nullable
   */
  declare mcrCouponMarkup?: NoYes | null;
  /**
   * Withholding Type Code Mx.
   * @nullable
   */
  declare withholdingTypeCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cust Invoice Line Template.
   */
  declare custInvoiceLineTemplate: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sat Unit Code Mx.
   * @nullable
   */
  declare satUnitCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Value Vat Ru.
   */
  declare taxValueVatRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Autogenerated.
   * @nullable
   */
  declare taxAutogenerated?: NoYes | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Overridden Prorated Line.
   * @nullable
   */
  declare isOverriddenProratedLine?: NoYes | null;
  /**
   * Mcr Saved Rec Id.
   */
  declare mcrSavedRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exempt Price Inclusive Reduction Amount.
   */
  declare taxExemptPriceInclusiveReductionAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Mcr Markup Trans Created By.
   * @nullable
   */
  declare mcrMarkupTransCreatedBy?: McrMarkupTransCreatedBy | null;

  constructor(_entityApi: MarkupTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface MarkupTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transRecId: DeserializedType<T, 'Edm.Int64'>;
  transTableId: DeserializedType<T, 'Edm.Int32'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  fromAmount: DeserializedType<T, 'Edm.Decimal'>;
  calculatedAmountMstW: DeserializedType<T, 'Edm.Decimal'>;
  facturedAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  origTableId: DeserializedType<T, 'Edm.Int32'>;
  interCompanyMarkupValue: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  position: DeserializedType<T, 'Edm.Int32'>;
  mcrMiscChargeOverride?: NoYes | null;
  isOverriddenLine?: NoYes | null;
  txt?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyMarkupUseValue?: NoYes | null;
  itemPostedRu: DeserializedType<T, 'Edm.Decimal'>;
  calculatedProratedAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxAmountVatmstRu: DeserializedType<T, 'Edm.Decimal'>;
  previousOverriddenFieldValue?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdGroup?: DeserializedType<T, 'Edm.String'> | null;
  goodsInRouteIdRu?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  correctedMarkupTrans: DeserializedType<T, 'Edm.Int64'>;
  isModified?: NoYes | null;
  custInvoiceLineIdRef: DeserializedType<T, 'Edm.Int64'>;
  notionalChargesIn?: NoYes | null;
  value: DeserializedType<T, 'Edm.Decimal'>;
  isAdvancedLineProrated?: NoYes | null;
  markupCode?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  notionalPctIn: DeserializedType<T, 'Edm.Decimal'>;
  isCompound?: NoYes | null;
  mcrReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  taxAmountMstW: DeserializedType<T, 'Edm.Decimal'>;
  taxExemptPriceInclusiveOriginalPrice: DeserializedType<T, 'Edm.Decimal'>;
  origRecId: DeserializedType<T, 'Edm.Int64'>;
  markupAutoTableRecId: DeserializedType<T, 'Edm.Int64'>;
  mcrInstallmentEligible?: NoYes | null;
  custVendPostedRu: DeserializedType<T, 'Edm.Decimal'>;
  isAutoCharge?: NoYes | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  goodsInRouteToDeliveryRu?: NoYes | null;
  markupTaxCharge?: DeserializedType<T, 'Edm.Binary'> | null;
  taxAmountVatRu: DeserializedType<T, 'Edm.Decimal'>;
  mcrBrokerContractFee?: NoYes | null;
  posted: DeserializedType<T, 'Edm.Decimal'>;
  customsAssessableValueIn?: NoYes | null;
  mcrOriginalMiscChargeValue: DeserializedType<T, 'Edm.Decimal'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  markupClassificationBr?: MarkupClassificationBr | null;
  exchrateSecondRu: DeserializedType<T, 'Edm.Decimal'>;
  taxVatTypeRu?: VatTypeRu | null;
  moduleType?: MarkupModuleType | null;
  mcrRetailInfocodeId?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyRefRecId: DeserializedType<T, 'Edm.Int64'>;
  skipInFreeInvoicesIt?: NoYes | null;
  exchRateRu: DeserializedType<T, 'Edm.Decimal'>;
  retailShippingPromotionDiscount: DeserializedType<T, 'Edm.Decimal'>;
  keep?: NoYes | null;
  moduleCategory?: HeadingLine | null;
  bankLcImportChargeAllocationSa: DeserializedType<T, 'Edm.Int64'>;
  markupCategory?: MarkupCategory | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  isDeleted?: NoYes | null;
  toAmount: DeserializedType<T, 'Edm.Decimal'>;
  markUpAllocateAfterIn?: MarkupAllocateAfter | null;
  specificUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  isTieredCharge?: NoYes | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  taxAmountExciseMstRu: DeserializedType<T, 'Edm.Decimal'>;
  vatDocumentTypeRu?: PurchBookVatDocumentTypeInvoice_Ru | null;
  previousValue: DeserializedType<T, 'Edm.Decimal'>;
  sequence: DeserializedType<T, 'Edm.Int32'>;
  calculatedAmount: DeserializedType<T, 'Edm.Decimal'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  taxWithholdItemGroup: DeserializedType<T, 'Edm.Int64'>;
  taxWriteCode?: DeserializedType<T, 'Edm.String'> | null;
  documentStatus?: DocumentStatus | null;
  markupAutoLineRecId: DeserializedType<T, 'Edm.Int64'>;
  taxAmountExciseRu: DeserializedType<T, 'Edm.Decimal'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  mcrSavedTableId: DeserializedType<T, 'Edm.Int32'>;
  satProductCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  overrideSalesTax?: NoYes | null;
  mcrCouponMarkup?: NoYes | null;
  withholdingTypeCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  custInvoiceLineTemplate: DeserializedType<T, 'Edm.Int64'>;
  satUnitCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  taxValueVatRu: DeserializedType<T, 'Edm.Decimal'>;
  taxAutogenerated?: NoYes | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  isOverriddenProratedLine?: NoYes | null;
  mcrSavedRecId: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptPriceInclusiveReductionAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  mcrMarkupTransCreatedBy?: McrMarkupTransCreatedBy | null;
}
