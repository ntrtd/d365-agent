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
import type { ServiceSubscriptionGroupsApi } from './ServiceSubscriptionGroupsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ServiceSubscriptionGroups" of service "d365_metadata".
 */
export class ServiceSubscriptionGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceSubscriptionGroupsType<T>
{
  /**
   * Technical entity name for ServiceSubscriptionGroups.
   */
  static override _entityName = 'ServiceSubscriptionGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ServiceSubscriptionGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Subscription Number Sequence Code.
   * @nullable
   */
  declare serviceSubscriptionNumberSequenceCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Frequency Period Type Code.
   * @nullable
   */
  declare invoiceFrequencyPeriodTypeCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Accrual Frequency Period Type Code.
   * @nullable
   */
  declare accrualFrequencyPeriodTypeCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Revenue Accrued.
   * @nullable
   */
  declare isRevenueAccrued?: NoYes | null;
  /**
   * Group Name.
   * @nullable
   */
  declare groupName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ServiceSubscriptionGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceSubscriptionGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  serviceSubscriptionNumberSequenceCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  invoiceFrequencyPeriodTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  accrualFrequencyPeriodTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  isRevenueAccrued?: NoYes | null;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
}
