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
import type { SalesLineBiEntitiesApi } from './SalesLineBiEntitiesApi';
import { NoYes } from './NoYes';
import { InterCompanySkipUpdate } from './InterCompanySkipUpdate';
import { LineDeliveryType } from './LineDeliveryType';
import { DomExceptionType } from './DomExceptionType';
import { DomProcessStatus } from './DomProcessStatus';
import { InterCompanyOrigin } from './InterCompanyOrigin';
import { SalesServiceLineTypeIt } from './SalesServiceLineTypeIt';
import { SoftReserveBlockLevel } from './SoftReserveBlockLevel';
import { SalesSalesOrderCreationMethod } from './SalesSalesOrderCreationMethod';
import { SalesType } from './SalesType';
import { SalesStatus } from './SalesStatus';
import { PriceDiscSystemSource } from './PriceDiscSystemSource';
import { BundleLineStatus } from './BundleLineStatus';
import { SubBillRevenueSplitAllocationMethod } from './SubBillRevenueSplitAllocationMethod';
import { ItemReservation } from './ItemReservation';
import { ReturnStatusLine } from './ReturnStatusLine';
import { MpsFullRunCtpStatus } from './MpsFullRunCtpStatus';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { BundleLineType } from './BundleLineType';
import { TradeLineDlvType } from './TradeLineDlvType';
import { ShipCarrierDlvType } from './ShipCarrierDlvType';
import { InventRefType } from './InventRefType';
import { SalesSourcingOrigin } from './SalesSourcingOrigin';
import { TradeIntegrationType } from './TradeIntegrationType';

/**
 * This class represents the entity "SalesLineBiEntities" of service "d365_metadata".
 */
export class SalesLineBiEntities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesLineBiEntitiesType<T>
{
  /**
   * Technical entity name for SalesLineBiEntities.
   */
  static override _entityName = 'SalesLineBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesLineBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SalesId', 'LineCreationSequenceNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Id.
   */
  declare salesId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Creation Sequence Number.
   */
  declare lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Soft Reserved Externally.
   * @nullable
   */
  declare isSoftReservedExternally?: NoYes | null;
  /**
   * Return Disposition Code Id.
   * @nullable
   */
  declare returnDispositionCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Service Adjustment Offset Datasource.
   * @nullable
   */
  declare inventoryServiceAdjustmentOffsetDatasource?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Proj Category Id.
   * @nullable
   */
  declare projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Distribution Template.
   */
  declare accountingDistributionTemplate: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Mps Update Exclude Sales Line.
   * @nullable
   */
  declare mpsUpdateExcludeSalesLine?: NoYes | null;
  /**
   * Confirmed Dlv.
   */
  declare confirmedDlv: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Packed Extensions.
   * @nullable
   */
  declare packedExtensions?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Skip Update.
   * @nullable
   */
  declare skipUpdate?: InterCompanySkipUpdate | null;
  /**
   * Pds Batch Attrib Auto Res.
   * @nullable
   */
  declare pdsBatchAttribAutoRes?: NoYes | null;
  /**
   * Skip Delivery Schedule Update.
   * @nullable
   */
  declare skipDeliveryScheduleUpdate?: NoYes | null;
  /**
   * Line Delivery Type.
   * @nullable
   */
  declare lineDeliveryType?: LineDeliveryType | null;
  /**
   * Inventory Service Auto Offset.
   * @nullable
   */
  declare inventoryServiceAutoOffset?: NoYes | null;
  /**
   * Invoice Gtd Id Ru.
   * @nullable
   */
  declare invoiceGtdIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Line Property Id.
   * @nullable
   */
  declare projLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Orig State Id.
   * @nullable
   */
  declare origStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multi Ln Disc.
   */
  declare multiLnDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Order Id.
   * @nullable
   */
  declare serviceOrderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Trans Id.
   * @nullable
   */
  declare inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planning Priority.
   */
  declare planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rev Rec Bundle Ratio.
   */
  declare revRecBundleRatio: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Id.
   */
  declare taxId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sourcing Company Id.
   * @nullable
   */
  declare sourcingCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dom Exception Type.
   * @nullable
   */
  declare domExceptionType?: DomExceptionType | null;
  /**
   * Sub Bill Term Schedule Line Rec Id.
   */
  declare subBillTermScheduleLineRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * County Orig Dest.
   * @nullable
   */
  declare countyOrigDest?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Line Reference No.
   * @nullable
   */
  declare orderLineReferenceNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Cw Invent Deliver Now.
   */
  declare pdsCwInventDeliverNow: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dom Processed.
   * @nullable
   */
  declare domProcessed?: DomProcessStatus | null;
  /**
   * Rev Rec Contract Start Date.
   */
  declare revRecContractStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pds Exclude From Rebate.
   * @nullable
   */
  declare pdsExcludeFromRebate?: NoYes | null;
  /**
   * Rev Rec Bundle Net Amount.
   */
  declare revRecBundleNetAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customs Document Type Mx.
   * @nullable
   */
  declare customsDocumentTypeMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Ref.
   * @nullable
   */
  declare customerRef?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dlv Term.
   * @nullable
   */
  declare dlvTerm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Origin.
   * @nullable
   */
  declare interCompanyOrigin?: InterCompanyOrigin | null;
  /**
   * Sat Unit Code Mx.
   * @nullable
   */
  declare satUnitCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unbilled Revenue Credit.
   * @nullable
   */
  declare unbilledRevenueCredit?: NoYes | null;
  /**
   * Inventory Service Adjustment Offset Physical Measure.
   * @nullable
   */
  declare inventoryServiceAdjustmentOffsetPhysicalMeasure?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Rev Rec Occurrences.
   */
  declare revRecOccurrences: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Address Ref Rec Id.
   */
  declare addressRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Statistic Value Lt.
   */
  declare statisticValueLt: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Multi Ln Percent.
   */
  declare multiLnPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Service Line Type It.
   * @nullable
   */
  declare serviceLineTypeIt?: SalesServiceLineTypeIt | null;
  /**
   * Packing Unit Qty.
   */
  declare packingUnitQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Revenue Split.
   * @nullable
   */
  declare subBillRevenueSplit?: NoYes | null;
  /**
   * Psa Proj Proposal Invent Qty.
   */
  declare psaProjProposalInventQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sat Product Code Mx.
   * @nullable
   */
  declare satProductCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Unit.
   */
  declare priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Service Reservation Id.
   * @nullable
   */
  declare inventoryServiceReservationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pds Same Lot.
   * @nullable
   */
  declare pdsSameLot?: NoYes | null;
  /**
   * Invent Dim Id.
   * @nullable
   */
  declare inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Revenue Split Parent Line Rec Id.
   */
  declare subBillRevenueSplitParentLineRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Country Region Name Ru.
   * @nullable
   */
  declare countryRegionNameRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Is Term Split.
   * @nullable
   */
  declare subBillIsTermSplit?: NoYes | null;
  /**
   * Transport.
   * @nullable
   */
  declare transport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rev Rec Bundle Parent.
   * @nullable
   */
  declare revRecBundleParent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customs Name Mx.
   * @nullable
   */
  declare customsNameMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customs Material Type Mx.
   * @nullable
   */
  declare customsMaterialTypeMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Skip Create Markup.
   * @nullable
   */
  declare skipCreateMarkup?: NoYes | null;
  /**
   * Return Allow Reservation.
   * @nullable
   */
  declare returnAllowReservation?: NoYes | null;
  /**
   * Soft Reserve Block Level.
   * @nullable
   */
  declare softReserveBlockLevel?: SoftReserveBlockLevel | null;
  /**
   * Prepayment Rec Id It.
   */
  declare prepaymentRecIdIt: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Created By Parm Id It.
   * @nullable
   */
  declare createdByParmIdIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Blocked.
   * @nullable
   */
  declare blocked?: NoYes | null;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Header.
   * @nullable
   */
  declare lineHeader?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Id Ru.
   * @nullable
   */
  declare assetIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rev Rec Bundle Qty Ordered.
   */
  declare revRecBundleQtyOrdered: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Sales Order Creation Method.
   * @nullable
   */
  declare salesSalesOrderCreationMethod?: SalesSalesOrderCreationMethod | null;
  /**
   * Credit Note Reason Code.
   */
  declare creditNoteReasonCode: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Retail Variant Id.
   * @nullable
   */
  declare retailVariantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remain Invent Physical.
   */
  declare remainInventPhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Group.
   * @nullable
   */
  declare salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exim Ports In.
   */
  declare eximPortsIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Posting Profile Ru.
   * @nullable
   */
  declare postingProfileRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fin Tag.
   */
  declare finTag: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Over Delivery Pct.
   */
  declare overDeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Skip Price Disc Calc In Bulk Creation.
   * @nullable
   */
  declare skipPriceDiscCalcInBulkCreation?: NoYes | null;
  /**
   * System Entry Change Policy.
   */
  declare systemEntryChangePolicy: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Purchorder Form Num.
   * @nullable
   */
  declare purchorderFormNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rev Rec Bundle Line Disc.
   */
  declare revRecBundleLineDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ship Carrier Account Code.
   * @nullable
   */
  declare shipCarrierAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Samples Mx.
   * @nullable
   */
  declare samplesMx?: NoYes | null;
  /**
   * Delivery Tax Item Group Br.
   * @nullable
   */
  declare deliveryTaxItemGroupBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rev Rec Bundle Sales Price.
   */
  declare revRecBundleSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rev Rec Revenue Schedule Id.
   * @nullable
   */
  declare revRecRevenueScheduleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Cw Remain Invent Physical.
   */
  declare pdsCwRemainInventPhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remain Sales Financial.
   */
  declare remainSalesFinancial: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Is Split Billing.
   * @nullable
   */
  declare subBillIsSplitBilling?: NoYes | null;
  /**
   * Line Disc.
   */
  declare lineDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Under Delivery Pct.
   */
  declare underDeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bar Code Type.
   * @nullable
   */
  declare barCodeType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stat Proc Id.
   * @nullable
   */
  declare statProcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Item Id.
   * @nullable
   */
  declare externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Postal Address.
   */
  declare deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sat Customs Qty Mx.
   */
  declare satCustomsQtyMx: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity Error Correction Methods.
   * @nullable
   */
  declare quantityErrorCorrectionMethods?: DeserializedType<
    T,
    'Edm.Binary'
  > | null;
  /**
   * Mcr Order Line 2 Price History Ref.
   */
  declare mcrOrderLine2PriceHistoryRef: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sales Type.
   * @nullable
   */
  declare salesType?: SalesType | null;
  /**
   * Cust Group.
   * @nullable
   */
  declare custGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Ref Id.
   * @nullable
   */
  declare inventRefId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Unit.
   * @nullable
   */
  declare packingUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Port.
   * @nullable
   */
  declare port?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remain Invent Financial.
   */
  declare remainInventFinancial: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ship Carrier Id.
   * @nullable
   */
  declare shipCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dom Rec Version.
   */
  declare domRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Dom Ignore.
   * @nullable
   */
  declare domIgnore?: NoYes | null;
  /**
   * Shipping Date Confirmed.
   */
  declare shippingDateConfirmed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Markup.
   */
  declare salesMarkup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dlv Mode.
   * @nullable
   */
  declare dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Autogenerated.
   * @nullable
   */
  declare taxAutogenerated?: NoYes | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sub Bill Is Revenue Split Child.
   * @nullable
   */
  declare subBillIsRevenueSplitChild?: NoYes | null;
  /**
   * Gup Free Item Line Rec Id.
   */
  declare gupFreeItemLineRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invent Ref Trans Id.
   * @nullable
   */
  declare inventRefTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignment Mx.
   * @nullable
   */
  declare consignmentMx?: NoYes | null;
  /**
   * Customer Line Num.
   */
  declare customerLineNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Rev Rec Bundle Sales Status.
   * @nullable
   */
  declare revRecBundleSalesStatus?: SalesStatus | null;
  /**
   * Proj Funding Source.
   */
  declare projFundingSource: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cost Price.
   */
  declare costPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Qty.
   */
  declare salesQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * System Entry Source.
   * @nullable
   */
  declare systemEntrySource?: PriceDiscSystemSource | null;
  /**
   * Sourcing Invent Site Id.
   * @nullable
   */
  declare sourcingInventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Date Requested.
   */
  declare shippingDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Deliver Now.
   */
  declare salesDeliverNow: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Deadline.
   */
  declare returnDeadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Carrier Account.
   * @nullable
   */
  declare shipCarrierAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit.
   * @nullable
   */
  declare salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sat Tariff Fraction Mx.
   * @nullable
   */
  declare satTariffFractionMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rev Rec Contract End Date.
   */
  declare revRecContractEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Bundle Line Status.
   * @nullable
   */
  declare bundleLineStatus?: BundleLineStatus | null;
  /**
   * Transaction Code.
   * @nullable
   */
  declare transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identifier Customs Document Mx.
   * @nullable
   */
  declare identifierCustomsDocumentMx?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Psa Proj Proposal Qty.
   */
  declare psaProjProposalQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ref Return Invoice Trans W.
   */
  declare refReturnInvoiceTransW: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Psa Contract Line Num.
   * @nullable
   */
  declare psaContractLineNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exim Product Group In.
   */
  declare eximProductGroupIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tam Rebate Trans Id.
   * @nullable
   */
  declare tamRebateTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Description Mx.
   * @nullable
   */
  declare materialDescriptionMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Revenue Split Allocation Method.
   * @nullable
   */
  declare subBillRevenueSplitAllocationMethod?: SubBillRevenueSplitAllocationMethod | null;
  /**
   * Rev Rec Bundle Line Percent.
   */
  declare revRecBundleLinePercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reservation.
   * @nullable
   */
  declare reservation?: ItemReservation | null;
  /**
   * Price Agreement Date Ru.
   */
  declare priceAgreementDateRu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Skip Intercompany Purch Order Accounting Distribution.
   * @nullable
   */
  declare skipIntercompanyPurchOrderAccountingDistribution?: NoYes | null;
  /**
   * E Invoice Account Code.
   * @nullable
   */
  declare eInvoiceAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Item Rebate Group Id.
   * @nullable
   */
  declare pdsItemRebateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Same Lot Override.
   * @nullable
   */
  declare pdsSameLotOverride?: NoYes | null;
  /**
   * Rev Rec Bundle Main Parent.
   * @nullable
   */
  declare revRecBundleMainParent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Carrier Postal Address.
   */
  declare shipCarrierPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sync Purch Line.
   * @nullable
   */
  declare syncPurchLine?: NoYes | null;
  /**
   * Return Status.
   * @nullable
   */
  declare returnStatus?: ReturnStatusLine | null;
  /**
   * Delivery Tax Group Br.
   * @nullable
   */
  declare deliveryTaxGroupBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Closed Date.
   */
  declare returnClosedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Date Requested.
   */
  declare receiptDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Matching Agreement Line.
   */
  declare matchingAgreementLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Case Tagging.
   * @nullable
   */
  declare caseTagging?: NoYes | null;
  /**
   * Mps Full Run Ctp Status.
   * @nullable
   */
  declare mpsFullRunCtpStatus?: MpsFullRunCtpStatus | null;
  /**
   * Return Arrival Date.
   */
  declare returnArrivalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sub Bill Revenue Split Parent Amount.
   */
  declare subBillRevenueSplitParentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Skip Price Disc Calc On Import.
   * @nullable
   */
  declare skipPriceDiscCalcOnImport?: NoYes | null;
  /**
   * Mcr Margin Updated.
   * @nullable
   */
  declare mcrMarginUpdated?: NoYes | null;
  /**
   * Ship Carrier Name.
   * @nullable
   */
  declare shipCarrierName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Status.
   * @nullable
   */
  declare salesStatus?: SalesStatus | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Date Control Type.
   * @nullable
   */
  declare deliveryDateControlType?: SalesDeliveryDateControlType | null;
  /**
   * Pds Cw Remain Invent Financial.
   */
  declare pdsCwRemainInventFinancial: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Kitting Skip Update Helper.
   * @nullable
   */
  declare kittingSkipUpdateHelper?: NoYes | null;
  /**
   * Item Route Id.
   * @nullable
   */
  declare itemRouteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stat Triangular Deal.
   * @nullable
   */
  declare statTriangularDeal?: NoYes | null;
  /**
   * Stocked Product.
   * @nullable
   */
  declare stockedProduct?: NoYes | null;
  /**
   * Customs Doc Number Mx.
   * @nullable
   */
  declare customsDocNumberMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Skip Price Disc Calc.
   * @nullable
   */
  declare skipPriceDiscCalc?: NoYes | null;
  /**
   * Inter Company Invent Trans Id.
   * @nullable
   */
  declare interCompanyInventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sourcing Vend Account.
   * @nullable
   */
  declare sourcingVendAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Category.
   */
  declare salesCategory: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Rev Rec Bundle Qty.
   */
  declare revRecBundleQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pds Cw Qty.
   */
  declare pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rev Rec Bundle.
   * @nullable
   */
  declare revRecBundle?: NoYes | null;
  /**
   * Bundle Line Type.
   * @nullable
   */
  declare bundleLineType?: BundleLineType | null;
  /**
   * Scrap.
   * @nullable
   */
  declare scrap?: NoYes | null;
  /**
   * Intrastat Fulfillment Date Hu.
   */
  declare intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Type.
   * @nullable
   */
  declare deliveryType?: TradeLineDlvType | null;
  /**
   * Is Free Item Line.
   * @nullable
   */
  declare isFreeItemLine?: NoYes | null;
  /**
   * Sourcing Invent Location Id.
   * @nullable
   */
  declare sourcingInventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Carrier Dlv Type.
   * @nullable
   */
  declare shipCarrierDlvType?: ShipCarrierDlvType | null;
  /**
   * Agreement Skip Auto Link.
   * @nullable
   */
  declare agreementSkipAutoLink?: NoYes | null;
  /**
   * Invent Ref Type.
   * @nullable
   */
  declare inventRefType?: InventRefType | null;
  /**
   * Pds Cw Expected Ret Qty.
   */
  declare pdsCwExpectedRetQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tam Rebate Exclude Rebate Management.
   * @nullable
   */
  declare tamRebateExcludeRebateManagement?: NoYes | null;
  /**
   * Orig Country Region Id.
   * @nullable
   */
  declare origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dom Processed Date Time.
   */
  declare domProcessedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Credit Note Internal Ref Pl.
   */
  declare creditNoteInternalRefPl: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Mcr Margin Percent.
   */
  declare mcrMarginPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Skip Assign Invent Trans Id.
   * @nullable
   */
  declare skipAssignInventTransId?: NoYes | null;
  /**
   * Item Replaced.
   * @nullable
   */
  declare itemReplaced?: NoYes | null;
  /**
   * Expected Ret Qty.
   */
  declare expectedRetQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sat Custom Unit Of Measure Mx.
   * @nullable
   */
  declare satCustomUnitOfMeasureMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pallet Tagging.
   * @nullable
   */
  declare palletTagging?: NoYes | null;
  /**
   * Manual Entry Changepolicy.
   */
  declare manualEntryChangepolicy: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Rev Rec Is Bundle Component.
   * @nullable
   */
  declare revRecIsBundleComponent?: NoYes | null;
  /**
   * Skip Defaulting Sourcing Vendor.
   * @nullable
   */
  declare skipDefaultingSourcingVendor?: NoYes | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Tagging.
   * @nullable
   */
  declare itemTagging?: NoYes | null;
  /**
   * Sub Bill Detail Line Rec Id.
   */
  declare subBillDetailLineRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Item Bom Id.
   * @nullable
   */
  declare itemBomId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Block Qty.
   */
  declare retailBlockQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Complete.
   * @nullable
   */
  declare complete?: NoYes | null;
  /**
   * Property Number Mx.
   * @nullable
   */
  declare propertyNumberMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Withhold Item Group Heading Th.
   */
  declare taxWithholdItemGroupHeadingTh: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Withhold Group.
   * @nullable
   */
  declare taxWithholdGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Auto Create Inter Company Orders.
   * @nullable
   */
  declare autoCreateInterCompanyOrders?: NoYes | null;
  /**
   * Invent Deliver Now.
   */
  declare inventDeliverNow: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Percent.
   */
  declare linePercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sync Intercompany Purch Line.
   * @nullable
   */
  declare syncIntercompanyPurchLine?: NoYes | null;
  /**
   * Intrastat Commodity.
   */
  declare intrastatCommodity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Receipt Date Confirmed.
   */
  declare receiptDateConfirmed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Goods For Free It.
   * @nullable
   */
  declare goodsForFreeIt?: NoYes | null;
  /**
   * Sourcing Origin.
   * @nullable
   */
  declare sourcingOrigin?: SalesSourcingOrigin | null;
  /**
   * Qty Ordered.
   */
  declare qtyOrdered: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dom Iterations.
   */
  declare domIterations: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Proj Trans Id.
   * @nullable
   */
  declare projTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rev Rec Bundle Remain Invent Physical.
   */
  declare revRecBundleRemainInventPhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rev Rec Bundle Remain Sales Physical.
   */
  declare revRecBundleRemainSalesPhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mps Exclude Sales Line.
   * @nullable
   */
  declare mpsExcludeSalesLine?: NoYes | null;
  /**
   * Bar Code.
   * @nullable
   */
  declare barCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Invent Trans Id Return.
   * @nullable
   */
  declare inventTransIdReturn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remain Sales Physical.
   */
  declare remainSalesPhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Address Ref Table Id.
   */
  declare addressRefTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Customs Doc Date Mx.
   */
  declare customsDocDateMx: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Integration.
   * @nullable
   */
  declare isIntegration?: TradeIntegrationType | null;

  constructor(_entityApi: SalesLineBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesLineBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesId: DeserializedType<T, 'Edm.String'>;
  lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  isSoftReservedExternally?: NoYes | null;
  returnDispositionCodeId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryServiceAdjustmentOffsetDatasource?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  accountingDistributionTemplate: DeserializedType<T, 'Edm.Int64'>;
  mpsUpdateExcludeSalesLine?: NoYes | null;
  confirmedDlv: DeserializedType<T, 'Edm.DateTimeOffset'>;
  packedExtensions?: DeserializedType<T, 'Edm.Binary'> | null;
  skipUpdate?: InterCompanySkipUpdate | null;
  pdsBatchAttribAutoRes?: NoYes | null;
  skipDeliveryScheduleUpdate?: NoYes | null;
  lineDeliveryType?: LineDeliveryType | null;
  inventoryServiceAutoOffset?: NoYes | null;
  invoiceGtdIdRu?: DeserializedType<T, 'Edm.String'> | null;
  projLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  origStateId?: DeserializedType<T, 'Edm.String'> | null;
  multiLnDisc: DeserializedType<T, 'Edm.Decimal'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  serviceOrderId?: DeserializedType<T, 'Edm.String'> | null;
  inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  revRecBundleRatio: DeserializedType<T, 'Edm.Decimal'>;
  taxId: DeserializedType<T, 'Edm.Int64'>;
  sourcingCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  domExceptionType?: DomExceptionType | null;
  subBillTermScheduleLineRecId: DeserializedType<T, 'Edm.Int64'>;
  countyOrigDest?: DeserializedType<T, 'Edm.String'> | null;
  orderLineReferenceNo?: DeserializedType<T, 'Edm.String'> | null;
  pdsCwInventDeliverNow: DeserializedType<T, 'Edm.Decimal'>;
  domProcessed?: DomProcessStatus | null;
  revRecContractStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  pdsExcludeFromRebate?: NoYes | null;
  revRecBundleNetAmount: DeserializedType<T, 'Edm.Decimal'>;
  customsDocumentTypeMx?: DeserializedType<T, 'Edm.String'> | null;
  customerRef?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  dlvTerm?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyOrigin?: InterCompanyOrigin | null;
  satUnitCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  unbilledRevenueCredit?: NoYes | null;
  inventoryServiceAdjustmentOffsetPhysicalMeasure?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  revRecOccurrences: DeserializedType<T, 'Edm.Int32'>;
  addressRefRecId: DeserializedType<T, 'Edm.Int64'>;
  statisticValueLt: DeserializedType<T, 'Edm.Decimal'>;
  multiLnPercent: DeserializedType<T, 'Edm.Decimal'>;
  serviceLineTypeIt?: SalesServiceLineTypeIt | null;
  packingUnitQty: DeserializedType<T, 'Edm.Decimal'>;
  subBillRevenueSplit?: NoYes | null;
  psaProjProposalInventQty: DeserializedType<T, 'Edm.Decimal'>;
  satProductCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  inventoryServiceReservationId?: DeserializedType<T, 'Edm.String'> | null;
  pdsSameLot?: NoYes | null;
  inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  subBillRevenueSplitParentLineRecId: DeserializedType<T, 'Edm.Int64'>;
  countryRegionNameRu?: DeserializedType<T, 'Edm.String'> | null;
  subBillIsTermSplit?: NoYes | null;
  transport?: DeserializedType<T, 'Edm.String'> | null;
  revRecBundleParent?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  customsNameMx?: DeserializedType<T, 'Edm.String'> | null;
  customsMaterialTypeMx?: DeserializedType<T, 'Edm.String'> | null;
  skipCreateMarkup?: NoYes | null;
  returnAllowReservation?: NoYes | null;
  softReserveBlockLevel?: SoftReserveBlockLevel | null;
  prepaymentRecIdIt: DeserializedType<T, 'Edm.Int64'>;
  createdByParmIdIt?: DeserializedType<T, 'Edm.String'> | null;
  blocked?: NoYes | null;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  lineHeader?: DeserializedType<T, 'Edm.String'> | null;
  assetIdRu?: DeserializedType<T, 'Edm.String'> | null;
  revRecBundleQtyOrdered: DeserializedType<T, 'Edm.Decimal'>;
  salesSalesOrderCreationMethod?: SalesSalesOrderCreationMethod | null;
  creditNoteReasonCode: DeserializedType<T, 'Edm.Int64'>;
  retailVariantId?: DeserializedType<T, 'Edm.String'> | null;
  remainInventPhysical: DeserializedType<T, 'Edm.Decimal'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  eximPortsIn: DeserializedType<T, 'Edm.Int64'>;
  postingProfileRu?: DeserializedType<T, 'Edm.String'> | null;
  finTag: DeserializedType<T, 'Edm.Int64'>;
  overDeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  skipPriceDiscCalcInBulkCreation?: NoYes | null;
  systemEntryChangePolicy: DeserializedType<T, 'Edm.Int64'>;
  purchorderFormNum?: DeserializedType<T, 'Edm.String'> | null;
  revRecBundleLineDisc: DeserializedType<T, 'Edm.Decimal'>;
  shipCarrierAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  samplesMx?: NoYes | null;
  deliveryTaxItemGroupBr?: DeserializedType<T, 'Edm.String'> | null;
  revRecBundleSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  revRecRevenueScheduleId?: DeserializedType<T, 'Edm.String'> | null;
  pdsCwRemainInventPhysical: DeserializedType<T, 'Edm.Decimal'>;
  remainSalesFinancial: DeserializedType<T, 'Edm.Decimal'>;
  subBillIsSplitBilling?: NoYes | null;
  lineDisc: DeserializedType<T, 'Edm.Decimal'>;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  underDeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  barCodeType?: DeserializedType<T, 'Edm.String'> | null;
  statProcId?: DeserializedType<T, 'Edm.String'> | null;
  externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  satCustomsQtyMx: DeserializedType<T, 'Edm.Decimal'>;
  quantityErrorCorrectionMethods?: DeserializedType<T, 'Edm.Binary'> | null;
  mcrOrderLine2PriceHistoryRef: DeserializedType<T, 'Edm.Int64'>;
  salesType?: SalesType | null;
  custGroup?: DeserializedType<T, 'Edm.String'> | null;
  inventRefId?: DeserializedType<T, 'Edm.String'> | null;
  packingUnit?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  port?: DeserializedType<T, 'Edm.String'> | null;
  remainInventFinancial: DeserializedType<T, 'Edm.Decimal'>;
  shipCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  domRecVersion: DeserializedType<T, 'Edm.Int32'>;
  domIgnore?: NoYes | null;
  shippingDateConfirmed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesMarkup: DeserializedType<T, 'Edm.Decimal'>;
  dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  taxAutogenerated?: NoYes | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  subBillIsRevenueSplitChild?: NoYes | null;
  gupFreeItemLineRecId: DeserializedType<T, 'Edm.Int64'>;
  inventRefTransId?: DeserializedType<T, 'Edm.String'> | null;
  consignmentMx?: NoYes | null;
  customerLineNum: DeserializedType<T, 'Edm.Int32'>;
  revRecBundleSalesStatus?: SalesStatus | null;
  projFundingSource: DeserializedType<T, 'Edm.Int64'>;
  costPrice: DeserializedType<T, 'Edm.Decimal'>;
  salesQty: DeserializedType<T, 'Edm.Decimal'>;
  systemEntrySource?: PriceDiscSystemSource | null;
  sourcingInventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  shippingDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesDeliverNow: DeserializedType<T, 'Edm.Decimal'>;
  returnDeadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipCarrierAccount?: DeserializedType<T, 'Edm.String'> | null;
  salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  satTariffFractionMx?: DeserializedType<T, 'Edm.String'> | null;
  revRecContractEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  bundleLineStatus?: BundleLineStatus | null;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  identifierCustomsDocumentMx?: DeserializedType<T, 'Edm.String'> | null;
  psaProjProposalQty: DeserializedType<T, 'Edm.Decimal'>;
  refReturnInvoiceTransW: DeserializedType<T, 'Edm.Int64'>;
  psaContractLineNum?: DeserializedType<T, 'Edm.String'> | null;
  eximProductGroupIn: DeserializedType<T, 'Edm.Int64'>;
  tamRebateTransId?: DeserializedType<T, 'Edm.String'> | null;
  materialDescriptionMx?: DeserializedType<T, 'Edm.String'> | null;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  subBillRevenueSplitAllocationMethod?: SubBillRevenueSplitAllocationMethod | null;
  revRecBundleLinePercent: DeserializedType<T, 'Edm.Decimal'>;
  reservation?: ItemReservation | null;
  priceAgreementDateRu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  skipIntercompanyPurchOrderAccountingDistribution?: NoYes | null;
  eInvoiceAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  pdsItemRebateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  pdsSameLotOverride?: NoYes | null;
  revRecBundleMainParent?: DeserializedType<T, 'Edm.String'> | null;
  shipCarrierPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  syncPurchLine?: NoYes | null;
  returnStatus?: ReturnStatusLine | null;
  deliveryTaxGroupBr?: DeserializedType<T, 'Edm.String'> | null;
  returnClosedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  receiptDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  matchingAgreementLine: DeserializedType<T, 'Edm.Int64'>;
  caseTagging?: NoYes | null;
  mpsFullRunCtpStatus?: MpsFullRunCtpStatus | null;
  returnArrivalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  subBillRevenueSplitParentAmount: DeserializedType<T, 'Edm.Decimal'>;
  skipPriceDiscCalcOnImport?: NoYes | null;
  mcrMarginUpdated?: NoYes | null;
  shipCarrierName?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesStatus?: SalesStatus | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryDateControlType?: SalesDeliveryDateControlType | null;
  pdsCwRemainInventFinancial: DeserializedType<T, 'Edm.Decimal'>;
  kittingSkipUpdateHelper?: NoYes | null;
  itemRouteId?: DeserializedType<T, 'Edm.String'> | null;
  statTriangularDeal?: NoYes | null;
  stockedProduct?: NoYes | null;
  customsDocNumberMx?: DeserializedType<T, 'Edm.String'> | null;
  skipPriceDiscCalc?: NoYes | null;
  interCompanyInventTransId?: DeserializedType<T, 'Edm.String'> | null;
  sourcingVendAccount?: DeserializedType<T, 'Edm.String'> | null;
  salesCategory: DeserializedType<T, 'Edm.Int64'>;
  revRecBundleQty: DeserializedType<T, 'Edm.Decimal'>;
  pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  revRecBundle?: NoYes | null;
  bundleLineType?: BundleLineType | null;
  scrap?: NoYes | null;
  intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryType?: TradeLineDlvType | null;
  isFreeItemLine?: NoYes | null;
  sourcingInventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  shipCarrierDlvType?: ShipCarrierDlvType | null;
  agreementSkipAutoLink?: NoYes | null;
  inventRefType?: InventRefType | null;
  pdsCwExpectedRetQty: DeserializedType<T, 'Edm.Decimal'>;
  tamRebateExcludeRebateManagement?: NoYes | null;
  origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  domProcessedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  creditNoteInternalRefPl: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  mcrMarginPercent: DeserializedType<T, 'Edm.Decimal'>;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  skipAssignInventTransId?: NoYes | null;
  itemReplaced?: NoYes | null;
  expectedRetQty: DeserializedType<T, 'Edm.Decimal'>;
  satCustomUnitOfMeasureMx?: DeserializedType<T, 'Edm.String'> | null;
  palletTagging?: NoYes | null;
  manualEntryChangepolicy: DeserializedType<T, 'Edm.Int64'>;
  revRecIsBundleComponent?: NoYes | null;
  skipDefaultingSourcingVendor?: NoYes | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  itemTagging?: NoYes | null;
  subBillDetailLineRecId: DeserializedType<T, 'Edm.Int64'>;
  itemBomId?: DeserializedType<T, 'Edm.String'> | null;
  retailBlockQty: DeserializedType<T, 'Edm.Decimal'>;
  complete?: NoYes | null;
  propertyNumberMx?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdItemGroupHeadingTh: DeserializedType<T, 'Edm.Int64'>;
  taxWithholdGroup?: DeserializedType<T, 'Edm.String'> | null;
  autoCreateInterCompanyOrders?: NoYes | null;
  inventDeliverNow: DeserializedType<T, 'Edm.Decimal'>;
  linePercent: DeserializedType<T, 'Edm.Decimal'>;
  syncIntercompanyPurchLine?: NoYes | null;
  intrastatCommodity: DeserializedType<T, 'Edm.Int64'>;
  receiptDateConfirmed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  goodsForFreeIt?: NoYes | null;
  sourcingOrigin?: SalesSourcingOrigin | null;
  qtyOrdered: DeserializedType<T, 'Edm.Decimal'>;
  domIterations: DeserializedType<T, 'Edm.Int32'>;
  projTransId?: DeserializedType<T, 'Edm.String'> | null;
  revRecBundleRemainInventPhysical: DeserializedType<T, 'Edm.Decimal'>;
  revRecBundleRemainSalesPhysical: DeserializedType<T, 'Edm.Decimal'>;
  mpsExcludeSalesLine?: NoYes | null;
  barCode?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  inventTransIdReturn?: DeserializedType<T, 'Edm.String'> | null;
  remainSalesPhysical: DeserializedType<T, 'Edm.Decimal'>;
  addressRefTableId: DeserializedType<T, 'Edm.Int32'>;
  customsDocDateMx: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  isIntegration?: TradeIntegrationType | null;
}
