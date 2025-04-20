/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReqPlannedOrderBiEntities } from './ReqPlannedOrderBiEntities';
import { ReqPlannedOrderBiEntitiesRequestBuilder } from './ReqPlannedOrderBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { SchedMethod } from './SchedMethod';
import { ReqPoStatus } from './ReqPoStatus';
import { ReqBomRouteCreated } from './ReqBomRouteCreated';
import { ReqRefType } from './ReqRefType';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class ReqPlannedOrderBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ReqPlannedOrderBiEntities<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): ReqPlannedOrderBiEntitiesApi<DeSerializersT> {
    return new ReqPlannedOrderBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ReqPlannedOrderBiEntities;

  requestBuilder(): ReqPlannedOrderBiEntitiesRequestBuilder<DeSerializersT> {
    return new ReqPlannedOrderBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ReqPlannedOrderBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReqPlannedOrderBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReqPlannedOrderBiEntities<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ReqPlannedOrderBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReqPlannedOrderBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANNED_ORDER_NUMBER: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_VERSION: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REQUIREMENT_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PURCH_QTY: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQ_DATE_ORDER: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COST_AMOUNT: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUTE_JOBS_UPDATED: EnumField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_BULK_ORDER: EnumField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_ROUTE_ID: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQ_TIME: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_FORECAST_PURCH: EnumField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_DERIVED_DIRECTLY: EnumField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCHED_METHOD: EnumField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      SchedMethod,
      true,
      true
    >;
    REQ_DATE_DLV: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITEM_BUYER_GROUP_ID: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQ_PO_STATUS: EnumField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      ReqPoStatus,
      true,
      true
    >;
    VEND_GROUP_ID: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALENDAR_DAYS: EnumField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BOM_ROUTE_CREATED: EnumField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      ReqBomRouteCreated,
      true,
      true
    >;
    SCHED_TO_DATE: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PURCH_ID: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COV_INVENT_DIM_ID: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BOM_ID: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PMF_YIELD_PCT: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SCHED_FROM_DATE: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PLANNING_PRIORITY: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PMF_SEQUENCED: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_UNIT: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_ID: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VEND_ID: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_GROUP_ID: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQ_DATE: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PMF_PLANNING_ITEM_ID: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEAD_TIME: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PLANNED_ORDER_TYPE: EnumField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      ReqRefType,
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQ_TIME_ORDER: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REQUIREMENT_QUANTITY: OrderableEdmTypeField<
      ReqPlannedOrderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ReqPlannedOrderBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link plannedOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'PlannedOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link planVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_VERSION: fieldBuilder.buildEdmTypeField(
          'PlanVersion',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link requirementCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIREMENT_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RequirementCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link purchQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_QTY: fieldBuilder.buildEdmTypeField(
          'PurchQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reqDateOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQ_DATE_ORDER: fieldBuilder.buildEdmTypeField(
          'ReqDateOrder',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link costAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CostAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link routeJobsUpdated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_JOBS_UPDATED: fieldBuilder.buildEnumField(
          'RouteJobsUpdated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isBulkOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BULK_ORDER: fieldBuilder.buildEnumField('IsBulkOrder', NoYes, true),
        /**
         * Static representation of the {@link itemRouteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ROUTE_ID: fieldBuilder.buildEdmTypeField(
          'ItemRouteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reqTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQ_TIME: fieldBuilder.buildEdmTypeField('ReqTime', 'Edm.Int32', false),
        /**
         * Static representation of the {@link isForecastPurch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FORECAST_PURCH: fieldBuilder.buildEnumField(
          'IsForecastPurch',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isDerivedDirectly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DERIVED_DIRECTLY: fieldBuilder.buildEnumField(
          'IsDerivedDirectly',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link schedMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHED_METHOD: fieldBuilder.buildEnumField(
          'SchedMethod',
          SchedMethod,
          true
        ),
        /**
         * Static representation of the {@link reqDateDlv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQ_DATE_DLV: fieldBuilder.buildEdmTypeField(
          'ReqDateDlv',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link itemBuyerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BUYER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ItemBuyerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reqPoStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQ_PO_STATUS: fieldBuilder.buildEnumField(
          'ReqPOStatus',
          ReqPoStatus,
          true
        ),
        /**
         * Static representation of the {@link vendGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'VendGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calendarDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_DAYS: fieldBuilder.buildEnumField('CalendarDays', NoYes, true),
        /**
         * Static representation of the {@link bomRouteCreated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ROUTE_CREATED: fieldBuilder.buildEnumField(
          'BOMRouteCreated',
          ReqBomRouteCreated,
          true
        ),
        /**
         * Static representation of the {@link schedToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHED_TO_DATE: fieldBuilder.buildEdmTypeField(
          'SchedToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link purchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ID: fieldBuilder.buildEdmTypeField('PurchId', 'Edm.String', true),
        /**
         * Static representation of the {@link covInventDimId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COV_INVENT_DIM_ID: fieldBuilder.buildEdmTypeField(
          'CovInventDimId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemBomId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BOM_ID: fieldBuilder.buildEdmTypeField(
          'ItemBomId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pmfYieldPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PMF_YIELD_PCT: fieldBuilder.buildEdmTypeField(
          'PmfYieldPct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link schedFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHED_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'SchedFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link planningPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNING_PRIORITY: fieldBuilder.buildEdmTypeField(
          'PlanningPriority',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pmfSequenced} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PMF_SEQUENCED: fieldBuilder.buildEdmTypeField(
          'PMFSequenced',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_UNIT: fieldBuilder.buildEdmTypeField(
          'PurchUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link product} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT: fieldBuilder.buildEdmTypeField('Product', 'Edm.Int64', false),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link transferId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ID: fieldBuilder.buildEdmTypeField(
          'TransferId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link vendId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ID: fieldBuilder.buildEdmTypeField('VendId', 'Edm.String', true),
        /**
         * Static representation of the {@link itemGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ItemGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reqDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQ_DATE: fieldBuilder.buildEdmTypeField(
          'ReqDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link pmfPlanningItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PMF_PLANNING_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'PmfPlanningItemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link leadTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAD_TIME: fieldBuilder.buildEdmTypeField(
          'LeadTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link plannedOrderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_ORDER_TYPE: fieldBuilder.buildEnumField(
          'PlannedOrderType',
          ReqRefType,
          true
        ),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reqTimeOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQ_TIME_ORDER: fieldBuilder.buildEdmTypeField(
          'ReqTimeOrder',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link requirementQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIREMENT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RequirementQuantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReqPlannedOrderBiEntities)
      };
    }

    return this._schema;
  }
}
