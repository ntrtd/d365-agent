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
import type { TablesApi } from './TablesApi';
import { RDeferralsVatRefundingMethod } from './RDeferralsVatRefundingMethod';

/**
 * This class represents the entity "Tables" of service "d365_metadata".
 */
export class Tables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TablesType<T>
{
  /**
   * Technical entity name for Tables.
   */
  static override _entityName = 'Tables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Tables entity.
   */
  static _keys = ['dataAreaId', 'DeferralId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Deferral Id.
   */
  declare deferralId: DeserializedType<T, 'Edm.String'>;
  /**
   * Date Attached.
   */
  declare dateAttached: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Offset Method For Deferrals.
   * @nullable
   */
  declare vatOffsetMethodForDeferrals?: RDeferralsVatRefundingMethod | null;

  constructor(_entityApi: TablesApi<T>) {
    super(_entityApi);
  }
}

export interface TablesType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  deferralId: DeserializedType<T, 'Edm.String'>;
  dateAttached: DeserializedType<T, 'Edm.DateTimeOffset'>;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  vatOffsetMethodForDeferrals?: RDeferralsVatRefundingMethod | null;
}
