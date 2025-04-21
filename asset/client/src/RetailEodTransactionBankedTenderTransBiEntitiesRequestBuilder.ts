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
import { RetailEodTransactionBankedTenderTransBiEntities } from './RetailEodTransactionBankedTenderTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailEodTransactionBankedTenderTransBiEntities} entity.
 */
export class RetailEodTransactionBankedTenderTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  RetailEodTransactionBankedTenderTransBiEntities<T>,
  T
> {
  /**
   * Returns a request builder for querying all `RetailEodTransactionBankedTenderTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEodTransactionBankedTenderTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailEodTransactionBankedTenderTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailEodTransactionBankedTenderTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailEodTransactionBankedTenderTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEodTransactionBankedTenderTransBiEntities`.
   */
  create(
    entity: RetailEodTransactionBankedTenderTransBiEntities<T>
  ): CreateRequestBuilder<
    RetailEodTransactionBankedTenderTransBiEntities<T>,
    T
  > {
    return new CreateRequestBuilder<
      RetailEodTransactionBankedTenderTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailEodTransactionBankedTenderTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailEodTransactionBankedTenderTransBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodTransactionBankedTenderTransBiEntities.statementId}.
   * @returns A request builder for creating requests to retrieve one `RetailEodTransactionBankedTenderTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    statementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    RetailEodTransactionBankedTenderTransBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailEodTransactionBankedTenderTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      StatementId: statementId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEodTransactionBankedTenderTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEodTransactionBankedTenderTransBiEntities`.
   */
  update(
    entity: RetailEodTransactionBankedTenderTransBiEntities<T>
  ): UpdateRequestBuilder<
    RetailEodTransactionBankedTenderTransBiEntities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      RetailEodTransactionBankedTenderTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionBankedTenderTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailEodTransactionBankedTenderTransBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodTransactionBankedTenderTransBiEntities.statementId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionBankedTenderTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    statementId: string
  ): DeleteRequestBuilder<
    RetailEodTransactionBankedTenderTransBiEntities<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionBankedTenderTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionBankedTenderTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEodTransactionBankedTenderTransBiEntities<T>
  ): DeleteRequestBuilder<
    RetailEodTransactionBankedTenderTransBiEntities<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    statementId?: string
  ): DeleteRequestBuilder<
    RetailEodTransactionBankedTenderTransBiEntities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      RetailEodTransactionBankedTenderTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      RetailEodTransactionBankedTenderTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StatementId: statementId!
          }
    );
  }
}
