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
import { VeteranStatuses } from './VeteranStatuses';

/**
 * Request builder class for operations supported on the {@link VeteranStatuses} entity.
 */
export class VeteranStatusesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VeteranStatuses<T>, T> {
  /**
   * Returns a request builder for querying all `VeteranStatuses` entities.
   * @returns A request builder for creating requests to retrieve all `VeteranStatuses` entities.
   */
  getAll(): GetAllRequestBuilder<VeteranStatuses<T>, T> {
    return new GetAllRequestBuilder<VeteranStatuses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VeteranStatuses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VeteranStatuses`.
   */
  create(
    entity: VeteranStatuses<T>
  ): CreateRequestBuilder<VeteranStatuses<T>, T> {
    return new CreateRequestBuilder<VeteranStatuses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VeteranStatuses` entity based on its keys.
   * @param veteranStatusId Key property. See {@link VeteranStatuses.veteranStatusId}.
   * @returns A request builder for creating requests to retrieve one `VeteranStatuses` entity based on its keys.
   */
  getByKey(
    veteranStatusId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VeteranStatuses<T>, T> {
    return new GetByKeyRequestBuilder<VeteranStatuses<T>, T>(this.entityApi, {
      VeteranStatusId: veteranStatusId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VeteranStatuses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VeteranStatuses`.
   */
  update(
    entity: VeteranStatuses<T>
  ): UpdateRequestBuilder<VeteranStatuses<T>, T> {
    return new UpdateRequestBuilder<VeteranStatuses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VeteranStatuses`.
   * @param veteranStatusId Key property. See {@link VeteranStatuses.veteranStatusId}.
   * @returns A request builder for creating requests that delete an entity of type `VeteranStatuses`.
   */
  delete(veteranStatusId: string): DeleteRequestBuilder<VeteranStatuses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VeteranStatuses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VeteranStatuses` by taking the entity as a parameter.
   */
  delete(
    entity: VeteranStatuses<T>
  ): DeleteRequestBuilder<VeteranStatuses<T>, T>;
  delete(
    veteranStatusIdOrEntity: any
  ): DeleteRequestBuilder<VeteranStatuses<T>, T> {
    return new DeleteRequestBuilder<VeteranStatuses<T>, T>(
      this.entityApi,
      veteranStatusIdOrEntity instanceof VeteranStatuses
        ? veteranStatusIdOrEntity
        : { VeteranStatusId: veteranStatusIdOrEntity! }
    );
  }
}
