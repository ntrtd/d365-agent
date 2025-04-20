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
import { AssetMaintenanceFaultAreas } from './AssetMaintenanceFaultAreas';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFaultAreas} entity.
 */
export class AssetMaintenanceFaultAreasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceFaultAreas<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFaultAreas` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFaultAreas` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceFaultAreas<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceFaultAreas<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFaultAreas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFaultAreas`.
   */
  create(
    entity: AssetMaintenanceFaultAreas<T>
  ): CreateRequestBuilder<AssetMaintenanceFaultAreas<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceFaultAreas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFaultAreas` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFaultAreas.dataAreaId}.
   * @param faultAreaId Key property. See {@link AssetMaintenanceFaultAreas.faultAreaId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFaultAreas` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    faultAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceFaultAreas<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceFaultAreas<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FaultAreaId: faultAreaId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFaultAreas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFaultAreas`.
   */
  update(
    entity: AssetMaintenanceFaultAreas<T>
  ): UpdateRequestBuilder<AssetMaintenanceFaultAreas<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceFaultAreas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFaultAreas`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFaultAreas.dataAreaId}.
   * @param faultAreaId Key property. See {@link AssetMaintenanceFaultAreas.faultAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFaultAreas`.
   */
  delete(
    dataAreaId: string,
    faultAreaId: string
  ): DeleteRequestBuilder<AssetMaintenanceFaultAreas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFaultAreas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFaultAreas` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFaultAreas<T>
  ): DeleteRequestBuilder<AssetMaintenanceFaultAreas<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    faultAreaId?: string
  ): DeleteRequestBuilder<AssetMaintenanceFaultAreas<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceFaultAreas<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceFaultAreas
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FaultAreaId: faultAreaId!
          }
    );
  }
}
