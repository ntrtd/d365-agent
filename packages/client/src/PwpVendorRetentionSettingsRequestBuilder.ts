/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { PwpVendorRetentionSettings } from './PwpVendorRetentionSettings';

/**
 * Request builder class for operations supported on the {@link PwpVendorRetentionSettings} entity.
 */
export class PwpVendorRetentionSettingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PwpVendorRetentionSettings<T>, T> {
  /**
   * Returns a request builder for querying all `PwpVendorRetentionSettings` entities.
   * @returns A request builder for creating requests to retrieve all `PwpVendorRetentionSettings` entities.
   */
  getAll(): GetAllRequestBuilder<PwpVendorRetentionSettings<T>, T> {
    return new GetAllRequestBuilder<PwpVendorRetentionSettings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PwpVendorRetentionSettings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PwpVendorRetentionSettings`.
   */
  create(
    entity: PwpVendorRetentionSettings<T>
  ): CreateRequestBuilder<PwpVendorRetentionSettings<T>, T> {
    return new CreateRequestBuilder<PwpVendorRetentionSettings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PwpVendorRetentionSettings` entity based on its keys.
   * @param dataAreaId Key property. See {@link PwpVendorRetentionSettings.dataAreaId}.
   * @param projId Key property. See {@link PwpVendorRetentionSettings.projId}.
   * @param vendorId Key property. See {@link PwpVendorRetentionSettings.vendorId}.
   * @param vendorGroup Key property. See {@link PwpVendorRetentionSettings.vendorGroup}.
   * @returns A request builder for creating requests to retrieve one `PwpVendorRetentionSettings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projId: DeserializedType<T, 'Edm.String'>,
    vendorId: DeserializedType<T, 'Edm.String'>,
    vendorGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PwpVendorRetentionSettings<T>, T> {
    return new GetByKeyRequestBuilder<PwpVendorRetentionSettings<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjId: projId,
        VendorId: vendorId,
        VendorGroup: vendorGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PwpVendorRetentionSettings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PwpVendorRetentionSettings`.
   */
  update(
    entity: PwpVendorRetentionSettings<T>
  ): UpdateRequestBuilder<PwpVendorRetentionSettings<T>, T> {
    return new UpdateRequestBuilder<PwpVendorRetentionSettings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PwpVendorRetentionSettings`.
   * @param dataAreaId Key property. See {@link PwpVendorRetentionSettings.dataAreaId}.
   * @param projId Key property. See {@link PwpVendorRetentionSettings.projId}.
   * @param vendorId Key property. See {@link PwpVendorRetentionSettings.vendorId}.
   * @param vendorGroup Key property. See {@link PwpVendorRetentionSettings.vendorGroup}.
   * @returns A request builder for creating requests that delete an entity of type `PwpVendorRetentionSettings`.
   */
  delete(
    dataAreaId: string,
    projId: string,
    vendorId: string,
    vendorGroup: string
  ): DeleteRequestBuilder<PwpVendorRetentionSettings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PwpVendorRetentionSettings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PwpVendorRetentionSettings` by taking the entity as a parameter.
   */
  delete(
    entity: PwpVendorRetentionSettings<T>
  ): DeleteRequestBuilder<PwpVendorRetentionSettings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projId?: string,
    vendorId?: string,
    vendorGroup?: string
  ): DeleteRequestBuilder<PwpVendorRetentionSettings<T>, T> {
    return new DeleteRequestBuilder<PwpVendorRetentionSettings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PwpVendorRetentionSettings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjId: projId!,
            VendorId: vendorId!,
            VendorGroup: vendorGroup!
          }
    );
  }
}
