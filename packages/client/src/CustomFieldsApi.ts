/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomFields } from './CustomFields';
import { CustomFieldsRequestBuilder } from './CustomFieldsRequestBuilder';
import { NoYesCombo } from './NoYesCombo';
import { CustomFieldDataType } from './CustomFieldDataType';
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
export class CustomFieldsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomFields<DeSerializersT>, DeSerializersT>
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
  ): CustomFieldsApi<DeSerializersT> {
    return new CustomFieldsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustomFields;

  requestBuilder(): CustomFieldsRequestBuilder<DeSerializersT> {
    return new CustomFieldsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomFields<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustomFields<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CustomFields<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CustomFields, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CustomFields, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOM_FIELD: OrderableEdmTypeField<
      CustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFAULT_BOOLEAN: EnumField<
      CustomFields<DeSerializers>,
      DeSerializersT,
      NoYesCombo,
      true,
      true
    >;
    MAX_VALUE: OrderableEdmTypeField<
      CustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_REAL: OrderableEdmTypeField<
      CustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAX_LENGTH: OrderableEdmTypeField<
      CustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_INT: OrderableEdmTypeField<
      CustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VALIDATE_MINIMUM: OrderableEdmTypeField<
      CustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    MIN_VALUE: OrderableEdmTypeField<
      CustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_TYPE: EnumField<
      CustomFields<DeSerializers>,
      DeSerializersT,
      CustomFieldDataType,
      true,
      true
    >;
    DEFAULT_DATE: OrderableEdmTypeField<
      CustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALIDATE_MAXIMUM: OrderableEdmTypeField<
      CustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    DEFAULT_TEXT: OrderableEdmTypeField<
      CustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustomFields<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_FIELD: fieldBuilder.buildEdmTypeField(
          'CustomField',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link defaultBoolean} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_BOOLEAN: fieldBuilder.buildEnumField(
          'DefaultBoolean',
          NoYesCombo,
          true
        ),
        /**
         * Static representation of the {@link maxValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_VALUE: fieldBuilder.buildEdmTypeField(
          'MaxValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultReal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_REAL: fieldBuilder.buildEdmTypeField(
          'DefaultReal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maxLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_LENGTH: fieldBuilder.buildEdmTypeField(
          'MaxLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link defaultInt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_INT: fieldBuilder.buildEdmTypeField(
          'DefaultInt',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link validateMinimum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_MINIMUM: fieldBuilder.buildEdmTypeField(
          'ValidateMinimum',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link minValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_VALUE: fieldBuilder.buildEdmTypeField(
          'MinValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_TYPE: fieldBuilder.buildEnumField(
          'DataType',
          CustomFieldDataType,
          true
        ),
        /**
         * Static representation of the {@link defaultDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DATE: fieldBuilder.buildEdmTypeField(
          'DefaultDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validateMaximum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_MAXIMUM: fieldBuilder.buildEdmTypeField(
          'ValidateMaximum',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link defaultText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_TEXT: fieldBuilder.buildEdmTypeField(
          'DefaultText',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomFields)
      };
    }

    return this._schema;
  }
}
