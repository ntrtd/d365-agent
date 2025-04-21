/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EssLeaveTypes } from './EssLeaveTypes';
import { EssLeaveTypesRequestBuilder } from './EssLeaveTypesRequestBuilder';
import { EssLeaveTypeReasonCodesApi } from './EssLeaveTypeReasonCodesApi';
import { EssLeaveTimeOffDatesApi } from './EssLeaveTimeOffDatesApi';
import { EssLeaveBalancesApi } from './EssLeaveBalancesApi';
import { EssLeaveRequestDetailsApi } from './EssLeaveRequestDetailsApi';
import { MssLeaveTimeOffDatesApi } from './MssLeaveTimeOffDatesApi';
import { EssLeaveRequestAssignedDetailsApi } from './EssLeaveRequestAssignedDetailsApi';
import { LeaveTypeCategory } from './LeaveTypeCategory';
import { NoYes } from './NoYes';
import { LeaveAmountUnit } from './LeaveAmountUnit';
import { LeaveTypeRequestType } from './LeaveTypeRequestType';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class EssLeaveTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EssLeaveTypes<DeSerializersT>, DeSerializersT>
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
  ): EssLeaveTypesApi<DeSerializersT> {
    return new EssLeaveTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link reasonCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODES: OneToManyLink<
      EssLeaveTypes<DeSerializersT>,
      DeSerializersT,
      EssLeaveTypeReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link timeOffDates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_OFF_DATES: OneToManyLink<
      EssLeaveTypes<DeSerializersT>,
      DeSerializersT,
      EssLeaveTimeOffDatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link balances} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BALANCES: OneToManyLink<
      EssLeaveTypes<DeSerializersT>,
      DeSerializersT,
      EssLeaveBalancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveRequestDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_REQUEST_DETAILS: OneToManyLink<
      EssLeaveTypes<DeSerializersT>,
      DeSerializersT,
      EssLeaveRequestDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reportsTimeOffDates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORTS_TIME_OFF_DATES: OneToManyLink<
      EssLeaveTypes<DeSerializersT>,
      DeSerializersT,
      MssLeaveTimeOffDatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveRequestAssignedDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_REQUEST_ASSIGNED_DETAILS: OneToManyLink<
      EssLeaveTypes<DeSerializersT>,
      DeSerializersT,
      EssLeaveRequestAssignedDetailsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EssLeaveTypeReasonCodesApi<DeSerializersT>,
      EssLeaveTimeOffDatesApi<DeSerializersT>,
      EssLeaveBalancesApi<DeSerializersT>,
      EssLeaveRequestDetailsApi<DeSerializersT>,
      MssLeaveTimeOffDatesApi<DeSerializersT>,
      EssLeaveRequestAssignedDetailsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REASON_CODES: new OneToManyLink('ReasonCodes', this, linkedApis[0]),
      TIME_OFF_DATES: new OneToManyLink('TimeOffDates', this, linkedApis[1]),
      BALANCES: new OneToManyLink('Balances', this, linkedApis[2]),
      LEAVE_REQUEST_DETAILS: new OneToManyLink(
        'LeaveRequestDetails',
        this,
        linkedApis[3]
      ),
      REPORTS_TIME_OFF_DATES: new OneToManyLink(
        'ReportsTimeOffDates',
        this,
        linkedApis[4]
      ),
      LEAVE_REQUEST_ASSIGNED_DETAILS: new OneToManyLink(
        'LeaveRequestAssignedDetails',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = EssLeaveTypes;

  requestBuilder(): EssLeaveTypesRequestBuilder<DeSerializersT> {
    return new EssLeaveTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EssLeaveTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EssLeaveTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EssLeaveTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof EssLeaveTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(EssLeaveTypes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EssLeaveTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEAVE_TYPE_ID: OrderableEdmTypeField<
      EssLeaveTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY: EnumField<
      EssLeaveTypes<DeSerializers>,
      DeSerializersT,
      LeaveTypeCategory,
      true,
      true
    >;
    INCLUDE_CLOSED_DAYS: EnumField<
      EssLeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ATTACHMENT_REQUIRED_ON_CANCEL: EnumField<
      EssLeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_HOLIDAYS: EnumField<
      EssLeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEAVE_AMOUNT_UNIT: EnumField<
      EssLeaveTypes<DeSerializers>,
      DeSerializersT,
      LeaveAmountUnit,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      EssLeaveTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_TYPE: EnumField<
      EssLeaveTypes<DeSerializers>,
      DeSerializersT,
      LeaveTypeRequestType,
      true,
      true
    >;
    CLOSED_DAYS_WORKING_HOURS: OrderableEdmTypeField<
      EssLeaveTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INCLUDE_WEEKEND_AND_HOLIDAYS: EnumField<
      EssLeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ATTACHMENT_REQUIRED: EnumField<
      EssLeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_OPEN_ENDED: EnumField<
      EssLeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ATTACHMENT_REQUIRED_ON_UPDATE: EnumField<
      EssLeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_HALF_DAY_DEFINITION: EnumField<
      EssLeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_REASON_CODE_REQUIRED: EnumField<
      EssLeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ATTACHMENT_REQUIRED_ON_CREATE: EnumField<
      EssLeaveTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reasonCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODES: OneToManyLink<
      EssLeaveTypes<DeSerializersT>,
      DeSerializersT,
      EssLeaveTypeReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link timeOffDates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_OFF_DATES: OneToManyLink<
      EssLeaveTypes<DeSerializersT>,
      DeSerializersT,
      EssLeaveTimeOffDatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link balances} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BALANCES: OneToManyLink<
      EssLeaveTypes<DeSerializersT>,
      DeSerializersT,
      EssLeaveBalancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveRequestDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_REQUEST_DETAILS: OneToManyLink<
      EssLeaveTypes<DeSerializersT>,
      DeSerializersT,
      EssLeaveRequestDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reportsTimeOffDates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORTS_TIME_OFF_DATES: OneToManyLink<
      EssLeaveTypes<DeSerializersT>,
      DeSerializersT,
      MssLeaveTimeOffDatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveRequestAssignedDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_REQUEST_ASSIGNED_DETAILS: OneToManyLink<
      EssLeaveTypes<DeSerializersT>,
      DeSerializersT,
      EssLeaveRequestAssignedDetailsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EssLeaveTypes<DeSerializers>>;
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
         * Static representation of the {@link leaveTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'LeaveTypeId',
          'Edm.String',
          false
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
         * Static representation of the {@link includeClosedDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_CLOSED_DAYS: fieldBuilder.buildEnumField(
          'IncludeClosedDays',
          NoYes,
          true
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
         * Static representation of the {@link leaveAmountUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_AMOUNT_UNIT: fieldBuilder.buildEnumField(
          'LeaveAmountUnit',
          LeaveAmountUnit,
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
         * Static representation of the {@link requestType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_TYPE: fieldBuilder.buildEnumField(
          'RequestType',
          LeaveTypeRequestType,
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
         * Static representation of the {@link includeWeekendAndHolidays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_WEEKEND_AND_HOLIDAYS: fieldBuilder.buildEnumField(
          'IncludeWeekendAndHolidays',
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
         * Static representation of the {@link isOpenEnded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OPEN_ENDED: fieldBuilder.buildEnumField('IsOpenEnded', NoYes, true),
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
         * Static representation of the {@link enableHalfDayDefinition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_HALF_DAY_DEFINITION: fieldBuilder.buildEnumField(
          'EnableHalfDayDefinition',
          NoYes,
          true
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
         * Static representation of the {@link attachmentRequiredOnCreate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_REQUIRED_ON_CREATE: fieldBuilder.buildEnumField(
          'AttachmentRequiredOnCreate',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EssLeaveTypes)
      };
    }

    return this._schema;
  }
}
