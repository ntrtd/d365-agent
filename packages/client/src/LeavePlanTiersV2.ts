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
import type { LeavePlanTiersV2Api } from './LeavePlanTiersV2Api';
import { NoYes } from './NoYes';
import { LeavePlansV2, LeavePlansV2Type } from './LeavePlansV2';
import { LeaveTypes, LeaveTypesType } from './LeaveTypes';

/**
 * This class represents the entity "LeavePlanTiersV2" of service "d365_metadata".
 */
export class LeavePlanTiersV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LeavePlanTiersV2Type<T>
{
  /**
   * Technical entity name for LeavePlanTiersV2.
   */
  static override _entityName = 'LeavePlanTiersV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeavePlanTiersV2 entity.
   */
  static _keys = ['dataAreaId', 'LeavePlanId', 'LeaveTypeId', 'TierNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Plan Id.
   */
  declare leavePlanId: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Type Id.
   */
  declare leaveTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tier Number.
   */
  declare tierNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Grant.
   */
  declare grant: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Carryover.
   */
  declare maximumCarryover: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Balance.
   */
  declare minimumBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accrual Amount.
   */
  declare accrualAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Months Of Service.
   */
  declare monthsOfService: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Balance.
   */
  declare maximumBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Qualifying Amount.
   */
  declare qualifyingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Use Full Time Equivalency.
   * @nullable
   */
  declare useFullTimeEquivalency?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link LeavePlansV2} entity.
   */
  declare plan?: LeavePlansV2<T> | null;
  /**
   * One-to-one navigation property to the {@link LeaveTypes} entity.
   */
  declare type?: LeaveTypes<T> | null;

  constructor(_entityApi: LeavePlanTiersV2Api<T>) {
    super(_entityApi);
  }
}

export interface LeavePlanTiersV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leavePlanId: DeserializedType<T, 'Edm.String'>;
  leaveTypeId: DeserializedType<T, 'Edm.String'>;
  tierNumber: DeserializedType<T, 'Edm.Decimal'>;
  grant: DeserializedType<T, 'Edm.Decimal'>;
  maximumCarryover: DeserializedType<T, 'Edm.Decimal'>;
  minimumBalance: DeserializedType<T, 'Edm.Decimal'>;
  accrualAmount: DeserializedType<T, 'Edm.Decimal'>;
  monthsOfService: DeserializedType<T, 'Edm.Decimal'>;
  maximumBalance: DeserializedType<T, 'Edm.Decimal'>;
  qualifyingAmount: DeserializedType<T, 'Edm.Decimal'>;
  useFullTimeEquivalency?: NoYes | null;
  plan?: LeavePlansV2Type<T> | null;
  type?: LeaveTypesType<T> | null;
}
