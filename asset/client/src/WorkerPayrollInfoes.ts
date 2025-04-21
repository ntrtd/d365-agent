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
import type { WorkerPayrollInfoesApi } from './WorkerPayrollInfoesApi';
import { NoYes } from './NoYes';
import { PayrollPaymentMethodType } from './PayrollPaymentMethodType';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "WorkerPayrollInfoes" of service "d365_metadata".
 */
export class WorkerPayrollInfoes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkerPayrollInfoesType<T>
{
  /**
   * Technical entity name for WorkerPayrollInfoes.
   */
  static override _entityName = 'WorkerPayrollInfoes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerPayrollInfoes entity.
   */
  static _keys = ['dataAreaId', 'Company', 'PersonnelNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Company.
   */
  declare company: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Ready To Pay.
   * @nullable
   */
  declare readyToPay?: NoYes | null;
  /**
   * Payment Method.
   * @nullable
   */
  declare paymentMethod?: PayrollPaymentMethodType | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: WorkerPayrollInfoesApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerPayrollInfoesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  company: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  readyToPay?: NoYes | null;
  paymentMethod?: PayrollPaymentMethodType | null;
  worker?: WorkersType<T> | null;
}
