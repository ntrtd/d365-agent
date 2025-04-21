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
import { MarginComponentPriceAdjustmentLines } from './MarginComponentPriceAdjustmentLines';

/**
 * Request builder class for operations supported on the {@link MarginComponentPriceAdjustmentLines} entity.
 */
export class MarginComponentPriceAdjustmentLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MarginComponentPriceAdjustmentLines<T>, T> {
  /**
   * Returns a request builder for querying all `MarginComponentPriceAdjustmentLines` entities.
   * @returns A request builder for creating requests to retrieve all `MarginComponentPriceAdjustmentLines` entities.
   */
  getAll(): GetAllRequestBuilder<MarginComponentPriceAdjustmentLines<T>, T> {
    return new GetAllRequestBuilder<MarginComponentPriceAdjustmentLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MarginComponentPriceAdjustmentLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MarginComponentPriceAdjustmentLines`.
   */
  create(
    entity: MarginComponentPriceAdjustmentLines<T>
  ): CreateRequestBuilder<MarginComponentPriceAdjustmentLines<T>, T> {
    return new CreateRequestBuilder<MarginComponentPriceAdjustmentLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MarginComponentPriceAdjustmentLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link MarginComponentPriceAdjustmentLines.dataAreaId}.
   * @param offerId Key property. See {@link MarginComponentPriceAdjustmentLines.offerId}.
   * @param lineNum Key property. See {@link MarginComponentPriceAdjustmentLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `MarginComponentPriceAdjustmentLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<MarginComponentPriceAdjustmentLines<T>, T> {
    return new GetByKeyRequestBuilder<
      MarginComponentPriceAdjustmentLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      OfferId: offerId,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MarginComponentPriceAdjustmentLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MarginComponentPriceAdjustmentLines`.
   */
  update(
    entity: MarginComponentPriceAdjustmentLines<T>
  ): UpdateRequestBuilder<MarginComponentPriceAdjustmentLines<T>, T> {
    return new UpdateRequestBuilder<MarginComponentPriceAdjustmentLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MarginComponentPriceAdjustmentLines`.
   * @param dataAreaId Key property. See {@link MarginComponentPriceAdjustmentLines.dataAreaId}.
   * @param offerId Key property. See {@link MarginComponentPriceAdjustmentLines.offerId}.
   * @param lineNum Key property. See {@link MarginComponentPriceAdjustmentLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `MarginComponentPriceAdjustmentLines`.
   */
  delete(
    dataAreaId: string,
    offerId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<MarginComponentPriceAdjustmentLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MarginComponentPriceAdjustmentLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MarginComponentPriceAdjustmentLines` by taking the entity as a parameter.
   */
  delete(
    entity: MarginComponentPriceAdjustmentLines<T>
  ): DeleteRequestBuilder<MarginComponentPriceAdjustmentLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<MarginComponentPriceAdjustmentLines<T>, T> {
    return new DeleteRequestBuilder<MarginComponentPriceAdjustmentLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MarginComponentPriceAdjustmentLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!,
            LineNum: lineNum!
          }
    );
  }
}
