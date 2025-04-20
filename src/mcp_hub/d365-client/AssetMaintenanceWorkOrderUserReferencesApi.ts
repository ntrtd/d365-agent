/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceWorkOrderUserReferences } from './AssetMaintenanceWorkOrderUserReferences';
import { AssetMaintenanceWorkOrderUserReferencesRequestBuilder } from './AssetMaintenanceWorkOrderUserReferencesRequestBuilder';
import { AssetMaintenanceWorkOrderLifecycleStatesApi } from './AssetMaintenanceWorkOrderLifecycleStatesApi';
import { AssetMaintenanceAssetsV3Api } from './AssetMaintenanceAssetsV3Api';
import { AssetMaintenanceWorkOrderLinesV2Api } from './AssetMaintenanceWorkOrderLinesV2Api';
import { AssetMaintenanceWorkOrderTablesV2Api } from './AssetMaintenanceWorkOrderTablesV2Api';
import { AssetMaintenanceFunctionalLocationsApi } from './AssetMaintenanceFunctionalLocationsApi';
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
export class AssetMaintenanceWorkOrderUserReferencesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceWorkOrderUserReferences<DeSerializersT>,
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
  ): AssetMaintenanceWorkOrderUserReferencesApi<DeSerializersT> {
    return new AssetMaintenanceWorkOrderUserReferencesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceWorkOrderUserReferences<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderJobAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_JOB_ASSET: OneToOneLink<
      AssetMaintenanceWorkOrderUserReferences<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderJobV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_JOB_V_2: OneToOneLink<
      AssetMaintenanceWorkOrderUserReferences<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_HEADER: OneToOneLink<
      AssetMaintenanceWorkOrderUserReferences<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderJobAssetFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_JOB_ASSET_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceWorkOrderUserReferences<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceWorkOrderLifecycleStatesApi<DeSerializersT>,
      AssetMaintenanceAssetsV3Api<DeSerializersT>,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MAINTENANCE_WORK_ORDER_LIFECYCLE_STATE: new OneToOneLink(
        'MaintenanceWorkOrderLifecycleState',
        this,
        linkedApis[0]
      ),
      MAINTENANCE_WORK_ORDER_JOB_ASSET: new OneToOneLink(
        'MaintenanceWorkOrderJobAsset',
        this,
        linkedApis[1]
      ),
      MAINTENANCE_WORK_ORDER_JOB_V_2: new OneToOneLink(
        'MaintenanceWorkOrderJobV2',
        this,
        linkedApis[2]
      ),
      MAINTENANCE_WORK_ORDER_HEADER: new OneToOneLink(
        'MaintenanceWorkOrderHeader',
        this,
        linkedApis[3]
      ),
      MAINTENANCE_WORK_ORDER_JOB_ASSET_FUNCTIONAL_LOCATION: new OneToOneLink(
        'MaintenanceWorkOrderJobAssetFunctionalLocation',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceWorkOrderUserReferences;

  requestBuilder(): AssetMaintenanceWorkOrderUserReferencesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceWorkOrderUserReferencesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceWorkOrderUserReferences<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceWorkOrderUserReferences<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceWorkOrderUserReferences<DeSerializersT>,
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
    typeof AssetMaintenanceWorkOrderUserReferences,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceWorkOrderUserReferences,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderUserReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_SCHEDULED_TO_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderUserReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ORDER_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderUserReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderUserReferences<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    WORK_ORDER_ACTIVE: EnumField<
      AssetMaintenanceWorkOrderUserReferences<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORK_ORDER_SERVICE_LEVEL: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderUserReferences<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WORK_ORDER_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderUserReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_SCHEDULED_END_DATE: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderUserReferences<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOB_SCHEDULED_START_DATE: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderUserReferences<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOB_ASSET_FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderUserReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderUserReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceWorkOrderUserReferences<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderJobAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_JOB_ASSET: OneToOneLink<
      AssetMaintenanceWorkOrderUserReferences<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderJobV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_JOB_V_2: OneToOneLink<
      AssetMaintenanceWorkOrderUserReferences<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_HEADER: OneToOneLink<
      AssetMaintenanceWorkOrderUserReferences<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderJobAssetFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_JOB_ASSET_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceWorkOrderUserReferences<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceWorkOrderUserReferences<DeSerializers>
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
         * Static representation of the {@link jobScheduledToWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_SCHEDULED_TO_WORKER_PERSONNEL_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'JobScheduledToWorkerPersonnelNumber',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link workOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'WorkOrderId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link jobLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'JobLineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link workOrderActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_ACTIVE: fieldBuilder.buildEnumField(
          'WorkOrderActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workOrderServiceLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_SERVICE_LEVEL: fieldBuilder.buildEdmTypeField(
          'WorkOrderServiceLevel',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link workOrderLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'WorkOrderLifecycleStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobScheduledEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_SCHEDULED_END_DATE: fieldBuilder.buildEdmTypeField(
          'JobScheduledEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link jobScheduledStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_SCHEDULED_START_DATE: fieldBuilder.buildEdmTypeField(
          'JobScheduledStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link jobAssetFunctionalLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ASSET_FUNCTIONAL_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'JobAssetFunctionalLocationID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'JobAssetID',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceWorkOrderUserReferences)
      };
    }

    return this._schema;
  }
}
