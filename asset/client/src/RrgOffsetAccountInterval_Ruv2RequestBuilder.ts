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
import { RrgOffsetAccountInterval_Ruv2 } from './RrgOffsetAccountInterval_Ruv2';

/**
 * Request builder class for operations supported on the {@link RrgOffsetAccountInterval_Ruv2} entity.
 */
export class RrgOffsetAccountInterval_Ruv2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RrgOffsetAccountInterval_Ruv2<T>, T> {
  /**
   * Returns a request builder for querying all `RrgOffsetAccountInterval_Ruv2` entities.
   * @returns A request builder for creating requests to retrieve all `RrgOffsetAccountInterval_Ruv2` entities.
   */
  getAll(): GetAllRequestBuilder<RrgOffsetAccountInterval_Ruv2<T>, T> {
    return new GetAllRequestBuilder<RrgOffsetAccountInterval_Ruv2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RrgOffsetAccountInterval_Ruv2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RrgOffsetAccountInterval_Ruv2`.
   */
  create(
    entity: RrgOffsetAccountInterval_Ruv2<T>
  ): CreateRequestBuilder<RrgOffsetAccountInterval_Ruv2<T>, T> {
    return new CreateRequestBuilder<RrgOffsetAccountInterval_Ruv2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RrgOffsetAccountInterval_Ruv2` entity based on its keys.
   * @param dataAreaId Key property. See {@link RrgOffsetAccountInterval_Ruv2.dataAreaId}.
   * @param fromMainAccountId Key property. See {@link RrgOffsetAccountInterval_Ruv2.fromMainAccountId}.
   * @param toMainAccountId Key property. See {@link RrgOffsetAccountInterval_Ruv2.toMainAccountId}.
   * @param operationLineId Key property. See {@link RrgOffsetAccountInterval_Ruv2.operationLineId}.
   * @returns A request builder for creating requests to retrieve one `RrgOffsetAccountInterval_Ruv2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fromMainAccountId: DeserializedType<T, 'Edm.String'>,
    toMainAccountId: DeserializedType<T, 'Edm.String'>,
    operationLineId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<RrgOffsetAccountInterval_Ruv2<T>, T> {
    return new GetByKeyRequestBuilder<RrgOffsetAccountInterval_Ruv2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FromMainAccountId: fromMainAccountId,
        ToMainAccountId: toMainAccountId,
        OperationLineId: operationLineId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RrgOffsetAccountInterval_Ruv2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RrgOffsetAccountInterval_Ruv2`.
   */
  update(
    entity: RrgOffsetAccountInterval_Ruv2<T>
  ): UpdateRequestBuilder<RrgOffsetAccountInterval_Ruv2<T>, T> {
    return new UpdateRequestBuilder<RrgOffsetAccountInterval_Ruv2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RrgOffsetAccountInterval_Ruv2`.
   * @param dataAreaId Key property. See {@link RrgOffsetAccountInterval_Ruv2.dataAreaId}.
   * @param fromMainAccountId Key property. See {@link RrgOffsetAccountInterval_Ruv2.fromMainAccountId}.
   * @param toMainAccountId Key property. See {@link RrgOffsetAccountInterval_Ruv2.toMainAccountId}.
   * @param operationLineId Key property. See {@link RrgOffsetAccountInterval_Ruv2.operationLineId}.
   * @returns A request builder for creating requests that delete an entity of type `RrgOffsetAccountInterval_Ruv2`.
   */
  delete(
    dataAreaId: string,
    fromMainAccountId: string,
    toMainAccountId: string,
    operationLineId: string
  ): DeleteRequestBuilder<RrgOffsetAccountInterval_Ruv2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RrgOffsetAccountInterval_Ruv2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RrgOffsetAccountInterval_Ruv2` by taking the entity as a parameter.
   */
  delete(
    entity: RrgOffsetAccountInterval_Ruv2<T>
  ): DeleteRequestBuilder<RrgOffsetAccountInterval_Ruv2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fromMainAccountId?: string,
    toMainAccountId?: string,
    operationLineId?: string
  ): DeleteRequestBuilder<RrgOffsetAccountInterval_Ruv2<T>, T> {
    return new DeleteRequestBuilder<RrgOffsetAccountInterval_Ruv2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RrgOffsetAccountInterval_Ruv2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FromMainAccountId: fromMainAccountId!,
            ToMainAccountId: toMainAccountId!,
            OperationLineId: operationLineId!
          }
    );
  }
}
