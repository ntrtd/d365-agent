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
import { FixedAssetBooksV2 } from './FixedAssetBooksV2';

/**
 * Request builder class for operations supported on the {@link FixedAssetBooksV2} entity.
 */
export class FixedAssetBooksV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FixedAssetBooksV2<T>, T> {
  /**
   * Returns a request builder for querying all `FixedAssetBooksV2` entities.
   * @returns A request builder for creating requests to retrieve all `FixedAssetBooksV2` entities.
   */
  getAll(): GetAllRequestBuilder<FixedAssetBooksV2<T>, T> {
    return new GetAllRequestBuilder<FixedAssetBooksV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FixedAssetBooksV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FixedAssetBooksV2`.
   */
  create(
    entity: FixedAssetBooksV2<T>
  ): CreateRequestBuilder<FixedAssetBooksV2<T>, T> {
    return new CreateRequestBuilder<FixedAssetBooksV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FixedAssetBooksV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link FixedAssetBooksV2.dataAreaId}.
   * @param fixedAssetNumber Key property. See {@link FixedAssetBooksV2.fixedAssetNumber}.
   * @param bookId Key property. See {@link FixedAssetBooksV2.bookId}.
   * @returns A request builder for creating requests to retrieve one `FixedAssetBooksV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fixedAssetNumber: DeserializedType<T, 'Edm.String'>,
    bookId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FixedAssetBooksV2<T>, T> {
    return new GetByKeyRequestBuilder<FixedAssetBooksV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FixedAssetNumber: fixedAssetNumber,
      BookId: bookId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FixedAssetBooksV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FixedAssetBooksV2`.
   */
  update(
    entity: FixedAssetBooksV2<T>
  ): UpdateRequestBuilder<FixedAssetBooksV2<T>, T> {
    return new UpdateRequestBuilder<FixedAssetBooksV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FixedAssetBooksV2`.
   * @param dataAreaId Key property. See {@link FixedAssetBooksV2.dataAreaId}.
   * @param fixedAssetNumber Key property. See {@link FixedAssetBooksV2.fixedAssetNumber}.
   * @param bookId Key property. See {@link FixedAssetBooksV2.bookId}.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssetBooksV2`.
   */
  delete(
    dataAreaId: string,
    fixedAssetNumber: string,
    bookId: string
  ): DeleteRequestBuilder<FixedAssetBooksV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FixedAssetBooksV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssetBooksV2` by taking the entity as a parameter.
   */
  delete(
    entity: FixedAssetBooksV2<T>
  ): DeleteRequestBuilder<FixedAssetBooksV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fixedAssetNumber?: string,
    bookId?: string
  ): DeleteRequestBuilder<FixedAssetBooksV2<T>, T> {
    return new DeleteRequestBuilder<FixedAssetBooksV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FixedAssetBooksV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FixedAssetNumber: fixedAssetNumber!,
            BookId: bookId!
          }
    );
  }
}
