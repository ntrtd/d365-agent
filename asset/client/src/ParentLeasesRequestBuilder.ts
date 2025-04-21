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
import { ParentLeases } from './ParentLeases';

/**
 * Request builder class for operations supported on the {@link ParentLeases} entity.
 */
export class ParentLeasesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ParentLeases<T>, T> {
  /**
   * Returns a request builder for querying all `ParentLeases` entities.
   * @returns A request builder for creating requests to retrieve all `ParentLeases` entities.
   */
  getAll(): GetAllRequestBuilder<ParentLeases<T>, T> {
    return new GetAllRequestBuilder<ParentLeases<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ParentLeases` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ParentLeases`.
   */
  create(entity: ParentLeases<T>): CreateRequestBuilder<ParentLeases<T>, T> {
    return new CreateRequestBuilder<ParentLeases<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ParentLeases` entity based on its keys.
   * @param dataAreaId Key property. See {@link ParentLeases.dataAreaId}.
   * @param leaseId Key property. See {@link ParentLeases.leaseId}.
   * @returns A request builder for creating requests to retrieve one `ParentLeases` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ParentLeases<T>, T> {
    return new GetByKeyRequestBuilder<ParentLeases<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LeaseId: leaseId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ParentLeases`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ParentLeases`.
   */
  update(entity: ParentLeases<T>): UpdateRequestBuilder<ParentLeases<T>, T> {
    return new UpdateRequestBuilder<ParentLeases<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ParentLeases`.
   * @param dataAreaId Key property. See {@link ParentLeases.dataAreaId}.
   * @param leaseId Key property. See {@link ParentLeases.leaseId}.
   * @returns A request builder for creating requests that delete an entity of type `ParentLeases`.
   */
  delete(
    dataAreaId: string,
    leaseId: string
  ): DeleteRequestBuilder<ParentLeases<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ParentLeases`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ParentLeases` by taking the entity as a parameter.
   */
  delete(entity: ParentLeases<T>): DeleteRequestBuilder<ParentLeases<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaseId?: string
  ): DeleteRequestBuilder<ParentLeases<T>, T> {
    return new DeleteRequestBuilder<ParentLeases<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ParentLeases
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaseId: leaseId!
          }
    );
  }
}
