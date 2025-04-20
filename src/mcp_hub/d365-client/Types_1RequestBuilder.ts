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
import { Types_1 } from './Types_1';

/**
 * Request builder class for operations supported on the {@link Types_1} entity.
 */
export class Types_1RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Types_1<T>, T> {
  /**
   * Returns a request builder for querying all `Types_1` entities.
   * @returns A request builder for creating requests to retrieve all `Types_1` entities.
   */
  getAll(): GetAllRequestBuilder<Types_1<T>, T> {
    return new GetAllRequestBuilder<Types_1<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Types_1` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Types_1`.
   */
  create(entity: Types_1<T>): CreateRequestBuilder<Types_1<T>, T> {
    return new CreateRequestBuilder<Types_1<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Types_1` entity based on its keys.
   * @param dataAreaId Key property. See {@link Types_1.dataAreaId}.
   * @param flTypeId Key property. See {@link Types_1.flTypeId}.
   * @returns A request builder for creating requests to retrieve one `Types_1` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    flTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Types_1<T>, T> {
    return new GetByKeyRequestBuilder<Types_1<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FlTypeId: flTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Types_1`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Types_1`.
   */
  update(entity: Types_1<T>): UpdateRequestBuilder<Types_1<T>, T> {
    return new UpdateRequestBuilder<Types_1<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Types_1`.
   * @param dataAreaId Key property. See {@link Types_1.dataAreaId}.
   * @param flTypeId Key property. See {@link Types_1.flTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `Types_1`.
   */
  delete(
    dataAreaId: string,
    flTypeId: string
  ): DeleteRequestBuilder<Types_1<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Types_1`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Types_1` by taking the entity as a parameter.
   */
  delete(entity: Types_1<T>): DeleteRequestBuilder<Types_1<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    flTypeId?: string
  ): DeleteRequestBuilder<Types_1<T>, T> {
    return new DeleteRequestBuilder<Types_1<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Types_1
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FlTypeId: flTypeId!
          }
    );
  }
}
