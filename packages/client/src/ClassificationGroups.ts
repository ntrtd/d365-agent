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
import type { ClassificationGroupsApi } from './ClassificationGroupsApi';

/**
 * This class represents the entity "ClassificationGroups" of service "d365_metadata".
 */
export class ClassificationGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ClassificationGroupsType<T>
{
  /**
   * Technical entity name for ClassificationGroups.
   */
  static override _entityName = 'ClassificationGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ClassificationGroups entity.
   */
  static _keys = ['ClassGroupCode'];
  /**
   * Class Group Code.
   */
  declare classGroupCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Class Code.
   * @nullable
   */
  declare classCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multiplier.
   */
  declare multiplier: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transport Category Code.
   * @nullable
   */
  declare transportCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Group Code.
   * @nullable
   */
  declare packingGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Division Code.
   * @nullable
   */
  declare divisionCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ClassificationGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ClassificationGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  classGroupCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  classCode?: DeserializedType<T, 'Edm.String'> | null;
  multiplier: DeserializedType<T, 'Edm.Decimal'>;
  transportCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  packingGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  divisionCode?: DeserializedType<T, 'Edm.String'> | null;
}
