/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerAttributeValues } from './CustomerAttributeValues';
import { CustomerAttributeValuesRequestBuilder } from './CustomerAttributeValuesRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class CustomerAttributeValuesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomerAttributeValues<DeSerializersT>, DeSerializersT>
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
  ): CustomerAttributeValuesApi<DeSerializersT> {
    return new CustomerAttributeValuesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustomerAttributeValues;

  requestBuilder(): CustomerAttributeValuesRequestBuilder<DeSerializersT> {
    return new CustomerAttributeValuesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerAttributeValues<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomerAttributeValues<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerAttributeValues<DeSerializersT>,
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
    typeof CustomerAttributeValues,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerAttributeValues,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACCOUNT_NUM: OrderableEdmTypeField<
      CustomerAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_DATA_AREA_ID: OrderableEdmTypeField<
      CustomerAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_NAME: OrderableEdmTypeField<
      CustomerAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATE_TIME_VALUE: OrderableEdmTypeField<
      CustomerAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INSTANCE_RELATION_TYPE: OrderableEdmTypeField<
      CustomerAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INT_VALUE: OrderableEdmTypeField<
      CustomerAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DECIMAL_VALUE: OrderableEdmTypeField<
      CustomerAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BOOLEAN_VALUE: EnumField<
      CustomerAttributeValues<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TEXT_VALUE: OrderableEdmTypeField<
      CustomerAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_TYPE_NAME: OrderableEdmTypeField<
      CustomerAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustomerAttributeValues<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link accountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'AccountNum',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customerDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'CustomerDataAreaId',
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
         * Static representation of the {@link dateTimeValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_TIME_VALUE: fieldBuilder.buildEdmTypeField(
          'DateTimeValue',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link instanceRelationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTANCE_RELATION_TYPE: fieldBuilder.buildEdmTypeField(
          'InstanceRelationType',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link intValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INT_VALUE: fieldBuilder.buildEdmTypeField(
          'IntValue',
          'Edm.Int32',
          false
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
         * Static representation of the {@link booleanValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOLEAN_VALUE: fieldBuilder.buildEnumField('BooleanValue', NoYes, true),
        /**
         * Static representation of the {@link textValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_VALUE: fieldBuilder.buildEdmTypeField(
          'TextValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attributeTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'AttributeTypeName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerAttributeValues)
      };
    }

    return this._schema;
  }
}
