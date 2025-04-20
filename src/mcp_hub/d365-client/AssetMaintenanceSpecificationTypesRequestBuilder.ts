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
import { AssetMaintenanceSpecificationTypes } from './AssetMaintenanceSpecificationTypes';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceSpecificationTypes} entity.
 */
export class AssetMaintenanceSpecificationTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceSpecificationTypes<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceSpecificationTypes` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceSpecificationTypes` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceSpecificationTypes<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceSpecificationTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceSpecificationTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceSpecificationTypes`.
   */
  create(
    entity: AssetMaintenanceSpecificationTypes<T>
  ): CreateRequestBuilder<AssetMaintenanceSpecificationTypes<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceSpecificationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceSpecificationTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceSpecificationTypes.dataAreaId}.
   * @param attributeTypeId Key property. See {@link AssetMaintenanceSpecificationTypes.attributeTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceSpecificationTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    attributeTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceSpecificationTypes<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceSpecificationTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AttributeTypeId: attributeTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceSpecificationTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceSpecificationTypes`.
   */
  update(
    entity: AssetMaintenanceSpecificationTypes<T>
  ): UpdateRequestBuilder<AssetMaintenanceSpecificationTypes<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceSpecificationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceSpecificationTypes`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceSpecificationTypes.dataAreaId}.
   * @param attributeTypeId Key property. See {@link AssetMaintenanceSpecificationTypes.attributeTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceSpecificationTypes`.
   */
  delete(
    dataAreaId: string,
    attributeTypeId: string
  ): DeleteRequestBuilder<AssetMaintenanceSpecificationTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceSpecificationTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceSpecificationTypes` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceSpecificationTypes<T>
  ): DeleteRequestBuilder<AssetMaintenanceSpecificationTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    attributeTypeId?: string
  ): DeleteRequestBuilder<AssetMaintenanceSpecificationTypes<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceSpecificationTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceSpecificationTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AttributeTypeId: attributeTypeId!
          }
    );
  }
}
