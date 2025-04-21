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
import { AuditTrails } from './AuditTrails';

/**
 * Request builder class for operations supported on the {@link AuditTrails} entity.
 */
export class AuditTrailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AuditTrails<T>, T> {
  /**
   * Returns a request builder for querying all `AuditTrails` entities.
   * @returns A request builder for creating requests to retrieve all `AuditTrails` entities.
   */
  getAll(): GetAllRequestBuilder<AuditTrails<T>, T> {
    return new GetAllRequestBuilder<AuditTrails<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AuditTrails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AuditTrails`.
   */
  create(entity: AuditTrails<T>): CreateRequestBuilder<AuditTrails<T>, T> {
    return new CreateRequestBuilder<AuditTrails<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AuditTrails` entity based on its keys.
   * @param dataAreaId Key property. See {@link AuditTrails.dataAreaId}.
   * @param transactionId Key property. See {@link AuditTrails.transactionId}.
   * @returns A request builder for creating requests to retrieve one `AuditTrails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AuditTrails<T>, T> {
    return new GetByKeyRequestBuilder<AuditTrails<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TransactionId: transactionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AuditTrails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AuditTrails`.
   */
  update(entity: AuditTrails<T>): UpdateRequestBuilder<AuditTrails<T>, T> {
    return new UpdateRequestBuilder<AuditTrails<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AuditTrails`.
   * @param dataAreaId Key property. See {@link AuditTrails.dataAreaId}.
   * @param transactionId Key property. See {@link AuditTrails.transactionId}.
   * @returns A request builder for creating requests that delete an entity of type `AuditTrails`.
   */
  delete(
    dataAreaId: string,
    transactionId: BigNumber
  ): DeleteRequestBuilder<AuditTrails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AuditTrails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AuditTrails` by taking the entity as a parameter.
   */
  delete(entity: AuditTrails<T>): DeleteRequestBuilder<AuditTrails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionId?: BigNumber
  ): DeleteRequestBuilder<AuditTrails<T>, T> {
    return new DeleteRequestBuilder<AuditTrails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AuditTrails
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionId: transactionId!
          }
    );
  }
}
