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
import { RetailAssortmentProductLines } from './RetailAssortmentProductLines';
import { RetailAssortmentStatusType } from './RetailAssortmentStatusType';

/**
 * Request builder class for operations supported on the {@link RetailAssortmentProductLines} entity.
 */
export class RetailAssortmentProductLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailAssortmentProductLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailAssortmentProductLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailAssortmentProductLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailAssortmentProductLines<T>, T> {
    return new GetAllRequestBuilder<RetailAssortmentProductLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailAssortmentProductLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailAssortmentProductLines`.
   */
  create(
    entity: RetailAssortmentProductLines<T>
  ): CreateRequestBuilder<RetailAssortmentProductLines<T>, T> {
    return new CreateRequestBuilder<RetailAssortmentProductLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailAssortmentProductLines` entity based on its keys.
   * @param assortmentId Key property. See {@link RetailAssortmentProductLines.assortmentId}.
   * @param lineNumber Key property. See {@link RetailAssortmentProductLines.lineNumber}.
   * @param status Key property. See {@link RetailAssortmentProductLines.status}.
   * @returns A request builder for creating requests to retrieve one `RetailAssortmentProductLines` entity based on its keys.
   */
  getByKey(
    assortmentId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailAssortmentStatusType'
    >
  ): GetByKeyRequestBuilder<RetailAssortmentProductLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailAssortmentProductLines<T>, T>(
      this.entityApi,
      {
        AssortmentId: assortmentId,
        LineNumber: lineNumber,
        Status: status
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailAssortmentProductLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailAssortmentProductLines`.
   */
  update(
    entity: RetailAssortmentProductLines<T>
  ): UpdateRequestBuilder<RetailAssortmentProductLines<T>, T> {
    return new UpdateRequestBuilder<RetailAssortmentProductLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailAssortmentProductLines`.
   * @param assortmentId Key property. See {@link RetailAssortmentProductLines.assortmentId}.
   * @param lineNumber Key property. See {@link RetailAssortmentProductLines.lineNumber}.
   * @param status Key property. See {@link RetailAssortmentProductLines.status}.
   * @returns A request builder for creating requests that delete an entity of type `RetailAssortmentProductLines`.
   */
  delete(
    assortmentId: string,
    lineNumber: BigNumber,
    status: RetailAssortmentStatusType
  ): DeleteRequestBuilder<RetailAssortmentProductLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailAssortmentProductLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailAssortmentProductLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailAssortmentProductLines<T>
  ): DeleteRequestBuilder<RetailAssortmentProductLines<T>, T>;
  delete(
    assortmentIdOrEntity: any,
    lineNumber?: BigNumber,
    status?: RetailAssortmentStatusType
  ): DeleteRequestBuilder<RetailAssortmentProductLines<T>, T> {
    return new DeleteRequestBuilder<RetailAssortmentProductLines<T>, T>(
      this.entityApi,
      assortmentIdOrEntity instanceof RetailAssortmentProductLines
        ? assortmentIdOrEntity
        : {
            AssortmentId: assortmentIdOrEntity!,
            LineNumber: lineNumber!,
            Status: status!
          }
    );
  }
}
