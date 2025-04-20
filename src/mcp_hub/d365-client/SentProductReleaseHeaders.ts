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
import type { SentProductReleaseHeadersApi } from './SentProductReleaseHeadersApi';
import { EngChgReleaseStatus } from './EngChgReleaseStatus';
import {
  ChgSentProductReleaseLines,
  ChgSentProductReleaseLinesType
} from './ChgSentProductReleaseLines';
import { Workers, WorkersType } from './Workers';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import {
  EngineeringProductVersions,
  EngineeringProductVersionsType
} from './EngineeringProductVersions';

/**
 * This class represents the entity "SentProductReleaseHeaders" of service "d365_metadata".
 */
export class SentProductReleaseHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SentProductReleaseHeadersType<T>
{
  /**
   * Technical entity name for SentProductReleaseHeaders.
   */
  static override _entityName = 'SentProductReleaseHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SentProductReleaseHeaders entity.
   */
  static _keys = [
    'dataAreaId',
    'ProductNumber',
    'ReleasingLegalEntityId',
    'ReleaseStatus',
    'ProductVersionId',
    'ReleaseHeaderCreatedDateTime'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Releasing Legal Entity Id.
   */
  declare releasingLegalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Release Status.
   * @nullable
   */
  declare releaseStatus?: EngChgReleaseStatus | null;
  /**
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Release Header Created Date Time.
   */
  declare releaseHeaderCreatedDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Processor Personnel Number.
   * @nullable
   */
  declare processorPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Site Id.
   * @nullable
   */
  declare receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Release Notes.
   * @nullable
   */
  declare releaseNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cancellor Personnel Number.
   * @nullable
   */
  declare cancellorPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Engineering Change Order Number.
   * @nullable
   */
  declare engineeringChangeOrderNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Releasing Site Id.
   * @nullable
   */
  declare releasingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ChgSentProductReleaseLines} entity.
   */
  declare sentProductReleaseLines: ChgSentProductReleaseLines<T>[];
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare cancellorWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare receivingSite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringProductVersions} entity.
   */
  declare engineeringProductVersion?: EngineeringProductVersions<T> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare releasingSite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare processorWorker?: Workers<T> | null;

  constructor(_entityApi: SentProductReleaseHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface SentProductReleaseHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productNumber: DeserializedType<T, 'Edm.String'>;
  releasingLegalEntityId: DeserializedType<T, 'Edm.String'>;
  releaseStatus?: EngChgReleaseStatus | null;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  releaseHeaderCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  processorPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  releaseNotes?: DeserializedType<T, 'Edm.String'> | null;
  cancellorPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  engineeringChangeOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  releasingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  sentProductReleaseLines: ChgSentProductReleaseLinesType<T>[];
  cancellorWorker?: WorkersType<T> | null;
  receivingSite?: OperationalSitesType<T> | null;
  engineeringProductVersion?: EngineeringProductVersionsType<T> | null;
  releasingSite?: OperationalSitesType<T> | null;
  processorWorker?: WorkersType<T> | null;
}
