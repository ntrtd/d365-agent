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
import { RrgAccountInterval_Ru } from './RrgAccountInterval_Ru';

/**
 * Request builder class for operations supported on the {@link RrgAccountInterval_Ru} entity.
 */
export class RrgAccountInterval_RuRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RrgAccountInterval_Ru<T>, T> {
  /**
   * Returns a request builder for querying all `RrgAccountInterval_Ru` entities.
   * @returns A request builder for creating requests to retrieve all `RrgAccountInterval_Ru` entities.
   */
  getAll(): GetAllRequestBuilder<RrgAccountInterval_Ru<T>, T> {
    return new GetAllRequestBuilder<RrgAccountInterval_Ru<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RrgAccountInterval_Ru` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RrgAccountInterval_Ru`.
   */
  create(
    entity: RrgAccountInterval_Ru<T>
  ): CreateRequestBuilder<RrgAccountInterval_Ru<T>, T> {
    return new CreateRequestBuilder<RrgAccountInterval_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RrgAccountInterval_Ru` entity based on its keys.
   * @param dataAreaId Key property. See {@link RrgAccountInterval_Ru.dataAreaId}.
   * @param fromLedgerDimensionAccountIdDisplayValue Key property. See {@link RrgAccountInterval_Ru.fromLedgerDimensionAccountIdDisplayValue}.
   * @param toLedgerDimensionAccountIdDisplayValue Key property. See {@link RrgAccountInterval_Ru.toLedgerDimensionAccountIdDisplayValue}.
   * @param operationLineId Key property. See {@link RrgAccountInterval_Ru.operationLineId}.
   * @returns A request builder for creating requests to retrieve one `RrgAccountInterval_Ru` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fromLedgerDimensionAccountIdDisplayValue: DeserializedType<T, 'Edm.String'>,
    toLedgerDimensionAccountIdDisplayValue: DeserializedType<T, 'Edm.String'>,
    operationLineId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<RrgAccountInterval_Ru<T>, T> {
    return new GetByKeyRequestBuilder<RrgAccountInterval_Ru<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FromLedgerDimensionAccountIdDisplayValue:
          fromLedgerDimensionAccountIdDisplayValue,
        ToLedgerDimensionAccountIdDisplayValue:
          toLedgerDimensionAccountIdDisplayValue,
        OperationLineId: operationLineId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RrgAccountInterval_Ru`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RrgAccountInterval_Ru`.
   */
  update(
    entity: RrgAccountInterval_Ru<T>
  ): UpdateRequestBuilder<RrgAccountInterval_Ru<T>, T> {
    return new UpdateRequestBuilder<RrgAccountInterval_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RrgAccountInterval_Ru`.
   * @param dataAreaId Key property. See {@link RrgAccountInterval_Ru.dataAreaId}.
   * @param fromLedgerDimensionAccountIdDisplayValue Key property. See {@link RrgAccountInterval_Ru.fromLedgerDimensionAccountIdDisplayValue}.
   * @param toLedgerDimensionAccountIdDisplayValue Key property. See {@link RrgAccountInterval_Ru.toLedgerDimensionAccountIdDisplayValue}.
   * @param operationLineId Key property. See {@link RrgAccountInterval_Ru.operationLineId}.
   * @returns A request builder for creating requests that delete an entity of type `RrgAccountInterval_Ru`.
   */
  delete(
    dataAreaId: string,
    fromLedgerDimensionAccountIdDisplayValue: string,
    toLedgerDimensionAccountIdDisplayValue: string,
    operationLineId: string
  ): DeleteRequestBuilder<RrgAccountInterval_Ru<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RrgAccountInterval_Ru`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RrgAccountInterval_Ru` by taking the entity as a parameter.
   */
  delete(
    entity: RrgAccountInterval_Ru<T>
  ): DeleteRequestBuilder<RrgAccountInterval_Ru<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fromLedgerDimensionAccountIdDisplayValue?: string,
    toLedgerDimensionAccountIdDisplayValue?: string,
    operationLineId?: string
  ): DeleteRequestBuilder<RrgAccountInterval_Ru<T>, T> {
    return new DeleteRequestBuilder<RrgAccountInterval_Ru<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RrgAccountInterval_Ru
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FromLedgerDimensionAccountIdDisplayValue:
              fromLedgerDimensionAccountIdDisplayValue!,
            ToLedgerDimensionAccountIdDisplayValue:
              toLedgerDimensionAccountIdDisplayValue!,
            OperationLineId: operationLineId!
          }
    );
  }
}
