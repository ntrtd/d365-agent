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
import { PurchaseAgreementConfirmations } from './PurchaseAgreementConfirmations';

/**
 * Request builder class for operations supported on the {@link PurchaseAgreementConfirmations} entity.
 */
export class PurchaseAgreementConfirmationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseAgreementConfirmations<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseAgreementConfirmations` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseAgreementConfirmations` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseAgreementConfirmations<T>, T> {
    return new GetAllRequestBuilder<PurchaseAgreementConfirmations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseAgreementConfirmations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseAgreementConfirmations`.
   */
  create(
    entity: PurchaseAgreementConfirmations<T>
  ): CreateRequestBuilder<PurchaseAgreementConfirmations<T>, T> {
    return new CreateRequestBuilder<PurchaseAgreementConfirmations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseAgreementConfirmations` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseAgreementConfirmations.dataAreaId}.
   * @param purchaseAgreementId Key property. See {@link PurchaseAgreementConfirmations.purchaseAgreementId}.
   * @param confirmationNumber Key property. See {@link PurchaseAgreementConfirmations.confirmationNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseAgreementConfirmations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseAgreementId: DeserializedType<T, 'Edm.String'>,
    confirmationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchaseAgreementConfirmations<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseAgreementConfirmations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseAgreementId: purchaseAgreementId,
        ConfirmationNumber: confirmationNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseAgreementConfirmations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseAgreementConfirmations`.
   */
  update(
    entity: PurchaseAgreementConfirmations<T>
  ): UpdateRequestBuilder<PurchaseAgreementConfirmations<T>, T> {
    return new UpdateRequestBuilder<PurchaseAgreementConfirmations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseAgreementConfirmations`.
   * @param dataAreaId Key property. See {@link PurchaseAgreementConfirmations.dataAreaId}.
   * @param purchaseAgreementId Key property. See {@link PurchaseAgreementConfirmations.purchaseAgreementId}.
   * @param confirmationNumber Key property. See {@link PurchaseAgreementConfirmations.confirmationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseAgreementConfirmations`.
   */
  delete(
    dataAreaId: string,
    purchaseAgreementId: string,
    confirmationNumber: string
  ): DeleteRequestBuilder<PurchaseAgreementConfirmations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseAgreementConfirmations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseAgreementConfirmations` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseAgreementConfirmations<T>
  ): DeleteRequestBuilder<PurchaseAgreementConfirmations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseAgreementId?: string,
    confirmationNumber?: string
  ): DeleteRequestBuilder<PurchaseAgreementConfirmations<T>, T> {
    return new DeleteRequestBuilder<PurchaseAgreementConfirmations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseAgreementConfirmations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseAgreementId: purchaseAgreementId!,
            ConfirmationNumber: confirmationNumber!
          }
    );
  }
}
