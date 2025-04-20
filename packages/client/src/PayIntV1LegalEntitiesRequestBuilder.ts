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
import { PayIntV1LegalEntities } from './PayIntV1LegalEntities';

/**
 * Request builder class for operations supported on the {@link PayIntV1LegalEntities} entity.
 */
export class PayIntV1LegalEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1LegalEntities<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1LegalEntities` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1LegalEntities` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1LegalEntities<T>, T> {
    return new GetAllRequestBuilder<PayIntV1LegalEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1LegalEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1LegalEntities`.
   */
  create(
    entity: PayIntV1LegalEntities<T>
  ): CreateRequestBuilder<PayIntV1LegalEntities<T>, T> {
    return new CreateRequestBuilder<PayIntV1LegalEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1LegalEntities` entity based on its keys.
   * @param legalEntityId Key property. See {@link PayIntV1LegalEntities.legalEntityId}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1LegalEntities` entity based on its keys.
   */
  getByKey(
    legalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1LegalEntities<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1LegalEntities<T>, T>(
      this.entityApi,
      { LegalEntityId: legalEntityId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1LegalEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1LegalEntities`.
   */
  update(
    entity: PayIntV1LegalEntities<T>
  ): UpdateRequestBuilder<PayIntV1LegalEntities<T>, T> {
    return new UpdateRequestBuilder<PayIntV1LegalEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1LegalEntities`.
   * @param legalEntityId Key property. See {@link PayIntV1LegalEntities.legalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1LegalEntities`.
   */
  delete(
    legalEntityId: string
  ): DeleteRequestBuilder<PayIntV1LegalEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1LegalEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1LegalEntities` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1LegalEntities<T>
  ): DeleteRequestBuilder<PayIntV1LegalEntities<T>, T>;
  delete(
    legalEntityIdOrEntity: any
  ): DeleteRequestBuilder<PayIntV1LegalEntities<T>, T> {
    return new DeleteRequestBuilder<PayIntV1LegalEntities<T>, T>(
      this.entityApi,
      legalEntityIdOrEntity instanceof PayIntV1LegalEntities
        ? legalEntityIdOrEntity
        : { LegalEntityId: legalEntityIdOrEntity! }
    );
  }
}
