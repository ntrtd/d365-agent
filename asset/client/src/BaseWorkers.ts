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
import type { BaseWorkersApi } from './BaseWorkersApi';
import { HcmPersonGender } from './HcmPersonGender';
import { NoYes } from './NoYes';
import {
  OnboardProcessHeadersDualWrite,
  OnboardProcessHeadersDualWriteType
} from './OnboardProcessHeadersDualWrite';
import {
  PositionWorkerAssignmentsV2,
  PositionWorkerAssignmentsV2Type
} from './PositionWorkerAssignmentsV2';
import {
  PersonHistoricalNames,
  PersonHistoricalNamesType
} from './PersonHistoricalNames';
import { CompFixedEmpls, CompFixedEmplsType } from './CompFixedEmpls';
import {
  BenefitsWorkerAnnualSalaries,
  BenefitsWorkerAnnualSalariesType
} from './BenefitsWorkerAnnualSalaries';
import {
  PayrollEmployeesV2,
  PayrollEmployeesV2Type
} from './PayrollEmployeesV2';
import {
  WorkerPersonDetails,
  WorkerPersonDetailsType
} from './WorkerPersonDetails';
import {
  RecruitingRequestPositions,
  RecruitingRequestPositionsType
} from './RecruitingRequestPositions';
import { WorkerSummaries, WorkerSummariesType } from './WorkerSummaries';
import {
  PayrollFixedCompensationPlans,
  PayrollFixedCompensationPlansType
} from './PayrollFixedCompensationPlans';
import {
  BankAccountDisbursements,
  BankAccountDisbursementsType
} from './BankAccountDisbursements';
import {
  IntV1PayrollFixedCompensationPlans,
  IntV1PayrollFixedCompensationPlansType
} from './IntV1PayrollFixedCompensationPlans';
import {
  WorkerBankAccounts,
  WorkerBankAccountsType
} from './WorkerBankAccounts';
import {
  PayrollVariableCompensationAwards,
  PayrollVariableCompensationAwardsType
} from './PayrollVariableCompensationAwards';
import {
  PayrollWorkerAddresses,
  PayrollWorkerAddressesType
} from './PayrollWorkerAddresses';
import {
  PayrollWorkerBenefitPlans,
  PayrollWorkerBenefitPlansType
} from './PayrollWorkerBenefitPlans';
import {
  HcmProcessTaskAssignments,
  HcmProcessTaskAssignmentsType
} from './HcmProcessTaskAssignments';
import { People, PeopleType } from './People';
import { EthnicOrigins, EthnicOriginsType } from './EthnicOrigins';
import { Workers, WorkersType } from './Workers';
import { LanguageCodes, LanguageCodesType } from './LanguageCodes';
import { PayrollEmployees, PayrollEmployeesType } from './PayrollEmployees';
import {
  PayrollWorkerAddressesCurrent,
  PayrollWorkerAddressesCurrentType
} from './PayrollWorkerAddressesCurrent';
import {
  RecruitingRequests,
  RecruitingRequestsType
} from './RecruitingRequests';
import {
  PayIntV1PayrollWorkerAddressesCurrent,
  PayIntV1PayrollWorkerAddressesCurrentType
} from './PayIntV1PayrollWorkerAddressesCurrent';
import {
  WorkerTitlesCurrent,
  WorkerTitlesCurrentType
} from './WorkerTitlesCurrent';

/**
 * This class represents the entity "BaseWorkers" of service "d365_metadata".
 */
export class BaseWorkers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BaseWorkersType<T>
{
  /**
   * Technical entity name for BaseWorkers.
   */
  static override _entityName = 'BaseWorkers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BaseWorkers entity.
   */
  static _keys = ['PersonnelNumber'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Gender.
   * @nullable
   */
  declare gender?: HcmPersonGender | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Type.
   * @nullable
   */
  declare partyType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Sequence Display As.
   * @nullable
   */
  declare nameSequenceDisplayAs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personal Suffix.
   * @nullable
   */
  declare personalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Citizenship Country Region.
   * @nullable
   */
  declare citizenshipCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name.
   * @nullable
   */
  declare lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Professional Suffix.
   * @nullable
   */
  declare professionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Professional Title.
   * @nullable
   */
  declare professionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email.
   * @nullable
   */
  declare primaryContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ethnic Origin Id.
   * @nullable
   */
  declare ethnicOriginId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth Date.
   */
  declare birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Personal Title.
   * @nullable
   */
  declare personalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disabled Verification Date.
   */
  declare disabledVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Mother Birth Country Region.
   * @nullable
   */
  declare motherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Rehire.
   * @nullable
   */
  declare allowRehire?: NoYes | null;
  /**
   * Phonetic First Name.
   * @nullable
   */
  declare phoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Native Language Id.
   * @nullable
   */
  declare nativeLanguageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Education.
   * @nullable
   */
  declare education?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name Prefix.
   * @nullable
   */
  declare lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deceased Date.
   */
  declare deceasedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Known As.
   * @nullable
   */
  declare knownAs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Location Id.
   * @nullable
   */
  declare electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Birth Country Region.
   * @nullable
   */
  declare personBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phonetic Middle Name.
   * @nullable
   */
  declare phoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nationality Country Region.
   * @nullable
   */
  declare nationalityCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Birth City.
   * @nullable
   */
  declare personBirthCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Middle Name.
   * @nullable
   */
  declare middleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Father Birth Country Region.
   * @nullable
   */
  declare fatherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phonetic Last Name.
   * @nullable
   */
  declare phoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Alias.
   * @nullable
   */
  declare nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Name.
   * @nullable
   */
  declare firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Disabled.
   * @nullable
   */
  declare isDisabled?: NoYes | null;
  /**
   * Is Fulltime Student.
   * @nullable
   */
  declare isFulltimeStudent?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link OnboardProcessHeadersDualWrite} entity.
   */
  declare employees: OnboardProcessHeadersDualWrite<T>[];
  /**
   * One-to-many navigation property to the {@link PositionWorkerAssignmentsV2} entity.
   */
  declare positionWorkerAssignmentV2: PositionWorkerAssignmentsV2<T>[];
  /**
   * One-to-many navigation property to the {@link PersonHistoricalNames} entity.
   */
  declare personHistoricalName: PersonHistoricalNames<T>[];
  /**
   * One-to-many navigation property to the {@link CompFixedEmpls} entity.
   */
  declare compFixedEmpl: CompFixedEmpls<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitsWorkerAnnualSalaries} entity.
   */
  declare benefitsWorkerAnnualSalary: BenefitsWorkerAnnualSalaries<T>[];
  /**
   * One-to-many navigation property to the {@link PayrollEmployeesV2} entity.
   */
  declare payrollEmployeeV2: PayrollEmployeesV2<T>[];
  /**
   * One-to-one navigation property to the {@link WorkerPersonDetails} entity.
   */
  declare workerPersonDetails?: WorkerPersonDetails<T> | null;
  /**
   * One-to-many navigation property to the {@link RecruitingRequestPositions} entity.
   */
  declare recruitingRequestPositions: RecruitingRequestPositions<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerSummaries} entity.
   */
  declare workerTitles: WorkerSummaries<T>[];
  /**
   * One-to-many navigation property to the {@link PayrollFixedCompensationPlans} entity.
   */
  declare payrollFixedCompensationPlan: PayrollFixedCompensationPlans<T>[];
  /**
   * One-to-many navigation property to the {@link BankAccountDisbursements} entity.
   */
  declare bankAccountDisbursement: BankAccountDisbursements<T>[];
  /**
   * One-to-many navigation property to the {@link IntV1PayrollFixedCompensationPlans} entity.
   */
  declare intV1PayrollFixedCompensationPlan: IntV1PayrollFixedCompensationPlans<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerBankAccounts} entity.
   */
  declare workerBankAccount: WorkerBankAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link PayrollVariableCompensationAwards} entity.
   */
  declare payrollVariableCompensationAward: PayrollVariableCompensationAwards<T>[];
  /**
   * One-to-many navigation property to the {@link PayrollWorkerAddresses} entity.
   */
  declare payrollWorkerAddress: PayrollWorkerAddresses<T>[];
  /**
   * One-to-one navigation property to the {@link PayrollWorkerBenefitPlans} entity.
   */
  declare payrollWorkerBenefitPlan?: PayrollWorkerBenefitPlans<T> | null;
  /**
   * One-to-many navigation property to the {@link HcmProcessTaskAssignments} entity.
   */
  declare processTaskAssignments: HcmProcessTaskAssignments<T>[];
  /**
   * One-to-many navigation property to the {@link HcmProcessTaskAssignments} entity.
   */
  declare assignedTasksResolved: HcmProcessTaskAssignments<T>[];
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link EthnicOrigins} entity.
   */
  declare ethnicOrigin?: EthnicOrigins<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link LanguageCodes} entity.
   */
  declare nativeLanguage?: LanguageCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link PayrollEmployees} entity.
   */
  declare payrollEmployee?: PayrollEmployees<T> | null;
  /**
   * One-to-many navigation property to the {@link PayrollWorkerAddressesCurrent} entity.
   */
  declare payrollWorkerAddressCurrent: PayrollWorkerAddressesCurrent<T>[];
  /**
   * One-to-many navigation property to the {@link RecruitingRequests} entity.
   */
  declare recruitingRequests: RecruitingRequests<T>[];
  /**
   * One-to-many navigation property to the {@link PayIntV1PayrollWorkerAddressesCurrent} entity.
   */
  declare payIntV1PayrollWorkerAddressCurrent: PayIntV1PayrollWorkerAddressesCurrent<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerTitlesCurrent} entity.
   */
  declare workerTitleCurrent: WorkerTitlesCurrent<T>[];

  constructor(_entityApi: BaseWorkersApi<T>) {
    super(_entityApi);
  }
}

export interface BaseWorkersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  gender?: HcmPersonGender | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  partyType?: DeserializedType<T, 'Edm.String'> | null;
  nameSequenceDisplayAs?: DeserializedType<T, 'Edm.String'> | null;
  personalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  citizenshipCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  professionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  professionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  ethnicOriginId?: DeserializedType<T, 'Edm.String'> | null;
  birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  personalTitle?: DeserializedType<T, 'Edm.String'> | null;
  disabledVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  motherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  allowRehire?: NoYes | null;
  phoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  nativeLanguageId?: DeserializedType<T, 'Edm.String'> | null;
  education?: DeserializedType<T, 'Edm.String'> | null;
  lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  deceasedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  knownAs?: DeserializedType<T, 'Edm.String'> | null;
  electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  personBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  phoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  nationalityCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  personBirthCity?: DeserializedType<T, 'Edm.String'> | null;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  fatherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  phoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  isDisabled?: NoYes | null;
  isFulltimeStudent?: NoYes | null;
  employees: OnboardProcessHeadersDualWriteType<T>[];
  positionWorkerAssignmentV2: PositionWorkerAssignmentsV2Type<T>[];
  personHistoricalName: PersonHistoricalNamesType<T>[];
  compFixedEmpl: CompFixedEmplsType<T>[];
  benefitsWorkerAnnualSalary: BenefitsWorkerAnnualSalariesType<T>[];
  payrollEmployeeV2: PayrollEmployeesV2Type<T>[];
  workerPersonDetails?: WorkerPersonDetailsType<T> | null;
  recruitingRequestPositions: RecruitingRequestPositionsType<T>[];
  workerTitles: WorkerSummariesType<T>[];
  payrollFixedCompensationPlan: PayrollFixedCompensationPlansType<T>[];
  bankAccountDisbursement: BankAccountDisbursementsType<T>[];
  intV1PayrollFixedCompensationPlan: IntV1PayrollFixedCompensationPlansType<T>[];
  workerBankAccount: WorkerBankAccountsType<T>[];
  payrollVariableCompensationAward: PayrollVariableCompensationAwardsType<T>[];
  payrollWorkerAddress: PayrollWorkerAddressesType<T>[];
  payrollWorkerBenefitPlan?: PayrollWorkerBenefitPlansType<T> | null;
  processTaskAssignments: HcmProcessTaskAssignmentsType<T>[];
  assignedTasksResolved: HcmProcessTaskAssignmentsType<T>[];
  person?: PeopleType<T> | null;
  ethnicOrigin?: EthnicOriginsType<T> | null;
  worker?: WorkersType<T> | null;
  nativeLanguage?: LanguageCodesType<T> | null;
  payrollEmployee?: PayrollEmployeesType<T> | null;
  payrollWorkerAddressCurrent: PayrollWorkerAddressesCurrentType<T>[];
  recruitingRequests: RecruitingRequestsType<T>[];
  payIntV1PayrollWorkerAddressCurrent: PayIntV1PayrollWorkerAddressesCurrentType<T>[];
  workerTitleCurrent: WorkerTitlesCurrentType<T>[];
}
