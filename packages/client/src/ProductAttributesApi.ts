/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductAttributes } from './ProductAttributes';
import { ProductAttributesRequestBuilder } from './ProductAttributesRequestBuilder';
import { EngineeringChangeOrderProductAttributesApi } from './EngineeringChangeOrderProductAttributesApi';
import { ReleasedEngineeringProductVersionAttributeValuesApi } from './ReleasedEngineeringProductVersionAttributeValuesApi';
import { ProductAttributeTranslationsApi } from './ProductAttributeTranslationsApi';
import { ReleasedEngineeringProductVersionAttributesApi } from './ReleasedEngineeringProductVersionAttributesApi';
import { AttributeMetadatasApi } from './AttributeMetadatasApi';
import { NoYes } from './NoYes';
import { AttributeDataType } from './AttributeDataType';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductAttributesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductAttributes<DeSerializersT>, DeSerializersT>
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
  ): ProductAttributesApi<DeSerializersT> {
    return new ProductAttributesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductAttributes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ATTRIBUTES: OneToManyLink<
      ProductAttributes<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedEngineeringProductVersionAttributeValues} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_ENGINEERING_PRODUCT_VERSION_ATTRIBUTE_VALUES: OneToManyLink<
      ProductAttributes<DeSerializersT>,
      DeSerializersT,
      ReleasedEngineeringProductVersionAttributeValuesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productAttributeTranslations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ATTRIBUTE_TRANSLATIONS: OneToManyLink<
      ProductAttributes<DeSerializersT>,
      DeSerializersT,
      ProductAttributeTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedEngineeringProductVersionAttributes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_ENGINEERING_PRODUCT_VERSION_ATTRIBUTES: OneToManyLink<
      ProductAttributes<DeSerializersT>,
      DeSerializersT,
      ReleasedEngineeringProductVersionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link attributeMetadata} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTRIBUTE_METADATA: OneToManyLink<
      ProductAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeMetadatasApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeOrderProductAttributesApi<DeSerializersT>,
      ReleasedEngineeringProductVersionAttributeValuesApi<DeSerializersT>,
      ProductAttributeTranslationsApi<DeSerializersT>,
      ReleasedEngineeringProductVersionAttributesApi<DeSerializersT>,
      AttributeMetadatasApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_PRODUCT_ATTRIBUTES: new OneToManyLink(
        'EngineeringChangeOrderProductAttributes',
        this,
        linkedApis[0]
      ),
      RELEASED_ENGINEERING_PRODUCT_VERSION_ATTRIBUTE_VALUES: new OneToManyLink(
        'ReleasedEngineeringProductVersionAttributeValues',
        this,
        linkedApis[1]
      ),
      PRODUCT_ATTRIBUTE_TRANSLATIONS: new OneToManyLink(
        'ProductAttributeTranslations',
        this,
        linkedApis[2]
      ),
      RELEASED_ENGINEERING_PRODUCT_VERSION_ATTRIBUTES: new OneToManyLink(
        'ReleasedEngineeringProductVersionAttributes',
        this,
        linkedApis[3]
      ),
      ATTRIBUTE_METADATA: new OneToManyLink(
        'AttributeMetadata',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = ProductAttributes;

  requestBuilder(): ProductAttributesRequestBuilder<DeSerializersT> {
    return new ProductAttributesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductAttributes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductAttributes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductAttributes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ProductAttributes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductAttributes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_ATTRIBUTE_TYPE_NAME: OrderableEdmTypeField<
      ProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_NAME: OrderableEdmTypeField<
      ProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFAULT_CURRENCY_CODE: OrderableEdmTypeField<
      ProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_BOOLEAN_VALUE: EnumField<
      ProductAttributes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_CURRENCY_VALUE: OrderableEdmTypeField<
      ProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ATTRIBUTE_HELP_TEXT: OrderableEdmTypeField<
      ProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_DESCRIPTION: OrderableEdmTypeField<
      ProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DECIMAL_VALUE: OrderableEdmTypeField<
      ProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_INTEGER_VALUE: OrderableEdmTypeField<
      ProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FRIENDLY_ATTRIBUTE_NAME: OrderableEdmTypeField<
      ProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_TEXT_VALUE: OrderableEdmTypeField<
      ProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DATE_TIME_VALUE: OrderableEdmTypeField<
      ProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DATA_TYPE: EnumField<
      ProductAttributes<DeSerializers>,
      DeSerializersT,
      AttributeDataType,
      true,
      true
    >;
    IS_ENABLED_AS_PRICING_ATTRIBUTE: EnumField<
      ProductAttributes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductAttributes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ATTRIBUTES: OneToManyLink<
      ProductAttributes<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedEngineeringProductVersionAttributeValues} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_ENGINEERING_PRODUCT_VERSION_ATTRIBUTE_VALUES: OneToManyLink<
      ProductAttributes<DeSerializersT>,
      DeSerializersT,
      ReleasedEngineeringProductVersionAttributeValuesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productAttributeTranslations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ATTRIBUTE_TRANSLATIONS: OneToManyLink<
      ProductAttributes<DeSerializersT>,
      DeSerializersT,
      ProductAttributeTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedEngineeringProductVersionAttributes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_ENGINEERING_PRODUCT_VERSION_ATTRIBUTES: OneToManyLink<
      ProductAttributes<DeSerializersT>,
      DeSerializersT,
      ReleasedEngineeringProductVersionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link attributeMetadata} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTRIBUTE_METADATA: OneToManyLink<
      ProductAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeMetadatasApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductAttributes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productAttributeTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ATTRIBUTE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'ProductAttributeTypeName',
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
         * Static representation of the {@link defaultCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'DefaultCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultBooleanValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_BOOLEAN_VALUE: fieldBuilder.buildEnumField(
          'DefaultBooleanValue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultCurrencyValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CURRENCY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultCurrencyValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link attributeHelpText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_HELP_TEXT: fieldBuilder.buildEdmTypeField(
          'AttributeHelpText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attributeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AttributeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultDecimalValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DECIMAL_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDecimalValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultIntegerValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_INTEGER_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultIntegerValue',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link friendlyAttributeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRIENDLY_ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField(
          'FriendlyAttributeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultTextValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_TEXT_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultTextValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultDateTimeValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DATE_TIME_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDateTimeValue',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dataType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_TYPE: fieldBuilder.buildEnumField(
          'DataType',
          AttributeDataType,
          true
        ),
        /**
         * Static representation of the {@link isEnabledAsPricingAttribute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ENABLED_AS_PRICING_ATTRIBUTE: fieldBuilder.buildEnumField(
          'IsEnabledAsPricingAttribute',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductAttributes)
      };
    }

    return this._schema;
  }
}
