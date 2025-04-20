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
import type { HazardousMaterialPackingGroupsApi } from './HazardousMaterialPackingGroupsApi';

/**
 * This class represents the entity "HazardousMaterialPackingGroups" of service "d365_metadata".
 */
export class HazardousMaterialPackingGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements HazardousMaterialPackingGroupsType<T>
{
  /**
   * Technical entity name for HazardousMaterialPackingGroups.
   */
  static override _entityName = 'HazardousMaterialPackingGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HazardousMaterialPackingGroups entity.
   */
  static _keys = ['PackingGroupCode'];
  /**
   * Packing Group Code.
   */
  declare packingGroupCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: HazardousMaterialPackingGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface HazardousMaterialPackingGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  packingGroupCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
