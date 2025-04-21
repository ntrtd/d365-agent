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
import { RrgOperationTable_Ru } from './RrgOperationTable_Ru';

/**
 * Request builder class for operations supported on the {@link RrgOperationTable_Ru} entity.
 */
export class RrgOperationTable_RuRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RrgOperationTable_Ru<T>, T> {
  /**
   * Returns a request builder for querying all `RrgOperationTable_Ru` entities.
   * @returns A request builder for creating requests to retrieve all `RrgOperationTable_Ru` entities.
   */
  getAll(): GetAllRequestBuilder<RrgOperationTable_Ru<T>, T> {
    return new GetAllRequestBuilder<RrgOperationTable_Ru<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RrgOperationTable_Ru` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RrgOperationTable_Ru`.
   */
  create(
    entity: RrgOperationTable_Ru<T>
  ): CreateRequestBuilder<RrgOperationTable_Ru<T>, T> {
    return new CreateRequestBuilder<RrgOperationTable_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RrgOperationTable_Ru` entity based on its keys.
   * @param dataAreaId Key property. See {@link RrgOperationTable_Ru.dataAreaId}.
   * @param lineId Key property. See {@link RrgOperationTable_Ru.lineId}.
   * @returns A request builder for creating requests to retrieve one `RrgOperationTable_Ru` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<RrgOperationTable_Ru<T>, T> {
    return new GetByKeyRequestBuilder<RrgOperationTable_Ru<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineId: lineId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RrgOperationTable_Ru`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RrgOperationTable_Ru`.
   */
  update(
    entity: RrgOperationTable_Ru<T>
  ): UpdateRequestBuilder<RrgOperationTable_Ru<T>, T> {
    return new UpdateRequestBuilder<RrgOperationTable_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RrgOperationTable_Ru`.
   * @param dataAreaId Key property. See {@link RrgOperationTable_Ru.dataAreaId}.
   * @param lineId Key property. See {@link RrgOperationTable_Ru.lineId}.
   * @returns A request builder for creating requests that delete an entity of type `RrgOperationTable_Ru`.
   */
  delete(
    dataAreaId: string,
    lineId: string
  ): DeleteRequestBuilder<RrgOperationTable_Ru<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RrgOperationTable_Ru`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RrgOperationTable_Ru` by taking the entity as a parameter.
   */
  delete(
    entity: RrgOperationTable_Ru<T>
  ): DeleteRequestBuilder<RrgOperationTable_Ru<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineId?: string
  ): DeleteRequestBuilder<RrgOperationTable_Ru<T>, T> {
    return new DeleteRequestBuilder<RrgOperationTable_Ru<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RrgOperationTable_Ru
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineId: lineId!
          }
    );
  }
}
