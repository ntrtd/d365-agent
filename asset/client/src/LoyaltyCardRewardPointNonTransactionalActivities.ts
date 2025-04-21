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
import type { LoyaltyCardRewardPointNonTransactionalActivitiesApi } from './LoyaltyCardRewardPointNonTransactionalActivitiesApi';
import { RetailLoyaltyCardRewardPointNonTransactionalActivityStatus } from './RetailLoyaltyCardRewardPointNonTransactionalActivityStatus';
import {
  RetailAffiliations,
  RetailAffiliationsType
} from './RetailAffiliations';
import { OperatingUnits, OperatingUnitsType } from './OperatingUnits';

/**
 * This class represents the entity "LoyaltyCardRewardPointNonTransactionalActivities" of service "d365_metadata".
 */
export class LoyaltyCardRewardPointNonTransactionalActivities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LoyaltyCardRewardPointNonTransactionalActivitiesType<T>
{
  /**
   * Technical entity name for LoyaltyCardRewardPointNonTransactionalActivities.
   */
  static override _entityName =
    'LoyaltyCardRewardPointNonTransactionalActivities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LoyaltyCardRewardPointNonTransactionalActivities entity.
   */
  static _keys = ['NonTransactionalActivityId'];
  /**
   * Non Transactional Activity Id.
   */
  declare nonTransactionalActivityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Card Number.
   * @nullable
   */
  declare cardNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: RetailLoyaltyCardRewardPointNonTransactionalActivityStatus | null;
  /**
   * Entry Time.
   */
  declare entryTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Loyalty Other Activity Type Id.
   * @nullable
   */
  declare loyaltyOtherActivityTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entry Date.
   */
  declare entryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Error Logs.
   * @nullable
   */
  declare errorLogs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Om Operating Unit Id.
   */
  declare omOperatingUnitId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Retail Affiliation Id.
   */
  declare retailAffiliationId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * One-to-one navigation property to the {@link RetailAffiliations} entity.
   */
  declare retailAffiliation?: RetailAffiliations<T> | null;
  /**
   * One-to-one navigation property to the {@link OperatingUnits} entity.
   */
  declare operatingUnit?: OperatingUnits<T> | null;

  constructor(
    _entityApi: LoyaltyCardRewardPointNonTransactionalActivitiesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface LoyaltyCardRewardPointNonTransactionalActivitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  nonTransactionalActivityId: DeserializedType<T, 'Edm.String'>;
  cardNumber?: DeserializedType<T, 'Edm.String'> | null;
  status?: RetailLoyaltyCardRewardPointNonTransactionalActivityStatus | null;
  entryTime: DeserializedType<T, 'Edm.Int32'>;
  loyaltyOtherActivityTypeId?: DeserializedType<T, 'Edm.String'> | null;
  entryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  errorLogs?: DeserializedType<T, 'Edm.String'> | null;
  omOperatingUnitId: DeserializedType<T, 'Edm.Int64'>;
  retailAffiliationId: DeserializedType<T, 'Edm.Int64'>;
  retailAffiliation?: RetailAffiliationsType<T> | null;
  operatingUnit?: OperatingUnitsType<T> | null;
}
