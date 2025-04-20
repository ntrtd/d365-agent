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
import { HrTeamsAppPendingTimeoffs } from './HrTeamsAppPendingTimeoffs';

/**
 * Request builder class for operations supported on the {@link HrTeamsAppPendingTimeoffs} entity.
 */
export class HrTeamsAppPendingTimeoffsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HrTeamsAppPendingTimeoffs<T>, T> {
  /**
   * Returns a request builder for querying all `HrTeamsAppPendingTimeoffs` entities.
   * @returns A request builder for creating requests to retrieve all `HrTeamsAppPendingTimeoffs` entities.
   */
  getAll(): GetAllRequestBuilder<HrTeamsAppPendingTimeoffs<T>, T> {
    return new GetAllRequestBuilder<HrTeamsAppPendingTimeoffs<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `HrTeamsAppPendingTimeoffs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HrTeamsAppPendingTimeoffs`.
   */
  create(
    entity: HrTeamsAppPendingTimeoffs<T>
  ): CreateRequestBuilder<HrTeamsAppPendingTimeoffs<T>, T> {
    return new CreateRequestBuilder<HrTeamsAppPendingTimeoffs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HrTeamsAppPendingTimeoffs` entity based on its keys.
   * @param id Key property. See {@link HrTeamsAppPendingTimeoffs.id}.
   * @returns A request builder for creating requests to retrieve one `HrTeamsAppPendingTimeoffs` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<HrTeamsAppPendingTimeoffs<T>, T> {
    return new GetByKeyRequestBuilder<HrTeamsAppPendingTimeoffs<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `HrTeamsAppPendingTimeoffs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HrTeamsAppPendingTimeoffs`.
   */
  update(
    entity: HrTeamsAppPendingTimeoffs<T>
  ): UpdateRequestBuilder<HrTeamsAppPendingTimeoffs<T>, T> {
    return new UpdateRequestBuilder<HrTeamsAppPendingTimeoffs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HrTeamsAppPendingTimeoffs`.
   * @param id Key property. See {@link HrTeamsAppPendingTimeoffs.id}.
   * @returns A request builder for creating requests that delete an entity of type `HrTeamsAppPendingTimeoffs`.
   */
  delete(id: string): DeleteRequestBuilder<HrTeamsAppPendingTimeoffs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HrTeamsAppPendingTimeoffs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HrTeamsAppPendingTimeoffs` by taking the entity as a parameter.
   */
  delete(
    entity: HrTeamsAppPendingTimeoffs<T>
  ): DeleteRequestBuilder<HrTeamsAppPendingTimeoffs<T>, T>;
  delete(
    idOrEntity: any
  ): DeleteRequestBuilder<HrTeamsAppPendingTimeoffs<T>, T> {
    return new DeleteRequestBuilder<HrTeamsAppPendingTimeoffs<T>, T>(
      this.entityApi,
      idOrEntity instanceof HrTeamsAppPendingTimeoffs
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
