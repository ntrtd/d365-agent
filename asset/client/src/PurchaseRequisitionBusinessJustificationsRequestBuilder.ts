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
import { PurchaseRequisitionBusinessJustifications } from './PurchaseRequisitionBusinessJustifications';

/**
 * Request builder class for operations supported on the {@link PurchaseRequisitionBusinessJustifications} entity.
 */
export class PurchaseRequisitionBusinessJustificationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseRequisitionBusinessJustifications<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseRequisitionBusinessJustifications` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseRequisitionBusinessJustifications` entities.
   */
  getAll(): GetAllRequestBuilder<
    PurchaseRequisitionBusinessJustifications<T>,
    T
  > {
    return new GetAllRequestBuilder<
      PurchaseRequisitionBusinessJustifications<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseRequisitionBusinessJustifications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseRequisitionBusinessJustifications`.
   */
  create(
    entity: PurchaseRequisitionBusinessJustifications<T>
  ): CreateRequestBuilder<PurchaseRequisitionBusinessJustifications<T>, T> {
    return new CreateRequestBuilder<
      PurchaseRequisitionBusinessJustifications<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PurchaseRequisitionBusinessJustifications` entity based on its keys.
   * @param purchaseRequisitionBusinessJustificationCode Key property. See {@link PurchaseRequisitionBusinessJustifications.purchaseRequisitionBusinessJustificationCode}.
   * @returns A request builder for creating requests to retrieve one `PurchaseRequisitionBusinessJustifications` entity based on its keys.
   */
  getByKey(
    purchaseRequisitionBusinessJustificationCode: DeserializedType<
      T,
      'Edm.String'
    >
  ): GetByKeyRequestBuilder<PurchaseRequisitionBusinessJustifications<T>, T> {
    return new GetByKeyRequestBuilder<
      PurchaseRequisitionBusinessJustifications<T>,
      T
    >(this.entityApi, {
      PurchaseRequisitionBusinessJustificationCode:
        purchaseRequisitionBusinessJustificationCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseRequisitionBusinessJustifications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseRequisitionBusinessJustifications`.
   */
  update(
    entity: PurchaseRequisitionBusinessJustifications<T>
  ): UpdateRequestBuilder<PurchaseRequisitionBusinessJustifications<T>, T> {
    return new UpdateRequestBuilder<
      PurchaseRequisitionBusinessJustifications<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseRequisitionBusinessJustifications`.
   * @param purchaseRequisitionBusinessJustificationCode Key property. See {@link PurchaseRequisitionBusinessJustifications.purchaseRequisitionBusinessJustificationCode}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseRequisitionBusinessJustifications`.
   */
  delete(
    purchaseRequisitionBusinessJustificationCode: string
  ): DeleteRequestBuilder<PurchaseRequisitionBusinessJustifications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseRequisitionBusinessJustifications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseRequisitionBusinessJustifications` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseRequisitionBusinessJustifications<T>
  ): DeleteRequestBuilder<PurchaseRequisitionBusinessJustifications<T>, T>;
  delete(
    purchaseRequisitionBusinessJustificationCodeOrEntity: any
  ): DeleteRequestBuilder<PurchaseRequisitionBusinessJustifications<T>, T> {
    return new DeleteRequestBuilder<
      PurchaseRequisitionBusinessJustifications<T>,
      T
    >(
      this.entityApi,
      purchaseRequisitionBusinessJustificationCodeOrEntity instanceof
      PurchaseRequisitionBusinessJustifications
        ? purchaseRequisitionBusinessJustificationCodeOrEntity
        : {
            PurchaseRequisitionBusinessJustificationCode:
              purchaseRequisitionBusinessJustificationCodeOrEntity!
          }
    );
  }
}
