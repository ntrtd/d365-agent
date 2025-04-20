/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringProductCategoryAttributeDetailsValues } from './EngineeringProductCategoryAttributeDetailsValues';
import { EngineeringProductCategoryAttributeDetailsValuesRequestBuilder } from './EngineeringProductCategoryAttributeDetailsValuesRequestBuilder';
import { EngineeringProductCategoryAttributeDetailsApi } from './EngineeringProductCategoryAttributeDetailsApi';
import { NoYes } from './NoYes';
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
export class EngineeringProductCategoryAttributeDetailsValuesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringProductCategoryAttributeDetailsValues<DeSerializersT>,
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
  ): EngineeringProductCategoryAttributeDetailsValuesApi<DeSerializersT> {
    return new EngineeringProductCategoryAttributeDetailsValuesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link engineeringProductCategoryAttributeDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_CATEGORY_ATTRIBUTE_DETAILS: OneToOneLink<
      EngineeringProductCategoryAttributeDetailsValues<DeSerializersT>,
      DeSerializersT,
      EngineeringProductCategoryAttributeDetailsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [EngineeringProductCategoryAttributeDetailsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_PRODUCT_CATEGORY_ATTRIBUTE_DETAILS: new OneToOneLink(
        'EngineeringProductCategoryAttributeDetails',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = EngineeringProductCategoryAttributeDetailsValues;

  requestBuilder(): EngineeringProductCategoryAttributeDetailsValuesRequestBuilder<DeSerializersT> {
    return new EngineeringProductCategoryAttributeDetailsValuesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringProductCategoryAttributeDetailsValues<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringProductCategoryAttributeDetailsValues<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringProductCategoryAttributeDetailsValues<DeSerializersT>,
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
    typeof EngineeringProductCategoryAttributeDetailsValues,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringProductCategoryAttributeDetailsValues,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENGINEERING_PRODUCT_CATEGORY_NAME: OrderableEdmTypeField<
      EngineeringProductCategoryAttributeDetailsValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_PRODUCT_ATTRIBUTE_TYPE_NAME: OrderableEdmTypeField<
      EngineeringProductCategoryAttributeDetailsValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_PRODUCT_ATTRIBUTE_NAME: OrderableEdmTypeField<
      EngineeringProductCategoryAttributeDetailsValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOOLEAN_VALUE: EnumField<
      EngineeringProductCategoryAttributeDetailsValues<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTEGER_VALUE: OrderableEdmTypeField<
      EngineeringProductCategoryAttributeDetailsValues<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      EngineeringProductCategoryAttributeDetailsValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DECIMAL_VALUE: OrderableEdmTypeField<
      EngineeringProductCategoryAttributeDetailsValues<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_OF_MEASURE: OrderableEdmTypeField<
      EngineeringProductCategoryAttributeDetailsValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_TIME_VALUE: OrderableEdmTypeField<
      EngineeringProductCategoryAttributeDetailsValues<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CURRENCY_VALUE: OrderableEdmTypeField<
      EngineeringProductCategoryAttributeDetailsValues<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TEXT_VALUE: OrderableEdmTypeField<
      EngineeringProductCategoryAttributeDetailsValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringProductCategoryAttributeDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_CATEGORY_ATTRIBUTE_DETAILS: OneToOneLink<
      EngineeringProductCategoryAttributeDetailsValues<DeSerializersT>,
      DeSerializersT,
      EngineeringProductCategoryAttributeDetailsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringProductCategoryAttributeDetailsValues<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link engineeringProductCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_PRODUCT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'EngineeringProductCategoryName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link engineeringProductAttributeTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_PRODUCT_ATTRIBUTE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'EngineeringProductAttributeTypeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link engineeringProductAttributeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_PRODUCT_ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField(
          'EngineeringProductAttributeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link booleanValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOLEAN_VALUE: fieldBuilder.buildEnumField('BooleanValue', NoYes, true),
        /**
         * Static representation of the {@link integerValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEGER_VALUE: fieldBuilder.buildEdmTypeField(
          'IntegerValue',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link decimalValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECIMAL_VALUE: fieldBuilder.buildEdmTypeField(
          'DecimalValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitOfMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateTimeValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_TIME_VALUE: fieldBuilder.buildEdmTypeField(
          'DateTimeValue',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link currencyValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_VALUE: fieldBuilder.buildEdmTypeField(
          'CurrencyValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link textValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_VALUE: fieldBuilder.buildEdmTypeField(
          'TextValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          EngineeringProductCategoryAttributeDetailsValues
        )
      };
    }

    return this._schema;
  }
}
