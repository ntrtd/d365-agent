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
import { ExpMobileMasterData } from './ExpMobileMasterData';

/**
 * Request builder class for operations supported on the {@link ExpMobileMasterData} entity.
 */
export class ExpMobileMasterDataRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobileMasterData<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobileMasterData` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobileMasterData` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobileMasterData<T>, T> {
    return new GetAllRequestBuilder<ExpMobileMasterData<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpMobileMasterData` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobileMasterData`.
   */
  create(
    entity: ExpMobileMasterData<T>
  ): CreateRequestBuilder<ExpMobileMasterData<T>, T> {
    return new CreateRequestBuilder<ExpMobileMasterData<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpMobileMasterData` entity based on its keys.
   * @param userId Key property. See {@link ExpMobileMasterData.userId}.
   * @returns A request builder for creating requests to retrieve one `ExpMobileMasterData` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpMobileMasterData<T>, T> {
    return new GetByKeyRequestBuilder<ExpMobileMasterData<T>, T>(
      this.entityApi,
      { UserId: userId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobileMasterData`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobileMasterData`.
   */
  update(
    entity: ExpMobileMasterData<T>
  ): UpdateRequestBuilder<ExpMobileMasterData<T>, T> {
    return new UpdateRequestBuilder<ExpMobileMasterData<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobileMasterData`.
   * @param userId Key property. See {@link ExpMobileMasterData.userId}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileMasterData`.
   */
  delete(userId: string): DeleteRequestBuilder<ExpMobileMasterData<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobileMasterData`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileMasterData` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobileMasterData<T>
  ): DeleteRequestBuilder<ExpMobileMasterData<T>, T>;
  delete(userIdOrEntity: any): DeleteRequestBuilder<ExpMobileMasterData<T>, T> {
    return new DeleteRequestBuilder<ExpMobileMasterData<T>, T>(
      this.entityApi,
      userIdOrEntity instanceof ExpMobileMasterData
        ? userIdOrEntity
        : { UserId: userIdOrEntity! }
    );
  }
}
