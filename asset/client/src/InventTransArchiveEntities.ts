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
import type { InventTransArchiveEntitiesApi } from './InventTransArchiveEntitiesApi';
import { NoYes } from './NoYes';
import { InventTransChildType } from './InventTransChildType';
import { StatusIssue } from './StatusIssue';
import { InventTransGroupRefTypeRu } from './InventTransGroupRefTypeRu';
import { StatusReceipt } from './StatusReceipt';
import { InventTransOpen } from './InventTransOpen';

/**
 * This class represents the entity "InventTransArchiveEntities" of service "d365_metadata".
 */
export class InventTransArchiveEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventTransArchiveEntitiesType<T>
{
  /**
   * Technical entity name for InventTransArchiveEntities.
   */
  static override _entityName = 'InventTransArchiveEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventTransArchiveEntities entity.
   */
  static _keys = ['dataAreaId', 'InventTrans'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Trans.
   */
  declare inventTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Trans Modified Date Time.
   */
  declare inventTransModifiedDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Amount Adjustment.
   */
  declare costAmountAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pds Cw Settled.
   */
  declare pdsCwSettled: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Marking Ref Invent Trans Origin.
   */
  declare markingRefInventTransOrigin: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cost Amount Sec Cur Physical Ru.
   */
  declare costAmountSecCurPhysicalRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Storno Physical Ru.
   * @nullable
   */
  declare stornoPhysicalRu?: NoYes | null;
  /**
   * Date Status.
   */
  declare dateStatus: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cost Amount Posted.
   */
  declare costAmountPosted: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Invent Trans Origin.
   */
  declare returnInventTransOrigin: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Qty Settled.
   */
  declare qtySettled: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receipt Id.
   * @nullable
   */
  declare receiptId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Amount Physical.
   */
  declare costAmountPhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Financial.
   */
  declare dateFinancial: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cost Amount Settled Sec Cur Ru.
   */
  declare costAmountSettledSecCurRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Picking Route Id.
   * @nullable
   */
  declare pickingRouteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Child Ref Id.
   * @nullable
   */
  declare transChildRefId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Amount Sec Cur Posted Ru.
   */
  declare costAmountSecCurPostedRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shipping Date Requested.
   */
  declare shippingDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invent Dim Id Sales Ru.
   * @nullable
   */
  declare inventDimIdSalesRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group Ref Id Ru.
   * @nullable
   */
  declare groupRefIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Trans Origin Delivery Ru.
   */
  declare inventTransOriginDeliveryRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Date Closed Sec Cur Ru.
   */
  declare dateClosedSecCurRu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Trans Child Type.
   * @nullable
   */
  declare transChildType?: InventTransChildType | null;
  /**
   * Pds Cw Qty.
   */
  declare pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cost Amount Std Sec Cur Ru.
   */
  declare costAmountStdSecCurRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Load Id.
   * @nullable
   */
  declare loadId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Expected.
   */
  declare timeExpected: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Date Expected.
   */
  declare dateExpected: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Packing Slip Id.
   * @nullable
   */
  declare packingSlipId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Amount Operations.
   */
  declare costAmountOperations: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Status Issue.
   * @nullable
   */
  declare statusIssue?: StatusIssue | null;
  /**
   * Date Closed.
   */
  declare dateClosed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Packing Slip Returned.
   * @nullable
   */
  declare packingSlipReturned?: NoYes | null;
  /**
   * Date Invent.
   */
  declare dateInvent: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Proj Adjust Ref Id.
   * @nullable
   */
  declare projAdjustRefId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Category Id.
   * @nullable
   */
  declare projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group Ref Type Ru.
   * @nullable
   */
  declare groupRefTypeRu?: InventTransGroupRefTypeRu | null;
  /**
   * Cost Amount Sec Cur Adjustment Ru.
   */
  declare costAmountSecCurAdjustmentRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Status Receipt.
   * @nullable
   */
  declare statusReceipt?: StatusReceipt | null;
  /**
   * Cost Amount Std.
   */
  declare costAmountStd: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Non Financial Transfer Invent Closing.
   */
  declare nonFinancialTransferInventClosing: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Date Physical.
   */
  declare datePhysical: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dim Fixed.
   */
  declare inventDimFixed: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Trans Origin Transit Ru.
   */
  declare inventTransOriginTransitRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Storno Ru.
   * @nullable
   */
  declare stornoRu?: NoYes | null;
  /**
   * Inter Company Invent Dim Transferred.
   * @nullable
   */
  declare interCompanyInventDimTransferred?: NoYes | null;
  /**
   * Shipping Date Confirmed.
   */
  declare shippingDateConfirmed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Revenue Amount Physical.
   */
  declare revenueAmountPhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Voucher Physical.
   * @nullable
   */
  declare voucherPhysical?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Value Open.
   * @nullable
   */
  declare valueOpen?: InventTransOpen | null;
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
   * Cost Amount Settled.
   */
  declare costAmountSettled: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Qty Settled Sec Cur Ru.
   */
  declare qtySettledSecCurRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Dim Id.
   * @nullable
   */
  declare inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Session Id.
   * @nullable
   */
  declare sessionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Value Open Sec Cur Ru.
   * @nullable
   */
  declare valueOpenSecCurRu?: InventTransOpen | null;
  /**
   * Tax Amount Physical.
   */
  declare taxAmountPhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Returned.
   * @nullable
   */
  declare invoiceReturned?: NoYes | null;

  constructor(_entityApi: InventTransArchiveEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface InventTransArchiveEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventTrans: DeserializedType<T, 'Edm.Int64'>;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  inventTransModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  costAmountAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  pdsCwSettled: DeserializedType<T, 'Edm.Decimal'>;
  markingRefInventTransOrigin: DeserializedType<T, 'Edm.Int64'>;
  costAmountSecCurPhysicalRu: DeserializedType<T, 'Edm.Decimal'>;
  stornoPhysicalRu?: NoYes | null;
  dateStatus: DeserializedType<T, 'Edm.DateTimeOffset'>;
  costAmountPosted: DeserializedType<T, 'Edm.Decimal'>;
  returnInventTransOrigin: DeserializedType<T, 'Edm.Int64'>;
  qtySettled: DeserializedType<T, 'Edm.Decimal'>;
  receiptId?: DeserializedType<T, 'Edm.String'> | null;
  costAmountPhysical: DeserializedType<T, 'Edm.Decimal'>;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  dateFinancial: DeserializedType<T, 'Edm.DateTimeOffset'>;
  costAmountSettledSecCurRu: DeserializedType<T, 'Edm.Decimal'>;
  pickingRouteId?: DeserializedType<T, 'Edm.String'> | null;
  transChildRefId?: DeserializedType<T, 'Edm.String'> | null;
  costAmountSecCurPostedRu: DeserializedType<T, 'Edm.Decimal'>;
  shippingDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventDimIdSalesRu?: DeserializedType<T, 'Edm.String'> | null;
  groupRefIdRu?: DeserializedType<T, 'Edm.String'> | null;
  inventTransOriginDeliveryRu: DeserializedType<T, 'Edm.Int64'>;
  dateClosedSecCurRu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transChildType?: InventTransChildType | null;
  pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  costAmountStdSecCurRu: DeserializedType<T, 'Edm.Decimal'>;
  loadId?: DeserializedType<T, 'Edm.String'> | null;
  timeExpected: DeserializedType<T, 'Edm.Int32'>;
  dateExpected: DeserializedType<T, 'Edm.DateTimeOffset'>;
  packingSlipId?: DeserializedType<T, 'Edm.String'> | null;
  costAmountOperations: DeserializedType<T, 'Edm.Decimal'>;
  statusIssue?: StatusIssue | null;
  dateClosed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  packingSlipReturned?: NoYes | null;
  dateInvent: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projAdjustRefId?: DeserializedType<T, 'Edm.String'> | null;
  projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  groupRefTypeRu?: InventTransGroupRefTypeRu | null;
  costAmountSecCurAdjustmentRu: DeserializedType<T, 'Edm.Decimal'>;
  statusReceipt?: StatusReceipt | null;
  costAmountStd: DeserializedType<T, 'Edm.Decimal'>;
  nonFinancialTransferInventClosing: DeserializedType<T, 'Edm.Int64'>;
  datePhysical: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimFixed: DeserializedType<T, 'Edm.Int32'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  inventTransOriginTransitRu: DeserializedType<T, 'Edm.Int64'>;
  stornoRu?: NoYes | null;
  interCompanyInventDimTransferred?: NoYes | null;
  shippingDateConfirmed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  revenueAmountPhysical: DeserializedType<T, 'Edm.Decimal'>;
  voucherPhysical?: DeserializedType<T, 'Edm.String'> | null;
  valueOpen?: InventTransOpen | null;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  costAmountSettled: DeserializedType<T, 'Edm.Decimal'>;
  qtySettledSecCurRu: DeserializedType<T, 'Edm.Decimal'>;
  inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  sessionId?: DeserializedType<T, 'Edm.String'> | null;
  valueOpenSecCurRu?: InventTransOpen | null;
  taxAmountPhysical: DeserializedType<T, 'Edm.Decimal'>;
  invoiceReturned?: NoYes | null;
}
