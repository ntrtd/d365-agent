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
import { KittingKitLines } from './KittingKitLines';

/**
 * Request builder class for operations supported on the {@link KittingKitLines} entity.
 */
export class KittingKitLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<KittingKitLines<T>, T> {
  /**
   * Returns a request builder for querying all `KittingKitLines` entities.
   * @returns A request builder for creating requests to retrieve all `KittingKitLines` entities.
   */
  getAll(): GetAllRequestBuilder<KittingKitLines<T>, T> {
    return new GetAllRequestBuilder<KittingKitLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `KittingKitLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `KittingKitLines`.
   */
  create(
    entity: KittingKitLines<T>
  ): CreateRequestBuilder<KittingKitLines<T>, T> {
    return new CreateRequestBuilder<KittingKitLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `KittingKitLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link KittingKitLines.dataAreaId}.
   * @param kitId Key property. See {@link KittingKitLines.kitId}.
   * @param lineNumber Key property. See {@link KittingKitLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `KittingKitLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    kitId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<KittingKitLines<T>, T> {
    return new GetByKeyRequestBuilder<KittingKitLines<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      KitId: kitId,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `KittingKitLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `KittingKitLines`.
   */
  update(
    entity: KittingKitLines<T>
  ): UpdateRequestBuilder<KittingKitLines<T>, T> {
    return new UpdateRequestBuilder<KittingKitLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `KittingKitLines`.
   * @param dataAreaId Key property. See {@link KittingKitLines.dataAreaId}.
   * @param kitId Key property. See {@link KittingKitLines.kitId}.
   * @param lineNumber Key property. See {@link KittingKitLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `KittingKitLines`.
   */
  delete(
    dataAreaId: string,
    kitId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<KittingKitLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `KittingKitLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `KittingKitLines` by taking the entity as a parameter.
   */
  delete(
    entity: KittingKitLines<T>
  ): DeleteRequestBuilder<KittingKitLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    kitId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<KittingKitLines<T>, T> {
    return new DeleteRequestBuilder<KittingKitLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof KittingKitLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            KitId: kitId!,
            LineNumber: lineNumber!
          }
    );
  }
}
