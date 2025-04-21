/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceModels } from './AssetMaintenanceModels';
import { AssetMaintenanceModelsRequestBuilder } from './AssetMaintenanceModelsRequestBuilder';
import { AssetMaintenanceFunctionalLocationRoundsApi } from './AssetMaintenanceFunctionalLocationRoundsApi';
import { AssetMaintenanceAssetPrioritiesV2Api } from './AssetMaintenanceAssetPrioritiesV2Api';
import { AssetMaintenanceAssetsApi } from './AssetMaintenanceAssetsApi';
import { AssetMaintenanceScheduledExecutionsApi } from './AssetMaintenanceScheduledExecutionsApi';
import { AssetMaintenanceAssetPrioritiesApi } from './AssetMaintenanceAssetPrioritiesApi';
import { AssetMaintenanceAssetsV2Api } from './AssetMaintenanceAssetsV2Api';
import { AssetMaintenanceAssetsV3Api } from './AssetMaintenanceAssetsV3Api';
import { AssetMaintenanceAssetCriticalitiesApi } from './AssetMaintenanceAssetCriticalitiesApi';
import { AssetMaintenanceJobTypeDefaultsApi } from './AssetMaintenanceJobTypeDefaultsApi';
import { AssetMaintenanceProductsApi } from './AssetMaintenanceProductsApi';
import { AssetMaintenanceAssetTypesApi } from './AssetMaintenanceAssetTypesApi';
import { AssetMaintenanceAssetTypeDefaultsApi } from './AssetMaintenanceAssetTypeDefaultsApi';
import { AssetMaintenanceFunctionalLocationMaintenancePlansApi } from './AssetMaintenanceFunctionalLocationMaintenancePlansApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceModelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetMaintenanceModels<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceModelsApi<DeSerializersT> {
    return new AssetMaintenanceModelsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationRound} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ROUND: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetServiceLevelsModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_SERVICE_LEVELS_MODEL: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetPrioritiesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceScheduledExecution} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_SCHEDULED_EXECUTION: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceScheduledExecutionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetPriority} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_PRIORITY: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetPrioritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetObjectTableEntityModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_OBJECT_TABLE_ENTITY_MODEL: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetObjectTableV3EntityModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_OBJECT_TABLE_V_3_ENTITY_MODEL: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCriticality} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CRITICALITY: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceJobTypeDefault} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE_DEFAULT: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_PRODUCT: OneToOneLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAssetType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE: OneToOneLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeDefault} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_DEFAULT: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeDefaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationMaintenancePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_MAINTENANCE_PLAN: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationMaintenancePlansApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceFunctionalLocationRoundsApi<DeSerializersT>,
      AssetMaintenanceAssetPrioritiesV2Api<DeSerializersT>,
      AssetMaintenanceAssetsApi<DeSerializersT>,
      AssetMaintenanceScheduledExecutionsApi<DeSerializersT>,
      AssetMaintenanceAssetPrioritiesApi<DeSerializersT>,
      AssetMaintenanceAssetsV2Api<DeSerializersT>,
      AssetMaintenanceAssetsV3Api<DeSerializersT>,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>,
      AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>,
      AssetMaintenanceProductsApi<DeSerializersT>,
      AssetMaintenanceAssetTypesApi<DeSerializersT>,
      AssetMaintenanceAssetTypeDefaultsApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationMaintenancePlansApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ROUND: new OneToManyLink(
        'AssetMaintenanceFunctionalLocationRound',
        this,
        linkedApis[0]
      ),
      MAINTENANCE_ASSET_SERVICE_LEVELS_MODEL: new OneToManyLink(
        'MaintenanceAssetServiceLevels_Model',
        this,
        linkedApis[1]
      ),
      ASSET_MAINTENANCE_ASSET: new OneToManyLink(
        'AssetMaintenanceAsset',
        this,
        linkedApis[2]
      ),
      ASSET_MAINTENANCE_SCHEDULED_EXECUTION: new OneToManyLink(
        'AssetMaintenanceScheduledExecution',
        this,
        linkedApis[3]
      ),
      ASSET_MAINTENANCE_ASSET_PRIORITY: new OneToManyLink(
        'AssetMaintenanceAssetPriority',
        this,
        linkedApis[4]
      ),
      ENT_ASSET_OBJECT_TABLE_ENTITY_MODEL: new OneToManyLink(
        'EntAssetObjectTableEntity_Model',
        this,
        linkedApis[5]
      ),
      ENT_ASSET_OBJECT_TABLE_V_3_ENTITY_MODEL: new OneToManyLink(
        'EntAssetObjectTableV3Entity_Model',
        this,
        linkedApis[6]
      ),
      ASSET_MAINTENANCE_ASSET_CRITICALITY: new OneToManyLink(
        'AssetMaintenanceAssetCriticality',
        this,
        linkedApis[7]
      ),
      ASSET_MAINTENANCE_JOB_TYPE_DEFAULT: new OneToManyLink(
        'AssetMaintenanceJobTypeDefault',
        this,
        linkedApis[8]
      ),
      ASSET_MAINTENANCE_PRODUCT: new OneToOneLink(
        'AssetMaintenanceProduct',
        this,
        linkedApis[9]
      ),
      ASSET_MAINTENANCE_ASSET_TYPE: new OneToOneLink(
        'AssetMaintenanceAssetType',
        this,
        linkedApis[10]
      ),
      ASSET_MAINTENANCE_ASSET_TYPE_DEFAULT: new OneToManyLink(
        'AssetMaintenanceAssetTypeDefault',
        this,
        linkedApis[11]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_MAINTENANCE_PLAN: new OneToManyLink(
        'AssetMaintenanceFunctionalLocationMaintenancePlan',
        this,
        linkedApis[12]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceModels;

  requestBuilder(): AssetMaintenanceModelsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceModelsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceModels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceModels<DeSerializersT>,
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
    typeof AssetMaintenanceModels,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceModels,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_ID: OrderableEdmTypeField<
      AssetMaintenanceModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenanceModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationRound} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ROUND: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetServiceLevelsModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_SERVICE_LEVELS_MODEL: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetPrioritiesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceScheduledExecution} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_SCHEDULED_EXECUTION: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceScheduledExecutionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetPriority} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_PRIORITY: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetPrioritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetObjectTableEntityModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_OBJECT_TABLE_ENTITY_MODEL: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetObjectTableV3EntityModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_OBJECT_TABLE_V_3_ENTITY_MODEL: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCriticality} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CRITICALITY: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceJobTypeDefault} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE_DEFAULT: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_PRODUCT: OneToOneLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAssetType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE: OneToOneLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeDefault} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_DEFAULT: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeDefaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationMaintenancePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_MAINTENANCE_PLAN: OneToManyLink<
      AssetMaintenanceModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationMaintenancePlansApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceModels<DeSerializers>>;
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
         * Static representation of the {@link productId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ID: fieldBuilder.buildEdmTypeField(
          'ProductId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link modelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_ID: fieldBuilder.buildEdmTypeField(
          'ModelId',
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
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceModels)
      };
    }

    return this._schema;
  }
}
