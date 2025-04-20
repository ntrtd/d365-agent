/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonalContactPeople } from './PersonalContactPeople';
import { PersonalContactPeopleRequestBuilder } from './PersonalContactPeopleRequestBuilder';
import { RelationshipTypesApi } from './RelationshipTypesApi';
import { WorkersApi } from './WorkersApi';
import { HcmPersonGender } from './HcmPersonGender';
import { NoYes } from './NoYes';
import { HcmPrimarySecondary } from './HcmPrimarySecondary';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PersonalContactPeopleApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PersonalContactPeople<DeSerializersT>, DeSerializersT>
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
  ): PersonalContactPeopleApi<DeSerializersT> {
    return new PersonalContactPeopleApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link personalContactPersonRelationshipType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONAL_CONTACT_PERSON_RELATIONSHIP_TYPE: OneToOneLink<
      PersonalContactPeople<DeSerializersT>,
      DeSerializersT,
      RelationshipTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personalContactPersonWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONAL_CONTACT_PERSON_WORKER: OneToOneLink<
      PersonalContactPeople<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RelationshipTypesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PERSONAL_CONTACT_PERSON_RELATIONSHIP_TYPE: new OneToOneLink(
        'PersonalContactPersonRelationshipType',
        this,
        linkedApis[0]
      ),
      PERSONAL_CONTACT_PERSON_WORKER: new OneToOneLink(
        'PersonalContactPersonWorker',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = PersonalContactPeople;

  requestBuilder(): PersonalContactPeopleRequestBuilder<DeSerializersT> {
    return new PersonalContactPeopleRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PersonalContactPeople<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PersonalContactPeople<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PersonalContactPeople<DeSerializersT>,
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
    typeof PersonalContactPeople,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PersonalContactPeople,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTACT_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RELATIONSHIP_TYPE: OrderableEdmTypeField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RELATIONSHIP_VALID_FROM: OrderableEdmTypeField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONTACT_LAST_NAME: OrderableEdmTypeField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENDER: EnumField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      HcmPersonGender,
      true,
      true
    >;
    CONTACT_FIRST_NAME: OrderableEdmTypeField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEPENDENT: EnumField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISABLED_VERIFICATION_DATE: OrderableEdmTypeField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPENDENT_COURT_ORDERED_EXPIRATION_DATE: OrderableEdmTypeField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_BENEFICIARY: EnumField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTACT_LAST_NAME_PREFIX: OrderableEdmTypeField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_DATE: OrderableEdmTypeField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_DEPENDENT_DOMESTIC_PARTNER_VERIFIED: EnumField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_DISABLED: EnumField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTACT_MIDDLE_NAME: OrderableEdmTypeField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FULLTIME_STUDENT: EnumField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMERGENCY_CONTACT_PRIMARY_SECONDARY: EnumField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      HcmPrimarySecondary,
      true,
      true
    >;
    RELATIONSHIP_VALID_TO: OrderableEdmTypeField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_EMERGENCY_CONTACT: EnumField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_DEPENDENT_COURT_ORDERED: EnumField<
      PersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personalContactPersonRelationshipType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONAL_CONTACT_PERSON_RELATIONSHIP_TYPE: OneToOneLink<
      PersonalContactPeople<DeSerializersT>,
      DeSerializersT,
      RelationshipTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personalContactPersonWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONAL_CONTACT_PERSON_WORKER: OneToOneLink<
      PersonalContactPeople<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PersonalContactPeople<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link workerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerPersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link contactPersonPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContactPersonPartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link relationshipType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIONSHIP_TYPE: fieldBuilder.buildEdmTypeField(
          'RelationshipType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link relationshipValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIONSHIP_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'RelationshipValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link contactLastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_LAST_NAME: fieldBuilder.buildEdmTypeField(
          'ContactLastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENDER: fieldBuilder.buildEnumField('Gender', HcmPersonGender, true),
        /**
         * Static representation of the {@link contactFirstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'ContactFirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDependent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEPENDENT: fieldBuilder.buildEnumField('IsDependent', NoYes, true),
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
         * Static representation of the {@link dependentCourtOrderedExpirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_COURT_ORDERED_EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'DependentCourtOrderedExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isBeneficiary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BENEFICIARY: fieldBuilder.buildEnumField(
          'IsBeneficiary',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link contactLastNamePrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_LAST_NAME_PREFIX: fieldBuilder.buildEdmTypeField(
          'ContactLastNamePrefix',
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
         * Static representation of the {@link isDependentDomesticPartnerVerified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEPENDENT_DOMESTIC_PARTNER_VERIFIED: fieldBuilder.buildEnumField(
          'IsDependentDomesticPartnerVerified',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isDisabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DISABLED: fieldBuilder.buildEnumField('IsDisabled', NoYes, true),
        /**
         * Static representation of the {@link contactMiddleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'ContactMiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isFulltimeStudent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FULLTIME_STUDENT: fieldBuilder.buildEnumField(
          'IsFulltimeStudent',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link emergencyContactPrimarySecondary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMERGENCY_CONTACT_PRIMARY_SECONDARY: fieldBuilder.buildEnumField(
          'EmergencyContactPrimarySecondary',
          HcmPrimarySecondary,
          true
        ),
        /**
         * Static representation of the {@link relationshipValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIONSHIP_VALID_TO: fieldBuilder.buildEdmTypeField(
          'RelationshipValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isEmergencyContact} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EMERGENCY_CONTACT: fieldBuilder.buildEnumField(
          'IsEmergencyContact',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isDependentCourtOrdered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEPENDENT_COURT_ORDERED: fieldBuilder.buildEnumField(
          'IsDependentCourtOrdered',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PersonalContactPeople)
      };
    }

    return this._schema;
  }
}
