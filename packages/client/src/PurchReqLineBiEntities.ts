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
import type { PurchReqLineBiEntitiesApi } from './PurchReqLineBiEntitiesApi';
import { NoYes } from './NoYes';
import { PurchReqRequisitionStatus } from './PurchReqRequisitionStatus';
import { RequisitionPurpose } from './RequisitionPurpose';
import { UnknownNoYes } from './UnknownNoYes';
import { PurchReqLineType } from './PurchReqLineType';
import { PurchReqRfqRequirement } from './PurchReqRfqRequirement';
import { PurchReqConsolidationStatus } from './PurchReqConsolidationStatus';
import { PurchReqPriceDiscountTransfer } from './PurchReqPriceDiscountTransfer';

/**
 * This class represents the entity "PurchReqLineBiEntities" of service "d365_metadata".
 */
export class PurchReqLineBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchReqLineBiEntitiesType<T>
{
  /**
   * Technical entity name for PurchReqLineBiEntities.
   */
  static override _entityName = 'PurchReqLineBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchReqLineBiEntities entity.
   */
  static _keys = ['PurchReqTable', 'SequenceNumber'];
  /**
   * Purch Req Table.
   */
  declare purchReqTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Price Unit.
   */
  declare priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Business Justification.
   */
  declare businessJustification: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Proj Category Id Data Area.
   * @nullable
   */
  declare projCategoryIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Ref Rec Id.
   */
  declare reasonRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Vend Account Data Area.
   * @nullable
   */
  declare vendAccountDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dim Id Data Area.
   * @nullable
   */
  declare inventDimIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Qty.
   */
  declare purchQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pre Payment Details.
   * @nullable
   */
  declare prePaymentDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Tax Item Group Id.
   * @nullable
   */
  declare projTaxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Rfq Case Id Data Area.
   * @nullable
   */
  declare purchRfqCaseIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Tax Group Id.
   * @nullable
   */
  declare projTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Operating Unit.
   */
  declare receivingOperatingUnit: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Purch Supplier Aux Id.
   * @nullable
   */
  declare purchSupplierAuxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Required Date.
   */
  declare requiredDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Proj Trans Id.
   * @nullable
   */
  declare projTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Account.
   * @nullable
   */
  declare vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Modified.
   * @nullable
   */
  declare isModified?: NoYes | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Rfq Case Id.
   * @nullable
   */
  declare purchRfqCaseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requisition Status.
   * @nullable
   */
  declare requisitionStatus?: PurchReqRequisitionStatus | null;
  /**
   * Purch Id Data Area.
   * @nullable
   */
  declare purchIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requisition Purpose.
   * @nullable
   */
  declare requisitionPurpose?: RequisitionPurpose | null;
  /**
   * Proj Tax Item Group Id Data Area.
   * @nullable
   */
  declare projTaxItemGroupIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Markup.
   */
  declare purchMarkup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Id Non Catalog.
   * @nullable
   */
  declare itemIdNonCatalog?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Reservation Line Psn.
   */
  declare budgetReservationLinePsn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Activity Number Data Area.
   * @nullable
   */
  declare activityNumberDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Ref Id.
   */
  declare lineRefId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Attention.
   * @nullable
   */
  declare attention?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cfop Table Br.
   */
  declare cfopTableBr: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Procurement Category.
   */
  declare procurementCategory: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Proj Sales Price.
   */
  declare projSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Pre Encumbrance Required.
   * @nullable
   */
  declare isPreEncumbranceRequired?: UnknownNoYes | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Complete.
   * @nullable
   */
  declare lineComplete?: NoYes | null;
  /**
   * Cfps Table Br.
   */
  declare cfpsTableBr: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Vend Quote Number.
   * @nullable
   */
  declare vendQuoteNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Sales Unit Of Measure.
   */
  declare projSalesUnitOfMeasure: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Purch Agreement.
   */
  declare purchAgreement: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Purch Unit Of Measure.
   */
  declare purchUnitOfMeasure: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Delivery Postal Address.
   */
  declare deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * External Item Id.
   * @nullable
   */
  declare externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Line Property Id.
   * @nullable
   */
  declare projLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Location Id.
   * @nullable
   */
  declare inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Purchase Order Generation Manual.
   * @nullable
   */
  declare isPurchaseOrderGenerationManual?: NoYes | null;
  /**
   * Buying Legal Entity.
   */
  declare buyingLegalEntity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Proj Category Id.
   * @nullable
   */
  declare projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: PurchReqLineType | null;
  /**
   * Purch Id.
   * @nullable
   */
  declare purchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfq Requirement.
   * @nullable
   */
  declare rfqRequirement?: PurchReqRfqRequirement | null;
  /**
   * Line Percent.
   */
  declare linePercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Group.
   * @nullable
   */
  declare assetGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Service Code Br.
   * @nullable
   */
  declare taxServiceCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Location Id Data Area.
   * @nullable
   */
  declare inventLocationIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Group Data Area.
   * @nullable
   */
  declare assetGroupDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Trans Id Data Area.
   * @nullable
   */
  declare projTransIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Line Property Id Data Area.
   * @nullable
   */
  declare projLinePropertyIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Saved.
   * @nullable
   */
  declare isSaved?: NoYes | null;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Proj Sales Currency Id.
   * @nullable
   */
  declare projSalesCurrencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Item Group Data Area.
   * @nullable
   */
  declare taxItemGroupDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Line Created.
   * @nullable
   */
  declare purchLineCreated?: NoYes | null;
  /**
   * Purch Req Consolidation Status.
   * @nullable
   */
  declare purchReqConsolidationStatus?: PurchReqConsolidationStatus | null;
  /**
   * Asset Rule Qualifier Option Local.
   */
  declare assetRuleQualifierOptionLocal: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Asset Rule Qualifier Option.
   */
  declare assetRuleQualifierOption: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Accounting Distribution Template.
   */
  declare accountingDistributionTemplate: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Price Discount Transfer.
   * @nullable
   */
  declare priceDiscountTransfer?: PurchReqPriceDiscountTransfer | null;
  /**
   * Purch Price.
   */
  declare purchPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Group Data Area.
   * @nullable
   */
  declare taxGroupDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Id Data Area.
   * @nullable
   */
  declare projIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Is Prepayment.
   * @nullable
   */
  declare isPrepayment?: NoYes | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Requisitioner.
   */
  declare requisitioner: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Line Disc.
   */
  declare lineDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dim Id.
   * @nullable
   */
  declare inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Purch Operation Type Br.
   */
  declare salesPurchOperationTypeBr: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Address Ref Table Id.
   */
  declare addressRefTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Address Ref Rec Id.
   */
  declare addressRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Item Id Data Area.
   * @nullable
   */
  declare itemIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Tax Group Id Data Area.
   * @nullable
   */
  declare projTaxGroupIdDataArea?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PurchReqLineBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface PurchReqLineBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  purchReqTable: DeserializedType<T, 'Edm.Int64'>;
  sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  businessJustification: DeserializedType<T, 'Edm.Int64'>;
  projCategoryIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  reasonRefRecId: DeserializedType<T, 'Edm.Int64'>;
  vendAccountDataArea?: DeserializedType<T, 'Edm.String'> | null;
  inventDimIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  purchQty: DeserializedType<T, 'Edm.Decimal'>;
  prePaymentDetails?: DeserializedType<T, 'Edm.String'> | null;
  projTaxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  purchRfqCaseIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  projTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  receivingOperatingUnit: DeserializedType<T, 'Edm.Int64'>;
  purchSupplierAuxId?: DeserializedType<T, 'Edm.String'> | null;
  requiredDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projTransId?: DeserializedType<T, 'Edm.String'> | null;
  vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  isModified?: NoYes | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  purchRfqCaseId?: DeserializedType<T, 'Edm.String'> | null;
  requisitionStatus?: PurchReqRequisitionStatus | null;
  purchIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  requisitionPurpose?: RequisitionPurpose | null;
  projTaxItemGroupIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  purchMarkup: DeserializedType<T, 'Edm.Decimal'>;
  itemIdNonCatalog?: DeserializedType<T, 'Edm.String'> | null;
  budgetReservationLinePsn: DeserializedType<T, 'Edm.Int64'>;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  activityNumberDataArea?: DeserializedType<T, 'Edm.String'> | null;
  lineRefId: DeserializedType<T, 'Edm.Guid'>;
  attention?: DeserializedType<T, 'Edm.String'> | null;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  cfopTableBr: DeserializedType<T, 'Edm.Int64'>;
  procurementCategory: DeserializedType<T, 'Edm.Int64'>;
  projSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  isPreEncumbranceRequired?: UnknownNoYes | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  lineComplete?: NoYes | null;
  cfpsTableBr: DeserializedType<T, 'Edm.Int64'>;
  vendQuoteNumber?: DeserializedType<T, 'Edm.String'> | null;
  projSalesUnitOfMeasure: DeserializedType<T, 'Edm.Int64'>;
  purchAgreement: DeserializedType<T, 'Edm.Int64'>;
  purchUnitOfMeasure: DeserializedType<T, 'Edm.Int64'>;
  deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  projLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  isPurchaseOrderGenerationManual?: NoYes | null;
  buyingLegalEntity: DeserializedType<T, 'Edm.Int64'>;
  projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  lineType?: PurchReqLineType | null;
  purchId?: DeserializedType<T, 'Edm.String'> | null;
  rfqRequirement?: PurchReqRfqRequirement | null;
  linePercent: DeserializedType<T, 'Edm.Decimal'>;
  assetGroup?: DeserializedType<T, 'Edm.String'> | null;
  taxServiceCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  inventLocationIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  assetGroupDataArea?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  projTransIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  projLinePropertyIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  isSaved?: NoYes | null;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  projSalesCurrencyId?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  taxItemGroupDataArea?: DeserializedType<T, 'Edm.String'> | null;
  purchLineCreated?: NoYes | null;
  purchReqConsolidationStatus?: PurchReqConsolidationStatus | null;
  assetRuleQualifierOptionLocal: DeserializedType<T, 'Edm.Int64'>;
  assetRuleQualifierOption: DeserializedType<T, 'Edm.Int64'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  accountingDistributionTemplate: DeserializedType<T, 'Edm.Int64'>;
  priceDiscountTransfer?: PurchReqPriceDiscountTransfer | null;
  purchPrice: DeserializedType<T, 'Edm.Decimal'>;
  taxGroupDataArea?: DeserializedType<T, 'Edm.String'> | null;
  projIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  isPrepayment?: NoYes | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  requisitioner: DeserializedType<T, 'Edm.Int64'>;
  lineDisc: DeserializedType<T, 'Edm.Decimal'>;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  salesPurchOperationTypeBr: DeserializedType<T, 'Edm.Int64'>;
  addressRefTableId: DeserializedType<T, 'Edm.Int32'>;
  addressRefRecId: DeserializedType<T, 'Edm.Int64'>;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  itemIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  projTaxGroupIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
}
