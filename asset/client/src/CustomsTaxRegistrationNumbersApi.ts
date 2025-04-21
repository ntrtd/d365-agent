/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomsTaxRegistrationNumbers } from './CustomsTaxRegistrationNumbers';
import { CustomsTaxRegistrationNumbersRequestBuilder } from './CustomsTaxRegistrationNumbersRequestBuilder';
import { TaxRegistrationTypeIn } from './TaxRegistrationTypeIn';
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
  EnumField,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class CustomsTaxRegistrationNumbersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CustomsTaxRegistrationNumbers<DeSerializersT>, DeSerializersT>
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
  ): CustomsTaxRegistrationNumbersApi<DeSerializersT> {
    return new CustomsTaxRegistrationNumbersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustomsTaxRegistrationNumbers;

  requestBuilder(): CustomsTaxRegistrationNumbersRequestBuilder<DeSerializersT> {
    return new CustomsTaxRegistrationNumbersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CustomsTaxRegistrationNumbers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomsTaxRegistrationNumbers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomsTaxRegistrationNumbers<DeSerializersT>,
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
    typeof CustomsTaxRegistrationNumbers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomsTaxRegistrationNumbers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REGISTRATION_NUMBER_TYPE: EnumField<
      CustomsTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      TaxRegistrationTypeIn,
      true,
      true
    >;
    REGISTRATION_NUMBER: OrderableEdmTypeField<
      CustomsTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHARED: EnumField<
      CustomsTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CustomsTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustomsTaxRegistrationNumbers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link registrationNumberType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_NUMBER_TYPE: fieldBuilder.buildEnumField(
          'RegistrationNumberType',
          TaxRegistrationTypeIn,
          true
        ),
        /**
         * Static representation of the {@link registrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'RegistrationNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shared} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARED: fieldBuilder.buildEnumField('Shared', NoYes, true),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomsTaxRegistrationNumbers)
      };
    }

    return this._schema;
  }
}
