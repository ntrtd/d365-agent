/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceRequestLifecycleModels } from './AssetMaintenanceRequestLifecycleModels';
import { AssetMaintenanceRequestLifecycleModelsRequestBuilder } from './AssetMaintenanceRequestLifecycleModelsRequestBuilder';
import { AssetMaintenanceRequestTypesApi } from './AssetMaintenanceRequestTypesApi';
import { AssetMaintenanceRequestLifecycleStatesApi } from './AssetMaintenanceRequestLifecycleStatesApi';
import { AssetMaintenanceRequestLifecycleModelStatesApi } from './AssetMaintenanceRequestLifecycleModelStatesApi';
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
export class AssetMaintenanceRequestLifecycleModelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceRequestLifecycleModels<DeSerializersT>,
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
  ): AssetMaintenanceRequestLifecycleModelsApi<DeSerializersT> {
    return new AssetMaintenanceRequestLifecycleModelsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceRequestType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST_TYPE: OneToManyLink<
      AssetMaintenanceRequestLifecycleModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveredAssetRequestLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERED_ASSET_REQUEST_LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceRequestLifecycleModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivedAssetRequestLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVED_ASSET_REQUEST_LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceRequestLifecycleModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceRequestLifecycleModelState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST_LIFECYCLE_MODEL_STATE: OneToManyLink<
      AssetMaintenanceRequestLifecycleModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleModelStatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceRequestTypesApi<DeSerializersT>,
      AssetMaintenanceRequestLifecycleStatesApi<DeSerializersT>,
      AssetMaintenanceRequestLifecycleStatesApi<DeSerializersT>,
      AssetMaintenanceRequestLifecycleModelStatesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_REQUEST_TYPE: new OneToManyLink(
        'AssetMaintenanceRequestType',
        this,
        linkedApis[0]
      ),
      DELIVERED_ASSET_REQUEST_LIFECYCLE_STATE: new OneToOneLink(
        'DeliveredAssetRequestLifecycleState',
        this,
        linkedApis[1]
      ),
      RECEIVED_ASSET_REQUEST_LIFECYCLE_STATE: new OneToOneLink(
        'ReceivedAssetRequestLifecycleState',
        this,
        linkedApis[2]
      ),
      ASSET_MAINTENANCE_REQUEST_LIFECYCLE_MODEL_STATE: new OneToManyLink(
        'AssetMaintenanceRequestLifecycleModelState',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceRequestLifecycleModels;

  requestBuilder(): AssetMaintenanceRequestLifecycleModelsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceRequestLifecycleModelsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceRequestLifecycleModels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceRequestLifecycleModels<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceRequestLifecycleModels<DeSerializersT>,
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
    typeof AssetMaintenanceRequestLifecycleModels,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceRequestLifecycleModels,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestLifecycleModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_LIFECYCLE_MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestLifecycleModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceRequestLifecycleModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVED_MAINTENANCE_ASSETS_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestLifecycleModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERED_MAINTENANCE_ASSETS_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestLifecycleModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceRequestType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST_TYPE: OneToManyLink<
      AssetMaintenanceRequestLifecycleModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveredAssetRequestLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERED_ASSET_REQUEST_LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceRequestLifecycleModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivedAssetRequestLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVED_ASSET_REQUEST_LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceRequestLifecycleModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceRequestLifecycleModelState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST_LIFECYCLE_MODEL_STATE: OneToManyLink<
      AssetMaintenanceRequestLifecycleModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleModelStatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceRequestLifecycleModels<DeSerializers>
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
         * Static representation of the {@link requestLifecycleModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_LIFECYCLE_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'RequestLifecycleModelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link receivedMaintenanceAssetsLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVED_MAINTENANCE_ASSETS_LIFECYCLE_STATE_ID:
          fieldBuilder.buildEdmTypeField(
            'ReceivedMaintenanceAssetsLifecycleStateId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link deliveredMaintenanceAssetsLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERED_MAINTENANCE_ASSETS_LIFECYCLE_STATE_ID:
          fieldBuilder.buildEdmTypeField(
            'DeliveredMaintenanceAssetsLifecycleStateId',
            'Edm.String',
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceRequestLifecycleModels)
      };
    }

    return this._schema;
  }
}
