/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxAuthorities } from './TaxAuthorities';
import { TaxAuthoritiesRequestBuilder } from './TaxAuthoritiesRequestBuilder';
import { TaxPeriodsApi } from './TaxPeriodsApi';
import { AgencyBr } from './AgencyBr';
import { Timezone } from './Timezone';
import { TaxRepRoundOffType } from './TaxRepRoundOffType';
import { TaxReportLayout } from './TaxReportLayout';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class TaxAuthoritiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxAuthorities<DeSerializersT>, DeSerializersT>
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
  ): TaxAuthoritiesApi<DeSerializersT> {
    return new TaxAuthoritiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link taxPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_PERIOD: OneToManyLink<
      TaxAuthorities<DeSerializersT>,
      DeSerializersT,
      TaxPeriodsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [TaxPeriodsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      TAX_PERIOD: new OneToManyLink('TaxPeriod', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = TaxAuthorities;

  requestBuilder(): TaxAuthoritiesRequestBuilder<DeSerializersT> {
    return new TaxAuthoritiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxAuthorities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxAuthorities<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaxAuthorities<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TaxAuthorities, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TaxAuthorities, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_AUTHORITY_CODE: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_AUTHORITY_IDENTIFICATION: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGENCY: EnumField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      AgencyBr,
      true,
      true
    >;
    TIME_ZONE: EnumField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    STREET: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUND_OFF_TYPE: EnumField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      TaxRepRoundOffType,
      true,
      true
    >;
    LATITUDE: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SMS: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE_LOCAL: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TELE_FAX: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORT_LAYOUT: EnumField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      TaxReportLayout,
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUND_OFF: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TELEX: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRICT_NAME: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT_NUM: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LONGITUDE: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAGER: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_NUMBER: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_BOX: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_ISO_CODE: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CELLULAR_PHONE: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUILDING_COMPLIMENT: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      TaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link taxPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_PERIOD: OneToManyLink<
      TaxAuthorities<DeSerializersT>,
      DeSerializersT,
      TaxPeriodsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TaxAuthorities<DeSerializers>>;
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
         * Static representation of the {@link taxAuthorityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AUTHORITY_CODE: fieldBuilder.buildEdmTypeField(
          'TaxAuthorityCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxAuthorityIdentification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AUTHORITY_IDENTIFICATION: fieldBuilder.buildEdmTypeField(
          'TaxAuthorityIdentification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGENCY: fieldBuilder.buildEnumField('Agency', AgencyBr, true),
        /**
         * Static representation of the {@link timeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ZONE: fieldBuilder.buildEnumField('TimeZone', Timezone, true),
        /**
         * Static representation of the {@link street} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET: fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true),
        /**
         * Static representation of the {@link roundOffType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUND_OFF_TYPE: fieldBuilder.buildEnumField(
          'RoundOffType',
          TaxRepRoundOffType,
          true
        ),
        /**
         * Static representation of the {@link latitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LATITUDE: fieldBuilder.buildEdmTypeField(
          'Latitude',
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
         * Static representation of the {@link sms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMS: fieldBuilder.buildEdmTypeField('SMS', 'Edm.String', true),
        /**
         * Static representation of the {@link phoneLocal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE_LOCAL: fieldBuilder.buildEdmTypeField(
          'PhoneLocal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link teleFax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELE_FAX: fieldBuilder.buildEdmTypeField('TeleFax', 'Edm.String', true),
        /**
         * Static representation of the {@link reportLayout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_LAYOUT: fieldBuilder.buildEnumField(
          'ReportLayout',
          TaxReportLayout,
          true
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('URL', 'Edm.String', true),
        /**
         * Static representation of the {@link roundOff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUND_OFF: fieldBuilder.buildEdmTypeField(
          'RoundOff',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'Location',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link telex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELEX: fieldBuilder.buildEdmTypeField('Telex', 'Edm.String', true),
        /**
         * Static representation of the {@link phone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE: fieldBuilder.buildEdmTypeField('Phone', 'Edm.String', true),
        /**
         * Static representation of the {@link county} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', true),
        /**
         * Static representation of the {@link districtName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAccountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'VendorAccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link longitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LONGITUDE: fieldBuilder.buildEdmTypeField(
          'Longitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAGER: fieldBuilder.buildEdmTypeField('Pager', 'Edm.String', true),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link streetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'StreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        /**
         * Static representation of the {@link postBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_BOX: fieldBuilder.buildEdmTypeField('PostBox', 'Edm.String', true),
        /**
         * Static representation of the {@link countryIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'CountryISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cellularPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CELLULAR_PHONE: fieldBuilder.buildEdmTypeField(
          'CellularPhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link buildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'BuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField('ZipCode', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxAuthorities)
      };
    }

    return this._schema;
  }
}
