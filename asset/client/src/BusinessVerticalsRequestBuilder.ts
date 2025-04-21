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
import { BusinessVerticals } from './BusinessVerticals';

/**
 * Request builder class for operations supported on the {@link BusinessVerticals} entity.
 */
export class BusinessVerticalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessVerticals<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessVerticals` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessVerticals` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessVerticals<T>, T> {
    return new GetAllRequestBuilder<BusinessVerticals<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BusinessVerticals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessVerticals`.
   */
  create(
    entity: BusinessVerticals<T>
  ): CreateRequestBuilder<BusinessVerticals<T>, T> {
    return new CreateRequestBuilder<BusinessVerticals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BusinessVerticals` entity based on its keys.
   * @param businessVerticals Key property. See {@link BusinessVerticals.businessVerticals}.
   * @returns A request builder for creating requests to retrieve one `BusinessVerticals` entity based on its keys.
   */
  getByKey(
    businessVerticals: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BusinessVerticals<T>, T> {
    return new GetByKeyRequestBuilder<BusinessVerticals<T>, T>(this.entityApi, {
      BusinessVerticals: businessVerticals
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessVerticals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessVerticals`.
   */
  update(
    entity: BusinessVerticals<T>
  ): UpdateRequestBuilder<BusinessVerticals<T>, T> {
    return new UpdateRequestBuilder<BusinessVerticals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessVerticals`.
   * @param businessVerticals Key property. See {@link BusinessVerticals.businessVerticals}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessVerticals`.
   */
  delete(
    businessVerticals: string
  ): DeleteRequestBuilder<BusinessVerticals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessVerticals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessVerticals` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessVerticals<T>
  ): DeleteRequestBuilder<BusinessVerticals<T>, T>;
  delete(
    businessVerticalsOrEntity: any
  ): DeleteRequestBuilder<BusinessVerticals<T>, T> {
    return new DeleteRequestBuilder<BusinessVerticals<T>, T>(
      this.entityApi,
      businessVerticalsOrEntity instanceof BusinessVerticals
        ? businessVerticalsOrEntity
        : { BusinessVerticals: businessVerticalsOrEntity! }
    );
  }
}
