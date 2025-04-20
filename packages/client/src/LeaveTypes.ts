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
import type { LeaveTypesApi } from './LeaveTypesApi';
import { LeaveTypeCategory } from './LeaveTypeCategory';
import { NoYes } from './NoYes';
import { LeaveExpirationRuleTimeUnit } from './LeaveExpirationRuleTimeUnit';
import { LeaveAmountUnit } from './LeaveAmountUnit';
import { LeaveTypeRequestType } from './LeaveTypeRequestType';
import { LeaveRoundingType } from './LeaveRoundingType';
import { LeavePlanTiersV2, LeavePlanTiersV2Type } from './LeavePlanTiersV2';
import {
  LeaveOfAbsenceRequests,
  LeaveOfAbsenceRequestsType
} from './LeaveOfAbsenceRequests';
import {
  LeaveTypeSuspensionRelationships,
  LeaveTypeSuspensionRelationshipsType
} from './LeaveTypeSuspensionRelationships';
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
  LeaveBuySellPolicySellTiers,
  LeaveBuySellPolicySellTiersType
} from './LeaveBuySellPolicySellTiers';
import {
  LeaveBuySellRequests,
  LeaveBuySellRequestsType
} from './LeaveBuySellRequests';
import { EarningCodes, EarningCodesType } from './EarningCodes';
import {
  LeaveRequestDetails,
  LeaveRequestDetailsType
} from './LeaveRequestDetails';
import {
  LeaveAccrualSuspensions,
  LeaveAccrualSuspensionsType
} from './LeaveAccrualSuspensions';
import { EssLeaveBalances, EssLeaveBalancesType } from './EssLeaveBalances';
import { LeavePlans, LeavePlansType } from './LeavePlans';
import { LeaveRequestsV2, LeaveRequestsV2Type } from './LeaveRequestsV2';
import {
  LeaveBuySellPolicyBuyTiers,
  LeaveBuySellPolicyBuyTiersType
} from './LeaveBuySellPolicyBuyTiers';

/**
 * This class represents the entity "LeaveTypes" of service "d365_metadata".
 */
export class LeaveTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LeaveTypesType<T>
{
  /**
   * Technical entity name for LeaveTypes.
   */
  static override _entityName = 'LeaveTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaveTypes entity.
   */
  static _keys = ['dataAreaId', 'Type'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   */
  declare type: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category.
   * @nullable
   */
  declare category?: LeaveTypeCategory | null;
  /**
   * Earning Code Id.
   * @nullable
   */
  declare earningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Open Ended.
   * @nullable
   */
  declare isOpenEnded?: NoYes | null;
  /**
   * Restrict Access.
   * @nullable
   */
  declare restrictAccess?: NoYes | null;
  /**
   * Is Return To Work Notice Required.
   * @nullable
   */
  declare isReturnToWorkNoticeRequired?: NoYes | null;
  /**
   * Expiration Rule Effective Date.
   */
  declare expirationRuleEffectiveDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Expiration Rule Time Unit.
   * @nullable
   */
  declare expirationRuleTimeUnit?: LeaveExpirationRuleTimeUnit | null;
  /**
   * Calendar Color.
   * @nullable
   */
  declare calendarColor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hide Leave Balances.
   * @nullable
   */
  declare hideLeaveBalances?: NoYes | null;
  /**
   * Is Attachment Required.
   * @nullable
   */
  declare isAttachmentRequired?: NoYes | null;
  /**
   * Leave Amount Unit.
   * @nullable
   */
  declare leaveAmountUnit?: LeaveAmountUnit | null;
  /**
   * Carry Forward Leave Type.
   */
  declare carryForwardLeaveType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Reason Code Required.
   * @nullable
   */
  declare isReasonCodeRequired?: NoYes | null;
  /**
   * Include Holidays.
   * @nullable
   */
  declare includeHolidays?: NoYes | null;
  /**
   * Include Closed Days.
   * @nullable
   */
  declare includeClosedDays?: NoYes | null;
  /**
   * Closed Days Working Hours.
   */
  declare closedDaysWorkingHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Request Type.
   * @nullable
   */
  declare requestType?: LeaveTypeRequestType | null;
  /**
   * Include Weekend And Holidays.
   * @nullable
   */
  declare includeWeekendAndHolidays?: NoYes | null;
  /**
   * Expiration Rule Duration.
   */
  declare expirationRuleDuration: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Enable Half Day Definition.
   * @nullable
   */
  declare enableHalfDayDefinition?: NoYes | null;
  /**
   * Attachment Required On Update.
   * @nullable
   */
  declare attachmentRequiredOnUpdate?: NoYes | null;
  /**
   * Attachment Required On Create.
   * @nullable
   */
  declare attachmentRequiredOnCreate?: NoYes | null;
  /**
   * Workflow Id.
   * @nullable
   */
  declare workflowId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounding Type.
   * @nullable
   */
  declare roundingType?: LeaveRoundingType | null;
  /**
   * Holiday Corrections.
   * @nullable
   */
  declare holidayCorrections?: NoYes | null;
  /**
   * Rounding Precision.
   */
  declare roundingPrecision: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Attachment Required On Cancel.
   * @nullable
   */
  declare attachmentRequiredOnCancel?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link LeavePlanTiersV2} entity.
   */
  declare leavePlansTiersV2: LeavePlanTiersV2<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveOfAbsenceRequests} entity.
   */
  declare leaveOfAbsenceRequests: LeaveOfAbsenceRequests<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveTypeSuspensionRelationships} entity.
   */
  declare suspendedLeaveTypes: LeaveTypeSuspensionRelationships<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveTypeSuspensionRelationships} entity.
   */
  declare suspendedByLeaveTypes: LeaveTypeSuspensionRelationships<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveBankTransactions} entity.
   */
  declare leaveBankTransactions: LeaveBankTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveTypeReasonCodes} entity.
   */
  declare typeReasonCodes: LeaveTypeReasonCodes<T>[];
  /**
   * One-to-many navigation property to the {@link PayIntV1LeaveBankTransactions} entity.
   */
  declare payIntV1LeaveBankTransactionEntity: PayIntV1LeaveBankTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveBankTransactionsV2} entity.
   */
  declare leaveBankTransactionsV2: LeaveBankTransactionsV2<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveBuySellPolicySellTiers} entity.
   */
  declare leaveBuySellPolicySellTier: LeaveBuySellPolicySellTiers<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveBuySellRequests} entity.
   */
  declare leaveBuySellRequest: LeaveBuySellRequests<T>[];
  /**
   * One-to-one navigation property to the {@link EarningCodes} entity.
   */
  declare earning?: EarningCodes<T> | null;
  /**
   * One-to-many navigation property to the {@link LeaveRequestDetails} entity.
   */
  declare leaveRequestDetails: LeaveRequestDetails<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveAccrualSuspensions} entity.
   */
  declare leaveAccrualSuspensions: LeaveAccrualSuspensions<T>[];
  /**
   * One-to-many navigation property to the {@link EssLeaveBalances} entity.
   */
  declare essLeaveBalance: EssLeaveBalances<T>[];
  /**
   * One-to-many navigation property to the {@link LeavePlans} entity.
   */
  declare leavePlans: LeavePlans<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveRequestsV2} entity.
   */
  declare leaveRequestsV2: LeaveRequestsV2<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveBuySellPolicyBuyTiers} entity.
   */
  declare leaveBuySellPolicyBuyTier: LeaveBuySellPolicyBuyTiers<T>[];

  constructor(_entityApi: LeaveTypesApi<T>) {
    super(_entityApi);
  }
}

export interface LeaveTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  type: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  category?: LeaveTypeCategory | null;
  earningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  isOpenEnded?: NoYes | null;
  restrictAccess?: NoYes | null;
  isReturnToWorkNoticeRequired?: NoYes | null;
  expirationRuleEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expirationRuleTimeUnit?: LeaveExpirationRuleTimeUnit | null;
  calendarColor?: DeserializedType<T, 'Edm.String'> | null;
  hideLeaveBalances?: NoYes | null;
  isAttachmentRequired?: NoYes | null;
  leaveAmountUnit?: LeaveAmountUnit | null;
  carryForwardLeaveType: DeserializedType<T, 'Edm.Int64'>;
  isReasonCodeRequired?: NoYes | null;
  includeHolidays?: NoYes | null;
  includeClosedDays?: NoYes | null;
  closedDaysWorkingHours: DeserializedType<T, 'Edm.Decimal'>;
  requestType?: LeaveTypeRequestType | null;
  includeWeekendAndHolidays?: NoYes | null;
  expirationRuleDuration: DeserializedType<T, 'Edm.Int32'>;
  enableHalfDayDefinition?: NoYes | null;
  attachmentRequiredOnUpdate?: NoYes | null;
  attachmentRequiredOnCreate?: NoYes | null;
  workflowId?: DeserializedType<T, 'Edm.String'> | null;
  roundingType?: LeaveRoundingType | null;
  holidayCorrections?: NoYes | null;
  roundingPrecision: DeserializedType<T, 'Edm.Decimal'>;
  attachmentRequiredOnCancel?: NoYes | null;
  leavePlansTiersV2: LeavePlanTiersV2Type<T>[];
  leaveOfAbsenceRequests: LeaveOfAbsenceRequestsType<T>[];
  suspendedLeaveTypes: LeaveTypeSuspensionRelationshipsType<T>[];
  suspendedByLeaveTypes: LeaveTypeSuspensionRelationshipsType<T>[];
  leaveBankTransactions: LeaveBankTransactionsType<T>[];
  typeReasonCodes: LeaveTypeReasonCodesType<T>[];
  payIntV1LeaveBankTransactionEntity: PayIntV1LeaveBankTransactionsType<T>[];
  leaveBankTransactionsV2: LeaveBankTransactionsV2Type<T>[];
  leaveBuySellPolicySellTier: LeaveBuySellPolicySellTiersType<T>[];
  leaveBuySellRequest: LeaveBuySellRequestsType<T>[];
  earning?: EarningCodesType<T> | null;
  leaveRequestDetails: LeaveRequestDetailsType<T>[];
  leaveAccrualSuspensions: LeaveAccrualSuspensionsType<T>[];
  essLeaveBalance: EssLeaveBalancesType<T>[];
  leavePlans: LeavePlansType<T>[];
  leaveRequestsV2: LeaveRequestsV2Type<T>[];
  leaveBuySellPolicyBuyTier: LeaveBuySellPolicyBuyTiersType<T>[];
}
