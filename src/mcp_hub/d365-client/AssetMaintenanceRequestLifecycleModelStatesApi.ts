/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceRequestLifecycleModelStates } from './AssetMaintenanceRequestLifecycleModelStates';
import { AssetMaintenanceRequestLifecycleModelStatesRequestBuilder } from './AssetMaintenanceRequestLifecycleModelStatesRequestBuilder';
import { AssetMaintenanceRequestLifecycleModelStateNextsV2Api } from './AssetMaintenanceRequestLifecycleModelStateNextsV2Api';
import { AssetMaintenanceRequestLifecycleModelsApi } from './AssetMaintenanceRequestLifecycleModelsApi';
import { AssetMaintenanceRequestLifecycleStatesApi } from './AssetMaintenanceRequestLifecycleStatesApi';
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
export class AssetMaintenanceRequestLifecycleModelStatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceRequestLifecycleModelStates<DeSerializersT>,
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
  ): AssetMaintenanceRequestLifecycleModelStatesApi<DeSerializersT> {
    return new AssetMaintenanceRequestLifecycleModelStatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link nextLifecycleModelStateRequestLifecycleModelStateSequence} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NEXT_LIFECYCLE_MODEL_STATE_REQUEST_LIFECYCLE_MODEL_STATE_SEQUENCE: OneToManyLink<
      AssetMaintenanceRequestLifecycleModelStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleModelStateNextsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link lifecycleModelStateRequestLifecycleModelStateSequence} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIFECYCLE_MODEL_STATE_REQUEST_LIFECYCLE_MODEL_STATE_SEQUENCE: OneToManyLink<
      AssetMaintenanceRequestLifecycleModelStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleModelStateNextsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceRequestLifecycleModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST_LIFECYCLE_MODEL: OneToOneLink<
      AssetMaintenanceRequestLifecycleModelStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceRequestLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST_LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceRequestLifecycleModelStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleStatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceRequestLifecycleModelStateNextsV2Api<DeSerializersT>,
      AssetMaintenanceRequestLifecycleModelStateNextsV2Api<DeSerializersT>,
      AssetMaintenanceRequestLifecycleModelsApi<DeSerializersT>,
      AssetMaintenanceRequestLifecycleStatesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      NEXT_LIFECYCLE_MODEL_STATE_REQUEST_LIFECYCLE_MODEL_STATE_SEQUENCE:
        new OneToManyLink(
          'NextLifecycleModelState_RequestLifecycleModelStateSequence',
          this,
          linkedApis[0]
        ),
      LIFECYCLE_MODEL_STATE_REQUEST_LIFECYCLE_MODEL_STATE_SEQUENCE:
        new OneToManyLink(
          'LifecycleModelState_RequestLifecycleModelStateSequence',
          this,
          linkedApis[1]
        ),
      ASSET_MAINTENANCE_REQUEST_LIFECYCLE_MODEL: new OneToOneLink(
        'AssetMaintenanceRequestLifecycleModel',
        this,
        linkedApis[2]
      ),
      ASSET_MAINTENANCE_REQUEST_LIFECYCLE_STATE: new OneToOneLink(
        'AssetMaintenanceRequestLifecycleState',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceRequestLifecycleModelStates;

  requestBuilder(): AssetMaintenanceRequestLifecycleModelStatesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceRequestLifecycleModelStatesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceRequestLifecycleModelStates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceRequestLifecycleModelStates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceRequestLifecycleModelStates<DeSerializersT>,
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
    typeof AssetMaintenanceRequestLifecycleModelStates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceRequestLifecycleModelStates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestLifecycleModelStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestLifecycleModelStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFECYCLE_MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestLifecycleModelStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE: OrderableEdmTypeField<
      AssetMaintenanceRequestLifecycleModelStates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link nextLifecycleModelStateRequestLifecycleModelStateSequence} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NEXT_LIFECYCLE_MODEL_STATE_REQUEST_LIFECYCLE_MODEL_STATE_SEQUENCE: OneToManyLink<
      AssetMaintenanceRequestLifecycleModelStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleModelStateNextsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link lifecycleModelStateRequestLifecycleModelStateSequence} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIFECYCLE_MODEL_STATE_REQUEST_LIFECYCLE_MODEL_STATE_SEQUENCE: OneToManyLink<
      AssetMaintenanceRequestLifecycleModelStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleModelStateNextsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceRequestLifecycleModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST_LIFECYCLE_MODEL: OneToOneLink<
      AssetMaintenanceRequestLifecycleModelStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceRequestLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST_LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceRequestLifecycleModelStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleStatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceRequestLifecycleModelStates<DeSerializers>
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
         * Static representation of the {@link lifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'LifecycleStateId',
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
         * Static representation of the {@link line} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE: fieldBuilder.buildEdmTypeField('Line', 'Edm.Int32', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AssetMaintenanceRequestLifecycleModelStates
        )
      };
    }

    return this._schema;
  }
}
