/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceAssetPrioritiesV2 } from './AssetMaintenanceAssetPrioritiesV2';
import { AssetMaintenanceAssetPrioritiesV2RequestBuilder } from './AssetMaintenanceAssetPrioritiesV2RequestBuilder';
import { AssetMaintenanceAssetsV3Api } from './AssetMaintenanceAssetsV3Api';
import { AssetMaintenanceProductsApi } from './AssetMaintenanceProductsApi';
import { AssetMaintenanceWorkOrderTypesApi } from './AssetMaintenanceWorkOrderTypesApi';
import { AssetMaintenanceModelsApi } from './AssetMaintenanceModelsApi';
import { AssetMaintenanceFunctionalLocationsApi } from './AssetMaintenanceFunctionalLocationsApi';
import { AssetMaintenanceAssetTypesApi } from './AssetMaintenanceAssetTypesApi';
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
export class AssetMaintenanceAssetPrioritiesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetMaintenanceAssetPrioritiesV2<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceAssetPrioritiesV2Api<DeSerializersT> {
    return new AssetMaintenanceAssetPrioritiesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link asset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET: OneToOneLink<
      AssetMaintenanceAssetPrioritiesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_PRODUCT: OneToOneLink<
      AssetMaintenanceAssetPrioritiesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_TYPE: OneToOneLink<
      AssetMaintenanceAssetPrioritiesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_MODEL: OneToOneLink<
      AssetMaintenanceAssetPrioritiesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceAssetPrioritiesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_TYPE: OneToOneLink<
      AssetMaintenanceAssetPrioritiesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceAssetsV3Api<DeSerializersT>,
      AssetMaintenanceProductsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderTypesApi<DeSerializersT>,
      AssetMaintenanceModelsApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>,
      AssetMaintenanceAssetTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET: new OneToOneLink('Asset', this, linkedApis[0]),
      MAINTENANCE_PRODUCT: new OneToOneLink(
        'MaintenanceProduct',
        this,
        linkedApis[1]
      ),
      MAINTENANCE_WORK_ORDER_TYPE: new OneToOneLink(
        'MaintenanceWorkOrderType',
        this,
        linkedApis[2]
      ),
      MAINTENANCE_MODEL: new OneToOneLink(
        'MaintenanceModel',
        this,
        linkedApis[3]
      ),
      MAINTENANCE_FUNCTIONAL_LOCATION: new OneToOneLink(
        'MaintenanceFunctionalLocation',
        this,
        linkedApis[4]
      ),
      ASSET_TYPE: new OneToOneLink('AssetType', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = AssetMaintenanceAssetPrioritiesV2;

  requestBuilder(): AssetMaintenanceAssetPrioritiesV2RequestBuilder<DeSerializersT> {
    return new AssetMaintenanceAssetPrioritiesV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceAssetPrioritiesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceAssetPrioritiesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceAssetPrioritiesV2<DeSerializersT>,
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
    typeof AssetMaintenanceAssetPrioritiesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceAssetPrioritiesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetPrioritiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetPrioritiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetPrioritiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetPrioritiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODEL_PRODUCT_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetPrioritiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetPrioritiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetPrioritiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ORDER_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetPrioritiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FORMATTED_SERVICE_LEVEL_NAME: OrderableEdmTypeField<
      AssetMaintenanceAssetPrioritiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_LEVEL: OrderableEdmTypeField<
      AssetMaintenanceAssetPrioritiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link asset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET: OneToOneLink<
      AssetMaintenanceAssetPrioritiesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_PRODUCT: OneToOneLink<
      AssetMaintenanceAssetPrioritiesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_TYPE: OneToOneLink<
      AssetMaintenanceAssetPrioritiesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_MODEL: OneToOneLink<
      AssetMaintenanceAssetPrioritiesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceAssetPrioritiesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_TYPE: OneToOneLink<
      AssetMaintenanceAssetPrioritiesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceAssetPrioritiesV2<DeSerializers>>;
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
         * Static representation of the {@link functionalLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'FunctionalLocationId',
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
         * Static representation of the {@link productId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ID: fieldBuilder.buildEdmTypeField(
          'ProductId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link modelProductId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_PRODUCT_ID: fieldBuilder.buildEdmTypeField(
          'ModelProductId',
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
         * Static representation of the {@link maintenanceAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workOrderTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'WorkOrderTypeId',
          'Edm.String',
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
         * Static representation of the {@link serviceLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LEVEL: fieldBuilder.buildEdmTypeField(
          'ServiceLevel',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceAssetPrioritiesV2)
      };
    }

    return this._schema;
  }
}
