/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductAttributeEnumerationTextTypes } from './ProductAttributeEnumerationTextTypes';
import { ProductAttributeEnumerationTextTypesRequestBuilder } from './ProductAttributeEnumerationTextTypesRequestBuilder';
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
export class ProductAttributeEnumerationTextTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ProductAttributeEnumerationTextTypes<DeSerializersT>,
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
  ): ProductAttributeEnumerationTextTypesApi<DeSerializersT> {
    return new ProductAttributeEnumerationTextTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductAttributeEnumerationTextTypes;

  requestBuilder(): ProductAttributeEnumerationTextTypesRequestBuilder<DeSerializersT> {
    return new ProductAttributeEnumerationTextTypesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductAttributeEnumerationTextTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductAttributeEnumerationTextTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductAttributeEnumerationTextTypes<DeSerializersT>,
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
    typeof ProductAttributeEnumerationTextTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductAttributeEnumerationTextTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENUMERATION_NAME: OrderableEdmTypeField<
      ProductAttributeEnumerationTextTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENUMERATION_NAME_UNIQUE_ID: OrderableEdmTypeField<
      ProductAttributeEnumerationTextTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENUMERATION_VALUE: OrderableEdmTypeField<
      ProductAttributeEnumerationTextTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ProductAttributeEnumerationTextTypes<DeSerializers>>;
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
         * Static representation of the {@link enumerationValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENUMERATION_VALUE: fieldBuilder.buildEdmTypeField(
          'EnumerationValue',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductAttributeEnumerationTextTypes)
      };
    }

    return this._schema;
  }
}
