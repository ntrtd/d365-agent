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
import type { RetailMediaResourcesApi } from './RetailMediaResourcesApi';
import { NoYes } from './NoYes';
import { RetailMediaType } from './RetailMediaType';

/**
 * This class represents the entity "RetailMediaResources" of service "d365_metadata".
 */
export class RetailMediaResources<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailMediaResourcesType<T>
{
  /**
   * Technical entity name for RetailMediaResources.
   */
  static override _entityName = 'RetailMediaResources';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailMediaResources entity.
   */
  static _keys = ['ResourceId'];
  /**
   * Resource Id.
   */
  declare resourceId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Small Image Shared Storage Id.
   */
  declare smallImageSharedStorageId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Customer.
   * @nullable
   */
  declare isCustomer?: NoYes | null;
  /**
   * File Name.
   * @nullable
   */
  declare fileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Pos.
   * @nullable
   */
  declare isPos?: NoYes | null;
  /**
   * Is Secured Resource.
   * @nullable
   */
  declare isSecuredResource?: NoYes | null;
  /**
   * Size In Kilobytes.
   */
  declare sizeInKilobytes: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Height.
   */
  declare height: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Shared Storage Id.
   */
  declare sharedStorageId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Is Worker.
   * @nullable
   */
  declare isWorker?: NoYes | null;
  /**
   * Is Externally Hosted.
   * @nullable
   */
  declare isExternallyHosted?: NoYes | null;
  /**
   * Is Partial Url.
   * @nullable
   */
  declare isPartialUrl?: NoYes | null;
  /**
   * Instance Relation Type.
   */
  declare instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Width.
   */
  declare width: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Category.
   * @nullable
   */
  declare isCategory?: NoYes | null;
  /**
   * Is Catalog.
   * @nullable
   */
  declare isCatalog?: NoYes | null;
  /**
   * Media Type.
   * @nullable
   */
  declare mediaType?: RetailMediaType | null;
  /**
   * Thumbnail Shared Storage Id.
   */
  declare thumbnailSharedStorageId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * In Use.
   * @nullable
   */
  declare inUse?: NoYes | null;
  /**
   * Small Image Url.
   * @nullable
   */
  declare smallImageUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource Url.
   * @nullable
   */
  declare resourceUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Thumbnail Url.
   * @nullable
   */
  declare thumbnailUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Product.
   * @nullable
   */
  declare isProduct?: NoYes | null;
  /**
   * External Resource Id.
   * @nullable
   */
  declare externalResourceId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailMediaResourcesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailMediaResourcesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  resourceId: DeserializedType<T, 'Edm.Int32'>;
  smallImageSharedStorageId: DeserializedType<T, 'Edm.Guid'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isCustomer?: NoYes | null;
  fileName?: DeserializedType<T, 'Edm.String'> | null;
  isPos?: NoYes | null;
  isSecuredResource?: NoYes | null;
  sizeInKilobytes: DeserializedType<T, 'Edm.Int32'>;
  height: DeserializedType<T, 'Edm.Int32'>;
  sharedStorageId: DeserializedType<T, 'Edm.Guid'>;
  isWorker?: NoYes | null;
  isExternallyHosted?: NoYes | null;
  isPartialUrl?: NoYes | null;
  instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  width: DeserializedType<T, 'Edm.Int32'>;
  isCategory?: NoYes | null;
  isCatalog?: NoYes | null;
  mediaType?: RetailMediaType | null;
  thumbnailSharedStorageId: DeserializedType<T, 'Edm.Guid'>;
  inUse?: NoYes | null;
  smallImageUrl?: DeserializedType<T, 'Edm.String'> | null;
  resourceUrl?: DeserializedType<T, 'Edm.String'> | null;
  thumbnailUrl?: DeserializedType<T, 'Edm.String'> | null;
  isProduct?: NoYes | null;
  externalResourceId?: DeserializedType<T, 'Edm.String'> | null;
}
