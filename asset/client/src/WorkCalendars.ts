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
import type { WorkCalendarsApi } from './WorkCalendarsApi';
import { NoYes } from './NoYes';
import { EmploymentsV2, EmploymentsV2Type } from './EmploymentsV2';
import { Employees, EmployeesType } from './Employees';
import {
  WorkCalendarHolidays,
  WorkCalendarHolidaysType
} from './WorkCalendarHolidays';
import { Prospects, ProspectsType } from './Prospects';
import { ContractorsV2, ContractorsV2Type } from './ContractorsV2';
import {
  ServiceLevelAgreements,
  ServiceLevelAgreementsType
} from './ServiceLevelAgreements';
import { Contractors, ContractorsType } from './Contractors';
import {
  RetailServiceCategories,
  RetailServiceCategoriesType
} from './RetailServiceCategories';
import { Warehouses, WarehousesType } from './Warehouses';
import {
  PayrollPositionDetails,
  PayrollPositionDetailsType
} from './PayrollPositionDetails';
import { Employments, EmploymentsType } from './Employments';
import { EmployeesV2, EmployeesV2Type } from './EmployeesV2';
import { WorkCalendarDays, WorkCalendarDaysType } from './WorkCalendarDays';

/**
 * This class represents the entity "WorkCalendars" of service "d365_metadata".
 */
export class WorkCalendars<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkCalendarsType<T>
{
  /**
   * Technical entity name for WorkCalendars.
   */
  static override _entityName = 'WorkCalendars';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkCalendars entity.
   */
  static _keys = ['dataAreaId', 'CalendarId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Calendar Id.
   */
  declare calendarId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Hours.
   */
  declare workHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Base Work Calendar Id.
   * @nullable
   */
  declare baseWorkCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calendar Name.
   * @nullable
   */
  declare calendarName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Sunday Working Day.
   * @nullable
   */
  declare isSundayWorkingDay?: NoYes | null;
  /**
   * Is Wednesday Working Day.
   * @nullable
   */
  declare isWednesdayWorkingDay?: NoYes | null;
  /**
   * Is Friday Working Day.
   * @nullable
   */
  declare isFridayWorkingDay?: NoYes | null;
  /**
   * Is Tuesday Working Day.
   * @nullable
   */
  declare isTuesdayWorkingDay?: NoYes | null;
  /**
   * Is Monday Working Day.
   * @nullable
   */
  declare isMondayWorkingDay?: NoYes | null;
  /**
   * Default Ending Time.
   */
  declare defaultEndingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Starting Time.
   */
  declare defaultStartingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Saturday Working Day.
   * @nullable
   */
  declare isSaturdayWorkingDay?: NoYes | null;
  /**
   * Is Thursday Working Day.
   * @nullable
   */
  declare isThursdayWorkingDay?: NoYes | null;
  /**
   * Work Calendar Holiday Id.
   * @nullable
   */
  declare workCalendarHolidayId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link EmploymentsV2} entity.
   */
  declare employmentV2?: EmploymentsV2<T> | null;
  /**
   * One-to-many navigation property to the {@link Employees} entity.
   */
  declare employees: Employees<T>[];
  /**
   * One-to-one navigation property to the {@link WorkCalendarHolidays} entity.
   */
  declare workCalendarHoliday?: WorkCalendarHolidays<T> | null;
  /**
   * One-to-many navigation property to the {@link Prospects} entity.
   */
  declare prospects: Prospects<T>[];
  /**
   * One-to-many navigation property to the {@link ContractorsV2} entity.
   */
  declare contractorsV2: ContractorsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceLevelAgreements} entity.
   */
  declare serviceLevelAgreements: ServiceLevelAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link Contractors} entity.
   */
  declare contractors: Contractors<T>[];
  /**
   * One-to-many navigation property to the {@link RetailServiceCategories} entity.
   */
  declare retailServiceCategory: RetailServiceCategories<T>[];
  /**
   * One-to-many navigation property to the {@link Warehouses} entity.
   */
  declare warehouses: Warehouses<T>[];
  /**
   * One-to-many navigation property to the {@link PayrollPositionDetails} entity.
   */
  declare payrollPositionDetails: PayrollPositionDetails<T>[];
  /**
   * One-to-one navigation property to the {@link Employments} entity.
   */
  declare employment?: Employments<T> | null;
  /**
   * One-to-many navigation property to the {@link EmployeesV2} entity.
   */
  declare employeesV2: EmployeesV2<T>[];
  /**
   * One-to-many navigation property to the {@link WorkCalendarDays} entity.
   */
  declare workCalendarDays: WorkCalendarDays<T>[];

  constructor(_entityApi: WorkCalendarsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkCalendarsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  calendarId: DeserializedType<T, 'Edm.String'>;
  workHours: DeserializedType<T, 'Edm.Decimal'>;
  baseWorkCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  calendarName?: DeserializedType<T, 'Edm.String'> | null;
  isSundayWorkingDay?: NoYes | null;
  isWednesdayWorkingDay?: NoYes | null;
  isFridayWorkingDay?: NoYes | null;
  isTuesdayWorkingDay?: NoYes | null;
  isMondayWorkingDay?: NoYes | null;
  defaultEndingTime: DeserializedType<T, 'Edm.Int32'>;
  defaultStartingTime: DeserializedType<T, 'Edm.Int32'>;
  isSaturdayWorkingDay?: NoYes | null;
  isThursdayWorkingDay?: NoYes | null;
  workCalendarHolidayId?: DeserializedType<T, 'Edm.String'> | null;
  employmentV2?: EmploymentsV2Type<T> | null;
  employees: EmployeesType<T>[];
  workCalendarHoliday?: WorkCalendarHolidaysType<T> | null;
  prospects: ProspectsType<T>[];
  contractorsV2: ContractorsV2Type<T>[];
  serviceLevelAgreements: ServiceLevelAgreementsType<T>[];
  contractors: ContractorsType<T>[];
  retailServiceCategory: RetailServiceCategoriesType<T>[];
  warehouses: WarehousesType<T>[];
  payrollPositionDetails: PayrollPositionDetailsType<T>[];
  employment?: EmploymentsType<T> | null;
  employeesV2: EmployeesV2Type<T>[];
  workCalendarDays: WorkCalendarDaysType<T>[];
}
