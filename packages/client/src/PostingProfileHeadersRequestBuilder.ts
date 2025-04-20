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
import { PostingProfileHeaders } from './PostingProfileHeaders';

/**
 * Request builder class for operations supported on the {@link PostingProfileHeaders} entity.
 */
export class PostingProfileHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PostingProfileHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `PostingProfileHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `PostingProfileHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<PostingProfileHeaders<T>, T> {
    return new GetAllRequestBuilder<PostingProfileHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PostingProfileHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PostingProfileHeaders`.
   */
  create(
    entity: PostingProfileHeaders<T>
  ): CreateRequestBuilder<PostingProfileHeaders<T>, T> {
    return new CreateRequestBuilder<PostingProfileHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PostingProfileHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link PostingProfileHeaders.dataAreaId}.
   * @param postingProfile Key property. See {@link PostingProfileHeaders.postingProfile}.
   * @returns A request builder for creating requests to retrieve one `PostingProfileHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    postingProfile: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PostingProfileHeaders<T>, T> {
    return new GetByKeyRequestBuilder<PostingProfileHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PostingProfile: postingProfile
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PostingProfileHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PostingProfileHeaders`.
   */
  update(
    entity: PostingProfileHeaders<T>
  ): UpdateRequestBuilder<PostingProfileHeaders<T>, T> {
    return new UpdateRequestBuilder<PostingProfileHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PostingProfileHeaders`.
   * @param dataAreaId Key property. See {@link PostingProfileHeaders.dataAreaId}.
   * @param postingProfile Key property. See {@link PostingProfileHeaders.postingProfile}.
   * @returns A request builder for creating requests that delete an entity of type `PostingProfileHeaders`.
   */
  delete(
    dataAreaId: string,
    postingProfile: string
  ): DeleteRequestBuilder<PostingProfileHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PostingProfileHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PostingProfileHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: PostingProfileHeaders<T>
  ): DeleteRequestBuilder<PostingProfileHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    postingProfile?: string
  ): DeleteRequestBuilder<PostingProfileHeaders<T>, T> {
    return new DeleteRequestBuilder<PostingProfileHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PostingProfileHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PostingProfile: postingProfile!
          }
    );
  }
}
