/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceTaxRegistrationNumbers } from './ServiceTaxRegistrationNumbers';
import { ServiceTaxRegistrationNumbersRequestBuilder } from './ServiceTaxRegistrationNumbersRequestBuilder';
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
export class ServiceTaxRegistrationNumbersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ServiceTaxRegistrationNumbers<DeSerializersT>, DeSerializersT>
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
  ): ServiceTaxRegistrationNumbersApi<DeSerializersT> {
    return new ServiceTaxRegistrationNumbersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ServiceTaxRegistrationNumbers;

  requestBuilder(): ServiceTaxRegistrationNumbersRequestBuilder<DeSerializersT> {
    return new ServiceTaxRegistrationNumbersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ServiceTaxRegistrationNumbers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ServiceTaxRegistrationNumbers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ServiceTaxRegistrationNumbers<DeSerializersT>,
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
    typeof ServiceTaxRegistrationNumbers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ServiceTaxRegistrationNumbers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REGISTRATION_NUMBER_TYPE: EnumField<
      ServiceTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      TaxRegistrationTypeIn,
      true,
      true
    >;
    REGISTRATION_NUMBER: OrderableEdmTypeField<
      ServiceTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHARED: EnumField<
      ServiceTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ServiceTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ServiceTaxRegistrationNumbers<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', ServiceTaxRegistrationNumbers)
      };
    }

    return this._schema;
  }
}
