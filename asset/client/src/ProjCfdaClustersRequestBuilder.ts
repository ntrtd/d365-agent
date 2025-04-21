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
import { ProjCfdaClusters } from './ProjCfdaClusters';

/**
 * Request builder class for operations supported on the {@link ProjCfdaClusters} entity.
 */
export class ProjCfdaClustersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjCfdaClusters<T>, T> {
  /**
   * Returns a request builder for querying all `ProjCfdaClusters` entities.
   * @returns A request builder for creating requests to retrieve all `ProjCfdaClusters` entities.
   */
  getAll(): GetAllRequestBuilder<ProjCfdaClusters<T>, T> {
    return new GetAllRequestBuilder<ProjCfdaClusters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjCfdaClusters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjCfdaClusters`.
   */
  create(
    entity: ProjCfdaClusters<T>
  ): CreateRequestBuilder<ProjCfdaClusters<T>, T> {
    return new CreateRequestBuilder<ProjCfdaClusters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjCfdaClusters` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjCfdaClusters.dataAreaId}.
   * @param clusterName Key property. See {@link ProjCfdaClusters.clusterName}.
   * @returns A request builder for creating requests to retrieve one `ProjCfdaClusters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    clusterName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjCfdaClusters<T>, T> {
    return new GetByKeyRequestBuilder<ProjCfdaClusters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ClusterName: clusterName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjCfdaClusters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjCfdaClusters`.
   */
  update(
    entity: ProjCfdaClusters<T>
  ): UpdateRequestBuilder<ProjCfdaClusters<T>, T> {
    return new UpdateRequestBuilder<ProjCfdaClusters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjCfdaClusters`.
   * @param dataAreaId Key property. See {@link ProjCfdaClusters.dataAreaId}.
   * @param clusterName Key property. See {@link ProjCfdaClusters.clusterName}.
   * @returns A request builder for creating requests that delete an entity of type `ProjCfdaClusters`.
   */
  delete(
    dataAreaId: string,
    clusterName: string
  ): DeleteRequestBuilder<ProjCfdaClusters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjCfdaClusters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjCfdaClusters` by taking the entity as a parameter.
   */
  delete(
    entity: ProjCfdaClusters<T>
  ): DeleteRequestBuilder<ProjCfdaClusters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    clusterName?: string
  ): DeleteRequestBuilder<ProjCfdaClusters<T>, T> {
    return new DeleteRequestBuilder<ProjCfdaClusters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjCfdaClusters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ClusterName: clusterName!
          }
    );
  }
}
