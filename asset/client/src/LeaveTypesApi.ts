/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaveTypes } from './LeaveTypes';
import { LeaveTypesRequestBuilder } from './LeaveTypesRequestBuilder';
import { LeavePlanTiersV2Api } from './LeavePlanTiersV2Api';
import { LeaveOfAbsenceRequestsApi } from './LeaveOfAbsenceRequestsApi';
import { LeaveTypeSuspensionRelationshipsApi } from './LeaveTypeSuspensionRelationshipsApi';
import { LeaveBankTransactionsApi } from './LeaveBankTransactionsApi';
import { LeaveTypeReasonCodesApi } from './LeaveTypeReasonCodesApi';
import { PayIntV1LeaveBankTransactionsApi } from './PayIntV1LeaveBankTransactionsApi';
import { LeaveBankTransactionsV2Api } from './LeaveBankTransactionsV2Api';
import { LeaveBuySellPolicySellTiersApi } from './LeaveBuySellPolicySellTiersApi';
import { LeaveBuySellRequestsApi } from './LeaveBuySellRequestsApi';
import { EarningCodesApi } from './EarningCodesApi';
import { LeaveRequestDetailsApi } from './LeaveRequestDetailsApi';
import { LeaveAccrualSuspensionsApi } from './LeaveAccrualSuspensionsApi';
import { EssLeaveBalancesApi } from './EssLeaveBalancesApi';
import { LeavePlansApi } from './LeavePlansApi';
import { LeaveRequestsV2Api } from './LeaveRequestsV2Api';
import { LeaveBuySellPolicyBuyTiersApi } from './LeaveBuySellPolicyBuyTiersApi';
import { LeaveTypeCategory } from './LeaveTypeCategory';
import { NoYes } from './NoYes';
import { LeaveExpirationRuleTimeUnit } from './LeaveExpirationRuleTimeUnit';
import { LeaveAmountUnit } from './LeaveAmountUnit';
import { LeaveTypeRequestType } from './LeaveTypeRequestType';
import { LeaveRoundingType } from './LeaveRoundingType';
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
export class LeaveTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeaveTypes<DeSerializersT>, DeSerializersT>
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
  ): LeaveTypesApi<DeSerializersT> {
    return new LeaveTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link leavePlansTiersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_PLANS_TIERS_V_2: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeavePlanTiersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveOfAbsenceRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_OF_ABSENCE_REQUESTS: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveOfAbsenceRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link suspendedLeaveTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUSPENDED_LEAVE_TYPES: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveTypeSuspensionRelationshipsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link suspendedByLeaveTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUSPENDED_BY_LEAVE_TYPES: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveTypeSuspensionRelationshipsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBankTransactions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BANK_TRANSACTIONS: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveBankTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link typeReasonCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TYPE_REASON_CODES: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveTypeReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntV1LeaveBankTransactionEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_V_1_LEAVE_BANK_TRANSACTION_ENTITY: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      PayIntV1LeaveBankTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBankTransactionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BANK_TRANSACTIONS_V_2: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveBankTransactionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBuySellPolicySellTier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BUY_SELL_POLICY_SELL_TIER: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveBuySellPolicySellTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBuySellRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BUY_SELL_REQUEST: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveBuySellRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link earning} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EARNING: OneToOneLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      EarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveRequestDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_REQUEST_DETAILS: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveRequestDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveAccrualSuspensions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_ACCRUAL_SUSPENSIONS: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveAccrualSuspensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link essLeaveBalance} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ESS_LEAVE_BALANCE: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      EssLeaveBalancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leavePlans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_PLANS: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeavePlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveRequestsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_REQUESTS_V_2: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveRequestsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBuySellPolicyBuyTier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BUY_SELL_POLICY_BUY_TIER: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveBuySellPolicyBuyTiersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LeavePlanTiersV2Api<DeSerializersT>,
      LeaveOfAbsenceRequestsApi<DeSerializersT>,
      LeaveTypeSuspensionRelationshipsApi<DeSerializersT>,
      LeaveTypeSuspensionRelationshipsApi<DeSerializersT>,
      LeaveBankTransactionsApi<DeSerializersT>,
      LeaveTypeReasonCodesApi<DeSerializersT>,
      PayIntV1LeaveBankTransactionsApi<DeSerializersT>,
      LeaveBankTransactionsV2Api<DeSerializersT>,
      LeaveBuySellPolicySellTiersApi<DeSerializersT>,
      LeaveBuySellRequestsApi<DeSerializersT>,
      EarningCodesApi<DeSerializersT>,
      LeaveRequestDetailsApi<DeSerializersT>,
      LeaveAccrualSuspensionsApi<DeSerializersT>,
      EssLeaveBalancesApi<DeSerializersT>,
      LeavePlansApi<DeSerializersT>,
      LeaveRequestsV2Api<DeSerializersT>,
      LeaveBuySellPolicyBuyTiersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEAVE_PLANS_TIERS_V_2: new OneToManyLink(
        'LeavePlansTiersV2',
        this,
        linkedApis[0]
      ),
      LEAVE_OF_ABSENCE_REQUESTS: new OneToManyLink(
        'LeaveOfAbsenceRequests',
        this,
        linkedApis[1]
      ),
      SUSPENDED_LEAVE_TYPES: new OneToManyLink(
        'SuspendedLeaveTypes',
        this,
        linkedApis[2]
      ),
      SUSPENDED_BY_LEAVE_TYPES: new OneToManyLink(
        'SuspendedByLeaveTypes',
        this,
        linkedApis[3]
      ),
      LEAVE_BANK_TRANSACTIONS: new OneToManyLink(
        'LeaveBankTransactions',
        this,
        linkedApis[4]
      ),
      TYPE_REASON_CODES: new OneToManyLink(
        'TypeReasonCodes',
        this,
        linkedApis[5]
      ),
      PAY_INT_V_1_LEAVE_BANK_TRANSACTION_ENTITY: new OneToManyLink(
        'PayIntV1LeaveBankTransactionEntity',
        this,
        linkedApis[6]
      ),
      LEAVE_BANK_TRANSACTIONS_V_2: new OneToManyLink(
        'LeaveBankTransactionsV2',
        this,
        linkedApis[7]
      ),
      LEAVE_BUY_SELL_POLICY_SELL_TIER: new OneToManyLink(
        'LeaveBuySellPolicySellTier',
        this,
        linkedApis[8]
      ),
      LEAVE_BUY_SELL_REQUEST: new OneToManyLink(
        'LeaveBuySellRequest',
        this,
        linkedApis[9]
      ),
      EARNING: new OneToOneLink('Earning', this, linkedApis[10]),
      LEAVE_REQUEST_DETAILS: new OneToManyLink(
        'LeaveRequestDetails',
        this,
        linkedApis[11]
      ),
      LEAVE_ACCRUAL_SUSPENSIONS: new OneToManyLink(
        'LeaveAccrualSuspensions',
        this,
        linkedApis[12]
      ),
      ESS_LEAVE_BALANCE: new OneToManyLink(
        'EssLeaveBalance',
        this,
        linkedApis[13]
      ),
      LEAVE_PLANS: new OneToManyLink('LeavePlans', this, linkedApis[14]),
      LEAVE_REQUESTS_V_2: new OneToManyLink(
        'LeaveRequestsV2',
        this,
        linkedApis[15]
      ),
      LEAVE_BUY_SELL_POLICY_BUY_TIER: new OneToManyLink(
        'LeaveBuySellPolicyBuyTier',
        this,
        linkedApis[16]
      )
    };
    return this;
  }

  entityConstructor = LeaveTypes;

  requestBuilder(): LeaveTypesRequestBuilder<DeSerializersT> {
    return new LeaveTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaveTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LeaveTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LeaveTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LeaveTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LeaveTypes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE: OrderableEdmTypeField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY: EnumField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      LeaveTypeCategory,
      true,
      true
    >;
    EARNING_CODE_ID: OrderableEdmTypeField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_OPEN_ENDED: EnumField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESTRICT_ACCESS: EnumField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_RETURN_TO_WORK_NOTICE_REQUIRED: EnumField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPIRATION_RULE_EFFECTIVE_DATE: OrderableEdmTypeField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXPIRATION_RULE_TIME_UNIT: EnumField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      LeaveExpirationRuleTimeUnit,
      true,
      true
    >;
    CALENDAR_COLOR: OrderableEdmTypeField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIDE_LEAVE_BALANCES: EnumField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ATTACHMENT_REQUIRED: EnumField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEAVE_AMOUNT_UNIT: EnumField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      LeaveAmountUnit,
      true,
      true
    >;
    CARRY_FORWARD_LEAVE_TYPE: OrderableEdmTypeField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_REASON_CODE_REQUIRED: EnumField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_HOLIDAYS: EnumField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_CLOSED_DAYS: EnumField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLOSED_DAYS_WORKING_HOURS: OrderableEdmTypeField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUEST_TYPE: EnumField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      LeaveTypeRequestType,
      true,
      true
    >;
    INCLUDE_WEEKEND_AND_HOLIDAYS: EnumField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPIRATION_RULE_DURATION: OrderableEdmTypeField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENABLE_HALF_DAY_DEFINITION: EnumField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ATTACHMENT_REQUIRED_ON_UPDATE: EnumField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ATTACHMENT_REQUIRED_ON_CREATE: EnumField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORKFLOW_ID: OrderableEdmTypeField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING_TYPE: EnumField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      LeaveRoundingType,
      true,
      true
    >;
    HOLIDAY_CORRECTIONS: EnumField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ROUNDING_PRECISION: OrderableEdmTypeField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ATTACHMENT_REQUIRED_ON_CANCEL: EnumField<
      LeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leavePlansTiersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_PLANS_TIERS_V_2: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeavePlanTiersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveOfAbsenceRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_OF_ABSENCE_REQUESTS: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveOfAbsenceRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link suspendedLeaveTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUSPENDED_LEAVE_TYPES: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveTypeSuspensionRelationshipsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link suspendedByLeaveTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUSPENDED_BY_LEAVE_TYPES: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveTypeSuspensionRelationshipsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBankTransactions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BANK_TRANSACTIONS: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveBankTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link typeReasonCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TYPE_REASON_CODES: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveTypeReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntV1LeaveBankTransactionEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_V_1_LEAVE_BANK_TRANSACTION_ENTITY: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      PayIntV1LeaveBankTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBankTransactionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BANK_TRANSACTIONS_V_2: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveBankTransactionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBuySellPolicySellTier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BUY_SELL_POLICY_SELL_TIER: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveBuySellPolicySellTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBuySellRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BUY_SELL_REQUEST: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveBuySellRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link earning} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EARNING: OneToOneLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      EarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveRequestDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_REQUEST_DETAILS: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveRequestDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveAccrualSuspensions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_ACCRUAL_SUSPENSIONS: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveAccrualSuspensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link essLeaveBalance} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ESS_LEAVE_BALANCE: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      EssLeaveBalancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leavePlans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_PLANS: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeavePlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveRequestsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_REQUESTS_V_2: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveRequestsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBuySellPolicyBuyTier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BUY_SELL_POLICY_BUY_TIER: OneToManyLink<
      LeaveTypes<DeSerializersT>,
      DeSerializersT,
      LeaveBuySellPolicyBuyTiersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LeaveTypes<DeSerializers>>;
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
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEdmTypeField('Type', 'Edm.String', false),
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
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEnumField(
          'Category',
          LeaveTypeCategory,
          true
        ),
        /**
         * Static representation of the {@link earningCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_CODE_ID: fieldBuilder.buildEdmTypeField(
          'EarningCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOpenEnded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OPEN_ENDED: fieldBuilder.buildEnumField('IsOpenEnded', NoYes, true),
        /**
         * Static representation of the {@link restrictAccess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICT_ACCESS: fieldBuilder.buildEnumField(
          'RestrictAccess',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isReturnToWorkNoticeRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RETURN_TO_WORK_NOTICE_REQUIRED: fieldBuilder.buildEnumField(
          'IsReturnToWorkNoticeRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link expirationRuleEffectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_RULE_EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationRuleEffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link expirationRuleTimeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_RULE_TIME_UNIT: fieldBuilder.buildEnumField(
          'ExpirationRuleTimeUnit',
          LeaveExpirationRuleTimeUnit,
          true
        ),
        /**
         * Static representation of the {@link calendarColor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_COLOR: fieldBuilder.buildEdmTypeField(
          'CalendarColor',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hideLeaveBalances} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIDE_LEAVE_BALANCES: fieldBuilder.buildEnumField(
          'HideLeaveBalances',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isAttachmentRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ATTACHMENT_REQUIRED: fieldBuilder.buildEnumField(
          'IsAttachmentRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link leaveAmountUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_AMOUNT_UNIT: fieldBuilder.buildEnumField(
          'LeaveAmountUnit',
          LeaveAmountUnit,
          true
        ),
        /**
         * Static representation of the {@link carryForwardLeaveType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARRY_FORWARD_LEAVE_TYPE: fieldBuilder.buildEdmTypeField(
          'CarryForwardLeaveType',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link isReasonCodeRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REASON_CODE_REQUIRED: fieldBuilder.buildEnumField(
          'IsReasonCodeRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeHolidays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_HOLIDAYS: fieldBuilder.buildEnumField(
          'IncludeHolidays',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeClosedDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_CLOSED_DAYS: fieldBuilder.buildEnumField(
          'IncludeClosedDays',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link closedDaysWorkingHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_DAYS_WORKING_HOURS: fieldBuilder.buildEdmTypeField(
          'ClosedDaysWorkingHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link requestType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_TYPE: fieldBuilder.buildEnumField(
          'RequestType',
          LeaveTypeRequestType,
          true
        ),
        /**
         * Static representation of the {@link includeWeekendAndHolidays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_WEEKEND_AND_HOLIDAYS: fieldBuilder.buildEnumField(
          'IncludeWeekendAndHolidays',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link expirationRuleDuration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_RULE_DURATION: fieldBuilder.buildEdmTypeField(
          'ExpirationRuleDuration',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link enableHalfDayDefinition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_HALF_DAY_DEFINITION: fieldBuilder.buildEnumField(
          'EnableHalfDayDefinition',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link attachmentRequiredOnUpdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_REQUIRED_ON_UPDATE: fieldBuilder.buildEnumField(
          'AttachmentRequiredOnUpdate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link attachmentRequiredOnCreate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_REQUIRED_ON_CREATE: fieldBuilder.buildEnumField(
          'AttachmentRequiredOnCreate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workflowId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_ID: fieldBuilder.buildEdmTypeField(
          'WorkflowId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link roundingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_TYPE: fieldBuilder.buildEnumField(
          'RoundingType',
          LeaveRoundingType,
          true
        ),
        /**
         * Static representation of the {@link holidayCorrections} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOLIDAY_CORRECTIONS: fieldBuilder.buildEnumField(
          'HolidayCorrections',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link roundingPrecision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_PRECISION: fieldBuilder.buildEdmTypeField(
          'RoundingPrecision',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link attachmentRequiredOnCancel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_REQUIRED_ON_CANCEL: fieldBuilder.buildEnumField(
          'AttachmentRequiredOnCancel',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaveTypes)
      };
    }

    return this._schema;
  }
}
