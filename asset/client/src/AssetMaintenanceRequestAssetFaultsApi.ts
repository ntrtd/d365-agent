/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceRequestAssetFaults } from './AssetMaintenanceRequestAssetFaults';
import { AssetMaintenanceRequestAssetFaultsRequestBuilder } from './AssetMaintenanceRequestAssetFaultsRequestBuilder';
import { AssetMaintenanceRequestsV2Api } from './AssetMaintenanceRequestsV2Api';
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
export class AssetMaintenanceRequestAssetFaultsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceRequestAssetFaults<DeSerializersT>,
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
  ): AssetMaintenanceRequestAssetFaultsApi<DeSerializersT> {
    return new AssetMaintenanceRequestAssetFaultsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUEST: OneToOneLink<
      AssetMaintenanceRequestAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_TYPE: OneToOneLink<
      AssetMaintenanceRequestAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET: OneToOneLink<
      AssetMaintenanceRequestAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFaultRemedy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FAULT_REMEDY: OneToOneLink<
      AssetMaintenanceRequestAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultRemediesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFaultType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FAULT_TYPE: OneToOneLink<
      AssetMaintenanceRequestAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFaultSymptom} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FAULT_SYMPTOM: OneToOneLink<
      AssetMaintenanceRequestAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultSymptomsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceRequestAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFaultCause} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FAULT_CAUSE: OneToOneLink<
      AssetMaintenanceRequestAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultCausesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFaultArea} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FAULT_AREA: OneToOneLink<
      AssetMaintenanceRequestAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultAreasApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceRequestsV2Api<DeSerializersT>,
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
      MAINTENANCE_REQUEST: new OneToOneLink(
        'MaintenanceRequest',
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

  entityConstructor = AssetMaintenanceRequestAssetFaults;

  requestBuilder(): AssetMaintenanceRequestAssetFaultsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceRequestAssetFaultsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceRequestAssetFaults<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceRequestAssetFaults<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceRequestAssetFaults<DeSerializersT>,
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
    typeof AssetMaintenanceRequestAssetFaults,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceRequestAssetFaults,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FAULT_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FAULT_REMEDY_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAULT_CAUSE_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAULT_REMEDY: OrderableEdmTypeField<
      AssetMaintenanceRequestAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FAULT_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_TABLE: OrderableEdmTypeField<
      AssetMaintenanceRequestAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FAULT_SYMPTOM_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAULT_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAULT_CAUSE: OrderableEdmTypeField<
      AssetMaintenanceRequestAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FAULT_DATE: OrderableEdmTypeField<
      AssetMaintenanceRequestAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestAssetFaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUEST: OneToOneLink<
      AssetMaintenanceRequestAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_TYPE: OneToOneLink<
      AssetMaintenanceRequestAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET: OneToOneLink<
      AssetMaintenanceRequestAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFaultRemedy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FAULT_REMEDY: OneToOneLink<
      AssetMaintenanceRequestAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultRemediesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFaultType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FAULT_TYPE: OneToOneLink<
      AssetMaintenanceRequestAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFaultSymptom} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FAULT_SYMPTOM: OneToOneLink<
      AssetMaintenanceRequestAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultSymptomsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceRequestAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFaultCause} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FAULT_CAUSE: OneToOneLink<
      AssetMaintenanceRequestAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultCausesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFaultArea} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FAULT_AREA: OneToOneLink<
      AssetMaintenanceRequestAssetFaults<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultAreasApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceRequestAssetFaults<DeSerializers>>;
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
         * Static representation of the {@link requestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'RequestId',
          'Edm.String',
          false
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
         * Static representation of the {@link faultCauseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_CAUSE_ID: fieldBuilder.buildEdmTypeField(
          'FaultCauseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID: fieldBuilder.buildEdmTypeField('AssetId', 'Edm.String', true),
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
         * Static representation of the {@link faultRemedy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_REMEDY: fieldBuilder.buildEdmTypeField(
          'FaultRemedy',
          'Edm.Int64',
          false
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
         * Static representation of the {@link requestTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_TABLE: fieldBuilder.buildEdmTypeField(
          'RequestTable',
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
         * Static representation of the {@link faultAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_AREA_ID: fieldBuilder.buildEdmTypeField(
          'FaultAreaId',
          'Edm.String',
          true
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
         * Static representation of the {@link faultDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_DATE: fieldBuilder.buildEdmTypeField(
          'FaultDate',
          'Edm.DateTimeOffset',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceRequestAssetFaults)
      };
    }

    return this._schema;
  }
}
