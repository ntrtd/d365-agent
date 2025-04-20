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
import { RoyaltyAgreementHeaders } from './RoyaltyAgreementHeaders';

/**
 * Request builder class for operations supported on the {@link RoyaltyAgreementHeaders} entity.
 */
export class RoyaltyAgreementHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RoyaltyAgreementHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `RoyaltyAgreementHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `RoyaltyAgreementHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<RoyaltyAgreementHeaders<T>, T> {
    return new GetAllRequestBuilder<RoyaltyAgreementHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RoyaltyAgreementHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RoyaltyAgreementHeaders`.
   */
  create(
    entity: RoyaltyAgreementHeaders<T>
  ): CreateRequestBuilder<RoyaltyAgreementHeaders<T>, T> {
    return new CreateRequestBuilder<RoyaltyAgreementHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RoyaltyAgreementHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link RoyaltyAgreementHeaders.dataAreaId}.
   * @param royaltyAgreementId Key property. See {@link RoyaltyAgreementHeaders.royaltyAgreementId}.
   * @returns A request builder for creating requests to retrieve one `RoyaltyAgreementHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    royaltyAgreementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RoyaltyAgreementHeaders<T>, T> {
    return new GetByKeyRequestBuilder<RoyaltyAgreementHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RoyaltyAgreementId: royaltyAgreementId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RoyaltyAgreementHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RoyaltyAgreementHeaders`.
   */
  update(
    entity: RoyaltyAgreementHeaders<T>
  ): UpdateRequestBuilder<RoyaltyAgreementHeaders<T>, T> {
    return new UpdateRequestBuilder<RoyaltyAgreementHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RoyaltyAgreementHeaders`.
   * @param dataAreaId Key property. See {@link RoyaltyAgreementHeaders.dataAreaId}.
   * @param royaltyAgreementId Key property. See {@link RoyaltyAgreementHeaders.royaltyAgreementId}.
   * @returns A request builder for creating requests that delete an entity of type `RoyaltyAgreementHeaders`.
   */
  delete(
    dataAreaId: string,
    royaltyAgreementId: string
  ): DeleteRequestBuilder<RoyaltyAgreementHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RoyaltyAgreementHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RoyaltyAgreementHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: RoyaltyAgreementHeaders<T>
  ): DeleteRequestBuilder<RoyaltyAgreementHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    royaltyAgreementId?: string
  ): DeleteRequestBuilder<RoyaltyAgreementHeaders<T>, T> {
    return new DeleteRequestBuilder<RoyaltyAgreementHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RoyaltyAgreementHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RoyaltyAgreementId: royaltyAgreementId!
          }
    );
  }
}
