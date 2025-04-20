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
import { ClmIntegrationPurchaseAgreements } from './ClmIntegrationPurchaseAgreements';

/**
 * Request builder class for operations supported on the {@link ClmIntegrationPurchaseAgreements} entity.
 */
export class ClmIntegrationPurchaseAgreementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ClmIntegrationPurchaseAgreements<T>, T> {
  /**
   * Returns a request builder for querying all `ClmIntegrationPurchaseAgreements` entities.
   * @returns A request builder for creating requests to retrieve all `ClmIntegrationPurchaseAgreements` entities.
   */
  getAll(): GetAllRequestBuilder<ClmIntegrationPurchaseAgreements<T>, T> {
    return new GetAllRequestBuilder<ClmIntegrationPurchaseAgreements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ClmIntegrationPurchaseAgreements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ClmIntegrationPurchaseAgreements`.
   */
  create(
    entity: ClmIntegrationPurchaseAgreements<T>
  ): CreateRequestBuilder<ClmIntegrationPurchaseAgreements<T>, T> {
    return new CreateRequestBuilder<ClmIntegrationPurchaseAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ClmIntegrationPurchaseAgreements` entity based on its keys.
   * @param dataAreaId Key property. See {@link ClmIntegrationPurchaseAgreements.dataAreaId}.
   * @param purchaseAgreementId Key property. See {@link ClmIntegrationPurchaseAgreements.purchaseAgreementId}.
   * @returns A request builder for creating requests to retrieve one `ClmIntegrationPurchaseAgreements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseAgreementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ClmIntegrationPurchaseAgreements<T>, T> {
    return new GetByKeyRequestBuilder<ClmIntegrationPurchaseAgreements<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseAgreementId: purchaseAgreementId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ClmIntegrationPurchaseAgreements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ClmIntegrationPurchaseAgreements`.
   */
  update(
    entity: ClmIntegrationPurchaseAgreements<T>
  ): UpdateRequestBuilder<ClmIntegrationPurchaseAgreements<T>, T> {
    return new UpdateRequestBuilder<ClmIntegrationPurchaseAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ClmIntegrationPurchaseAgreements`.
   * @param dataAreaId Key property. See {@link ClmIntegrationPurchaseAgreements.dataAreaId}.
   * @param purchaseAgreementId Key property. See {@link ClmIntegrationPurchaseAgreements.purchaseAgreementId}.
   * @returns A request builder for creating requests that delete an entity of type `ClmIntegrationPurchaseAgreements`.
   */
  delete(
    dataAreaId: string,
    purchaseAgreementId: string
  ): DeleteRequestBuilder<ClmIntegrationPurchaseAgreements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ClmIntegrationPurchaseAgreements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ClmIntegrationPurchaseAgreements` by taking the entity as a parameter.
   */
  delete(
    entity: ClmIntegrationPurchaseAgreements<T>
  ): DeleteRequestBuilder<ClmIntegrationPurchaseAgreements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseAgreementId?: string
  ): DeleteRequestBuilder<ClmIntegrationPurchaseAgreements<T>, T> {
    return new DeleteRequestBuilder<ClmIntegrationPurchaseAgreements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ClmIntegrationPurchaseAgreements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseAgreementId: purchaseAgreementId!
          }
    );
  }
}
