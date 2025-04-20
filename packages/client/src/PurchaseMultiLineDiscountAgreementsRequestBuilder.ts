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
import { PurchaseMultiLineDiscountAgreements } from './PurchaseMultiLineDiscountAgreements';

/**
 * Request builder class for operations supported on the {@link PurchaseMultiLineDiscountAgreements} entity.
 */
export class PurchaseMultiLineDiscountAgreementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseMultiLineDiscountAgreements<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseMultiLineDiscountAgreements` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseMultiLineDiscountAgreements` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseMultiLineDiscountAgreements<T>, T> {
    return new GetAllRequestBuilder<PurchaseMultiLineDiscountAgreements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseMultiLineDiscountAgreements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseMultiLineDiscountAgreements`.
   */
  create(
    entity: PurchaseMultiLineDiscountAgreements<T>
  ): CreateRequestBuilder<PurchaseMultiLineDiscountAgreements<T>, T> {
    return new CreateRequestBuilder<PurchaseMultiLineDiscountAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseMultiLineDiscountAgreements` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseMultiLineDiscountAgreements.dataAreaId}.
   * @param recordId Key property. See {@link PurchaseMultiLineDiscountAgreements.recordId}.
   * @returns A request builder for creating requests to retrieve one `PurchaseMultiLineDiscountAgreements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PurchaseMultiLineDiscountAgreements<T>, T> {
    return new GetByKeyRequestBuilder<
      PurchaseMultiLineDiscountAgreements<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RecordId: recordId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseMultiLineDiscountAgreements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseMultiLineDiscountAgreements`.
   */
  update(
    entity: PurchaseMultiLineDiscountAgreements<T>
  ): UpdateRequestBuilder<PurchaseMultiLineDiscountAgreements<T>, T> {
    return new UpdateRequestBuilder<PurchaseMultiLineDiscountAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseMultiLineDiscountAgreements`.
   * @param dataAreaId Key property. See {@link PurchaseMultiLineDiscountAgreements.dataAreaId}.
   * @param recordId Key property. See {@link PurchaseMultiLineDiscountAgreements.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseMultiLineDiscountAgreements`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<PurchaseMultiLineDiscountAgreements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseMultiLineDiscountAgreements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseMultiLineDiscountAgreements` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseMultiLineDiscountAgreements<T>
  ): DeleteRequestBuilder<PurchaseMultiLineDiscountAgreements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber
  ): DeleteRequestBuilder<PurchaseMultiLineDiscountAgreements<T>, T> {
    return new DeleteRequestBuilder<PurchaseMultiLineDiscountAgreements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseMultiLineDiscountAgreements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!
          }
    );
  }
}
