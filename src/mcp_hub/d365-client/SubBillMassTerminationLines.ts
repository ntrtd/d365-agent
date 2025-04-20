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
import type { SubBillMassTerminationLinesApi } from './SubBillMassTerminationLinesApi';
import {
  SubBillMassTerminationTables,
  SubBillMassTerminationTablesType
} from './SubBillMassTerminationTables';

/**
 * This class represents the entity "SubBillMassTerminationLines" of service "d365_metadata".
 */
export class SubBillMassTerminationLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillMassTerminationLinesType<T>
{
  /**
   * Technical entity name for SubBillMassTerminationLines.
   */
  static override _entityName = 'SubBillMassTerminationLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillMassTerminationLines entity.
   */
  static _keys = [
    'dataAreaId',
    'TerminationProcessId',
    'CustomerAccount',
    'Item',
    'BillingScheduleNumber',
    'LineNum'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Termination Process Id.
   */
  declare terminationProcessId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account.
   */
  declare customerAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Item.
   */
  declare item: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing Schedule Number.
   */
  declare billingScheduleNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link SubBillMassTerminationTables} entity.
   */
  declare subBillMassTerminationTableEntity?: SubBillMassTerminationTables<T> | null;

  constructor(_entityApi: SubBillMassTerminationLinesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillMassTerminationLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  terminationProcessId: DeserializedType<T, 'Edm.String'>;
  customerAccount: DeserializedType<T, 'Edm.String'>;
  item: DeserializedType<T, 'Edm.String'>;
  billingScheduleNumber: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  subBillMassTerminationTableEntity?: SubBillMassTerminationTablesType<T> | null;
}
