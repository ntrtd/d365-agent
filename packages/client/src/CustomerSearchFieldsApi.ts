/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerSearchFields } from './CustomerSearchFields';
import { CustomerSearchFieldsRequestBuilder } from './CustomerSearchFieldsRequestBuilder';
import { RetailCustomerSearchFieldEnum } from './RetailCustomerSearchFieldEnum';
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
export class CustomerSearchFieldsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomerSearchFields<DeSerializersT>, DeSerializersT>
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
  ): CustomerSearchFieldsApi<DeSerializersT> {
    return new CustomerSearchFieldsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustomerSearchFields;

  requestBuilder(): CustomerSearchFieldsRequestBuilder<DeSerializersT> {
    return new CustomerSearchFieldsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerSearchFields<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustomerSearchFields<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerSearchFields<DeSerializersT>,
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
    typeof CustomerSearchFields,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerSearchFields,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RETAIL_CUSTOMER_SEARCH_FIELD_ENUM_LABEL: OrderableEdmTypeField<
      CustomerSearchFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPLAY_ORDER: OrderableEdmTypeField<
      CustomerSearchFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_CUSTOMER_SEARCH_FIELD_ENUM_VALUE: EnumField<
      CustomerSearchFields<DeSerializers>,
      DeSerializersT,
      RetailCustomerSearchFieldEnum,
      true,
      true
    >;
    CAN_BE_REFINED: EnumField<
      CustomerSearchFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SHORTCUT: EnumField<
      CustomerSearchFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustomerSearchFields<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link retailCustomerSearchFieldEnumLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CUSTOMER_SEARCH_FIELD_ENUM_LABEL: fieldBuilder.buildEdmTypeField(
          'RetailCustomerSearchFieldEnumLabel',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link displayOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_ORDER: fieldBuilder.buildEdmTypeField(
          'DisplayOrder',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link retailCustomerSearchFieldEnumValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CUSTOMER_SEARCH_FIELD_ENUM_VALUE: fieldBuilder.buildEnumField(
          'RetailCustomerSearchFieldEnumValue',
          RetailCustomerSearchFieldEnum,
          true
        ),
        /**
         * Static representation of the {@link canBeRefined} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_BE_REFINED: fieldBuilder.buildEnumField(
          'CanBeRefined',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isShortcut} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SHORTCUT: fieldBuilder.buildEnumField('IsShortcut', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerSearchFields)
      };
    }

    return this._schema;
  }
}
