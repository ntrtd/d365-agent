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
import { RetailDiscountLinesV2 } from './RetailDiscountLinesV2';

/**
 * Request builder class for operations supported on the {@link RetailDiscountLinesV2} entity.
 */
export class RetailDiscountLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailDiscountLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `RetailDiscountLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `RetailDiscountLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<RetailDiscountLinesV2<T>, T> {
    return new GetAllRequestBuilder<RetailDiscountLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailDiscountLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailDiscountLinesV2`.
   */
  create(
    entity: RetailDiscountLinesV2<T>
  ): CreateRequestBuilder<RetailDiscountLinesV2<T>, T> {
    return new CreateRequestBuilder<RetailDiscountLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailDiscountLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailDiscountLinesV2.dataAreaId}.
   * @param offerId Key property. See {@link RetailDiscountLinesV2.offerId}.
   * @param lineNum Key property. See {@link RetailDiscountLinesV2.lineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailDiscountLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailDiscountLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<RetailDiscountLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OfferId: offerId,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailDiscountLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailDiscountLinesV2`.
   */
  update(
    entity: RetailDiscountLinesV2<T>
  ): UpdateRequestBuilder<RetailDiscountLinesV2<T>, T> {
    return new UpdateRequestBuilder<RetailDiscountLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailDiscountLinesV2`.
   * @param dataAreaId Key property. See {@link RetailDiscountLinesV2.dataAreaId}.
   * @param offerId Key property. See {@link RetailDiscountLinesV2.offerId}.
   * @param lineNum Key property. See {@link RetailDiscountLinesV2.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailDiscountLinesV2`.
   */
  delete(
    dataAreaId: string,
    offerId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<RetailDiscountLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailDiscountLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailDiscountLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: RetailDiscountLinesV2<T>
  ): DeleteRequestBuilder<RetailDiscountLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<RetailDiscountLinesV2<T>, T> {
    return new DeleteRequestBuilder<RetailDiscountLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailDiscountLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!,
            LineNum: lineNum!
          }
    );
  }
}
