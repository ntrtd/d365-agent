/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceRequestLifecycleStates } from './AssetMaintenanceRequestLifecycleStates';
import { AssetMaintenanceRequestLifecycleStatesRequestBuilder } from './AssetMaintenanceRequestLifecycleStatesRequestBuilder';
import { AssetMaintenanceRequestsApi } from './AssetMaintenanceRequestsApi';
import { AssetMaintenanceRequestLifecycleModelsApi } from './AssetMaintenanceRequestLifecycleModelsApi';
import { AssetMaintenanceRequestsV2Api } from './AssetMaintenanceRequestsV2Api';
import { AssetMaintenanceRequestLifecycleModelStatesApi } from './AssetMaintenanceRequestLifecycleModelStatesApi';
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
export class AssetMaintenanceRequestLifecycleStatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceRequestLifecycleStates<DeSerializersT>,
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
  ): AssetMaintenanceRequestLifecycleStatesApi<DeSerializersT> {
    return new AssetMaintenanceRequestLifecycleStatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS: OneToManyLink<
      AssetMaintenanceRequestLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveredAssetMaintenanceRequestLifecycleModels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERED_ASSET_MAINTENANCE_REQUEST_LIFECYCLE_MODELS: OneToManyLink<
      AssetMaintenanceRequestLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link receivedAssetReceivedAssetMaintenanceRequestLifecycleModels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVED_ASSET_RECEIVED_ASSET_MAINTENANCE_REQUEST_LIFECYCLE_MODELS: OneToManyLink<
      AssetMaintenanceRequestLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequestsLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS_LIFECYCLE_STATE: OneToManyLink<
      AssetMaintenanceRequestLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceRequestLifecycleModelState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST_LIFECYCLE_MODEL_STATE: OneToManyLink<
      AssetMaintenanceRequestLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleModelStatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceRequestsApi<DeSerializersT>,
      AssetMaintenanceRequestLifecycleModelsApi<DeSerializersT>,
      AssetMaintenanceRequestLifecycleModelsApi<DeSerializersT>,
      AssetMaintenanceRequestsV2Api<DeSerializersT>,
      AssetMaintenanceRequestLifecycleModelStatesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MAINTENANCE_REQUESTS: new OneToManyLink(
        'MaintenanceRequests',
        this,
        linkedApis[0]
      ),
      DELIVERED_ASSET_MAINTENANCE_REQUEST_LIFECYCLE_MODELS: new OneToManyLink(
        'DeliveredAsset_MaintenanceRequestLifecycleModels',
        this,
        linkedApis[1]
      ),
      RECEIVED_ASSET_RECEIVED_ASSET_MAINTENANCE_REQUEST_LIFECYCLE_MODELS:
        new OneToManyLink(
          'ReceivedAsset_ReceivedAssetMaintenanceRequestLifecycleModels',
          this,
          linkedApis[2]
        ),
      MAINTENANCE_REQUESTS_LIFECYCLE_STATE: new OneToManyLink(
        'MaintenanceRequests_LifecycleState',
        this,
        linkedApis[3]
      ),
      ASSET_MAINTENANCE_REQUEST_LIFECYCLE_MODEL_STATE: new OneToManyLink(
        'AssetMaintenanceRequestLifecycleModelState',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceRequestLifecycleStates;

  requestBuilder(): AssetMaintenanceRequestLifecycleStatesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceRequestLifecycleStatesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceRequestLifecycleStates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceRequestLifecycleStates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceRequestLifecycleStates<DeSerializersT>,
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
    typeof AssetMaintenanceRequestLifecycleStates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceRequestLifecycleStates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestLifecycleStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestLifecycleStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_SET_ACTUAL_END: EnumField<
      AssetMaintenanceRequestLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELETE_OPEN_MAINTENANCE_ASSET_CALENDAR: EnumField<
      AssetMaintenanceRequestLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUEST_ACTIVE: EnumField<
      AssetMaintenanceRequestLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SET_INBOUND_MAINTENANCE_ASSET_LIFECYCLE_STATE: EnumField<
      AssetMaintenanceRequestLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_DELETE: EnumField<
      AssetMaintenanceRequestLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SET_OUTBOUND_MAINTENANCE_ASSET_LIFECYCLE_STATE: EnumField<
      AssetMaintenanceRequestLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceRequestLifecycleStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_CREATE_WORK_ORDER: EnumField<
      AssetMaintenanceRequestLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS: OneToManyLink<
      AssetMaintenanceRequestLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveredAssetMaintenanceRequestLifecycleModels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERED_ASSET_MAINTENANCE_REQUEST_LIFECYCLE_MODELS: OneToManyLink<
      AssetMaintenanceRequestLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link receivedAssetReceivedAssetMaintenanceRequestLifecycleModels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVED_ASSET_RECEIVED_ASSET_MAINTENANCE_REQUEST_LIFECYCLE_MODELS: OneToManyLink<
      AssetMaintenanceRequestLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequestsLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS_LIFECYCLE_STATE: OneToManyLink<
      AssetMaintenanceRequestLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceRequestLifecycleModelState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST_LIFECYCLE_MODEL_STATE: OneToManyLink<
      AssetMaintenanceRequestLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleModelStatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceRequestLifecycleStates<DeSerializers>
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
         * Static representation of the {@link requestLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'RequestLifecycleStateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link requestSetActualEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_SET_ACTUAL_END: fieldBuilder.buildEnumField(
          'RequestSetActualEnd',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deleteOpenMaintenanceAssetCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELETE_OPEN_MAINTENANCE_ASSET_CALENDAR: fieldBuilder.buildEnumField(
          'DeleteOpenMaintenanceAssetCalendar',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link requestActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ACTIVE: fieldBuilder.buildEnumField(
          'RequestActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link setInboundMaintenanceAssetLifecycleState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SET_INBOUND_MAINTENANCE_ASSET_LIFECYCLE_STATE:
          fieldBuilder.buildEnumField(
            'SetInboundMaintenanceAssetLifecycleState',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link allowDelete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_DELETE: fieldBuilder.buildEnumField('AllowDelete', NoYes, true),
        /**
         * Static representation of the {@link setOutboundMaintenanceAssetLifecycleState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SET_OUTBOUND_MAINTENANCE_ASSET_LIFECYCLE_STATE:
          fieldBuilder.buildEnumField(
            'SetOutboundMaintenanceAssetLifecycleState',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link allowCreateWorkOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CREATE_WORK_ORDER: fieldBuilder.buildEnumField(
          'AllowCreateWorkOrder',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceRequestLifecycleStates)
      };
    }

    return this._schema;
  }
}
