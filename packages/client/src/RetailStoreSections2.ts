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
import type { RetailStoreSections2Api } from './RetailStoreSections2Api';
import { RetailSizeUnit } from './RetailSizeUnit';

/**
 * This class represents the entity "RetailStoreSections2" of service "d365_metadata".
 */
export class RetailStoreSections2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailStoreSections2Type<T>
{
  /**
   * Technical entity name for RetailStoreSections2.
   */
  static override _entityName = 'RetailStoreSections2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailStoreSections2 entity.
   */
  static _keys = ['dataAreaId', 'SectionId', 'StoreNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Section Id.
   */
  declare sectionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Number.
   */
  declare storeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Size.
   */
  declare size: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Checked Stock.
   */
  declare lastCheckedStock: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Size Unit.
   * @nullable
   */
  declare sizeUnit?: RetailSizeUnit | null;

  constructor(_entityApi: RetailStoreSections2Api<T>) {
    super(_entityApi);
  }
}

export interface RetailStoreSections2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sectionId: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  size: DeserializedType<T, 'Edm.Decimal'>;
  lastCheckedStock: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sizeUnit?: RetailSizeUnit | null;
}
