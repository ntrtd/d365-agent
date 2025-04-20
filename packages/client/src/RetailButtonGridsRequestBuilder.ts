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
import { RetailButtonGrids } from './RetailButtonGrids';

/**
 * Request builder class for operations supported on the {@link RetailButtonGrids} entity.
 */
export class RetailButtonGridsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailButtonGrids<T>, T> {
  /**
   * Returns a request builder for querying all `RetailButtonGrids` entities.
   * @returns A request builder for creating requests to retrieve all `RetailButtonGrids` entities.
   */
  getAll(): GetAllRequestBuilder<RetailButtonGrids<T>, T> {
    return new GetAllRequestBuilder<RetailButtonGrids<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailButtonGrids` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailButtonGrids`.
   */
  create(
    entity: RetailButtonGrids<T>
  ): CreateRequestBuilder<RetailButtonGrids<T>, T> {
    return new CreateRequestBuilder<RetailButtonGrids<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailButtonGrids` entity based on its keys.
   * @param buttonGridId Key property. See {@link RetailButtonGrids.buttonGridId}.
   * @returns A request builder for creating requests to retrieve one `RetailButtonGrids` entity based on its keys.
   */
  getByKey(
    buttonGridId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailButtonGrids<T>, T> {
    return new GetByKeyRequestBuilder<RetailButtonGrids<T>, T>(this.entityApi, {
      ButtonGridId: buttonGridId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailButtonGrids`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailButtonGrids`.
   */
  update(
    entity: RetailButtonGrids<T>
  ): UpdateRequestBuilder<RetailButtonGrids<T>, T> {
    return new UpdateRequestBuilder<RetailButtonGrids<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailButtonGrids`.
   * @param buttonGridId Key property. See {@link RetailButtonGrids.buttonGridId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailButtonGrids`.
   */
  delete(buttonGridId: string): DeleteRequestBuilder<RetailButtonGrids<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailButtonGrids`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailButtonGrids` by taking the entity as a parameter.
   */
  delete(
    entity: RetailButtonGrids<T>
  ): DeleteRequestBuilder<RetailButtonGrids<T>, T>;
  delete(
    buttonGridIdOrEntity: any
  ): DeleteRequestBuilder<RetailButtonGrids<T>, T> {
    return new DeleteRequestBuilder<RetailButtonGrids<T>, T>(
      this.entityApi,
      buttonGridIdOrEntity instanceof RetailButtonGrids
        ? buttonGridIdOrEntity
        : { ButtonGridId: buttonGridIdOrEntity! }
    );
  }
}
