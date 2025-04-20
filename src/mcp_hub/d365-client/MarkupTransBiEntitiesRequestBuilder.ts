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
import { MarkupTransBiEntities } from './MarkupTransBiEntities';

/**
 * Request builder class for operations supported on the {@link MarkupTransBiEntities} entity.
 */
export class MarkupTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MarkupTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `MarkupTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `MarkupTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<MarkupTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<MarkupTransBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MarkupTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MarkupTransBiEntities`.
   */
  create(
    entity: MarkupTransBiEntities<T>
  ): CreateRequestBuilder<MarkupTransBiEntities<T>, T> {
    return new CreateRequestBuilder<MarkupTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MarkupTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link MarkupTransBiEntities.dataAreaId}.
   * @param transRecId Key property. See {@link MarkupTransBiEntities.transRecId}.
   * @param transTableId Key property. See {@link MarkupTransBiEntities.transTableId}.
   * @param lineNum Key property. See {@link MarkupTransBiEntities.lineNum}.
   * @returns A request builder for creating requests to retrieve one `MarkupTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transRecId: DeserializedType<T, 'Edm.Int64'>,
    transTableId: DeserializedType<T, 'Edm.Int32'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<MarkupTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<MarkupTransBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransRecId: transRecId,
        TransTableId: transTableId,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MarkupTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MarkupTransBiEntities`.
   */
  update(
    entity: MarkupTransBiEntities<T>
  ): UpdateRequestBuilder<MarkupTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<MarkupTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MarkupTransBiEntities`.
   * @param dataAreaId Key property. See {@link MarkupTransBiEntities.dataAreaId}.
   * @param transRecId Key property. See {@link MarkupTransBiEntities.transRecId}.
   * @param transTableId Key property. See {@link MarkupTransBiEntities.transTableId}.
   * @param lineNum Key property. See {@link MarkupTransBiEntities.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `MarkupTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    transRecId: BigNumber,
    transTableId: number,
    lineNum: BigNumber
  ): DeleteRequestBuilder<MarkupTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MarkupTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MarkupTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: MarkupTransBiEntities<T>
  ): DeleteRequestBuilder<MarkupTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transRecId?: BigNumber,
    transTableId?: number,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<MarkupTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<MarkupTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MarkupTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransRecId: transRecId!,
            TransTableId: transTableId!,
            LineNum: lineNum!
          }
    );
  }
}
