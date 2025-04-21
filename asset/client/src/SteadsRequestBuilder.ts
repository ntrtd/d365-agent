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
import { Steads } from './Steads';

/**
 * Request builder class for operations supported on the {@link Steads} entity.
 */
export class SteadsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Steads<T>, T> {
  /**
   * Returns a request builder for querying all `Steads` entities.
   * @returns A request builder for creating requests to retrieve all `Steads` entities.
   */
  getAll(): GetAllRequestBuilder<Steads<T>, T> {
    return new GetAllRequestBuilder<Steads<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Steads` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Steads`.
   */
  create(entity: Steads<T>): CreateRequestBuilder<Steads<T>, T> {
    return new CreateRequestBuilder<Steads<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Steads` entity based on its keys.
   * @param dataAreaId Key property. See {@link Steads.dataAreaId}.
   * @param steadId Key property. See {@link Steads.steadId}.
   * @returns A request builder for creating requests to retrieve one `Steads` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    steadId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Steads<T>, T> {
    return new GetByKeyRequestBuilder<Steads<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SteadId: steadId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Steads`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Steads`.
   */
  update(entity: Steads<T>): UpdateRequestBuilder<Steads<T>, T> {
    return new UpdateRequestBuilder<Steads<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Steads`.
   * @param dataAreaId Key property. See {@link Steads.dataAreaId}.
   * @param steadId Key property. See {@link Steads.steadId}.
   * @returns A request builder for creating requests that delete an entity of type `Steads`.
   */
  delete(
    dataAreaId: string,
    steadId: string
  ): DeleteRequestBuilder<Steads<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Steads`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Steads` by taking the entity as a parameter.
   */
  delete(entity: Steads<T>): DeleteRequestBuilder<Steads<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    steadId?: string
  ): DeleteRequestBuilder<Steads<T>, T> {
    return new DeleteRequestBuilder<Steads<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Steads
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SteadId: steadId!
          }
    );
  }
}
