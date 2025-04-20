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
import type { Kitting_KitHeadersApi } from './Kitting_KitHeadersApi';
import { NoYes } from './NoYes';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import { Workers, WorkersType } from './Workers';
import { KittingKitLines, KittingKitLinesType } from './KittingKitLines';
import {
  KittingKitVersions,
  KittingKitVersionsType
} from './KittingKitVersions';

/**
 * This class represents the entity "Kitting_KitHeaders" of service "d365_metadata".
 */
export class Kitting_KitHeaders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Kitting_KitHeadersType<T>
{
  /**
   * Technical entity name for Kitting_KitHeaders.
   */
  static override _entityName = 'Kitting_KitHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Kitting_KitHeaders entity.
   */
  static _keys = ['dataAreaId', 'KitId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Kit Id.
   */
  declare kitId: DeserializedType<T, 'Edm.String'>;
  /**
   * Kit Name.
   * @nullable
   */
  declare kitName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Group Id.
   * @nullable
   */
  declare productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Site Id.
   * @nullable
   */
  declare productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare productionSite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare approvingWorker?: Workers<T> | null;
  /**
   * One-to-many navigation property to the {@link KittingKitLines} entity.
   */
  declare kittingKitLine: KittingKitLines<T>[];
  /**
   * One-to-many navigation property to the {@link KittingKitLines} entity.
   */
  declare kitLines: KittingKitLines<T>[];
  /**
   * One-to-many navigation property to the {@link KittingKitVersions} entity.
   */
  declare kittingKitVersion: KittingKitVersions<T>[];

  constructor(_entityApi: Kitting_KitHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface Kitting_KitHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  kitId: DeserializedType<T, 'Edm.String'>;
  kitName?: DeserializedType<T, 'Edm.String'> | null;
  productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  isApproved?: NoYes | null;
  productionSite?: OperationalSitesType<T> | null;
  approvingWorker?: WorkersType<T> | null;
  kittingKitLine: KittingKitLinesType<T>[];
  kitLines: KittingKitLinesType<T>[];
  kittingKitVersion: KittingKitVersionsType<T>[];
}
