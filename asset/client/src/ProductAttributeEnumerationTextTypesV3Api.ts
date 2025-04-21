/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductAttributeEnumerationTextTypesV3 } from './ProductAttributeEnumerationTextTypesV3';
import { ProductAttributeEnumerationTextTypesV3RequestBuilder } from './ProductAttributeEnumerationTextTypesV3RequestBuilder';
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
export class ProductAttributeEnumerationTextTypesV3Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ProductAttributeEnumerationTextTypesV3<DeSerializersT>,
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
  ): ProductAttributeEnumerationTextTypesV3Api<DeSerializersT> {
    return new ProductAttributeEnumerationTextTypesV3Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductAttributeEnumerationTextTypesV3;

  requestBuilder(): ProductAttributeEnumerationTextTypesV3RequestBuilder<DeSerializersT> {
    return new ProductAttributeEnumerationTextTypesV3RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductAttributeEnumerationTextTypesV3<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductAttributeEnumerationTextTypesV3<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductAttributeEnumerationTextTypesV3<DeSerializersT>,
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
    typeof ProductAttributeEnumerationTextTypesV3,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductAttributeEnumerationTextTypesV3,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENUMERATION_NAME: OrderableEdmTypeField<
      ProductAttributeEnumerationTextTypesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENUMERATION_NAME_UNIQUE_ID: OrderableEdmTypeField<
      ProductAttributeEnumerationTextTypesV3<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENUMERATION_VALUE: OrderableEdmTypeField<
      ProductAttributeEnumerationTextTypesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      ProductAttributeEnumerationTextTypesV3<DeSerializers>
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
         * Static representation of the {@link enumerationValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENUMERATION_VALUE: fieldBuilder.buildEdmTypeField(
          'EnumerationValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductAttributeEnumerationTextTypesV3)
      };
    }

    return this._schema;
  }
}
