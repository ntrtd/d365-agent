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
import { RetailDiscountLines } from './RetailDiscountLines';

/**
 * Request builder class for operations supported on the {@link RetailDiscountLines} entity.
 */
export class RetailDiscountLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailDiscountLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailDiscountLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailDiscountLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailDiscountLines<T>, T> {
    return new GetAllRequestBuilder<RetailDiscountLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailDiscountLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailDiscountLines`.
   */
  create(
    entity: RetailDiscountLines<T>
  ): CreateRequestBuilder<RetailDiscountLines<T>, T> {
    return new CreateRequestBuilder<RetailDiscountLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailDiscountLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailDiscountLines.dataAreaId}.
   * @param offerId Key property. See {@link RetailDiscountLines.offerId}.
   * @param lineNum Key property. See {@link RetailDiscountLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailDiscountLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailDiscountLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailDiscountLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OfferId: offerId,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailDiscountLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailDiscountLines`.
   */
  update(
    entity: RetailDiscountLines<T>
  ): UpdateRequestBuilder<RetailDiscountLines<T>, T> {
    return new UpdateRequestBuilder<RetailDiscountLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailDiscountLines`.
   * @param dataAreaId Key property. See {@link RetailDiscountLines.dataAreaId}.
   * @param offerId Key property. See {@link RetailDiscountLines.offerId}.
   * @param lineNum Key property. See {@link RetailDiscountLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailDiscountLines`.
   */
  delete(
    dataAreaId: string,
    offerId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<RetailDiscountLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailDiscountLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailDiscountLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailDiscountLines<T>
  ): DeleteRequestBuilder<RetailDiscountLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<RetailDiscountLines<T>, T> {
    return new DeleteRequestBuilder<RetailDiscountLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailDiscountLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!,
            LineNum: lineNum!
          }
    );
  }
}
