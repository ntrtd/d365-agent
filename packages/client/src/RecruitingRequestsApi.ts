/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RecruitingRequests } from './RecruitingRequests';
import { RecruitingRequestsRequestBuilder } from './RecruitingRequestsRequestBuilder';
import { RecruitingRequestSkillsApi } from './RecruitingRequestSkillsApi';
import { RecruitingRequestPositionsApi } from './RecruitingRequestPositionsApi';
import { RecruitingRequestEducationsApi } from './RecruitingRequestEducationsApi';
import { CandidatesToHireApi } from './CandidatesToHireApi';
import { TitlesApi } from './TitlesApi';
import { CompensationLevelsApi } from './CompensationLevelsApi';
import { JobsApi } from './JobsApi';
import { RecruitingRequestLocationsApi } from './RecruitingRequestLocationsApi';
import { PeopleApi } from './PeopleApi';
import { BaseWorkersApi } from './BaseWorkersApi';
import { JobTypesApi } from './JobTypesApi';
import { HcmRecruitingRequestStatus } from './HcmRecruitingRequestStatus';
import { HcmJobTypeExemptStatus } from './HcmJobTypeExemptStatus';
import { NoYes } from './NoYes';
import { HcmRegulatoryJobCategory } from './HcmRegulatoryJobCategory';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RecruitingRequestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RecruitingRequests<DeSerializersT>, DeSerializersT>
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
  ): RecruitingRequestsApi<DeSerializersT> {
    return new RecruitingRequestsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestSkills} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_SKILLS: OneToManyLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestPositions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_POSITIONS: OneToManyLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestEducations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_EDUCATIONS: OneToManyLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestEducationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link candidatesToHire} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CANDIDATES_TO_HIRE: OneToManyLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      CandidatesToHireApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link title} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TITLE: OneToOneLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      TitlesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_LEVEL: OneToOneLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      CompensationLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link recruitingRequestLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_LOCATION: OneToOneLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link recruiter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITER: OneToOneLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hiringManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HIRING_MANAGER: OneToOneLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TYPE: OneToOneLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      JobTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RecruitingRequestSkillsApi<DeSerializersT>,
      RecruitingRequestPositionsApi<DeSerializersT>,
      RecruitingRequestEducationsApi<DeSerializersT>,
      CandidatesToHireApi<DeSerializersT>,
      TitlesApi<DeSerializersT>,
      CompensationLevelsApi<DeSerializersT>,
      JobsApi<DeSerializersT>,
      RecruitingRequestLocationsApi<DeSerializersT>,
      PeopleApi<DeSerializersT>,
      BaseWorkersApi<DeSerializersT>,
      JobTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RECRUITING_REQUEST_SKILLS: new OneToManyLink(
        'RecruitingRequestSkills',
        this,
        linkedApis[0]
      ),
      RECRUITING_REQUEST_POSITIONS: new OneToManyLink(
        'RecruitingRequestPositions',
        this,
        linkedApis[1]
      ),
      RECRUITING_REQUEST_EDUCATIONS: new OneToManyLink(
        'RecruitingRequestEducations',
        this,
        linkedApis[2]
      ),
      CANDIDATES_TO_HIRE: new OneToManyLink(
        'CandidatesToHire',
        this,
        linkedApis[3]
      ),
      TITLE: new OneToOneLink('Title', this, linkedApis[4]),
      COMPENSATION_LEVEL: new OneToOneLink(
        'CompensationLevel',
        this,
        linkedApis[5]
      ),
      JOB: new OneToOneLink('Job', this, linkedApis[6]),
      RECRUITING_REQUEST_LOCATION: new OneToOneLink(
        'RecruitingRequestLocation',
        this,
        linkedApis[7]
      ),
      RECRUITER: new OneToOneLink('Recruiter', this, linkedApis[8]),
      HIRING_MANAGER: new OneToOneLink('HiringManager', this, linkedApis[9]),
      JOB_TYPE: new OneToOneLink('JobType', this, linkedApis[10])
    };
    return this;
  }

  entityConstructor = RecruitingRequests;

  requestBuilder(): RecruitingRequestsRequestBuilder<DeSerializersT> {
    return new RecruitingRequestsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RecruitingRequests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RecruitingRequests<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RecruitingRequests<DeSerializersT>,
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
    typeof RecruitingRequests,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RecruitingRequests,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECRUITING_REQUEST_ID: OrderableEdmTypeField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HIRING_MANAGER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPENSATION_HIGH_THRESHOLD: OrderableEdmTypeField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_FULL_TIME_EQUIVALENCY: OrderableEdmTypeField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATUS: EnumField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      HcmRecruitingRequestStatus,
      true,
      true
    >;
    JOB_ID: OrderableEdmTypeField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_DESCRIPTION: OrderableEdmTypeField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLE_ID: OrderableEdmTypeField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXEMPT_STATUS: EnumField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      HcmJobTypeExemptStatus,
      true,
      true
    >;
    COMPENSATION_CONTROL_POINT: OrderableEdmTypeField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECRUITING_REQUEST_LOCATION_ID: OrderableEdmTypeField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECRUITING_REQUEST_PUBLISH: EnumField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOB_FUNCTION_ID: OrderableEdmTypeField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIRING_MANAGER_EMAIL_ID: OrderableEdmTypeField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULATORY_JOB_CATEGORY: EnumField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      HcmRegulatoryJobCategory,
      true,
      true
    >;
    COMPENSATION_LEVEL_ID: OrderableEdmTypeField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPENSATION_LOW_THRESHOLD: OrderableEdmTypeField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECRUITER_PARTY_NUMBER: OrderableEdmTypeField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECRUITER_EMAIL_ID: OrderableEdmTypeField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESTIMATED_START_DATE: OrderableEdmTypeField<
      RecruitingRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestSkills} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_SKILLS: OneToManyLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestPositions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_POSITIONS: OneToManyLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestEducations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_EDUCATIONS: OneToManyLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestEducationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link candidatesToHire} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CANDIDATES_TO_HIRE: OneToManyLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      CandidatesToHireApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link title} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TITLE: OneToOneLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      TitlesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_LEVEL: OneToOneLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      CompensationLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link recruitingRequestLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_LOCATION: OneToOneLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link recruiter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITER: OneToOneLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hiringManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HIRING_MANAGER: OneToOneLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TYPE: OneToOneLink<
      RecruitingRequests<DeSerializersT>,
      DeSerializersT,
      JobTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RecruitingRequests<DeSerializers>>;
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
         * Static representation of the {@link recruitingRequestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECRUITING_REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'RecruitingRequestId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link hiringManagerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIRING_MANAGER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'HiringManagerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link compensationHighThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_HIGH_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'CompensationHighThreshold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultFullTimeEquivalency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FULL_TIME_EQUIVALENCY: fieldBuilder.buildEdmTypeField(
          'DefaultFullTimeEquivalency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          HcmRecruitingRequestStatus,
          true
        ),
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', true),
        /**
         * Static representation of the {@link externalDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ExternalDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link titleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE_ID: fieldBuilder.buildEdmTypeField('TitleId', 'Edm.String', true),
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
         * Static representation of the {@link exemptStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_STATUS: fieldBuilder.buildEnumField(
          'ExemptStatus',
          HcmJobTypeExemptStatus,
          true
        ),
        /**
         * Static representation of the {@link compensationControlPoint} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_CONTROL_POINT: fieldBuilder.buildEdmTypeField(
          'CompensationControlPoint',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link recruitingRequestLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECRUITING_REQUEST_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'RecruitingRequestLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'JobTypeId',
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
         * Static representation of the {@link recruitingRequestPublish} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECRUITING_REQUEST_PUBLISH: fieldBuilder.buildEnumField(
          'RecruitingRequestPublish',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link jobFunctionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_FUNCTION_ID: fieldBuilder.buildEdmTypeField(
          'JobFunctionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hiringManagerEmailId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIRING_MANAGER_EMAIL_ID: fieldBuilder.buildEdmTypeField(
          'HiringManagerEmailId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link regulatoryJobCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATORY_JOB_CATEGORY: fieldBuilder.buildEnumField(
          'RegulatoryJobCategory',
          HcmRegulatoryJobCategory,
          true
        ),
        /**
         * Static representation of the {@link compensationLevelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_LEVEL_ID: fieldBuilder.buildEdmTypeField(
          'CompensationLevelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link compensationLowThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_LOW_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'CompensationLowThreshold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link recruiterPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECRUITER_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'RecruiterPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recruiterEmailId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECRUITER_EMAIL_ID: fieldBuilder.buildEdmTypeField(
          'RecruiterEmailId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link estimatedStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_START_DATE: fieldBuilder.buildEdmTypeField(
          'EstimatedStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RecruitingRequests)
      };
    }

    return this._schema;
  }
}
