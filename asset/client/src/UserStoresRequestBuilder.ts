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
import { UserStores } from './UserStores';

/**
 * Request builder class for operations supported on the {@link UserStores} entity.
 */
export class UserStoresRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UserStores<T>, T> {
  /**
   * Returns a request builder for querying all `UserStores` entities.
   * @returns A request builder for creating requests to retrieve all `UserStores` entities.
   */
  getAll(): GetAllRequestBuilder<UserStores<T>, T> {
    return new GetAllRequestBuilder<UserStores<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `UserStores` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserStores`.
   */
  create(entity: UserStores<T>): CreateRequestBuilder<UserStores<T>, T> {
    return new CreateRequestBuilder<UserStores<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `UserStores` entity based on its keys.
   * @param dataAreaId Key property. See {@link UserStores.dataAreaId}.
   * @param storeNumber Key property. See {@link UserStores.storeNumber}.
   * @param user Key property. See {@link UserStores.user}.
   * @returns A request builder for creating requests to retrieve one `UserStores` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    user: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<UserStores<T>, T> {
    return new GetByKeyRequestBuilder<UserStores<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      StoreNumber: storeNumber,
      User: user
    });
  }

  /**
   * Returns a request builder for updating an entity of type `UserStores`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserStores`.
   */
  update(entity: UserStores<T>): UpdateRequestBuilder<UserStores<T>, T> {
    return new UpdateRequestBuilder<UserStores<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `UserStores`.
   * @param dataAreaId Key property. See {@link UserStores.dataAreaId}.
   * @param storeNumber Key property. See {@link UserStores.storeNumber}.
   * @param user Key property. See {@link UserStores.user}.
   * @returns A request builder for creating requests that delete an entity of type `UserStores`.
   */
  delete(
    dataAreaId: string,
    storeNumber: string,
    user: string
  ): DeleteRequestBuilder<UserStores<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UserStores`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserStores` by taking the entity as a parameter.
   */
  delete(entity: UserStores<T>): DeleteRequestBuilder<UserStores<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    storeNumber?: string,
    user?: string
  ): DeleteRequestBuilder<UserStores<T>, T> {
    return new DeleteRequestBuilder<UserStores<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof UserStores
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StoreNumber: storeNumber!,
            User: user!
          }
    );
  }
}
