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
import { PurchaseAgreements } from './PurchaseAgreements';

/**
 * Request builder class for operations supported on the {@link PurchaseAgreements} entity.
 */
export class PurchaseAgreementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseAgreements<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseAgreements` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseAgreements` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseAgreements<T>, T> {
    return new GetAllRequestBuilder<PurchaseAgreements<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseAgreements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseAgreements`.
   */
  create(
    entity: PurchaseAgreements<T>
  ): CreateRequestBuilder<PurchaseAgreements<T>, T> {
    return new CreateRequestBuilder<PurchaseAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseAgreements` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseAgreements.dataAreaId}.
   * @param purchaseAgreementId Key property. See {@link PurchaseAgreements.purchaseAgreementId}.
   * @returns A request builder for creating requests to retrieve one `PurchaseAgreements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseAgreementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchaseAgreements<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseAgreements<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseAgreementId: purchaseAgreementId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseAgreements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseAgreements`.
   */
  update(
    entity: PurchaseAgreements<T>
  ): UpdateRequestBuilder<PurchaseAgreements<T>, T> {
    return new UpdateRequestBuilder<PurchaseAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseAgreements`.
   * @param dataAreaId Key property. See {@link PurchaseAgreements.dataAreaId}.
   * @param purchaseAgreementId Key property. See {@link PurchaseAgreements.purchaseAgreementId}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseAgreements`.
   */
  delete(
    dataAreaId: string,
    purchaseAgreementId: string
  ): DeleteRequestBuilder<PurchaseAgreements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseAgreements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseAgreements` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseAgreements<T>
  ): DeleteRequestBuilder<PurchaseAgreements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseAgreementId?: string
  ): DeleteRequestBuilder<PurchaseAgreements<T>, T> {
    return new DeleteRequestBuilder<PurchaseAgreements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseAgreements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseAgreementId: purchaseAgreementId!
          }
    );
  }
}
