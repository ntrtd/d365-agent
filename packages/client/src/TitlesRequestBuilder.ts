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
import { Titles } from './Titles';

/**
 * Request builder class for operations supported on the {@link Titles} entity.
 */
export class TitlesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Titles<T>, T> {
  /**
   * Returns a request builder for querying all `Titles` entities.
   * @returns A request builder for creating requests to retrieve all `Titles` entities.
   */
  getAll(): GetAllRequestBuilder<Titles<T>, T> {
    return new GetAllRequestBuilder<Titles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Titles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Titles`.
   */
  create(entity: Titles<T>): CreateRequestBuilder<Titles<T>, T> {
    return new CreateRequestBuilder<Titles<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Titles` entity based on its keys.
   * @param titleId Key property. See {@link Titles.titleId}.
   * @returns A request builder for creating requests to retrieve one `Titles` entity based on its keys.
   */
  getByKey(
    titleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Titles<T>, T> {
    return new GetByKeyRequestBuilder<Titles<T>, T>(this.entityApi, {
      TitleId: titleId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Titles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Titles`.
   */
  update(entity: Titles<T>): UpdateRequestBuilder<Titles<T>, T> {
    return new UpdateRequestBuilder<Titles<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Titles`.
   * @param titleId Key property. See {@link Titles.titleId}.
   * @returns A request builder for creating requests that delete an entity of type `Titles`.
   */
  delete(titleId: string): DeleteRequestBuilder<Titles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Titles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Titles` by taking the entity as a parameter.
   */
  delete(entity: Titles<T>): DeleteRequestBuilder<Titles<T>, T>;
  delete(titleIdOrEntity: any): DeleteRequestBuilder<Titles<T>, T> {
    return new DeleteRequestBuilder<Titles<T>, T>(
      this.entityApi,
      titleIdOrEntity instanceof Titles
        ? titleIdOrEntity
        : { TitleId: titleIdOrEntity! }
    );
  }
}
