/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAndAttendanceTimeProfileLines } from './TimeAndAttendanceTimeProfileLines';
import { TimeAndAttendanceTimeProfileLinesRequestBuilder } from './TimeAndAttendanceTimeProfileLinesRequestBuilder';
import { TimeAndAttendanceTimeProfileDetailsApi } from './TimeAndAttendanceTimeProfileDetailsApi';
import { TimeAndAttendanceTimeProfilesApi } from './TimeAndAttendanceTimeProfilesApi';
import { JmgDayIdEnum } from './JmgDayIdEnum';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class TimeAndAttendanceTimeProfileLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TimeAndAttendanceTimeProfileLines<DeSerializersT>, DeSerializersT>
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
  ): TimeAndAttendanceTimeProfileLinesApi<DeSerializersT> {
    return new TimeAndAttendanceTimeProfileLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link timeAndAttendanceTimeProfileDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_AND_ATTENDANCE_TIME_PROFILE_DETAILS: OneToOneLink<
      TimeAndAttendanceTimeProfileLines<DeSerializersT>,
      DeSerializersT,
      TimeAndAttendanceTimeProfileDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link timeAndAttendanceTimeProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_AND_ATTENDANCE_TIME_PROFILE: OneToOneLink<
      TimeAndAttendanceTimeProfileLines<DeSerializersT>,
      DeSerializersT,
      TimeAndAttendanceTimeProfilesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TimeAndAttendanceTimeProfileDetailsApi<DeSerializersT>,
      TimeAndAttendanceTimeProfilesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TIME_AND_ATTENDANCE_TIME_PROFILE_DETAILS: new OneToOneLink(
        'TimeAndAttendanceTimeProfileDetails',
        this,
        linkedApis[0]
      ),
      TIME_AND_ATTENDANCE_TIME_PROFILE: new OneToOneLink(
        'TimeAndAttendanceTimeProfile',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = TimeAndAttendanceTimeProfileLines;

  requestBuilder(): TimeAndAttendanceTimeProfileLinesRequestBuilder<DeSerializersT> {
    return new TimeAndAttendanceTimeProfileLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TimeAndAttendanceTimeProfileLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TimeAndAttendanceTimeProfileLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TimeAndAttendanceTimeProfileLines<DeSerializersT>,
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
    typeof TimeAndAttendanceTimeProfileLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TimeAndAttendanceTimeProfileLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECORD_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TIME_PROFILE_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFILE_LINE_END_WEEK_DAY: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TOLERANCE_BEFORE_START_MINUTES: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TOLERANCE_AFTER_END_MINUTES: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SECONDARY_TIME_PROFILE_TYPE_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TIME_PROFILE_WEEK_DAY: EnumField<
      TimeAndAttendanceTimeProfileLines<DeSerializers>,
      DeSerializersT,
      JmgDayIdEnum,
      true,
      true
    >;
    TOLERANCE_BEFORE_END_MINUTES: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TOLERANCE_AFTER_START_MINUTES: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROFILE_LINE_END_TIME_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TIME_AND_ATTENDANCE_SWITCH_CODE_ACTIVITY_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFILE_LINE_START_TIME_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROFILE_LINE_START_WEEK_DAY: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRIMARY_TIME_PROFILE_TYPE_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link timeAndAttendanceTimeProfileDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_AND_ATTENDANCE_TIME_PROFILE_DETAILS: OneToOneLink<
      TimeAndAttendanceTimeProfileLines<DeSerializersT>,
      DeSerializersT,
      TimeAndAttendanceTimeProfileDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link timeAndAttendanceTimeProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_AND_ATTENDANCE_TIME_PROFILE: OneToOneLink<
      TimeAndAttendanceTimeProfileLines<DeSerializersT>,
      DeSerializersT,
      TimeAndAttendanceTimeProfilesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TimeAndAttendanceTimeProfileLines<DeSerializers>>;
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
         * Static representation of the {@link recordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_ID: fieldBuilder.buildEdmTypeField(
          'RecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link timeProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'TimeProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link profileLineEndWeekDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_LINE_END_WEEK_DAY: fieldBuilder.buildEdmTypeField(
          'ProfileLineEndWeekDay',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link toleranceBeforeStartMinutes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOLERANCE_BEFORE_START_MINUTES: fieldBuilder.buildEdmTypeField(
          'ToleranceBeforeStartMinutes',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link toleranceAfterEndMinutes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOLERANCE_AFTER_END_MINUTES: fieldBuilder.buildEdmTypeField(
          'ToleranceAfterEndMinutes',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link secondaryTimeProfileTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECONDARY_TIME_PROFILE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'SecondaryTimeProfileTypeId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link timeProfileWeekDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PROFILE_WEEK_DAY: fieldBuilder.buildEnumField(
          'TimeProfileWeekDay',
          JmgDayIdEnum,
          true
        ),
        /**
         * Static representation of the {@link toleranceBeforeEndMinutes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOLERANCE_BEFORE_END_MINUTES: fieldBuilder.buildEdmTypeField(
          'ToleranceBeforeEndMinutes',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link toleranceAfterStartMinutes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOLERANCE_AFTER_START_MINUTES: fieldBuilder.buildEdmTypeField(
          'ToleranceAfterStartMinutes',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link profileLineEndTimeSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_LINE_END_TIME_SECONDS: fieldBuilder.buildEdmTypeField(
          'ProfileLineEndTimeSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link timeAndAttendanceSwitchCodeActivityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_AND_ATTENDANCE_SWITCH_CODE_ACTIVITY_ID:
          fieldBuilder.buildEdmTypeField(
            'TimeAndAttendanceSwitchCodeActivityId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link profileLineStartTimeSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_LINE_START_TIME_SECONDS: fieldBuilder.buildEdmTypeField(
          'ProfileLineStartTimeSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link profileLineStartWeekDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_LINE_START_WEEK_DAY: fieldBuilder.buildEdmTypeField(
          'ProfileLineStartWeekDay',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link primaryTimeProfileTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TIME_PROFILE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryTimeProfileTypeId',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TimeAndAttendanceTimeProfileLines)
      };
    }

    return this._schema;
  }
}
