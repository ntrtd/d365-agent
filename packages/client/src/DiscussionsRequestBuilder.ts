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
import { Discussions } from './Discussions';

/**
 * Request builder class for operations supported on the {@link Discussions} entity.
 */
export class DiscussionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Discussions<T>, T> {
  /**
   * Returns a request builder for querying all `Discussions` entities.
   * @returns A request builder for creating requests to retrieve all `Discussions` entities.
   */
  getAll(): GetAllRequestBuilder<Discussions<T>, T> {
    return new GetAllRequestBuilder<Discussions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Discussions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Discussions`.
   */
  create(entity: Discussions<T>): CreateRequestBuilder<Discussions<T>, T> {
    return new CreateRequestBuilder<Discussions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Discussions` entity based on its keys.
   * @param discussion Key property. See {@link Discussions.discussion}.
   * @param personnelNumber Key property. See {@link Discussions.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `Discussions` entity based on its keys.
   */
  getByKey(
    discussion: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Discussions<T>, T> {
    return new GetByKeyRequestBuilder<Discussions<T>, T>(this.entityApi, {
      Discussion: discussion,
      PersonnelNumber: personnelNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Discussions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Discussions`.
   */
  update(entity: Discussions<T>): UpdateRequestBuilder<Discussions<T>, T> {
    return new UpdateRequestBuilder<Discussions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Discussions`.
   * @param discussion Key property. See {@link Discussions.discussion}.
   * @param personnelNumber Key property. See {@link Discussions.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `Discussions`.
   */
  delete(
    discussion: string,
    personnelNumber: string
  ): DeleteRequestBuilder<Discussions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Discussions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Discussions` by taking the entity as a parameter.
   */
  delete(entity: Discussions<T>): DeleteRequestBuilder<Discussions<T>, T>;
  delete(
    discussionOrEntity: any,
    personnelNumber?: string
  ): DeleteRequestBuilder<Discussions<T>, T> {
    return new DeleteRequestBuilder<Discussions<T>, T>(
      this.entityApi,
      discussionOrEntity instanceof Discussions
        ? discussionOrEntity
        : {
            Discussion: discussionOrEntity!,
            PersonnelNumber: personnelNumber!
          }
    );
  }
}
