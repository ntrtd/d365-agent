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
import type { SubBillMassTerminationRemovalLinesApi } from './SubBillMassTerminationRemovalLinesApi';
import { SubBillInvTransType } from './SubBillInvTransType';

/**
 * This class represents the entity "SubBillMassTerminationRemovalLines" of service "d365_metadata".
 */
export class SubBillMassTerminationRemovalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillMassTerminationRemovalLinesType<T>
{
  /**
   * Technical entity name for SubBillMassTerminationRemovalLines.
   */
  static override _entityName = 'SubBillMassTerminationRemovalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillMassTerminationRemovalLines entity.
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
   * Invoice Transaction Type.
   * @nullable
   */
  declare invoiceTransactionType?: SubBillInvTransType | null;

  constructor(_entityApi: SubBillMassTerminationRemovalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillMassTerminationRemovalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  billingScheduleNumber: DeserializedType<T, 'Edm.String'>;
  invoiceTransactionType?: SubBillInvTransType | null;
}
