/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { PostdatedChecks } from './PostdatedChecks';

/**
 * Request builder class for operations supported on the {@link PostdatedChecks} entity.
 */
export class PostdatedChecksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PostdatedChecks<T>, T> {
  /**
   * Returns a request builder for querying all `PostdatedChecks` entities.
   * @returns A request builder for creating requests to retrieve all `PostdatedChecks` entities.
   */
  getAll(): GetAllRequestBuilder<PostdatedChecks<T>, T> {
    return new GetAllRequestBuilder<PostdatedChecks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PostdatedChecks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PostdatedChecks`.
   */
  create(
    entity: PostdatedChecks<T>
  ): CreateRequestBuilder<PostdatedChecks<T>, T> {
    return new CreateRequestBuilder<PostdatedChecks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PostdatedChecks` entity based on its keys.
   * @param dataAreaId Key property. See {@link PostdatedChecks.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link PostdatedChecks.journalBatchNumber}.
   * @param lineNumber Key property. See {@link PostdatedChecks.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PostdatedChecks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PostdatedChecks<T>, T> {
    return new GetByKeyRequestBuilder<PostdatedChecks<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalBatchNumber: journalBatchNumber,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PostdatedChecks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PostdatedChecks`.
   */
  update(
    entity: PostdatedChecks<T>
  ): UpdateRequestBuilder<PostdatedChecks<T>, T> {
    return new UpdateRequestBuilder<PostdatedChecks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PostdatedChecks`.
   * @param dataAreaId Key property. See {@link PostdatedChecks.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link PostdatedChecks.journalBatchNumber}.
   * @param lineNumber Key property. See {@link PostdatedChecks.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PostdatedChecks`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PostdatedChecks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PostdatedChecks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PostdatedChecks` by taking the entity as a parameter.
   */
  delete(
    entity: PostdatedChecks<T>
  ): DeleteRequestBuilder<PostdatedChecks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PostdatedChecks<T>, T> {
    return new DeleteRequestBuilder<PostdatedChecks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PostdatedChecks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
