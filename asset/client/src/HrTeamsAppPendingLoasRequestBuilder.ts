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
import { HrTeamsAppPendingLoas } from './HrTeamsAppPendingLoas';

/**
 * Request builder class for operations supported on the {@link HrTeamsAppPendingLoas} entity.
 */
export class HrTeamsAppPendingLoasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HrTeamsAppPendingLoas<T>, T> {
  /**
   * Returns a request builder for querying all `HrTeamsAppPendingLoas` entities.
   * @returns A request builder for creating requests to retrieve all `HrTeamsAppPendingLoas` entities.
   */
  getAll(): GetAllRequestBuilder<HrTeamsAppPendingLoas<T>, T> {
    return new GetAllRequestBuilder<HrTeamsAppPendingLoas<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `HrTeamsAppPendingLoas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HrTeamsAppPendingLoas`.
   */
  create(
    entity: HrTeamsAppPendingLoas<T>
  ): CreateRequestBuilder<HrTeamsAppPendingLoas<T>, T> {
    return new CreateRequestBuilder<HrTeamsAppPendingLoas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HrTeamsAppPendingLoas` entity based on its keys.
   * @param id Key property. See {@link HrTeamsAppPendingLoas.id}.
   * @returns A request builder for creating requests to retrieve one `HrTeamsAppPendingLoas` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<HrTeamsAppPendingLoas<T>, T> {
    return new GetByKeyRequestBuilder<HrTeamsAppPendingLoas<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `HrTeamsAppPendingLoas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HrTeamsAppPendingLoas`.
   */
  update(
    entity: HrTeamsAppPendingLoas<T>
  ): UpdateRequestBuilder<HrTeamsAppPendingLoas<T>, T> {
    return new UpdateRequestBuilder<HrTeamsAppPendingLoas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HrTeamsAppPendingLoas`.
   * @param id Key property. See {@link HrTeamsAppPendingLoas.id}.
   * @returns A request builder for creating requests that delete an entity of type `HrTeamsAppPendingLoas`.
   */
  delete(id: string): DeleteRequestBuilder<HrTeamsAppPendingLoas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HrTeamsAppPendingLoas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HrTeamsAppPendingLoas` by taking the entity as a parameter.
   */
  delete(
    entity: HrTeamsAppPendingLoas<T>
  ): DeleteRequestBuilder<HrTeamsAppPendingLoas<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<HrTeamsAppPendingLoas<T>, T> {
    return new DeleteRequestBuilder<HrTeamsAppPendingLoas<T>, T>(
      this.entityApi,
      idOrEntity instanceof HrTeamsAppPendingLoas
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
