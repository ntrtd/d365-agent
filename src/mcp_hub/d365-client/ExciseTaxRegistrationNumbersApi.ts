/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExciseTaxRegistrationNumbers } from './ExciseTaxRegistrationNumbers';
import { ExciseTaxRegistrationNumbersRequestBuilder } from './ExciseTaxRegistrationNumbersRequestBuilder';
import { TaxRegistrationTypeIn } from './TaxRegistrationTypeIn';
import { ExciseReferenceIn } from './ExciseReferenceIn';
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
export class ExciseTaxRegistrationNumbersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ExciseTaxRegistrationNumbers<DeSerializersT>, DeSerializersT>
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
  ): ExciseTaxRegistrationNumbersApi<DeSerializersT> {
    return new ExciseTaxRegistrationNumbersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExciseTaxRegistrationNumbers;

  requestBuilder(): ExciseTaxRegistrationNumbersRequestBuilder<DeSerializersT> {
    return new ExciseTaxRegistrationNumbersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExciseTaxRegistrationNumbers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExciseTaxRegistrationNumbers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExciseTaxRegistrationNumbers<DeSerializersT>,
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
    typeof ExciseTaxRegistrationNumbers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExciseTaxRegistrationNumbers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REGISTRATION_NUMBER_TYPE: EnumField<
      ExciseTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      TaxRegistrationTypeIn,
      true,
      true
    >;
    REGISTRATION_NUMBER: OrderableEdmTypeField<
      ExciseTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REFERENCE: EnumField<
      ExciseTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      ExciseReferenceIn,
      true,
      true
    >;
    NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      ExciseTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHARED: EnumField<
      ExciseTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ExciseTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ExciseTaxRegistrationNumbers<DeSerializers>>;
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
         * Static representation of the {@link reference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE: fieldBuilder.buildEnumField(
          'Reference',
          ExciseReferenceIn,
          true
        ),
        /**
         * Static representation of the {@link numberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'NumberSequenceCode',
          'Edm.String',
          true
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
        ALL_FIELDS: new AllFields('*', ExciseTaxRegistrationNumbers)
      };
    }

    return this._schema;
  }
}
