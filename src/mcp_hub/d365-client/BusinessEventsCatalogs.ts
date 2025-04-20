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
import type { BusinessEventsCatalogsApi } from './BusinessEventsCatalogsApi';
import { ModuleAxapta } from './ModuleAxapta';

/**
 * This class represents the entity "BusinessEventsCatalogs" of service "d365_metadata".
 */
export class BusinessEventsCatalogs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessEventsCatalogsType<T>
{
  /**
   * Technical entity name for BusinessEventsCatalogs.
   */
  static override _entityName = 'BusinessEventsCatalogs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessEventsCatalogs entity.
   */
  static _keys = ['BusinessEventId'];
  /**
   * Business Event Id.
   */
  declare businessEventId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Desc Param 2.
   * @nullable
   */
  declare descParam2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Param 1.
   * @nullable
   */
  declare nameParam1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Param 2.
   * @nullable
   */
  declare nameParam2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Desc Param 1.
   * @nullable
   */
  declare descParam1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Module.
   * @nullable
   */
  declare module?: ModuleAxapta | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract.
   * @nullable
   */
  declare contract?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BusinessEventsCatalogsApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessEventsCatalogsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  businessEventId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  descParam2?: DeserializedType<T, 'Edm.String'> | null;
  nameParam1?: DeserializedType<T, 'Edm.String'> | null;
  nameParam2?: DeserializedType<T, 'Edm.String'> | null;
  descParam1?: DeserializedType<T, 'Edm.String'> | null;
  module?: ModuleAxapta | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  contract?: DeserializedType<T, 'Edm.String'> | null;
}
