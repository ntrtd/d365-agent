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
import type { EngineeringProductVersionsApi } from './EngineeringProductVersionsApi';
import { ProductsV2, ProductsV2Type } from './ProductsV2';
import {
  ProductReleaseProductDetails,
  ProductReleaseProductDetailsType
} from './ProductReleaseProductDetails';
import {
  ReleasedEngineeringProductVersions,
  ReleasedEngineeringProductVersionsType
} from './ReleasedEngineeringProductVersions';
import {
  EngineeringChangeOrderProductReleases,
  EngineeringChangeOrderProductReleasesType
} from './EngineeringChangeOrderProductReleases';
import {
  SentProductReleaseHeaders,
  SentProductReleaseHeadersType
} from './SentProductReleaseHeaders';
import {
  ReceivedProductReleaseHeaders,
  ReceivedProductReleaseHeadersType
} from './ReceivedProductReleaseHeaders';

/**
 * This class represents the entity "EngineeringProductVersions" of service "d365_metadata".
 */
export class EngineeringProductVersions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringProductVersionsType<T>
{
  /**
   * Technical entity name for EngineeringProductVersions.
   */
  static override _entityName = 'EngineeringProductVersions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringProductVersions entity.
   */
  static _keys = ['ProductNumber', 'EngineeringVersionId'];
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Version Id.
   */
  declare engineeringVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Previous Engineering Version Id.
   * @nullable
   */
  declare previousEngineeringVersionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Version Number.
   */
  declare versionNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Engineering Organization Id.
   * @nullable
   */
  declare engineeringOrganizationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProductsV2} entity.
   */
  declare productV2?: ProductsV2<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductReleaseProductDetails} entity.
   */
  declare productReleaseProductDetails: ProductReleaseProductDetails<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedEngineeringProductVersions} entity.
   */
  declare releasedEngineeringProductVersions: ReleasedEngineeringProductVersions<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductReleases} entity.
   */
  declare engineeringChangeOrderProductReleases: EngineeringChangeOrderProductReleases<T>[];
  /**
   * One-to-many navigation property to the {@link SentProductReleaseHeaders} entity.
   */
  declare sentProductReleaseHeaders: SentProductReleaseHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ReceivedProductReleaseHeaders} entity.
   */
  declare receivedProductReleaseHeaders: ReceivedProductReleaseHeaders<T>[];

  constructor(_entityApi: EngineeringProductVersionsApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringProductVersionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productNumber: DeserializedType<T, 'Edm.String'>;
  engineeringVersionId: DeserializedType<T, 'Edm.String'>;
  previousEngineeringVersionId?: DeserializedType<T, 'Edm.String'> | null;
  versionNumber: DeserializedType<T, 'Edm.Decimal'>;
  engineeringOrganizationId?: DeserializedType<T, 'Edm.String'> | null;
  productV2?: ProductsV2Type<T> | null;
  productReleaseProductDetails: ProductReleaseProductDetailsType<T>[];
  releasedEngineeringProductVersions: ReleasedEngineeringProductVersionsType<T>[];
  engineeringChangeOrderProductReleases: EngineeringChangeOrderProductReleasesType<T>[];
  sentProductReleaseHeaders: SentProductReleaseHeadersType<T>[];
  receivedProductReleaseHeaders: ReceivedProductReleaseHeadersType<T>[];
}
