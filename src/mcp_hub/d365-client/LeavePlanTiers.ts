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
import type { LeavePlanTiersApi } from './LeavePlanTiersApi';
import { NoYes } from './NoYes';
import { LeavePlans, LeavePlansType } from './LeavePlans';

/**
 * This class represents the entity "LeavePlanTiers" of service "d365_metadata".
 */
export class LeavePlanTiers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LeavePlanTiersType<T>
{
  /**
   * Technical entity name for LeavePlanTiers.
   */
  static override _entityName = 'LeavePlanTiers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeavePlanTiers entity.
   */
  static _keys = ['dataAreaId', 'LeavePlanId', 'TierNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Plan Id.
   */
  declare leavePlanId: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link LeavePlans} entity.
   */
  declare plan?: LeavePlans<T> | null;

  constructor(_entityApi: LeavePlanTiersApi<T>) {
    super(_entityApi);
  }
}

export interface LeavePlanTiersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leavePlanId: DeserializedType<T, 'Edm.String'>;
  tierNumber: DeserializedType<T, 'Edm.Decimal'>;
  grant: DeserializedType<T, 'Edm.Decimal'>;
  maximumCarryover: DeserializedType<T, 'Edm.Decimal'>;
  minimumBalance: DeserializedType<T, 'Edm.Decimal'>;
  accrualAmount: DeserializedType<T, 'Edm.Decimal'>;
  monthsOfService: DeserializedType<T, 'Edm.Decimal'>;
  maximumBalance: DeserializedType<T, 'Edm.Decimal'>;
  qualifyingAmount: DeserializedType<T, 'Edm.Decimal'>;
  useFullTimeEquivalency?: NoYes | null;
  plan?: LeavePlansType<T> | null;
}
