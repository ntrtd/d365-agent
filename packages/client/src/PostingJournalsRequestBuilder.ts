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
import { PostingJournals } from './PostingJournals';

/**
 * Request builder class for operations supported on the {@link PostingJournals} entity.
 */
export class PostingJournalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PostingJournals<T>, T> {
  /**
   * Returns a request builder for querying all `PostingJournals` entities.
   * @returns A request builder for creating requests to retrieve all `PostingJournals` entities.
   */
  getAll(): GetAllRequestBuilder<PostingJournals<T>, T> {
    return new GetAllRequestBuilder<PostingJournals<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PostingJournals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PostingJournals`.
   */
  create(
    entity: PostingJournals<T>
  ): CreateRequestBuilder<PostingJournals<T>, T> {
    return new CreateRequestBuilder<PostingJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PostingJournals` entity based on its keys.
   * @param dataAreaId Key property. See {@link PostingJournals.dataAreaId}.
   * @param journal Key property. See {@link PostingJournals.journal}.
   * @param numberSequenceCode Key property. See {@link PostingJournals.numberSequenceCode}.
   * @returns A request builder for creating requests to retrieve one `PostingJournals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journal: DeserializedType<T, 'Edm.String'>,
    numberSequenceCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PostingJournals<T>, T> {
    return new GetByKeyRequestBuilder<PostingJournals<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Journal: journal,
      NumberSequenceCode: numberSequenceCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PostingJournals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PostingJournals`.
   */
  update(
    entity: PostingJournals<T>
  ): UpdateRequestBuilder<PostingJournals<T>, T> {
    return new UpdateRequestBuilder<PostingJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PostingJournals`.
   * @param dataAreaId Key property. See {@link PostingJournals.dataAreaId}.
   * @param journal Key property. See {@link PostingJournals.journal}.
   * @param numberSequenceCode Key property. See {@link PostingJournals.numberSequenceCode}.
   * @returns A request builder for creating requests that delete an entity of type `PostingJournals`.
   */
  delete(
    dataAreaId: string,
    journal: string,
    numberSequenceCode: string
  ): DeleteRequestBuilder<PostingJournals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PostingJournals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PostingJournals` by taking the entity as a parameter.
   */
  delete(
    entity: PostingJournals<T>
  ): DeleteRequestBuilder<PostingJournals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journal?: string,
    numberSequenceCode?: string
  ): DeleteRequestBuilder<PostingJournals<T>, T> {
    return new DeleteRequestBuilder<PostingJournals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PostingJournals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Journal: journal!,
            NumberSequenceCode: numberSequenceCode!
          }
    );
  }
}
