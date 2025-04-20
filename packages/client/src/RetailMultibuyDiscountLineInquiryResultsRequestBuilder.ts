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
import { RetailMultibuyDiscountLineInquiryResults } from './RetailMultibuyDiscountLineInquiryResults';

/**
 * Request builder class for operations supported on the {@link RetailMultibuyDiscountLineInquiryResults} entity.
 */
export class RetailMultibuyDiscountLineInquiryResultsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailMultibuyDiscountLineInquiryResults<T>, T> {
  /**
   * Returns a request builder for querying all `RetailMultibuyDiscountLineInquiryResults` entities.
   * @returns A request builder for creating requests to retrieve all `RetailMultibuyDiscountLineInquiryResults` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailMultibuyDiscountLineInquiryResults<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailMultibuyDiscountLineInquiryResults<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailMultibuyDiscountLineInquiryResults` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailMultibuyDiscountLineInquiryResults`.
   */
  create(
    entity: RetailMultibuyDiscountLineInquiryResults<T>
  ): CreateRequestBuilder<RetailMultibuyDiscountLineInquiryResults<T>, T> {
    return new CreateRequestBuilder<
      RetailMultibuyDiscountLineInquiryResults<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailMultibuyDiscountLineInquiryResults` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailMultibuyDiscountLineInquiryResults.dataAreaId}.
   * @param multibuyId Key property. See {@link RetailMultibuyDiscountLineInquiryResults.multibuyId}.
   * @param qtyLowest Key property. See {@link RetailMultibuyDiscountLineInquiryResults.qtyLowest}.
   * @returns A request builder for creating requests to retrieve one `RetailMultibuyDiscountLineInquiryResults` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    multibuyId: DeserializedType<T, 'Edm.String'>,
    qtyLowest: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailMultibuyDiscountLineInquiryResults<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailMultibuyDiscountLineInquiryResults<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MultibuyId: multibuyId,
      QtyLowest: qtyLowest
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailMultibuyDiscountLineInquiryResults`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailMultibuyDiscountLineInquiryResults`.
   */
  update(
    entity: RetailMultibuyDiscountLineInquiryResults<T>
  ): UpdateRequestBuilder<RetailMultibuyDiscountLineInquiryResults<T>, T> {
    return new UpdateRequestBuilder<
      RetailMultibuyDiscountLineInquiryResults<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailMultibuyDiscountLineInquiryResults`.
   * @param dataAreaId Key property. See {@link RetailMultibuyDiscountLineInquiryResults.dataAreaId}.
   * @param multibuyId Key property. See {@link RetailMultibuyDiscountLineInquiryResults.multibuyId}.
   * @param qtyLowest Key property. See {@link RetailMultibuyDiscountLineInquiryResults.qtyLowest}.
   * @returns A request builder for creating requests that delete an entity of type `RetailMultibuyDiscountLineInquiryResults`.
   */
  delete(
    dataAreaId: string,
    multibuyId: string,
    qtyLowest: BigNumber
  ): DeleteRequestBuilder<RetailMultibuyDiscountLineInquiryResults<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailMultibuyDiscountLineInquiryResults`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailMultibuyDiscountLineInquiryResults` by taking the entity as a parameter.
   */
  delete(
    entity: RetailMultibuyDiscountLineInquiryResults<T>
  ): DeleteRequestBuilder<RetailMultibuyDiscountLineInquiryResults<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    multibuyId?: string,
    qtyLowest?: BigNumber
  ): DeleteRequestBuilder<RetailMultibuyDiscountLineInquiryResults<T>, T> {
    return new DeleteRequestBuilder<
      RetailMultibuyDiscountLineInquiryResults<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailMultibuyDiscountLineInquiryResults
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MultibuyId: multibuyId!,
            QtyLowest: qtyLowest!
          }
    );
  }
}
