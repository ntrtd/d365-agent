/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarehouseNumberSequenceExtensions } from './WarehouseNumberSequenceExtensions';
import { WarehouseNumberSequenceExtensionsRequestBuilder } from './WarehouseNumberSequenceExtensionsRequestBuilder';
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
export class WarehouseNumberSequenceExtensionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WarehouseNumberSequenceExtensions<DeSerializersT>, DeSerializersT>
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
  ): WarehouseNumberSequenceExtensionsApi<DeSerializersT> {
    return new WarehouseNumberSequenceExtensionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WarehouseNumberSequenceExtensions;

  requestBuilder(): WarehouseNumberSequenceExtensionsRequestBuilder<DeSerializersT> {
    return new WarehouseNumberSequenceExtensionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    WarehouseNumberSequenceExtensions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WarehouseNumberSequenceExtensions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WarehouseNumberSequenceExtensions<DeSerializersT>,
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
    typeof WarehouseNumberSequenceExtensions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarehouseNumberSequenceExtensions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NUMBER_SEQUENCE_EXT_ID: OrderableEdmTypeField<
      WarehouseNumberSequenceExtensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      WarehouseNumberSequenceExtensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANNOTATED_FORMAT: OrderableEdmTypeField<
      WarehouseNumberSequenceExtensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMAT: OrderableEdmTypeField<
      WarehouseNumberSequenceExtensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<WarehouseNumberSequenceExtensions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link numberSequenceExtId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_EXT_ID: fieldBuilder.buildEdmTypeField(
          'NumberSequenceExtId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link annotatedFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNOTATED_FORMAT: fieldBuilder.buildEdmTypeField(
          'AnnotatedFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link format} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMAT: fieldBuilder.buildEdmTypeField('Format', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WarehouseNumberSequenceExtensions)
      };
    }

    return this._schema;
  }
}
