/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { PostingDefinitions } from './PostingDefinitions';

/**
 * Request builder class for operations supported on the {@link PostingDefinitions} entity.
 */
export class PostingDefinitionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PostingDefinitions<T>, T> {
  /**
   * Returns a request builder for querying all `PostingDefinitions` entities.
   * @returns A request builder for creating requests to retrieve all `PostingDefinitions` entities.
   */
  getAll(): GetAllRequestBuilder<PostingDefinitions<T>, T> {
    return new GetAllRequestBuilder<PostingDefinitions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PostingDefinitions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PostingDefinitions`.
   */
  create(
    entity: PostingDefinitions<T>
  ): CreateRequestBuilder<PostingDefinitions<T>, T> {
    return new CreateRequestBuilder<PostingDefinitions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PostingDefinitions` entity based on its keys.
   * @param dataAreaId Key property. See {@link PostingDefinitions.dataAreaId}.
   * @param postingDefinitionId Key property. See {@link PostingDefinitions.postingDefinitionId}.
   * @param validFrom Key property. See {@link PostingDefinitions.validFrom}.
   * @returns A request builder for creating requests to retrieve one `PostingDefinitions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    postingDefinitionId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PostingDefinitions<T>, T> {
    return new GetByKeyRequestBuilder<PostingDefinitions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PostingDefinitionId: postingDefinitionId,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PostingDefinitions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PostingDefinitions`.
   */
  update(
    entity: PostingDefinitions<T>
  ): UpdateRequestBuilder<PostingDefinitions<T>, T> {
    return new UpdateRequestBuilder<PostingDefinitions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PostingDefinitions`.
   * @param dataAreaId Key property. See {@link PostingDefinitions.dataAreaId}.
   * @param postingDefinitionId Key property. See {@link PostingDefinitions.postingDefinitionId}.
   * @param validFrom Key property. See {@link PostingDefinitions.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PostingDefinitions`.
   */
  delete(
    dataAreaId: string,
    postingDefinitionId: string,
    validFrom: Moment
  ): DeleteRequestBuilder<PostingDefinitions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PostingDefinitions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PostingDefinitions` by taking the entity as a parameter.
   */
  delete(
    entity: PostingDefinitions<T>
  ): DeleteRequestBuilder<PostingDefinitions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    postingDefinitionId?: string,
    validFrom?: Moment
  ): DeleteRequestBuilder<PostingDefinitions<T>, T> {
    return new DeleteRequestBuilder<PostingDefinitions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PostingDefinitions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PostingDefinitionId: postingDefinitionId!,
            ValidFrom: validFrom!
          }
    );
  }
}
