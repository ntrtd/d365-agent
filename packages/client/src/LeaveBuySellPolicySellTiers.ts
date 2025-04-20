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
import type { LeaveBuySellPolicySellTiersApi } from './LeaveBuySellPolicySellTiersApi';
import { NoYes } from './NoYes';
import { EarningCodes, EarningCodesType } from './EarningCodes';
import { LeaveTypes, LeaveTypesType } from './LeaveTypes';
import {
  LeaveBuySellPolicies,
  LeaveBuySellPoliciesType
} from './LeaveBuySellPolicies';

/**
 * This class represents the entity "LeaveBuySellPolicySellTiers" of service "d365_metadata".
 */
export class LeaveBuySellPolicySellTiers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaveBuySellPolicySellTiersType<T>
{
  /**
   * Technical entity name for LeaveBuySellPolicySellTiers.
   */
  static override _entityName = 'LeaveBuySellPolicySellTiers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaveBuySellPolicySellTiers entity.
   */
  static _keys = ['dataAreaId', 'PolicyId', 'LeaveTypeId', 'MonthsOfService'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy Id.
   */
  declare policyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Type Id.
   */
  declare leaveTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Months Of Service.
   */
  declare monthsOfService: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Earning Code Id.
   * @nullable
   */
  declare earningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Full Time Equivalency.
   * @nullable
   */
  declare useFullTimeEquivalency?: NoYes | null;
  /**
   * Rate.
   */
  declare rate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Amount.
   */
  declare maximumAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link EarningCodes} entity.
   */
  declare earningCode?: EarningCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link LeaveTypes} entity.
   */
  declare leaveType?: LeaveTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link LeaveBuySellPolicies} entity.
   */
  declare leaveBuySellPolicy?: LeaveBuySellPolicies<T> | null;

  constructor(_entityApi: LeaveBuySellPolicySellTiersApi<T>) {
    super(_entityApi);
  }
}

export interface LeaveBuySellPolicySellTiersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  policyId: DeserializedType<T, 'Edm.String'>;
  leaveTypeId: DeserializedType<T, 'Edm.String'>;
  monthsOfService: DeserializedType<T, 'Edm.Decimal'>;
  earningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  useFullTimeEquivalency?: NoYes | null;
  rate: DeserializedType<T, 'Edm.Decimal'>;
  maximumAmount: DeserializedType<T, 'Edm.Decimal'>;
  earningCode?: EarningCodesType<T> | null;
  leaveType?: LeaveTypesType<T> | null;
  leaveBuySellPolicy?: LeaveBuySellPoliciesType<T> | null;
}
