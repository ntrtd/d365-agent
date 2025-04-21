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
import { AdvLines } from './AdvLines';

/**
 * Request builder class for operations supported on the {@link AdvLines} entity.
 */
export class AdvLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AdvLines<T>, T> {
  /**
   * Returns a request builder for querying all `AdvLines` entities.
   * @returns A request builder for creating requests to retrieve all `AdvLines` entities.
   */
  getAll(): GetAllRequestBuilder<AdvLines<T>, T> {
    return new GetAllRequestBuilder<AdvLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AdvLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AdvLines`.
   */
  create(entity: AdvLines<T>): CreateRequestBuilder<AdvLines<T>, T> {
    return new CreateRequestBuilder<AdvLines<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AdvLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link AdvLines.dataAreaId}.
   * @param advanceId Key property. See {@link AdvLines.advanceId}.
   * @param lineNum Key property. See {@link AdvLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `AdvLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    advanceId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AdvLines<T>, T> {
    return new GetByKeyRequestBuilder<AdvLines<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AdvanceId: advanceId,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AdvLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AdvLines`.
   */
  update(entity: AdvLines<T>): UpdateRequestBuilder<AdvLines<T>, T> {
    return new UpdateRequestBuilder<AdvLines<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AdvLines`.
   * @param dataAreaId Key property. See {@link AdvLines.dataAreaId}.
   * @param advanceId Key property. See {@link AdvLines.advanceId}.
   * @param lineNum Key property. See {@link AdvLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `AdvLines`.
   */
  delete(
    dataAreaId: string,
    advanceId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<AdvLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AdvLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AdvLines` by taking the entity as a parameter.
   */
  delete(entity: AdvLines<T>): DeleteRequestBuilder<AdvLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    advanceId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<AdvLines<T>, T> {
    return new DeleteRequestBuilder<AdvLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AdvLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AdvanceId: advanceId!,
            LineNum: lineNum!
          }
    );
  }
}
