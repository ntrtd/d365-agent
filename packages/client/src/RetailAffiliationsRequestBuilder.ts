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
import { RetailAffiliations } from './RetailAffiliations';

/**
 * Request builder class for operations supported on the {@link RetailAffiliations} entity.
 */
export class RetailAffiliationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailAffiliations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailAffiliations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailAffiliations` entities.
   */
  getAll(): GetAllRequestBuilder<RetailAffiliations<T>, T> {
    return new GetAllRequestBuilder<RetailAffiliations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailAffiliations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailAffiliations`.
   */
  create(
    entity: RetailAffiliations<T>
  ): CreateRequestBuilder<RetailAffiliations<T>, T> {
    return new CreateRequestBuilder<RetailAffiliations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailAffiliations` entity based on its keys.
   * @param name Key property. See {@link RetailAffiliations.name}.
   * @returns A request builder for creating requests to retrieve one `RetailAffiliations` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailAffiliations<T>, T> {
    return new GetByKeyRequestBuilder<RetailAffiliations<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailAffiliations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailAffiliations`.
   */
  update(
    entity: RetailAffiliations<T>
  ): UpdateRequestBuilder<RetailAffiliations<T>, T> {
    return new UpdateRequestBuilder<RetailAffiliations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailAffiliations`.
   * @param name Key property. See {@link RetailAffiliations.name}.
   * @returns A request builder for creating requests that delete an entity of type `RetailAffiliations`.
   */
  delete(name: string): DeleteRequestBuilder<RetailAffiliations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailAffiliations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailAffiliations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailAffiliations<T>
  ): DeleteRequestBuilder<RetailAffiliations<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<RetailAffiliations<T>, T> {
    return new DeleteRequestBuilder<RetailAffiliations<T>, T>(
      this.entityApi,
      nameOrEntity instanceof RetailAffiliations
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
