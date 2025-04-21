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
import { EstateStatus } from './EstateStatus';

/**
 * Request builder class for operations supported on the {@link EstateStatus} entity.
 */
export class EstateStatusRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EstateStatus<T>, T> {
  /**
   * Returns a request builder for querying all `EstateStatus` entities.
   * @returns A request builder for creating requests to retrieve all `EstateStatus` entities.
   */
  getAll(): GetAllRequestBuilder<EstateStatus<T>, T> {
    return new GetAllRequestBuilder<EstateStatus<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EstateStatus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EstateStatus`.
   */
  create(entity: EstateStatus<T>): CreateRequestBuilder<EstateStatus<T>, T> {
    return new CreateRequestBuilder<EstateStatus<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EstateStatus` entity based on its keys.
   * @param dataAreaId Key property. See {@link EstateStatus.dataAreaId}.
   * @param estStatId Key property. See {@link EstateStatus.estStatId}.
   * @returns A request builder for creating requests to retrieve one `EstateStatus` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    estStatId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EstateStatus<T>, T> {
    return new GetByKeyRequestBuilder<EstateStatus<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      EstStatId: estStatId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EstateStatus`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EstateStatus`.
   */
  update(entity: EstateStatus<T>): UpdateRequestBuilder<EstateStatus<T>, T> {
    return new UpdateRequestBuilder<EstateStatus<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EstateStatus`.
   * @param dataAreaId Key property. See {@link EstateStatus.dataAreaId}.
   * @param estStatId Key property. See {@link EstateStatus.estStatId}.
   * @returns A request builder for creating requests that delete an entity of type `EstateStatus`.
   */
  delete(
    dataAreaId: string,
    estStatId: string
  ): DeleteRequestBuilder<EstateStatus<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EstateStatus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EstateStatus` by taking the entity as a parameter.
   */
  delete(entity: EstateStatus<T>): DeleteRequestBuilder<EstateStatus<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    estStatId?: string
  ): DeleteRequestBuilder<EstateStatus<T>, T> {
    return new DeleteRequestBuilder<EstateStatus<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EstateStatus
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EstStatId: estStatId!
          }
    );
  }
}
