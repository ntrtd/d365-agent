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
import { RetailEodTransactionPaymentTransBiEntities } from './RetailEodTransactionPaymentTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailEodTransactionPaymentTransBiEntities} entity.
 */
export class RetailEodTransactionPaymentTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailEodTransactionPaymentTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailEodTransactionPaymentTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEodTransactionPaymentTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailEodTransactionPaymentTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailEodTransactionPaymentTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailEodTransactionPaymentTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEodTransactionPaymentTransBiEntities`.
   */
  create(
    entity: RetailEodTransactionPaymentTransBiEntities<T>
  ): CreateRequestBuilder<RetailEodTransactionPaymentTransBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailEodTransactionPaymentTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailEodTransactionPaymentTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailEodTransactionPaymentTransBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodTransactionPaymentTransBiEntities.statementId}.
   * @returns A request builder for creating requests to retrieve one `RetailEodTransactionPaymentTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    statementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailEodTransactionPaymentTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailEodTransactionPaymentTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      StatementId: statementId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEodTransactionPaymentTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEodTransactionPaymentTransBiEntities`.
   */
  update(
    entity: RetailEodTransactionPaymentTransBiEntities<T>
  ): UpdateRequestBuilder<RetailEodTransactionPaymentTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailEodTransactionPaymentTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionPaymentTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailEodTransactionPaymentTransBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodTransactionPaymentTransBiEntities.statementId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionPaymentTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    statementId: string
  ): DeleteRequestBuilder<RetailEodTransactionPaymentTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionPaymentTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionPaymentTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEodTransactionPaymentTransBiEntities<T>
  ): DeleteRequestBuilder<RetailEodTransactionPaymentTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    statementId?: string
  ): DeleteRequestBuilder<RetailEodTransactionPaymentTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailEodTransactionPaymentTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailEodTransactionPaymentTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StatementId: statementId!
          }
    );
  }
}
