/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GstRegistrationNumbers } from './GstRegistrationNumbers';
import { GstRegistrationNumbersRequestBuilder } from './GstRegistrationNumbersRequestBuilder';
import { TaxRegistrationTypeIn } from './TaxRegistrationTypeIn';
import { NoYes } from './NoYes';
import { GstTypeIn } from './GstTypeIn';
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
export class GstRegistrationNumbersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<GstRegistrationNumbers<DeSerializersT>, DeSerializersT>
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
  ): GstRegistrationNumbersApi<DeSerializersT> {
    return new GstRegistrationNumbersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = GstRegistrationNumbers;

  requestBuilder(): GstRegistrationNumbersRequestBuilder<DeSerializersT> {
    return new GstRegistrationNumbersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    GstRegistrationNumbers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      GstRegistrationNumbers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GstRegistrationNumbers<DeSerializersT>,
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
    typeof GstRegistrationNumbers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GstRegistrationNumbers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REGISTRATION_NUMBER_TYPE: EnumField<
      GstRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      TaxRegistrationTypeIn,
      true,
      true
    >;
    REGISTRATION_NUMBER: OrderableEdmTypeField<
      GstRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CASUAL_TO_DATE: OrderableEdmTypeField<
      GstRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CASUAL_FROM_DATE: OrderableEdmTypeField<
      GstRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BUSINESS_VERTICALS: OrderableEdmTypeField<
      GstRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      GstRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHARED: EnumField<
      GstRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASUAL_DESCRIPTION: OrderableEdmTypeField<
      GstRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TURN_OVER: OrderableEdmTypeField<
      GstRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREATED_COMPANY_ID: OrderableEdmTypeField<
      GstRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_OF_TAXABLE_PERSON: OrderableEdmTypeField<
      GstRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      GstRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      GstTypeIn,
      true,
      true
    >;
    ALL_FIELDS: AllFields<GstRegistrationNumbers<DeSerializers>>;
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
         * Static representation of the {@link casualToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASUAL_TO_DATE: fieldBuilder.buildEdmTypeField(
          'CasualToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link casualFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASUAL_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'CasualFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link businessVerticals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_VERTICALS: fieldBuilder.buildEdmTypeField(
          'BusinessVerticals',
          'Edm.String',
          true
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
         * Static representation of the {@link shared} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARED: fieldBuilder.buildEnumField('Shared', NoYes, true),
        /**
         * Static representation of the {@link casualDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASUAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CasualDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link turnOver} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TURN_OVER: fieldBuilder.buildEdmTypeField(
          'TurnOver',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link createdCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'CreatedCompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameOfTaxablePerson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_OF_TAXABLE_PERSON: fieldBuilder.buildEdmTypeField(
          'NameOfTaxablePerson',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', GstTypeIn, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GstRegistrationNumbers)
      };
    }

    return this._schema;
  }
}
