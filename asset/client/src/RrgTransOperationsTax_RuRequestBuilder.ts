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
import { RrgTransOperationsTax_Ru } from './RrgTransOperationsTax_Ru';
import { OperationsTax } from './OperationsTax';

/**
 * Request builder class for operations supported on the {@link RrgTransOperationsTax_Ru} entity.
 */
export class RrgTransOperationsTax_RuRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RrgTransOperationsTax_Ru<T>, T> {
  /**
   * Returns a request builder for querying all `RrgTransOperationsTax_Ru` entities.
   * @returns A request builder for creating requests to retrieve all `RrgTransOperationsTax_Ru` entities.
   */
  getAll(): GetAllRequestBuilder<RrgTransOperationsTax_Ru<T>, T> {
    return new GetAllRequestBuilder<RrgTransOperationsTax_Ru<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RrgTransOperationsTax_Ru` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RrgTransOperationsTax_Ru`.
   */
  create(
    entity: RrgTransOperationsTax_Ru<T>
  ): CreateRequestBuilder<RrgTransOperationsTax_Ru<T>, T> {
    return new CreateRequestBuilder<RrgTransOperationsTax_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RrgTransOperationsTax_Ru` entity based on its keys.
   * @param dataAreaId Key property. See {@link RrgTransOperationsTax_Ru.dataAreaId}.
   * @param operationsTax Key property. See {@link RrgTransOperationsTax_Ru.operationsTax}.
   * @param refTableName Key property. See {@link RrgTransOperationsTax_Ru.refTableName}.
   * @param refLineId Key property. See {@link RrgTransOperationsTax_Ru.refLineId}.
   * @returns A request builder for creating requests to retrieve one `RrgTransOperationsTax_Ru` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operationsTax: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.OperationsTax'
    >,
    refTableName: DeserializedType<T, 'Edm.String'>,
    refLineId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RrgTransOperationsTax_Ru<T>, T> {
    return new GetByKeyRequestBuilder<RrgTransOperationsTax_Ru<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OperationsTax: operationsTax,
        RefTableName: refTableName,
        RefLineId: refLineId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RrgTransOperationsTax_Ru`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RrgTransOperationsTax_Ru`.
   */
  update(
    entity: RrgTransOperationsTax_Ru<T>
  ): UpdateRequestBuilder<RrgTransOperationsTax_Ru<T>, T> {
    return new UpdateRequestBuilder<RrgTransOperationsTax_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RrgTransOperationsTax_Ru`.
   * @param dataAreaId Key property. See {@link RrgTransOperationsTax_Ru.dataAreaId}.
   * @param operationsTax Key property. See {@link RrgTransOperationsTax_Ru.operationsTax}.
   * @param refTableName Key property. See {@link RrgTransOperationsTax_Ru.refTableName}.
   * @param refLineId Key property. See {@link RrgTransOperationsTax_Ru.refLineId}.
   * @returns A request builder for creating requests that delete an entity of type `RrgTransOperationsTax_Ru`.
   */
  delete(
    dataAreaId: string,
    operationsTax: OperationsTax,
    refTableName: string,
    refLineId: string
  ): DeleteRequestBuilder<RrgTransOperationsTax_Ru<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RrgTransOperationsTax_Ru`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RrgTransOperationsTax_Ru` by taking the entity as a parameter.
   */
  delete(
    entity: RrgTransOperationsTax_Ru<T>
  ): DeleteRequestBuilder<RrgTransOperationsTax_Ru<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operationsTax?: OperationsTax,
    refTableName?: string,
    refLineId?: string
  ): DeleteRequestBuilder<RrgTransOperationsTax_Ru<T>, T> {
    return new DeleteRequestBuilder<RrgTransOperationsTax_Ru<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RrgTransOperationsTax_Ru
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperationsTax: operationsTax!,
            RefTableName: refTableName!,
            RefLineId: refLineId!
          }
    );
  }
}
