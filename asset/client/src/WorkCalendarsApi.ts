/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkCalendars } from './WorkCalendars';
import { WorkCalendarsRequestBuilder } from './WorkCalendarsRequestBuilder';
import { EmploymentsV2Api } from './EmploymentsV2Api';
import { EmployeesApi } from './EmployeesApi';
import { WorkCalendarHolidaysApi } from './WorkCalendarHolidaysApi';
import { ProspectsApi } from './ProspectsApi';
import { ContractorsV2Api } from './ContractorsV2Api';
import { ServiceLevelAgreementsApi } from './ServiceLevelAgreementsApi';
import { ContractorsApi } from './ContractorsApi';
import { RetailServiceCategoriesApi } from './RetailServiceCategoriesApi';
import { WarehousesApi } from './WarehousesApi';
import { PayrollPositionDetailsApi } from './PayrollPositionDetailsApi';
import { EmploymentsApi } from './EmploymentsApi';
import { EmployeesV2Api } from './EmployeesV2Api';
import { WorkCalendarDaysApi } from './WorkCalendarDaysApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class WorkCalendarsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkCalendars<DeSerializersT>, DeSerializersT>
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
  ): WorkCalendarsApi<DeSerializersT> {
    return new WorkCalendarsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link employmentV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_V_2: OneToOneLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      EmploymentsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES: OneToManyLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      EmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workCalendarHoliday} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR_HOLIDAY: OneToOneLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      WorkCalendarHolidaysApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link prospects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROSPECTS: OneToManyLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      ProspectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contractorsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS_V_2: OneToManyLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      ContractorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceLevelAgreements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_LEVEL_AGREEMENTS: OneToManyLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      ServiceLevelAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contractors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS: OneToManyLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      ContractorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailServiceCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_SERVICE_CATEGORY: OneToManyLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      RetailServiceCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToManyLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollPositionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_POSITION_DETAILS: OneToManyLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      PayrollPositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT: OneToOneLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      EmploymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_V_2: OneToManyLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      EmployeesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workCalendarDays} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR_DAYS: OneToManyLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      WorkCalendarDaysApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EmploymentsV2Api<DeSerializersT>,
      EmployeesApi<DeSerializersT>,
      WorkCalendarHolidaysApi<DeSerializersT>,
      ProspectsApi<DeSerializersT>,
      ContractorsV2Api<DeSerializersT>,
      ServiceLevelAgreementsApi<DeSerializersT>,
      ContractorsApi<DeSerializersT>,
      RetailServiceCategoriesApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      PayrollPositionDetailsApi<DeSerializersT>,
      EmploymentsApi<DeSerializersT>,
      EmployeesV2Api<DeSerializersT>,
      WorkCalendarDaysApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EMPLOYMENT_V_2: new OneToOneLink('EmploymentV2', this, linkedApis[0]),
      EMPLOYEES: new OneToManyLink('Employees', this, linkedApis[1]),
      WORK_CALENDAR_HOLIDAY: new OneToOneLink(
        'WorkCalendarHoliday',
        this,
        linkedApis[2]
      ),
      PROSPECTS: new OneToManyLink('Prospects', this, linkedApis[3]),
      CONTRACTORS_V_2: new OneToManyLink('ContractorsV2', this, linkedApis[4]),
      SERVICE_LEVEL_AGREEMENTS: new OneToManyLink(
        'ServiceLevelAgreements',
        this,
        linkedApis[5]
      ),
      CONTRACTORS: new OneToManyLink('Contractors', this, linkedApis[6]),
      RETAIL_SERVICE_CATEGORY: new OneToManyLink(
        'RetailServiceCategory',
        this,
        linkedApis[7]
      ),
      WAREHOUSES: new OneToManyLink('Warehouses', this, linkedApis[8]),
      PAYROLL_POSITION_DETAILS: new OneToManyLink(
        'PayrollPositionDetails',
        this,
        linkedApis[9]
      ),
      EMPLOYMENT: new OneToOneLink('Employment', this, linkedApis[10]),
      EMPLOYEES_V_2: new OneToManyLink('EmployeesV2', this, linkedApis[11]),
      WORK_CALENDAR_DAYS: new OneToManyLink(
        'WorkCalendarDays',
        this,
        linkedApis[12]
      )
    };
    return this;
  }

  entityConstructor = WorkCalendars;

  requestBuilder(): WorkCalendarsRequestBuilder<DeSerializersT> {
    return new WorkCalendarsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkCalendars<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WorkCalendars<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WorkCalendars<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof WorkCalendars, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(WorkCalendars, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WorkCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CALENDAR_ID: OrderableEdmTypeField<
      WorkCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_HOURS: OrderableEdmTypeField<
      WorkCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BASE_WORK_CALENDAR_ID: OrderableEdmTypeField<
      WorkCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALENDAR_NAME: OrderableEdmTypeField<
      WorkCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SUNDAY_WORKING_DAY: EnumField<
      WorkCalendars<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_WEDNESDAY_WORKING_DAY: EnumField<
      WorkCalendars<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_FRIDAY_WORKING_DAY: EnumField<
      WorkCalendars<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_TUESDAY_WORKING_DAY: EnumField<
      WorkCalendars<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_MONDAY_WORKING_DAY: EnumField<
      WorkCalendars<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_ENDING_TIME: OrderableEdmTypeField<
      WorkCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_STARTING_TIME: OrderableEdmTypeField<
      WorkCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_SATURDAY_WORKING_DAY: EnumField<
      WorkCalendars<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_THURSDAY_WORKING_DAY: EnumField<
      WorkCalendars<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORK_CALENDAR_HOLIDAY_ID: OrderableEdmTypeField<
      WorkCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employmentV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_V_2: OneToOneLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      EmploymentsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES: OneToManyLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      EmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workCalendarHoliday} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR_HOLIDAY: OneToOneLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      WorkCalendarHolidaysApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link prospects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROSPECTS: OneToManyLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      ProspectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contractorsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS_V_2: OneToManyLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      ContractorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceLevelAgreements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_LEVEL_AGREEMENTS: OneToManyLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      ServiceLevelAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contractors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS: OneToManyLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      ContractorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailServiceCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_SERVICE_CATEGORY: OneToManyLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      RetailServiceCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToManyLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollPositionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_POSITION_DETAILS: OneToManyLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      PayrollPositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT: OneToOneLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      EmploymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_V_2: OneToManyLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      EmployeesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workCalendarDays} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR_DAYS: OneToManyLink<
      WorkCalendars<DeSerializersT>,
      DeSerializersT,
      WorkCalendarDaysApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkCalendars<DeSerializers>>;
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
         * Static representation of the {@link calendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'CalendarId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_HOURS: fieldBuilder.buildEdmTypeField(
          'WorkHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link baseWorkCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_WORK_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'BaseWorkCalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calendarName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_NAME: fieldBuilder.buildEdmTypeField(
          'CalendarName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSundayWorkingDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SUNDAY_WORKING_DAY: fieldBuilder.buildEnumField(
          'IsSundayWorkingDay',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isWednesdayWorkingDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WEDNESDAY_WORKING_DAY: fieldBuilder.buildEnumField(
          'IsWednesdayWorkingDay',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isFridayWorkingDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FRIDAY_WORKING_DAY: fieldBuilder.buildEnumField(
          'IsFridayWorkingDay',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isTuesdayWorkingDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TUESDAY_WORKING_DAY: fieldBuilder.buildEnumField(
          'IsTuesdayWorkingDay',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isMondayWorkingDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MONDAY_WORKING_DAY: fieldBuilder.buildEnumField(
          'IsMondayWorkingDay',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultEndingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_ENDING_TIME: fieldBuilder.buildEdmTypeField(
          'DefaultEndingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link defaultStartingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_STARTING_TIME: fieldBuilder.buildEdmTypeField(
          'DefaultStartingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isSaturdayWorkingDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SATURDAY_WORKING_DAY: fieldBuilder.buildEnumField(
          'IsSaturdayWorkingDay',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isThursdayWorkingDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_THURSDAY_WORKING_DAY: fieldBuilder.buildEnumField(
          'IsThursdayWorkingDay',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workCalendarHolidayId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_CALENDAR_HOLIDAY_ID: fieldBuilder.buildEdmTypeField(
          'WorkCalendarHolidayId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkCalendars)
      };
    }

    return this._schema;
  }
}
