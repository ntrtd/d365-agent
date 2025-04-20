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
import { RetailBuyersPushLines } from './RetailBuyersPushLines';

/**
 * Request builder class for operations supported on the {@link RetailBuyersPushLines} entity.
 */
export class RetailBuyersPushLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailBuyersPushLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailBuyersPushLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailBuyersPushLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailBuyersPushLines<T>, T> {
    return new GetAllRequestBuilder<RetailBuyersPushLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailBuyersPushLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailBuyersPushLines`.
   */
  create(
    entity: RetailBuyersPushLines<T>
  ): CreateRequestBuilder<RetailBuyersPushLines<T>, T> {
    return new CreateRequestBuilder<RetailBuyersPushLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailBuyersPushLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailBuyersPushLines.dataAreaId}.
   * @param buyersPushId Key property. See {@link RetailBuyersPushLines.buyersPushId}.
   * @param lineNumber Key property. See {@link RetailBuyersPushLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailBuyersPushLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    buyersPushId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailBuyersPushLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailBuyersPushLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BuyersPushId: buyersPushId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailBuyersPushLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailBuyersPushLines`.
   */
  update(
    entity: RetailBuyersPushLines<T>
  ): UpdateRequestBuilder<RetailBuyersPushLines<T>, T> {
    return new UpdateRequestBuilder<RetailBuyersPushLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailBuyersPushLines`.
   * @param dataAreaId Key property. See {@link RetailBuyersPushLines.dataAreaId}.
   * @param buyersPushId Key property. See {@link RetailBuyersPushLines.buyersPushId}.
   * @param lineNumber Key property. See {@link RetailBuyersPushLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailBuyersPushLines`.
   */
  delete(
    dataAreaId: string,
    buyersPushId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailBuyersPushLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailBuyersPushLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailBuyersPushLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailBuyersPushLines<T>
  ): DeleteRequestBuilder<RetailBuyersPushLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    buyersPushId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailBuyersPushLines<T>, T> {
    return new DeleteRequestBuilder<RetailBuyersPushLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailBuyersPushLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BuyersPushId: buyersPushId!,
            LineNumber: lineNumber!
          }
    );
  }
}
