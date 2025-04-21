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
import type { EngineeringChangeOrderProductReleasesApi } from './EngineeringChangeOrderProductReleasesApi';
import { NoYes } from './NoYes';
import { ProductsV2, ProductsV2Type } from './ProductsV2';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import {
  EngineeringProductVersions,
  EngineeringProductVersionsType
} from './EngineeringProductVersions';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "EngineeringChangeOrderProductReleases" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductReleases<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderProductReleasesType<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductReleases.
   */
  static override _entityName = 'EngineeringChangeOrderProductReleases';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductReleases entity.
   */
  static _keys = [
    'dataAreaId',
    'EngineeringChangeOrderNumber',
    'EngineeringChangeOrderProductLineNumber',
    'ProductNumber',
    'ProductVersionId',
    'ReceivingLegalEntityId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Change Order Number.
   */
  declare engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Change Order Product Line Number.
   */
  declare engineeringChangeOrderProductLineNumber: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Receiving Legal Entity Id.
   */
  declare receivingLegalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Processor Personnel Number.
   * @nullable
   */
  declare processorPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processed Date Time.
   */
  declare processedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Will Product Be Included In Release.
   * @nullable
   */
  declare willProductBeIncludedInRelease?: NoYes | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Releasing Site Id.
   * @nullable
   */
  declare releasingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProductsV2} entity.
   */
  declare productV2?: ProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringProductVersions} entity.
   */
  declare engineeringProductVersion?: EngineeringProductVersions<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare processorWorker?: Workers<T> | null;

  constructor(_entityApi: EngineeringChangeOrderProductReleasesApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductReleasesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  productNumber: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  receivingLegalEntityId: DeserializedType<T, 'Edm.String'>;
  processorPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  processedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  willProductBeIncludedInRelease?: NoYes | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  releasingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  productV2?: ProductsV2Type<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  engineeringProductVersion?: EngineeringProductVersionsType<T> | null;
  processorWorker?: WorkersType<T> | null;
}
