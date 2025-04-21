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
import type { CustPackingSlipTransBiEntitiesApi } from './CustPackingSlipTransBiEntitiesApi';
import { InventRefType } from './InventRefType';
import { NoYes } from './NoYes';
import { TradeLineDlvType } from './TradeLineDlvType';

/**
 * This class represents the entity "CustPackingSlipTransBiEntities" of service "d365_metadata".
 */
export class CustPackingSlipTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustPackingSlipTransBiEntitiesType<T>
{
  /**
   * Technical entity name for CustPackingSlipTransBiEntities.
   */
  static override _entityName = 'CustPackingSlipTransBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustPackingSlipTransBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceDocumentLine'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Number Sequence Group.
   * @nullable
   */
  declare numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Trans Ref Rec Id.
   */
  declare invoiceTransRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invent Ref Trans Id.
   * @nullable
   */
  declare inventRefTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordered.
   */
  declare ordered: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Postal Address.
   */
  declare deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transport.
   * @nullable
   */
  declare transport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ngp Codes Table Fr.
   */
  declare ngpCodesTableFr: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Weight.
   */
  declare weight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
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
   * Pds Cw Remain.
   */
  declare pdsCwRemain: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Qty.
   */
  declare inventQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dlv Term.
   * @nullable
   */
  declare dlvTerm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Ref Type.
   * @nullable
   */
  declare inventRefType?: InventRefType | null;
  /**
   * Remain.
   */
  declare remain: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Statistic Value Lt.
   */
  declare statisticValueLt: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Unit.
   */
  declare priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Dim Id.
   * @nullable
   */
  declare inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Id.
   * @nullable
   */
  declare salesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fin Tag.
   */
  declare finTag: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invent Ref Id.
   * @nullable
   */
  declare inventRefId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Stocked Product.
   * @nullable
   */
  declare stockedProduct?: NoYes | null;
  /**
   * Delivery Type.
   * @nullable
   */
  declare deliveryType?: TradeLineDlvType | null;
  /**
   * Packing Slip Id.
   * @nullable
   */
  declare packingSlipId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Orig Country Region Id.
   * @nullable
   */
  declare origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Cur.
   */
  declare amountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Orig State Id.
   * @nullable
   */
  declare origStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parm Line.
   */
  declare parmLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * State Of Shipment.
   * @nullable
   */
  declare stateOfShipment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Cw Qty.
   */
  declare pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Header.
   * @nullable
   */
  declare lineHeader?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fully Matched.
   * @nullable
   */
  declare fullyMatched?: NoYes | null;
  /**
   * External Item Id.
   * @nullable
   */
  declare externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Value Mst.
   */
  declare valueMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intrastat Dispatch Id.
   * @nullable
   */
  declare intrastatDispatchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Intrastat Commodity.
   */
  declare intrastatCommodity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Inter Company Invent Trans Id.
   * @nullable
   */
  declare interCompanyInventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit.
   * @nullable
   */
  declare salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Category.
   */
  declare salesCategory: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Line Shipping Date Requested.
   */
  declare salesLineShippingDateRequested: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Scrap.
   * @nullable
   */
  declare scrap?: NoYes | null;
  /**
   * Remain Invent.
   */
  declare remainInvent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Line Shipping Date Confirmed.
   */
  declare salesLineShippingDateConfirmed: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Stat Proc Id.
   * @nullable
   */
  declare statProcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Group.
   * @nullable
   */
  declare salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Code.
   * @nullable
   */
  declare transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Of Shipment.
   * @nullable
   */
  declare countryRegionOfShipment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Trans Id.
   * @nullable
   */
  declare inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stat Value Mst.
   */
  declare statValueMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Port.
   * @nullable
   */
  declare port?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CustPackingSlipTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface CustPackingSlipTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  invoiceTransRefRecId: DeserializedType<T, 'Edm.Int64'>;
  inventRefTransId?: DeserializedType<T, 'Edm.String'> | null;
  ordered: DeserializedType<T, 'Edm.Decimal'>;
  deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  transport?: DeserializedType<T, 'Edm.String'> | null;
  ngpCodesTableFr: DeserializedType<T, 'Edm.Int64'>;
  weight: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  origSalesId?: DeserializedType<T, 'Edm.String'> | null;
  intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  pdsCwRemain: DeserializedType<T, 'Edm.Decimal'>;
  inventQty: DeserializedType<T, 'Edm.Decimal'>;
  dlvTerm?: DeserializedType<T, 'Edm.String'> | null;
  inventRefType?: InventRefType | null;
  remain: DeserializedType<T, 'Edm.Decimal'>;
  statisticValueLt: DeserializedType<T, 'Edm.Decimal'>;
  priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  salesId?: DeserializedType<T, 'Edm.String'> | null;
  finTag: DeserializedType<T, 'Edm.Int64'>;
  inventRefId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  stockedProduct?: NoYes | null;
  deliveryType?: TradeLineDlvType | null;
  packingSlipId?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  amountCur: DeserializedType<T, 'Edm.Decimal'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  origStateId?: DeserializedType<T, 'Edm.String'> | null;
  parmLine: DeserializedType<T, 'Edm.Int64'>;
  stateOfShipment?: DeserializedType<T, 'Edm.String'> | null;
  pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  lineHeader?: DeserializedType<T, 'Edm.String'> | null;
  fullyMatched?: NoYes | null;
  externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  valueMst: DeserializedType<T, 'Edm.Decimal'>;
  intrastatDispatchId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  intrastatCommodity: DeserializedType<T, 'Edm.Int64'>;
  interCompanyInventTransId?: DeserializedType<T, 'Edm.String'> | null;
  salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  salesCategory: DeserializedType<T, 'Edm.Int64'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  salesLineShippingDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  scrap?: NoYes | null;
  remainInvent: DeserializedType<T, 'Edm.Decimal'>;
  salesLineShippingDateConfirmed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  statProcId?: DeserializedType<T, 'Edm.String'> | null;
  salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionOfShipment?: DeserializedType<T, 'Edm.String'> | null;
  inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  statValueMst: DeserializedType<T, 'Edm.Decimal'>;
  port?: DeserializedType<T, 'Edm.String'> | null;
}
