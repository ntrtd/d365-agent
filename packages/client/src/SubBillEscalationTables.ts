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
import type { SubBillEscalationTablesApi } from './SubBillEscalationTablesApi';
import { NoYes } from './NoYes';
import { SubBillEscalationFrequency } from './SubBillEscalationFrequency';

/**
 * This class represents the entity "SubBillEscalationTables" of service "d365_metadata".
 */
export class SubBillEscalationTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillEscalationTablesType<T>
{
  /**
   * Technical entity name for SubBillEscalationTables.
   */
  static override _entityName = 'SubBillEscalationTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillEscalationTables entity.
   */
  static _keys = [
    'dataAreaId',
    'IsScheduleLine',
    'ScheduleLineNum',
    'EscalationLineNum',
    'ScheduleNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Schedule Line.
   * @nullable
   */
  declare isScheduleLine?: NoYes | null;
  /**
   * Schedule Line Num.
   */
  declare scheduleLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Escalation Line Num.
   */
  declare escalationLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Schedule Number.
   */
  declare scheduleNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Sub Bill Markdown.
   * @nullable
   */
  declare subBillMarkdown?: NoYes | null;
  /**
   * Sub Bill Amount.
   */
  declare subBillAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Percent.
   */
  declare percent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Frequency.
   * @nullable
   */
  declare frequency?: SubBillEscalationFrequency | null;
  /**
   * Cpi Schedule.
   * @nullable
   */
  declare cpiSchedule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: SubBillEscalationTablesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillEscalationTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  isScheduleLine?: NoYes | null;
  scheduleLineNum: DeserializedType<T, 'Edm.Decimal'>;
  escalationLineNum: DeserializedType<T, 'Edm.Decimal'>;
  scheduleNumber: DeserializedType<T, 'Edm.String'>;
  subBillMarkdown?: NoYes | null;
  subBillAmount: DeserializedType<T, 'Edm.Decimal'>;
  percent: DeserializedType<T, 'Edm.Decimal'>;
  frequency?: SubBillEscalationFrequency | null;
  cpiSchedule?: DeserializedType<T, 'Edm.String'> | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
