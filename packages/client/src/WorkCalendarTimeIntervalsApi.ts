/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkCalendarTimeIntervals } from './WorkCalendarTimeIntervals';
import { WorkCalendarTimeIntervalsRequestBuilder } from './WorkCalendarTimeIntervalsRequestBuilder';
import { WorkCalendarDaysApi } from './WorkCalendarDaysApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class WorkCalendarTimeIntervalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WorkCalendarTimeIntervals<DeSerializersT>, DeSerializersT>
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
  ): WorkCalendarTimeIntervalsApi<DeSerializersT> {
    return new WorkCalendarTimeIntervalsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link workCalendarDay} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR_DAY: OneToOneLink<
      WorkCalendarTimeIntervals<DeSerializersT>,
      DeSerializersT,
      WorkCalendarDaysApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WorkCalendarDaysApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      WORK_CALENDAR_DAY: new OneToOneLink(
        'WorkCalendarDay',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = WorkCalendarTimeIntervals;

  requestBuilder(): WorkCalendarTimeIntervalsRequestBuilder<DeSerializersT> {
    return new WorkCalendarTimeIntervalsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkCalendarTimeIntervals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WorkCalendarTimeIntervals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WorkCalendarTimeIntervals<DeSerializersT>,
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
    typeof WorkCalendarTimeIntervals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkCalendarTimeIntervals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WorkCalendarTimeIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_CALENDAR_ID: OrderableEdmTypeField<
      WorkCalendarTimeIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_CALENDAR_DATE: OrderableEdmTypeField<
      WorkCalendarTimeIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    START_TIME: OrderableEdmTypeField<
      WorkCalendarTimeIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WORKING_TIME_SCHEDULING_PROPERTY_ID: OrderableEdmTypeField<
      WorkCalendarTimeIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFICIENCY_PERCENTAGE: OrderableEdmTypeField<
      WorkCalendarTimeIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYROLL_EARNING_CODE: OrderableEdmTypeField<
      WorkCalendarTimeIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_TIME: OrderableEdmTypeField<
      WorkCalendarTimeIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workCalendarDay} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR_DAY: OneToOneLink<
      WorkCalendarTimeIntervals<DeSerializersT>,
      DeSerializersT,
      WorkCalendarDaysApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkCalendarTimeIntervals<DeSerializers>>;
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
         * Static representation of the {@link workCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'WorkCalendarId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workCalendarDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_CALENDAR_DATE: fieldBuilder.buildEdmTypeField(
          'WorkCalendarDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link startTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_TIME: fieldBuilder.buildEdmTypeField(
          'StartTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link workingTimeSchedulingPropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKING_TIME_SCHEDULING_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'WorkingTimeSchedulingPropertyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link efficiencyPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFICIENCY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'EfficiencyPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link payrollEarningCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYROLL_EARNING_CODE: fieldBuilder.buildEdmTypeField(
          'PayrollEarningCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_TIME: fieldBuilder.buildEdmTypeField('EndTime', 'Edm.Int32', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkCalendarTimeIntervals)
      };
    }

    return this._schema;
  }
}
