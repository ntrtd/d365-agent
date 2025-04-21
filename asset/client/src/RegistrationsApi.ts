/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Registrations } from './Registrations';
import { RegistrationsRequestBuilder } from './RegistrationsRequestBuilder';
import { TaxRegistrationTypesList } from './TaxRegistrationTypesList';
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
export class RegistrationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Registrations<DeSerializersT>, DeSerializersT>
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
  ): RegistrationsApi<DeSerializersT> {
    return new RegistrationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Registrations;

  requestBuilder(): RegistrationsRequestBuilder<DeSerializersT> {
    return new RegistrationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Registrations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Registrations<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Registrations<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Registrations, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Registrations, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      Registrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      Registrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      Registrations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEGISLATION_TYPE: EnumField<
      Registrations<DeSerializers>,
      DeSerializersT,
      TaxRegistrationTypesList,
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      Registrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Registrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTRATION_NUMBER: OrderableEdmTypeField<
      Registrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUER: OrderableEdmTypeField<
      Registrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUE_DATE: OrderableEdmTypeField<
      Registrations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_REGSTRATION_TYPE: OrderableEdmTypeField<
      Registrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECTION: OrderableEdmTypeField<
      Registrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      Registrations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<Registrations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link locationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link legislationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGISLATION_TYPE: fieldBuilder.buildEnumField(
          'LegislationType',
          TaxRegistrationTypesList,
          true
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
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
         * Static representation of the {@link registrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'RegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link issuer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUER: fieldBuilder.buildEdmTypeField('Issuer', 'Edm.String', true),
        /**
         * Static representation of the {@link issueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUE_DATE: fieldBuilder.buildEdmTypeField(
          'IssueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxRegstrationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REGSTRATION_TYPE: fieldBuilder.buildEdmTypeField(
          'TaxRegstrationType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link section} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECTION: fieldBuilder.buildEdmTypeField('Section', 'Edm.String', true),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Registrations)
      };
    }

    return this._schema;
  }
}
