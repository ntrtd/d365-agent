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
import { AssetMaintenanceFaultTypes } from './AssetMaintenanceFaultTypes';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFaultTypes} entity.
 */
export class AssetMaintenanceFaultTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceFaultTypes<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFaultTypes` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFaultTypes` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceFaultTypes<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceFaultTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFaultTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFaultTypes`.
   */
  create(
    entity: AssetMaintenanceFaultTypes<T>
  ): CreateRequestBuilder<AssetMaintenanceFaultTypes<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceFaultTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFaultTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFaultTypes.dataAreaId}.
   * @param faultTypeId Key property. See {@link AssetMaintenanceFaultTypes.faultTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFaultTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    faultTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceFaultTypes<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceFaultTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FaultTypeId: faultTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFaultTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFaultTypes`.
   */
  update(
    entity: AssetMaintenanceFaultTypes<T>
  ): UpdateRequestBuilder<AssetMaintenanceFaultTypes<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceFaultTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFaultTypes`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFaultTypes.dataAreaId}.
   * @param faultTypeId Key property. See {@link AssetMaintenanceFaultTypes.faultTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFaultTypes`.
   */
  delete(
    dataAreaId: string,
    faultTypeId: string
  ): DeleteRequestBuilder<AssetMaintenanceFaultTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFaultTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFaultTypes` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFaultTypes<T>
  ): DeleteRequestBuilder<AssetMaintenanceFaultTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    faultTypeId?: string
  ): DeleteRequestBuilder<AssetMaintenanceFaultTypes<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceFaultTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceFaultTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FaultTypeId: faultTypeId!
          }
    );
  }
}
