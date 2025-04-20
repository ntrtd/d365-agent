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
import type { VendPackingSlipTransBiEntitiesApi } from './VendPackingSlipTransBiEntitiesApi';
import { NoYes } from './NoYes';
import { InventRefType } from './InventRefType';

/**
 * This class represents the entity "VendPackingSlipTransBiEntities" of service "d365_metadata".
 */
export class VendPackingSlipTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendPackingSlipTransBiEntitiesType<T>
{
  /**
   * Technical entity name for VendPackingSlipTransBiEntities.
   */
  static override _entityName = 'VendPackingSlipTransBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendPackingSlipTransBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceDocumentLine', 'SysDataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Data Area Id.
   */
  declare sysDataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Group Ru.
   * @nullable
   */
  declare taxGroupRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Unit.
   */
  declare priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Stat Proc Id.
   * @nullable
   */
  declare statProcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Trans Ref Rec Id.
   */
  declare invoiceTransRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Currency Code W.
   * @nullable
   */
  declare currencyCodeW?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Purchaser.
   */
  declare workerPurchaser: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Excise Amount Ru.
   */
  declare exciseAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Orig State Id.
   * @nullable
   */
  declare origStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Fulfillment Date Hu.
   */
  declare intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invent Ref Id.
   * @nullable
   */
  declare inventRefId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dlv Mode.
   * @nullable
   */
  declare dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Weight.
   */
  declare weight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Value Mst.
   */
  declare valueMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pds Cw Remain.
   */
  declare pdsCwRemain: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ngp Codes Table Fr.
   */
  declare ngpCodesTableFr: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Stocked Product.
   * @nullable
   */
  declare stockedProduct?: NoYes | null;
  /**
   * Line Amount W.
   */
  declare lineAmountW: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dest State.
   * @nullable
   */
  declare destState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Procurement Category.
   */
  declare procurementCategory: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Pds Cw Qty.
   */
  declare pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transport.
   * @nullable
   */
  declare transport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Excise Value Ru.
   */
  declare exciseValueRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Sequence Group.
   * @nullable
   */
  declare numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Value Ru.
   */
  declare vatValueRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Amount Ru.
   */
  declare taxAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Packing Slip Id.
   * @nullable
   */
  declare packingSlipId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remain Invent.
   */
  declare remainInvent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Line Expected Delivery Date.
   */
  declare purchaseLineExpectedDeliveryDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * External Item Id.
   * @nullable
   */
  declare externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Received Qty In.
   */
  declare receivedQtyIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Date.
   */
  declare inventDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Accepted Qty In.
   */
  declare acceptedQtyIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remain.
   */
  declare remain: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vat Amount Ru.
   */
  declare vatAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Line Line Number.
   */
  declare purchaseLineLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Fully Matched.
   * @nullable
   */
  declare fullyMatched?: NoYes | null;
  /**
   * Transaction Code.
   * @nullable
   */
  declare transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dest Country Region Id.
   * @nullable
   */
  declare destCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Ledger Voucher.
   * @nullable
   */
  declare costLedgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Orig Purchid.
   * @nullable
   */
  declare origPurchid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Table Ref.
   */
  declare reasonTableRef: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Purch Unit.
   * @nullable
   */
  declare purchUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Action Id.
   * @nullable
   */
  declare returnActionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deviation Qty Ru.
   */
  declare deviationQtyRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vend Packing Slip Jour.
   */
  declare vendPackingSlipJour: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invent Ref Type.
   * @nullable
   */
  declare inventRefType?: InventRefType | null;
  /**
   * Tax Item Group Ru.
   * @nullable
   */
  declare taxItemGroupRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ordered.
   */
  declare ordered: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Cw Ordered.
   */
  declare pdsCwOrdered: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intrastat Dispatch Id.
   * @nullable
   */
  declare intrastatDispatchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dest County.
   * @nullable
   */
  declare destCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Commodity.
   */
  declare intrastatCommodity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invent Ref Trans Id.
   * @nullable
   */
  declare inventRefTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cancelled Qty.
   */
  declare cancelledQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Orig Country Region Id.
   * @nullable
   */
  declare origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statistic Value Lt.
   */
  declare statisticValueLt: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Trans Id.
   * @nullable
   */
  declare inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Port.
   * @nullable
   */
  declare port?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Invent Trans Id.
   * @nullable
   */
  declare interCompanyInventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rejected Qty In.
   */
  declare rejectedQtyIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Qty.
   */
  declare inventQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invent Dim Id.
   * @nullable
   */
  declare inventDimId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VendPackingSlipTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface VendPackingSlipTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  sysDataAreaId: DeserializedType<T, 'Edm.String'>;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  taxGroupRu?: DeserializedType<T, 'Edm.String'> | null;
  priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  statProcId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceTransRefRecId: DeserializedType<T, 'Edm.Int64'>;
  currencyCodeW?: DeserializedType<T, 'Edm.String'> | null;
  workerPurchaser: DeserializedType<T, 'Edm.Int64'>;
  exciseAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  origStateId?: DeserializedType<T, 'Edm.String'> | null;
  intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventRefId?: DeserializedType<T, 'Edm.String'> | null;
  dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  weight: DeserializedType<T, 'Edm.Decimal'>;
  valueMst: DeserializedType<T, 'Edm.Decimal'>;
  pdsCwRemain: DeserializedType<T, 'Edm.Decimal'>;
  ngpCodesTableFr: DeserializedType<T, 'Edm.Int64'>;
  stockedProduct?: NoYes | null;
  lineAmountW: DeserializedType<T, 'Edm.Decimal'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  destState?: DeserializedType<T, 'Edm.String'> | null;
  procurementCategory: DeserializedType<T, 'Edm.Int64'>;
  pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  transport?: DeserializedType<T, 'Edm.String'> | null;
  exciseValueRu: DeserializedType<T, 'Edm.Decimal'>;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  vatValueRu: DeserializedType<T, 'Edm.Decimal'>;
  taxAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  packingSlipId?: DeserializedType<T, 'Edm.String'> | null;
  remainInvent: DeserializedType<T, 'Edm.Decimal'>;
  purchaseLineExpectedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  receivedQtyIn: DeserializedType<T, 'Edm.Decimal'>;
  inventDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  acceptedQtyIn: DeserializedType<T, 'Edm.Decimal'>;
  remain: DeserializedType<T, 'Edm.Decimal'>;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vatAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  purchaseLineLineNumber: DeserializedType<T, 'Edm.Int64'>;
  fullyMatched?: NoYes | null;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  destCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  costLedgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  origPurchid?: DeserializedType<T, 'Edm.String'> | null;
  reasonTableRef: DeserializedType<T, 'Edm.Int64'>;
  purchUnit?: DeserializedType<T, 'Edm.String'> | null;
  returnActionId?: DeserializedType<T, 'Edm.String'> | null;
  deviationQtyRu: DeserializedType<T, 'Edm.Decimal'>;
  vendPackingSlipJour: DeserializedType<T, 'Edm.Int64'>;
  inventRefType?: InventRefType | null;
  taxItemGroupRu?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  ordered: DeserializedType<T, 'Edm.Decimal'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  pdsCwOrdered: DeserializedType<T, 'Edm.Decimal'>;
  intrastatDispatchId?: DeserializedType<T, 'Edm.String'> | null;
  destCounty?: DeserializedType<T, 'Edm.String'> | null;
  intrastatCommodity: DeserializedType<T, 'Edm.Int64'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  inventRefTransId?: DeserializedType<T, 'Edm.String'> | null;
  cancelledQty: DeserializedType<T, 'Edm.Decimal'>;
  origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  statisticValueLt: DeserializedType<T, 'Edm.Decimal'>;
  inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  port?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyInventTransId?: DeserializedType<T, 'Edm.String'> | null;
  rejectedQtyIn: DeserializedType<T, 'Edm.Decimal'>;
  inventQty: DeserializedType<T, 'Edm.Decimal'>;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventDimId?: DeserializedType<T, 'Edm.String'> | null;
}
