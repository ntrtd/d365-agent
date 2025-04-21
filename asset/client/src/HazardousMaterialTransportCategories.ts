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
import type { HazardousMaterialTransportCategoriesApi } from './HazardousMaterialTransportCategoriesApi';

/**
 * This class represents the entity "HazardousMaterialTransportCategories" of service "d365_metadata".
 */
export class HazardousMaterialTransportCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements HazardousMaterialTransportCategoriesType<T>
{
  /**
   * Technical entity name for HazardousMaterialTransportCategories.
   */
  static override _entityName = 'HazardousMaterialTransportCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HazardousMaterialTransportCategories entity.
   */
  static _keys = ['TransportCategoryCode'];
  /**
   * Transport Category Code.
   */
  declare transportCategoryCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: HazardousMaterialTransportCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface HazardousMaterialTransportCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  transportCategoryCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
