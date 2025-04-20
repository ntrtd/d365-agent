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
import type { RetailKitOrderJournalsApi } from './RetailKitOrderJournalsApi';
import { RetailKitOrders, RetailKitOrdersType } from './RetailKitOrders';

/**
 * This class represents the entity "RetailKitOrderJournals" of service "d365_metadata".
 */
export class RetailKitOrderJournals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailKitOrderJournalsType<T>
{
  /**
   * Technical entity name for RetailKitOrderJournals.
   */
  static override _entityName = 'RetailKitOrderJournals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailKitOrderJournals entity.
   */
  static _keys = ['KitProductNumber', 'KitConfigId', 'Name'];
  /**
   * Kit Product Number.
   */
  declare kitProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Kit Config Id.
   */
  declare kitConfigId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   * @nullable
   */
  declare legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Id.
   * @nullable
   */
  declare journalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Kit Order.
   */
  declare kitOrder: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link RetailKitOrders} entity.
   */
  declare retailKitOrder?: RetailKitOrders<T> | null;

  constructor(_entityApi: RetailKitOrderJournalsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailKitOrderJournalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  kitProductNumber: DeserializedType<T, 'Edm.String'>;
  kitConfigId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  journalId?: DeserializedType<T, 'Edm.String'> | null;
  kitOrder: DeserializedType<T, 'Edm.Int64'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  retailKitOrder?: RetailKitOrdersType<T> | null;
}
