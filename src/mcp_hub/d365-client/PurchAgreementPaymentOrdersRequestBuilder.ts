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
import { PurchAgreementPaymentOrders } from './PurchAgreementPaymentOrders';

/**
 * Request builder class for operations supported on the {@link PurchAgreementPaymentOrders} entity.
 */
export class PurchAgreementPaymentOrdersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchAgreementPaymentOrders<T>, T> {
  /**
   * Returns a request builder for querying all `PurchAgreementPaymentOrders` entities.
   * @returns A request builder for creating requests to retrieve all `PurchAgreementPaymentOrders` entities.
   */
  getAll(): GetAllRequestBuilder<PurchAgreementPaymentOrders<T>, T> {
    return new GetAllRequestBuilder<PurchAgreementPaymentOrders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchAgreementPaymentOrders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchAgreementPaymentOrders`.
   */
  create(
    entity: PurchAgreementPaymentOrders<T>
  ): CreateRequestBuilder<PurchAgreementPaymentOrders<T>, T> {
    return new CreateRequestBuilder<PurchAgreementPaymentOrders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchAgreementPaymentOrders` entity based on its keys.
   * @param legalEntity Key property. See {@link PurchAgreementPaymentOrders.legalEntity}.
   * @param purchaseAgreement Key property. See {@link PurchAgreementPaymentOrders.purchaseAgreement}.
   * @returns A request builder for creating requests to retrieve one `PurchAgreementPaymentOrders` entity based on its keys.
   */
  getByKey(
    legalEntity: DeserializedType<T, 'Edm.String'>,
    purchaseAgreement: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchAgreementPaymentOrders<T>, T> {
    return new GetByKeyRequestBuilder<PurchAgreementPaymentOrders<T>, T>(
      this.entityApi,
      {
        LegalEntity: legalEntity,
        PurchaseAgreement: purchaseAgreement
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchAgreementPaymentOrders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchAgreementPaymentOrders`.
   */
  update(
    entity: PurchAgreementPaymentOrders<T>
  ): UpdateRequestBuilder<PurchAgreementPaymentOrders<T>, T> {
    return new UpdateRequestBuilder<PurchAgreementPaymentOrders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchAgreementPaymentOrders`.
   * @param legalEntity Key property. See {@link PurchAgreementPaymentOrders.legalEntity}.
   * @param purchaseAgreement Key property. See {@link PurchAgreementPaymentOrders.purchaseAgreement}.
   * @returns A request builder for creating requests that delete an entity of type `PurchAgreementPaymentOrders`.
   */
  delete(
    legalEntity: string,
    purchaseAgreement: string
  ): DeleteRequestBuilder<PurchAgreementPaymentOrders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchAgreementPaymentOrders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchAgreementPaymentOrders` by taking the entity as a parameter.
   */
  delete(
    entity: PurchAgreementPaymentOrders<T>
  ): DeleteRequestBuilder<PurchAgreementPaymentOrders<T>, T>;
  delete(
    legalEntityOrEntity: any,
    purchaseAgreement?: string
  ): DeleteRequestBuilder<PurchAgreementPaymentOrders<T>, T> {
    return new DeleteRequestBuilder<PurchAgreementPaymentOrders<T>, T>(
      this.entityApi,
      legalEntityOrEntity instanceof PurchAgreementPaymentOrders
        ? legalEntityOrEntity
        : {
            LegalEntity: legalEntityOrEntity!,
            PurchaseAgreement: purchaseAgreement!
          }
    );
  }
}
