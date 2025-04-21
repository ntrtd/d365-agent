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
import type { SubBillDeferralEventBasedProcessingsApi } from './SubBillDeferralEventBasedProcessingsApi';

/**
 * This class represents the entity "SubBillDeferralEventBasedProcessings" of service "d365_metadata".
 */
export class SubBillDeferralEventBasedProcessings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillDeferralEventBasedProcessingsType<T>
{
  /**
   * Technical entity name for SubBillDeferralEventBasedProcessings.
   */
  static override _entityName = 'SubBillDeferralEventBasedProcessings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillDeferralEventBasedProcessings entity.
   */
  static _keys = ['dataAreaId', 'EventDescription', 'CustomerNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Event Description.
   */
  declare eventDescription: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Number.
   */
  declare customerNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Schedule Number.
   * @nullable
   */
  declare scheduleNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Line.
   */
  declare line: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: SubBillDeferralEventBasedProcessingsApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillDeferralEventBasedProcessingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  eventDescription: DeserializedType<T, 'Edm.String'>;
  customerNumber: DeserializedType<T, 'Edm.String'>;
  scheduleNumber?: DeserializedType<T, 'Edm.String'> | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  line: DeserializedType<T, 'Edm.Int32'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
