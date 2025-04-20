/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ContactPersons } from './ContactPersons';
import { ContactPersonsRequestBuilder } from './ContactPersonsRequestBuilder';
import { PurchaseAgreementsApi } from './PurchaseAgreementsApi';
import { SalesAgreementConfirmationsApi } from './SalesAgreementConfirmationsApi';
import { SalesAgreementsApi } from './SalesAgreementsApi';
import { ServiceAgreementHeadersApi } from './ServiceAgreementHeadersApi';
import { ServiceOrderHeadersApi } from './ServiceOrderHeadersApi';
import { ClmIntegrationPurchaseAgreementsApi } from './ClmIntegrationPurchaseAgreementsApi';
import { NoYes } from './NoYes';
import { MonthsOfYear } from './MonthsOfYear';
import { VendRequestRoleType } from './VendRequestRoleType';
import { Gender } from './Gender';
import { SmmSensitivity } from './SmmSensitivity';
import { Timezone } from './Timezone';
import { DirPersonMaritalStatus } from './DirPersonMaritalStatus';
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
export class ContactPersonsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ContactPersons<DeSerializersT>, DeSerializersT>
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
  ): ContactPersonsApi<DeSerializersT> {
    return new ContactPersonsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      ContactPersons<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_HEADERS: OneToManyLink<
      ContactPersons<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_HEADERS: OneToManyLink<
      ContactPersons<DeSerializersT>,
      DeSerializersT,
      SalesAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_AGREEMENT_HEADERS: OneToManyLink<
      ContactPersons<DeSerializersT>,
      DeSerializersT,
      ServiceAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_ORDER_HEADERS: OneToManyLink<
      ContactPersons<DeSerializersT>,
      DeSerializersT,
      ServiceOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      ContactPersons<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseAgreementsApi<DeSerializersT>,
      SalesAgreementConfirmationsApi<DeSerializersT>,
      SalesAgreementsApi<DeSerializersT>,
      ServiceAgreementHeadersApi<DeSerializersT>,
      ServiceOrderHeadersApi<DeSerializersT>,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'PurchaseAgreementHeaders',
        this,
        linkedApis[0]
      ),
      SALES_AGREEMENT_CONFIRMATION_HEADERS: new OneToManyLink(
        'SalesAgreementConfirmationHeaders',
        this,
        linkedApis[1]
      ),
      SALES_AGREEMENT_HEADERS: new OneToManyLink(
        'SalesAgreementHeaders',
        this,
        linkedApis[2]
      ),
      SERVICE_AGREEMENT_HEADERS: new OneToManyLink(
        'ServiceAgreementHeaders',
        this,
        linkedApis[3]
      ),
      SERVICE_ORDER_HEADERS: new OneToManyLink(
        'ServiceOrderHeaders',
        this,
        linkedApis[4]
      ),
      CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'CLMIntegrationPurchaseAgreementHeaders',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = ContactPersons;

  requestBuilder(): ContactPersonsRequestBuilder<DeSerializersT> {
    return new ContactPersonsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ContactPersons<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ContactPersons<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ContactPersons<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ContactPersons, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ContactPersons, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRIMARY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOYALTY_LEVEL_PHRASE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY_PHONE_NUMBER_MOBILE: EnumField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ANNIVERSARY_MONTH: EnumField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      MonthsOfYear,
      true,
      true
    >;
    BILLING_INFORMATION: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RECEIVING_DIRECT_MAIL: EnumField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ELECTRONIC_LOCATION_ID: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_DAY: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SPOUSE_NAME: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_INFORMATION_LANGUAGE_ID: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_NAME_SEQUENCE_PATTERN_NAME: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TELEX: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AVAILABLE_FROM_TIME: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRIMARY_FAX_NUMBER_PURPOSE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_PARTY_TYPE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_EMAIL_ADDRESS_PURPOSE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOBBIES: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_EMAIL_ADDRESS: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_EDIT_DATE_TIME: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INITIALS: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_EMAIL_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_PRIMARY_ADDRESS: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITIZENSHIP_COUNTRY_REGION: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEARCH_NAME: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DECISION_MAKING_ROLE_CODE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_VALID_FROM: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMPLOYMENT_PROFESSION: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_URL_PURPOSE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_ROLE: EnumField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      VendRequestRoleType,
      true,
      true
    >;
    PRIMARY_FAX_NUMBER_EXTENSION: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER_DESCRIPTION: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FAX_NUMBER_DESCRIPTION: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TWITTER: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSOCIATED_PARTY_NUMBER: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_VENDOR_PORTAL_ACCESS_ALLOWED: EnumField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONETIC_MIDDLE_NAME: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFESSIONAL_TITLE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MICROSOFT_OUTLOOK_CATEGORIES: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FACEBOOK_PURPOSE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_IDENTIFICATION_NUMBER: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_LINKED_IN_DESCRIPTION: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TWITTER_PURPOSE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHILDREN_NAMES: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER_PURPOSE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TELEX_PURPOSE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSISTANT_NAME: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYMENT_JOB_TITLE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_URL: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENDER: EnumField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      Gender,
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER_EXTENSION: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FACEBOOK: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATE_SALUTATION_PHRASE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_LOCATION_ROLES: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KNOWN_AS_NAME: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_NAME: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_CONTACT_PERSON: EnumField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANAGER_CONTACT_PERSON_ID: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FACEBOOK_DESCRIPTION: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYMENT_OFFICE_LOCATION: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AVAILABLE_TO_TIME: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ASSISTANT_PHONE_NUMBER: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_VALID_TO: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS_BOOK_NAMES: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_STREET: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TELEX_DESCRIPTION: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_RESPONSIBLE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_YEAR: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONTACT_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FAX_NUMBER: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOVERNMENT_IDENTIFICATION_NUMBER: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_LINKED_IN: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSONAL_CHARACTER_TYPE_CODE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_ACTIVITY_SENSITIVITY_LEVEL: EnumField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      SmmSensitivity,
      true,
      true
    >;
    IDENTITY_CARD_NUMBER: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HAS_REQUESTED_INTERNET_ACCESS: EnumField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PHONETIC_LAST_NAME: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_CITY: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CONTACT_PERSON_EXTERNALLY_MAINTAINED: EnumField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ANNIVERSARY_YEAR: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRIMARY_URL_DESCRIPTION: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_LINKED_IN_PURPOSE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONETIC_FIRST_NAME: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MILEAGE_DISTANCE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFESSIONAL_SUFFIX: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_COMPLIMENTARY_CLOSING_PHRASE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_TIME_ZONE: EnumField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    PRIMARY_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATE_COMPLIMENTARY_CLOSING_PHRASE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_SALUTATION_PHRASE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIDDLE_NAME: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYMENT_JOB_FUNCTION_NAME: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARITAL_STATUS: EnumField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      DirPersonMaritalStatus,
      true,
      true
    >;
    EMPLOYMENT_DEPARTMENT: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_VIP: EnumField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYMENT_COMPUTER_NETWORK_NAME: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_PRIMARY_EMAIL_ADDRESS_IM_ENABLED: EnumField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_IMPORTED: EnumField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ANNIVERSARY_DAY: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_INACTIVE: EnumField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BIRTH_MONTH: EnumField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      MonthsOfYear,
      true,
      true
    >;
    PRIMARY_TWITTER_DESCRIPTION: OrderableEdmTypeField<
      ContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      ContactPersons<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_HEADERS: OneToManyLink<
      ContactPersons<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_HEADERS: OneToManyLink<
      ContactPersons<DeSerializersT>,
      DeSerializersT,
      SalesAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_AGREEMENT_HEADERS: OneToManyLink<
      ContactPersons<DeSerializersT>,
      DeSerializersT,
      ServiceAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_ORDER_HEADERS: OneToManyLink<
      ContactPersons<DeSerializersT>,
      DeSerializersT,
      ServiceOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      ContactPersons<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ContactPersons<DeSerializers>>;
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
         * Static representation of the {@link contactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'ContactPersonId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link primaryAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link loyaltyLevelPhrase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_LEVEL_PHRASE: fieldBuilder.buildEdmTypeField(
          'LoyaltyLevelPhrase',
          'Edm.String',
          true
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
         * Static representation of the {@link anniversaryMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNIVERSARY_MONTH: fieldBuilder.buildEnumField(
          'AnniversaryMonth',
          MonthsOfYear,
          true
        ),
        /**
         * Static representation of the {@link billingInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_INFORMATION: fieldBuilder.buildEdmTypeField(
          'BillingInformation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isReceivingDirectMail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RECEIVING_DIRECT_MAIL: fieldBuilder.buildEnumField(
          'IsReceivingDirectMail',
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
         * Static representation of the {@link birthDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_DAY: fieldBuilder.buildEdmTypeField(
          'BirthDay',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link spouseName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPOUSE_NAME: fieldBuilder.buildEdmTypeField(
          'SpouseName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactInformationLanguageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_INFORMATION_LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'ContactInformationLanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link displayNameSequencePatternName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_NAME_SEQUENCE_PATTERN_NAME: fieldBuilder.buildEdmTypeField(
          'DisplayNameSequencePatternName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME: fieldBuilder.buildEdmTypeField(
          'LastName',
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
         * Static representation of the {@link availableFromTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVAILABLE_FROM_TIME: fieldBuilder.buildEdmTypeField(
          'AvailableFromTime',
          'Edm.Int32',
          false
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
         * Static representation of the {@link contactPersonPartyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_PARTY_TYPE: fieldBuilder.buildEdmTypeField(
          'ContactPersonPartyType',
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
         * Static representation of the {@link hobbies} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOBBIES: fieldBuilder.buildEdmTypeField('Hobbies', 'Edm.String', true),
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
         * Static representation of the {@link lastEditDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_EDIT_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'LastEditDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link initials} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIALS: fieldBuilder.buildEdmTypeField(
          'Initials',
          'Edm.String',
          true
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
         * Static representation of the {@link formattedPrimaryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_PRIMARY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedPrimaryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link citizenshipCountryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITIZENSHIP_COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'CitizenshipCountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link searchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'SearchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link decisionMakingRoleCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECISION_MAKING_ROLE_CODE: fieldBuilder.buildEdmTypeField(
          'DecisionMakingRoleCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link employmentProfession} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_PROFESSION: fieldBuilder.buildEdmTypeField(
          'EmploymentProfession',
          'Edm.String',
          true
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
         * Static representation of the {@link userRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ROLE: fieldBuilder.buildEnumField(
          'UserRole',
          VendRequestRoleType,
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
         * Static representation of the {@link primaryTwitter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TWITTER: fieldBuilder.buildEdmTypeField(
          'PrimaryTwitter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link associatedPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSOCIATED_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'AssociatedPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isVendorPortalAccessAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VENDOR_PORTAL_ACCESS_ALLOWED: fieldBuilder.buildEnumField(
          'IsVendorPortalAccessAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link phoneticMiddleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONETIC_MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'PhoneticMiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link professionalTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFESSIONAL_TITLE: fieldBuilder.buildEdmTypeField(
          'ProfessionalTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link microsoftOutlookCategories} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MICROSOFT_OUTLOOK_CATEGORIES: fieldBuilder.buildEdmTypeField(
          'MicrosoftOutlookCategories',
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
         * Static representation of the {@link primaryAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationIdentificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_IDENTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrganizationIdentificationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressLocationId',
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
         * Static representation of the {@link primaryAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link childrenNames} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHILDREN_NAMES: fieldBuilder.buildEdmTypeField(
          'ChildrenNames',
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
         * Static representation of the {@link assistantName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSISTANT_NAME: fieldBuilder.buildEdmTypeField(
          'AssistantName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employmentJobTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_JOB_TITLE: fieldBuilder.buildEdmTypeField(
          'EmploymentJobTitle',
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
         * Static representation of the {@link primaryAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link firstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'FirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENDER: fieldBuilder.buildEnumField('Gender', Gender, true),
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
         * Static representation of the {@link primaryFacebook} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FACEBOOK: fieldBuilder.buildEdmTypeField(
          'PrimaryFacebook',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alternateSalutationPhrase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATE_SALUTATION_PHRASE: fieldBuilder.buildEdmTypeField(
          'AlternateSalutationPhrase',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressLocationRoles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_LOCATION_ROLES: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressLocationRoles',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link knownAsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KNOWN_AS_NAME: fieldBuilder.buildEdmTypeField(
          'KnownAsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link contactPersonName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_NAME: fieldBuilder.buildEdmTypeField(
          'ContactPersonName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDefaultContactPerson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_CONTACT_PERSON: fieldBuilder.buildEnumField(
          'IsDefaultContactPerson',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link managerContactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGER_CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'ManagerContactPersonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressDistrictName',
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
         * Static representation of the {@link employmentOfficeLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_OFFICE_LOCATION: fieldBuilder.buildEdmTypeField(
          'EmploymentOfficeLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link availableToTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVAILABLE_TO_TIME: fieldBuilder.buildEdmTypeField(
          'AvailableToTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link assistantPhoneNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSISTANT_PHONE_NUMBER: fieldBuilder.buildEdmTypeField(
          'AssistantPhoneNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link addressBookNames} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BOOK_NAMES: fieldBuilder.buildEdmTypeField(
          'AddressBookNames',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressStreet',
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
         * Static representation of the {@link contactPersonResponsiblePersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_RESPONSIBLE_PERSONNEL_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'ContactPersonResponsiblePersonnelNumber',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link birthYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_YEAR: fieldBuilder.buildEdmTypeField(
          'BirthYear',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link contactPersonPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContactPersonPartyNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link governmentIdentificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOVERNMENT_IDENTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'GovernmentIdentificationNumber',
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
         * Static representation of the {@link personalCharacterTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONAL_CHARACTER_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'PersonalCharacterTypeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactActivitySensitivityLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_ACTIVITY_SENSITIVITY_LEVEL: fieldBuilder.buildEnumField(
          'ContactActivitySensitivityLevel',
          SmmSensitivity,
          true
        ),
        /**
         * Static representation of the {@link identityCardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTITY_CARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'IdentityCardNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hasRequestedInternetAccess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_REQUESTED_INTERNET_ACCESS: fieldBuilder.buildEnumField(
          'HasRequestedInternetAccess',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link phoneticLastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONETIC_LAST_NAME: fieldBuilder.buildEdmTypeField(
          'PhoneticLastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isContactPersonExternallyMaintained} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CONTACT_PERSON_EXTERNALLY_MAINTAINED: fieldBuilder.buildEnumField(
          'IsContactPersonExternallyMaintained',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link anniversaryYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNIVERSARY_YEAR: fieldBuilder.buildEdmTypeField(
          'AnniversaryYear',
          'Edm.Int32',
          false
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
         * Static representation of the {@link primaryLinkedInPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_LINKED_IN_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryLinkedInPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link phoneticFirstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONETIC_FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'PhoneticFirstName',
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
         * Static representation of the {@link mileageDistance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILEAGE_DISTANCE: fieldBuilder.buildEdmTypeField(
          'MileageDistance',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link professionalSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFESSIONAL_SUFFIX: fieldBuilder.buildEdmTypeField(
          'ProfessionalSuffix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryComplimentaryClosingPhrase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_COMPLIMENTARY_CLOSING_PHRASE: fieldBuilder.buildEdmTypeField(
          'PrimaryComplimentaryClosingPhrase',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'PrimaryAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link primaryAddressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alternateComplimentaryClosingPhrase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATE_COMPLIMENTARY_CLOSING_PHRASE: fieldBuilder.buildEdmTypeField(
          'AlternateComplimentaryClosingPhrase',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primarySalutationPhrase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_SALUTATION_PHRASE: fieldBuilder.buildEdmTypeField(
          'PrimarySalutationPhrase',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link middleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'MiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employmentJobFunctionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_JOB_FUNCTION_NAME: fieldBuilder.buildEdmTypeField(
          'EmploymentJobFunctionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maritalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARITAL_STATUS: fieldBuilder.buildEnumField(
          'MaritalStatus',
          DirPersonMaritalStatus,
          true
        ),
        /**
         * Static representation of the {@link employmentDepartment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_DEPARTMENT: fieldBuilder.buildEdmTypeField(
          'EmploymentDepartment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isVip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VIP: fieldBuilder.buildEnumField('IsVIP', NoYes, true),
        /**
         * Static representation of the {@link primaryAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employmentComputerNetworkName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_COMPUTER_NETWORK_NAME: fieldBuilder.buildEdmTypeField(
          'EmploymentComputerNetworkName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressLongitude',
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
         * Static representation of the {@link isImported} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_IMPORTED: fieldBuilder.buildEnumField('IsImported', NoYes, true),
        /**
         * Static representation of the {@link anniversaryDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNIVERSARY_DAY: fieldBuilder.buildEdmTypeField(
          'AnniversaryDay',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isInactive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INACTIVE: fieldBuilder.buildEnumField('IsInactive', NoYes, true),
        /**
         * Static representation of the {@link birthMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_MONTH: fieldBuilder.buildEnumField(
          'BirthMonth',
          MonthsOfYear,
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
        ALL_FIELDS: new AllFields('*', ContactPersons)
      };
    }

    return this._schema;
  }
}
