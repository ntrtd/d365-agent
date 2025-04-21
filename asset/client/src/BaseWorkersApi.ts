/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BaseWorkers } from './BaseWorkers';
import { BaseWorkersRequestBuilder } from './BaseWorkersRequestBuilder';
import { OnboardProcessHeadersDualWriteApi } from './OnboardProcessHeadersDualWriteApi';
import { PositionWorkerAssignmentsV2Api } from './PositionWorkerAssignmentsV2Api';
import { PersonHistoricalNamesApi } from './PersonHistoricalNamesApi';
import { CompFixedEmplsApi } from './CompFixedEmplsApi';
import { BenefitsWorkerAnnualSalariesApi } from './BenefitsWorkerAnnualSalariesApi';
import { PayrollEmployeesV2Api } from './PayrollEmployeesV2Api';
import { WorkerPersonDetailsApi } from './WorkerPersonDetailsApi';
import { RecruitingRequestPositionsApi } from './RecruitingRequestPositionsApi';
import { WorkerSummariesApi } from './WorkerSummariesApi';
import { PayrollFixedCompensationPlansApi } from './PayrollFixedCompensationPlansApi';
import { BankAccountDisbursementsApi } from './BankAccountDisbursementsApi';
import { IntV1PayrollFixedCompensationPlansApi } from './IntV1PayrollFixedCompensationPlansApi';
import { WorkerBankAccountsApi } from './WorkerBankAccountsApi';
import { PayrollVariableCompensationAwardsApi } from './PayrollVariableCompensationAwardsApi';
import { PayrollWorkerAddressesApi } from './PayrollWorkerAddressesApi';
import { PayrollWorkerBenefitPlansApi } from './PayrollWorkerBenefitPlansApi';
import { HcmProcessTaskAssignmentsApi } from './HcmProcessTaskAssignmentsApi';
import { PeopleApi } from './PeopleApi';
import { EthnicOriginsApi } from './EthnicOriginsApi';
import { WorkersApi } from './WorkersApi';
import { LanguageCodesApi } from './LanguageCodesApi';
import { PayrollEmployeesApi } from './PayrollEmployeesApi';
import { PayrollWorkerAddressesCurrentApi } from './PayrollWorkerAddressesCurrentApi';
import { RecruitingRequestsApi } from './RecruitingRequestsApi';
import { PayIntV1PayrollWorkerAddressesCurrentApi } from './PayIntV1PayrollWorkerAddressesCurrentApi';
import { WorkerTitlesCurrentApi } from './WorkerTitlesCurrentApi';
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
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BaseWorkersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BaseWorkers<DeSerializersT>, DeSerializersT>
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
  ): BaseWorkersApi<DeSerializersT> {
    return new BaseWorkersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link employees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      OnboardProcessHeadersDualWriteApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionWorkerAssignmentV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_WORKER_ASSIGNMENT_V_2: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PositionWorkerAssignmentsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personHistoricalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_HISTORICAL_NAME: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PersonHistoricalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compFixedEmpl} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_FIXED_EMPL: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      CompFixedEmplsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsWorkerAnnualSalary} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_WORKER_ANNUAL_SALARY: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      BenefitsWorkerAnnualSalariesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollEmployeeV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EMPLOYEE_V_2: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PayrollEmployeesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workerPersonDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_PERSON_DETAILS: OneToOneLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      WorkerPersonDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestPositions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_POSITIONS: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerTitles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_TITLES: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      WorkerSummariesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_FIXED_COMPENSATION_PLAN: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankAccountDisbursement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_ACCOUNT_DISBURSEMENT: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      BankAccountDisbursementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link intV1PayrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INT_V_1_PAYROLL_FIXED_COMPENSATION_PLAN: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      IntV1PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerBankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_BANK_ACCOUNT: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      WorkerBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollVariableCompensationAward} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_VARIABLE_COMPENSATION_AWARD: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PayrollVariableCompensationAwardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollWorkerAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_WORKER_ADDRESS: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PayrollWorkerAddressesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollWorkerBenefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_WORKER_BENEFIT_PLAN: OneToOneLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PayrollWorkerBenefitPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link processTaskAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROCESS_TASK_ASSIGNMENTS: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      HcmProcessTaskAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assignedTasksResolved} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSIGNED_TASKS_RESOLVED: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      HcmProcessTaskAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ethnicOrigin} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ETHNIC_ORIGIN: OneToOneLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      EthnicOriginsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link nativeLanguage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NATIVE_LANGUAGE: OneToOneLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      LanguageCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollEmployee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EMPLOYEE: OneToOneLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PayrollEmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollWorkerAddressCurrent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_WORKER_ADDRESS_CURRENT: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PayrollWorkerAddressesCurrentApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUESTS: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntV1PayrollWorkerAddressCurrent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_V_1_PAYROLL_WORKER_ADDRESS_CURRENT: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PayIntV1PayrollWorkerAddressesCurrentApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerTitleCurrent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_TITLE_CURRENT: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      WorkerTitlesCurrentApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OnboardProcessHeadersDualWriteApi<DeSerializersT>,
      PositionWorkerAssignmentsV2Api<DeSerializersT>,
      PersonHistoricalNamesApi<DeSerializersT>,
      CompFixedEmplsApi<DeSerializersT>,
      BenefitsWorkerAnnualSalariesApi<DeSerializersT>,
      PayrollEmployeesV2Api<DeSerializersT>,
      WorkerPersonDetailsApi<DeSerializersT>,
      RecruitingRequestPositionsApi<DeSerializersT>,
      WorkerSummariesApi<DeSerializersT>,
      PayrollFixedCompensationPlansApi<DeSerializersT>,
      BankAccountDisbursementsApi<DeSerializersT>,
      IntV1PayrollFixedCompensationPlansApi<DeSerializersT>,
      WorkerBankAccountsApi<DeSerializersT>,
      PayrollVariableCompensationAwardsApi<DeSerializersT>,
      PayrollWorkerAddressesApi<DeSerializersT>,
      PayrollWorkerBenefitPlansApi<DeSerializersT>,
      HcmProcessTaskAssignmentsApi<DeSerializersT>,
      HcmProcessTaskAssignmentsApi<DeSerializersT>,
      PeopleApi<DeSerializersT>,
      EthnicOriginsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      LanguageCodesApi<DeSerializersT>,
      PayrollEmployeesApi<DeSerializersT>,
      PayrollWorkerAddressesCurrentApi<DeSerializersT>,
      RecruitingRequestsApi<DeSerializersT>,
      PayIntV1PayrollWorkerAddressesCurrentApi<DeSerializersT>,
      WorkerTitlesCurrentApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EMPLOYEES: new OneToManyLink('Employees', this, linkedApis[0]),
      POSITION_WORKER_ASSIGNMENT_V_2: new OneToManyLink(
        'PositionWorkerAssignmentV2',
        this,
        linkedApis[1]
      ),
      PERSON_HISTORICAL_NAME: new OneToManyLink(
        'PersonHistoricalName',
        this,
        linkedApis[2]
      ),
      COMP_FIXED_EMPL: new OneToManyLink('CompFixedEmpl', this, linkedApis[3]),
      BENEFITS_WORKER_ANNUAL_SALARY: new OneToManyLink(
        'BenefitsWorkerAnnualSalary',
        this,
        linkedApis[4]
      ),
      PAYROLL_EMPLOYEE_V_2: new OneToManyLink(
        'PayrollEmployeeV2',
        this,
        linkedApis[5]
      ),
      WORKER_PERSON_DETAILS: new OneToOneLink(
        'WorkerPersonDetails',
        this,
        linkedApis[6]
      ),
      RECRUITING_REQUEST_POSITIONS: new OneToManyLink(
        'RecruitingRequestPositions',
        this,
        linkedApis[7]
      ),
      WORKER_TITLES: new OneToManyLink('WorkerTitles', this, linkedApis[8]),
      PAYROLL_FIXED_COMPENSATION_PLAN: new OneToManyLink(
        'PayrollFixedCompensationPlan',
        this,
        linkedApis[9]
      ),
      BANK_ACCOUNT_DISBURSEMENT: new OneToManyLink(
        'BankAccountDisbursement',
        this,
        linkedApis[10]
      ),
      INT_V_1_PAYROLL_FIXED_COMPENSATION_PLAN: new OneToManyLink(
        'IntV1PayrollFixedCompensationPlan',
        this,
        linkedApis[11]
      ),
      WORKER_BANK_ACCOUNT: new OneToManyLink(
        'WorkerBankAccount',
        this,
        linkedApis[12]
      ),
      PAYROLL_VARIABLE_COMPENSATION_AWARD: new OneToManyLink(
        'PayrollVariableCompensationAward',
        this,
        linkedApis[13]
      ),
      PAYROLL_WORKER_ADDRESS: new OneToManyLink(
        'PayrollWorkerAddress',
        this,
        linkedApis[14]
      ),
      PAYROLL_WORKER_BENEFIT_PLAN: new OneToOneLink(
        'PayrollWorkerBenefitPlan',
        this,
        linkedApis[15]
      ),
      PROCESS_TASK_ASSIGNMENTS: new OneToManyLink(
        'ProcessTaskAssignments',
        this,
        linkedApis[16]
      ),
      ASSIGNED_TASKS_RESOLVED: new OneToManyLink(
        'AssignedTasksResolved',
        this,
        linkedApis[17]
      ),
      PERSON: new OneToOneLink('Person', this, linkedApis[18]),
      ETHNIC_ORIGIN: new OneToOneLink('EthnicOrigin', this, linkedApis[19]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[20]),
      NATIVE_LANGUAGE: new OneToOneLink('NativeLanguage', this, linkedApis[21]),
      PAYROLL_EMPLOYEE: new OneToOneLink(
        'PayrollEmployee',
        this,
        linkedApis[22]
      ),
      PAYROLL_WORKER_ADDRESS_CURRENT: new OneToManyLink(
        'PayrollWorkerAddressCurrent',
        this,
        linkedApis[23]
      ),
      RECRUITING_REQUESTS: new OneToManyLink(
        'RecruitingRequests',
        this,
        linkedApis[24]
      ),
      PAY_INT_V_1_PAYROLL_WORKER_ADDRESS_CURRENT: new OneToManyLink(
        'PayIntV1PayrollWorkerAddressCurrent',
        this,
        linkedApis[25]
      ),
      WORKER_TITLE_CURRENT: new OneToManyLink(
        'WorkerTitleCurrent',
        this,
        linkedApis[26]
      )
    };
    return this;
  }

  entityConstructor = BaseWorkers;

  requestBuilder(): BaseWorkersRequestBuilder<DeSerializersT> {
    return new BaseWorkersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BaseWorkers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BaseWorkers<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BaseWorkers<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BaseWorkers, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BaseWorkers, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GENDER: EnumField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      HcmPersonGender,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_TYPE: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_SEQUENCE_DISPLAY_AS: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSONAL_SUFFIX: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITIZENSHIP_COUNTRY_REGION: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFESSIONAL_SUFFIX: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFESSIONAL_TITLE: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ETHNIC_ORIGIN_ID: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_DATE: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERSONAL_TITLE: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISABLED_VERIFICATION_DATE: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MOTHER_BIRTH_COUNTRY_REGION: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_REHIRE: EnumField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PHONETIC_FIRST_NAME: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATIVE_LANGUAGE_ID: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EDUCATION: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME_PREFIX: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DECEASED_DATE: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    KNOWN_AS: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_LOCATION_ID: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_BIRTH_COUNTRY_REGION: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONETIC_MIDDLE_NAME: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATIONALITY_COUNTRY_REGION: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_BIRTH_CITY: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIDDLE_NAME: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FATHER_BIRTH_COUNTRY_REGION: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONETIC_LAST_NAME: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_ALIAS: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DISABLED: EnumField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_FULLTIME_STUDENT: EnumField<
      BaseWorkers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      OnboardProcessHeadersDualWriteApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionWorkerAssignmentV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_WORKER_ASSIGNMENT_V_2: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PositionWorkerAssignmentsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personHistoricalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_HISTORICAL_NAME: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PersonHistoricalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compFixedEmpl} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_FIXED_EMPL: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      CompFixedEmplsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsWorkerAnnualSalary} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_WORKER_ANNUAL_SALARY: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      BenefitsWorkerAnnualSalariesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollEmployeeV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EMPLOYEE_V_2: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PayrollEmployeesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workerPersonDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_PERSON_DETAILS: OneToOneLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      WorkerPersonDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestPositions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_POSITIONS: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerTitles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_TITLES: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      WorkerSummariesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_FIXED_COMPENSATION_PLAN: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankAccountDisbursement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_ACCOUNT_DISBURSEMENT: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      BankAccountDisbursementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link intV1PayrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INT_V_1_PAYROLL_FIXED_COMPENSATION_PLAN: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      IntV1PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerBankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_BANK_ACCOUNT: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      WorkerBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollVariableCompensationAward} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_VARIABLE_COMPENSATION_AWARD: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PayrollVariableCompensationAwardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollWorkerAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_WORKER_ADDRESS: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PayrollWorkerAddressesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollWorkerBenefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_WORKER_BENEFIT_PLAN: OneToOneLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PayrollWorkerBenefitPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link processTaskAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROCESS_TASK_ASSIGNMENTS: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      HcmProcessTaskAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assignedTasksResolved} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSIGNED_TASKS_RESOLVED: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      HcmProcessTaskAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ethnicOrigin} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ETHNIC_ORIGIN: OneToOneLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      EthnicOriginsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link nativeLanguage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NATIVE_LANGUAGE: OneToOneLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      LanguageCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollEmployee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EMPLOYEE: OneToOneLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PayrollEmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollWorkerAddressCurrent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_WORKER_ADDRESS_CURRENT: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PayrollWorkerAddressesCurrentApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUESTS: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntV1PayrollWorkerAddressCurrent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_V_1_PAYROLL_WORKER_ADDRESS_CURRENT: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      PayIntV1PayrollWorkerAddressesCurrentApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerTitleCurrent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_TITLE_CURRENT: OneToManyLink<
      BaseWorkers<DeSerializersT>,
      DeSerializersT,
      WorkerTitlesCurrentApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BaseWorkers<DeSerializers>>;
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
         * Static representation of the {@link personalSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONAL_SUFFIX: fieldBuilder.buildEdmTypeField(
          'PersonalSuffix',
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
         * Static representation of the {@link personalTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONAL_TITLE: fieldBuilder.buildEdmTypeField(
          'PersonalTitle',
          'Edm.String',
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
        ALL_FIELDS: new AllFields('*', BaseWorkers)
      };
    }

    return this._schema;
  }
}
