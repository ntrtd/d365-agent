/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IssuingAgencies } from './IssuingAgencies';
import { IssuingAgenciesRequestBuilder } from './IssuingAgenciesRequestBuilder';
import { I9DocumentTypesApi } from './I9DocumentTypesApi';
import { PersonIdentificationNumbersApi } from './PersonIdentificationNumbersApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class IssuingAgenciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<IssuingAgencies<DeSerializersT>, DeSerializersT>
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
  ): IssuingAgenciesApi<DeSerializersT> {
    return new IssuingAgenciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link i9DocumentTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_9_DOCUMENT_TYPES: OneToManyLink<
      IssuingAgencies<DeSerializersT>,
      DeSerializersT,
      I9DocumentTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personIdentificationNumbers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_IDENTIFICATION_NUMBERS: OneToManyLink<
      IssuingAgencies<DeSerializersT>,
      DeSerializersT,
      PersonIdentificationNumbersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      I9DocumentTypesApi<DeSerializersT>,
      PersonIdentificationNumbersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      I_9_DOCUMENT_TYPES: new OneToManyLink(
        'i9DocumentTypes',
        this,
        linkedApis[0]
      ),
      PERSON_IDENTIFICATION_NUMBERS: new OneToManyLink(
        'PersonIdentificationNumbers',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = IssuingAgencies;

  requestBuilder(): IssuingAgenciesRequestBuilder<DeSerializersT> {
    return new IssuingAgenciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    IssuingAgencies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<IssuingAgencies<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<IssuingAgencies<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof IssuingAgencies, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        IssuingAgencies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ISSUING_AGENCY: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_VALID_FROM: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_TO: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXTENSION: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MOBILE_PHONE: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TELEPHONE: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SMS: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAX: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTY: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNET_ADDRESS: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAGER: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TELEX_NUMBER: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      IssuingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link i9DocumentTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_9_DOCUMENT_TYPES: OneToManyLink<
      IssuingAgencies<DeSerializersT>,
      DeSerializersT,
      I9DocumentTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personIdentificationNumbers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_IDENTIFICATION_NUMBERS: OneToManyLink<
      IssuingAgencies<DeSerializersT>,
      DeSerializersT,
      PersonIdentificationNumbersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<IssuingAgencies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link issuingAgency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUING_AGENCY: fieldBuilder.buildEdmTypeField(
          'IssuingAgency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link addressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'AddressValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link addressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'AddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'AddressState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'AddressValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link extension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENSION: fieldBuilder.buildEdmTypeField(
          'Extension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mobilePhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOBILE_PHONE: fieldBuilder.buildEdmTypeField(
          'MobilePhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link telephone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELEPHONE: fieldBuilder.buildEdmTypeField(
          'Telephone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMS: fieldBuilder.buildEdmTypeField('SMS', 'Edm.String', true),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
        /**
         * Static representation of the {@link addressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'AddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAX: fieldBuilder.buildEdmTypeField('Fax', 'Edm.String', true),
        /**
         * Static representation of the {@link addressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'AddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'AddressCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link internetAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNET_ADDRESS: fieldBuilder.buildEdmTypeField(
          'InternetAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAGER: fieldBuilder.buildEdmTypeField('Pager', 'Edm.String', true),
        /**
         * Static representation of the {@link telexNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELEX_NUMBER: fieldBuilder.buildEdmTypeField(
          'TelexNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'AddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionISOCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IssuingAgencies)
      };
    }

    return this._schema;
  }
}
