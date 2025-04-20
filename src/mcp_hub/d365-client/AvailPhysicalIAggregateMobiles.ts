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
import type { AvailPhysicalIAggregateMobilesApi } from './AvailPhysicalIAggregateMobilesApi';

/**
 * This class represents the entity "AvailPhysicalIAggregateMobiles" of service "d365_metadata".
 */
export class AvailPhysicalIAggregateMobiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AvailPhysicalIAggregateMobilesType<T>
{
  /**
   * Technical entity name for AvailPhysicalIAggregateMobiles.
   */
  static override _entityName = 'AvailPhysicalIAggregateMobiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AvailPhysicalIAggregateMobiles entity.
   */
  static _keys = ['dataAreaId', 'DisplayProductNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Product Number.
   */
  declare displayProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Avail Physical.
   */
  declare availPhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Id.
   * @nullable
   */
  declare unitId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AvailPhysicalIAggregateMobilesApi<T>) {
    super(_entityApi);
  }
}

export interface AvailPhysicalIAggregateMobilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  displayProductNumber: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  availPhysical: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  unitId?: DeserializedType<T, 'Edm.String'> | null;
}
