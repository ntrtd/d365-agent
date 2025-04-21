/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceAssetLifecycleStates } from './AssetMaintenanceAssetLifecycleStates';
import { AssetMaintenanceAssetLifecycleStatesRequestBuilder } from './AssetMaintenanceAssetLifecycleStatesRequestBuilder';
import { AssetMaintenanceAssetLifecycleModelStatesApi } from './AssetMaintenanceAssetLifecycleModelStatesApi';
import { AssetMaintenanceAssetsApi } from './AssetMaintenanceAssetsApi';
import { AssetMaintenanceWorkOrderLifecycleStatesApi } from './AssetMaintenanceWorkOrderLifecycleStatesApi';
import { AssetMaintenanceAssetsV2Api } from './AssetMaintenanceAssetsV2Api';
import { AssetMaintenanceAssetsV3Api } from './AssetMaintenanceAssetsV3Api';
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
export class AssetMaintenanceAssetLifecycleStatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceAssetLifecycleStates<DeSerializersT>,
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
  ): AssetMaintenanceAssetLifecycleStatesApi<DeSerializersT> {
    return new AssetMaintenanceAssetLifecycleStatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetLifecycleModelState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_LIFECYCLE_MODEL_STATE: OneToManyLink<
      AssetMaintenanceAssetLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetLifecycleModelStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET: OneToManyLink<
      AssetMaintenanceAssetLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_LIFECYCLE_STATE: OneToManyLink<
      AssetMaintenanceAssetLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetObjectTableEntityLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_OBJECT_TABLE_ENTITY_LIFECYCLE_STATE: OneToManyLink<
      AssetMaintenanceAssetLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetObjectTableV3EntityLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_OBJECT_TABLE_V_3_ENTITY_LIFECYCLE_STATE: OneToManyLink<
      AssetMaintenanceAssetLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceAssetLifecycleModelStatesApi<DeSerializersT>,
      AssetMaintenanceAssetsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderLifecycleStatesApi<DeSerializersT>,
      AssetMaintenanceAssetsV2Api<DeSerializersT>,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_ASSET_LIFECYCLE_MODEL_STATE: new OneToManyLink(
        'AssetMaintenanceAssetLifecycleModelState',
        this,
        linkedApis[0]
      ),
      ASSET_MAINTENANCE_ASSET: new OneToManyLink(
        'AssetMaintenanceAsset',
        this,
        linkedApis[1]
      ),
      ASSET_MAINTENANCE_WORK_ORDER_LIFECYCLE_STATE: new OneToManyLink(
        'AssetMaintenanceWorkOrderLifecycleState',
        this,
        linkedApis[2]
      ),
      ENT_ASSET_OBJECT_TABLE_ENTITY_LIFECYCLE_STATE: new OneToManyLink(
        'EntAssetObjectTableEntity_LifecycleState',
        this,
        linkedApis[3]
      ),
      ENT_ASSET_OBJECT_TABLE_V_3_ENTITY_LIFECYCLE_STATE: new OneToManyLink(
        'EntAssetObjectTableV3Entity_LifecycleState',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceAssetLifecycleStates;

  requestBuilder(): AssetMaintenanceAssetLifecycleStatesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceAssetLifecycleStatesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceAssetLifecycleStates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceAssetLifecycleStates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceAssetLifecycleStates<DeSerializersT>,
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
    typeof AssetMaintenanceAssetLifecycleStates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceAssetLifecycleStates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetLifecycleStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetLifecycleStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceAssetLifecycleStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_ASSET_ACTIVE: EnumField<
      AssetMaintenanceAssetLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELETE_OPEN_CALENDAR_LINES: EnumField<
      AssetMaintenanceAssetLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE: OrderableEdmTypeField<
      AssetMaintenanceAssetLifecycleStates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetLifecycleModelState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_LIFECYCLE_MODEL_STATE: OneToManyLink<
      AssetMaintenanceAssetLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetLifecycleModelStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET: OneToManyLink<
      AssetMaintenanceAssetLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_LIFECYCLE_STATE: OneToManyLink<
      AssetMaintenanceAssetLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetObjectTableEntityLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_OBJECT_TABLE_ENTITY_LIFECYCLE_STATE: OneToManyLink<
      AssetMaintenanceAssetLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetObjectTableV3EntityLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_OBJECT_TABLE_V_3_ENTITY_LIFECYCLE_STATE: OneToManyLink<
      AssetMaintenanceAssetLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceAssetLifecycleStates<DeSerializers>>;
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
         * Static representation of the {@link lifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'LifecycleStateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link maintenanceAssetActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_ACTIVE: fieldBuilder.buildEnumField(
          'MaintenanceAssetActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deleteOpenCalendarLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELETE_OPEN_CALENDAR_LINES: fieldBuilder.buildEnumField(
          'DeleteOpenCalendarLines',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link line} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE: fieldBuilder.buildEdmTypeField('Line', 'Edm.Int32', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceAssetLifecycleStates)
      };
    }

    return this._schema;
  }
}
