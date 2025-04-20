/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceWorkOrderLifecycleModelStates } from './AssetMaintenanceWorkOrderLifecycleModelStates';
import { AssetMaintenanceWorkOrderLifecycleModelStatesRequestBuilder } from './AssetMaintenanceWorkOrderLifecycleModelStatesRequestBuilder';
import { AssetMaintenanceWorkOrderLifecycleModelsApi } from './AssetMaintenanceWorkOrderLifecycleModelsApi';
import { AssetMaintenanceWorkOrderLifecycleStatesApi } from './AssetMaintenanceWorkOrderLifecycleStatesApi';
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
export class AssetMaintenanceWorkOrderLifecycleModelStatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceWorkOrderLifecycleModelStates<DeSerializersT>,
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
  ): AssetMaintenanceWorkOrderLifecycleModelStatesApi<DeSerializersT> {
    return new AssetMaintenanceWorkOrderLifecycleModelStatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceWorkOrderLifecycleModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_LIFECYCLE_MODEL: OneToOneLink<
      AssetMaintenanceWorkOrderLifecycleModelStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLifecycleModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceWorkOrderLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceWorkOrderLifecycleModelStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLifecycleStatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceWorkOrderLifecycleModelsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderLifecycleStatesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_WORK_ORDER_LIFECYCLE_MODEL: new OneToOneLink(
        'AssetMaintenanceWorkOrderLifecycleModel',
        this,
        linkedApis[0]
      ),
      ASSET_MAINTENANCE_WORK_ORDER_LIFECYCLE_STATE: new OneToOneLink(
        'AssetMaintenanceWorkOrderLifecycleState',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceWorkOrderLifecycleModelStates;

  requestBuilder(): AssetMaintenanceWorkOrderLifecycleModelStatesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceWorkOrderLifecycleModelStatesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceWorkOrderLifecycleModelStates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceWorkOrderLifecycleModelStates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceWorkOrderLifecycleModelStates<DeSerializersT>,
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
    typeof AssetMaintenanceWorkOrderLifecycleModelStates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceWorkOrderLifecycleModelStates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLifecycleModelStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFECYCLE_MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLifecycleModelStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLifecycleModelStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLifecycleModelStates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceWorkOrderLifecycleModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_LIFECYCLE_MODEL: OneToOneLink<
      AssetMaintenanceWorkOrderLifecycleModelStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLifecycleModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceWorkOrderLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceWorkOrderLifecycleModelStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLifecycleStatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceWorkOrderLifecycleModelStates<DeSerializers>
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
         * Static representation of the {@link lifecycleModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFECYCLE_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'LifecycleModelId',
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
          AssetMaintenanceWorkOrderLifecycleModelStates
        )
      };
    }

    return this._schema;
  }
}
