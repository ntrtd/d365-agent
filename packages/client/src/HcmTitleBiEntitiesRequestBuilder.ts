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
import { HcmTitleBiEntities } from './HcmTitleBiEntities';

/**
 * Request builder class for operations supported on the {@link HcmTitleBiEntities} entity.
 */
export class HcmTitleBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HcmTitleBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `HcmTitleBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `HcmTitleBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<HcmTitleBiEntities<T>, T> {
    return new GetAllRequestBuilder<HcmTitleBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `HcmTitleBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HcmTitleBiEntities`.
   */
  create(
    entity: HcmTitleBiEntities<T>
  ): CreateRequestBuilder<HcmTitleBiEntities<T>, T> {
    return new CreateRequestBuilder<HcmTitleBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HcmTitleBiEntities` entity based on its keys.
   * @param titleId Key property. See {@link HcmTitleBiEntities.titleId}.
   * @returns A request builder for creating requests to retrieve one `HcmTitleBiEntities` entity based on its keys.
   */
  getByKey(
    titleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<HcmTitleBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<HcmTitleBiEntities<T>, T>(
      this.entityApi,
      { TitleId: titleId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `HcmTitleBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HcmTitleBiEntities`.
   */
  update(
    entity: HcmTitleBiEntities<T>
  ): UpdateRequestBuilder<HcmTitleBiEntities<T>, T> {
    return new UpdateRequestBuilder<HcmTitleBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HcmTitleBiEntities`.
   * @param titleId Key property. See {@link HcmTitleBiEntities.titleId}.
   * @returns A request builder for creating requests that delete an entity of type `HcmTitleBiEntities`.
   */
  delete(titleId: string): DeleteRequestBuilder<HcmTitleBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HcmTitleBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HcmTitleBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: HcmTitleBiEntities<T>
  ): DeleteRequestBuilder<HcmTitleBiEntities<T>, T>;
  delete(titleIdOrEntity: any): DeleteRequestBuilder<HcmTitleBiEntities<T>, T> {
    return new DeleteRequestBuilder<HcmTitleBiEntities<T>, T>(
      this.entityApi,
      titleIdOrEntity instanceof HcmTitleBiEntities
        ? titleIdOrEntity
        : { TitleId: titleIdOrEntity! }
    );
  }
}
