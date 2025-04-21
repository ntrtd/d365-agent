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
import { LeaseBooksSetup } from './LeaseBooksSetup';

/**
 * Request builder class for operations supported on the {@link LeaseBooksSetup} entity.
 */
export class LeaseBooksSetupRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseBooksSetup<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseBooksSetup` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseBooksSetup` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseBooksSetup<T>, T> {
    return new GetAllRequestBuilder<LeaseBooksSetup<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeaseBooksSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseBooksSetup`.
   */
  create(
    entity: LeaseBooksSetup<T>
  ): CreateRequestBuilder<LeaseBooksSetup<T>, T> {
    return new CreateRequestBuilder<LeaseBooksSetup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseBooksSetup` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaseBooksSetup.dataAreaId}.
   * @param bookType Key property. See {@link LeaseBooksSetup.bookType}.
   * @returns A request builder for creating requests to retrieve one `LeaseBooksSetup` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bookType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaseBooksSetup<T>, T> {
    return new GetByKeyRequestBuilder<LeaseBooksSetup<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      BookType: bookType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseBooksSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseBooksSetup`.
   */
  update(
    entity: LeaseBooksSetup<T>
  ): UpdateRequestBuilder<LeaseBooksSetup<T>, T> {
    return new UpdateRequestBuilder<LeaseBooksSetup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseBooksSetup`.
   * @param dataAreaId Key property. See {@link LeaseBooksSetup.dataAreaId}.
   * @param bookType Key property. See {@link LeaseBooksSetup.bookType}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseBooksSetup`.
   */
  delete(
    dataAreaId: string,
    bookType: string
  ): DeleteRequestBuilder<LeaseBooksSetup<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseBooksSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseBooksSetup` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseBooksSetup<T>
  ): DeleteRequestBuilder<LeaseBooksSetup<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bookType?: string
  ): DeleteRequestBuilder<LeaseBooksSetup<T>, T> {
    return new DeleteRequestBuilder<LeaseBooksSetup<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaseBooksSetup
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BookType: bookType!
          }
    );
  }
}
