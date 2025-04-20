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
import type { TimesheetTablesApi } from './TimesheetTablesApi';
import { TsAppStatus } from './TsAppStatus';
import { NoYes } from './NoYes';
import { TsPostStatus } from './TsPostStatus';

/**
 * This class represents the entity "TimesheetTables" of service "d365_metadata".
 */
export class TimesheetTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TimesheetTablesType<T>
{
  /**
   * Technical entity name for TimesheetTables.
   */
  static override _entityName = 'TimesheetTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TimesheetTables entity.
   */
  static _keys = ['dataAreaId', 'TimesheetNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Timesheet Number.
   */
  declare timesheetNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Approval Status.
   * @nullable
   */
  declare approvalStatus?: TsAppStatus | null;
  /**
   * Resource Id.
   * @nullable
   */
  declare resourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Workflow To Be Resubmitted.
   * @nullable
   */
  declare isWorkflowToBeResubmitted?: NoYes | null;
  /**
   * Legal Entity.
   * @nullable
   */
  declare legalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Posting Status.
   * @nullable
   */
  declare postingStatus?: TsPostStatus | null;

  constructor(_entityApi: TimesheetTablesApi<T>) {
    super(_entityApi);
  }
}

export interface TimesheetTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  timesheetNumber: DeserializedType<T, 'Edm.String'>;
  approvalStatus?: TsAppStatus | null;
  resourceId?: DeserializedType<T, 'Edm.String'> | null;
  isWorkflowToBeResubmitted?: NoYes | null;
  legalEntity?: DeserializedType<T, 'Edm.String'> | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  postingStatus?: TsPostStatus | null;
}
