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
import { RegulatoryEstablishmentDetails } from './RegulatoryEstablishmentDetails';

/**
 * Request builder class for operations supported on the {@link RegulatoryEstablishmentDetails} entity.
 */
export class RegulatoryEstablishmentDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RegulatoryEstablishmentDetails<T>, T> {
  /**
   * Returns a request builder for querying all `RegulatoryEstablishmentDetails` entities.
   * @returns A request builder for creating requests to retrieve all `RegulatoryEstablishmentDetails` entities.
   */
  getAll(): GetAllRequestBuilder<RegulatoryEstablishmentDetails<T>, T> {
    return new GetAllRequestBuilder<RegulatoryEstablishmentDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RegulatoryEstablishmentDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RegulatoryEstablishmentDetails`.
   */
  create(
    entity: RegulatoryEstablishmentDetails<T>
  ): CreateRequestBuilder<RegulatoryEstablishmentDetails<T>, T> {
    return new CreateRequestBuilder<RegulatoryEstablishmentDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RegulatoryEstablishmentDetails` entity based on its keys.
   * @param regulatoryEstablishmentId Key property. See {@link RegulatoryEstablishmentDetails.regulatoryEstablishmentId}.
   * @param legalEntityId Key property. See {@link RegulatoryEstablishmentDetails.legalEntityId}.
   * @returns A request builder for creating requests to retrieve one `RegulatoryEstablishmentDetails` entity based on its keys.
   */
  getByKey(
    regulatoryEstablishmentId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RegulatoryEstablishmentDetails<T>, T> {
    return new GetByKeyRequestBuilder<RegulatoryEstablishmentDetails<T>, T>(
      this.entityApi,
      {
        RegulatoryEstablishmentId: regulatoryEstablishmentId,
        LegalEntityId: legalEntityId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RegulatoryEstablishmentDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RegulatoryEstablishmentDetails`.
   */
  update(
    entity: RegulatoryEstablishmentDetails<T>
  ): UpdateRequestBuilder<RegulatoryEstablishmentDetails<T>, T> {
    return new UpdateRequestBuilder<RegulatoryEstablishmentDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RegulatoryEstablishmentDetails`.
   * @param regulatoryEstablishmentId Key property. See {@link RegulatoryEstablishmentDetails.regulatoryEstablishmentId}.
   * @param legalEntityId Key property. See {@link RegulatoryEstablishmentDetails.legalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `RegulatoryEstablishmentDetails`.
   */
  delete(
    regulatoryEstablishmentId: string,
    legalEntityId: string
  ): DeleteRequestBuilder<RegulatoryEstablishmentDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RegulatoryEstablishmentDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RegulatoryEstablishmentDetails` by taking the entity as a parameter.
   */
  delete(
    entity: RegulatoryEstablishmentDetails<T>
  ): DeleteRequestBuilder<RegulatoryEstablishmentDetails<T>, T>;
  delete(
    regulatoryEstablishmentIdOrEntity: any,
    legalEntityId?: string
  ): DeleteRequestBuilder<RegulatoryEstablishmentDetails<T>, T> {
    return new DeleteRequestBuilder<RegulatoryEstablishmentDetails<T>, T>(
      this.entityApi,
      regulatoryEstablishmentIdOrEntity instanceof
      RegulatoryEstablishmentDetails
        ? regulatoryEstablishmentIdOrEntity
        : {
            RegulatoryEstablishmentId: regulatoryEstablishmentIdOrEntity!,
            LegalEntityId: legalEntityId!
          }
    );
  }
}
