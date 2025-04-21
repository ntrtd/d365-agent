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
import type { CustInvoiceTransBiEntitiesApi } from './CustInvoiceTransBiEntitiesApi';
import { NoYes } from './NoYes';
import { InventRefType } from './InventRefType';
import { TradeLineDlvType } from './TradeLineDlvType';

/**
 * This class represents the entity "CustInvoiceTransBiEntities" of service "d365_metadata".
 */
export class CustInvoiceTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustInvoiceTransBiEntitiesType<T>
{
  /**
   * Technical entity name for CustInvoiceTransBiEntities.
   */
  static override _entityName = 'CustInvoiceTransBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustInvoiceTransBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'InvoiceId',
    'InvoiceDate',
    'LineCreationSequenceNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Id.
   */
  declare invoiceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Line Creation Sequence Number.
   */
  declare lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reversed Rec Id.
   */
  declare reversedRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Withhold Group Th.
   * @nullable
   */
  declare taxWithholdGroupTh?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Unit.
   */
  declare priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mcr Dlv Mode.
   * @nullable
   */
  declare mcrDlvMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commiss Amount Mst.
   */
  declare commissAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Withhold Item Group Heading Th.
   */
  declare taxWithholdItemGroupHeadingTh: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Qty Physical.
   */
  declare qtyPhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Stat Proc Id.
   * @nullable
   */
  declare statProcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Ref Rec Id.
   */
  declare reasonRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * E Invoice Account Code.
   * @nullable
   */
  declare eInvoiceAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Line Num.
   */
  declare customerLineNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Return Closed Date.
   */
  declare returnClosedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Return Arrival Date.
   */
  declare returnArrivalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reverse Charge Sales List.
   * @nullable
   */
  declare reverseChargeSalesList?: NoYes | null;
  /**
   * Cust Invoice Line Id Ref.
   */
  declare custInvoiceLineIdRef: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Period Charge Invoice Line Base From Date.
   */
  declare periodChargeInvoiceLineBaseFromDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Tax Amount Mst.
   */
  declare taxAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Stat Line Amount Mst.
   */
  declare statLineAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fin Tag.
   */
  declare finTag: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sales Category.
   */
  declare salesCategory: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Orig Sales Id.
   * @nullable
   */
  declare origSalesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Fulfillment Date Hu.
   */
  declare intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Number Sequence Group.
   * @nullable
   */
  declare numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Ref Id.
   * @nullable
   */
  declare inventRefId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Weight.
   */
  declare weight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Category.
   */
  declare retailCategory: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sum Line Disc Mst.
   */
  declare sumLineDiscMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Unit.
   * @nullable
   */
  declare salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount Tax Mst.
   */
  declare lineAmountTaxMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pds Cw Remain.
   */
  declare pdsCwRemain: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ngp Codes Table Fr.
   */
  declare ngpCodesTableFr: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Markup.
   */
  declare salesMarkup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Disc Percent.
   */
  declare discPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Stocked Product.
   * @nullable
   */
  declare stockedProduct?: NoYes | null;
  /**
   * State Of Shipment.
   * @nullable
   */
  declare stateOfShipment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Cw Qty.
   */
  declare pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Orig State.
   * @nullable
   */
  declare origState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Commiss Amount Cur.
   */
  declare commissAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reverse Charge W.
   * @nullable
   */
  declare reverseChargeW?: NoYes | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Cw Qty Physical.
   */
  declare pdsCwQtyPhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transport.
   * @nullable
   */
  declare transport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remain Before.
   */
  declare remainBefore: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Id.
   * @nullable
   */
  declare assetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Header.
   * @nullable
   */
  declare lineHeader?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commiss Calc.
   * @nullable
   */
  declare commissCalc?: NoYes | null;
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
   * Country Region Of Shipment.
   * @nullable
   */
  declare countryRegionOfShipment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Goods For Free It.
   * @nullable
   */
  declare goodsForFreeIt?: NoYes | null;
  /**
   * Remain.
   */
  declare remain: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Parent Rec Id.
   */
  declare parentRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Line Percent.
   */
  declare linePercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Disc Amount.
   */
  declare discAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Code.
   * @nullable
   */
  declare transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Id.
   * @nullable
   */
  declare salesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount Mst.
   */
  declare lineAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mcr Delivery Name.
   * @nullable
   */
  declare mcrDeliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Group.
   * @nullable
   */
  declare salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multi Ln Disc.
   */
  declare multiLnDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sum Line Disc.
   */
  declare sumLineDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Ref Type.
   * @nullable
   */
  declare inventRefType?: InventRefType | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Part Delivery.
   * @nullable
   */
  declare partDelivery?: NoYes | null;
  /**
   * Tax Write Code.
   * @nullable
   */
  declare taxWriteCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Dispatch Id.
   * @nullable
   */
  declare intrastatDispatchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dlv Date.
   */
  declare dlvDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Intrastat Commodity.
   */
  declare intrastatCommodity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Olap Cost Value.
   */
  declare olapCostValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Multi Ln Percent.
   */
  declare multiLnPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Ref Trans Id.
   * @nullable
   */
  declare inventRefTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Code.
   * @nullable
   */
  declare billingCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Orig Country Region Id.
   * @nullable
   */
  declare origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Trans Id.
   * @nullable
   */
  declare inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount Tax.
   */
  declare lineAmountTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Port.
   * @nullable
   */
  declare port?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Inter Company Invent Trans Id.
   * @nullable
   */
  declare interCompanyInventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Disc.
   */
  declare lineDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Disposition Code Id.
   * @nullable
   */
  declare returnDispositionCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Autogenerated.
   * @nullable
   */
  declare taxAutogenerated?: NoYes | null;
  /**
   * Period Charge Invoice Line Base To Date.
   */
  declare periodChargeInvoiceLineBaseToDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Qty.
   */
  declare inventQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Order Line Reference No.
   * @nullable
   */
  declare orderLineReferenceNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Type.
   * @nullable
   */
  declare deliveryType?: TradeLineDlvType | null;
  /**
   * Invent Dim Id.
   * @nullable
   */
  declare inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Book Id.
   * @nullable
   */
  declare assetBookId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: CustInvoiceTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface CustInvoiceTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  invoiceId: DeserializedType<T, 'Edm.String'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  reversedRecId: DeserializedType<T, 'Edm.Int64'>;
  taxWithholdGroupTh?: DeserializedType<T, 'Edm.String'> | null;
  priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  mcrDlvMode?: DeserializedType<T, 'Edm.String'> | null;
  commissAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxWithholdItemGroupHeadingTh: DeserializedType<T, 'Edm.Int64'>;
  qtyPhysical: DeserializedType<T, 'Edm.Decimal'>;
  statProcId?: DeserializedType<T, 'Edm.String'> | null;
  reasonRefRecId: DeserializedType<T, 'Edm.Int64'>;
  eInvoiceAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  customerLineNum: DeserializedType<T, 'Edm.Int32'>;
  returnClosedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  returnArrivalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reverseChargeSalesList?: NoYes | null;
  custInvoiceLineIdRef: DeserializedType<T, 'Edm.Int64'>;
  periodChargeInvoiceLineBaseFromDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  taxAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  statLineAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  finTag: DeserializedType<T, 'Edm.Int64'>;
  salesCategory: DeserializedType<T, 'Edm.Int64'>;
  origSalesId?: DeserializedType<T, 'Edm.String'> | null;
  intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  inventRefId?: DeserializedType<T, 'Edm.String'> | null;
  weight: DeserializedType<T, 'Edm.Decimal'>;
  retailCategory: DeserializedType<T, 'Edm.Int64'>;
  sumLineDiscMst: DeserializedType<T, 'Edm.Decimal'>;
  salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  lineAmountTaxMst: DeserializedType<T, 'Edm.Decimal'>;
  pdsCwRemain: DeserializedType<T, 'Edm.Decimal'>;
  ngpCodesTableFr: DeserializedType<T, 'Edm.Int64'>;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesMarkup: DeserializedType<T, 'Edm.Decimal'>;
  discPercent: DeserializedType<T, 'Edm.Decimal'>;
  stockedProduct?: NoYes | null;
  stateOfShipment?: DeserializedType<T, 'Edm.String'> | null;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  origState?: DeserializedType<T, 'Edm.String'> | null;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  commissAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  reverseChargeW?: NoYes | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  pdsCwQtyPhysical: DeserializedType<T, 'Edm.Decimal'>;
  transport?: DeserializedType<T, 'Edm.String'> | null;
  remainBefore: DeserializedType<T, 'Edm.Decimal'>;
  assetId?: DeserializedType<T, 'Edm.String'> | null;
  lineHeader?: DeserializedType<T, 'Edm.String'> | null;
  commissCalc?: NoYes | null;
  deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionOfShipment?: DeserializedType<T, 'Edm.String'> | null;
  goodsForFreeIt?: NoYes | null;
  remain: DeserializedType<T, 'Edm.Decimal'>;
  parentRecId: DeserializedType<T, 'Edm.Int64'>;
  linePercent: DeserializedType<T, 'Edm.Decimal'>;
  discAmount: DeserializedType<T, 'Edm.Decimal'>;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  salesId?: DeserializedType<T, 'Edm.String'> | null;
  lineAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  mcrDeliveryName?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  multiLnDisc: DeserializedType<T, 'Edm.Decimal'>;
  sumLineDisc: DeserializedType<T, 'Edm.Decimal'>;
  inventRefType?: InventRefType | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  partDelivery?: NoYes | null;
  taxWriteCode?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  intrastatDispatchId?: DeserializedType<T, 'Edm.String'> | null;
  dlvDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  intrastatCommodity: DeserializedType<T, 'Edm.Int64'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  olapCostValue: DeserializedType<T, 'Edm.Decimal'>;
  multiLnPercent: DeserializedType<T, 'Edm.Decimal'>;
  inventRefTransId?: DeserializedType<T, 'Edm.String'> | null;
  billingCode?: DeserializedType<T, 'Edm.String'> | null;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  overrideSalesTax?: NoYes | null;
  origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  lineAmountTax: DeserializedType<T, 'Edm.Decimal'>;
  port?: DeserializedType<T, 'Edm.String'> | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  interCompanyInventTransId?: DeserializedType<T, 'Edm.String'> | null;
  lineDisc: DeserializedType<T, 'Edm.Decimal'>;
  returnDispositionCodeId?: DeserializedType<T, 'Edm.String'> | null;
  taxAutogenerated?: NoYes | null;
  periodChargeInvoiceLineBaseToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  inventQty: DeserializedType<T, 'Edm.Decimal'>;
  orderLineReferenceNo?: DeserializedType<T, 'Edm.String'> | null;
  deliveryType?: TradeLineDlvType | null;
  inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  assetBookId?: DeserializedType<T, 'Edm.String'> | null;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
}
