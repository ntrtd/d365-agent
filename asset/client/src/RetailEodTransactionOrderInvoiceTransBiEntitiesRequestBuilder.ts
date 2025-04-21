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
import { RetailEodTransactionOrderInvoiceTransBiEntities } from './RetailEodTransactionOrderInvoiceTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailEodTransactionOrderInvoiceTransBiEntities} entity.
 */
export class RetailEodTransactionOrderInvoiceTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  RetailEodTransactionOrderInvoiceTransBiEntities<T>,
  T
> {
  /**
   * Returns a request builder for querying all `RetailEodTransactionOrderInvoiceTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEodTransactionOrderInvoiceTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailEodTransactionOrderInvoiceTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailEodTransactionOrderInvoiceTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailEodTransactionOrderInvoiceTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEodTransactionOrderInvoiceTransBiEntities`.
   */
  create(
    entity: RetailEodTransactionOrderInvoiceTransBiEntities<T>
  ): CreateRequestBuilder<
    RetailEodTransactionOrderInvoiceTransBiEntities<T>,
    T
  > {
    return new CreateRequestBuilder<
      RetailEodTransactionOrderInvoiceTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailEodTransactionOrderInvoiceTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailEodTransactionOrderInvoiceTransBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodTransactionOrderInvoiceTransBiEntities.statementId}.
   * @returns A request builder for creating requests to retrieve one `RetailEodTransactionOrderInvoiceTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    statementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    RetailEodTransactionOrderInvoiceTransBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailEodTransactionOrderInvoiceTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      StatementId: statementId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEodTransactionOrderInvoiceTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEodTransactionOrderInvoiceTransBiEntities`.
   */
  update(
    entity: RetailEodTransactionOrderInvoiceTransBiEntities<T>
  ): UpdateRequestBuilder<
    RetailEodTransactionOrderInvoiceTransBiEntities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      RetailEodTransactionOrderInvoiceTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionOrderInvoiceTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailEodTransactionOrderInvoiceTransBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodTransactionOrderInvoiceTransBiEntities.statementId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionOrderInvoiceTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    statementId: string
  ): DeleteRequestBuilder<
    RetailEodTransactionOrderInvoiceTransBiEntities<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionOrderInvoiceTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionOrderInvoiceTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEodTransactionOrderInvoiceTransBiEntities<T>
  ): DeleteRequestBuilder<
    RetailEodTransactionOrderInvoiceTransBiEntities<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    statementId?: string
  ): DeleteRequestBuilder<
    RetailEodTransactionOrderInvoiceTransBiEntities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      RetailEodTransactionOrderInvoiceTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      RetailEodTransactionOrderInvoiceTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StatementId: statementId!
          }
    );
  }
}
