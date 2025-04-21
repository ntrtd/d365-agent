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
import type { WithholdRevenueTypesApi } from './WithholdRevenueTypesApi';

/**
 * This class represents the entity "WithholdRevenueTypes" of service "d365_metadata".
 */
export class WithholdRevenueTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WithholdRevenueTypesType<T>
{
  /**
   * Technical entity name for WithholdRevenueTypes.
   */
  static override _entityName = 'WithholdRevenueTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdRevenueTypes entity.
   */
  static _keys = ['dataAreaId', 'TaxWithholdRevenueCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Withhold Revenue Code.
   */
  declare taxWithholdRevenueCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Sorting Number.
   */
  declare sortingNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WithholdRevenueTypesApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdRevenueTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxWithholdRevenueCode: DeserializedType<T, 'Edm.String'>;
  sortingNumber: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
