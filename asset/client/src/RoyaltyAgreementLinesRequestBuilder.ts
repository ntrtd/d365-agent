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
import { RoyaltyAgreementLines } from './RoyaltyAgreementLines';

/**
 * Request builder class for operations supported on the {@link RoyaltyAgreementLines} entity.
 */
export class RoyaltyAgreementLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RoyaltyAgreementLines<T>, T> {
  /**
   * Returns a request builder for querying all `RoyaltyAgreementLines` entities.
   * @returns A request builder for creating requests to retrieve all `RoyaltyAgreementLines` entities.
   */
  getAll(): GetAllRequestBuilder<RoyaltyAgreementLines<T>, T> {
    return new GetAllRequestBuilder<RoyaltyAgreementLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RoyaltyAgreementLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RoyaltyAgreementLines`.
   */
  create(
    entity: RoyaltyAgreementLines<T>
  ): CreateRequestBuilder<RoyaltyAgreementLines<T>, T> {
    return new CreateRequestBuilder<RoyaltyAgreementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RoyaltyAgreementLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RoyaltyAgreementLines.dataAreaId}.
   * @param royaltyAgreementLineId Key property. See {@link RoyaltyAgreementLines.royaltyAgreementLineId}.
   * @param royaltyAgreementId Key property. See {@link RoyaltyAgreementLines.royaltyAgreementId}.
   * @returns A request builder for creating requests to retrieve one `RoyaltyAgreementLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    royaltyAgreementLineId: DeserializedType<T, 'Edm.String'>,
    royaltyAgreementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RoyaltyAgreementLines<T>, T> {
    return new GetByKeyRequestBuilder<RoyaltyAgreementLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RoyaltyAgreementLineId: royaltyAgreementLineId,
        RoyaltyAgreementId: royaltyAgreementId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RoyaltyAgreementLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RoyaltyAgreementLines`.
   */
  update(
    entity: RoyaltyAgreementLines<T>
  ): UpdateRequestBuilder<RoyaltyAgreementLines<T>, T> {
    return new UpdateRequestBuilder<RoyaltyAgreementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RoyaltyAgreementLines`.
   * @param dataAreaId Key property. See {@link RoyaltyAgreementLines.dataAreaId}.
   * @param royaltyAgreementLineId Key property. See {@link RoyaltyAgreementLines.royaltyAgreementLineId}.
   * @param royaltyAgreementId Key property. See {@link RoyaltyAgreementLines.royaltyAgreementId}.
   * @returns A request builder for creating requests that delete an entity of type `RoyaltyAgreementLines`.
   */
  delete(
    dataAreaId: string,
    royaltyAgreementLineId: string,
    royaltyAgreementId: string
  ): DeleteRequestBuilder<RoyaltyAgreementLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RoyaltyAgreementLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RoyaltyAgreementLines` by taking the entity as a parameter.
   */
  delete(
    entity: RoyaltyAgreementLines<T>
  ): DeleteRequestBuilder<RoyaltyAgreementLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    royaltyAgreementLineId?: string,
    royaltyAgreementId?: string
  ): DeleteRequestBuilder<RoyaltyAgreementLines<T>, T> {
    return new DeleteRequestBuilder<RoyaltyAgreementLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RoyaltyAgreementLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RoyaltyAgreementLineId: royaltyAgreementLineId!,
            RoyaltyAgreementId: royaltyAgreementId!
          }
    );
  }
}
