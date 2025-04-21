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
import type { VendorRequestNewCategoriesApi } from './VendorRequestNewCategoriesApi';
import { VendVendorRequestNewCategoryOriginType } from './VendVendorRequestNewCategoryOriginType';
import { NoYes } from './NoYes';
import { VendVendorRequestEntityType } from './VendVendorRequestEntityType';
import { VendVendorRequestStatus } from './VendVendorRequestStatus';
import { VendRequestWorkflowState } from './VendRequestWorkflowState';
import {
  RequestNewCategories,
  RequestNewCategoriesType
} from './RequestNewCategories';

/**
 * This class represents the entity "VendorRequestNewCategories" of service "d365_metadata".
 */
export class VendorRequestNewCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorRequestNewCategoriesType<T>
{
  /**
   * Technical entity name for VendorRequestNewCategories.
   */
  static override _entityName = 'VendorRequestNewCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorRequestNewCategories entity.
   */
  static _keys = ['dataAreaId', 'RequestId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Request Id.
   */
  declare requestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vend Request Origin Type.
   * @nullable
   */
  declare vendRequestOriginType?: VendVendorRequestNewCategoryOriginType | null;
  /**
   * Account Num.
   * @nullable
   */
  declare accountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Resolved.
   */
  declare dateResolved: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Instance Relation Type.
   */
  declare instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Vendor Portal Access Allowed.
   * @nullable
   */
  declare vendorPortalAccessAllowed?: NoYes | null;
  /**
   * Date Submitted.
   */
  declare dateSubmitted: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Request Entity Type.
   * @nullable
   */
  declare requestEntityType?: VendVendorRequestEntityType | null;
  /**
   * Completed Date Time.
   */
  declare completedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Request Status.
   * @nullable
   */
  declare requestStatus?: VendVendorRequestStatus | null;
  /**
   * Vend Request Workflow State.
   * @nullable
   */
  declare vendRequestWorkflowState?: VendRequestWorkflowState | null;
  /**
   * Sponsored By.
   * @nullable
   */
  declare sponsoredBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Name.
   * @nullable
   */
  declare vendorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RequestNewCategories} entity.
   */
  declare requestNewCategory: RequestNewCategories<T>[];

  constructor(_entityApi: VendorRequestNewCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface VendorRequestNewCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  vendRequestOriginType?: VendVendorRequestNewCategoryOriginType | null;
  accountNum?: DeserializedType<T, 'Edm.String'> | null;
  dateResolved: DeserializedType<T, 'Edm.DateTimeOffset'>;
  instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  vendorPortalAccessAllowed?: NoYes | null;
  dateSubmitted: DeserializedType<T, 'Edm.DateTimeOffset'>;
  requestEntityType?: VendVendorRequestEntityType | null;
  completedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  requestStatus?: VendVendorRequestStatus | null;
  vendRequestWorkflowState?: VendRequestWorkflowState | null;
  sponsoredBy?: DeserializedType<T, 'Edm.String'> | null;
  vendorName?: DeserializedType<T, 'Edm.String'> | null;
  requestNewCategory: RequestNewCategoriesType<T>[];
}
