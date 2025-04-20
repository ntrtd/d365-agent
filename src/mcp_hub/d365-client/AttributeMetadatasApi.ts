/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AttributeMetadatas } from './AttributeMetadatas';
import { AttributeMetadatasRequestBuilder } from './AttributeMetadatasRequestBuilder';
import { ProductAttributesApi } from './ProductAttributesApi';
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
export class AttributeMetadatasApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AttributeMetadatas<DeSerializersT>, DeSerializersT>
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
  ): AttributeMetadatasApi<DeSerializersT> {
    return new AttributeMetadatasApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ATTRIBUTE: OneToOneLink<
      AttributeMetadatas<DeSerializersT>,
      DeSerializersT,
      ProductAttributesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProductAttributesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_ATTRIBUTE: new OneToOneLink(
        'ProductAttribute',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = AttributeMetadatas;

  requestBuilder(): AttributeMetadatasRequestBuilder<DeSerializersT> {
    return new AttributeMetadatasRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AttributeMetadatas<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AttributeMetadatas<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AttributeMetadatas<DeSerializersT>,
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
    typeof AttributeMetadatas,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AttributeMetadatas,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ATTRIBUTE_NAME: OrderableEdmTypeField<
      AttributeMetadatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE_NAME: OrderableEdmTypeField<
      AttributeMetadatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    XML_METADATA: OrderableEdmTypeField<
      AttributeMetadatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    XML_METADATA_VERSION_NUMBER: OrderableEdmTypeField<
      AttributeMetadatas<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ATTRIBUTE: OneToOneLink<
      AttributeMetadatas<DeSerializersT>,
      DeSerializersT,
      ProductAttributesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AttributeMetadatas<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link attributeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField(
          'AttributeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link typeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'TypeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link xmlMetadata} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        XML_METADATA: fieldBuilder.buildEdmTypeField(
          'XmlMetadata',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link xmlMetadataVersionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        XML_METADATA_VERSION_NUMBER: fieldBuilder.buildEdmTypeField(
          'XmlMetadataVersionNumber',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AttributeMetadatas)
      };
    }

    return this._schema;
  }
}
