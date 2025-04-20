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
import { RrgOffsetAccountInterval_Ru } from './RrgOffsetAccountInterval_Ru';

/**
 * Request builder class for operations supported on the {@link RrgOffsetAccountInterval_Ru} entity.
 */
export class RrgOffsetAccountInterval_RuRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RrgOffsetAccountInterval_Ru<T>, T> {
  /**
   * Returns a request builder for querying all `RrgOffsetAccountInterval_Ru` entities.
   * @returns A request builder for creating requests to retrieve all `RrgOffsetAccountInterval_Ru` entities.
   */
  getAll(): GetAllRequestBuilder<RrgOffsetAccountInterval_Ru<T>, T> {
    return new GetAllRequestBuilder<RrgOffsetAccountInterval_Ru<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RrgOffsetAccountInterval_Ru` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RrgOffsetAccountInterval_Ru`.
   */
  create(
    entity: RrgOffsetAccountInterval_Ru<T>
  ): CreateRequestBuilder<RrgOffsetAccountInterval_Ru<T>, T> {
    return new CreateRequestBuilder<RrgOffsetAccountInterval_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RrgOffsetAccountInterval_Ru` entity based on its keys.
   * @param dataAreaId Key property. See {@link RrgOffsetAccountInterval_Ru.dataAreaId}.
   * @param fromLedgerDimensionDisplayValue Key property. See {@link RrgOffsetAccountInterval_Ru.fromLedgerDimensionDisplayValue}.
   * @param toLedgerDimensionDisplayValue Key property. See {@link RrgOffsetAccountInterval_Ru.toLedgerDimensionDisplayValue}.
   * @param operationLineId Key property. See {@link RrgOffsetAccountInterval_Ru.operationLineId}.
   * @returns A request builder for creating requests to retrieve one `RrgOffsetAccountInterval_Ru` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fromLedgerDimensionDisplayValue: DeserializedType<T, 'Edm.String'>,
    toLedgerDimensionDisplayValue: DeserializedType<T, 'Edm.String'>,
    operationLineId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<RrgOffsetAccountInterval_Ru<T>, T> {
    return new GetByKeyRequestBuilder<RrgOffsetAccountInterval_Ru<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FromLedgerDimensionDisplayValue: fromLedgerDimensionDisplayValue,
        ToLedgerDimensionDisplayValue: toLedgerDimensionDisplayValue,
        OperationLineId: operationLineId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RrgOffsetAccountInterval_Ru`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RrgOffsetAccountInterval_Ru`.
   */
  update(
    entity: RrgOffsetAccountInterval_Ru<T>
  ): UpdateRequestBuilder<RrgOffsetAccountInterval_Ru<T>, T> {
    return new UpdateRequestBuilder<RrgOffsetAccountInterval_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RrgOffsetAccountInterval_Ru`.
   * @param dataAreaId Key property. See {@link RrgOffsetAccountInterval_Ru.dataAreaId}.
   * @param fromLedgerDimensionDisplayValue Key property. See {@link RrgOffsetAccountInterval_Ru.fromLedgerDimensionDisplayValue}.
   * @param toLedgerDimensionDisplayValue Key property. See {@link RrgOffsetAccountInterval_Ru.toLedgerDimensionDisplayValue}.
   * @param operationLineId Key property. See {@link RrgOffsetAccountInterval_Ru.operationLineId}.
   * @returns A request builder for creating requests that delete an entity of type `RrgOffsetAccountInterval_Ru`.
   */
  delete(
    dataAreaId: string,
    fromLedgerDimensionDisplayValue: string,
    toLedgerDimensionDisplayValue: string,
    operationLineId: string
  ): DeleteRequestBuilder<RrgOffsetAccountInterval_Ru<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RrgOffsetAccountInterval_Ru`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RrgOffsetAccountInterval_Ru` by taking the entity as a parameter.
   */
  delete(
    entity: RrgOffsetAccountInterval_Ru<T>
  ): DeleteRequestBuilder<RrgOffsetAccountInterval_Ru<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fromLedgerDimensionDisplayValue?: string,
    toLedgerDimensionDisplayValue?: string,
    operationLineId?: string
  ): DeleteRequestBuilder<RrgOffsetAccountInterval_Ru<T>, T> {
    return new DeleteRequestBuilder<RrgOffsetAccountInterval_Ru<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RrgOffsetAccountInterval_Ru
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FromLedgerDimensionDisplayValue: fromLedgerDimensionDisplayValue!,
            ToLedgerDimensionDisplayValue: toLedgerDimensionDisplayValue!,
            OperationLineId: operationLineId!
          }
    );
  }
}
