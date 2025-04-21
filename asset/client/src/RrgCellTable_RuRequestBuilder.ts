/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { RrgCellTable_Ru } from './RrgCellTable_Ru';

/**
 * Request builder class for operations supported on the {@link RrgCellTable_Ru} entity.
 */
export class RrgCellTable_RuRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RrgCellTable_Ru<T>, T> {
  /**
   * Returns a request builder for querying all `RrgCellTable_Ru` entities.
   * @returns A request builder for creating requests to retrieve all `RrgCellTable_Ru` entities.
   */
  getAll(): GetAllRequestBuilder<RrgCellTable_Ru<T>, T> {
    return new GetAllRequestBuilder<RrgCellTable_Ru<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RrgCellTable_Ru` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RrgCellTable_Ru`.
   */
  create(
    entity: RrgCellTable_Ru<T>
  ): CreateRequestBuilder<RrgCellTable_Ru<T>, T> {
    return new CreateRequestBuilder<RrgCellTable_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RrgCellTable_Ru` entity based on its keys.
   * @param dataAreaId Key property. See {@link RrgCellTable_Ru.dataAreaId}.
   * @param lineId Key property. See {@link RrgCellTable_Ru.lineId}.
   * @returns A request builder for creating requests to retrieve one `RrgCellTable_Ru` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<RrgCellTable_Ru<T>, T> {
    return new GetByKeyRequestBuilder<RrgCellTable_Ru<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LineId: lineId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RrgCellTable_Ru`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RrgCellTable_Ru`.
   */
  update(
    entity: RrgCellTable_Ru<T>
  ): UpdateRequestBuilder<RrgCellTable_Ru<T>, T> {
    return new UpdateRequestBuilder<RrgCellTable_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RrgCellTable_Ru`.
   * @param dataAreaId Key property. See {@link RrgCellTable_Ru.dataAreaId}.
   * @param lineId Key property. See {@link RrgCellTable_Ru.lineId}.
   * @returns A request builder for creating requests that delete an entity of type `RrgCellTable_Ru`.
   */
  delete(
    dataAreaId: string,
    lineId: string
  ): DeleteRequestBuilder<RrgCellTable_Ru<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RrgCellTable_Ru`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RrgCellTable_Ru` by taking the entity as a parameter.
   */
  delete(
    entity: RrgCellTable_Ru<T>
  ): DeleteRequestBuilder<RrgCellTable_Ru<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineId?: string
  ): DeleteRequestBuilder<RrgCellTable_Ru<T>, T> {
    return new DeleteRequestBuilder<RrgCellTable_Ru<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RrgCellTable_Ru
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineId: lineId!
          }
    );
  }
}
