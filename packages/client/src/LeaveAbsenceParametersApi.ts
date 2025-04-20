/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaveAbsenceParameters } from './LeaveAbsenceParameters';
import { LeaveAbsenceParametersRequestBuilder } from './LeaveAbsenceParametersRequestBuilder';
import { NoYes } from './NoYes';
import { HcmWorkerRelationType } from './HcmWorkerRelationType';
import { LeaveBalanceCalculationOption } from './LeaveBalanceCalculationOption';
import { LeaveAmountUnit } from './LeaveAmountUnit';
import { LeaveMonthsOfServiceCalculationOption } from './LeaveMonthsOfServiceCalculationOption';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class LeaveAbsenceParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeaveAbsenceParameters<DeSerializersT>, DeSerializersT>
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
  ): LeaveAbsenceParametersApi<DeSerializersT> {
    return new LeaveAbsenceParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LeaveAbsenceParameters;

  requestBuilder(): LeaveAbsenceParametersRequestBuilder<DeSerializersT> {
    return new LeaveAbsenceParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaveAbsenceParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LeaveAbsenceParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaveAbsenceParameters<DeSerializersT>,
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
    typeof LeaveAbsenceParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaveAbsenceParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHOW_BIRTHDAY_IN_ABSENCE_COORDINATOR_CALENDAR: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHOW_LEAVE_OF_ABSENCE_IN_ABSENCE_CALENDAR: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CALENDAR_SICK_LEAVE_COLOR: OrderableEdmTypeField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CALENDAR_LEAVE_APPROVED_COLOR: OrderableEdmTypeField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CALENDAR_SHOW_WORKER_TYPE_ABSENCE_COORDINATOR: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      HcmWorkerRelationType,
      true,
      true
    >;
    LEAVE_BALANCE_CALCULATION_OPTION: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      LeaveBalanceCalculationOption,
      true,
      true
    >;
    LEAVE_BALANCE_EXPIRATION_BATCH_START_TIME: OrderableEdmTypeField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SHOW_PENDING_LEAVE_IN_MANAGER_CALENDAR: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHOW_ONLY_ABSENCE_IN_TEAM_CALENDAR: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHOW_ONLY_ABSENCE_IN_COMPANY_CALENDAR: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CALENDAR_SHOW_WORKER_TYPE_ABSENCE_MANAGER: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      HcmWorkerRelationType,
      true,
      true
    >;
    LEAVE_AMOUNT_UNIT: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      LeaveAmountUnit,
      true,
      true
    >;
    SHOW_LEAVE_OF_ABSENCE_IN_TEAM_CALENDAR: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CALENDAR_LEAVE_REQUESTED_COLOR: OrderableEdmTypeField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CALENDAR_CURRENT_SICK_COLOR: OrderableEdmTypeField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LEAVE_MONTHS_OF_SERVICE_CALCULATION_OPTION: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      LeaveMonthsOfServiceCalculationOption,
      true,
      true
    >;
    ENABLE_RETURN_TO_WORK_NOTICE: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHOW_BIRTHDAY_IN_COMPANY_CALENDAR: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHOW_PENDING_LEAVE_IN_COMPANY_CALENDAR: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SICK_LEAVE_HALF_DAY: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CALENDAR_SHOW_WORKER_TYPE_GLOBAL: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      HcmWorkerRelationType,
      true,
      true
    >;
    ENABLE_BUY_LEAVE_POLICY: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMAIL_TEMPLATE_ID: OrderableEdmTypeField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALENDAR_LEAVE_DISABLE: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHOW_BIRTHDAY_IN_MANAGER_CALENDAR: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CALENDAR_SICK_LEAVE_DISABLE: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHOW_LEAVE_OF_ABSENCE_IN_MANAGER_CALENDAR: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEAVE_NUM_OF_DAYS_BEFORE_UPLOAD: OrderableEdmTypeField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SHOW_PENDING_LEAVE_IN_ABSENCE_COORDINATOR_CALENDAR: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_MANAGER_SICK_LEAVE_INDIRECT: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHOW_SICK_LEAVE_IN_COMPANY_CALENDAR: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_HALF_DAY_DEFINITION: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHOW_ONLY_ABSENCE_IN_MANAGER_CALENDAR: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ABSENCE_HIERARCHY_TYPE: OrderableEdmTypeField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DISCLOSURE_GUIDANCE: OrderableEdmTypeField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_WORKFLOW_FOR_SICK_LEAVE_NOTICE: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_SELL_LEAVE_POLICY: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANDATORY_END_DATE_FOR_SICK_LEAVE: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    END_DATE_OF_SICK_LEAVE: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHOW_PENDING_LEAVE_IN_TEAM_CALENDAR: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEAVE_CALCULATION_CHANGE: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_DISCLOSURE_GUIDANCE: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHOW_BIRTHDAY_IN_TEAM_CALENDAR: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHOW_LEAVE_OF_ABSENCE_IN_COMPANY_CALENDAR: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CALENDAR_SHOW_WORKER_TYPE_MANAGER: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      HcmWorkerRelationType,
      true,
      true
    >;
    SHOW_ONLY_ABSENCE_IN_ABSENCE_COORDINATOR_CALENDAR: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSS_LEAVE_AND_ABSENCE_REQUEST_ENABLED: EnumField<
      LeaveAbsenceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LeaveAbsenceParameters<DeSerializers>>;
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
         * Static representation of the {@link showBirthdayInAbsenceCoordinatorCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_BIRTHDAY_IN_ABSENCE_COORDINATOR_CALENDAR:
          fieldBuilder.buildEnumField(
            'ShowBirthdayInAbsenceCoordinatorCalendar',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link showLeaveOfAbsenceInAbsenceCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_LEAVE_OF_ABSENCE_IN_ABSENCE_CALENDAR: fieldBuilder.buildEnumField(
          'ShowLeaveOfAbsenceInAbsenceCalendar',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link calendarSickLeaveColor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_SICK_LEAVE_COLOR: fieldBuilder.buildEdmTypeField(
          'CalendarSickLeaveColor',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link calendarLeaveApprovedColor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_LEAVE_APPROVED_COLOR: fieldBuilder.buildEdmTypeField(
          'CalendarLeaveApprovedColor',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link calendarShowWorkerTypeAbsenceCoordinator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_SHOW_WORKER_TYPE_ABSENCE_COORDINATOR:
          fieldBuilder.buildEnumField(
            'CalendarShowWorkerTypeAbsenceCoordinator',
            HcmWorkerRelationType,
            true
          ),
        /**
         * Static representation of the {@link leaveBalanceCalculationOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_BALANCE_CALCULATION_OPTION: fieldBuilder.buildEnumField(
          'LeaveBalanceCalculationOption',
          LeaveBalanceCalculationOption,
          true
        ),
        /**
         * Static representation of the {@link leaveBalanceExpirationBatchStartTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_BALANCE_EXPIRATION_BATCH_START_TIME:
          fieldBuilder.buildEdmTypeField(
            'LeaveBalanceExpirationBatchStartTime',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link showPendingLeaveInManagerCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_PENDING_LEAVE_IN_MANAGER_CALENDAR: fieldBuilder.buildEnumField(
          'ShowPendingLeaveInManagerCalendar',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link showOnlyAbsenceInTeamCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_ONLY_ABSENCE_IN_TEAM_CALENDAR: fieldBuilder.buildEnumField(
          'ShowOnlyAbsenceInTeamCalendar',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link showOnlyAbsenceInCompanyCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_ONLY_ABSENCE_IN_COMPANY_CALENDAR: fieldBuilder.buildEnumField(
          'ShowOnlyAbsenceInCompanyCalendar',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link calendarShowWorkerTypeAbsenceManager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_SHOW_WORKER_TYPE_ABSENCE_MANAGER: fieldBuilder.buildEnumField(
          'CalendarShowWorkerTypeAbsenceManager',
          HcmWorkerRelationType,
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
         * Static representation of the {@link showLeaveOfAbsenceInTeamCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_LEAVE_OF_ABSENCE_IN_TEAM_CALENDAR: fieldBuilder.buildEnumField(
          'ShowLeaveOfAbsenceInTeamCalendar',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link calendarLeaveRequestedColor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_LEAVE_REQUESTED_COLOR: fieldBuilder.buildEdmTypeField(
          'CalendarLeaveRequestedColor',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link calendarCurrentSickColor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_CURRENT_SICK_COLOR: fieldBuilder.buildEdmTypeField(
          'CalendarCurrentSickColor',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link leaveMonthsOfServiceCalculationOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_MONTHS_OF_SERVICE_CALCULATION_OPTION: fieldBuilder.buildEnumField(
          'LeaveMonthsOfServiceCalculationOption',
          LeaveMonthsOfServiceCalculationOption,
          true
        ),
        /**
         * Static representation of the {@link enableReturnToWorkNotice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_RETURN_TO_WORK_NOTICE: fieldBuilder.buildEnumField(
          'EnableReturnToWorkNotice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link showBirthdayInCompanyCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_BIRTHDAY_IN_COMPANY_CALENDAR: fieldBuilder.buildEnumField(
          'ShowBirthdayInCompanyCalendar',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link showPendingLeaveInCompanyCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_PENDING_LEAVE_IN_COMPANY_CALENDAR: fieldBuilder.buildEnumField(
          'ShowPendingLeaveInCompanyCalendar',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sickLeaveHalfDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SICK_LEAVE_HALF_DAY: fieldBuilder.buildEnumField(
          'SickLeaveHalfDay',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link calendarShowWorkerTypeGlobal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_SHOW_WORKER_TYPE_GLOBAL: fieldBuilder.buildEnumField(
          'CalendarShowWorkerTypeGlobal',
          HcmWorkerRelationType,
          true
        ),
        /**
         * Static representation of the {@link enableBuyLeavePolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_BUY_LEAVE_POLICY: fieldBuilder.buildEnumField(
          'EnableBuyLeavePolicy',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link emailTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'EmailTemplateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calendarLeaveDisable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_LEAVE_DISABLE: fieldBuilder.buildEnumField(
          'CalendarLeaveDisable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link showBirthdayInManagerCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_BIRTHDAY_IN_MANAGER_CALENDAR: fieldBuilder.buildEnumField(
          'ShowBirthdayInManagerCalendar',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link calendarSickLeaveDisable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_SICK_LEAVE_DISABLE: fieldBuilder.buildEnumField(
          'CalendarSickLeaveDisable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link showLeaveOfAbsenceInManagerCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_LEAVE_OF_ABSENCE_IN_MANAGER_CALENDAR: fieldBuilder.buildEnumField(
          'ShowLeaveOfAbsenceInManagerCalendar',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link leaveNumOfDaysBeforeUpload} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_NUM_OF_DAYS_BEFORE_UPLOAD: fieldBuilder.buildEdmTypeField(
          'LeaveNumOfDaysBeforeUpload',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link showPendingLeaveInAbsenceCoordinatorCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_PENDING_LEAVE_IN_ABSENCE_COORDINATOR_CALENDAR:
          fieldBuilder.buildEnumField(
            'ShowPendingLeaveInAbsenceCoordinatorCalendar',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link allowManagerSickLeaveIndirect} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_MANAGER_SICK_LEAVE_INDIRECT: fieldBuilder.buildEnumField(
          'AllowManagerSickLeaveIndirect',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link showSickLeaveInCompanyCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_SICK_LEAVE_IN_COMPANY_CALENDAR: fieldBuilder.buildEnumField(
          'ShowSickLeaveInCompanyCalendar',
          NoYes,
          true
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
         * Static representation of the {@link showOnlyAbsenceInManagerCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_ONLY_ABSENCE_IN_MANAGER_CALENDAR: fieldBuilder.buildEnumField(
          'ShowOnlyAbsenceInManagerCalendar',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link absenceHierarchyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSENCE_HIERARCHY_TYPE: fieldBuilder.buildEdmTypeField(
          'AbsenceHierarchyType',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link disclosureGuidance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCLOSURE_GUIDANCE: fieldBuilder.buildEdmTypeField(
          'DisclosureGuidance',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enableWorkflowForSickLeaveNotice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_WORKFLOW_FOR_SICK_LEAVE_NOTICE: fieldBuilder.buildEnumField(
          'EnableWorkflowForSickLeaveNotice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enableSellLeavePolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_SELL_LEAVE_POLICY: fieldBuilder.buildEnumField(
          'EnableSellLeavePolicy',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mandatoryEndDateForSickLeave} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_END_DATE_FOR_SICK_LEAVE: fieldBuilder.buildEnumField(
          'MandatoryEndDateForSickLeave',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link endDateOfSickLeave} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE_OF_SICK_LEAVE: fieldBuilder.buildEnumField(
          'EndDateOfSickLeave',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link showPendingLeaveInTeamCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_PENDING_LEAVE_IN_TEAM_CALENDAR: fieldBuilder.buildEnumField(
          'ShowPendingLeaveInTeamCalendar',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link leaveCalculationChange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_CALCULATION_CHANGE: fieldBuilder.buildEnumField(
          'LeaveCalculationChange',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enableDisclosureGuidance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_DISCLOSURE_GUIDANCE: fieldBuilder.buildEnumField(
          'EnableDisclosureGuidance',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link showBirthdayInTeamCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_BIRTHDAY_IN_TEAM_CALENDAR: fieldBuilder.buildEnumField(
          'ShowBirthdayInTeamCalendar',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link showLeaveOfAbsenceInCompanyCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_LEAVE_OF_ABSENCE_IN_COMPANY_CALENDAR: fieldBuilder.buildEnumField(
          'ShowLeaveOfAbsenceInCompanyCalendar',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link calendarShowWorkerTypeManager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_SHOW_WORKER_TYPE_MANAGER: fieldBuilder.buildEnumField(
          'CalendarShowWorkerTypeManager',
          HcmWorkerRelationType,
          true
        ),
        /**
         * Static representation of the {@link showOnlyAbsenceInAbsenceCoordinatorCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_ONLY_ABSENCE_IN_ABSENCE_COORDINATOR_CALENDAR:
          fieldBuilder.buildEnumField(
            'ShowOnlyAbsenceInAbsenceCoordinatorCalendar',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link mssLeaveAndAbsenceRequestEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSS_LEAVE_AND_ABSENCE_REQUEST_ENABLED: fieldBuilder.buildEnumField(
          'MssLeaveAndAbsenceRequestEnabled',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaveAbsenceParameters)
      };
    }

    return this._schema;
  }
}
