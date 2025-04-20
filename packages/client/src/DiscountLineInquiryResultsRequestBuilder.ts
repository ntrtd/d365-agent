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
import { DiscountLineInquiryResults } from './DiscountLineInquiryResults';

/**
 * Request builder class for operations supported on the {@link DiscountLineInquiryResults} entity.
 */
export class DiscountLineInquiryResultsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscountLineInquiryResults<T>, T> {
  /**
   * Returns a request builder for querying all `DiscountLineInquiryResults` entities.
   * @returns A request builder for creating requests to retrieve all `DiscountLineInquiryResults` entities.
   */
  getAll(): GetAllRequestBuilder<DiscountLineInquiryResults<T>, T> {
    return new GetAllRequestBuilder<DiscountLineInquiryResults<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DiscountLineInquiryResults` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscountLineInquiryResults`.
   */
  create(
    entity: DiscountLineInquiryResults<T>
  ): CreateRequestBuilder<DiscountLineInquiryResults<T>, T> {
    return new CreateRequestBuilder<DiscountLineInquiryResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiscountLineInquiryResults` entity based on its keys.
   * @param dataAreaId Key property. See {@link DiscountLineInquiryResults.dataAreaId}.
   * @param offerId Key property. See {@link DiscountLineInquiryResults.offerId}.
   * @param lineNum Key property. See {@link DiscountLineInquiryResults.lineNum}.
   * @returns A request builder for creating requests to retrieve one `DiscountLineInquiryResults` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<DiscountLineInquiryResults<T>, T> {
    return new GetByKeyRequestBuilder<DiscountLineInquiryResults<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OfferId: offerId,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DiscountLineInquiryResults`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscountLineInquiryResults`.
   */
  update(
    entity: DiscountLineInquiryResults<T>
  ): UpdateRequestBuilder<DiscountLineInquiryResults<T>, T> {
    return new UpdateRequestBuilder<DiscountLineInquiryResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscountLineInquiryResults`.
   * @param dataAreaId Key property. See {@link DiscountLineInquiryResults.dataAreaId}.
   * @param offerId Key property. See {@link DiscountLineInquiryResults.offerId}.
   * @param lineNum Key property. See {@link DiscountLineInquiryResults.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `DiscountLineInquiryResults`.
   */
  delete(
    dataAreaId: string,
    offerId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<DiscountLineInquiryResults<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscountLineInquiryResults`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscountLineInquiryResults` by taking the entity as a parameter.
   */
  delete(
    entity: DiscountLineInquiryResults<T>
  ): DeleteRequestBuilder<DiscountLineInquiryResults<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<DiscountLineInquiryResults<T>, T> {
    return new DeleteRequestBuilder<DiscountLineInquiryResults<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DiscountLineInquiryResults
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!,
            LineNum: lineNum!
          }
    );
  }
}
