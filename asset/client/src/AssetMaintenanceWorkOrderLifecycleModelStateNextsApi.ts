/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceWorkOrderLifecycleModelStateNexts } from './AssetMaintenanceWorkOrderLifecycleModelStateNexts';
import { AssetMaintenanceWorkOrderLifecycleModelStateNextsRequestBuilder } from './AssetMaintenanceWorkOrderLifecycleModelStateNextsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceWorkOrderLifecycleModelStateNextsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceWorkOrderLifecycleModelStateNexts<DeSerializersT>,
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
  ): AssetMaintenanceWorkOrderLifecycleModelStateNextsApi<DeSerializersT> {
    return new AssetMaintenanceWorkOrderLifecycleModelStateNextsApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetMaintenanceWorkOrderLifecycleModelStateNexts;

  requestBuilder(): AssetMaintenanceWorkOrderLifecycleModelStateNextsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceWorkOrderLifecycleModelStateNextsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceWorkOrderLifecycleModelStateNexts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceWorkOrderLifecycleModelStateNexts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceWorkOrderLifecycleModelStateNexts<DeSerializersT>,
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
    typeof AssetMaintenanceWorkOrderLifecycleModelStateNexts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceWorkOrderLifecycleModelStateNexts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLifecycleModelStateNexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFECYCLE_MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLifecycleModelStateNexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLifecycleModelStateNexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NEXT_LIFECYCLE_MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLifecycleModelStateNexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NEXT_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLifecycleModelStateNexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFECYCLE_STATE_LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLifecycleModelStateNexts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NEXT_LIFECYCLE_STATE_LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLifecycleModelStateNexts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceWorkOrderLifecycleModelStateNexts<DeSerializers>
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
         * Static representation of the {@link nextLifecycleModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_LIFECYCLE_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'NextLifecycleModelId',
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
         * Static representation of the {@link lifecycleStateLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFECYCLE_STATE_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LifecycleStateLineNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link nextLifecycleStateLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_LIFECYCLE_STATE_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'NextLifecycleStateLineNumber',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AssetMaintenanceWorkOrderLifecycleModelStateNexts
        )
      };
    }

    return this._schema;
  }
}
