/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceWorkOrderAssetFaults } from './AssetMaintenanceWorkOrderAssetFaults';
import { AssetMaintenanceWorkOrderAssetFaultsRequestBuilder } from './AssetMaintenanceWorkOrderAssetFaultsRequestBuilder';
import { AssetMaintenanceWorkOrderTablesV2Api } from './AssetMaintenanceWorkOrderTablesV2Api';
import { AssetMaintenanceAssetTypesApi } from './AssetMaintenanceAssetTypesApi';
import { AssetMaintenanceAssetsV3Api } from './AssetMaintenanceAssetsV3Api';
import { AssetMaintenanceFaultRemediesApi } from './AssetMaintenanceFaultRemediesApi';
import { AssetMaintenanceFaultTypesApi } from './AssetMaintenanceFaultTypesApi';
import { AssetMaintenanceFaultSymptomsApi } from './AssetMaintenanceFaultSymptomsApi';
import { AssetMaintenanceFunctionalLocationsApi } from './AssetMaintenanceFunctionalLocationsApi';
import { AssetMaintenanceFaultCausesApi } from './AssetMaintenanceFaultCausesApi';
import { AssetMaintenanceFaultAreasApi } from './AssetMaintenanceFaultAreasApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceWorkOrderAssetFaultsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
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
  ): AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT> {
    return new AssetMaintenanceWorkOrderAssetFaultsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER: OneToOneLink<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_TYPE: OneToOneLink<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET: OneToOneLink<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFaultRemedy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FAULT_REMEDY: OneToOneLink<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultRemediesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFaultType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FAULT_TYPE: OneToOneLink<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFaultSymptom} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FAULT_SYMPTOM: OneToOneLink<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultSymptomsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFaultCause} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FAULT_CAUSE: OneToOneLink<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultCausesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFaultArea} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FAULT_AREA: OneToOneLink<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultAreasApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>,
      AssetMaintenanceAssetTypesApi<DeSerializersT>,
      AssetMaintenanceAssetsV3Api<DeSerializersT>,
      AssetMaintenanceFaultRemediesApi<DeSerializersT>,
      AssetMaintenanceFaultTypesApi<DeSerializersT>,
      AssetMaintenanceFaultSymptomsApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>,
      AssetMaintenanceFaultCausesApi<DeSerializersT>,
      AssetMaintenanceFaultAreasApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MAINTENANCE_WORK_ORDER: new OneToOneLink(
        'MaintenanceWorkOrder',
        this,
        linkedApis[0]
      ),
      MAINTENANCE_ASSET_TYPE: new OneToOneLink(
        'MaintenanceAssetType',
        this,
        linkedApis[1]
      ),
      MAINTENANCE_ASSET: new OneToOneLink(
        'MaintenanceAsset',
        this,
        linkedApis[2]
      ),
      MAINTENANCE_FAULT_REMEDY: new OneToOneLink(
        'MaintenanceFaultRemedy',
        this,
        linkedApis[3]
      ),
      MAINTENANCE_FAULT_TYPE: new OneToOneLink(
        'MaintenanceFaultType',
        this,
        linkedApis[4]
      ),
      MAINTENANCE_FAULT_SYMPTOM: new OneToOneLink(
        'MaintenanceFaultSymptom',
        this,
        linkedApis[5]
      ),
      MAINTENANCE_FUNCTIONAL_LOCATION: new OneToOneLink(
        'MaintenanceFunctionalLocation',
        this,
        linkedApis[6]
      ),
      MAINTENANCE_FAULT_CAUSE: new OneToOneLink(
        'MaintenanceFaultCause',
        this,
        linkedApis[7]
      ),
      MAINTENANCE_FAULT_AREA: new OneToOneLink(
        'MaintenanceFaultArea',
        this,
        linkedApis[8]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceWorkOrderAssetFaults;

  requestBuilder(): AssetMaintenanceWorkOrderAssetFaultsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceWorkOrderAssetFaultsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
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
    typeof AssetMaintenanceWorkOrderAssetFaults,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceWorkOrderAssetFaults,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FAULT_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ORDER_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FAULT_SYMPTOM_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAULT_REMEDY: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAULT_CAUSE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAULT_REMEDY_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAULT_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAULT_DATE: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FAULT_CAUSE: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FAULT_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER: OneToOneLink<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_TYPE: OneToOneLink<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET: OneToOneLink<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFaultRemedy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FAULT_REMEDY: OneToOneLink<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultRemediesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFaultType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FAULT_TYPE: OneToOneLink<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFaultSymptom} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FAULT_SYMPTOM: OneToOneLink<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultSymptomsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFaultCause} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FAULT_CAUSE: OneToOneLink<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultCausesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFaultArea} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FAULT_AREA: OneToOneLink<
      AssetMaintenanceWorkOrderAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultAreasApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceWorkOrderAssetFaults<DeSerializers>>;
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
         * Static representation of the {@link faultId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_ID: fieldBuilder.buildEdmTypeField(
          'FaultID',
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
         * Static representation of the {@link functionalLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'FunctionalLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER: fieldBuilder.buildEdmTypeField(
          'WorkOrder',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link faultSymptomId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_SYMPTOM_ID: fieldBuilder.buildEdmTypeField(
          'FaultSymptomId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link faultRemedy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_REMEDY: fieldBuilder.buildEdmTypeField(
          'FaultRemedy',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link assetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID: fieldBuilder.buildEdmTypeField('AssetId', 'Edm.String', true),
        /**
         * Static representation of the {@link faultCauseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_CAUSE_ID: fieldBuilder.buildEdmTypeField(
          'FaultCauseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link faultRemedyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_REMEDY_ID: fieldBuilder.buildEdmTypeField(
          'FaultRemedyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'AssetTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link faultTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'FaultTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link faultDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_DATE: fieldBuilder.buildEdmTypeField(
          'FaultDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link faultCause} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_CAUSE: fieldBuilder.buildEdmTypeField(
          'FaultCause',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link faultAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_AREA_ID: fieldBuilder.buildEdmTypeField(
          'FaultAreaId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceWorkOrderAssetFaults)
      };
    }

    return this._schema;
  }
}
