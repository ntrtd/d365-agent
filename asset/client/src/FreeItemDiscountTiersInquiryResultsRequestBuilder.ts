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
import { FreeItemDiscountTiersInquiryResults } from './FreeItemDiscountTiersInquiryResults';

/**
 * Request builder class for operations supported on the {@link FreeItemDiscountTiersInquiryResults} entity.
 */
export class FreeItemDiscountTiersInquiryResultsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FreeItemDiscountTiersInquiryResults<T>, T> {
  /**
   * Returns a request builder for querying all `FreeItemDiscountTiersInquiryResults` entities.
   * @returns A request builder for creating requests to retrieve all `FreeItemDiscountTiersInquiryResults` entities.
   */
  getAll(): GetAllRequestBuilder<FreeItemDiscountTiersInquiryResults<T>, T> {
    return new GetAllRequestBuilder<FreeItemDiscountTiersInquiryResults<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FreeItemDiscountTiersInquiryResults` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FreeItemDiscountTiersInquiryResults`.
   */
  create(
    entity: FreeItemDiscountTiersInquiryResults<T>
  ): CreateRequestBuilder<FreeItemDiscountTiersInquiryResults<T>, T> {
    return new CreateRequestBuilder<FreeItemDiscountTiersInquiryResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FreeItemDiscountTiersInquiryResults` entity based on its keys.
   * @param dataAreaId Key property. See {@link FreeItemDiscountTiersInquiryResults.dataAreaId}.
   * @param freeItemId Key property. See {@link FreeItemDiscountTiersInquiryResults.freeItemId}.
   * @param qtyOrAmountThreshold Key property. See {@link FreeItemDiscountTiersInquiryResults.qtyOrAmountThreshold}.
   * @returns A request builder for creating requests to retrieve one `FreeItemDiscountTiersInquiryResults` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    freeItemId: DeserializedType<T, 'Edm.String'>,
    qtyOrAmountThreshold: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<FreeItemDiscountTiersInquiryResults<T>, T> {
    return new GetByKeyRequestBuilder<
      FreeItemDiscountTiersInquiryResults<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      FreeItemId: freeItemId,
      QtyOrAmountThreshold: qtyOrAmountThreshold
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FreeItemDiscountTiersInquiryResults`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FreeItemDiscountTiersInquiryResults`.
   */
  update(
    entity: FreeItemDiscountTiersInquiryResults<T>
  ): UpdateRequestBuilder<FreeItemDiscountTiersInquiryResults<T>, T> {
    return new UpdateRequestBuilder<FreeItemDiscountTiersInquiryResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FreeItemDiscountTiersInquiryResults`.
   * @param dataAreaId Key property. See {@link FreeItemDiscountTiersInquiryResults.dataAreaId}.
   * @param freeItemId Key property. See {@link FreeItemDiscountTiersInquiryResults.freeItemId}.
   * @param qtyOrAmountThreshold Key property. See {@link FreeItemDiscountTiersInquiryResults.qtyOrAmountThreshold}.
   * @returns A request builder for creating requests that delete an entity of type `FreeItemDiscountTiersInquiryResults`.
   */
  delete(
    dataAreaId: string,
    freeItemId: string,
    qtyOrAmountThreshold: BigNumber
  ): DeleteRequestBuilder<FreeItemDiscountTiersInquiryResults<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FreeItemDiscountTiersInquiryResults`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FreeItemDiscountTiersInquiryResults` by taking the entity as a parameter.
   */
  delete(
    entity: FreeItemDiscountTiersInquiryResults<T>
  ): DeleteRequestBuilder<FreeItemDiscountTiersInquiryResults<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    freeItemId?: string,
    qtyOrAmountThreshold?: BigNumber
  ): DeleteRequestBuilder<FreeItemDiscountTiersInquiryResults<T>, T> {
    return new DeleteRequestBuilder<FreeItemDiscountTiersInquiryResults<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FreeItemDiscountTiersInquiryResults
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FreeItemId: freeItemId!,
            QtyOrAmountThreshold: qtyOrAmountThreshold!
          }
    );
  }
}
