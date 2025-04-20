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
import { AssetMaintenanceFaultRemedies } from './AssetMaintenanceFaultRemedies';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFaultRemedies} entity.
 */
export class AssetMaintenanceFaultRemediesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceFaultRemedies<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFaultRemedies` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFaultRemedies` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceFaultRemedies<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceFaultRemedies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFaultRemedies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFaultRemedies`.
   */
  create(
    entity: AssetMaintenanceFaultRemedies<T>
  ): CreateRequestBuilder<AssetMaintenanceFaultRemedies<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceFaultRemedies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFaultRemedies` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFaultRemedies.dataAreaId}.
   * @param faultRemedyId Key property. See {@link AssetMaintenanceFaultRemedies.faultRemedyId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFaultRemedies` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    faultRemedyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceFaultRemedies<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceFaultRemedies<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FaultRemedyId: faultRemedyId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFaultRemedies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFaultRemedies`.
   */
  update(
    entity: AssetMaintenanceFaultRemedies<T>
  ): UpdateRequestBuilder<AssetMaintenanceFaultRemedies<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceFaultRemedies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFaultRemedies`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFaultRemedies.dataAreaId}.
   * @param faultRemedyId Key property. See {@link AssetMaintenanceFaultRemedies.faultRemedyId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFaultRemedies`.
   */
  delete(
    dataAreaId: string,
    faultRemedyId: string
  ): DeleteRequestBuilder<AssetMaintenanceFaultRemedies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFaultRemedies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFaultRemedies` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFaultRemedies<T>
  ): DeleteRequestBuilder<AssetMaintenanceFaultRemedies<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    faultRemedyId?: string
  ): DeleteRequestBuilder<AssetMaintenanceFaultRemedies<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceFaultRemedies<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceFaultRemedies
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FaultRemedyId: faultRemedyId!
          }
    );
  }
}
