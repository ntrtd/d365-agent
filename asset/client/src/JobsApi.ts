/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Jobs } from './Jobs';
import { JobsRequestBuilder } from './JobsRequestBuilder';
import { JobPreferredSkillsApi } from './JobPreferredSkillsApi';
import { PayIntV1HcmPositionDetailsApi } from './PayIntV1HcmPositionDetailsApi';
import { CompensationEligibilityRulesApi } from './CompensationEligibilityRulesApi';
import { PositionDetailsApi } from './PositionDetailsApi';
import { JobPreferredExamsApi } from './JobPreferredExamsApi';
import { JobAdaRequirementsApi } from './JobAdaRequirementsApi';
import { JobTaskAssignmentsApi } from './JobTaskAssignmentsApi';
import { AdaRequirementReportsApi } from './AdaRequirementReportsApi';
import { RecruitingProjectsApi } from './RecruitingProjectsApi';
import { TitlesApi } from './TitlesApi';
import { CompensationLevelsApi } from './CompensationLevelsApi';
import { JobFamiliesApi } from './JobFamiliesApi';
import { SurveyCompaniesApi } from './SurveyCompaniesApi';
import { PayIntV1JobDetailsApi } from './PayIntV1JobDetailsApi';
import { JobDetailsApi } from './JobDetailsApi';
import { JobPreferredEducationDisciplinesApi } from './JobPreferredEducationDisciplinesApi';
import { JobCompensationsApi } from './JobCompensationsApi';
import { JobPreferredScreeningsApi } from './JobPreferredScreeningsApi';
import { PositionsApi } from './PositionsApi';
import { ApplicationsApi } from './ApplicationsApi';
import { PositionsV2Api } from './PositionsV2Api';
import { RecruitingRequestsApi } from './RecruitingRequestsApi';
import { JobPreferredCertificatesApi } from './JobPreferredCertificatesApi';
import { JobResponsibilitiesApi } from './JobResponsibilitiesApi';
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
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class JobsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Jobs<DeSerializersT>, DeSerializersT>
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
  ): JobsApi<DeSerializersT> {
    return new JobsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredSkills} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_SKILLS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobPreferredSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntPositionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_POSITION_DETAILS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationEligibilityRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_ELIGIBILITY_RULES: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      CompensationEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_DETAILS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      PositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredExam} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_EXAM: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobPreferredExamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobAdaRequirement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_ADA_REQUIREMENT: OneToOneLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobAdaRequirementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTaskAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TASK_ASSIGNMENTS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobTaskAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobAdaRequirementReport} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_ADA_REQUIREMENT_REPORT: OneToOneLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      AdaRequirementReportsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_TABLE: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      RecruitingProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link title} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TITLE: OneToOneLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      TitlesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_LEVEL: OneToOneLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      CompensationLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobFamily} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_FAMILY: OneToOneLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobFamiliesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link surveyCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SURVEY_COMPANY: OneToOneLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      SurveyCompaniesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_DETAILS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      PayIntV1JobDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link details} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DETAILS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredEducationDisciplines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_EDUCATION_DISCIPLINES: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobPreferredEducationDisciplinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobCompensations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_COMPENSATIONS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobCompensationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredScreenings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_SCREENINGS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobPreferredScreeningsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      PositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link applications} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPLICATIONS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      ApplicationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS_V_2: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUESTS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredCertificates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_CERTIFICATES: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobPreferredCertificatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobResponsibilities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_RESPONSIBILITIES: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobResponsibilitiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JobPreferredSkillsApi<DeSerializersT>,
      PayIntV1HcmPositionDetailsApi<DeSerializersT>,
      CompensationEligibilityRulesApi<DeSerializersT>,
      PositionDetailsApi<DeSerializersT>,
      JobPreferredExamsApi<DeSerializersT>,
      JobAdaRequirementsApi<DeSerializersT>,
      JobTaskAssignmentsApi<DeSerializersT>,
      AdaRequirementReportsApi<DeSerializersT>,
      RecruitingProjectsApi<DeSerializersT>,
      TitlesApi<DeSerializersT>,
      CompensationLevelsApi<DeSerializersT>,
      JobFamiliesApi<DeSerializersT>,
      SurveyCompaniesApi<DeSerializersT>,
      PayIntV1JobDetailsApi<DeSerializersT>,
      JobDetailsApi<DeSerializersT>,
      JobPreferredEducationDisciplinesApi<DeSerializersT>,
      JobCompensationsApi<DeSerializersT>,
      JobPreferredScreeningsApi<DeSerializersT>,
      PositionsApi<DeSerializersT>,
      ApplicationsApi<DeSerializersT>,
      PositionsV2Api<DeSerializersT>,
      RecruitingRequestsApi<DeSerializersT>,
      JobPreferredCertificatesApi<DeSerializersT>,
      JobResponsibilitiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOB_PREFERRED_SKILLS: new OneToManyLink(
        'JobPreferredSkills',
        this,
        linkedApis[0]
      ),
      PAY_INT_POSITION_DETAILS: new OneToManyLink(
        'PayIntPositionDetails',
        this,
        linkedApis[1]
      ),
      COMPENSATION_ELIGIBILITY_RULES: new OneToManyLink(
        'CompensationEligibilityRules',
        this,
        linkedApis[2]
      ),
      POSITION_DETAILS: new OneToManyLink(
        'PositionDetails',
        this,
        linkedApis[3]
      ),
      JOB_PREFERRED_EXAM: new OneToManyLink(
        'JobPreferredExam',
        this,
        linkedApis[4]
      ),
      JOB_ADA_REQUIREMENT: new OneToOneLink(
        'JobADARequirement',
        this,
        linkedApis[5]
      ),
      JOB_TASK_ASSIGNMENTS: new OneToManyLink(
        'JobTaskAssignments',
        this,
        linkedApis[6]
      ),
      JOB_ADA_REQUIREMENT_REPORT: new OneToOneLink(
        'JobADARequirementReport',
        this,
        linkedApis[7]
      ),
      RECRUITING_TABLE: new OneToManyLink(
        'RecruitingTable',
        this,
        linkedApis[8]
      ),
      TITLE: new OneToOneLink('Title', this, linkedApis[9]),
      COMPENSATION_LEVEL: new OneToOneLink(
        'CompensationLevel',
        this,
        linkedApis[10]
      ),
      JOB_FAMILY: new OneToOneLink('JobFamily', this, linkedApis[11]),
      SURVEY_COMPANY: new OneToOneLink('SurveyCompany', this, linkedApis[12]),
      PAY_INT_DETAILS: new OneToManyLink('PayIntDetails', this, linkedApis[13]),
      DETAILS: new OneToManyLink('Details', this, linkedApis[14]),
      JOB_PREFERRED_EDUCATION_DISCIPLINES: new OneToManyLink(
        'JobPreferredEducationDisciplines',
        this,
        linkedApis[15]
      ),
      JOB_COMPENSATIONS: new OneToManyLink(
        'JobCompensations',
        this,
        linkedApis[16]
      ),
      JOB_PREFERRED_SCREENINGS: new OneToManyLink(
        'JobPreferredScreenings',
        this,
        linkedApis[17]
      ),
      POSITIONS: new OneToManyLink('Positions', this, linkedApis[18]),
      APPLICATIONS: new OneToManyLink('Applications', this, linkedApis[19]),
      POSITIONS_V_2: new OneToManyLink('PositionsV2', this, linkedApis[20]),
      RECRUITING_REQUESTS: new OneToManyLink(
        'RecruitingRequests',
        this,
        linkedApis[21]
      ),
      JOB_PREFERRED_CERTIFICATES: new OneToManyLink(
        'JobPreferredCertificates',
        this,
        linkedApis[22]
      ),
      JOB_RESPONSIBILITIES: new OneToManyLink(
        'JobResponsibilities',
        this,
        linkedApis[23]
      )
    };
    return this;
  }

  entityConstructor = Jobs;

  requestBuilder(): JobsRequestBuilder<DeSerializersT> {
    return new JobsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Jobs<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Jobs<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Jobs<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Jobs, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Jobs, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_ID: OrderableEdmTypeField<
      Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MARKET_PRICE_SOURCE: OrderableEdmTypeField<
      Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRATION: OrderableEdmTypeField<
      Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MAXIMUM_NUMBER_OF_POSITIONS: OrderableEdmTypeField<
      Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TITLE_ID: OrderableEdmTypeField<
      Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAID_HOURLY: EnumField<
      Jobs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE: OrderableEdmTypeField<
      Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPENSATION_REFERENCE_JOB: OrderableEdmTypeField<
      Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNCTION_ID: OrderableEdmTypeField<
      Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULL_TIME_EQUIVALENT: OrderableEdmTypeField<
      Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOB_FAMILY_ID: OrderableEdmTypeField<
      Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_UNLIMITED_POSITIONS: EnumField<
      Jobs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKET_PRICE_CONTROL_POINT: OrderableEdmTypeField<
      Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MARKET_PRICE_LOW_THRESHOLD: OrderableEdmTypeField<
      Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPENSATION_SURVEY_COMPANY_ID: OrderableEdmTypeField<
      Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPENSATION_LEVEL_ID: OrderableEdmTypeField<
      Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKET_PRICE_HIGH_THRESHOLD: OrderableEdmTypeField<
      Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOB_DESCRIPTION: OrderableEdmTypeField<
      Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredSkills} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_SKILLS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobPreferredSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntPositionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_POSITION_DETAILS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationEligibilityRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_ELIGIBILITY_RULES: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      CompensationEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_DETAILS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      PositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredExam} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_EXAM: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobPreferredExamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobAdaRequirement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_ADA_REQUIREMENT: OneToOneLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobAdaRequirementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTaskAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TASK_ASSIGNMENTS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobTaskAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobAdaRequirementReport} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_ADA_REQUIREMENT_REPORT: OneToOneLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      AdaRequirementReportsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_TABLE: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      RecruitingProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link title} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TITLE: OneToOneLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      TitlesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_LEVEL: OneToOneLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      CompensationLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobFamily} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_FAMILY: OneToOneLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobFamiliesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link surveyCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SURVEY_COMPANY: OneToOneLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      SurveyCompaniesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_DETAILS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      PayIntV1JobDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link details} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DETAILS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredEducationDisciplines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_EDUCATION_DISCIPLINES: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobPreferredEducationDisciplinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobCompensations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_COMPENSATIONS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobCompensationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredScreenings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_SCREENINGS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobPreferredScreeningsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      PositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link applications} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPLICATIONS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      ApplicationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS_V_2: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUESTS: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredCertificates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_CERTIFICATES: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobPreferredCertificatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobResponsibilities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_RESPONSIBILITIES: OneToManyLink<
      Jobs<DeSerializersT>,
      DeSerializersT,
      JobResponsibilitiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Jobs<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', false),
        /**
         * Static representation of the {@link marketPriceSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKET_PRICE_SOURCE: fieldBuilder.buildEdmTypeField(
          'MarketPriceSource',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expiration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION: fieldBuilder.buildEdmTypeField(
          'Expiration',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link maximumNumberOfPositions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_NUMBER_OF_POSITIONS: fieldBuilder.buildEdmTypeField(
          'MaximumNumberOfPositions',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link titleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE_ID: fieldBuilder.buildEdmTypeField('TitleId', 'Edm.String', true),
        /**
         * Static representation of the {@link paidHourly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAID_HOURLY: fieldBuilder.buildEnumField('PaidHourly', NoYes, true),
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
         * Static representation of the {@link effective} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE: fieldBuilder.buildEdmTypeField(
          'Effective',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link compensationReferenceJob} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_REFERENCE_JOB: fieldBuilder.buildEdmTypeField(
          'CompensationReferenceJob',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link functionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTION_ID: fieldBuilder.buildEdmTypeField(
          'FunctionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fullTimeEquivalent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_TIME_EQUIVALENT: fieldBuilder.buildEdmTypeField(
          'FullTimeEquivalent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link jobFamilyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_FAMILY_ID: fieldBuilder.buildEdmTypeField(
          'JobFamilyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowUnlimitedPositions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_UNLIMITED_POSITIONS: fieldBuilder.buildEnumField(
          'AllowUnlimitedPositions',
          NoYes,
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
         * Static representation of the {@link marketPriceControlPoint} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKET_PRICE_CONTROL_POINT: fieldBuilder.buildEdmTypeField(
          'MarketPriceControlPoint',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link marketPriceLowThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKET_PRICE_LOW_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'MarketPriceLowThreshold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link compensationSurveyCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_SURVEY_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'CompensationSurveyCompanyId',
          'Edm.String',
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
         * Static representation of the {@link marketPriceHighThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKET_PRICE_HIGH_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'MarketPriceHighThreshold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link jobDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'JobDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Jobs)
      };
    }

    return this._schema;
  }
}
