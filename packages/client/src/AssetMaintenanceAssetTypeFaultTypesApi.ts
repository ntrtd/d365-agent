/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceAssetTypeFaultTypes } from './AssetMaintenanceAssetTypeFaultTypes';
import { AssetMaintenanceAssetTypeFaultTypesRequestBuilder } from './AssetMaintenanceAssetTypeFaultTypesRequestBuilder';
import { AssetMaintenanceFaultTypesApi } from './AssetMaintenanceFaultTypesApi';
import { AssetMaintenanceFaultAreasApi } from './AssetMaintenanceFaultAreasApi';
import { AssetMaintenanceAssetTypesApi } from './AssetMaintenanceAssetTypesApi';
import { AssetMaintenanceFaultSymptomsApi } from './AssetMaintenanceFaultSymptomsApi';
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
export class AssetMaintenanceAssetTypeFaultTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceAssetTypeFaultTypes<DeSerializersT>,
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
  ): AssetMaintenanceAssetTypeFaultTypesApi<DeSerializersT> {
    return new AssetMaintenanceAssetTypeFaultTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFaultType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FAULT_TYPE: OneToOneLink<
      AssetMaintenanceAssetTypeFaultTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFaultArea} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FAULT_AREA: OneToOneLink<
      AssetMaintenanceAssetTypeFaultTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultAreasApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAssetType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE: OneToOneLink<
      AssetMaintenanceAssetTypeFaultTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFaultSymptom} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FAULT_SYMPTOM: OneToOneLink<
      AssetMaintenanceAssetTypeFaultTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultSymptomsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceFaultTypesApi<DeSerializersT>,
      AssetMaintenanceFaultAreasApi<DeSerializersT>,
      AssetMaintenanceAssetTypesApi<DeSerializersT>,
      AssetMaintenanceFaultSymptomsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_FAULT_TYPE: new OneToOneLink(
        'AssetMaintenanceFaultType',
        this,
        linkedApis[0]
      ),
      ASSET_MAINTENANCE_FAULT_AREA: new OneToOneLink(
        'AssetMaintenanceFaultArea',
        this,
        linkedApis[1]
      ),
      ASSET_MAINTENANCE_ASSET_TYPE: new OneToOneLink(
        'AssetMaintenanceAssetType',
        this,
        linkedApis[2]
      ),
      ASSET_MAINTENANCE_FAULT_SYMPTOM: new OneToOneLink(
        'AssetMaintenanceFaultSymptom',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceAssetTypeFaultTypes;

  requestBuilder(): AssetMaintenanceAssetTypeFaultTypesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceAssetTypeFaultTypesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceAssetTypeFaultTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceAssetTypeFaultTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceAssetTypeFaultTypes<DeSerializersT>,
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
    typeof AssetMaintenanceAssetTypeFaultTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceAssetTypeFaultTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeFaultTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeFaultTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FAULT_SYMPTOM_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeFaultTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FAULT_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeFaultTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FAULT_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeFaultTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFaultType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FAULT_TYPE: OneToOneLink<
      AssetMaintenanceAssetTypeFaultTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFaultArea} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FAULT_AREA: OneToOneLink<
      AssetMaintenanceAssetTypeFaultTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultAreasApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAssetType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE: OneToOneLink<
      AssetMaintenanceAssetTypeFaultTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFaultSymptom} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FAULT_SYMPTOM: OneToOneLink<
      AssetMaintenanceAssetTypeFaultTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFaultSymptomsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceAssetTypeFaultTypes<DeSerializers>>;
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
         * Static representation of the {@link maintenanceAssetTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link faultSymptomId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_SYMPTOM_ID: fieldBuilder.buildEdmTypeField(
          'FaultSymptomId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link faultAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_AREA_ID: fieldBuilder.buildEdmTypeField(
          'FaultAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link faultTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'FaultTypeId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceAssetTypeFaultTypes)
      };
    }

    return this._schema;
  }
}
