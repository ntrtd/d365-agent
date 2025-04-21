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
import { MainAccountCategoryBiEntities } from './MainAccountCategoryBiEntities';

/**
 * Request builder class for operations supported on the {@link MainAccountCategoryBiEntities} entity.
 */
export class MainAccountCategoryBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MainAccountCategoryBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `MainAccountCategoryBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `MainAccountCategoryBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<MainAccountCategoryBiEntities<T>, T> {
    return new GetAllRequestBuilder<MainAccountCategoryBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MainAccountCategoryBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MainAccountCategoryBiEntities`.
   */
  create(
    entity: MainAccountCategoryBiEntities<T>
  ): CreateRequestBuilder<MainAccountCategoryBiEntities<T>, T> {
    return new CreateRequestBuilder<MainAccountCategoryBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MainAccountCategoryBiEntities` entity based on its keys.
   * @param accountCategoryRef Key property. See {@link MainAccountCategoryBiEntities.accountCategoryRef}.
   * @returns A request builder for creating requests to retrieve one `MainAccountCategoryBiEntities` entity based on its keys.
   */
  getByKey(
    accountCategoryRef: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<MainAccountCategoryBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<MainAccountCategoryBiEntities<T>, T>(
      this.entityApi,
      { AccountCategoryRef: accountCategoryRef }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MainAccountCategoryBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MainAccountCategoryBiEntities`.
   */
  update(
    entity: MainAccountCategoryBiEntities<T>
  ): UpdateRequestBuilder<MainAccountCategoryBiEntities<T>, T> {
    return new UpdateRequestBuilder<MainAccountCategoryBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MainAccountCategoryBiEntities`.
   * @param accountCategoryRef Key property. See {@link MainAccountCategoryBiEntities.accountCategoryRef}.
   * @returns A request builder for creating requests that delete an entity of type `MainAccountCategoryBiEntities`.
   */
  delete(
    accountCategoryRef: number
  ): DeleteRequestBuilder<MainAccountCategoryBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MainAccountCategoryBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MainAccountCategoryBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: MainAccountCategoryBiEntities<T>
  ): DeleteRequestBuilder<MainAccountCategoryBiEntities<T>, T>;
  delete(
    accountCategoryRefOrEntity: any
  ): DeleteRequestBuilder<MainAccountCategoryBiEntities<T>, T> {
    return new DeleteRequestBuilder<MainAccountCategoryBiEntities<T>, T>(
      this.entityApi,
      accountCategoryRefOrEntity instanceof MainAccountCategoryBiEntities
        ? accountCategoryRefOrEntity
        : { AccountCategoryRef: accountCategoryRefOrEntity! }
    );
  }
}
