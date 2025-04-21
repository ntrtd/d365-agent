/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Applicants } from './Applicants';
import { ApplicantsRequestBuilder } from './ApplicantsRequestBuilder';
import { PersonSkillMappingsApi } from './PersonSkillMappingsApi';
import { EducationDegreesApi } from './EducationDegreesApi';
import { VeteranStatusesApi } from './VeteranStatusesApi';
import { EthnicOriginsApi } from './EthnicOriginsApi';
import { ReasonCodesApi } from './ReasonCodesApi';
import { ApplicationsApi } from './ApplicationsApi';
import { NoYes } from './NoYes';
import { HcmPersonGender } from './HcmPersonGender';
import { HrmBlankYesNo } from './HrmBlankYesNo';
import { HcmPersonMaritalStatus } from './HcmPersonMaritalStatus';
import { HcmApplicantType } from './HcmApplicantType';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ApplicantsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Applicants<DeSerializersT>, DeSerializersT>
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
  ): ApplicantsApi<DeSerializersT> {
    return new ApplicantsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link personSkillMapping} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_SKILL_MAPPING: OneToOneLink<
      Applicants<DeSerializersT>,
      DeSerializersT,
      PersonSkillMappingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link educationLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EDUCATION_LEVEL: OneToOneLink<
      Applicants<DeSerializersT>,
      DeSerializersT,
      EducationDegreesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link veteranStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VETERAN_STATUS: OneToOneLink<
      Applicants<DeSerializersT>,
      DeSerializersT,
      VeteranStatusesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ethnicOrigin} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ETHNIC_ORIGIN: OneToOneLink<
      Applicants<DeSerializersT>,
      DeSerializersT,
      EthnicOriginsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      Applicants<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link applications} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPLICATIONS: OneToManyLink<
      Applicants<DeSerializersT>,
      DeSerializersT,
      ApplicationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PersonSkillMappingsApi<DeSerializersT>,
      EducationDegreesApi<DeSerializersT>,
      VeteranStatusesApi<DeSerializersT>,
      EthnicOriginsApi<DeSerializersT>,
      ReasonCodesApi<DeSerializersT>,
      ApplicationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PERSON_SKILL_MAPPING: new OneToOneLink(
        'PersonSkillMapping',
        this,
        linkedApis[0]
      ),
      EDUCATION_LEVEL: new OneToOneLink('EducationLevel', this, linkedApis[1]),
      VETERAN_STATUS: new OneToOneLink('VeteranStatus', this, linkedApis[2]),
      ETHNIC_ORIGIN: new OneToOneLink('EthnicOrigin', this, linkedApis[3]),
      REASON_CODE: new OneToOneLink('ReasonCode', this, linkedApis[4]),
      APPLICATIONS: new OneToManyLink('Applications', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = Applicants;

  requestBuilder(): ApplicantsRequestBuilder<DeSerializersT> {
    return new ApplicantsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Applicants<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Applicants<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Applicants<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Applicants, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Applicants, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    APPLICANT: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK_IS_PRIVATE: EnumField<
      Applicants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTAL_ADDRESS_VALID_TO: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN_DESCRIPTION: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_LOCATION_ID: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIGHEST_DEGREE_ID: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TELEX_IS_PRIVATE: EnumField<
      Applicants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_IS_PRIVATE: EnumField<
      Applicants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SKILL_MAPPING_ENABLED: EnumField<
      Applicants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTAL_ADDRESS_VALID_FROM: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS_LOCATION_ROLES: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_EXTENSION: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INITIALS: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITIZENSHIP_COUNTRY_REGION: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_EXTENSION: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_IS_MOBILE: EnumField<
      Applicants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_TELEX_DESCRIPTION: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_IS_PRIVATE: EnumField<
      Applicants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REASON_CODE_ID: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_DESCRIPTION: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATIVE_LANGUAGE_ID: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_ALIAS: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME_PREFIX: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KNOWN_AS: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONETIC_MIDDLE_NAME: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFESSIONAL_TITLE: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENT_JOB_TITLE: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_DESCRIPTION: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_SEQUENCE_DISPLAY_AS: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VETERAN_STATUS_ID: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_DETAILS_VALID_TO: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS_DESCRIPTION_NAME: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TELEX: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENDER: EnumField<
      Applicants<DeSerializers>,
      DeSerializersT,
      HcmPersonGender,
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK_DESCRIPTION: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_URL_IS_PRIVATE: EnumField<
      Applicants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSON_DETAILS_VALID_FROM: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_DATE: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRIMARY_CONTACT_PHONE: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_TYPE: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_BOOKS: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREVIOUS_EMPLOYEE: EnumField<
      Applicants<DeSerializers>,
      DeSerializersT,
      HrmBlankYesNo,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ETHNIC_ORIGIN_ID: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_URL: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_URL_DESCRIPTION: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_APPLICATIONS: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRIMARY_CONTACT_EMAIL_IS_IM: EnumField<
      Applicants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PHONETIC_LAST_NAME: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN_IS_PRIVATE: EnumField<
      Applicants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER_IS_PRIVATE: EnumField<
      Applicants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PHONETIC_FIRST_NAME: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFESSIONAL_SUFFIX: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUTURE_CONSIDERATION: EnumField<
      Applicants<DeSerializers>,
      DeSerializersT,
      HrmBlankYesNo,
      true,
      true
    >;
    MIDDLE_NAME: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARITAL_STATUS: EnumField<
      Applicants<DeSerializers>,
      DeSerializersT,
      HcmPersonMaritalStatus,
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_IS_PRIVATE: EnumField<
      Applicants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TOTAL_APPLICATIONS: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRIMARY_CONTACT_FAX_DESCRIPTION: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER_DESCRIPTION: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTY: OrderableEdmTypeField<
      Applicants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPLICANT_TYPE: EnumField<
      Applicants<DeSerializers>,
      DeSerializersT,
      HcmApplicantType,
      true,
      true
    >;
    ADDRESS_IS_PRIVATE: EnumField<
      Applicants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personSkillMapping} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_SKILL_MAPPING: OneToOneLink<
      Applicants<DeSerializersT>,
      DeSerializersT,
      PersonSkillMappingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link educationLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EDUCATION_LEVEL: OneToOneLink<
      Applicants<DeSerializersT>,
      DeSerializersT,
      EducationDegreesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link veteranStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VETERAN_STATUS: OneToOneLink<
      Applicants<DeSerializersT>,
      DeSerializersT,
      VeteranStatusesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ethnicOrigin} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ETHNIC_ORIGIN: OneToOneLink<
      Applicants<DeSerializersT>,
      DeSerializersT,
      EthnicOriginsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      Applicants<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link applications} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPLICATIONS: OneToManyLink<
      Applicants<DeSerializersT>,
      DeSerializersT,
      ApplicationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Applicants<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link applicant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICANT: fieldBuilder.buildEdmTypeField(
          'Applicant',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link primaryContactFacebookIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK_IS_PRIVATE: fieldBuilder.buildEnumField(
          'PrimaryContactFacebookIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postalAddressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTAL_ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'PostalAddressValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link primaryContactLinkedInDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactLinkedInDescription',
          'Edm.String',
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
         * Static representation of the {@link comments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTS: fieldBuilder.buildEdmTypeField(
          'Comments',
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
         * Static representation of the {@link primaryContactFacebook} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFacebook',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link highestDegreeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIGHEST_DEGREE_ID: fieldBuilder.buildEdmTypeField(
          'HighestDegreeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactTelexIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TELEX_IS_PRIVATE: fieldBuilder.buildEnumField(
          'PrimaryContactTelexIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhoneIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_IS_PRIVATE: fieldBuilder.buildEnumField(
          'PrimaryContactPhoneIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isSkillMappingEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SKILL_MAPPING_ENABLED: fieldBuilder.buildEnumField(
          'IsSkillMappingEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postalAddressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTAL_ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'PostalAddressValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link addressLocationRoles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LOCATION_ROLES: fieldBuilder.buildEdmTypeField(
          'AddressLocationRoles',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFaxExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFaxExtension',
          'Edm.String',
          true
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
         * Static representation of the {@link citizenshipCountryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITIZENSHIP_COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'CitizenshipCountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhoneExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhoneExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhoneIsMobile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_IS_MOBILE: fieldBuilder.buildEnumField(
          'PrimaryContactPhoneIsMobile',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryContactTelexDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TELEX_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTelexDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFaxIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX_IS_PRIVATE: fieldBuilder.buildEnumField(
          'PrimaryContactFaxIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhoneDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhoneDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nativeLanguageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIVE_LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'NativeLanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_ALIAS: fieldBuilder.buildEdmTypeField(
          'NameAlias',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastNamePrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME_PREFIX: fieldBuilder.buildEdmTypeField(
          'LastNamePrefix',
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
        /**
         * Static representation of the {@link knownAs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KNOWN_AS: fieldBuilder.buildEdmTypeField('KnownAs', 'Edm.String', true),
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
         * Static representation of the {@link professionalTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFESSIONAL_TITLE: fieldBuilder.buildEdmTypeField(
          'ProfessionalTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currentJobTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_JOB_TITLE: fieldBuilder.buildEdmTypeField(
          'CurrentJobTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactEmailDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactEmailDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameSequenceDisplayAs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_SEQUENCE_DISPLAY_AS: fieldBuilder.buildEdmTypeField(
          'NameSequenceDisplayAs',
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
         * Static representation of the {@link veteranStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VETERAN_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'VeteranStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personDetailsValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_DETAILS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'PersonDetailsValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link addressDescriptionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DESCRIPTION_NAME: fieldBuilder.buildEdmTypeField(
          'AddressDescriptionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactTwitter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTwitter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactTelex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TELEX: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTelex',
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
        GENDER: fieldBuilder.buildEnumField('Gender', HcmPersonGender, true),
        /**
         * Static representation of the {@link primaryContactFacebookDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFacebookDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactUrlIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL_IS_PRIVATE: fieldBuilder.buildEnumField(
          'PrimaryContactURLIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link personDetailsValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_DETAILS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'PersonDetailsValidFrom',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link birthDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_DATE: fieldBuilder.buildEdmTypeField(
          'BirthDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link primaryContactPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_TYPE: fieldBuilder.buildEdmTypeField(
          'PartyType',
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
         * Static representation of the {@link addressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'AddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressBooks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BOOKS: fieldBuilder.buildEdmTypeField(
          'AddressBooks',
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
         * Static representation of the {@link primaryContactEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL: fieldBuilder.buildEdmTypeField(
          'PrimaryContactEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link previousEmployee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUS_EMPLOYEE: fieldBuilder.buildEnumField(
          'PreviousEmployee',
          HrmBlankYesNo,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link ethnicOriginId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ETHNIC_ORIGIN_ID: fieldBuilder.buildEdmTypeField(
          'EthnicOriginId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactLinkedIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN: fieldBuilder.buildEdmTypeField(
          'PrimaryContactLinkedIn',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL: fieldBuilder.buildEdmTypeField(
          'PrimaryContactURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactUrlDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactURLDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberOfApplications} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_APPLICATIONS: fieldBuilder.buildEdmTypeField(
          'NumberOfApplications',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link primaryContactEmailIsIm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL_IS_IM: fieldBuilder.buildEnumField(
          'PrimaryContactEmailIsIM',
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
         * Static representation of the {@link addressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'AddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactLinkedInIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN_IS_PRIVATE: fieldBuilder.buildEnumField(
          'PrimaryContactLinkedInIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryContactTwitterIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER_IS_PRIVATE: fieldBuilder.buildEnumField(
          'PrimaryContactTwitterIsPrivate',
          NoYes,
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
         * Static representation of the {@link addressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionId',
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
         * Static representation of the {@link futureConsideration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_CONSIDERATION: fieldBuilder.buildEnumField(
          'FutureConsideration',
          HrmBlankYesNo,
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
         * Static representation of the {@link primaryContactFax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFax',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maritalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARITAL_STATUS: fieldBuilder.buildEnumField(
          'MaritalStatus',
          HcmPersonMaritalStatus,
          true
        ),
        /**
         * Static representation of the {@link primaryContactEmailIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL_IS_PRIVATE: fieldBuilder.buildEnumField(
          'PrimaryContactEmailIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link totalApplications} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_APPLICATIONS: fieldBuilder.buildEdmTypeField(
          'TotalApplications',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link primaryContactFaxDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFaxDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactTwitterDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTwitterDescription',
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
         * Static representation of the {@link applicantType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICANT_TYPE: fieldBuilder.buildEnumField(
          'ApplicantType',
          HcmApplicantType,
          true
        ),
        /**
         * Static representation of the {@link addressIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_IS_PRIVATE: fieldBuilder.buildEnumField(
          'AddressIsPrivate',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Applicants)
      };
    }

    return this._schema;
  }
}
