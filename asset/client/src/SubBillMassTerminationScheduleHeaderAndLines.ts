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
import type { SubBillMassTerminationScheduleHeaderAndLinesApi } from './SubBillMassTerminationScheduleHeaderAndLinesApi';
import {
  SubBillMassTerminationTables,
  SubBillMassTerminationTablesType
} from './SubBillMassTerminationTables';

/**
 * This class represents the entity "SubBillMassTerminationScheduleHeaderAndLines" of service "d365_metadata".
 */
export class SubBillMassTerminationScheduleHeaderAndLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillMassTerminationScheduleHeaderAndLinesType<T>
{
  /**
   * Technical entity name for SubBillMassTerminationScheduleHeaderAndLines.
   */
  static override _entityName = 'SubBillMassTerminationScheduleHeaderAndLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillMassTerminationScheduleHeaderAndLines entity.
   */
  static _keys = ['dataAreaId', 'BillingScheduleNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing Schedule Number.
   */
  declare billingScheduleNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Termination Process Id.
   * @nullable
   */
  declare terminationProcessId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SubBillMassTerminationTables} entity.
   */
  declare subBillMassTerminationTableEntity?: SubBillMassTerminationTables<T> | null;

  constructor(_entityApi: SubBillMassTerminationScheduleHeaderAndLinesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillMassTerminationScheduleHeaderAndLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  billingScheduleNumber: DeserializedType<T, 'Edm.String'>;
  terminationProcessId?: DeserializedType<T, 'Edm.String'> | null;
  subBillMassTerminationTableEntity?: SubBillMassTerminationTablesType<T> | null;
}
