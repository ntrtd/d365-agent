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
import { AssetMaintenanceWarranties } from './AssetMaintenanceWarranties';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWarranties} entity.
 */
export class AssetMaintenanceWarrantiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWarranties<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWarranties` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWarranties` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceWarranties<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceWarranties<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWarranties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWarranties`.
   */
  create(
    entity: AssetMaintenanceWarranties<T>
  ): CreateRequestBuilder<AssetMaintenanceWarranties<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceWarranties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWarranties` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWarranties.dataAreaId}.
   * @param warrantyId Key property. See {@link AssetMaintenanceWarranties.warrantyId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWarranties` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    warrantyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWarranties<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceWarranties<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WarrantyId: warrantyId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWarranties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWarranties`.
   */
  update(
    entity: AssetMaintenanceWarranties<T>
  ): UpdateRequestBuilder<AssetMaintenanceWarranties<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceWarranties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWarranties`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWarranties.dataAreaId}.
   * @param warrantyId Key property. See {@link AssetMaintenanceWarranties.warrantyId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWarranties`.
   */
  delete(
    dataAreaId: string,
    warrantyId: string
  ): DeleteRequestBuilder<AssetMaintenanceWarranties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWarranties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWarranties` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWarranties<T>
  ): DeleteRequestBuilder<AssetMaintenanceWarranties<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    warrantyId?: string
  ): DeleteRequestBuilder<AssetMaintenanceWarranties<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceWarranties<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWarranties
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WarrantyId: warrantyId!
          }
    );
  }
}
