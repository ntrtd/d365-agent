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
import { Ledgers } from './Ledgers';

/**
 * Request builder class for operations supported on the {@link Ledgers} entity.
 */
export class LedgersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Ledgers<T>, T> {
  /**
   * Returns a request builder for querying all `Ledgers` entities.
   * @returns A request builder for creating requests to retrieve all `Ledgers` entities.
   */
  getAll(): GetAllRequestBuilder<Ledgers<T>, T> {
    return new GetAllRequestBuilder<Ledgers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Ledgers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Ledgers`.
   */
  create(entity: Ledgers<T>): CreateRequestBuilder<Ledgers<T>, T> {
    return new CreateRequestBuilder<Ledgers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Ledgers` entity based on its keys.
   * @param legalEntityId Key property. See {@link Ledgers.legalEntityId}.
   * @returns A request builder for creating requests to retrieve one `Ledgers` entity based on its keys.
   */
  getByKey(
    legalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Ledgers<T>, T> {
    return new GetByKeyRequestBuilder<Ledgers<T>, T>(this.entityApi, {
      LegalEntityId: legalEntityId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Ledgers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Ledgers`.
   */
  update(entity: Ledgers<T>): UpdateRequestBuilder<Ledgers<T>, T> {
    return new UpdateRequestBuilder<Ledgers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Ledgers`.
   * @param legalEntityId Key property. See {@link Ledgers.legalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `Ledgers`.
   */
  delete(legalEntityId: string): DeleteRequestBuilder<Ledgers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Ledgers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Ledgers` by taking the entity as a parameter.
   */
  delete(entity: Ledgers<T>): DeleteRequestBuilder<Ledgers<T>, T>;
  delete(legalEntityIdOrEntity: any): DeleteRequestBuilder<Ledgers<T>, T> {
    return new DeleteRequestBuilder<Ledgers<T>, T>(
      this.entityApi,
      legalEntityIdOrEntity instanceof Ledgers
        ? legalEntityIdOrEntity
        : { LegalEntityId: legalEntityIdOrEntity! }
    );
  }
}
