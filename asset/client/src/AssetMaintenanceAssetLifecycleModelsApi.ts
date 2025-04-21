/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceAssetLifecycleModels } from './AssetMaintenanceAssetLifecycleModels';
import { AssetMaintenanceAssetLifecycleModelsRequestBuilder } from './AssetMaintenanceAssetLifecycleModelsRequestBuilder';
import { AssetMaintenanceAssetLifecycleModelStatesApi } from './AssetMaintenanceAssetLifecycleModelStatesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceAssetLifecycleModelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceAssetLifecycleModels<DeSerializersT>,
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
  ): AssetMaintenanceAssetLifecycleModelsApi<DeSerializersT> {
    return new AssetMaintenanceAssetLifecycleModelsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetLifecycleModelState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_LIFECYCLE_MODEL_STATE: OneToManyLink<
      AssetMaintenanceAssetLifecycleModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetLifecycleModelStatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AssetMaintenanceAssetLifecycleModelStatesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_ASSET_LIFECYCLE_MODEL_STATE: new OneToManyLink(
        'AssetMaintenanceAssetLifecycleModelState',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceAssetLifecycleModels;

  requestBuilder(): AssetMaintenanceAssetLifecycleModelsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceAssetLifecycleModelsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceAssetLifecycleModels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceAssetLifecycleModels<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceAssetLifecycleModels<DeSerializersT>,
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
    typeof AssetMaintenanceAssetLifecycleModels,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceAssetLifecycleModels,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetLifecycleModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFECYCLE_MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetLifecycleModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IN_STORAGE_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetLifecycleModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetLifecycleModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INBOUND_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetLifecycleModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceAssetLifecycleModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ON_LOAN_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetLifecycleModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVED_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetLifecycleModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTBOUND_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetLifecycleModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetLifecycleModelState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_LIFECYCLE_MODEL_STATE: OneToManyLink<
      AssetMaintenanceAssetLifecycleModels<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetLifecycleModelStatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceAssetLifecycleModels<DeSerializers>>;
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
         * Static representation of the {@link lifecycleModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFECYCLE_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'LifecycleModelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inStorageLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_STORAGE_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'InStorageLifecycleStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activeLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'ActiveLifecycleStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inboundLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'InboundLifecycleStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link onLoanLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_LOAN_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'OnLoanLifecycleStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivedLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVED_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'ReceivedLifecycleStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link outboundLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'OutboundLifecycleStateId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceAssetLifecycleModels)
      };
    }

    return this._schema;
  }
}
