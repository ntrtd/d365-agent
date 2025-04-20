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
import { ConsignmentReplenishmentOrderLines } from './ConsignmentReplenishmentOrderLines';

/**
 * Request builder class for operations supported on the {@link ConsignmentReplenishmentOrderLines} entity.
 */
export class ConsignmentReplenishmentOrderLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConsignmentReplenishmentOrderLines<T>, T> {
  /**
   * Returns a request builder for querying all `ConsignmentReplenishmentOrderLines` entities.
   * @returns A request builder for creating requests to retrieve all `ConsignmentReplenishmentOrderLines` entities.
   */
  getAll(): GetAllRequestBuilder<ConsignmentReplenishmentOrderLines<T>, T> {
    return new GetAllRequestBuilder<ConsignmentReplenishmentOrderLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ConsignmentReplenishmentOrderLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConsignmentReplenishmentOrderLines`.
   */
  create(
    entity: ConsignmentReplenishmentOrderLines<T>
  ): CreateRequestBuilder<ConsignmentReplenishmentOrderLines<T>, T> {
    return new CreateRequestBuilder<ConsignmentReplenishmentOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ConsignmentReplenishmentOrderLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ConsignmentReplenishmentOrderLines.dataAreaId}.
   * @param consignmentReplenishmentOrderNumber Key property. See {@link ConsignmentReplenishmentOrderLines.consignmentReplenishmentOrderNumber}.
   * @param lineNumber Key property. See {@link ConsignmentReplenishmentOrderLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `ConsignmentReplenishmentOrderLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    consignmentReplenishmentOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ConsignmentReplenishmentOrderLines<T>, T> {
    return new GetByKeyRequestBuilder<ConsignmentReplenishmentOrderLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ConsignmentReplenishmentOrderNumber:
          consignmentReplenishmentOrderNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ConsignmentReplenishmentOrderLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConsignmentReplenishmentOrderLines`.
   */
  update(
    entity: ConsignmentReplenishmentOrderLines<T>
  ): UpdateRequestBuilder<ConsignmentReplenishmentOrderLines<T>, T> {
    return new UpdateRequestBuilder<ConsignmentReplenishmentOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ConsignmentReplenishmentOrderLines`.
   * @param dataAreaId Key property. See {@link ConsignmentReplenishmentOrderLines.dataAreaId}.
   * @param consignmentReplenishmentOrderNumber Key property. See {@link ConsignmentReplenishmentOrderLines.consignmentReplenishmentOrderNumber}.
   * @param lineNumber Key property. See {@link ConsignmentReplenishmentOrderLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ConsignmentReplenishmentOrderLines`.
   */
  delete(
    dataAreaId: string,
    consignmentReplenishmentOrderNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<ConsignmentReplenishmentOrderLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConsignmentReplenishmentOrderLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConsignmentReplenishmentOrderLines` by taking the entity as a parameter.
   */
  delete(
    entity: ConsignmentReplenishmentOrderLines<T>
  ): DeleteRequestBuilder<ConsignmentReplenishmentOrderLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    consignmentReplenishmentOrderNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<ConsignmentReplenishmentOrderLines<T>, T> {
    return new DeleteRequestBuilder<ConsignmentReplenishmentOrderLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ConsignmentReplenishmentOrderLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ConsignmentReplenishmentOrderNumber:
              consignmentReplenishmentOrderNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
