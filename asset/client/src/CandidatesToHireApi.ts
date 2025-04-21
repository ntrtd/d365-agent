/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CandidatesToHire } from './CandidatesToHire';
import { CandidatesToHireRequestBuilder } from './CandidatesToHireRequestBuilder';
import { PeopleApi } from './PeopleApi';
import { VeteranStatusesApi } from './VeteranStatusesApi';
import { PositionsV2Api } from './PositionsV2Api';
import { RecruitingRequestsApi } from './RecruitingRequestsApi';
import { ReasonCodesApi } from './ReasonCodesApi';
import { HcmPersonGender } from './HcmPersonGender';
import { NoYes } from './NoYes';
import { HcmApplicantIntegrationResult } from './HcmApplicantIntegrationResult';
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
export class CandidatesToHireApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CandidatesToHire<DeSerializersT>, DeSerializersT>
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
  ): CandidatesToHireApi<DeSerializersT> {
    return new CandidatesToHireApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link personRelation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_RELATION: OneToOneLink<
      CandidatesToHire<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link veteranStatusRelation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VETERAN_STATUS_RELATION: OneToOneLink<
      CandidatesToHire<DeSerializersT>,
      DeSerializersT,
      VeteranStatusesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      CandidatesToHire<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link recruitingRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST: OneToOneLink<
      CandidatesToHire<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      CandidatesToHire<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PeopleApi<DeSerializersT>,
      VeteranStatusesApi<DeSerializersT>,
      PositionsV2Api<DeSerializersT>,
      RecruitingRequestsApi<DeSerializersT>,
      ReasonCodesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PERSON_RELATION: new OneToOneLink('PersonRelation', this, linkedApis[0]),
      VETERAN_STATUS_RELATION: new OneToOneLink(
        'VeteranStatusRelation',
        this,
        linkedApis[1]
      ),
      POSITION: new OneToOneLink('Position', this, linkedApis[2]),
      RECRUITING_REQUEST: new OneToOneLink(
        'RecruitingRequest',
        this,
        linkedApis[3]
      ),
      REASON_CODE: new OneToOneLink('ReasonCode', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = CandidatesToHire;

  requestBuilder(): CandidatesToHireRequestBuilder<DeSerializersT> {
    return new CandidatesToHireRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CandidatesToHire<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CandidatesToHire<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CandidatesToHire<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CandidatesToHire, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CandidatesToHire,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CANDIDATE_ID: OrderableEdmTypeField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MILITARY_SERVICE_END_DATE: OrderableEdmTypeField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GENDER: EnumField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      HcmPersonGender,
      true,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WILLING_TO_RELOCATE: EnumField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSITION_ID: OrderableEdmTypeField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPLICANT_INTEGRATION_RESULT: EnumField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      HcmApplicantIntegrationResult,
      true,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AVAILABILITY_DATE: OrderableEdmTypeField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DO_NOT_HIRE_REASON_CODE_ID: OrderableEdmTypeField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DISABLED_VETERAN: EnumField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECRUITING_REQUEST_ID: OrderableEdmTypeField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_TYPE: OrderableEdmTypeField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME_PREFIX: OrderableEdmTypeField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_DATE: OrderableEdmTypeField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ETHNIC_ORIGIN_ID: OrderableEdmTypeField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MILITARY_SERVICE_START_DATE: OrderableEdmTypeField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MIDDLE_NAME: OrderableEdmTypeField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITIZENSHIP_COUNTRY_CODE: OrderableEdmTypeField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VETERAN_STATUS_ID: OrderableEdmTypeField<
      CandidatesToHire<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personRelation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_RELATION: OneToOneLink<
      CandidatesToHire<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link veteranStatusRelation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VETERAN_STATUS_RELATION: OneToOneLink<
      CandidatesToHire<DeSerializersT>,
      DeSerializersT,
      VeteranStatusesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      CandidatesToHire<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link recruitingRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST: OneToOneLink<
      CandidatesToHire<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      CandidatesToHire<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CandidatesToHire<DeSerializers>>;
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
         * Static representation of the {@link candidateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANDIDATE_ID: fieldBuilder.buildEdmTypeField(
          'CandidateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link militaryServiceEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILITARY_SERVICE_END_DATE: fieldBuilder.buildEdmTypeField(
          'MilitaryServiceEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link gender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENDER: fieldBuilder.buildEnumField('Gender', HcmPersonGender, true),
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
         * Static representation of the {@link isWillingToRelocate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WILLING_TO_RELOCATE: fieldBuilder.buildEnumField(
          'IsWillingToRelocate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link positionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ID: fieldBuilder.buildEdmTypeField(
          'PositionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link applicantIntegrationResult} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICANT_INTEGRATION_RESULT: fieldBuilder.buildEnumField(
          'ApplicantIntegrationResult',
          HcmApplicantIntegrationResult,
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
         * Static representation of the {@link availabilityDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVAILABILITY_DATE: fieldBuilder.buildEdmTypeField(
          'AvailabilityDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link doNotHireReasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DO_NOT_HIRE_REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'DoNotHireReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDisabledVeteran} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DISABLED_VETERAN: fieldBuilder.buildEnumField(
          'IsDisabledVeteran',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link recruitingRequestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECRUITING_REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'RecruitingRequestId',
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
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
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
         * Static representation of the {@link birthDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_DATE: fieldBuilder.buildEdmTypeField(
          'BirthDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link ethnicOriginId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ETHNIC_ORIGIN_ID: fieldBuilder.buildEdmTypeField(
          'EthnicOriginId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link militaryServiceStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILITARY_SERVICE_START_DATE: fieldBuilder.buildEdmTypeField(
          'MilitaryServiceStartDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link citizenshipCountryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITIZENSHIP_COUNTRY_CODE: fieldBuilder.buildEdmTypeField(
          'CitizenshipCountryCode',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CandidatesToHire)
      };
    }

    return this._schema;
  }
}
