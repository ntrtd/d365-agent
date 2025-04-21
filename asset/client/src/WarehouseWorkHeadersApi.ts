/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarehouseWorkHeaders } from './WarehouseWorkHeaders';
import { WarehouseWorkHeadersRequestBuilder } from './WarehouseWorkHeadersRequestBuilder';
import { WarehouseWorkLinesApi } from './WarehouseWorkLinesApi';
import { WhsWorkTransType } from './WhsWorkTransType';
import { WhsWorkStatus } from './WhsWorkStatus';
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
export class WarehouseWorkHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WarehouseWorkHeaders<DeSerializersT>, DeSerializersT>
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
  ): WarehouseWorkHeadersApi<DeSerializersT> {
    return new WarehouseWorkHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link warehouseWorkLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_WORK_LINES: OneToManyLink<
      WarehouseWorkHeaders<DeSerializersT>,
      DeSerializersT,
      WarehouseWorkLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WarehouseWorkLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      WAREHOUSE_WORK_LINES: new OneToManyLink(
        'WarehouseWorkLines',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = WarehouseWorkHeaders;

  requestBuilder(): WarehouseWorkHeadersRequestBuilder<DeSerializersT> {
    return new WarehouseWorkHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WarehouseWorkHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WarehouseWorkHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WarehouseWorkHeaders<DeSerializersT>,
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
    typeof WarehouseWorkHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarehouseWorkHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_WORK_ID: OrderableEdmTypeField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_SITE_ID: OrderableEdmTypeField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOAD_ID: OrderableEdmTypeField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TARGET_LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_WORK_ORDER_TYPE: EnumField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      WhsWorkTransType,
      true,
      true
    >;
    SOURCE_ORDER_NUMBER: OrderableEdmTypeField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_WORK_STATUS: EnumField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      WhsWorkStatus,
      true,
      true
    >;
    ACTUAL_PROCESSING_TIME_SECONDS: OrderableEdmTypeField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ESTIMATED_PROCESSING_TIME_SECONDS: OrderableEdmTypeField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WAREHOUSE_WORK_CANCELLED_DATE_TIME: OrderableEdmTypeField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WAVE_ID: OrderableEdmTypeField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WAREHOUSE_WORK_BLOCKED: EnumField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE_WORK_CANCELLING_USER_ID: OrderableEdmTypeField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPMENT_ID: OrderableEdmTypeField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_WORK_LOCKING_WAREHOUSE_MOBILE_DEVICE_USER_ID: OrderableEdmTypeField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_WORK_PROCESSING_START_DATE_TIME: OrderableEdmTypeField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_WAREHOUSE_WORKER_MANUALLY_ASSIGNED: EnumField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE_WORK_CLOSED_DATE_TIME: OrderableEdmTypeField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WAREHOUSE_WORK_MANUALLY_COMPLETING_USER_ID: OrderableEdmTypeField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_WORK_POOL_ID: OrderableEdmTypeField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_WORK_PRIORITY: OrderableEdmTypeField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONTAINER_ID: OrderableEdmTypeField<
      WarehouseWorkHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseWorkLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_WORK_LINES: OneToManyLink<
      WarehouseWorkHeaders<DeSerializersT>,
      DeSerializersT,
      WarehouseWorkLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WarehouseWorkHeaders<DeSerializers>>;
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
         * Static representation of the {@link warehouseWorkId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseWorkId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventorySiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventorySiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_ID: fieldBuilder.buildEdmTypeField('LoadId', 'Edm.String', true),
        /**
         * Static representation of the {@link targetLicensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'TargetLicensePlateNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseWorkOrderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_ORDER_TYPE: fieldBuilder.buildEnumField(
          'WarehouseWorkOrderType',
          WhsWorkTransType,
          true
        ),
        /**
         * Static representation of the {@link sourceOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseWorkStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_STATUS: fieldBuilder.buildEnumField(
          'WarehouseWorkStatus',
          WhsWorkStatus,
          true
        ),
        /**
         * Static representation of the {@link actualProcessingTimeSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_PROCESSING_TIME_SECONDS: fieldBuilder.buildEdmTypeField(
          'ActualProcessingTimeSeconds',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link estimatedProcessingTimeSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_PROCESSING_TIME_SECONDS: fieldBuilder.buildEdmTypeField(
          'EstimatedProcessingTimeSeconds',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link warehouseWorkCancelledDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_CANCELLED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'WarehouseWorkCancelledDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link waveId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAVE_ID: fieldBuilder.buildEdmTypeField('WaveId', 'Edm.String', true),
        /**
         * Static representation of the {@link isWarehouseWorkBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WAREHOUSE_WORK_BLOCKED: fieldBuilder.buildEnumField(
          'IsWarehouseWorkBlocked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link warehouseWorkCancellingUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_CANCELLING_USER_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseWorkCancellingUserId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_ID: fieldBuilder.buildEdmTypeField(
          'ShipmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseWorkLockingWarehouseMobileDeviceUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_LOCKING_WAREHOUSE_MOBILE_DEVICE_USER_ID:
          fieldBuilder.buildEdmTypeField(
            'WarehouseWorkLockingWarehouseMobileDeviceUserId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link warehouseWorkProcessingStartDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_PROCESSING_START_DATE_TIME:
          fieldBuilder.buildEdmTypeField(
            'WarehouseWorkProcessingStartDateTime',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link isWarehouseWorkerManuallyAssigned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WAREHOUSE_WORKER_MANUALLY_ASSIGNED: fieldBuilder.buildEnumField(
          'IsWarehouseWorkerManuallyAssigned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link warehouseWorkClosedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_CLOSED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'WarehouseWorkClosedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link warehouseWorkManuallyCompletingUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_MANUALLY_COMPLETING_USER_ID:
          fieldBuilder.buildEdmTypeField(
            'WarehouseWorkManuallyCompletingUserId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link warehouseWorkPoolId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_POOL_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseWorkPoolId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseWorkPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_PRIORITY: fieldBuilder.buildEdmTypeField(
          'WarehouseWorkPriority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link containerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTAINER_ID: fieldBuilder.buildEdmTypeField(
          'ContainerId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WarehouseWorkHeaders)
      };
    }

    return this._schema;
  }
}
