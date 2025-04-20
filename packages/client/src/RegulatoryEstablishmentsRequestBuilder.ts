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
import { RegulatoryEstablishments } from './RegulatoryEstablishments';

/**
 * Request builder class for operations supported on the {@link RegulatoryEstablishments} entity.
 */
export class RegulatoryEstablishmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RegulatoryEstablishments<T>, T> {
  /**
   * Returns a request builder for querying all `RegulatoryEstablishments` entities.
   * @returns A request builder for creating requests to retrieve all `RegulatoryEstablishments` entities.
   */
  getAll(): GetAllRequestBuilder<RegulatoryEstablishments<T>, T> {
    return new GetAllRequestBuilder<RegulatoryEstablishments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RegulatoryEstablishments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RegulatoryEstablishments`.
   */
  create(
    entity: RegulatoryEstablishments<T>
  ): CreateRequestBuilder<RegulatoryEstablishments<T>, T> {
    return new CreateRequestBuilder<RegulatoryEstablishments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RegulatoryEstablishments` entity based on its keys.
   * @param regulatoryEstablishmentId Key property. See {@link RegulatoryEstablishments.regulatoryEstablishmentId}.
   * @returns A request builder for creating requests to retrieve one `RegulatoryEstablishments` entity based on its keys.
   */
  getByKey(
    regulatoryEstablishmentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RegulatoryEstablishments<T>, T> {
    return new GetByKeyRequestBuilder<RegulatoryEstablishments<T>, T>(
      this.entityApi,
      { RegulatoryEstablishmentId: regulatoryEstablishmentId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RegulatoryEstablishments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RegulatoryEstablishments`.
   */
  update(
    entity: RegulatoryEstablishments<T>
  ): UpdateRequestBuilder<RegulatoryEstablishments<T>, T> {
    return new UpdateRequestBuilder<RegulatoryEstablishments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RegulatoryEstablishments`.
   * @param regulatoryEstablishmentId Key property. See {@link RegulatoryEstablishments.regulatoryEstablishmentId}.
   * @returns A request builder for creating requests that delete an entity of type `RegulatoryEstablishments`.
   */
  delete(
    regulatoryEstablishmentId: string
  ): DeleteRequestBuilder<RegulatoryEstablishments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RegulatoryEstablishments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RegulatoryEstablishments` by taking the entity as a parameter.
   */
  delete(
    entity: RegulatoryEstablishments<T>
  ): DeleteRequestBuilder<RegulatoryEstablishments<T>, T>;
  delete(
    regulatoryEstablishmentIdOrEntity: any
  ): DeleteRequestBuilder<RegulatoryEstablishments<T>, T> {
    return new DeleteRequestBuilder<RegulatoryEstablishments<T>, T>(
      this.entityApi,
      regulatoryEstablishmentIdOrEntity instanceof RegulatoryEstablishments
        ? regulatoryEstablishmentIdOrEntity
        : { RegulatoryEstablishmentId: regulatoryEstablishmentIdOrEntity! }
    );
  }
}
