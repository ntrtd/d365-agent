/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerPricingAttributeLinks } from './CustomerPricingAttributeLinks';
import { CustomerPricingAttributeLinksRequestBuilder } from './CustomerPricingAttributeLinksRequestBuilder';
import { GupPricingAttributeSourceType } from './GupPricingAttributeSourceType';
import { GupPricingAttributeSource } from './GupPricingAttributeSource';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class CustomerPricingAttributeLinksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CustomerPricingAttributeLinks<DeSerializersT>, DeSerializersT>
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
  ): CustomerPricingAttributeLinksApi<DeSerializersT> {
    return new CustomerPricingAttributeLinksApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustomerPricingAttributeLinks;

  requestBuilder(): CustomerPricingAttributeLinksRequestBuilder<DeSerializersT> {
    return new CustomerPricingAttributeLinksRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CustomerPricingAttributeLinks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomerPricingAttributeLinks<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerPricingAttributeLinks<DeSerializersT>,
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
    typeof CustomerPricingAttributeLinks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerPricingAttributeLinks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRICING_ATTRIBUTE_GROUP: OrderableEdmTypeField<
      CustomerPricingAttributeLinks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_NAME: OrderableEdmTypeField<
      CustomerPricingAttributeLinks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE_NAME: OrderableEdmTypeField<
      CustomerPricingAttributeLinks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_NAME: OrderableEdmTypeField<
      CustomerPricingAttributeLinks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIELD_NAME: OrderableEdmTypeField<
      CustomerPricingAttributeLinks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFAULT_VALUE: OrderableEdmTypeField<
      CustomerPricingAttributeLinks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_SOURCE_TYPE: EnumField<
      CustomerPricingAttributeLinks<DeSerializers>,
      DeSerializersT,
      GupPricingAttributeSourceType,
      true,
      true
    >;
    SOURCE: EnumField<
      CustomerPricingAttributeLinks<DeSerializers>,
      DeSerializersT,
      GupPricingAttributeSource,
      true,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      CustomerPricingAttributeLinks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TABLE_NAME: OrderableEdmTypeField<
      CustomerPricingAttributeLinks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustomerPricingAttributeLinks<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link pricingAttributeGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_ATTRIBUTE_GROUP: fieldBuilder.buildEdmTypeField(
          'PricingAttributeGroup',
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
         * Static representation of the {@link typeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'TypeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_NAME: fieldBuilder.buildEdmTypeField(
          'SourceName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'FieldName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link defaultValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attributeSourceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_SOURCE_TYPE: fieldBuilder.buildEnumField(
          'AttributeSourceType',
          GupPricingAttributeSourceType,
          true
        ),
        /**
         * Static representation of the {@link source} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE: fieldBuilder.buildEnumField(
          'Source',
          GupPricingAttributeSource,
          true
        ),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'Priority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link tableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'TableName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerPricingAttributeLinks)
      };
    }

    return this._schema;
  }
}
