/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringProductAttributes } from './EngineeringProductAttributes';
import { EngineeringProductAttributesRequestBuilder } from './EngineeringProductAttributesRequestBuilder';
import { EngineeringProductAttributeTranslationsApi } from './EngineeringProductAttributeTranslationsApi';
import { NoYes } from './NoYes';
import { PdsBatchAttribToleranceAction } from './PdsBatchAttribToleranceAction';
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
export class EngineeringProductAttributesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EngineeringProductAttributes<DeSerializersT>, DeSerializersT>
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
  ): EngineeringProductAttributesApi<DeSerializersT> {
    return new EngineeringProductAttributesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link engineeringProductAttributeTranslations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_ATTRIBUTE_TRANSLATIONS: OneToManyLink<
      EngineeringProductAttributes<DeSerializersT>,
      DeSerializersT,
      EngineeringProductAttributeTranslationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [EngineeringProductAttributeTranslationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_PRODUCT_ATTRIBUTE_TRANSLATIONS: new OneToManyLink(
        'EngineeringProductAttributeTranslations',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = EngineeringProductAttributes;

  requestBuilder(): EngineeringProductAttributesRequestBuilder<DeSerializersT> {
    return new EngineeringProductAttributesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EngineeringProductAttributes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringProductAttributes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringProductAttributes<DeSerializersT>,
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
    typeof EngineeringProductAttributes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringProductAttributes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ATTRIBUTE_NAME: OrderableEdmTypeField<
      EngineeringProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFAULT_MINIMUM_DECIMAL_TOLERANCE: OrderableEdmTypeField<
      EngineeringProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_CURRENCY_CODE: OrderableEdmTypeField<
      EngineeringProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DECIMAL_TOLERANCE_INCREMENT: OrderableEdmTypeField<
      EngineeringProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_MINIMUM_INTEGER_TOLERANCE: OrderableEdmTypeField<
      EngineeringProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_INTEGER_TOLERANCE_INCREMENT: OrderableEdmTypeField<
      EngineeringProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_MAXIMUM_DECIMAL_TOLERANCE: OrderableEdmTypeField<
      EngineeringProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_BOOLEAN_VALUE: EnumField<
      EngineeringProductAttributes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_CURRENCY_VALUE: OrderableEdmTypeField<
      EngineeringProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ATTRIBUTE_HELP_TEXT: OrderableEdmTypeField<
      EngineeringProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_DESCRIPTION: OrderableEdmTypeField<
      EngineeringProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DECIMAL_VALUE: OrderableEdmTypeField<
      EngineeringProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_MAXIMUM_INTEGER_TOLERANCE: OrderableEdmTypeField<
      EngineeringProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_INTEGER_VALUE: OrderableEdmTypeField<
      EngineeringProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TOLERANCE_FAILING_ACTION: EnumField<
      EngineeringProductAttributes<DeSerializers>,
      DeSerializersT,
      PdsBatchAttribToleranceAction,
      true,
      true
    >;
    FRIENDLY_ATTRIBUTE_NAME: OrderableEdmTypeField<
      EngineeringProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_ATTRIBUTE_TYPE_NAME: OrderableEdmTypeField<
      EngineeringProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_TEXT_VALUE: OrderableEdmTypeField<
      EngineeringProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DATE_TIME_VALUE: OrderableEdmTypeField<
      EngineeringProductAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringProductAttributeTranslations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_ATTRIBUTE_TRANSLATIONS: OneToManyLink<
      EngineeringProductAttributes<DeSerializersT>,
      DeSerializersT,
      EngineeringProductAttributeTranslationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EngineeringProductAttributes<DeSerializers>>;
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
         * Static representation of the {@link defaultMinimumDecimalTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_MINIMUM_DECIMAL_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'DefaultMinimumDecimalTolerance',
          'Edm.Decimal',
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
         * Static representation of the {@link defaultDecimalToleranceIncrement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DECIMAL_TOLERANCE_INCREMENT: fieldBuilder.buildEdmTypeField(
          'DefaultDecimalToleranceIncrement',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultMinimumIntegerTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_MINIMUM_INTEGER_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'DefaultMinimumIntegerTolerance',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link defaultIntegerToleranceIncrement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_INTEGER_TOLERANCE_INCREMENT: fieldBuilder.buildEdmTypeField(
          'DefaultIntegerToleranceIncrement',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link defaultMaximumDecimalTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_MAXIMUM_DECIMAL_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'DefaultMaximumDecimalTolerance',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link defaultMaximumIntegerTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_MAXIMUM_INTEGER_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'DefaultMaximumIntegerTolerance',
          'Edm.Int32',
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
         * Static representation of the {@link toleranceFailingAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOLERANCE_FAILING_ACTION: fieldBuilder.buildEnumField(
          'ToleranceFailingAction',
          PdsBatchAttribToleranceAction,
          true
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
         * Static representation of the {@link productAttributeTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ATTRIBUTE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'ProductAttributeTypeName',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EngineeringProductAttributes)
      };
    }

    return this._schema;
  }
}
