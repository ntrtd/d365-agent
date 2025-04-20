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
import { RrgAccountInterval_Ruv2 } from './RrgAccountInterval_Ruv2';

/**
 * Request builder class for operations supported on the {@link RrgAccountInterval_Ruv2} entity.
 */
export class RrgAccountInterval_Ruv2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RrgAccountInterval_Ruv2<T>, T> {
  /**
   * Returns a request builder for querying all `RrgAccountInterval_Ruv2` entities.
   * @returns A request builder for creating requests to retrieve all `RrgAccountInterval_Ruv2` entities.
   */
  getAll(): GetAllRequestBuilder<RrgAccountInterval_Ruv2<T>, T> {
    return new GetAllRequestBuilder<RrgAccountInterval_Ruv2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RrgAccountInterval_Ruv2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RrgAccountInterval_Ruv2`.
   */
  create(
    entity: RrgAccountInterval_Ruv2<T>
  ): CreateRequestBuilder<RrgAccountInterval_Ruv2<T>, T> {
    return new CreateRequestBuilder<RrgAccountInterval_Ruv2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RrgAccountInterval_Ruv2` entity based on its keys.
   * @param dataAreaId Key property. See {@link RrgAccountInterval_Ruv2.dataAreaId}.
   * @param fromMainAccountId Key property. See {@link RrgAccountInterval_Ruv2.fromMainAccountId}.
   * @param toMainAccountId Key property. See {@link RrgAccountInterval_Ruv2.toMainAccountId}.
   * @param operationLineId Key property. See {@link RrgAccountInterval_Ruv2.operationLineId}.
   * @returns A request builder for creating requests to retrieve one `RrgAccountInterval_Ruv2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fromMainAccountId: DeserializedType<T, 'Edm.String'>,
    toMainAccountId: DeserializedType<T, 'Edm.String'>,
    operationLineId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<RrgAccountInterval_Ruv2<T>, T> {
    return new GetByKeyRequestBuilder<RrgAccountInterval_Ruv2<T>, T>(
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
   * Returns a request builder for updating an entity of type `RrgAccountInterval_Ruv2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RrgAccountInterval_Ruv2`.
   */
  update(
    entity: RrgAccountInterval_Ruv2<T>
  ): UpdateRequestBuilder<RrgAccountInterval_Ruv2<T>, T> {
    return new UpdateRequestBuilder<RrgAccountInterval_Ruv2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RrgAccountInterval_Ruv2`.
   * @param dataAreaId Key property. See {@link RrgAccountInterval_Ruv2.dataAreaId}.
   * @param fromMainAccountId Key property. See {@link RrgAccountInterval_Ruv2.fromMainAccountId}.
   * @param toMainAccountId Key property. See {@link RrgAccountInterval_Ruv2.toMainAccountId}.
   * @param operationLineId Key property. See {@link RrgAccountInterval_Ruv2.operationLineId}.
   * @returns A request builder for creating requests that delete an entity of type `RrgAccountInterval_Ruv2`.
   */
  delete(
    dataAreaId: string,
    fromMainAccountId: string,
    toMainAccountId: string,
    operationLineId: string
  ): DeleteRequestBuilder<RrgAccountInterval_Ruv2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RrgAccountInterval_Ruv2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RrgAccountInterval_Ruv2` by taking the entity as a parameter.
   */
  delete(
    entity: RrgAccountInterval_Ruv2<T>
  ): DeleteRequestBuilder<RrgAccountInterval_Ruv2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fromMainAccountId?: string,
    toMainAccountId?: string,
    operationLineId?: string
  ): DeleteRequestBuilder<RrgAccountInterval_Ruv2<T>, T> {
    return new DeleteRequestBuilder<RrgAccountInterval_Ruv2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RrgAccountInterval_Ruv2
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
