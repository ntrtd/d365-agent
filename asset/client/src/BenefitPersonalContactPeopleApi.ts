/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitPersonalContactPeople } from './BenefitPersonalContactPeople';
import { BenefitPersonalContactPeopleRequestBuilder } from './BenefitPersonalContactPeopleRequestBuilder';
import { RelationshipTypesApi } from './RelationshipTypesApi';
import { WorkersApi } from './WorkersApi';
import { HcmPersonGender } from './HcmPersonGender';
import { NoYes } from './NoYes';
import { BenefitDocumentationStatus } from './BenefitDocumentationStatus';
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
export class BenefitPersonalContactPeopleApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BenefitPersonalContactPeople<DeSerializersT>, DeSerializersT>
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
  ): BenefitPersonalContactPeopleApi<DeSerializersT> {
    return new BenefitPersonalContactPeopleApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitPersonalContactPersonRelationshipType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PERSONAL_CONTACT_PERSON_RELATIONSHIP_TYPE: OneToOneLink<
      BenefitPersonalContactPeople<DeSerializersT>,
      DeSerializersT,
      RelationshipTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitPersonalContactPersonWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PERSONAL_CONTACT_PERSON_WORKER: OneToOneLink<
      BenefitPersonalContactPeople<DeSerializersT>,
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
      BENEFIT_PERSONAL_CONTACT_PERSON_RELATIONSHIP_TYPE: new OneToOneLink(
        'BenefitPersonalContactPersonRelationshipType',
        this,
        linkedApis[0]
      ),
      BENEFIT_PERSONAL_CONTACT_PERSON_WORKER: new OneToOneLink(
        'BenefitPersonalContactPersonWorker',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BenefitPersonalContactPeople;

  requestBuilder(): BenefitPersonalContactPeopleRequestBuilder<DeSerializersT> {
    return new BenefitPersonalContactPeopleRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitPersonalContactPeople<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitPersonalContactPeople<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitPersonalContactPeople<DeSerializersT>,
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
    typeof BenefitPersonalContactPeople,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitPersonalContactPeople,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTACT_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RELATIONSHIP_TYPE: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RELATIONSHIP_VALID_FROM: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPENDENT_DETAILS_ADOPTION_DATE: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GENDER: EnumField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      HcmPersonGender,
      true,
      true
    >;
    CONTACT_MIDDLE_NAME: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPENDENT_VALID_TO: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPENDENT_DETAILS_DOCUMENTATION_VERIFICATION_DATE: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPENDENT_DETAILS_LOSS_OF_COVERAGE_EFFECTIVE_DATE: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BENEFICIARY_VALID_FROM: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPENDENT_DETAILS_EMPLOYED: EnumField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEPENDENT_DETAILS_OVER_AGED_DEPENDENT: EnumField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTACT_FIRST_NAME: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPENDENT_DETAILS_OTHER_INSURANCE_COVERAGE: EnumField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTACT_LAST_NAME_PREFIX: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPENDENT_DETAILS_HAS_LEAVE_OF_ABSENCE: EnumField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BENEFICIARY_VALID_TO: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RELATIONSHIP_VALID_TO: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPENDENT_DETAILS_HAS_LOSS_OF_COVERAGE: EnumField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BIRTH_DATE: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_DEPENDENT_DOMESTIC_PARTNER_VERIFIED: EnumField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_DEPENDENT: EnumField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEPENDENT_DETAILS_EMPLOYEE_ADDRESS: EnumField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISABLED_VERIFICATION_DATE: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPENDENT_VALID_FROM: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPENDENT_COURT_ORDERED_EXPIRATION_DATE: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPENDENT_DETAILS_MEDICARE_EFFECTIVE_DATE: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_BENEFICIARY: EnumField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEPENDENT_COURT_ORDERED_EFFECTIVE_DATE: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPENDENT_DETAILS_WEDDING_DATE: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPENDENT_DETAILS_HAS_DOCUMENTATION: EnumField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTACT_LAST_NAME: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPENDENT_DETAILS_DOCUMENTATION_STATUS: EnumField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      BenefitDocumentationStatus,
      true,
      true
    >;
    DEPENDENT_DETAILS_LEAVE_OF_ABSENCE_EXPIRATION_DATE: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPENDENT_DETAILS_LEAVE_OF_ABSENCE_EFFECTIVE_DATE: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPENDENT_DETAILS_NICKNAME: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPENDENT_DETAILS_DEFAULT_DESIGNEE: EnumField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEPENDENT_DETAILS_DIVORCE_DATE: OrderableEdmTypeField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMERGENCY_CONTACT_PRIMARY_SECONDARY: EnumField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      HcmPrimarySecondary,
      true,
      true
    >;
    IS_PRIMARY_BENEFICIARY: EnumField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEPENDENT_DETAILS_SMOKER: EnumField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_DEPENDENT_COURT_ORDERED: EnumField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_EMERGENCY_CONTACT: EnumField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_DISABLED: EnumField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_FULLTIME_STUDENT: EnumField<
      BenefitPersonalContactPeople<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitPersonalContactPersonRelationshipType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PERSONAL_CONTACT_PERSON_RELATIONSHIP_TYPE: OneToOneLink<
      BenefitPersonalContactPeople<DeSerializersT>,
      DeSerializersT,
      RelationshipTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitPersonalContactPersonWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PERSONAL_CONTACT_PERSON_WORKER: OneToOneLink<
      BenefitPersonalContactPeople<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitPersonalContactPeople<DeSerializers>>;
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
         * Static representation of the {@link dependentDetailsAdoptionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_DETAILS_ADOPTION_DATE: fieldBuilder.buildEdmTypeField(
          'DependentDetailsAdoptionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link gender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENDER: fieldBuilder.buildEnumField('Gender', HcmPersonGender, true),
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
         * Static representation of the {@link dependentValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_VALID_TO: fieldBuilder.buildEdmTypeField(
          'DependentValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dependentDetailsDocumentationVerificationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_DETAILS_DOCUMENTATION_VERIFICATION_DATE:
          fieldBuilder.buildEdmTypeField(
            'DependentDetailsDocumentationVerificationDate',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link dependentDetailsLossOfCoverageEffectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_DETAILS_LOSS_OF_COVERAGE_EFFECTIVE_DATE:
          fieldBuilder.buildEdmTypeField(
            'DependentDetailsLossOfCoverageEffectiveDate',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link beneficiaryValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFICIARY_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'BeneficiaryValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dependentDetailsEmployed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_DETAILS_EMPLOYED: fieldBuilder.buildEnumField(
          'DependentDetailsEmployed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dependentDetailsOverAgedDependent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_DETAILS_OVER_AGED_DEPENDENT: fieldBuilder.buildEnumField(
          'DependentDetailsOverAgedDependent',
          NoYes,
          true
        ),
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
         * Static representation of the {@link dependentDetailsOtherInsuranceCoverage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_DETAILS_OTHER_INSURANCE_COVERAGE: fieldBuilder.buildEnumField(
          'DependentDetailsOtherInsuranceCoverage',
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
         * Static representation of the {@link dependentDetailsHasLeaveOfAbsence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_DETAILS_HAS_LEAVE_OF_ABSENCE: fieldBuilder.buildEnumField(
          'DependentDetailsHasLeaveOfAbsence',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link beneficiaryValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFICIARY_VALID_TO: fieldBuilder.buildEdmTypeField(
          'BeneficiaryValidTo',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link dependentDetailsHasLossOfCoverage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_DETAILS_HAS_LOSS_OF_COVERAGE: fieldBuilder.buildEnumField(
          'DependentDetailsHasLossOfCoverage',
          NoYes,
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
         * Static representation of the {@link isDependent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEPENDENT: fieldBuilder.buildEnumField('IsDependent', NoYes, true),
        /**
         * Static representation of the {@link dependentDetailsEmployeeAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_DETAILS_EMPLOYEE_ADDRESS: fieldBuilder.buildEnumField(
          'DependentDetailsEmployeeAddress',
          NoYes,
          true
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
         * Static representation of the {@link dependentValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'DependentValidFrom',
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
         * Static representation of the {@link dependentDetailsMedicareEffectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_DETAILS_MEDICARE_EFFECTIVE_DATE:
          fieldBuilder.buildEdmTypeField(
            'DependentDetailsMedicareEffectiveDate',
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
         * Static representation of the {@link dependentCourtOrderedEffectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_COURT_ORDERED_EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'DependentCourtOrderedEffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dependentDetailsWeddingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_DETAILS_WEDDING_DATE: fieldBuilder.buildEdmTypeField(
          'DependentDetailsWeddingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dependentDetailsHasDocumentation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_DETAILS_HAS_DOCUMENTATION: fieldBuilder.buildEnumField(
          'DependentDetailsHasDocumentation',
          NoYes,
          true
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
         * Static representation of the {@link dependentDetailsDocumentationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_DETAILS_DOCUMENTATION_STATUS: fieldBuilder.buildEnumField(
          'DependentDetailsDocumentationStatus',
          BenefitDocumentationStatus,
          true
        ),
        /**
         * Static representation of the {@link dependentDetailsLeaveOfAbsenceExpirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_DETAILS_LEAVE_OF_ABSENCE_EXPIRATION_DATE:
          fieldBuilder.buildEdmTypeField(
            'DependentDetailsLeaveOfAbsenceExpirationDate',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link dependentDetailsLeaveOfAbsenceEffectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_DETAILS_LEAVE_OF_ABSENCE_EFFECTIVE_DATE:
          fieldBuilder.buildEdmTypeField(
            'DependentDetailsLeaveOfAbsenceEffectiveDate',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link dependentDetailsNickname} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_DETAILS_NICKNAME: fieldBuilder.buildEdmTypeField(
          'DependentDetailsNickname',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dependentDetailsDefaultDesignee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_DETAILS_DEFAULT_DESIGNEE: fieldBuilder.buildEnumField(
          'DependentDetailsDefaultDesignee',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dependentDetailsDivorceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_DETAILS_DIVORCE_DATE: fieldBuilder.buildEdmTypeField(
          'DependentDetailsDivorceDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link isPrimaryBeneficiary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY_BENEFICIARY: fieldBuilder.buildEnumField(
          'IsPrimaryBeneficiary',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dependentDetailsSmoker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_DETAILS_SMOKER: fieldBuilder.buildEnumField(
          'DependentDetailsSmoker',
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
        ALL_FIELDS: new AllFields('*', BenefitPersonalContactPeople)
      };
    }

    return this._schema;
  }
}
