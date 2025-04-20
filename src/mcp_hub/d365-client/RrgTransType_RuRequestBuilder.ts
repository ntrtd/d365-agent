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
import { RrgTransType_Ru } from './RrgTransType_Ru';
import { LedgerTransType } from './LedgerTransType';

/**
 * Request builder class for operations supported on the {@link RrgTransType_Ru} entity.
 */
export class RrgTransType_RuRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RrgTransType_Ru<T>, T> {
  /**
   * Returns a request builder for querying all `RrgTransType_Ru` entities.
   * @returns A request builder for creating requests to retrieve all `RrgTransType_Ru` entities.
   */
  getAll(): GetAllRequestBuilder<RrgTransType_Ru<T>, T> {
    return new GetAllRequestBuilder<RrgTransType_Ru<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RrgTransType_Ru` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RrgTransType_Ru`.
   */
  create(
    entity: RrgTransType_Ru<T>
  ): CreateRequestBuilder<RrgTransType_Ru<T>, T> {
    return new CreateRequestBuilder<RrgTransType_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RrgTransType_Ru` entity based on its keys.
   * @param dataAreaId Key property. See {@link RrgTransType_Ru.dataAreaId}.
   * @param transType Key property. See {@link RrgTransType_Ru.transType}.
   * @param refTableName Key property. See {@link RrgTransType_Ru.refTableName}.
   * @param refLineId Key property. See {@link RrgTransType_Ru.refLineId}.
   * @returns A request builder for creating requests to retrieve one `RrgTransType_Ru` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LedgerTransType'
    >,
    refTableName: DeserializedType<T, 'Edm.String'>,
    refLineId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RrgTransType_Ru<T>, T> {
    return new GetByKeyRequestBuilder<RrgTransType_Ru<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TransType: transType,
      RefTableName: refTableName,
      RefLineId: refLineId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RrgTransType_Ru`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RrgTransType_Ru`.
   */
  update(
    entity: RrgTransType_Ru<T>
  ): UpdateRequestBuilder<RrgTransType_Ru<T>, T> {
    return new UpdateRequestBuilder<RrgTransType_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RrgTransType_Ru`.
   * @param dataAreaId Key property. See {@link RrgTransType_Ru.dataAreaId}.
   * @param transType Key property. See {@link RrgTransType_Ru.transType}.
   * @param refTableName Key property. See {@link RrgTransType_Ru.refTableName}.
   * @param refLineId Key property. See {@link RrgTransType_Ru.refLineId}.
   * @returns A request builder for creating requests that delete an entity of type `RrgTransType_Ru`.
   */
  delete(
    dataAreaId: string,
    transType: LedgerTransType,
    refTableName: string,
    refLineId: string
  ): DeleteRequestBuilder<RrgTransType_Ru<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RrgTransType_Ru`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RrgTransType_Ru` by taking the entity as a parameter.
   */
  delete(
    entity: RrgTransType_Ru<T>
  ): DeleteRequestBuilder<RrgTransType_Ru<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transType?: LedgerTransType,
    refTableName?: string,
    refLineId?: string
  ): DeleteRequestBuilder<RrgTransType_Ru<T>, T> {
    return new DeleteRequestBuilder<RrgTransType_Ru<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RrgTransType_Ru
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransType: transType!,
            RefTableName: refTableName!,
            RefLineId: refLineId!
          }
    );
  }
}
