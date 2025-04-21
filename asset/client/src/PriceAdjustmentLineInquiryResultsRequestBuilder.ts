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
import { PriceAdjustmentLineInquiryResults } from './PriceAdjustmentLineInquiryResults';

/**
 * Request builder class for operations supported on the {@link PriceAdjustmentLineInquiryResults} entity.
 */
export class PriceAdjustmentLineInquiryResultsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PriceAdjustmentLineInquiryResults<T>, T> {
  /**
   * Returns a request builder for querying all `PriceAdjustmentLineInquiryResults` entities.
   * @returns A request builder for creating requests to retrieve all `PriceAdjustmentLineInquiryResults` entities.
   */
  getAll(): GetAllRequestBuilder<PriceAdjustmentLineInquiryResults<T>, T> {
    return new GetAllRequestBuilder<PriceAdjustmentLineInquiryResults<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PriceAdjustmentLineInquiryResults` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceAdjustmentLineInquiryResults`.
   */
  create(
    entity: PriceAdjustmentLineInquiryResults<T>
  ): CreateRequestBuilder<PriceAdjustmentLineInquiryResults<T>, T> {
    return new CreateRequestBuilder<PriceAdjustmentLineInquiryResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PriceAdjustmentLineInquiryResults` entity based on its keys.
   * @param dataAreaId Key property. See {@link PriceAdjustmentLineInquiryResults.dataAreaId}.
   * @param offerId Key property. See {@link PriceAdjustmentLineInquiryResults.offerId}.
   * @param lineNum Key property. See {@link PriceAdjustmentLineInquiryResults.lineNum}.
   * @returns A request builder for creating requests to retrieve one `PriceAdjustmentLineInquiryResults` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PriceAdjustmentLineInquiryResults<T>, T> {
    return new GetByKeyRequestBuilder<PriceAdjustmentLineInquiryResults<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OfferId: offerId,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PriceAdjustmentLineInquiryResults`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceAdjustmentLineInquiryResults`.
   */
  update(
    entity: PriceAdjustmentLineInquiryResults<T>
  ): UpdateRequestBuilder<PriceAdjustmentLineInquiryResults<T>, T> {
    return new UpdateRequestBuilder<PriceAdjustmentLineInquiryResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PriceAdjustmentLineInquiryResults`.
   * @param dataAreaId Key property. See {@link PriceAdjustmentLineInquiryResults.dataAreaId}.
   * @param offerId Key property. See {@link PriceAdjustmentLineInquiryResults.offerId}.
   * @param lineNum Key property. See {@link PriceAdjustmentLineInquiryResults.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `PriceAdjustmentLineInquiryResults`.
   */
  delete(
    dataAreaId: string,
    offerId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<PriceAdjustmentLineInquiryResults<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceAdjustmentLineInquiryResults`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceAdjustmentLineInquiryResults` by taking the entity as a parameter.
   */
  delete(
    entity: PriceAdjustmentLineInquiryResults<T>
  ): DeleteRequestBuilder<PriceAdjustmentLineInquiryResults<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<PriceAdjustmentLineInquiryResults<T>, T> {
    return new DeleteRequestBuilder<PriceAdjustmentLineInquiryResults<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PriceAdjustmentLineInquiryResults
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!,
            LineNum: lineNum!
          }
    );
  }
}
