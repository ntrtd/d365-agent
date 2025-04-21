/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { JobsApi } from './JobsApi';
import { NoYes } from './NoYes';
import {
  JobPreferredSkills,
  JobPreferredSkillsType
} from './JobPreferredSkills';
import {
  PayIntV1HcmPositionDetails,
  PayIntV1HcmPositionDetailsType
} from './PayIntV1HcmPositionDetails';
import {
  CompensationEligibilityRules,
  CompensationEligibilityRulesType
} from './CompensationEligibilityRules';
import { PositionDetails, PositionDetailsType } from './PositionDetails';
import { JobPreferredExams, JobPreferredExamsType } from './JobPreferredExams';
import {
  JobAdaRequirements,
  JobAdaRequirementsType
} from './JobAdaRequirements';
import {
  JobTaskAssignments,
  JobTaskAssignmentsType
} from './JobTaskAssignments';
import {
  AdaRequirementReports,
  AdaRequirementReportsType
} from './AdaRequirementReports';
import {
  RecruitingProjects,
  RecruitingProjectsType
} from './RecruitingProjects';
import { Titles, TitlesType } from './Titles';
import {
  CompensationLevels,
  CompensationLevelsType
} from './CompensationLevels';
import { JobFamilies, JobFamiliesType } from './JobFamilies';
import { SurveyCompanies, SurveyCompaniesType } from './SurveyCompanies';
import {
  PayIntV1JobDetails,
  PayIntV1JobDetailsType
} from './PayIntV1JobDetails';
import { JobDetails, JobDetailsType } from './JobDetails';
import {
  JobPreferredEducationDisciplines,
  JobPreferredEducationDisciplinesType
} from './JobPreferredEducationDisciplines';
import { JobCompensations, JobCompensationsType } from './JobCompensations';
import {
  JobPreferredScreenings,
  JobPreferredScreeningsType
} from './JobPreferredScreenings';
import { Positions, PositionsType } from './Positions';
import { Applications, ApplicationsType } from './Applications';
import { PositionsV2, PositionsV2Type } from './PositionsV2';
import {
  RecruitingRequests,
  RecruitingRequestsType
} from './RecruitingRequests';
import {
  JobPreferredCertificates,
  JobPreferredCertificatesType
} from './JobPreferredCertificates';
import {
  JobResponsibilities,
  JobResponsibilitiesType
} from './JobResponsibilities';

/**
 * This class represents the entity "Jobs" of service "d365_metadata".
 */
export class Jobs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JobsType<T>
{
  /**
   * Technical entity name for Jobs.
   */
  static override _entityName = 'Jobs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Jobs entity.
   */
  static _keys = ['JobId'];
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
  /**
   * Market Price Source.
   * @nullable
   */
  declare marketPriceSource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiration.
   */
  declare expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Maximum Number Of Positions.
   */
  declare maximumNumberOfPositions: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Title Id.
   * @nullable
   */
  declare titleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paid Hourly.
   * @nullable
   */
  declare paidHourly?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective.
   */
  declare effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Compensation Reference Job.
   * @nullable
   */
  declare compensationReferenceJob?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Function Id.
   * @nullable
   */
  declare functionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Full Time Equivalent.
   */
  declare fullTimeEquivalent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Job Family Id.
   * @nullable
   */
  declare jobFamilyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Unlimited Positions.
   * @nullable
   */
  declare allowUnlimitedPositions?: NoYes | null;
  /**
   * Job Type Id.
   * @nullable
   */
  declare jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Market Price Control Point.
   */
  declare marketPriceControlPoint: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Market Price Low Threshold.
   */
  declare marketPriceLowThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Compensation Survey Company Id.
   * @nullable
   */
  declare compensationSurveyCompanyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Compensation Level Id.
   * @nullable
   */
  declare compensationLevelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Market Price High Threshold.
   */
  declare marketPriceHighThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Job Description.
   * @nullable
   */
  declare jobDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link JobPreferredSkills} entity.
   */
  declare jobPreferredSkills: JobPreferredSkills<T>[];
  /**
   * One-to-many navigation property to the {@link PayIntV1HcmPositionDetails} entity.
   */
  declare payIntPositionDetails: PayIntV1HcmPositionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link CompensationEligibilityRules} entity.
   */
  declare compensationEligibilityRules: CompensationEligibilityRules<T>[];
  /**
   * One-to-many navigation property to the {@link PositionDetails} entity.
   */
  declare positionDetails: PositionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link JobPreferredExams} entity.
   */
  declare jobPreferredExam: JobPreferredExams<T>[];
  /**
   * One-to-one navigation property to the {@link JobAdaRequirements} entity.
   */
  declare jobAdaRequirement?: JobAdaRequirements<T> | null;
  /**
   * One-to-many navigation property to the {@link JobTaskAssignments} entity.
   */
  declare jobTaskAssignments: JobTaskAssignments<T>[];
  /**
   * One-to-one navigation property to the {@link AdaRequirementReports} entity.
   */
  declare jobAdaRequirementReport?: AdaRequirementReports<T> | null;
  /**
   * One-to-many navigation property to the {@link RecruitingProjects} entity.
   */
  declare recruitingTable: RecruitingProjects<T>[];
  /**
   * One-to-one navigation property to the {@link Titles} entity.
   */
  declare title?: Titles<T> | null;
  /**
   * One-to-one navigation property to the {@link CompensationLevels} entity.
   */
  declare compensationLevel?: CompensationLevels<T> | null;
  /**
   * One-to-one navigation property to the {@link JobFamilies} entity.
   */
  declare jobFamily?: JobFamilies<T> | null;
  /**
   * One-to-one navigation property to the {@link SurveyCompanies} entity.
   */
  declare surveyCompany?: SurveyCompanies<T> | null;
  /**
   * One-to-many navigation property to the {@link PayIntV1JobDetails} entity.
   */
  declare payIntDetails: PayIntV1JobDetails<T>[];
  /**
   * One-to-many navigation property to the {@link JobDetails} entity.
   */
  declare details: JobDetails<T>[];
  /**
   * One-to-many navigation property to the {@link JobPreferredEducationDisciplines} entity.
   */
  declare jobPreferredEducationDisciplines: JobPreferredEducationDisciplines<T>[];
  /**
   * One-to-many navigation property to the {@link JobCompensations} entity.
   */
  declare jobCompensations: JobCompensations<T>[];
  /**
   * One-to-many navigation property to the {@link JobPreferredScreenings} entity.
   */
  declare jobPreferredScreenings: JobPreferredScreenings<T>[];
  /**
   * One-to-many navigation property to the {@link Positions} entity.
   */
  declare positions: Positions<T>[];
  /**
   * One-to-many navigation property to the {@link Applications} entity.
   */
  declare applications: Applications<T>[];
  /**
   * One-to-many navigation property to the {@link PositionsV2} entity.
   */
  declare positionsV2: PositionsV2<T>[];
  /**
   * One-to-many navigation property to the {@link RecruitingRequests} entity.
   */
  declare recruitingRequests: RecruitingRequests<T>[];
  /**
   * One-to-many navigation property to the {@link JobPreferredCertificates} entity.
   */
  declare jobPreferredCertificates: JobPreferredCertificates<T>[];
  /**
   * One-to-many navigation property to the {@link JobResponsibilities} entity.
   */
  declare jobResponsibilities: JobResponsibilities<T>[];

  constructor(_entityApi: JobsApi<T>) {
    super(_entityApi);
  }
}

export interface JobsType<T extends DeSerializers = DefaultDeSerializers> {
  jobId: DeserializedType<T, 'Edm.String'>;
  marketPriceSource?: DeserializedType<T, 'Edm.String'> | null;
  expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  maximumNumberOfPositions: DeserializedType<T, 'Edm.Int32'>;
  titleId?: DeserializedType<T, 'Edm.String'> | null;
  paidHourly?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  compensationReferenceJob?: DeserializedType<T, 'Edm.String'> | null;
  functionId?: DeserializedType<T, 'Edm.String'> | null;
  fullTimeEquivalent: DeserializedType<T, 'Edm.Decimal'>;
  jobFamilyId?: DeserializedType<T, 'Edm.String'> | null;
  allowUnlimitedPositions?: NoYes | null;
  jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  marketPriceControlPoint: DeserializedType<T, 'Edm.Decimal'>;
  marketPriceLowThreshold: DeserializedType<T, 'Edm.Decimal'>;
  compensationSurveyCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  compensationLevelId?: DeserializedType<T, 'Edm.String'> | null;
  marketPriceHighThreshold: DeserializedType<T, 'Edm.Decimal'>;
  jobDescription?: DeserializedType<T, 'Edm.String'> | null;
  jobPreferredSkills: JobPreferredSkillsType<T>[];
  payIntPositionDetails: PayIntV1HcmPositionDetailsType<T>[];
  compensationEligibilityRules: CompensationEligibilityRulesType<T>[];
  positionDetails: PositionDetailsType<T>[];
  jobPreferredExam: JobPreferredExamsType<T>[];
  jobAdaRequirement?: JobAdaRequirementsType<T> | null;
  jobTaskAssignments: JobTaskAssignmentsType<T>[];
  jobAdaRequirementReport?: AdaRequirementReportsType<T> | null;
  recruitingTable: RecruitingProjectsType<T>[];
  title?: TitlesType<T> | null;
  compensationLevel?: CompensationLevelsType<T> | null;
  jobFamily?: JobFamiliesType<T> | null;
  surveyCompany?: SurveyCompaniesType<T> | null;
  payIntDetails: PayIntV1JobDetailsType<T>[];
  details: JobDetailsType<T>[];
  jobPreferredEducationDisciplines: JobPreferredEducationDisciplinesType<T>[];
  jobCompensations: JobCompensationsType<T>[];
  jobPreferredScreenings: JobPreferredScreeningsType<T>[];
  positions: PositionsType<T>[];
  applications: ApplicationsType<T>[];
  positionsV2: PositionsV2Type<T>[];
  recruitingRequests: RecruitingRequestsType<T>[];
  jobPreferredCertificates: JobPreferredCertificatesType<T>[];
  jobResponsibilities: JobResponsibilitiesType<T>[];
}
