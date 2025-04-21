/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailDesignerTillLayoutButtonGridZones } from './RetailDesignerTillLayoutButtonGridZones';
import { RetailDesignerTillLayoutButtonGridZonesRequestBuilder } from './RetailDesignerTillLayoutButtonGridZonesRequestBuilder';
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
export class RetailDesignerTillLayoutButtonGridZonesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailDesignerTillLayoutButtonGridZones<DeSerializersT>,
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
  ): RetailDesignerTillLayoutButtonGridZonesApi<DeSerializersT> {
    return new RetailDesignerTillLayoutButtonGridZonesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailDesignerTillLayoutButtonGridZones;

  requestBuilder(): RetailDesignerTillLayoutButtonGridZonesRequestBuilder<DeSerializersT> {
    return new RetailDesignerTillLayoutButtonGridZonesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailDesignerTillLayoutButtonGridZones<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailDesignerTillLayoutButtonGridZones<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailDesignerTillLayoutButtonGridZones<DeSerializersT>,
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
    typeof RetailDesignerTillLayoutButtonGridZones,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailDesignerTillLayoutButtonGridZones,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LAYOUT_ID: OrderableEdmTypeField<
      RetailDesignerTillLayoutButtonGridZones<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ZONE: OrderableEdmTypeField<
      RetailDesignerTillLayoutButtonGridZones<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INSTANCE_RELATION_TYPE: OrderableEdmTypeField<
      RetailDesignerTillLayoutButtonGridZones<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BUTTON_GRID_ID: OrderableEdmTypeField<
      RetailDesignerTillLayoutButtonGridZones<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailDesignerTillLayoutButtonGridZones<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link layoutId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_ID: fieldBuilder.buildEdmTypeField(
          'LayoutId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link zone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZONE: fieldBuilder.buildEdmTypeField('Zone', 'Edm.Int64', false),
        /**
         * Static representation of the {@link instanceRelationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTANCE_RELATION_TYPE: fieldBuilder.buildEdmTypeField(
          'InstanceRelationType',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link buttonGridId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUTTON_GRID_ID: fieldBuilder.buildEdmTypeField(
          'ButtonGridId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailDesignerTillLayoutButtonGridZones)
      };
    }

    return this._schema;
  }
}
