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
import { PurchaseTotalDiscountAgreements } from './PurchaseTotalDiscountAgreements';

/**
 * Request builder class for operations supported on the {@link PurchaseTotalDiscountAgreements} entity.
 */
export class PurchaseTotalDiscountAgreementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseTotalDiscountAgreements<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseTotalDiscountAgreements` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseTotalDiscountAgreements` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseTotalDiscountAgreements<T>, T> {
    return new GetAllRequestBuilder<PurchaseTotalDiscountAgreements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseTotalDiscountAgreements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseTotalDiscountAgreements`.
   */
  create(
    entity: PurchaseTotalDiscountAgreements<T>
  ): CreateRequestBuilder<PurchaseTotalDiscountAgreements<T>, T> {
    return new CreateRequestBuilder<PurchaseTotalDiscountAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseTotalDiscountAgreements` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseTotalDiscountAgreements.dataAreaId}.
   * @param recordId Key property. See {@link PurchaseTotalDiscountAgreements.recordId}.
   * @returns A request builder for creating requests to retrieve one `PurchaseTotalDiscountAgreements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PurchaseTotalDiscountAgreements<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseTotalDiscountAgreements<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecordId: recordId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseTotalDiscountAgreements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseTotalDiscountAgreements`.
   */
  update(
    entity: PurchaseTotalDiscountAgreements<T>
  ): UpdateRequestBuilder<PurchaseTotalDiscountAgreements<T>, T> {
    return new UpdateRequestBuilder<PurchaseTotalDiscountAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseTotalDiscountAgreements`.
   * @param dataAreaId Key property. See {@link PurchaseTotalDiscountAgreements.dataAreaId}.
   * @param recordId Key property. See {@link PurchaseTotalDiscountAgreements.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseTotalDiscountAgreements`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<PurchaseTotalDiscountAgreements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseTotalDiscountAgreements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseTotalDiscountAgreements` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseTotalDiscountAgreements<T>
  ): DeleteRequestBuilder<PurchaseTotalDiscountAgreements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber
  ): DeleteRequestBuilder<PurchaseTotalDiscountAgreements<T>, T> {
    return new DeleteRequestBuilder<PurchaseTotalDiscountAgreements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseTotalDiscountAgreements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!
          }
    );
  }
}
