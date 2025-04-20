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
import { DiscountAndMarginComponentPriceAdjustmentLines } from './DiscountAndMarginComponentPriceAdjustmentLines';

/**
 * Request builder class for operations supported on the {@link DiscountAndMarginComponentPriceAdjustmentLines} entity.
 */
export class DiscountAndMarginComponentPriceAdjustmentLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscountAndMarginComponentPriceAdjustmentLines<T>, T> {
  /**
   * Returns a request builder for querying all `DiscountAndMarginComponentPriceAdjustmentLines` entities.
   * @returns A request builder for creating requests to retrieve all `DiscountAndMarginComponentPriceAdjustmentLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    DiscountAndMarginComponentPriceAdjustmentLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      DiscountAndMarginComponentPriceAdjustmentLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DiscountAndMarginComponentPriceAdjustmentLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscountAndMarginComponentPriceAdjustmentLines`.
   */
  create(
    entity: DiscountAndMarginComponentPriceAdjustmentLines<T>
  ): CreateRequestBuilder<
    DiscountAndMarginComponentPriceAdjustmentLines<T>,
    T
  > {
    return new CreateRequestBuilder<
      DiscountAndMarginComponentPriceAdjustmentLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `DiscountAndMarginComponentPriceAdjustmentLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link DiscountAndMarginComponentPriceAdjustmentLines.dataAreaId}.
   * @param offerId Key property. See {@link DiscountAndMarginComponentPriceAdjustmentLines.offerId}.
   * @param lineNum Key property. See {@link DiscountAndMarginComponentPriceAdjustmentLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `DiscountAndMarginComponentPriceAdjustmentLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<
    DiscountAndMarginComponentPriceAdjustmentLines<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      DiscountAndMarginComponentPriceAdjustmentLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      OfferId: offerId,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DiscountAndMarginComponentPriceAdjustmentLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscountAndMarginComponentPriceAdjustmentLines`.
   */
  update(
    entity: DiscountAndMarginComponentPriceAdjustmentLines<T>
  ): UpdateRequestBuilder<
    DiscountAndMarginComponentPriceAdjustmentLines<T>,
    T
  > {
    return new UpdateRequestBuilder<
      DiscountAndMarginComponentPriceAdjustmentLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscountAndMarginComponentPriceAdjustmentLines`.
   * @param dataAreaId Key property. See {@link DiscountAndMarginComponentPriceAdjustmentLines.dataAreaId}.
   * @param offerId Key property. See {@link DiscountAndMarginComponentPriceAdjustmentLines.offerId}.
   * @param lineNum Key property. See {@link DiscountAndMarginComponentPriceAdjustmentLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `DiscountAndMarginComponentPriceAdjustmentLines`.
   */
  delete(
    dataAreaId: string,
    offerId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<DiscountAndMarginComponentPriceAdjustmentLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscountAndMarginComponentPriceAdjustmentLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscountAndMarginComponentPriceAdjustmentLines` by taking the entity as a parameter.
   */
  delete(
    entity: DiscountAndMarginComponentPriceAdjustmentLines<T>
  ): DeleteRequestBuilder<DiscountAndMarginComponentPriceAdjustmentLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<
    DiscountAndMarginComponentPriceAdjustmentLines<T>,
    T
  > {
    return new DeleteRequestBuilder<
      DiscountAndMarginComponentPriceAdjustmentLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      DiscountAndMarginComponentPriceAdjustmentLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!,
            LineNum: lineNum!
          }
    );
  }
}
