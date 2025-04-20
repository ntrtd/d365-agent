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
import { SequenceGroups } from './SequenceGroups';

/**
 * Request builder class for operations supported on the {@link SequenceGroups} entity.
 */
export class SequenceGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SequenceGroups<T>, T> {
  /**
   * Returns a request builder for querying all `SequenceGroups` entities.
   * @returns A request builder for creating requests to retrieve all `SequenceGroups` entities.
   */
  getAll(): GetAllRequestBuilder<SequenceGroups<T>, T> {
    return new GetAllRequestBuilder<SequenceGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SequenceGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SequenceGroups`.
   */
  create(
    entity: SequenceGroups<T>
  ): CreateRequestBuilder<SequenceGroups<T>, T> {
    return new CreateRequestBuilder<SequenceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SequenceGroups` entity based on its keys.
   * @param numberSequenceGroup Key property. See {@link SequenceGroups.numberSequenceGroup}.
   * @returns A request builder for creating requests to retrieve one `SequenceGroups` entity based on its keys.
   */
  getByKey(
    numberSequenceGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SequenceGroups<T>, T> {
    return new GetByKeyRequestBuilder<SequenceGroups<T>, T>(this.entityApi, {
      NumberSequenceGroup: numberSequenceGroup
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SequenceGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SequenceGroups`.
   */
  update(
    entity: SequenceGroups<T>
  ): UpdateRequestBuilder<SequenceGroups<T>, T> {
    return new UpdateRequestBuilder<SequenceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SequenceGroups`.
   * @param numberSequenceGroup Key property. See {@link SequenceGroups.numberSequenceGroup}.
   * @returns A request builder for creating requests that delete an entity of type `SequenceGroups`.
   */
  delete(
    numberSequenceGroup: string
  ): DeleteRequestBuilder<SequenceGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SequenceGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SequenceGroups` by taking the entity as a parameter.
   */
  delete(entity: SequenceGroups<T>): DeleteRequestBuilder<SequenceGroups<T>, T>;
  delete(
    numberSequenceGroupOrEntity: any
  ): DeleteRequestBuilder<SequenceGroups<T>, T> {
    return new DeleteRequestBuilder<SequenceGroups<T>, T>(
      this.entityApi,
      numberSequenceGroupOrEntity instanceof SequenceGroups
        ? numberSequenceGroupOrEntity
        : { NumberSequenceGroup: numberSequenceGroupOrEntity! }
    );
  }
}
