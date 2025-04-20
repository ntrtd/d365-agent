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
import type { PurchaseOrderLineV2ExistAddrReadOnlyApi } from './PurchaseOrderLineV2ExistAddrReadOnlyApi';
import { TradeLineDlvType } from './TradeLineDlvType';
import { PurchCovRef } from './PurchCovRef';
import { McrDropShipStatus } from './McrDropShipStatus';
import { InterCompanyOrigin } from './InterCompanyOrigin';
import { TradeWorkflowState } from './TradeWorkflowState';
import { NoYes } from './NoYes';
import { AssetTransTypePurch } from './AssetTransTypePurch';
import { ReturnStatusLine } from './ReturnStatusLine';
import { InterCompanySkipUpdate } from './InterCompanySkipUpdate';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import { PurchStatus } from './PurchStatus';
import { InventRefType } from './InventRefType';
import { GsthstTaxTypeCa } from './GsthstTaxTypeCa';
import { LineDeliveryType } from './LineDeliveryType';
import { PurchMatchingPolicyOption } from './PurchMatchingPolicyOption';
import { PurchaseType } from './PurchaseType';
import { PurchPurchaseOrderCreationMethod } from './PurchPurchaseOrderCreationMethod';
import { PriceDiscSystemSource } from './PriceDiscSystemSource';

/**
 * This class represents the entity "PurchaseOrderLineV2ExistAddrReadOnly" of service "d365_metadata".
 */
export class PurchaseOrderLineV2ExistAddrReadOnly<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseOrderLineV2ExistAddrReadOnlyType<T>
{
  /**
   * Technical entity name for PurchaseOrderLineV2ExistAddrReadOnly.
   */
  static override _entityName = 'PurchaseOrderLineV2ExistAddrReadOnly';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseOrderLineV2ExistAddrReadOnly entity.
   */
  static _keys = [
    'dataAreaId',
    'DeliveryAddressLocationId',
    'DeliveryValidFrom'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Address Location Id.
   */
  declare deliveryAddressLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Valid From.
   */
  declare deliveryValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Type.
   * @nullable
   */
  declare deliveryType?: TradeLineDlvType | null;
  /**
   * Cov Ref.
   * @nullable
   */
  declare covRef?: PurchCovRef | null;
  /**
   * Item Route Id.
   * @nullable
   */
  declare itemRouteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Unit.
   */
  declare priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vend Account.
   * @nullable
   */
  declare vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Price.
   */
  declare purchPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Disc Percent.
   */
  declare discPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Orig State Id.
   * @nullable
   */
  declare origStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Tax Group Id.
   * @nullable
   */
  declare projTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Req Attention.
   * @nullable
   */
  declare reqAttention?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Drop Ship Status.
   * @nullable
   */
  declare mcrDropShipStatus?: McrDropShipStatus | null;
  /**
   * Tam Item Vend Rebate Group Id.
   * @nullable
   */
  declare tamItemVendRebateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Line Num Ex 1.
   */
  declare retailLineNumEx1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vend Group.
   * @nullable
   */
  declare vendGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Origin.
   * @nullable
   */
  declare interCompanyOrigin?: InterCompanyOrigin | null;
  /**
   * Shipping Date Requested.
   */
  declare shippingDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pds Cw Invent Received Now.
   */
  declare pdsCwInventReceivedNow: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wf Delivery Due State.
   * @nullable
   */
  declare wfDeliveryDueState?: TradeWorkflowState | null;
  /**
   * Wf Inv Received State.
   * @nullable
   */
  declare wfInvReceivedState?: TradeWorkflowState | null;
  /**
   * Skip Create Markup.
   * @nullable
   */
  declare skipCreateMarkup?: NoYes | null;
  /**
   * External Item Id.
   * @nullable
   */
  declare externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Create Fixed Asset.
   * @nullable
   */
  declare createFixedAsset?: NoYes | null;
  /**
   * Asset Trans Type Purch.
   * @nullable
   */
  declare assetTransTypePurch?: AssetTransTypePurch | null;
  /**
   * Pds Cw Remain Invent Physical.
   */
  declare pdsCwRemainInventPhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remain Purch Physical.
   */
  declare remainPurchPhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Id.
   * @nullable
   */
  declare assetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rbo Package Line Num.
   */
  declare rboPackageLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow State.
   * @nullable
   */
  declare workflowState?: TradeWorkflowState | null;
  /**
   * Invent Ref Id.
   * @nullable
   */
  declare inventRefId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remainder.
   */
  declare remainder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pds Cw Remain Invent Financial.
   */
  declare pdsCwRemainInventFinancial: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purch Received Now.
   */
  declare purchReceivedNow: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Req Po Id.
   * @nullable
   */
  declare reqPoId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Address.
   * @nullable
   */
  declare serviceAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Deleted.
   * @nullable
   */
  declare isDeleted?: NoYes | null;
  /**
   * Invent Ref Trans Id.
   * @nullable
   */
  declare inventRefTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Port.
   * @nullable
   */
  declare port?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Complete.
   * @nullable
   */
  declare complete?: NoYes | null;
  /**
   * Mcr Drop Ship Comment.
   * @nullable
   */
  declare mcrDropShipComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Code.
   * @nullable
   */
  declare transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Date.
   */
  declare serviceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Qty Ordered.
   */
  declare qtyOrdered: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Depreciation Start Date.
   */
  declare depreciationStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Invoice Matched.
   * @nullable
   */
  declare isInvoiceMatched?: NoYes | null;
  /**
   * Invent Trans Id.
   * @nullable
   */
  declare inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dim Id.
   * @nullable
   */
  declare inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Date Confirmed.
   */
  declare shippingDateConfirmed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Packed Whs Line.
   * @nullable
   */
  declare packedWhsLine?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Is Added By Channel.
   * @nullable
   */
  declare isAddedByChannel?: NoYes | null;
  /**
   * Remain Invent Financial.
   */
  declare remainInventFinancial: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Ref.
   * @nullable
   */
  declare customerRef?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transport.
   * @nullable
   */
  declare transport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Req Id.
   * @nullable
   */
  declare purchReqId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Tax Write Code.
   * @nullable
   */
  declare confirmedTaxWriteCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Over Delivery Pct.
   */
  declare overDeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Modified.
   * @nullable
   */
  declare isModified?: NoYes | null;
  /**
   * Multi Ln Percent.
   */
  declare multiLnPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cust Purchase Order Form Num.
   * @nullable
   */
  declare custPurchaseOrderFormNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Blocked.
   * @nullable
   */
  declare blocked?: NoYes | null;
  /**
   * Proj Sales Currency Id.
   * @nullable
   */
  declare projSalesCurrencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intercompany Oso Sourcing Invent Site Id.
   * @nullable
   */
  declare intercompanyOsoSourcingInventSiteId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Disc Amount.
   */
  declare discAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Status.
   * @nullable
   */
  declare returnStatus?: ReturnStatusLine | null;
  /**
   * Line Percent.
   */
  declare linePercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * County Orig Dest.
   * @nullable
   */
  declare countyOrigDest?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Disc.
   */
  declare lineDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Book Id.
   * @nullable
   */
  declare assetBookId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Sales Price.
   */
  declare projSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bar Code.
   * @nullable
   */
  declare barCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Id.
   * @nullable
   */
  declare purchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Drop Shipment.
   * @nullable
   */
  declare mcrDropShipment?: NoYes | null;
  /**
   * Is Pwp.
   * @nullable
   */
  declare isPwp?: NoYes | null;
  /**
   * Retail Temp Value Ex 2.
   */
  declare retailTempValueEx2: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ship Calendar Id.
   * @nullable
   */
  declare shipCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stat Proc Id.
   * @nullable
   */
  declare statProcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Orig Country Region Id.
   * @nullable
   */
  declare origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Markup.
   */
  declare purchMarkup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Confirmed Tax Amount.
   */
  declare confirmedTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Asset Group.
   * @nullable
   */
  declare assetGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Skip Update.
   * @nullable
   */
  declare skipUpdate?: InterCompanySkipUpdate | null;
  /**
   * Line Header.
   * @nullable
   */
  declare lineHeader?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 State.
   * @nullable
   */
  declare tax1099State?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scrap.
   * @nullable
   */
  declare scrap?: NoYes | null;
  /**
   * Packed Extensions.
   * @nullable
   */
  declare packedExtensions?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Invent Received Now.
   */
  declare inventReceivedNow: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Autogenerated.
   * @nullable
   */
  declare taxAutogenerated?: NoYes | null;
  /**
   * Invent Invoice Now.
   */
  declare inventInvoiceNow: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Package Id.
   * @nullable
   */
  declare retailPackageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planning Priority.
   */
  declare planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Skip Delivery Schedule Update.
   * @nullable
   */
  declare skipDeliveryScheduleUpdate?: NoYes | null;
  /**
   * Item Bom Id.
   * @nullable
   */
  declare itemBomId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Fulfillment Date Hu.
   */
  declare intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Return Action Id.
   * @nullable
   */
  declare returnActionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Ref Table Id.
   */
  declare addressRefTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Confirmed Dlv.
   */
  declare confirmedDlv: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Proj Trans Id.
   * @nullable
   */
  declare projTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Editable In Workflow.
   * @nullable
   */
  declare editableInWorkflow?: NoYes | null;
  /**
   * Purch Supplier Aux Id.
   * @nullable
   */
  declare purchSupplierAuxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Disposition Code Id.
   * @nullable
   */
  declare returnDispositionCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Skip Price Disc Calc.
   * @nullable
   */
  declare skipPriceDiscCalc?: NoYes | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Invent Trans Id.
   * @nullable
   */
  declare interCompanyInventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operation Type Mx.
   * @nullable
   */
  declare operationTypeMx?: VendorOperationTypeMx | null;
  /**
   * Stat Triangular Deal.
   * @nullable
   */
  declare statTriangularDeal?: NoYes | null;
  /**
   * Agreement Skip Auto Link.
   * @nullable
   */
  declare agreementSkipAutoLink?: NoYes | null;
  /**
   * Intercompany Oso Sourcing Invent Location Id.
   * @nullable
   */
  declare intercompanyOsoSourcingInventLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Proj Tax Item Group Id.
   * @nullable
   */
  declare projTaxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Psa Total Retain Amount.
   */
  declare psaTotalRetainAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Req Plan Id Sched.
   * @nullable
   */
  declare reqPlanIdSched?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variant Id.
   * @nullable
   */
  declare variantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Under Delivery Pct.
   */
  declare underDeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purch Unit.
   * @nullable
   */
  declare purchUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 State Amount.
   */
  declare tax1099StateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Sales Unit Id.
   * @nullable
   */
  declare projSalesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statistic Value Lt.
   */
  declare statisticValueLt: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purch Status.
   * @nullable
   */
  declare purchStatus?: PurchStatus | null;
  /**
   * Psa Retain Schedule Id.
   * @nullable
   */
  declare psaRetainScheduleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manual Modified Field.
   */
  declare manualModifiedField: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Stocked Product.
   * @nullable
   */
  declare stockedProduct?: NoYes | null;
  /**
   * Tax 1099 Amount.
   */
  declare tax1099Amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pds Cw Qty.
   */
  declare pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Ref Type.
   * @nullable
   */
  declare itemRefType?: InventRefType | null;
  /**
   * Pds Calculation Id.
   * @nullable
   */
  declare pdsCalculationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gsthst Tax Type Ca.
   * @nullable
   */
  declare gsthstTaxTypeCa?: GsthstTaxTypeCa | null;
  /**
   * Remain Invent Physical.
   */
  declare remainInventPhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Withhold Base Cur Th.
   */
  declare taxWithholdBaseCurTh: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Service Code Br.
   * @nullable
   */
  declare taxServiceCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Delivery Type.
   * @nullable
   */
  declare lineDeliveryType?: LineDeliveryType | null;
  /**
   * Remain Purch Financial.
   */
  declare remainPurchFinancial: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Matching Policy.
   * @nullable
   */
  declare matchingPolicy?: PurchMatchingPolicyOption | null;
  /**
   * Purchase Type.
   * @nullable
   */
  declare purchaseType?: PurchaseType | null;
  /**
   * Tax Withhold Group Th.
   * @nullable
   */
  declare taxWithholdGroupTh?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Finalized.
   * @nullable
   */
  declare isFinalized?: NoYes | null;
  /**
   * Proj Category Id.
   * @nullable
   */
  declare projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Qty.
   */
  declare purchQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Order Line Creation Method.
   * @nullable
   */
  declare purchaseOrderLineCreationMethod?: PurchPurchaseOrderCreationMethod | null;
  /**
   * Proj Line Property Id.
   * @nullable
   */
  declare projLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bar Code Type.
   * @nullable
   */
  declare barCodeType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * System Entry Source.
   * @nullable
   */
  declare systemEntrySource?: PriceDiscSystemSource | null;
  /**
   * Multi Ln Disc.
   */
  declare multiLnDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sync Intercompany Sales Line.
   * @nullable
   */
  declare syncIntercompanySalesLine?: NoYes | null;
  /**
   * Purch Req Line Ref Id.
   */
  declare purchReqLineRefId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Formatted Delivery Address.
   * @nullable
   */
  declare formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PurchaseOrderLineV2ExistAddrReadOnlyApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseOrderLineV2ExistAddrReadOnlyType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  deliveryAddressLocationId: DeserializedType<T, 'Edm.String'>;
  deliveryValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryType?: TradeLineDlvType | null;
  covRef?: PurchCovRef | null;
  itemRouteId?: DeserializedType<T, 'Edm.String'> | null;
  priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  purchPrice: DeserializedType<T, 'Edm.Decimal'>;
  discPercent: DeserializedType<T, 'Edm.Decimal'>;
  origStateId?: DeserializedType<T, 'Edm.String'> | null;
  projTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  reqAttention?: DeserializedType<T, 'Edm.String'> | null;
  mcrDropShipStatus?: McrDropShipStatus | null;
  tamItemVendRebateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  retailLineNumEx1: DeserializedType<T, 'Edm.Decimal'>;
  vendGroup?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyOrigin?: InterCompanyOrigin | null;
  shippingDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  pdsCwInventReceivedNow: DeserializedType<T, 'Edm.Decimal'>;
  wfDeliveryDueState?: TradeWorkflowState | null;
  wfInvReceivedState?: TradeWorkflowState | null;
  skipCreateMarkup?: NoYes | null;
  externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  createFixedAsset?: NoYes | null;
  assetTransTypePurch?: AssetTransTypePurch | null;
  pdsCwRemainInventPhysical: DeserializedType<T, 'Edm.Decimal'>;
  remainPurchPhysical: DeserializedType<T, 'Edm.Decimal'>;
  assetId?: DeserializedType<T, 'Edm.String'> | null;
  rboPackageLineNum: DeserializedType<T, 'Edm.Decimal'>;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  workflowState?: TradeWorkflowState | null;
  inventRefId?: DeserializedType<T, 'Edm.String'> | null;
  remainder: DeserializedType<T, 'Edm.Decimal'>;
  pdsCwRemainInventFinancial: DeserializedType<T, 'Edm.Decimal'>;
  purchReceivedNow: DeserializedType<T, 'Edm.Decimal'>;
  reqPoId?: DeserializedType<T, 'Edm.String'> | null;
  serviceAddress?: DeserializedType<T, 'Edm.String'> | null;
  isDeleted?: NoYes | null;
  inventRefTransId?: DeserializedType<T, 'Edm.String'> | null;
  port?: DeserializedType<T, 'Edm.String'> | null;
  complete?: NoYes | null;
  mcrDropShipComment?: DeserializedType<T, 'Edm.String'> | null;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  serviceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  qtyOrdered: DeserializedType<T, 'Edm.Decimal'>;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  depreciationStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isInvoiceMatched?: NoYes | null;
  inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  shippingDateConfirmed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  packedWhsLine?: DeserializedType<T, 'Edm.Binary'> | null;
  isAddedByChannel?: NoYes | null;
  remainInventFinancial: DeserializedType<T, 'Edm.Decimal'>;
  customerRef?: DeserializedType<T, 'Edm.String'> | null;
  transport?: DeserializedType<T, 'Edm.String'> | null;
  purchReqId?: DeserializedType<T, 'Edm.String'> | null;
  confirmedTaxWriteCode?: DeserializedType<T, 'Edm.String'> | null;
  overDeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  isModified?: NoYes | null;
  multiLnPercent: DeserializedType<T, 'Edm.Decimal'>;
  custPurchaseOrderFormNum?: DeserializedType<T, 'Edm.String'> | null;
  blocked?: NoYes | null;
  projSalesCurrencyId?: DeserializedType<T, 'Edm.String'> | null;
  intercompanyOsoSourcingInventSiteId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  discAmount: DeserializedType<T, 'Edm.Decimal'>;
  returnStatus?: ReturnStatusLine | null;
  linePercent: DeserializedType<T, 'Edm.Decimal'>;
  countyOrigDest?: DeserializedType<T, 'Edm.String'> | null;
  lineDisc: DeserializedType<T, 'Edm.Decimal'>;
  assetBookId?: DeserializedType<T, 'Edm.String'> | null;
  projSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  barCode?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  purchId?: DeserializedType<T, 'Edm.String'> | null;
  mcrDropShipment?: NoYes | null;
  isPwp?: NoYes | null;
  retailTempValueEx2: DeserializedType<T, 'Edm.Decimal'>;
  shipCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  statProcId?: DeserializedType<T, 'Edm.String'> | null;
  origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  purchMarkup: DeserializedType<T, 'Edm.Decimal'>;
  confirmedTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  overrideSalesTax?: NoYes | null;
  assetGroup?: DeserializedType<T, 'Edm.String'> | null;
  skipUpdate?: InterCompanySkipUpdate | null;
  lineHeader?: DeserializedType<T, 'Edm.String'> | null;
  tax1099State?: DeserializedType<T, 'Edm.String'> | null;
  scrap?: NoYes | null;
  packedExtensions?: DeserializedType<T, 'Edm.Binary'> | null;
  inventReceivedNow: DeserializedType<T, 'Edm.Decimal'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  taxAutogenerated?: NoYes | null;
  inventInvoiceNow: DeserializedType<T, 'Edm.Decimal'>;
  retailPackageId?: DeserializedType<T, 'Edm.String'> | null;
  planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  skipDeliveryScheduleUpdate?: NoYes | null;
  itemBomId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  returnActionId?: DeserializedType<T, 'Edm.String'> | null;
  addressRefTableId: DeserializedType<T, 'Edm.Int32'>;
  confirmedDlv: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projTransId?: DeserializedType<T, 'Edm.String'> | null;
  editableInWorkflow?: NoYes | null;
  purchSupplierAuxId?: DeserializedType<T, 'Edm.String'> | null;
  returnDispositionCodeId?: DeserializedType<T, 'Edm.String'> | null;
  skipPriceDiscCalc?: NoYes | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyInventTransId?: DeserializedType<T, 'Edm.String'> | null;
  operationTypeMx?: VendorOperationTypeMx | null;
  statTriangularDeal?: NoYes | null;
  agreementSkipAutoLink?: NoYes | null;
  intercompanyOsoSourcingInventLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  projTaxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
  psaTotalRetainAmount: DeserializedType<T, 'Edm.Decimal'>;
  reqPlanIdSched?: DeserializedType<T, 'Edm.String'> | null;
  variantId?: DeserializedType<T, 'Edm.String'> | null;
  underDeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  purchUnit?: DeserializedType<T, 'Edm.String'> | null;
  tax1099StateAmount: DeserializedType<T, 'Edm.Decimal'>;
  projSalesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  statisticValueLt: DeserializedType<T, 'Edm.Decimal'>;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  purchStatus?: PurchStatus | null;
  psaRetainScheduleId?: DeserializedType<T, 'Edm.String'> | null;
  manualModifiedField: DeserializedType<T, 'Edm.Int32'>;
  stockedProduct?: NoYes | null;
  tax1099Amount: DeserializedType<T, 'Edm.Decimal'>;
  pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  itemRefType?: InventRefType | null;
  pdsCalculationId?: DeserializedType<T, 'Edm.String'> | null;
  gsthstTaxTypeCa?: GsthstTaxTypeCa | null;
  remainInventPhysical: DeserializedType<T, 'Edm.Decimal'>;
  taxWithholdBaseCurTh: DeserializedType<T, 'Edm.Decimal'>;
  taxServiceCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  lineDeliveryType?: LineDeliveryType | null;
  remainPurchFinancial: DeserializedType<T, 'Edm.Decimal'>;
  matchingPolicy?: PurchMatchingPolicyOption | null;
  purchaseType?: PurchaseType | null;
  taxWithholdGroupTh?: DeserializedType<T, 'Edm.String'> | null;
  isFinalized?: NoYes | null;
  projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  purchQty: DeserializedType<T, 'Edm.Decimal'>;
  purchaseOrderLineCreationMethod?: PurchPurchaseOrderCreationMethod | null;
  projLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  barCodeType?: DeserializedType<T, 'Edm.String'> | null;
  systemEntrySource?: PriceDiscSystemSource | null;
  multiLnDisc: DeserializedType<T, 'Edm.Decimal'>;
  syncIntercompanySalesLine?: NoYes | null;
  purchReqLineRefId: DeserializedType<T, 'Edm.Guid'>;
  formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  projId?: DeserializedType<T, 'Edm.String'> | null;
}
