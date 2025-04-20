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
import type { RetailStoreSectionsApi } from './RetailStoreSectionsApi';
import { RetailSizeUnit } from './RetailSizeUnit';

/**
 * This class represents the entity "RetailStoreSections" of service "d365_metadata".
 */
export class RetailStoreSections<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailStoreSectionsType<T>
{
  /**
   * Technical entity name for RetailStoreSections.
   */
  static override _entityName = 'RetailStoreSections';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailStoreSections entity.
   */
  static _keys = ['dataAreaId', 'SectionId', 'OMOperatingUnitNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Section Id.
   */
  declare sectionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Om Operating Unit Number.
   */
  declare omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: RetailStoreSectionsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailStoreSectionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sectionId: DeserializedType<T, 'Edm.String'>;
  omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  size: DeserializedType<T, 'Edm.Decimal'>;
  lastCheckedStock: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sizeUnit?: RetailSizeUnit | null;
}
