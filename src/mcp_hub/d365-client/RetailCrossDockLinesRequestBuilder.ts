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
import { RetailCrossDockLines } from './RetailCrossDockLines';

/**
 * Request builder class for operations supported on the {@link RetailCrossDockLines} entity.
 */
export class RetailCrossDockLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailCrossDockLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailCrossDockLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailCrossDockLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailCrossDockLines<T>, T> {
    return new GetAllRequestBuilder<RetailCrossDockLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailCrossDockLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailCrossDockLines`.
   */
  create(
    entity: RetailCrossDockLines<T>
  ): CreateRequestBuilder<RetailCrossDockLines<T>, T> {
    return new CreateRequestBuilder<RetailCrossDockLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailCrossDockLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailCrossDockLines.dataAreaId}.
   * @param crossDockId Key property. See {@link RetailCrossDockLines.crossDockId}.
   * @param lineNumber Key property. See {@link RetailCrossDockLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailCrossDockLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    crossDockId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailCrossDockLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailCrossDockLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CrossDockId: crossDockId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailCrossDockLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailCrossDockLines`.
   */
  update(
    entity: RetailCrossDockLines<T>
  ): UpdateRequestBuilder<RetailCrossDockLines<T>, T> {
    return new UpdateRequestBuilder<RetailCrossDockLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailCrossDockLines`.
   * @param dataAreaId Key property. See {@link RetailCrossDockLines.dataAreaId}.
   * @param crossDockId Key property. See {@link RetailCrossDockLines.crossDockId}.
   * @param lineNumber Key property. See {@link RetailCrossDockLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailCrossDockLines`.
   */
  delete(
    dataAreaId: string,
    crossDockId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailCrossDockLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailCrossDockLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailCrossDockLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailCrossDockLines<T>
  ): DeleteRequestBuilder<RetailCrossDockLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    crossDockId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailCrossDockLines<T>, T> {
    return new DeleteRequestBuilder<RetailCrossDockLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailCrossDockLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CrossDockId: crossDockId!,
            LineNumber: lineNumber!
          }
    );
  }
}
