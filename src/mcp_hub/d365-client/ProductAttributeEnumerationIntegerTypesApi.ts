/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductAttributeEnumerationIntegerTypes } from './ProductAttributeEnumerationIntegerTypes';
import { ProductAttributeEnumerationIntegerTypesRequestBuilder } from './ProductAttributeEnumerationIntegerTypesRequestBuilder';
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
export class ProductAttributeEnumerationIntegerTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ProductAttributeEnumerationIntegerTypes<DeSerializersT>,
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
  ): ProductAttributeEnumerationIntegerTypesApi<DeSerializersT> {
    return new ProductAttributeEnumerationIntegerTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductAttributeEnumerationIntegerTypes;

  requestBuilder(): ProductAttributeEnumerationIntegerTypesRequestBuilder<DeSerializersT> {
    return new ProductAttributeEnumerationIntegerTypesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductAttributeEnumerationIntegerTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductAttributeEnumerationIntegerTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductAttributeEnumerationIntegerTypes<DeSerializersT>,
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
    typeof ProductAttributeEnumerationIntegerTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductAttributeEnumerationIntegerTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENUMERATION_NAME: OrderableEdmTypeField<
      ProductAttributeEnumerationIntegerTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENUMERATION_NAME_UNIQUE_ID: OrderableEdmTypeField<
      ProductAttributeEnumerationIntegerTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENUMERATION_INTEGER_VALUE: OrderableEdmTypeField<
      ProductAttributeEnumerationIntegerTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      ProductAttributeEnumerationIntegerTypes<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link enumerationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENUMERATION_NAME: fieldBuilder.buildEdmTypeField(
          'EnumerationName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link enumerationNameUniqueId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENUMERATION_NAME_UNIQUE_ID: fieldBuilder.buildEdmTypeField(
          'EnumerationNameUniqueID',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link enumerationIntegerValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENUMERATION_INTEGER_VALUE: fieldBuilder.buildEdmTypeField(
          'EnumerationIntegerValue',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductAttributeEnumerationIntegerTypes)
      };
    }

    return this._schema;
  }
}
