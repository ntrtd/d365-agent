/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TmpBulkProductAttributeValues } from './TmpBulkProductAttributeValues';
import { TmpBulkProductAttributeValuesRequestBuilder } from './TmpBulkProductAttributeValuesRequestBuilder';
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
export class TmpBulkProductAttributeValuesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TmpBulkProductAttributeValues<DeSerializersT>, DeSerializersT>
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
  ): TmpBulkProductAttributeValuesApi<DeSerializersT> {
    return new TmpBulkProductAttributeValuesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TmpBulkProductAttributeValues;

  requestBuilder(): TmpBulkProductAttributeValuesRequestBuilder<DeSerializersT> {
    return new TmpBulkProductAttributeValuesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TmpBulkProductAttributeValues<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TmpBulkProductAttributeValues<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TmpBulkProductAttributeValues<DeSerializersT>,
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
    typeof TmpBulkProductAttributeValues,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TmpBulkProductAttributeValues,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CATALOG_NUMBER: OrderableEdmTypeField<
      TmpBulkProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_NAME: OrderableEdmTypeField<
      TmpBulkProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_TYPE_NAME: OrderableEdmTypeField<
      TmpBulkProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPLAY_PRODUCT_NUMBER: OrderableEdmTypeField<
      TmpBulkProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTERNAL_ORG_NUMBER: OrderableEdmTypeField<
      TmpBulkProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      TmpBulkProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_AS_TEXT: OrderableEdmTypeField<
      TmpBulkProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_SOURCE_NAME: OrderableEdmTypeField<
      TmpBulkProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIRED_AS_LABEL: OrderableEdmTypeField<
      TmpBulkProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      TmpBulkProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_SOURCE_TYPE_AS_LABEL: OrderableEdmTypeField<
      TmpBulkProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_PROPERTY: OrderableEdmTypeField<
      TmpBulkProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATALOG_NAME: OrderableEdmTypeField<
      TmpBulkProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_TYPE_AS_LABEL: OrderableEdmTypeField<
      TmpBulkProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TmpBulkProductAttributeValues<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link catalogNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG_NUMBER: fieldBuilder.buildEdmTypeField(
          'CatalogNumber',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link attributeTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'AttributeTypeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link displayProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DisplayProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link internalOrgNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_ORG_NUMBER: fieldBuilder.buildEdmTypeField(
          'InternalOrgNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueAsText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_AS_TEXT: fieldBuilder.buildEdmTypeField(
          'ValueAsText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attributeSourceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_SOURCE_NAME: fieldBuilder.buildEdmTypeField(
          'AttributeSourceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requiredAsLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_AS_LABEL: fieldBuilder.buildEdmTypeField(
          'RequiredAsLabel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NAME: fieldBuilder.buildEdmTypeField(
          'ProductName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attributeSourceTypeAsLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_SOURCE_TYPE_AS_LABEL: fieldBuilder.buildEdmTypeField(
          'AttributeSourceTypeAsLabel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attributeProperty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_PROPERTY: fieldBuilder.buildEdmTypeField(
          'AttributeProperty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link catalogName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG_NAME: fieldBuilder.buildEdmTypeField(
          'CatalogName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataTypeAsLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_TYPE_AS_LABEL: fieldBuilder.buildEdmTypeField(
          'DataTypeAsLabel',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TmpBulkProductAttributeValues)
      };
    }

    return this._schema;
  }
}
