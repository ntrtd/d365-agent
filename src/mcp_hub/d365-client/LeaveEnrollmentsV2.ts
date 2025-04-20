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
import type { LeaveEnrollmentsV2Api } from './LeaveEnrollmentsV2Api';
import { NoYes } from './NoYes';
import { LeaveTierBasis } from './LeaveTierBasis';
import { Workers, WorkersType } from './Workers';
import { LeavePlansV2, LeavePlansV2Type } from './LeavePlansV2';

/**
 * This class represents the entity "LeaveEnrollmentsV2" of service "d365_metadata".
 */
export class LeaveEnrollmentsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LeaveEnrollmentsV2Type<T>
{
  /**
   * Technical entity name for LeaveEnrollmentsV2.
   */
  static override _entityName = 'LeaveEnrollmentsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaveEnrollmentsV2 entity.
   */
  static _keys = ['dataAreaId', 'PersonnelNumber', 'LeavePlanId', 'StartDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Plan Id.
   */
  declare leavePlanId: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Accrual Suspended.
   * @nullable
   */
  declare isAccrualSuspended?: NoYes | null;
  /**
   * Tier Basis.
   * @nullable
   */
  declare tierBasis?: LeaveTierBasis | null;
  /**
   * Accrual Date Basis.
   */
  declare accrualDateBasis: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Accrual Start Date.
   */
  declare accrualStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Custom Date.
   */
  declare customDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link LeavePlansV2} entity.
   */
  declare plan?: LeavePlansV2<T> | null;

  constructor(_entityApi: LeaveEnrollmentsV2Api<T>) {
    super(_entityApi);
  }
}

export interface LeaveEnrollmentsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  leavePlanId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isAccrualSuspended?: NoYes | null;
  tierBasis?: LeaveTierBasis | null;
  accrualDateBasis: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accrualStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  worker?: WorkersType<T> | null;
  plan?: LeavePlansV2Type<T> | null;
}
