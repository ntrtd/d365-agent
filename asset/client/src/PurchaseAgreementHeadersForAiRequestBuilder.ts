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
import { PurchaseAgreementHeadersForAi } from './PurchaseAgreementHeadersForAi';

/**
 * Request builder class for operations supported on the {@link PurchaseAgreementHeadersForAi} entity.
 */
export class PurchaseAgreementHeadersForAiRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseAgreementHeadersForAi<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseAgreementHeadersForAi` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseAgreementHeadersForAi` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseAgreementHeadersForAi<T>, T> {
    return new GetAllRequestBuilder<PurchaseAgreementHeadersForAi<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseAgreementHeadersForAi` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseAgreementHeadersForAi`.
   */
  create(
    entity: PurchaseAgreementHeadersForAi<T>
  ): CreateRequestBuilder<PurchaseAgreementHeadersForAi<T>, T> {
    return new CreateRequestBuilder<PurchaseAgreementHeadersForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseAgreementHeadersForAi` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseAgreementHeadersForAi.dataAreaId}.
   * @param purchaseAgreementId Key property. See {@link PurchaseAgreementHeadersForAi.purchaseAgreementId}.
   * @returns A request builder for creating requests to retrieve one `PurchaseAgreementHeadersForAi` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseAgreementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchaseAgreementHeadersForAi<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseAgreementHeadersForAi<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseAgreementId: purchaseAgreementId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseAgreementHeadersForAi`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseAgreementHeadersForAi`.
   */
  update(
    entity: PurchaseAgreementHeadersForAi<T>
  ): UpdateRequestBuilder<PurchaseAgreementHeadersForAi<T>, T> {
    return new UpdateRequestBuilder<PurchaseAgreementHeadersForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseAgreementHeadersForAi`.
   * @param dataAreaId Key property. See {@link PurchaseAgreementHeadersForAi.dataAreaId}.
   * @param purchaseAgreementId Key property. See {@link PurchaseAgreementHeadersForAi.purchaseAgreementId}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseAgreementHeadersForAi`.
   */
  delete(
    dataAreaId: string,
    purchaseAgreementId: string
  ): DeleteRequestBuilder<PurchaseAgreementHeadersForAi<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseAgreementHeadersForAi`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseAgreementHeadersForAi` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseAgreementHeadersForAi<T>
  ): DeleteRequestBuilder<PurchaseAgreementHeadersForAi<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseAgreementId?: string
  ): DeleteRequestBuilder<PurchaseAgreementHeadersForAi<T>, T> {
    return new DeleteRequestBuilder<PurchaseAgreementHeadersForAi<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseAgreementHeadersForAi
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseAgreementId: purchaseAgreementId!
          }
    );
  }
}
