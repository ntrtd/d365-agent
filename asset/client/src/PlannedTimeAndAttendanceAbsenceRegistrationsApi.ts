/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PlannedTimeAndAttendanceAbsenceRegistrations } from './PlannedTimeAndAttendanceAbsenceRegistrations';
import { PlannedTimeAndAttendanceAbsenceRegistrationsRequestBuilder } from './PlannedTimeAndAttendanceAbsenceRegistrationsRequestBuilder';
import { WorkersApi } from './WorkersApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PlannedTimeAndAttendanceAbsenceRegistrationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      PlannedTimeAndAttendanceAbsenceRegistrations<DeSerializersT>,
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
  ): PlannedTimeAndAttendanceAbsenceRegistrationsApi<DeSerializersT> {
    return new PlannedTimeAndAttendanceAbsenceRegistrationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      PlannedTimeAndAttendanceAbsenceRegistrations<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [WorkersApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = PlannedTimeAndAttendanceAbsenceRegistrations;

  requestBuilder(): PlannedTimeAndAttendanceAbsenceRegistrationsRequestBuilder<DeSerializersT> {
    return new PlannedTimeAndAttendanceAbsenceRegistrationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PlannedTimeAndAttendanceAbsenceRegistrations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PlannedTimeAndAttendanceAbsenceRegistrations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PlannedTimeAndAttendanceAbsenceRegistrations<DeSerializersT>,
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
    typeof PlannedTimeAndAttendanceAbsenceRegistrations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PlannedTimeAndAttendanceAbsenceRegistrations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PlannedTimeAndAttendanceAbsenceRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      PlannedTimeAndAttendanceAbsenceRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANNED_ABSENCE_REGISTRATION_ENTRY_NUMBER: OrderableEdmTypeField<
      PlannedTimeAndAttendanceAbsenceRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    START_DATE_TIME: OrderableEdmTypeField<
      PlannedTimeAndAttendanceAbsenceRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_PLANNED_ABSENCE_INTERRUPTED: EnumField<
      PlannedTimeAndAttendanceAbsenceRegistrations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    END_DATE_TIME: OrderableEdmTypeField<
      PlannedTimeAndAttendanceAbsenceRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_TIME_AND_ATTENDANCE_ACTIVITY_REGISTRATION: EnumField<
      PlannedTimeAndAttendanceAbsenceRegistrations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CALCULATED_TIME_SECONDS: OrderableEdmTypeField<
      PlannedTimeAndAttendanceAbsenceRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TIME_AND_ATTENDANCE_JOB_ID: OrderableEdmTypeField<
      PlannedTimeAndAttendanceAbsenceRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PLANNED_ABSENCE_INTERRUPTION_ALLOWED: EnumField<
      PlannedTimeAndAttendanceAbsenceRegistrations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      PlannedTimeAndAttendanceAbsenceRegistrations<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      PlannedTimeAndAttendanceAbsenceRegistrations<DeSerializers>
    >;
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
         * Static representation of the {@link workerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerPersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link plannedAbsenceRegistrationEntryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_ABSENCE_REGISTRATION_ENTRY_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'PlannedAbsenceRegistrationEntryNumber',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link startDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'StartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isPlannedAbsenceInterrupted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PLANNED_ABSENCE_INTERRUPTED: fieldBuilder.buildEnumField(
          'IsPlannedAbsenceInterrupted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link endDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'EndDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isTimeAndAttendanceActivityRegistration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TIME_AND_ATTENDANCE_ACTIVITY_REGISTRATION:
          fieldBuilder.buildEnumField(
            'IsTimeAndAttendanceActivityRegistration',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link calculatedTimeSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_TIME_SECONDS: fieldBuilder.buildEdmTypeField(
          'CalculatedTimeSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link timeAndAttendanceJobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_AND_ATTENDANCE_JOB_ID: fieldBuilder.buildEdmTypeField(
          'TimeAndAttendanceJobId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPlannedAbsenceInterruptionAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PLANNED_ABSENCE_INTERRUPTION_ALLOWED: fieldBuilder.buildEnumField(
          'IsPlannedAbsenceInterruptionAllowed',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          PlannedTimeAndAttendanceAbsenceRegistrations
        )
      };
    }

    return this._schema;
  }
}
