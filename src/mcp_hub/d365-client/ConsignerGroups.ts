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
import type { ConsignerGroupsApi } from './ConsignerGroupsApi';
import { ConsignersV2, ConsignersV2Type } from './ConsignersV2';
import { Consigners, ConsignersType } from './Consigners';

/**
 * This class represents the entity "ConsignerGroups" of service "d365_metadata".
 */
export class ConsignerGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ConsignerGroupsType<T>
{
  /**
   * Technical entity name for ConsignerGroups.
   */
  static override _entityName = 'ConsignerGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ConsignerGroups entity.
   */
  static _keys = ['dataAreaId', 'ConsignerGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Consigner Group Id.
   */
  declare consignerGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ConsignersV2} entity.
   */
  declare consigners: ConsignersV2<T>[];
  /**
   * One-to-many navigation property to the {@link Consigners} entity.
   */
  declare consigner: Consigners<T>[];

  constructor(_entityApi: ConsignerGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ConsignerGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  consignerGroupId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  consigners: ConsignersV2Type<T>[];
  consigner: ConsignersType<T>[];
}
