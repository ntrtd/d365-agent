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
import { PostingProfileLines } from './PostingProfileLines';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link PostingProfileLines} entity.
 */
export class PostingProfileLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PostingProfileLines<T>, T> {
  /**
   * Returns a request builder for querying all `PostingProfileLines` entities.
   * @returns A request builder for creating requests to retrieve all `PostingProfileLines` entities.
   */
  getAll(): GetAllRequestBuilder<PostingProfileLines<T>, T> {
    return new GetAllRequestBuilder<PostingProfileLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PostingProfileLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PostingProfileLines`.
   */
  create(
    entity: PostingProfileLines<T>
  ): CreateRequestBuilder<PostingProfileLines<T>, T> {
    return new CreateRequestBuilder<PostingProfileLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PostingProfileLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link PostingProfileLines.dataAreaId}.
   * @param postingProfile Key property. See {@link PostingProfileLines.postingProfile}.
   * @param accountCode Key property. See {@link PostingProfileLines.accountCode}.
   * @param accountGroupNumber Key property. See {@link PostingProfileLines.accountGroupNumber}.
   * @returns A request builder for creating requests to retrieve one `PostingProfileLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    postingProfile: DeserializedType<T, 'Edm.String'>,
    accountCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    accountGroupNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PostingProfileLines<T>, T> {
    return new GetByKeyRequestBuilder<PostingProfileLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PostingProfile: postingProfile,
        AccountCode: accountCode,
        AccountGroupNumber: accountGroupNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PostingProfileLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PostingProfileLines`.
   */
  update(
    entity: PostingProfileLines<T>
  ): UpdateRequestBuilder<PostingProfileLines<T>, T> {
    return new UpdateRequestBuilder<PostingProfileLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PostingProfileLines`.
   * @param dataAreaId Key property. See {@link PostingProfileLines.dataAreaId}.
   * @param postingProfile Key property. See {@link PostingProfileLines.postingProfile}.
   * @param accountCode Key property. See {@link PostingProfileLines.accountCode}.
   * @param accountGroupNumber Key property. See {@link PostingProfileLines.accountGroupNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PostingProfileLines`.
   */
  delete(
    dataAreaId: string,
    postingProfile: string,
    accountCode: TableGroupAll,
    accountGroupNumber: string
  ): DeleteRequestBuilder<PostingProfileLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PostingProfileLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PostingProfileLines` by taking the entity as a parameter.
   */
  delete(
    entity: PostingProfileLines<T>
  ): DeleteRequestBuilder<PostingProfileLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    postingProfile?: string,
    accountCode?: TableGroupAll,
    accountGroupNumber?: string
  ): DeleteRequestBuilder<PostingProfileLines<T>, T> {
    return new DeleteRequestBuilder<PostingProfileLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PostingProfileLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PostingProfile: postingProfile!,
            AccountCode: accountCode!,
            AccountGroupNumber: accountGroupNumber!
          }
    );
  }
}
