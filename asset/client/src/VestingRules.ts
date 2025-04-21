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
import type { VestingRulesApi } from './VestingRulesApi';

/**
 * This class represents the entity "VestingRules" of service "d365_metadata".
 */
export class VestingRules<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VestingRulesType<T>
{
  /**
   * Technical entity name for VestingRules.
   */
  static override _entityName = 'VestingRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VestingRules entity.
   */
  static _keys = ['dataAreaId', 'VestingRule'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vesting Rule.
   */
  declare vestingRule: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VestingRulesApi<T>) {
    super(_entityApi);
  }
}

export interface VestingRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vestingRule: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
}
