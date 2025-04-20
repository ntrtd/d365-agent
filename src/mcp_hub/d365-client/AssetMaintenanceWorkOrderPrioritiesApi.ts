/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceWorkOrderPriorities } from './AssetMaintenanceWorkOrderPriorities';
import { AssetMaintenanceWorkOrderPrioritiesRequestBuilder } from './AssetMaintenanceWorkOrderPrioritiesRequestBuilder';
import { AssetMaintenanceRequestsApi } from './AssetMaintenanceRequestsApi';
import { AssetMaintenanceWorkOrderTablesV2Api } from './AssetMaintenanceWorkOrderTablesV2Api';
import { AssetMaintenanceRequestsV2Api } from './AssetMaintenanceRequestsV2Api';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceWorkOrderPrioritiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceWorkOrderPriorities<DeSerializersT>,
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
  ): AssetMaintenanceWorkOrderPrioritiesApi<DeSerializersT> {
    return new AssetMaintenanceWorkOrderPrioritiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS: OneToManyLink<
      AssetMaintenanceWorkOrderPriorities<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceLevelMaintenanceWorkOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_LEVEL_MAINTENANCE_WORK_ORDER_HEADERS: OneToManyLink<
      AssetMaintenanceWorkOrderPriorities<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequestsServiceLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS_SERVICE_LEVEL: OneToManyLink<
      AssetMaintenanceWorkOrderPriorities<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceRequestsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MAINTENANCE_REQUESTS: new OneToManyLink(
        'MaintenanceRequests',
        this,
        linkedApis[0]
      ),
      SERVICE_LEVEL_MAINTENANCE_WORK_ORDER_HEADERS: new OneToManyLink(
        'ServiceLevel_MaintenanceWorkOrderHeaders',
        this,
        linkedApis[1]
      ),
      MAINTENANCE_REQUESTS_SERVICE_LEVEL: new OneToManyLink(
        'MaintenanceRequests_ServiceLevel',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceWorkOrderPriorities;

  requestBuilder(): AssetMaintenanceWorkOrderPrioritiesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceWorkOrderPrioritiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceWorkOrderPriorities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceWorkOrderPriorities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceWorkOrderPriorities<DeSerializersT>,
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
    typeof AssetMaintenanceWorkOrderPriorities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceWorkOrderPriorities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderPriorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_LEVEL: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderPriorities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderPriorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_EXPECTED_END_DAY: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderPriorities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FORMATTED_SERVICE_LEVEL_NAME: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderPriorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_EXPECTED_END_TIME: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderPriorities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WORK_ORDER_EXPECTED_SET_START_TIME: EnumField<
      AssetMaintenanceWorkOrderPriorities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORK_ORDER_EXPECTED_START_DAY: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderPriorities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WORK_ORDER_EXPECTED_START_TIME: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderPriorities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WORK_ORDER_EXPECTED_SET_END_TIME: EnumField<
      AssetMaintenanceWorkOrderPriorities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS: OneToManyLink<
      AssetMaintenanceWorkOrderPriorities<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceLevelMaintenanceWorkOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_LEVEL_MAINTENANCE_WORK_ORDER_HEADERS: OneToManyLink<
      AssetMaintenanceWorkOrderPriorities<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequestsServiceLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS_SERVICE_LEVEL: OneToManyLink<
      AssetMaintenanceWorkOrderPriorities<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceWorkOrderPriorities<DeSerializers>>;
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
         * Static representation of the {@link serviceLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LEVEL: fieldBuilder.buildEdmTypeField(
          'ServiceLevel',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link workOrderExpectedEndDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_EXPECTED_END_DAY: fieldBuilder.buildEdmTypeField(
          'WorkOrderExpectedEndDay',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link formattedServiceLevelName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_SERVICE_LEVEL_NAME: fieldBuilder.buildEdmTypeField(
          'FormattedServiceLevelName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workOrderExpectedEndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_EXPECTED_END_TIME: fieldBuilder.buildEdmTypeField(
          'WorkOrderExpectedEndTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link workOrderExpectedSetStartTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_EXPECTED_SET_START_TIME: fieldBuilder.buildEnumField(
          'WorkOrderExpectedSetStartTime',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workOrderExpectedStartDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_EXPECTED_START_DAY: fieldBuilder.buildEdmTypeField(
          'WorkOrderExpectedStartDay',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link workOrderExpectedStartTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_EXPECTED_START_TIME: fieldBuilder.buildEdmTypeField(
          'WorkOrderExpectedStartTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link workOrderExpectedSetEndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_EXPECTED_SET_END_TIME: fieldBuilder.buildEnumField(
          'WorkOrderExpectedSetEndTime',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceWorkOrderPriorities)
      };
    }

    return this._schema;
  }
}
