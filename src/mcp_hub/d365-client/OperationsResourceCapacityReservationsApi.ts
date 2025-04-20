/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OperationsResourceCapacityReservations } from './OperationsResourceCapacityReservations';
import { OperationsResourceCapacityReservationsRequestBuilder } from './OperationsResourceCapacityReservationsRequestBuilder';
import { WrkCtrCapRefType } from './WrkCtrCapRefType';
import { RouteOprPriority } from './RouteOprPriority';
import { WrkCtrCapacityType } from './WrkCtrCapacityType';
import { NoYes } from './NoYes';
import { RouteJobType } from './RouteJobType';
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
export class OperationsResourceCapacityReservationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      OperationsResourceCapacityReservations<DeSerializersT>,
      DeSerializersT
    >
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
  ): OperationsResourceCapacityReservationsApi<DeSerializersT> {
    return new OperationsResourceCapacityReservationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = OperationsResourceCapacityReservations;

  requestBuilder(): OperationsResourceCapacityReservationsRequestBuilder<DeSerializersT> {
    return new OperationsResourceCapacityReservationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OperationsResourceCapacityReservations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OperationsResourceCapacityReservations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OperationsResourceCapacityReservations<DeSerializersT>,
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
    typeof OperationsResourceCapacityReservations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OperationsResourceCapacityReservations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECORD_ID: OrderableEdmTypeField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CAPACITY_RESERVATION_SECONDS: OrderableEdmTypeField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPERATIONS_RESOURCE_ID: OrderableEdmTypeField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESERVATION_SOURCE_TYPE: EnumField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      WrkCtrCapRefType,
      true,
      true
    >;
    RESERVE_HOURS: OrderableEdmTypeField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCTION_ORDER_ROUTE_JOB_ID: OrderableEdmTypeField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOAD_PERCENTAGE: OrderableEdmTypeField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SCHEDULED_END_TIME: OrderableEdmTypeField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PLANNED_ORDER_NUMBER: OrderableEdmTypeField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_OPERATION_PRIORITY: EnumField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      RouteOprPriority,
      true,
      true
    >;
    CAPACITY_SCHEDULING_TYPE: EnumField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      WrkCtrCapacityType,
      true,
      true
    >;
    IS_RESERVATION_LOCKED: EnumField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCTION_ORDER_NUMBER: OrderableEdmTypeField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_JOB_TYPE: EnumField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      RouteJobType,
      true,
      true
    >;
    SCHEDULED_START_TIME: OrderableEdmTypeField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROJECT_ACTIVITY_ID: OrderableEdmTypeField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKING_TIME_SCHEDULING_PROPERTY_ID: OrderableEdmTypeField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIREMENT_PLAN_ID: OrderableEdmTypeField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESERVATION_DATE: OrderableEdmTypeField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_OPERATION_NUMBER: OrderableEdmTypeField<
      OperationsResourceCapacityReservations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      OperationsResourceCapacityReservations<DeSerializers>
    >;
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
         * Static representation of the {@link recordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_ID: fieldBuilder.buildEdmTypeField(
          'RecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link capacityReservationSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPACITY_RESERVATION_SECONDS: fieldBuilder.buildEdmTypeField(
          'CapacityReservationSeconds',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link operationsResourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATIONS_RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'OperationsResourceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reservationSourceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVATION_SOURCE_TYPE: fieldBuilder.buildEnumField(
          'ReservationSourceType',
          WrkCtrCapRefType,
          true
        ),
        /**
         * Static representation of the {@link reserveHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVE_HOURS: fieldBuilder.buildEdmTypeField(
          'ReserveHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productionOrderRouteJobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_ROUTE_JOB_ID: fieldBuilder.buildEdmTypeField(
          'ProductionOrderRouteJobId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'LoadPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link scheduledEndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_END_TIME: fieldBuilder.buildEdmTypeField(
          'ScheduledEndTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link plannedOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'PlannedOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link routeOperationPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_OPERATION_PRIORITY: fieldBuilder.buildEnumField(
          'RouteOperationPriority',
          RouteOprPriority,
          true
        ),
        /**
         * Static representation of the {@link capacitySchedulingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPACITY_SCHEDULING_TYPE: fieldBuilder.buildEnumField(
          'CapacitySchedulingType',
          WrkCtrCapacityType,
          true
        ),
        /**
         * Static representation of the {@link isReservationLocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RESERVATION_LOCKED: fieldBuilder.buildEnumField(
          'IsReservationLocked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productionOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductionOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link routeJobType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_JOB_TYPE: fieldBuilder.buildEnumField(
          'RouteJobType',
          RouteJobType,
          true
        ),
        /**
         * Static representation of the {@link scheduledStartTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_START_TIME: fieldBuilder.buildEdmTypeField(
          'ScheduledStartTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link projectActivityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ACTIVITY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectActivityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workingTimeSchedulingPropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKING_TIME_SCHEDULING_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'WorkingTimeSchedulingPropertyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requirementPlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIREMENT_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'RequirementPlanId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reservationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVATION_DATE: fieldBuilder.buildEdmTypeField(
          'ReservationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link routeOperationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_OPERATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'RouteOperationNumber',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OperationsResourceCapacityReservations)
      };
    }

    return this._schema;
  }
}
