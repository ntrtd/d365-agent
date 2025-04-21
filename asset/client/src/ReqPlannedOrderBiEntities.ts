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
import type { ReqPlannedOrderBiEntitiesApi } from './ReqPlannedOrderBiEntitiesApi';
import { NoYes } from './NoYes';
import { SchedMethod } from './SchedMethod';
import { ReqPoStatus } from './ReqPoStatus';
import { ReqBomRouteCreated } from './ReqBomRouteCreated';
import { ReqRefType } from './ReqRefType';

/**
 * This class represents the entity "ReqPlannedOrderBiEntities" of service "d365_metadata".
 */
export class ReqPlannedOrderBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReqPlannedOrderBiEntitiesType<T>
{
  /**
   * Technical entity name for ReqPlannedOrderBiEntities.
   */
  static override _entityName = 'ReqPlannedOrderBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReqPlannedOrderBiEntities entity.
   */
  static _keys = ['dataAreaId', 'PlannedOrderNumber', 'PlanVersion'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Planned Order Number.
   */
  declare plannedOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Version.
   */
  declare planVersion: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Requirement Catch Weight Quantity.
   */
  declare requirementCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Purch Qty.
   */
  declare purchQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Req Date Order.
   */
  declare reqDateOrder: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cost Amount.
   */
  declare costAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Route Jobs Updated.
   * @nullable
   */
  declare routeJobsUpdated?: NoYes | null;
  /**
   * Is Bulk Order.
   * @nullable
   */
  declare isBulkOrder?: NoYes | null;
  /**
   * Item Route Id.
   * @nullable
   */
  declare itemRouteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Req Time.
   */
  declare reqTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Forecast Purch.
   * @nullable
   */
  declare isForecastPurch?: NoYes | null;
  /**
   * Is Derived Directly.
   * @nullable
   */
  declare isDerivedDirectly?: NoYes | null;
  /**
   * Sched Method.
   * @nullable
   */
  declare schedMethod?: SchedMethod | null;
  /**
   * Req Date Dlv.
   */
  declare reqDateDlv: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Item Buyer Group Id.
   * @nullable
   */
  declare itemBuyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Req Po Status.
   * @nullable
   */
  declare reqPoStatus?: ReqPoStatus | null;
  /**
   * Vend Group Id.
   * @nullable
   */
  declare vendGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calendar Days.
   * @nullable
   */
  declare calendarDays?: NoYes | null;
  /**
   * Bom Route Created.
   * @nullable
   */
  declare bomRouteCreated?: ReqBomRouteCreated | null;
  /**
   * Sched To Date.
   */
  declare schedToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Purch Id.
   * @nullable
   */
  declare purchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cov Invent Dim Id.
   * @nullable
   */
  declare covInventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Bom Id.
   * @nullable
   */
  declare itemBomId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pmf Yield Pct.
   */
  declare pmfYieldPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sched From Date.
   */
  declare schedFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Planning Priority.
   */
  declare planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pmf Sequenced.
   */
  declare pmfSequenced: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Unit.
   * @nullable
   */
  declare purchUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product.
   */
  declare product: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer Id.
   * @nullable
   */
  declare transferId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Vend Id.
   * @nullable
   */
  declare vendId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Group Id.
   * @nullable
   */
  declare itemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Req Date.
   */
  declare reqDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pmf Planning Item Id.
   * @nullable
   */
  declare pmfPlanningItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lead Time.
   */
  declare leadTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Planned Order Type.
   * @nullable
   */
  declare plannedOrderType?: ReqRefType | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Req Time Order.
   */
  declare reqTimeOrder: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Requirement Quantity.
   */
  declare requirementQuantity: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ReqPlannedOrderBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ReqPlannedOrderBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  plannedOrderNumber: DeserializedType<T, 'Edm.String'>;
  planVersion: DeserializedType<T, 'Edm.Int64'>;
  requirementCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchQty: DeserializedType<T, 'Edm.Decimal'>;
  reqDateOrder: DeserializedType<T, 'Edm.DateTimeOffset'>;
  costAmount: DeserializedType<T, 'Edm.Decimal'>;
  routeJobsUpdated?: NoYes | null;
  isBulkOrder?: NoYes | null;
  itemRouteId?: DeserializedType<T, 'Edm.String'> | null;
  reqTime: DeserializedType<T, 'Edm.Int32'>;
  isForecastPurch?: NoYes | null;
  isDerivedDirectly?: NoYes | null;
  schedMethod?: SchedMethod | null;
  reqDateDlv: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemBuyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  reqPoStatus?: ReqPoStatus | null;
  vendGroupId?: DeserializedType<T, 'Edm.String'> | null;
  calendarDays?: NoYes | null;
  bomRouteCreated?: ReqBomRouteCreated | null;
  schedToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchId?: DeserializedType<T, 'Edm.String'> | null;
  covInventDimId?: DeserializedType<T, 'Edm.String'> | null;
  itemBomId?: DeserializedType<T, 'Edm.String'> | null;
  pmfYieldPct: DeserializedType<T, 'Edm.Decimal'>;
  schedFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  pmfSequenced: DeserializedType<T, 'Edm.Boolean'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  purchUnit?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  product: DeserializedType<T, 'Edm.Int64'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  transferId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  vendId?: DeserializedType<T, 'Edm.String'> | null;
  itemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  reqDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  pmfPlanningItemId?: DeserializedType<T, 'Edm.String'> | null;
  leadTime: DeserializedType<T, 'Edm.Int32'>;
  plannedOrderType?: ReqRefType | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  reqTimeOrder: DeserializedType<T, 'Edm.Int32'>;
  requirementQuantity: DeserializedType<T, 'Edm.Decimal'>;
}
