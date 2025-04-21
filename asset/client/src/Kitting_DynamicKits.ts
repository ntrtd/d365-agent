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
import type { Kitting_DynamicKitsApi } from './Kitting_DynamicKitsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "Kitting_DynamicKits" of service "d365_metadata".
 */
export class Kitting_DynamicKits<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Kitting_DynamicKitsType<T>
{
  /**
   * Technical entity name for Kitting_DynamicKits.
   */
  static override _entityName = 'Kitting_DynamicKits';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Kitting_DynamicKits entity.
   */
  static _keys = ['dataAreaId', 'DynamicKitId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Dynamic Kit Id.
   */
  declare dynamicKitId: DeserializedType<T, 'Edm.String'>;
  /**
   * Dynamic Kit Name.
   * @nullable
   */
  declare dynamicKitName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approver Personnel Number.
   * @nullable
   */
  declare approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Approved.
   * @nullable
   */
  declare isApproved?: NoYes | null;
  /**
   * Site Id.
   * @nullable
   */
  declare siteId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: Kitting_DynamicKitsApi<T>) {
    super(_entityApi);
  }
}

export interface Kitting_DynamicKitsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  dynamicKitId: DeserializedType<T, 'Edm.String'>;
  dynamicKitName?: DeserializedType<T, 'Edm.String'> | null;
  approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  isApproved?: NoYes | null;
  siteId?: DeserializedType<T, 'Edm.String'> | null;
}
