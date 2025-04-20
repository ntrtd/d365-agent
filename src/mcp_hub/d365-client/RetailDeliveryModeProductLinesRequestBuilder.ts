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
import { RetailDeliveryModeProductLines } from './RetailDeliveryModeProductLines';

/**
 * Request builder class for operations supported on the {@link RetailDeliveryModeProductLines} entity.
 */
export class RetailDeliveryModeProductLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailDeliveryModeProductLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailDeliveryModeProductLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailDeliveryModeProductLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailDeliveryModeProductLines<T>, T> {
    return new GetAllRequestBuilder<RetailDeliveryModeProductLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailDeliveryModeProductLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailDeliveryModeProductLines`.
   */
  create(
    entity: RetailDeliveryModeProductLines<T>
  ): CreateRequestBuilder<RetailDeliveryModeProductLines<T>, T> {
    return new CreateRequestBuilder<RetailDeliveryModeProductLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailDeliveryModeProductLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailDeliveryModeProductLines.dataAreaId}.
   * @param deliveryMode Key property. See {@link RetailDeliveryModeProductLines.deliveryMode}.
   * @param lineNumber Key property. See {@link RetailDeliveryModeProductLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailDeliveryModeProductLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    deliveryMode: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailDeliveryModeProductLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailDeliveryModeProductLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DeliveryMode: deliveryMode,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailDeliveryModeProductLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailDeliveryModeProductLines`.
   */
  update(
    entity: RetailDeliveryModeProductLines<T>
  ): UpdateRequestBuilder<RetailDeliveryModeProductLines<T>, T> {
    return new UpdateRequestBuilder<RetailDeliveryModeProductLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailDeliveryModeProductLines`.
   * @param dataAreaId Key property. See {@link RetailDeliveryModeProductLines.dataAreaId}.
   * @param deliveryMode Key property. See {@link RetailDeliveryModeProductLines.deliveryMode}.
   * @param lineNumber Key property. See {@link RetailDeliveryModeProductLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailDeliveryModeProductLines`.
   */
  delete(
    dataAreaId: string,
    deliveryMode: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailDeliveryModeProductLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailDeliveryModeProductLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailDeliveryModeProductLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailDeliveryModeProductLines<T>
  ): DeleteRequestBuilder<RetailDeliveryModeProductLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    deliveryMode?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailDeliveryModeProductLines<T>, T> {
    return new DeleteRequestBuilder<RetailDeliveryModeProductLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailDeliveryModeProductLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DeliveryMode: deliveryMode!,
            LineNumber: lineNumber!
          }
    );
  }
}
