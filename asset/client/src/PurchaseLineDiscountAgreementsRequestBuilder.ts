/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { PurchaseLineDiscountAgreements } from './PurchaseLineDiscountAgreements';

/**
 * Request builder class for operations supported on the {@link PurchaseLineDiscountAgreements} entity.
 */
export class PurchaseLineDiscountAgreementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseLineDiscountAgreements<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseLineDiscountAgreements` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseLineDiscountAgreements` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseLineDiscountAgreements<T>, T> {
    return new GetAllRequestBuilder<PurchaseLineDiscountAgreements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseLineDiscountAgreements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseLineDiscountAgreements`.
   */
  create(
    entity: PurchaseLineDiscountAgreements<T>
  ): CreateRequestBuilder<PurchaseLineDiscountAgreements<T>, T> {
    return new CreateRequestBuilder<PurchaseLineDiscountAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseLineDiscountAgreements` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseLineDiscountAgreements.dataAreaId}.
   * @param recordId Key property. See {@link PurchaseLineDiscountAgreements.recordId}.
   * @returns A request builder for creating requests to retrieve one `PurchaseLineDiscountAgreements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PurchaseLineDiscountAgreements<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseLineDiscountAgreements<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecordId: recordId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseLineDiscountAgreements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseLineDiscountAgreements`.
   */
  update(
    entity: PurchaseLineDiscountAgreements<T>
  ): UpdateRequestBuilder<PurchaseLineDiscountAgreements<T>, T> {
    return new UpdateRequestBuilder<PurchaseLineDiscountAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseLineDiscountAgreements`.
   * @param dataAreaId Key property. See {@link PurchaseLineDiscountAgreements.dataAreaId}.
   * @param recordId Key property. See {@link PurchaseLineDiscountAgreements.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseLineDiscountAgreements`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<PurchaseLineDiscountAgreements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseLineDiscountAgreements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseLineDiscountAgreements` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseLineDiscountAgreements<T>
  ): DeleteRequestBuilder<PurchaseLineDiscountAgreements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber
  ): DeleteRequestBuilder<PurchaseLineDiscountAgreements<T>, T> {
    return new DeleteRequestBuilder<PurchaseLineDiscountAgreements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseLineDiscountAgreements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!
          }
    );
  }
}
