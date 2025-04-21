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
import { ComplimentaryClosings } from './ComplimentaryClosings';

/**
 * Request builder class for operations supported on the {@link ComplimentaryClosings} entity.
 */
export class ComplimentaryClosingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ComplimentaryClosings<T>, T> {
  /**
   * Returns a request builder for querying all `ComplimentaryClosings` entities.
   * @returns A request builder for creating requests to retrieve all `ComplimentaryClosings` entities.
   */
  getAll(): GetAllRequestBuilder<ComplimentaryClosings<T>, T> {
    return new GetAllRequestBuilder<ComplimentaryClosings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ComplimentaryClosings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ComplimentaryClosings`.
   */
  create(
    entity: ComplimentaryClosings<T>
  ): CreateRequestBuilder<ComplimentaryClosings<T>, T> {
    return new CreateRequestBuilder<ComplimentaryClosings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ComplimentaryClosings` entity based on its keys.
   * @param dataAreaId Key property. See {@link ComplimentaryClosings.dataAreaId}.
   * @param closingPhrase Key property. See {@link ComplimentaryClosings.closingPhrase}.
   * @returns A request builder for creating requests to retrieve one `ComplimentaryClosings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    closingPhrase: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ComplimentaryClosings<T>, T> {
    return new GetByKeyRequestBuilder<ComplimentaryClosings<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ClosingPhrase: closingPhrase
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ComplimentaryClosings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ComplimentaryClosings`.
   */
  update(
    entity: ComplimentaryClosings<T>
  ): UpdateRequestBuilder<ComplimentaryClosings<T>, T> {
    return new UpdateRequestBuilder<ComplimentaryClosings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ComplimentaryClosings`.
   * @param dataAreaId Key property. See {@link ComplimentaryClosings.dataAreaId}.
   * @param closingPhrase Key property. See {@link ComplimentaryClosings.closingPhrase}.
   * @returns A request builder for creating requests that delete an entity of type `ComplimentaryClosings`.
   */
  delete(
    dataAreaId: string,
    closingPhrase: string
  ): DeleteRequestBuilder<ComplimentaryClosings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ComplimentaryClosings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ComplimentaryClosings` by taking the entity as a parameter.
   */
  delete(
    entity: ComplimentaryClosings<T>
  ): DeleteRequestBuilder<ComplimentaryClosings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    closingPhrase?: string
  ): DeleteRequestBuilder<ComplimentaryClosings<T>, T> {
    return new DeleteRequestBuilder<ComplimentaryClosings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ComplimentaryClosings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ClosingPhrase: closingPhrase!
          }
    );
  }
}
