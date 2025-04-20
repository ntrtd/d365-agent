/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAndAttendanceTimeProfileDetails } from './TimeAndAttendanceTimeProfileDetails';
import { TimeAndAttendanceTimeProfileDetailsRequestBuilder } from './TimeAndAttendanceTimeProfileDetailsRequestBuilder';
import { TimeAndAttendanceTimeProfileLinesV2Api } from './TimeAndAttendanceTimeProfileLinesV2Api';
import { TimeAndAttendanceTimeProfileLinesApi } from './TimeAndAttendanceTimeProfileLinesApi';
import { TimeAndAttendanceTimeProfilesApi } from './TimeAndAttendanceTimeProfilesApi';
import { JmgDayIdEnum } from './JmgDayIdEnum';
import { NoYes } from './NoYes';
import { JmgProfileStartCodeBlankPrev } from './JmgProfileStartCodeBlankPrev';
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
export class TimeAndAttendanceTimeProfileDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TimeAndAttendanceTimeProfileDetails<DeSerializersT>,
      DeSerializersT
    >
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
  ): TimeAndAttendanceTimeProfileDetailsApi<DeSerializersT> {
    return new TimeAndAttendanceTimeProfileDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link timeAndAttendanceTimeProfileLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_AND_ATTENDANCE_TIME_PROFILE_LINES_V_2: OneToManyLink<
      TimeAndAttendanceTimeProfileDetails<DeSerializersT>,
      DeSerializersT,
      TimeAndAttendanceTimeProfileLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link timeAndAttendanceTimeProfileLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_AND_ATTENDANCE_TIME_PROFILE_LINES: OneToManyLink<
      TimeAndAttendanceTimeProfileDetails<DeSerializersT>,
      DeSerializersT,
      TimeAndAttendanceTimeProfileLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link timeAndAttendanceTimeProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_AND_ATTENDANCE_TIME_PROFILE: OneToOneLink<
      TimeAndAttendanceTimeProfileDetails<DeSerializersT>,
      DeSerializersT,
      TimeAndAttendanceTimeProfilesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TimeAndAttendanceTimeProfileLinesV2Api<DeSerializersT>,
      TimeAndAttendanceTimeProfileLinesApi<DeSerializersT>,
      TimeAndAttendanceTimeProfilesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TIME_AND_ATTENDANCE_TIME_PROFILE_LINES_V_2: new OneToManyLink(
        'TimeAndAttendanceTimeProfileLinesV2',
        this,
        linkedApis[0]
      ),
      TIME_AND_ATTENDANCE_TIME_PROFILE_LINES: new OneToManyLink(
        'TimeAndAttendanceTimeProfileLines',
        this,
        linkedApis[1]
      ),
      TIME_AND_ATTENDANCE_TIME_PROFILE: new OneToOneLink(
        'TimeAndAttendanceTimeProfile',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = TimeAndAttendanceTimeProfileDetails;

  requestBuilder(): TimeAndAttendanceTimeProfileDetailsRequestBuilder<DeSerializersT> {
    return new TimeAndAttendanceTimeProfileDetailsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TimeAndAttendanceTimeProfileDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TimeAndAttendanceTimeProfileDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TimeAndAttendanceTimeProfileDetails<DeSerializersT>,
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
    typeof TimeAndAttendanceTimeProfileDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TimeAndAttendanceTimeProfileDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfileDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TIME_PROFILE_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfileDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WEEK_DAY: EnumField<
      TimeAndAttendanceTimeProfileDetails<DeSerializers>,
      DeSerializersT,
      JmgDayIdEnum,
      true,
      true
    >;
    CAN_PAYROLL_CALCULATION_PUSH_PROFILE: EnumField<
      TimeAndAttendanceTimeProfileDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HOUR_PERIOD_START_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfileDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    HOUR_PERIOD_START_RULE: EnumField<
      TimeAndAttendanceTimeProfileDetails<DeSerializers>,
      DeSerializersT,
      JmgProfileStartCodeBlankPrev,
      true,
      true
    >;
    OVERTIME_FLEX_LIMIT_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfileDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAXIMUM_FLEX_LIMIT_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfileDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link timeAndAttendanceTimeProfileLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_AND_ATTENDANCE_TIME_PROFILE_LINES_V_2: OneToManyLink<
      TimeAndAttendanceTimeProfileDetails<DeSerializersT>,
      DeSerializersT,
      TimeAndAttendanceTimeProfileLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link timeAndAttendanceTimeProfileLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_AND_ATTENDANCE_TIME_PROFILE_LINES: OneToManyLink<
      TimeAndAttendanceTimeProfileDetails<DeSerializersT>,
      DeSerializersT,
      TimeAndAttendanceTimeProfileLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link timeAndAttendanceTimeProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_AND_ATTENDANCE_TIME_PROFILE: OneToOneLink<
      TimeAndAttendanceTimeProfileDetails<DeSerializersT>,
      DeSerializersT,
      TimeAndAttendanceTimeProfilesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TimeAndAttendanceTimeProfileDetails<DeSerializers>>;
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
         * Static representation of the {@link timeProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'TimeProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link weekDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEEK_DAY: fieldBuilder.buildEnumField('WeekDay', JmgDayIdEnum, true),
        /**
         * Static representation of the {@link canPayrollCalculationPushProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_PAYROLL_CALCULATION_PUSH_PROFILE: fieldBuilder.buildEnumField(
          'CanPayrollCalculationPushProfile',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link hourPeriodStartSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUR_PERIOD_START_SECONDS: fieldBuilder.buildEdmTypeField(
          'HourPeriodStartSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link hourPeriodStartRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUR_PERIOD_START_RULE: fieldBuilder.buildEnumField(
          'HourPeriodStartRule',
          JmgProfileStartCodeBlankPrev,
          true
        ),
        /**
         * Static representation of the {@link overtimeFlexLimitSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERTIME_FLEX_LIMIT_SECONDS: fieldBuilder.buildEdmTypeField(
          'OvertimeFlexLimitSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link maximumFlexLimitSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_FLEX_LIMIT_SECONDS: fieldBuilder.buildEdmTypeField(
          'MaximumFlexLimitSeconds',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TimeAndAttendanceTimeProfileDetails)
      };
    }

    return this._schema;
  }
}
