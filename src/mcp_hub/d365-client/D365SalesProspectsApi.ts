/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { D365SalesProspects } from './D365SalesProspects';
import { D365SalesProspectsRequestBuilder } from './D365SalesProspectsRequestBuilder';
import { NoYes } from './NoYes';
import { CustVendorBlocked } from './CustVendorBlocked';
import { Timezone } from './Timezone';
import { DirPersonMaritalStatus } from './DirPersonMaritalStatus';
import { Gender } from './Gender';
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
export class D365SalesProspectsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<D365SalesProspects<DeSerializersT>, DeSerializersT>
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
  ): D365SalesProspectsApi<DeSerializersT> {
    return new D365SalesProspectsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = D365SalesProspects;

  requestBuilder(): D365SalesProspectsRequestBuilder<DeSerializersT> {
    return new D365SalesProspectsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    D365SalesProspects<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<D365SalesProspects<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    D365SalesProspects<DeSerializersT>,
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
    typeof D365SalesProspects,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        D365SalesProspects,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROSPECT_ID: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_PRIMARY_PHONE_NUMBER_MOBILE: EnumField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ELECTRONIC_LOCATION_ID: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROSPECT_NAME: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TELEX: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FAX_NUMBER_PURPOSE: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_FIRST_NAME: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_RATING: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_EMAIL_ADDRESS_PURPOSE: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_RECORD_ID: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRIMARY_EMAIL_ADDRESS: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PROFESSIONAL_TITLE: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_VALID_FROM: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRIMARY_EMAIL_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_MIDDLE_NAME: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CREDIT_LIMIT_CHECKING_REQUIRED: EnumField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSON_LAST_NAME: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROSPECT_PARTY_NUMBER: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_LIMIT: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRIMARY_URL_PURPOSE: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FAX_NUMBER_EXTENSION: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER_DESCRIPTION: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FAX_NUMBER_DESCRIPTION: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROSPECT_RELATION_TYPE_ID: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NUM_OF_EMPLOYEES: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DELIVERY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TWITTER: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FACEBOOK_PURPOSE: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_LINKED_IN_DESCRIPTION: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TWITTER_PURPOSE: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER_PURPOSE: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TELEX_PURPOSE: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTY: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_URL: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ON_HOLD_STATUS: EnumField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      CustVendorBlocked,
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER_EXTENSION: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_BUILDING_COMPLEMENT: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FACEBOOK: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROSPECT_PARTY_TYPE: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FACEBOOK_DESCRIPTION: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TELEX_DESCRIPTION: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_VALID_TO: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRIMARY_FAX_NUMBER: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_LINKED_IN: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERSON_LAST_NAME_PREFIX: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ONE_TIME_CUSTOMER_OR_VENDOR: EnumField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_TIME_ZONE: EnumField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    PERSON_PROFESSIONAL_SUFFIX: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_URL_DESCRIPTION: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_LINKED_IN_PURPOSE: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_MARITAL_STATUS: EnumField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      DirPersonMaritalStatus,
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STATE: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_GENDER: EnumField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      Gender,
      true,
      true
    >;
    DELIVERY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_PRIMARY_EMAIL_ADDRESS_IM_ENABLED: EnumField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_TWITTER_DESCRIPTION: OrderableEdmTypeField<
      D365SalesProspects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<D365SalesProspects<DeSerializers>>;
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
         * Static representation of the {@link prospectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROSPECT_ID: fieldBuilder.buildEdmTypeField(
          'ProspectId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isPrimaryPhoneNumberMobile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY_PHONE_NUMBER_MOBILE: fieldBuilder.buildEnumField(
          'IsPrimaryPhoneNumberMobile',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link electronicLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ElectronicLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CustomerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prospectName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROSPECT_NAME: fieldBuilder.buildEdmTypeField(
          'ProspectName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryTelex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TELEX: fieldBuilder.buildEdmTypeField(
          'PrimaryTelex',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE:
          fieldBuilder.buildEdmTypeField(
            'DeliveryAddressCountryRegionISOCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link primaryFaxNumberPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FAX_NUMBER_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryFaxNumberPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personFirstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'PersonFirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditRating} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_RATING: fieldBuilder.buildEdmTypeField(
          'CreditRating',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryEmailAddressPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_EMAIL_ADDRESS_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryEmailAddressPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_RECORD_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressRecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link primaryEmailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'PrimaryEmailAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personProfessionalTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PROFESSIONAL_TITLE: fieldBuilder.buildEdmTypeField(
          'PersonProfessionalTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link primaryEmailAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_EMAIL_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryEmailAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personMiddleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'PersonMiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCreditLimitCheckingRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CREDIT_LIMIT_CHECKING_REQUIRED: fieldBuilder.buildEnumField(
          'IsCreditLimitCheckingRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link personLastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_LAST_NAME: fieldBuilder.buildEdmTypeField(
          'PersonLastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prospectPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROSPECT_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProspectPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT: fieldBuilder.buildEdmTypeField(
          'CreditLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link primaryUrlPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_URL_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryURLPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryFaxNumberExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FAX_NUMBER_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryFaxNumberExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryPhoneNumberDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_PHONE_NUMBER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryPhoneNumberDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryFaxNumberDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FAX_NUMBER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryFaxNumberDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prospectRelationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROSPECT_RELATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ProspectRelationTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationNumOfEmployees} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NUM_OF_EMPLOYEES: fieldBuilder.buildEdmTypeField(
          'OrganizationNumOfEmployees',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryTwitter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TWITTER: fieldBuilder.buildEdmTypeField(
          'PrimaryTwitter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryFacebookPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FACEBOOK_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryFacebookPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryLinkedInDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_LINKED_IN_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryLinkedInDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryTwitterPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TWITTER_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryTwitterPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryPhoneNumberPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_PHONE_NUMBER_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryPhoneNumberPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryTelexPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TELEX_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryTelexPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_URL: fieldBuilder.buildEdmTypeField(
          'PrimaryURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link onHoldStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_HOLD_STATUS: fieldBuilder.buildEnumField(
          'OnHoldStatus',
          CustVendorBlocked,
          true
        ),
        /**
         * Static representation of the {@link primaryPhoneNumberExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_PHONE_NUMBER_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryPhoneNumberExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressBuildingComplement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_BUILDING_COMPLEMENT: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressBuildingComplement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryFacebook} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FACEBOOK: fieldBuilder.buildEdmTypeField(
          'PrimaryFacebook',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prospectPartyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROSPECT_PARTY_TYPE: fieldBuilder.buildEdmTypeField(
          'ProspectPartyType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryFacebookDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FACEBOOK_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryFacebookDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryTelexDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TELEX_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryTelexDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link primaryFaxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'PrimaryFaxNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryLinkedIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_LINKED_IN: fieldBuilder.buildEdmTypeField(
          'PrimaryLinkedIn',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link personLastNamePrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_LAST_NAME_PREFIX: fieldBuilder.buildEdmTypeField(
          'PersonLastNamePrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOneTimeCustomerOrVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ONE_TIME_CUSTOMER_OR_VENDOR: fieldBuilder.buildEnumField(
          'IsOneTimeCustomerOrVendor',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'DeliveryAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link personProfessionalSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PROFESSIONAL_SUFFIX: fieldBuilder.buildEdmTypeField(
          'PersonProfessionalSuffix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryUrlDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_URL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryURLDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        /**
         * Static representation of the {@link primaryLinkedInPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_LINKED_IN_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryLinkedInPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryPhoneNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_PHONE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PrimaryPhoneNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personMaritalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_MARITAL_STATUS: fieldBuilder.buildEnumField(
          'PersonMaritalStatus',
          DirPersonMaritalStatus,
          true
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personGender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_GENDER: fieldBuilder.buildEnumField(
          'PersonGender',
          Gender,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isPrimaryEmailAddressImEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY_EMAIL_ADDRESS_IM_ENABLED: fieldBuilder.buildEnumField(
          'IsPrimaryEmailAddressIMEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryTwitterDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TWITTER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryTwitterDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', D365SalesProspects)
      };
    }

    return this._schema;
  }
}
