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
import type { RetailKitOrdersApi } from './RetailKitOrdersApi';
import { NoYes } from './NoYes';
import { RetailKitOrderType } from './RetailKitOrderType';
import { RetailKitOrderSource } from './RetailKitOrderSource';
import { RetailKits, RetailKitsType } from './RetailKits';
import {
  RetailKitOrderJournals,
  RetailKitOrderJournalsType
} from './RetailKitOrderJournals';

/**
 * This class represents the entity "RetailKitOrders" of service "d365_metadata".
 */
export class RetailKitOrders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailKitOrdersType<T>
{
  /**
   * Technical entity name for RetailKitOrders.
   */
  static override _entityName = 'RetailKitOrders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailKitOrders entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse.
   * @nullable
   */
  declare warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comments.
   * @nullable
   */
  declare comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Assembly.
   * @nullable
   */
  declare isAssembly?: NoYes | null;
  /**
   * Legal Entity Id.
   * @nullable
   */
  declare legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Type.
   * @nullable
   */
  declare orderType?: RetailKitOrderType | null;
  /**
   * Order Source.
   * @nullable
   */
  declare orderSource?: RetailKitOrderSource | null;
  /**
   * Kit Product Number.
   * @nullable
   */
  declare kitProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Kit.
   */
  declare kit: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link RetailKits} entity.
   */
  declare retailKit?: RetailKits<T> | null;
  /**
   * One-to-many navigation property to the {@link RetailKitOrderJournals} entity.
   */
  declare retailKitOrderJournal: RetailKitOrderJournals<T>[];

  constructor(_entityApi: RetailKitOrdersApi<T>) {
    super(_entityApi);
  }
}

export interface RetailKitOrdersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  isAssembly?: NoYes | null;
  legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  orderType?: RetailKitOrderType | null;
  orderSource?: RetailKitOrderSource | null;
  kitProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  kit: DeserializedType<T, 'Edm.Int64'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  retailKit?: RetailKitsType<T> | null;
  retailKitOrderJournal: RetailKitOrderJournalsType<T>[];
}
