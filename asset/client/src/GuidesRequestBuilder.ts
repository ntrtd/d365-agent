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
import { Guides } from './Guides';

/**
 * Request builder class for operations supported on the {@link Guides} entity.
 */
export class GuidesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Guides<T>, T> {
  /**
   * Returns a request builder for querying all `Guides` entities.
   * @returns A request builder for creating requests to retrieve all `Guides` entities.
   */
  getAll(): GetAllRequestBuilder<Guides<T>, T> {
    return new GetAllRequestBuilder<Guides<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Guides` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Guides`.
   */
  create(entity: Guides<T>): CreateRequestBuilder<Guides<T>, T> {
    return new CreateRequestBuilder<Guides<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Guides` entity based on its keys.
   * @param integrationKey Key property. See {@link Guides.integrationKey}.
   * @returns A request builder for creating requests to retrieve one `Guides` entity based on its keys.
   */
  getByKey(
    integrationKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Guides<T>, T> {
    return new GetByKeyRequestBuilder<Guides<T>, T>(this.entityApi, {
      IntegrationKey: integrationKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Guides`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Guides`.
   */
  update(entity: Guides<T>): UpdateRequestBuilder<Guides<T>, T> {
    return new UpdateRequestBuilder<Guides<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Guides`.
   * @param integrationKey Key property. See {@link Guides.integrationKey}.
   * @returns A request builder for creating requests that delete an entity of type `Guides`.
   */
  delete(integrationKey: string): DeleteRequestBuilder<Guides<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Guides`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Guides` by taking the entity as a parameter.
   */
  delete(entity: Guides<T>): DeleteRequestBuilder<Guides<T>, T>;
  delete(integrationKeyOrEntity: any): DeleteRequestBuilder<Guides<T>, T> {
    return new DeleteRequestBuilder<Guides<T>, T>(
      this.entityApi,
      integrationKeyOrEntity instanceof Guides
        ? integrationKeyOrEntity
        : { IntegrationKey: integrationKeyOrEntity! }
    );
  }
}
