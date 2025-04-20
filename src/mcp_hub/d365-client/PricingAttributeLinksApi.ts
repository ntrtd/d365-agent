/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PricingAttributeLinks } from './PricingAttributeLinks';
import { PricingAttributeLinksRequestBuilder } from './PricingAttributeLinksRequestBuilder';
import { PricingAttributeGroupsApi } from './PricingAttributeGroupsApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PricingAttributeLinksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PricingAttributeLinks<DeSerializersT>, DeSerializersT>
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
  ): PricingAttributeLinksApi<DeSerializersT> {
    return new PricingAttributeLinksApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link gupPricingAttributeGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GUP_PRICING_ATTRIBUTE_GROUP: OneToOneLink<
      PricingAttributeLinks<DeSerializersT>,
      DeSerializersT,
      PricingAttributeGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PricingAttributeGroupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      GUP_PRICING_ATTRIBUTE_GROUP: new OneToOneLink(
        'GUPPricingAttributeGroup',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PricingAttributeLinks;

  requestBuilder(): PricingAttributeLinksRequestBuilder<DeSerializersT> {
    return new PricingAttributeLinksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PricingAttributeLinks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PricingAttributeLinks<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PricingAttributeLinks<DeSerializersT>,
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
    typeof PricingAttributeLinks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PricingAttributeLinks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRICING_ATTRIBUTE_GROUP: OrderableEdmTypeField<
      PricingAttributeLinks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_NAME: OrderableEdmTypeField<
      PricingAttributeLinks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE_NAME: OrderableEdmTypeField<
      PricingAttributeLinks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_NAME: OrderableEdmTypeField<
      PricingAttributeLinks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIELD_NAME: OrderableEdmTypeField<
      PricingAttributeLinks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_SOURCE_TYPE: EnumField<
      PricingAttributeLinks<DeSerializers>,
      DeSerializersT,
      GupPricingAttributeSourceType,
      true,
      true
    >;
    SOURCE: EnumField<
      PricingAttributeLinks<DeSerializers>,
      DeSerializersT,
      GupPricingAttributeSource,
      true,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      PricingAttributeLinks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TABLE_NAME: OrderableEdmTypeField<
      PricingAttributeLinks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link gupPricingAttributeGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GUP_PRICING_ATTRIBUTE_GROUP: OneToOneLink<
      PricingAttributeLinks<DeSerializersT>,
      DeSerializersT,
      PricingAttributeGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PricingAttributeLinks<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', PricingAttributeLinks)
      };
    }

    return this._schema;
  }
}
