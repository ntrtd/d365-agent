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
import { RetailEodTransactionTenderDeclarationTransBiEntities } from './RetailEodTransactionTenderDeclarationTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailEodTransactionTenderDeclarationTransBiEntities} entity.
 */
export class RetailEodTransactionTenderDeclarationTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  RetailEodTransactionTenderDeclarationTransBiEntities<T>,
  T
> {
  /**
   * Returns a request builder for querying all `RetailEodTransactionTenderDeclarationTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEodTransactionTenderDeclarationTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailEodTransactionTenderDeclarationTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailEodTransactionTenderDeclarationTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailEodTransactionTenderDeclarationTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEodTransactionTenderDeclarationTransBiEntities`.
   */
  create(
    entity: RetailEodTransactionTenderDeclarationTransBiEntities<T>
  ): CreateRequestBuilder<
    RetailEodTransactionTenderDeclarationTransBiEntities<T>,
    T
  > {
    return new CreateRequestBuilder<
      RetailEodTransactionTenderDeclarationTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailEodTransactionTenderDeclarationTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailEodTransactionTenderDeclarationTransBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodTransactionTenderDeclarationTransBiEntities.statementId}.
   * @param retailTransactionTenderDeclarationTrans Key property. See {@link RetailEodTransactionTenderDeclarationTransBiEntities.retailTransactionTenderDeclarationTrans}.
   * @returns A request builder for creating requests to retrieve one `RetailEodTransactionTenderDeclarationTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    statementId: DeserializedType<T, 'Edm.String'>,
    retailTransactionTenderDeclarationTrans: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<
    RetailEodTransactionTenderDeclarationTransBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailEodTransactionTenderDeclarationTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      StatementId: statementId,
      RetailTransactionTenderDeclarationTrans:
        retailTransactionTenderDeclarationTrans
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEodTransactionTenderDeclarationTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEodTransactionTenderDeclarationTransBiEntities`.
   */
  update(
    entity: RetailEodTransactionTenderDeclarationTransBiEntities<T>
  ): UpdateRequestBuilder<
    RetailEodTransactionTenderDeclarationTransBiEntities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      RetailEodTransactionTenderDeclarationTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionTenderDeclarationTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailEodTransactionTenderDeclarationTransBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodTransactionTenderDeclarationTransBiEntities.statementId}.
   * @param retailTransactionTenderDeclarationTrans Key property. See {@link RetailEodTransactionTenderDeclarationTransBiEntities.retailTransactionTenderDeclarationTrans}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionTenderDeclarationTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    statementId: string,
    retailTransactionTenderDeclarationTrans: BigNumber
  ): DeleteRequestBuilder<
    RetailEodTransactionTenderDeclarationTransBiEntities<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionTenderDeclarationTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionTenderDeclarationTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEodTransactionTenderDeclarationTransBiEntities<T>
  ): DeleteRequestBuilder<
    RetailEodTransactionTenderDeclarationTransBiEntities<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    statementId?: string,
    retailTransactionTenderDeclarationTrans?: BigNumber
  ): DeleteRequestBuilder<
    RetailEodTransactionTenderDeclarationTransBiEntities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      RetailEodTransactionTenderDeclarationTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      RetailEodTransactionTenderDeclarationTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StatementId: statementId!,
            RetailTransactionTenderDeclarationTrans:
              retailTransactionTenderDeclarationTrans!
          }
    );
  }
}
