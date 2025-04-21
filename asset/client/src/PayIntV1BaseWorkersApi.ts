/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1BaseWorkers } from './PayIntV1BaseWorkers';
import { PayIntV1BaseWorkersRequestBuilder } from './PayIntV1BaseWorkersRequestBuilder';
import { HcmPersonGender } from './HcmPersonGender';
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
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class PayIntV1BaseWorkersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayIntV1BaseWorkers<DeSerializersT>, DeSerializersT>
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
  ): PayIntV1BaseWorkersApi<DeSerializersT> {
    return new PayIntV1BaseWorkersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PayIntV1BaseWorkers;

  requestBuilder(): PayIntV1BaseWorkersRequestBuilder<DeSerializersT> {
    return new PayIntV1BaseWorkersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1BaseWorkers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PayIntV1BaseWorkers<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayIntV1BaseWorkers<DeSerializersT>,
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
    typeof PayIntV1BaseWorkers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayIntV1BaseWorkers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GENDER: EnumField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      HcmPersonGender,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_TYPE: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_SEQUENCE_DISPLAY_AS: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITIZENSHIP_COUNTRY_REGION: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFESSIONAL_SUFFIX: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFESSIONAL_TITLE: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ETHNIC_ORIGIN_ID: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_DATE: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DISABLED_VERIFICATION_DATE: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NAME_VALID_FROM: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MOTHER_BIRTH_COUNTRY_REGION: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_REHIRE: EnumField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PHONETIC_FIRST_NAME: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATIVE_LANGUAGE_ID: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EDUCATION: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME_PREFIX: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DECEASED_DATE: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    KNOWN_AS: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_LOCATION_ID: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_BIRTH_COUNTRY_REGION: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONETIC_MIDDLE_NAME: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATIONALITY_COUNTRY_REGION: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_VALID_TO: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERSON_BIRTH_CITY: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIDDLE_NAME: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FATHER_BIRTH_COUNTRY_REGION: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONETIC_LAST_NAME: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_ALIAS: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DISABLED: EnumField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_FULLTIME_STUDENT: EnumField<
      PayIntV1BaseWorkers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<PayIntV1BaseWorkers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link gender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENDER: fieldBuilder.buildEnumField('Gender', HcmPersonGender, true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link nameSequenceDisplayAs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_SEQUENCE_DISPLAY_AS: fieldBuilder.buildEdmTypeField(
          'NameSequenceDisplayAs',
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
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
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
         * Static representation of the {@link lastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME: fieldBuilder.buildEdmTypeField(
          'LastName',
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
         * Static representation of the {@link professionalTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFESSIONAL_TITLE: fieldBuilder.buildEdmTypeField(
          'ProfessionalTitle',
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
         * Static representation of the {@link ethnicOriginId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ETHNIC_ORIGIN_ID: fieldBuilder.buildEdmTypeField(
          'EthnicOriginId',
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
         * Static representation of the {@link disabledVerificationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISABLED_VERIFICATION_DATE: fieldBuilder.buildEdmTypeField(
          'DisabledVerificationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link nameValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'NameValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link motherBirthCountryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOTHER_BIRTH_COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'MotherBirthCountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowRehire} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_REHIRE: fieldBuilder.buildEnumField('AllowRehire', NoYes, true),
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
         * Static representation of the {@link nativeLanguageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIVE_LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'NativeLanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link education} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDUCATION: fieldBuilder.buildEdmTypeField(
          'Education',
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
         * Static representation of the {@link deceasedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECEASED_DATE: fieldBuilder.buildEdmTypeField(
          'DeceasedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link knownAs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KNOWN_AS: fieldBuilder.buildEdmTypeField('KnownAs', 'Edm.String', true),
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
         * Static representation of the {@link personBirthCountryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_BIRTH_COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'PersonBirthCountryRegion',
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
         * Static representation of the {@link nationalityCountryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIONALITY_COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'NationalityCountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_VALID_TO: fieldBuilder.buildEdmTypeField(
          'NameValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link personBirthCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_BIRTH_CITY: fieldBuilder.buildEdmTypeField(
          'PersonBirthCity',
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
         * Static representation of the {@link fatherBirthCountryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FATHER_BIRTH_COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'FatherBirthCountryRegion',
          'Edm.String',
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
         * Static representation of the {@link nameAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_ALIAS: fieldBuilder.buildEdmTypeField(
          'NameAlias',
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
         * Static representation of the {@link isDisabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DISABLED: fieldBuilder.buildEnumField('IsDisabled', NoYes, true),
        /**
         * Static representation of the {@link isFulltimeStudent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FULLTIME_STUDENT: fieldBuilder.buildEnumField(
          'IsFulltimeStudent',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayIntV1BaseWorkers)
      };
    }

    return this._schema;
  }
}
