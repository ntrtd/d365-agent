/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductionOrderRouteJobs } from './ProductionOrderRouteJobs';
import { ProductionOrderRouteJobsRequestBuilder } from './ProductionOrderRouteJobsRequestBuilder';
import { ProductionOrderRouteOperationsApi } from './ProductionOrderRouteOperationsApi';
import { ProductionOrderHeadersApi } from './ProductionOrderHeadersApi';
import { SchedJobLinkType } from './SchedJobLinkType';
import { SchedJobLink } from './SchedJobLink';
import { RouteJobType } from './RouteJobType';
import { RouteOprPriority } from './RouteOprPriority';
import { ProdJobStatus } from './ProdJobStatus';
import { NoYes } from './NoYes';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductionOrderRouteJobsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductionOrderRouteJobs<DeSerializersT>, DeSerializersT>
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
  ): ProductionOrderRouteJobsApi<DeSerializersT> {
    return new ProductionOrderRouteJobsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productionOrderRouteOperation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDER_ROUTE_OPERATION: OneToOneLink<
      ProductionOrderRouteJobs<DeSerializersT>,
      DeSerializersT,
      ProductionOrderRouteOperationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productionOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDER_HEADER: OneToOneLink<
      ProductionOrderRouteJobs<DeSerializersT>,
      DeSerializersT,
      ProductionOrderHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductionOrderRouteOperationsApi<DeSerializersT>,
      ProductionOrderHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCTION_ORDER_ROUTE_OPERATION: new OneToOneLink(
        'ProductionOrderRouteOperation',
        this,
        linkedApis[0]
      ),
      PRODUCTION_ORDER_HEADER: new OneToOneLink(
        'ProductionOrderHeader',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ProductionOrderRouteJobs;

  requestBuilder(): ProductionOrderRouteJobsRequestBuilder<DeSerializersT> {
    return new ProductionOrderRouteJobsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductionOrderRouteJobs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductionOrderRouteJobs<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductionOrderRouteJobs<DeSerializersT>,
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
    typeof ProductionOrderRouteJobs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductionOrderRouteJobs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_ID: OrderableEdmTypeField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATIONS_RESOURCE_ID: OrderableEdmTypeField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULED_FROM_TIME: OrderableEdmTypeField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CALCULATED_JOB_DURATION_HOURS: OrderableEdmTypeField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOB_PROCESSING_PERCENTAGE: OrderableEdmTypeField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACTUAL_END_DATE: OrderableEdmTypeField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NEXT_OPERATION_LINK_TYPE: EnumField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      SchedJobLinkType,
      true,
      true
    >;
    SECONDARY_JOB_NUMBER: OrderableEdmTypeField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SCHEDULED_END_TIME: OrderableEdmTypeField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACTUAL_FROM_TIME: OrderableEdmTypeField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SCHEDULED_FROM_DATE: OrderableEdmTypeField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOB_SEQUENCE: OrderableEdmTypeField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NEXT_OPERATION_LINK: EnumField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      SchedJobLink,
      true,
      true
    >;
    SCHEDULED_END_DATE: OrderableEdmTypeField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCTION_ORDER_NUMBER: OrderableEdmTypeField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTUAL_FROM_DATE: OrderableEdmTypeField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ROUTE_JOB_TYPE: EnumField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      RouteJobType,
      true,
      true
    >;
    OPERATION_PRIORITY: EnumField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      RouteOprPriority,
      true,
      true
    >;
    ACTUAL_END_TIME: OrderableEdmTypeField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WORKING_TIME_SCHEDULING_PROPERTY_ID: OrderableEdmTypeField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_STATUS: EnumField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      ProdJobStatus,
      true,
      true
    >;
    SCHEDULED_JOB_DURATION_HOURS: OrderableEdmTypeField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_JOB_CANCELLED: EnumField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_JOB_NUMBER: OrderableEdmTypeField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_JOB_ENDED: EnumField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OPERATION_NUMBER: OrderableEdmTypeField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_JOB_MANAGEMENT_USED: EnumField<
      ProductionOrderRouteJobs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productionOrderRouteOperation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDER_ROUTE_OPERATION: OneToOneLink<
      ProductionOrderRouteJobs<DeSerializersT>,
      DeSerializersT,
      ProductionOrderRouteOperationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productionOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDER_HEADER: OneToOneLink<
      ProductionOrderRouteJobs<DeSerializersT>,
      DeSerializersT,
      ProductionOrderHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductionOrderRouteJobs<DeSerializers>>;
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
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', false),
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
         * Static representation of the {@link scheduledFromTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_FROM_TIME: fieldBuilder.buildEdmTypeField(
          'ScheduledFromTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link calculatedJobDurationHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_JOB_DURATION_HOURS: fieldBuilder.buildEdmTypeField(
          'CalculatedJobDurationHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link jobProcessingPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_PROCESSING_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'JobProcessingPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link actualEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_END_DATE: fieldBuilder.buildEdmTypeField(
          'ActualEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link nextOperationLinkType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_OPERATION_LINK_TYPE: fieldBuilder.buildEnumField(
          'NextOperationLinkType',
          SchedJobLinkType,
          true
        ),
        /**
         * Static representation of the {@link secondaryJobNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECONDARY_JOB_NUMBER: fieldBuilder.buildEdmTypeField(
          'SecondaryJobNumber',
          'Edm.Int32',
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
         * Static representation of the {@link actualFromTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_FROM_TIME: fieldBuilder.buildEdmTypeField(
          'ActualFromTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link scheduledFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'ScheduledFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link jobSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'JobSequence',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link nextOperationLink} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_OPERATION_LINK: fieldBuilder.buildEnumField(
          'NextOperationLink',
          SchedJobLink,
          true
        ),
        /**
         * Static representation of the {@link scheduledEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_END_DATE: fieldBuilder.buildEdmTypeField(
          'ScheduledEndDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link actualFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'ActualFromDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link operationPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_PRIORITY: fieldBuilder.buildEnumField(
          'OperationPriority',
          RouteOprPriority,
          true
        ),
        /**
         * Static representation of the {@link actualEndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_END_TIME: fieldBuilder.buildEdmTypeField(
          'ActualEndTime',
          'Edm.Int32',
          false
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
         * Static representation of the {@link jobStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_STATUS: fieldBuilder.buildEnumField(
          'JobStatus',
          ProdJobStatus,
          true
        ),
        /**
         * Static representation of the {@link scheduledJobDurationHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_JOB_DURATION_HOURS: fieldBuilder.buildEdmTypeField(
          'ScheduledJobDurationHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isJobCancelled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_JOB_CANCELLED: fieldBuilder.buildEnumField(
          'IsJobCancelled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryJobNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_JOB_NUMBER: fieldBuilder.buildEdmTypeField(
          'PrimaryJobNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isJobEnded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_JOB_ENDED: fieldBuilder.buildEnumField('IsJobEnded', NoYes, true),
        /**
         * Static representation of the {@link operationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperationNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isJobManagementUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_JOB_MANAGEMENT_USED: fieldBuilder.buildEnumField(
          'IsJobManagementUsed',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductionOrderRouteJobs)
      };
    }

    return this._schema;
  }
}
