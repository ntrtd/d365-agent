/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceRequestLifecycleModelStateNextsV2 } from './AssetMaintenanceRequestLifecycleModelStateNextsV2';
import { AssetMaintenanceRequestLifecycleModelStateNextsV2RequestBuilder } from './AssetMaintenanceRequestLifecycleModelStateNextsV2RequestBuilder';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceRequestLifecycleModelStateNextsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceRequestLifecycleModelStateNextsV2<DeSerializersT>,
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
  ): AssetMaintenanceRequestLifecycleModelStateNextsV2Api<DeSerializersT> {
    return new AssetMaintenanceRequestLifecycleModelStateNextsV2Api(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link nextRequestLifecycleModelState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NEXT_REQUEST_LIFECYCLE_MODEL_STATE: OneToOneLink<
      AssetMaintenanceRequestLifecycleModelStateNextsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleModelStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currentRequestLifecycleModelState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENT_REQUEST_LIFECYCLE_MODEL_STATE: OneToOneLink<
      AssetMaintenanceRequestLifecycleModelStateNextsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleModelStatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceRequestLifecycleModelStatesApi<DeSerializersT>,
      AssetMaintenanceRequestLifecycleModelStatesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      NEXT_REQUEST_LIFECYCLE_MODEL_STATE: new OneToOneLink(
        'NextRequestLifecycleModelState',
        this,
        linkedApis[0]
      ),
      CURRENT_REQUEST_LIFECYCLE_MODEL_STATE: new OneToOneLink(
        'CurrentRequestLifecycleModelState',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceRequestLifecycleModelStateNextsV2;

  requestBuilder(): AssetMaintenanceRequestLifecycleModelStateNextsV2RequestBuilder<DeSerializersT> {
    return new AssetMaintenanceRequestLifecycleModelStateNextsV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceRequestLifecycleModelStateNextsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceRequestLifecycleModelStateNextsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceRequestLifecycleModelStateNextsV2<DeSerializersT>,
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
    typeof AssetMaintenanceRequestLifecycleModelStateNextsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceRequestLifecycleModelStateNextsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestLifecycleModelStateNextsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestLifecycleModelStateNextsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFECYCLE_MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestLifecycleModelStateNextsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NEXT_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestLifecycleModelStateNextsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NEXT_LIFECYCLE_MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestLifecycleModelStateNextsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link nextRequestLifecycleModelState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NEXT_REQUEST_LIFECYCLE_MODEL_STATE: OneToOneLink<
      AssetMaintenanceRequestLifecycleModelStateNextsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleModelStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currentRequestLifecycleModelState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENT_REQUEST_LIFECYCLE_MODEL_STATE: OneToOneLink<
      AssetMaintenanceRequestLifecycleModelStateNextsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleModelStatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceRequestLifecycleModelStateNextsV2<DeSerializers>
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
         * Static representation of the {@link nextLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'NextLifecycleStateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link nextLifecycleModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_LIFECYCLE_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'NextLifecycleModelId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AssetMaintenanceRequestLifecycleModelStateNextsV2
        )
      };
    }

    return this._schema;
  }
}
