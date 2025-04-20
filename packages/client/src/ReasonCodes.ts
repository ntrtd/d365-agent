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
import type { ReasonCodesApi } from './ReasonCodesApi';
import { NoYes } from './NoYes';
import { HrmReasonCodeType } from './HrmReasonCodeType';
import { Applicants, ApplicantsType } from './Applicants';
import {
  BenefitsParametersV2,
  BenefitsParametersV2Type
} from './BenefitsParametersV2';
import {
  LeaveOfAbsenceRequests,
  LeaveOfAbsenceRequestsType
} from './LeaveOfAbsenceRequests';
import {
  LeaveRequestHeaders,
  LeaveRequestHeadersType
} from './LeaveRequestHeaders';
import { EmploymentDetails, EmploymentDetailsType } from './EmploymentDetails';
import {
  LeaveBankTransactions,
  LeaveBankTransactionsType
} from './LeaveBankTransactions';
import {
  LeaveTypeReasonCodes,
  LeaveTypeReasonCodesType
} from './LeaveTypeReasonCodes';
import {
  PayIntV1LeaveBankTransactions,
  PayIntV1LeaveBankTransactionsType
} from './PayIntV1LeaveBankTransactions';
import {
  LeaveBankTransactionsV2,
  LeaveBankTransactionsV2Type
} from './LeaveBankTransactionsV2';
import {
  PersonSkillMappings,
  PersonSkillMappingsType
} from './PersonSkillMappings';
import { CandidatesToHire, CandidatesToHireType } from './CandidatesToHire';
import {
  EmploymentsPerCompany,
  EmploymentsPerCompanyType
} from './EmploymentsPerCompany';
import { AbsenceReasons, AbsenceReasonsType } from './AbsenceReasons';
import { Positions, PositionsType } from './Positions';
import { Applications, ApplicationsType } from './Applications';
import {
  LeaveAccrualSuspensions,
  LeaveAccrualSuspensionsType
} from './LeaveAccrualSuspensions';
import { PositionsV2, PositionsV2Type } from './PositionsV2';
import { LeaveRequestsV2, LeaveRequestsV2Type } from './LeaveRequestsV2';

/**
 * This class represents the entity "ReasonCodes" of service "d365_metadata".
 */
export class ReasonCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ReasonCodesType<T>
{
  /**
   * Technical entity name for ReasonCodes.
   */
  static override _entityName = 'ReasonCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReasonCodes entity.
   */
  static _keys = ['ReasonCodeId'];
  /**
   * Reason Code Id.
   */
  declare reasonCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Skill Mapping Applicable.
   * @nullable
   */
  declare isSkillMappingApplicable?: NoYes | null;
  /**
   * Is Create New Position Applicable.
   * @nullable
   */
  declare isCreateNewPositionApplicable?: NoYes | null;
  /**
   * Is Compensation Applicable.
   * @nullable
   */
  declare isCompensationApplicable?: NoYes | null;
  /**
   * Is Termination Applicable.
   * @nullable
   */
  declare isTerminationApplicable?: NoYes | null;
  /**
   * Is Transfer Applicable.
   * @nullable
   */
  declare isTransferApplicable?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Absence Applicable.
   * @nullable
   */
  declare isAbsenceApplicable?: NoYes | null;
  /**
   * Is Edit Position Applicable.
   * @nullable
   */
  declare isEditPositionApplicable?: NoYes | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: HrmReasonCodeType | null;
  /**
   * Is Application Applicable.
   * @nullable
   */
  declare isApplicationApplicable?: NoYes | null;
  /**
   * Is Hire Applicable.
   * @nullable
   */
  declare isHireApplicable?: NoYes | null;
  /**
   * Is Benefits Applicable.
   * @nullable
   */
  declare isBenefitsApplicable?: NoYes | null;
  /**
   * Is Absence Adjustment Applicable.
   * @nullable
   */
  declare isAbsenceAdjustmentApplicable?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link Applicants} entity.
   */
  declare applicants: Applicants<T>[];
  /**
   * One-to-one navigation property to the {@link BenefitsParametersV2} entity.
   */
  declare benefitsParameterV2?: BenefitsParametersV2<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsParametersV2} entity.
   */
  declare benefitsParameterV2DefaultEnrollmentReasonCode?: BenefitsParametersV2<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsParametersV2} entity.
   */
  declare benefitsParameterV2DefaultCancelReasonCode?: BenefitsParametersV2<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsParametersV2} entity.
   */
  declare benefitsParameterV2DefaultLifeEventReasonCode?: BenefitsParametersV2<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsParametersV2} entity.
   */
  declare benefitsParameterV2DefaultReopenReasonCode?: BenefitsParametersV2<T> | null;
  /**
   * One-to-many navigation property to the {@link LeaveOfAbsenceRequests} entity.
   */
  declare leaveOfAbsenceRequests: LeaveOfAbsenceRequests<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveRequestHeaders} entity.
   */
  declare leaveRequestHeaders: LeaveRequestHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link EmploymentDetails} entity.
   */
  declare employmentDetail: EmploymentDetails<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveBankTransactions} entity.
   */
  declare leaveBankTransactions: LeaveBankTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveTypeReasonCodes} entity.
   */
  declare leaveTypeReasonCodes: LeaveTypeReasonCodes<T>[];
  /**
   * One-to-many navigation property to the {@link PayIntV1LeaveBankTransactions} entity.
   */
  declare payIntV1LeaveBankTransactionEntity: PayIntV1LeaveBankTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveBankTransactionsV2} entity.
   */
  declare leaveBankTransactionsV2: LeaveBankTransactionsV2<T>[];
  /**
   * One-to-many navigation property to the {@link PersonSkillMappings} entity.
   */
  declare personSkillMapping: PersonSkillMappings<T>[];
  /**
   * One-to-many navigation property to the {@link CandidatesToHire} entity.
   */
  declare candidatesToHire: CandidatesToHire<T>[];
  /**
   * One-to-many navigation property to the {@link EmploymentsPerCompany} entity.
   */
  declare employmentsPerCompany: EmploymentsPerCompany<T>[];
  /**
   * One-to-many navigation property to the {@link AbsenceReasons} entity.
   */
  declare absenceReason: AbsenceReasons<T>[];
  /**
   * One-to-many navigation property to the {@link Positions} entity.
   */
  declare positions: Positions<T>[];
  /**
   * One-to-many navigation property to the {@link Applications} entity.
   */
  declare applications: Applications<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveAccrualSuspensions} entity.
   */
  declare leaveAccrualSuspensions: LeaveAccrualSuspensions<T>[];
  /**
   * One-to-many navigation property to the {@link PositionsV2} entity.
   */
  declare positionsV2: PositionsV2<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveRequestsV2} entity.
   */
  declare leaveRequestsV2: LeaveRequestsV2<T>[];

  constructor(_entityApi: ReasonCodesApi<T>) {
    super(_entityApi);
  }
}

export interface ReasonCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  reasonCodeId: DeserializedType<T, 'Edm.String'>;
  isSkillMappingApplicable?: NoYes | null;
  isCreateNewPositionApplicable?: NoYes | null;
  isCompensationApplicable?: NoYes | null;
  isTerminationApplicable?: NoYes | null;
  isTransferApplicable?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isAbsenceApplicable?: NoYes | null;
  isEditPositionApplicable?: NoYes | null;
  type?: HrmReasonCodeType | null;
  isApplicationApplicable?: NoYes | null;
  isHireApplicable?: NoYes | null;
  isBenefitsApplicable?: NoYes | null;
  isAbsenceAdjustmentApplicable?: NoYes | null;
  applicants: ApplicantsType<T>[];
  benefitsParameterV2?: BenefitsParametersV2Type<T> | null;
  benefitsParameterV2DefaultEnrollmentReasonCode?: BenefitsParametersV2Type<T> | null;
  benefitsParameterV2DefaultCancelReasonCode?: BenefitsParametersV2Type<T> | null;
  benefitsParameterV2DefaultLifeEventReasonCode?: BenefitsParametersV2Type<T> | null;
  benefitsParameterV2DefaultReopenReasonCode?: BenefitsParametersV2Type<T> | null;
  leaveOfAbsenceRequests: LeaveOfAbsenceRequestsType<T>[];
  leaveRequestHeaders: LeaveRequestHeadersType<T>[];
  employmentDetail: EmploymentDetailsType<T>[];
  leaveBankTransactions: LeaveBankTransactionsType<T>[];
  leaveTypeReasonCodes: LeaveTypeReasonCodesType<T>[];
  payIntV1LeaveBankTransactionEntity: PayIntV1LeaveBankTransactionsType<T>[];
  leaveBankTransactionsV2: LeaveBankTransactionsV2Type<T>[];
  personSkillMapping: PersonSkillMappingsType<T>[];
  candidatesToHire: CandidatesToHireType<T>[];
  employmentsPerCompany: EmploymentsPerCompanyType<T>[];
  absenceReason: AbsenceReasonsType<T>[];
  positions: PositionsType<T>[];
  applications: ApplicationsType<T>[];
  leaveAccrualSuspensions: LeaveAccrualSuspensionsType<T>[];
  positionsV2: PositionsV2Type<T>[];
  leaveRequestsV2: LeaveRequestsV2Type<T>[];
}
