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
import type { WithholdNatureOfRemittancesApi } from './WithholdNatureOfRemittancesApi';

/**
 * This class represents the entity "WithholdNatureOfRemittances" of service "d365_metadata".
 */
export class WithholdNatureOfRemittances<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WithholdNatureOfRemittancesType<T>
{
  /**
   * Technical entity name for WithholdNatureOfRemittances.
   */
  static override _entityName = 'WithholdNatureOfRemittances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdNatureOfRemittances entity.
   */
  static _keys = ['dataAreaId', 'RemittanceCategoryCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Remittance Category Code.
   */
  declare remittanceCategoryCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Remittance Details.
   * @nullable
   */
  declare remittanceDetails?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WithholdNatureOfRemittancesApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdNatureOfRemittancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  remittanceCategoryCode: DeserializedType<T, 'Edm.String'>;
  remittanceDetails?: DeserializedType<T, 'Edm.String'> | null;
}
