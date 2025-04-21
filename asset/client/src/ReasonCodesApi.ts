/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReasonCodes } from './ReasonCodes';
import { ReasonCodesRequestBuilder } from './ReasonCodesRequestBuilder';
import { ApplicantsApi } from './ApplicantsApi';
import { BenefitsParametersV2Api } from './BenefitsParametersV2Api';
import { LeaveOfAbsenceRequestsApi } from './LeaveOfAbsenceRequestsApi';
import { LeaveRequestHeadersApi } from './LeaveRequestHeadersApi';
import { EmploymentDetailsApi } from './EmploymentDetailsApi';
import { LeaveBankTransactionsApi } from './LeaveBankTransactionsApi';
import { LeaveTypeReasonCodesApi } from './LeaveTypeReasonCodesApi';
import { PayIntV1LeaveBankTransactionsApi } from './PayIntV1LeaveBankTransactionsApi';
import { LeaveBankTransactionsV2Api } from './LeaveBankTransactionsV2Api';
import { PersonSkillMappingsApi } from './PersonSkillMappingsApi';
import { CandidatesToHireApi } from './CandidatesToHireApi';
import { EmploymentsPerCompanyApi } from './EmploymentsPerCompanyApi';
import { AbsenceReasonsApi } from './AbsenceReasonsApi';
import { PositionsApi } from './PositionsApi';
import { ApplicationsApi } from './ApplicationsApi';
import { LeaveAccrualSuspensionsApi } from './LeaveAccrualSuspensionsApi';
import { PositionsV2Api } from './PositionsV2Api';
import { LeaveRequestsV2Api } from './LeaveRequestsV2Api';
import { NoYes } from './NoYes';
import { HrmReasonCodeType } from './HrmReasonCodeType';
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
export class ReasonCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ReasonCodes<DeSerializersT>, DeSerializersT>
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
  ): ReasonCodesApi<DeSerializersT> {
    return new ReasonCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link applicants} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPLICANTS: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      ApplicantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsParameterV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PARAMETER_V_2: OneToOneLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      BenefitsParametersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsParameterV2DefaultEnrollmentReasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PARAMETER_V_2_DEFAULT_ENROLLMENT_REASON_CODE: OneToOneLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      BenefitsParametersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsParameterV2DefaultCancelReasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PARAMETER_V_2_DEFAULT_CANCEL_REASON_CODE: OneToOneLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      BenefitsParametersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsParameterV2DefaultLifeEventReasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PARAMETER_V_2_DEFAULT_LIFE_EVENT_REASON_CODE: OneToOneLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      BenefitsParametersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsParameterV2DefaultReopenReasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PARAMETER_V_2_DEFAULT_REOPEN_REASON_CODE: OneToOneLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      BenefitsParametersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveOfAbsenceRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_OF_ABSENCE_REQUESTS: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      LeaveOfAbsenceRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveRequestHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_REQUEST_HEADERS: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      LeaveRequestHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employmentDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_DETAIL: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      EmploymentDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBankTransactions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BANK_TRANSACTIONS: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      LeaveBankTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveTypeReasonCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_TYPE_REASON_CODES: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      LeaveTypeReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntV1LeaveBankTransactionEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_V_1_LEAVE_BANK_TRANSACTION_ENTITY: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      PayIntV1LeaveBankTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBankTransactionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BANK_TRANSACTIONS_V_2: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      LeaveBankTransactionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personSkillMapping} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_SKILL_MAPPING: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      PersonSkillMappingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link candidatesToHire} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CANDIDATES_TO_HIRE: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      CandidatesToHireApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employmentsPerCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENTS_PER_COMPANY: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      EmploymentsPerCompanyApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link absenceReason} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ABSENCE_REASON: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      AbsenceReasonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      PositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link applications} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPLICATIONS: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      ApplicationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveAccrualSuspensions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_ACCRUAL_SUSPENSIONS: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      LeaveAccrualSuspensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS_V_2: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveRequestsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_REQUESTS_V_2: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      LeaveRequestsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ApplicantsApi<DeSerializersT>,
      BenefitsParametersV2Api<DeSerializersT>,
      BenefitsParametersV2Api<DeSerializersT>,
      BenefitsParametersV2Api<DeSerializersT>,
      BenefitsParametersV2Api<DeSerializersT>,
      BenefitsParametersV2Api<DeSerializersT>,
      LeaveOfAbsenceRequestsApi<DeSerializersT>,
      LeaveRequestHeadersApi<DeSerializersT>,
      EmploymentDetailsApi<DeSerializersT>,
      LeaveBankTransactionsApi<DeSerializersT>,
      LeaveTypeReasonCodesApi<DeSerializersT>,
      PayIntV1LeaveBankTransactionsApi<DeSerializersT>,
      LeaveBankTransactionsV2Api<DeSerializersT>,
      PersonSkillMappingsApi<DeSerializersT>,
      CandidatesToHireApi<DeSerializersT>,
      EmploymentsPerCompanyApi<DeSerializersT>,
      AbsenceReasonsApi<DeSerializersT>,
      PositionsApi<DeSerializersT>,
      ApplicationsApi<DeSerializersT>,
      LeaveAccrualSuspensionsApi<DeSerializersT>,
      PositionsV2Api<DeSerializersT>,
      LeaveRequestsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      APPLICANTS: new OneToManyLink('Applicants', this, linkedApis[0]),
      BENEFITS_PARAMETER_V_2: new OneToOneLink(
        'BenefitsParameterV2',
        this,
        linkedApis[1]
      ),
      BENEFITS_PARAMETER_V_2_DEFAULT_ENROLLMENT_REASON_CODE: new OneToOneLink(
        'BenefitsParameterV2DefaultEnrollmentReasonCode',
        this,
        linkedApis[2]
      ),
      BENEFITS_PARAMETER_V_2_DEFAULT_CANCEL_REASON_CODE: new OneToOneLink(
        'BenefitsParameterV2DefaultCancelReasonCode',
        this,
        linkedApis[3]
      ),
      BENEFITS_PARAMETER_V_2_DEFAULT_LIFE_EVENT_REASON_CODE: new OneToOneLink(
        'BenefitsParameterV2DefaultLifeEventReasonCode',
        this,
        linkedApis[4]
      ),
      BENEFITS_PARAMETER_V_2_DEFAULT_REOPEN_REASON_CODE: new OneToOneLink(
        'BenefitsParameterV2DefaultReopenReasonCode',
        this,
        linkedApis[5]
      ),
      LEAVE_OF_ABSENCE_REQUESTS: new OneToManyLink(
        'LeaveOfAbsenceRequests',
        this,
        linkedApis[6]
      ),
      LEAVE_REQUEST_HEADERS: new OneToManyLink(
        'LeaveRequestHeaders',
        this,
        linkedApis[7]
      ),
      EMPLOYMENT_DETAIL: new OneToManyLink(
        'EmploymentDetail',
        this,
        linkedApis[8]
      ),
      LEAVE_BANK_TRANSACTIONS: new OneToManyLink(
        'LeaveBankTransactions',
        this,
        linkedApis[9]
      ),
      LEAVE_TYPE_REASON_CODES: new OneToManyLink(
        'LeaveTypeReasonCodes',
        this,
        linkedApis[10]
      ),
      PAY_INT_V_1_LEAVE_BANK_TRANSACTION_ENTITY: new OneToManyLink(
        'PayIntV1LeaveBankTransactionEntity',
        this,
        linkedApis[11]
      ),
      LEAVE_BANK_TRANSACTIONS_V_2: new OneToManyLink(
        'LeaveBankTransactionsV2',
        this,
        linkedApis[12]
      ),
      PERSON_SKILL_MAPPING: new OneToManyLink(
        'PersonSkillMapping',
        this,
        linkedApis[13]
      ),
      CANDIDATES_TO_HIRE: new OneToManyLink(
        'CandidatesToHire',
        this,
        linkedApis[14]
      ),
      EMPLOYMENTS_PER_COMPANY: new OneToManyLink(
        'EmploymentsPerCompany',
        this,
        linkedApis[15]
      ),
      ABSENCE_REASON: new OneToManyLink('AbsenceReason', this, linkedApis[16]),
      POSITIONS: new OneToManyLink('Positions', this, linkedApis[17]),
      APPLICATIONS: new OneToManyLink('Applications', this, linkedApis[18]),
      LEAVE_ACCRUAL_SUSPENSIONS: new OneToManyLink(
        'LeaveAccrualSuspensions',
        this,
        linkedApis[19]
      ),
      POSITIONS_V_2: new OneToManyLink('PositionsV2', this, linkedApis[20]),
      LEAVE_REQUESTS_V_2: new OneToManyLink(
        'LeaveRequestsV2',
        this,
        linkedApis[21]
      )
    };
    return this;
  }

  entityConstructor = ReasonCodes;

  requestBuilder(): ReasonCodesRequestBuilder<DeSerializersT> {
    return new ReasonCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ReasonCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ReasonCodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ReasonCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ReasonCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ReasonCodes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REASON_CODE_ID: OrderableEdmTypeField<
      ReasonCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_SKILL_MAPPING_APPLICABLE: EnumField<
      ReasonCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_CREATE_NEW_POSITION_APPLICABLE: EnumField<
      ReasonCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_COMPENSATION_APPLICABLE: EnumField<
      ReasonCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_TERMINATION_APPLICABLE: EnumField<
      ReasonCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_TRANSFER_APPLICABLE: EnumField<
      ReasonCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ReasonCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ABSENCE_APPLICABLE: EnumField<
      ReasonCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_EDIT_POSITION_APPLICABLE: EnumField<
      ReasonCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TYPE: EnumField<
      ReasonCodes<DeSerializers>,
      DeSerializersT,
      HrmReasonCodeType,
      true,
      true
    >;
    IS_APPLICATION_APPLICABLE: EnumField<
      ReasonCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_HIRE_APPLICABLE: EnumField<
      ReasonCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_BENEFITS_APPLICABLE: EnumField<
      ReasonCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ABSENCE_ADJUSTMENT_APPLICABLE: EnumField<
      ReasonCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link applicants} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPLICANTS: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      ApplicantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsParameterV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PARAMETER_V_2: OneToOneLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      BenefitsParametersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsParameterV2DefaultEnrollmentReasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PARAMETER_V_2_DEFAULT_ENROLLMENT_REASON_CODE: OneToOneLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      BenefitsParametersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsParameterV2DefaultCancelReasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PARAMETER_V_2_DEFAULT_CANCEL_REASON_CODE: OneToOneLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      BenefitsParametersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsParameterV2DefaultLifeEventReasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PARAMETER_V_2_DEFAULT_LIFE_EVENT_REASON_CODE: OneToOneLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      BenefitsParametersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsParameterV2DefaultReopenReasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PARAMETER_V_2_DEFAULT_REOPEN_REASON_CODE: OneToOneLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      BenefitsParametersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveOfAbsenceRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_OF_ABSENCE_REQUESTS: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      LeaveOfAbsenceRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveRequestHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_REQUEST_HEADERS: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      LeaveRequestHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employmentDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_DETAIL: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      EmploymentDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBankTransactions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BANK_TRANSACTIONS: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      LeaveBankTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveTypeReasonCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_TYPE_REASON_CODES: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      LeaveTypeReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntV1LeaveBankTransactionEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_V_1_LEAVE_BANK_TRANSACTION_ENTITY: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      PayIntV1LeaveBankTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBankTransactionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BANK_TRANSACTIONS_V_2: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      LeaveBankTransactionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personSkillMapping} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_SKILL_MAPPING: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      PersonSkillMappingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link candidatesToHire} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CANDIDATES_TO_HIRE: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      CandidatesToHireApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employmentsPerCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENTS_PER_COMPANY: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      EmploymentsPerCompanyApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link absenceReason} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ABSENCE_REASON: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      AbsenceReasonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      PositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link applications} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPLICATIONS: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      ApplicationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveAccrualSuspensions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_ACCRUAL_SUSPENSIONS: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      LeaveAccrualSuspensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS_V_2: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveRequestsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_REQUESTS_V_2: OneToManyLink<
      ReasonCodes<DeSerializersT>,
      DeSerializersT,
      LeaveRequestsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ReasonCodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link reasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReasonCodeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isSkillMappingApplicable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SKILL_MAPPING_APPLICABLE: fieldBuilder.buildEnumField(
          'IsSkillMappingApplicable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isCreateNewPositionApplicable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CREATE_NEW_POSITION_APPLICABLE: fieldBuilder.buildEnumField(
          'IsCreateNewPositionApplicable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isCompensationApplicable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COMPENSATION_APPLICABLE: fieldBuilder.buildEnumField(
          'IsCompensationApplicable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isTerminationApplicable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TERMINATION_APPLICABLE: fieldBuilder.buildEnumField(
          'IsTerminationApplicable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isTransferApplicable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TRANSFER_APPLICABLE: fieldBuilder.buildEnumField(
          'IsTransferApplicable',
          NoYes,
          true
        ),
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
         * Static representation of the {@link isAbsenceApplicable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ABSENCE_APPLICABLE: fieldBuilder.buildEnumField(
          'IsAbsenceApplicable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isEditPositionApplicable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EDIT_POSITION_APPLICABLE: fieldBuilder.buildEnumField(
          'IsEditPositionApplicable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', HrmReasonCodeType, true),
        /**
         * Static representation of the {@link isApplicationApplicable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_APPLICATION_APPLICABLE: fieldBuilder.buildEnumField(
          'IsApplicationApplicable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isHireApplicable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_HIRE_APPLICABLE: fieldBuilder.buildEnumField(
          'IsHireApplicable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isBenefitsApplicable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BENEFITS_APPLICABLE: fieldBuilder.buildEnumField(
          'IsBenefitsApplicable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isAbsenceAdjustmentApplicable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ABSENCE_ADJUSTMENT_APPLICABLE: fieldBuilder.buildEnumField(
          'IsAbsenceAdjustmentApplicable',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReasonCodes)
      };
    }

    return this._schema;
  }
}
